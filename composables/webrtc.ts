import { io } from "socket.io-client";

export const useUseWebRTC = (roomId: any) => {
  interface Message { message: string, sentByYou: boolean }
  const messages = ref<Message[]>([])
  const localVideo = ref();
  const remoteVideo = ref();
  let localStream: MediaStream;
  let remoteStream: any;
  let peerConnection: any;
  const socket = io("http://localhost:4000");
  let channel: any;

  let constraints = {
    video: {
      width: { min: 1280, ideal: 1920, max: 1920 },
      height: { min: 720, ideal: 1080, max: 1080 },
      facingMode: "user",
    },
    audio: true,
  };

  const servers = {
    iceServers: [
      {
        urls: ["stun:stun.l.google.com:19302", "stun:stun2.l.google.com:19302"],
      },
    ],
  };

  let createPeerConnection = async (memberId: string) => {
    peerConnection = new RTCPeerConnection(servers);
    channel = peerConnection.createDataChannel("chat", {
      negotiated: true,
      id: 0,
    });
    channel.onopen = (event: any) => {
      //channel.send("Hi!");
    };
    channel.onmessage = (event: any) => {
      messages.value.push({message: event.data, sentByYou: false});
    };

    remoteStream = await new MediaStream();
    console.log(remoteStream)
    remoteVideo.value = remoteStream;
    //document.getElementById('user-2').style.display = 'block'
    //document.getElementById('user-1').classList.add('small')

    if (!localStream) {
      localStream = await navigator.mediaDevices.getUserMedia(constraints);
      localVideo.value = localStream;
    }

    localStream.getTracks().forEach((track: any) => {
      peerConnection.addTrack(track, localStream);
    });

    peerConnection.ontrack = (
      event: { streams: { getTracks: () => any[] }[] },
    ) => {
      event.streams[0].getTracks().forEach((track: any) => {
        remoteStream.addTrack(track);
      });
    };

    peerConnection.onicecandidate = async (event: { candidate: any }) => {
      if (event.candidate) {
        const data = {
          candidate: event.candidate,
          memberId: memberId,
        };
        socket.emit("candidate", data);
      }
    };
  };

  let addAnswer = async (answer: RTCSessionDescriptionInit) => {
    if (!peerConnection.currentRemoteDescription) {
      let newAnswer = new RTCSessionDescription(answer);
      await peerConnection.setRemoteDescription(newAnswer);
    }
  };

  let createAnswer = async (memberId: any, offer: any) => {
    await createPeerConnection(memberId);

    let newOffer = new RTCSessionDescription(offer);

    await peerConnection.setRemoteDescription(newOffer)
      .catch((error: any) => {
        console.error("Error setting remote description:", error);
      });

    let answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);

    const data = {
      answer: answer,
      memberId: memberId,
    };

    await socket.emit("answer", data);
  };

  let handleMessageFromPeer = async (message: any) => {
    console.log(message);
    if (message.type === "offer") {
      createAnswer(message.memberId, message.offer);
    }

    if (message.type === "answer") {
      addAnswer(message.answer);
    }

    if (message.type === "candidate") {
      if (peerConnection) {
        try {
          await peerConnection.addIceCandidate(message.candidate);
          console.log("ICE candidate added successfully.");
          console.log(peerConnection.iceConnectionState);
        } catch (error) {
          console.error("Error adding ICE candidate:", error);
        }
      }
    }
  };

  let createOffer = async (memberId: string) => {
    await createPeerConnection(memberId);
    let offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    const data = {
      offer: offer,
      memberId: memberId,
    };
    await socket.emit("offer", data);
  };

  onMounted(async () => {
    socket.emit("join-room", roomId);

    socket.on("initiate-offer", createOffer);

    socket.on("MessageFromPeer", handleMessageFromPeer);

    localStream = await navigator.mediaDevices.getUserMedia(constraints);
    localVideo.value = localStream;
  });

  const sendMessage = (message: string) => {
    channel.send(message);
  }

  return {
    localVideo,
    remoteVideo,
    sendMessage,
    messages,
  };
};

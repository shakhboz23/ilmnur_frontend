<template>
  <div class="main">
    <vue-webrtc id="dkslkds"></vue-webrtc>
    <div class="main__left">
      <div class="main__videos">
        <div id="video-grid"></div>
      </div>
      <div class="main__controls">
        <div class="main__controls_block">
          <div
            class="main__controls_button"
            @click="muteUnmute"
            v-bind:class="{ active: isAudioEnabled }"
          >
            <i
              :class="
                isAudioEnabled ? 'fa fa-microphone' : 'fa fa-microphone-slash'
              "
            ></i>
            <span>{{ isAudioEnabled ? "Mute" : "Unmute" }}</span>
          </div>
          <div
            class="main__controls_button"
            @click="playStop"
            v-bind:class="{ active: isVideoEnabled }"
          >
            <i
              :class="
                isVideoEnabled ? 'fa fa-video-camera' : 'fa fa-pause-circle'
              "
            ></i>
            <span>{{ isVideoEnabled ? "Pause Video" : "Resume Video" }}</span>
          </div>
        </div>

        <div class="main__controls_block">
          <div class="main__controls_button">
            <i class="fa fa-shield"></i>
            <span>Security</span>
          </div>
          <div class="main__controls_button">
            <i class="fa fa-users"></i>
            <span>Participants</span>
          </div>
          <div class="main__controls_button">
            <i class="fa fa-comment"></i>
            <span>Chat</span>
          </div>
        </div>

        <div class="main__controls_block">
          <div class="main__controls_button leaveMeeting" @click="leaveMeeting">
            <i class="fa fa-times"></i>
            <span>Leave Meeting</span>
          </div>
        </div>
      </div>
    </div>
    <div class="main__right">
      <div class="main__header">
        <h6>Chat</h6>
      </div>
      <div class="main__chat__window">
        <ul class="messages" ref="allMessages"></ul>
      </div>
      <div class="main__message_container">
        <input
          type="text"
          v-model="chatMessage"
          @change="sendMessage"
          placeholder="Type message here.."
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { io } from "socket.io-client";
import Peer from "peerjs";
console.log(Peer);

const chatMessage = ref("");
const allMessages = ref(null);
const myVideoStream = ref(null);
const isAudioEnabled = ref(true);
const isVideoEnabled = ref(true);
const socket = io("http://localhost:4000", {
  reconnectionDelayMax: 10000000, // Maximum delay between reconnection attempts (milliseconds)
  reconnectionAttempts: 5,
  query: {
    id: 454,
  },
});
const peer = new Peer(undefined, {
  path: "/peerjs",
  // host: "/",
  port: "4000",
});

const sendMessage = () => {
  if (chatMessage.value !== "") {
    socket.emit("getAll/message", { message: chatMessage.value });
    chatMessage.value = "";
  }
};

onMounted(() => {
  const router = useRouter();
  const ROOM_ID = router.currentRoute.value.query.id;
  const videoGrid = document.getElementById("video-grid");
  const myVideo = document.createElement("video");
  myVideo.muted = true;

  console.log(peer);

  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: true,
    })
    .then((stream) => {
      myVideoStream.value = stream;
      addVideoStream(myVideo, stream);

      peer.on("call", (call) => {
        call.answer(stream);
        const video = document.createElement("video");
        call.on("stream", (userVideoStream) => {
          addVideoStream(video, userVideoStream);
        });
        connectToNewUser(userId, steam);
      });

      socket.on("user-connected", (userId) => {
        connectToNewUser(userId, stream);
      });

      socket.on("createMessage", (msg) => {
        let li = document.createElement("li");
        li.innerHTML = msg;
        allMessages.value.append(li);
        const chatWindow = document.querySelector(".main__chat__window");
        chatWindow.scrollTop = chatWindow.scrollHeight;
      });
    })
    .catch((err) => {
      console.error("Failed to get local stream", err);
    });

  peer.on("open", (id) => {
    console.log("open", id);
    socket.emit("join-room", { roomId: ROOM_ID, userId: id });
    console.log(socket);
  });

  const connectToNewUser = (userId, stream) => {
    const call = peer.call(userId, stream);
    console.log(call);
    const video = document.createElement("video");
    call.on("stream", (userVideoStream) => {
      addVideoStream(video, userVideoStream);
    });
  };

  const addVideoStream = (videoEl, stream) => {
    videoEl.srcObject = stream;
    videoEl.addEventListener("loadedmetadata", () => {
      videoEl.play();
    });
    videoGrid.append(videoEl);
    updateVideoGridLayout();
  };

  const updateVideoGridLayout = () => {
    const totalUsers = document.getElementsByTagName("video").length;
    if (totalUsers > 1) {
      for (let index = 0; index < totalUsers; index++) {
        document.getElementsByTagName("video")[index].style.width =
          100 / totalUsers + "%";
      }
    }
  };

  const playStop = () => {
    const enabled = myVideoStream.value.getVideoTracks()[0].enabled;
    if (enabled) {
      myVideoStream.value.getVideoTracks()[0].enabled = false;
      isVideoEnabled.value = false;
    } else {
      myVideoStream.value.getVideoTracks()[0].enabled = true;
      isVideoEnabled.value = true;
    }
  };

  const muteUnmute = () => {
    const enabled = myVideoStream.value.getAudioTracks()[0].enabled;
    if (enabled) {
      myVideoStream.value.getAudioTracks()[0].enabled = false;
      isAudioEnabled.value = false;
    } else {
      myVideoStream.value.getAudioTracks()[0].enabled = true;
      isAudioEnabled.value = true;
    }
  };

  const leaveMeeting = () => {
    // Implement leave meeting functionality
  };
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  font-family: "Roboto", sans-serif;
}
#video-grid {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: auto;
}
video {
  display: block;
  flex: 1;
  object-fit: cover;
  border: 5px solid #000;
  max-width: 600px;
}
.main {
  height: 100%;
  display: flex;
}
.main__left {
  flex: 0.8;
  display: flex;
  flex-direction: column;
}
.main__right {
  flex: 0.2;
  display: flex;
  flex-direction: column;
  background-color: #242324;
  border-left: 1px solid #3d3d42;
}
.main__videos {
  flex-grow: 1;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main__controls {
  display: flex;
  background-color: #1c1e20;
  color: #d2d2d2;
  padding: 5px;
  justify-content: space-between;
}
.main__controls_block {
  display: flex;
}
.main__controls_button {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 10px;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  transition: all 0.3s ease-in-out;
  border-radius: 10px;
  margin: 5px;
}
.main__controls_button span {
  margin-top: 10px;
  display: block;
}
.main__controls_button:hover {
  background-color: #34383b;
}
.main__controls_button i {
  font-size: 25px;
}
.leaveMeeting {
  background-color: red;
  color: #fff;
}
.main__header {
  color: #f5f5f5;
  text-align: center;
  padding: 20px;
  border-bottom: 2px solid #3d3d42;
}
.main__chat__window {
  flex-grow: 1;
  overflow: auto;
  padding: 20px 20px 0 20px;
}
.main__message_container {
  padding: 22px 11px;
  display: flex;
}
.main__message_container input {
  flex-grow: 1;
  background-color: transparent;
  border: none;
  color: #f5f5f5;
  user-select: none;
  outline: none;
}

#all_messages li {
  color: #fff;
  list-style: none;
  border-bottom: 1px solid #3d3d42;
  padding: 10px 0;
}
.unmute {
  color: red;
}
</style>

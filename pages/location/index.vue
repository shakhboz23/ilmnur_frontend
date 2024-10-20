<template>
  <div>
    <button @click="getLocation()">Try It</button>

    <p id="demo"></p>
  </div>
</template>

<script setup>
const x = ref("");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      console.log(latitude, longitude)

      //var geocodingUrl = `https://geocode-maps.yandex.ru/1.x/?apikey=YOUR_API_KEY&format=json&geocode=${longitude},${latitude}`;
      var geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAdTBzyFxxxyCP-JZy3dUNfVHW1O3qOQEU`;


        fetch(geocodingUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                var geoObject = data.response.GeoObjectCollection.featureMember[0].GeoObject;
                var locationName = geoObject.metaDataProperty.GeocoderMetaData.text;
                console.log("Location Name: " + locationName);
            })
            .catch(error => {
                console.error("Error fetching location name:", error);
            });
    });
  } else {
    x.value.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.value.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}
onMounted(() => {
  x.value = document.getElementById("demo");
});
</script>

<style lang="scss" scoped></style>

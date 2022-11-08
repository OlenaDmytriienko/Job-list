<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCXDklDAq-hhbhf0ZzYvdmv1xuKFD3ksk&map_ids=a309f534efc0feb2&callback=initMap"></script>


<template>
  <GMapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
  >
    <GMapCluster>
      <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
      />
    </GMapCluster>
  </GMapMap>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      center: {lat: 51.093048, lng: 6.842120},
      markers: [
        {
          position: {
            lat: 51.093048, lng: 6.842120
          },
        }
        , // Along list of clusters
      ]
    }
  }
}
</script>



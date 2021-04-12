<template>
  <div>
    <div class="flex justify-center">
    <q-card class="my-card q-pb-lg " style="margin-bottom:50px;text-align:center;">
      <q-card-section class="text-black" >
        <div >
          <q-btn flat style ="width:500px;height:40px;font-size:28px;color:#32584E;font-weight:bold;" @click="addMarker"><q-icon style="font-size:3rem;" name="place"/> {{question}}</q-btn>
        </div>
      </q-card-section>
    </q-card>
    </div>
    <div class="flex justify-center">
    <GmapMap
      :center="center"
      :zoom="12"
      map-type-id="terrain"
      style="width: 1000px; height: 400px;border:solid;border-radius:1%;"
      id="googleMap"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="toggleInfoWindow(m, index)"
      />
      <gmap-info-window
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen=false"
      >
        <div v-html="infoContent"></div>
      </gmap-info-window>
    </GmapMap>
      </div>
  </div>

</template>

<script>
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import ServiceCovid from "../service/serviceInfoCovid";
import ServiceVaccin from "../service/serviceVaccins";

let today = new Date();
let dd = String(today.getDate()-1).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today =yyyy+'-'+mm+'-'+dd;
const covidService = new ServiceCovid(today);
const vaccinService = new ServiceVaccin();

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAAwXinOfmajFZR32y_Im4lPjRTG8XvMCI',
    libraries: 'places',
    v: '3.26',
  },
  installComponents: true
});
export default {
name: "googleMap",
  props:{
    component:"",
  },
  data() {
    return {
      center: {lat:48.73,lng:2.32},
      currentPlace: null,
      markers: [],
      places: [],
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      infoContent: '',
      currentMidx: null,
      question: "",
    }
  },
  mounted() {
    if(this.component == "statistique")
      this.question ="Où se faire dépister?";
    else
      this.question ="Où se faire vacciner?";

    this.geolocate();
  },
  methods: {
    async addMarker() {
      let resultCentredepistage;
      if(this.component == "statistique")
        resultCentredepistage= await covidService.getCentreDepistageLocal(this.center.lat,this.center.lng)
      else
        resultCentredepistage= await vaccinService.getCentreVaccinLocal(this.center.lat,this.center.lng)

      resultCentredepistage.forEach(centre=>
      {
        if(this.component == "statistique"){
          this.markers.push({centre:true, adresse:centre.adresse_complete,
            centreName: centre.nom_du_centre_de_depistage,
            rendez_vous :centre.rendez_vous,
            cout : centre.cout,
            position: {
              lat: centre.geolocalisation[0],
              lng: centre.geolocalisation[1],
            } });
        }else{
          this.markers.push({centre:true, adresse:(centre.vaccine_center_address +", "+centre.vaccine_center_address_city),
            centreName: centre.name,
            rendez_vous :centre.appointement_access,
            cout : "gratuit",
            position: {
              lat: centre.geo_point_2d[0],
              lng: centre.geo_point_2d[1],
            } });
        }

      })
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.markers.push({centre:false, position: this.center });
      });
    },
    toggleInfoWindow: function (marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = this.getInfoWindowContent(marker);

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    getInfoWindowContent: function (marker) {
      return marker.centre?(
        `<div class="">
          <div>
            <div>
              <div class="m-2"><span style="font-weight: bold;">Nom du centre: </span>
                ${marker.centreName}
              </div>
            </div>
            <div class="m-2"><span style="font-weight: bold;">Adresse:  </span>
              ${marker.adresse}
              <br>
            </div>
            <div class="m-2"><span style="font-weight: bold;">Rendez_vous:  </span>
              ${marker.rendez_vous}
              <br>
            </div>
            <div class="m-2"><span style="font-weight: bold;">Cout:  </span>
              ${marker.cout}
              <br>
            </div>

          </div>
        </div>`): `<div class="">
          <div>
            Votre localisation
          </div>
        </div>`;
    },
  },
}
</script>

<style scoped>

</style>

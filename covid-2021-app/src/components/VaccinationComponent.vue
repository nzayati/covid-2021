<template>
  <q-card class="q-pb-xl">
    <q-card-section>
      <Banniere
        titre="information vaccination "></Banniere>
    </q-card-section>
    <q-card-section>
      <div class="flex justify-center">
        <div class = "row">
          <div class="col"><q-btn style="padding:10px;width:250px; background-color:#32584E;font-size:14px;"text-color="white" label="Info vaccins France" @click="getinfoVaccinsFrance" /></div>
          <div class="col"><q-btn style="padding:10px;width:300px; background-color:#32584E;font-size:14px;"text-color="white" @click ="getinfoVaccinsRegion" label="Info vaccins région" /></div>
        </div>
      </div>
      <br>
      <div class="flex justify-center">
        <div class= "row" >
          <div class="col" style="margin-right:70px;">
            <q-input outlined v-model="date"  mask="date" :rules="['date']" style="width:320px;">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="date" :options="optionsFn">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="col" >
            <q-select color="grey-3" outlined style="color:#32584E;width:250px;" v-model="vaccin" :options="selectOptionsV" label="Sélectionner un vaccin">
              <template v-slot:prepend>
                <q-icon name="coronavirus"/>
              </template>
            </q-select>
          </div>
          <div class="col" style="margin-right:70px;">
            <q-select color="grey-3" outlined style="color:#32584E;width:320px;" v-model="model" :options="selectOptions" label="Sélectionner une région">
              <template v-slot:prepend>
                <q-icon name="place"/>
              </template>
            </q-select>
          </div>
        </div>
      </div>
    </q-card-section>
    <div style="text-align:center; color:red;font-size:14px;font-weight:bold;"> {{ erreur }}</div>
    <q-card-section>
      <div class="flex justify-center" >
        <div class= "row "  style="font-weight:bold; margin-bottom:40px; ">
          <div class="col">
            <q-card flat bordered class="my-card bg-grey-1 text-center" style="margin:10px;text-align:center;width:250px;">
              <q-card-section style="height:230px;">
                <div style="font-size:16px;padding-top:15px;"> Nombre de personnes ayant reçu une dose de vaccin au cours des dernières 24 heures <br>
                  <br> <b style="font-size:20px;color:forestgreen">{{ nbDose1 }}</b></div></q-card-section>

            </q-card>
          </div>
          <div class="col">
            <q-card flat bordered class="my-card bg-grey-1 text-center" style="margin:10px;text-align:center;width:250px;">
              <q-card-section style="height:230px;">
                <div style="font-size:16px;padding-top:15px;">Nombre de personnes ayant reçu deux doses de vaccin au cours des dernières 24 heures<br>
                  <br> <b style="font-size:20px;color:darkgreen">{{nbDose2}}</b></div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class= "row "  style="font-weight:bold; margin-bottom:40px; ">
          <div class="col">
            <q-card flat bordered class="my-card bg-grey-1 text-center" style="margin:10px;text-align:center;width:250px;">
              <q-card-section style="height:230px;">
                <div style="font-size:16px;padding-top:15px;"> Nombre cumulé de personnes ayant reçu une dose de vaccin
                  <br> <br> <b style="font-size:20px;color:forestgreen">{{ nbCumDose1}}</b></div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col">
            <q-card flat bordered class="my-card bg-grey-1 text-center" style="margin:10px;text-align:center;width:250px;">
              <q-card-section style="height:230px;">
                <div style="font-size:16px;padding-top:15px;">Nombre cumulé de personnes ayant reçu deux doses de vaccin <br>
                  <br> <b style="font-size:20px;color:darkgreen"> {{ nbCumDose2}}</b></div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </q-card-section>

    <q-card-section>
      <div class="flex justify-center">
        <q-card class="my-card q-pa-md my-card q-pt " style="margin-bottom:70px;text-align:center; width:850px;max-height:100px;">
          <q-card-section class="text-black" >
            <div style ="font-size:30px;color:#32584E;font-weight:bold;"> L'évolution de la vaccination en France</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="q-ma-auto flex flex-center">
        <q-circular-progress
          show-value

          font-size="70px"
          class="text-grey-8 text-weight-bold q-ma-md"
          :value="percent_dose1"
          :min= "0"
          :max= "100"
          size="350px"
          :thickeness = "0.2"
          color="teal-10"
          center-color="white"
          track-color="teal-2"
        >{{percent_dose1}} %
          <div class="my-card q-pt" style="margin:10px;text-align:center;width:300px;">
            <div class="text-teal-10 " style="max-width: 300px;">
              <div class="text-weight-bold"><br><br>Pourcentage des personnes ayant<br> reçu une première dose en France.</div>
            </div>
          </div>
        </q-circular-progress>

        <div class="q-ma-xl "></div>

        <q-circular-progress
          show-value

          font-size="70px"
          class="text-grey-8 text-weight-bold q-ma-md"
          :value="percent_dose2"
          :min= "0"
          :max= "100"
          size="350px"
          :thickeness = "0.2"
          color="teal-10"
          center-color="white"
          track-color="teal-2"
        >{{percent_dose2}} %
          <div class="my-card q-pt" style="margin:10px;text-align:center;width:300px;">
            <div class="text-teal-10 " style="max-width: 300px;">
              <div class="text-weight-bold"><br><br>Pourcentage des personnes ayant<br> les deux doses en France.</div>
            </div>
          </div>
        </q-circular-progress>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="flex justify-center" style="margin-top:50px;">
        <q-card class="my-card q-pa-md my-card q-pt " style="margin-bottom:70px;text-align:center; width:850px;max-height:100px;">
          <q-card-section class="text-black" >
            <div style ="font-size:30px;color:#32584E;font-weight:bold;"> L'évolution de la vaccination en graphe </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="flex justify-center">
        <div class="row"  style="margin-left:-50px;margin-bottom:50px; ">
          <div class="col" style="max-width:35px; font-size:16px; color:#32584E ;padding-top:13px;"><label> De : </label></div>
          <div class="col" style="max-width:320px ;margin-right:50px;">
            <q-input outlined v-model="date1"  mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="date1" :options="optionsFn">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="col" style="max-width:25px; font-size:16px; color:#32584E ;padding-top:13px;"><label> à : </label></div>
          <div class="col" style="max-width:320px ;margin-right:50px;">
            <q-input outlined v-model="date2"  mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="date2" :options="optionsFn">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="col"><q-btn style="margin-bottom: 20px; padding:10px;width:250px; background-color:#32584E;font-size:14px;"text-color="white" label="Modifier les graphes" @click="changeGraphe" /></div>
        </div>
      </div>
      <div style="margin-bottom:30px; margin-top:-30px;text-align:center; color:red;font-size:14px;font-weight:bold;"> {{ erreurMsg }}</div>
      <div class="q-ma-auto flex flex-center">
        <grapheLineVaccin :date1="date1" :date2="date2" :key="componentKey"></grapheLineVaccin>
      </div>
    </q-card-section>
    <q-card-section>
      <div  style="margin-bottom:40px;">
        <googleMap component="vaccin"></googleMap>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import Banniere from 'components/Banniere.vue';
import Service from "../service/serviceVaccins";
import grapheLineVaccin from "../components/grapheLineVaccin";
import googleMap from "../components/googleMap.vue";

let yesterday = new Date();
let dd = String(yesterday.getDate()-1).padStart(2, '0');
let mm = String(yesterday.getMonth() + 1).padStart(2, '0');
let yyyy = yesterday.getFullYear();
yesterday =yyyy+'-'+mm+'-'+dd;
const vaccinationService = new Service();

export default {
  name: "VaccinationComponent",
  components: {Banniere, grapheLineVaccin,googleMap},
  data() {
    return {
      selectOptions: [
        {label: "Auvergne-Rhône-Alpes", value: "84"},
        {label: "Bourgogne-Franche-Comté", value: "27"},
        {label: "Bretagne", value: "53"},
        {label: "Centre-Val de Loire", value: "24"},
        {label: "Corse", value: "94"},
        {label: "Grand Est", value: "44"},
        {label: "Hauts-de-France", value: "32"},
        {label: "Île-de-France", value: "11"},
        {label: "Normandie", value: "28"},
        {label: "Nouvelle-Aquitaine", value: "75"},
        {label: "Occitanie", value: "76"},
        {label: "Pays de la Loire", value: "52"},
        {label: "Provence-Alpes-Côte d'Azur", value: "93"},
        {label: "Guadeloupe", value: "01"},
        {label: "Martinique", value: "02"},
        {label: "Guyane", value: "03"},
        {label: "La Réunion", value: "04"},
        {label: "Mayotte", value: "06"}

      ],
      selectOptionsV: [{label: "Tout les vaccins", value: 0}, {
        label: "COMIRNATY Pfizer/BioNTech",
        value: 1
      }, {label: "Moderna", value: 2}, {label: "AstraZeneka", value: 3}],
      date: yesterday,
      model: null,
      vaccin: {label: "Tout les vaccins", value: 0},
      nbCumDose1: "",
      nbCumDose2: "",
      nbDose1: "",
      nbDose2: "",
      erreur: "",
      percent_dose1: "",
      percent_dose2: "",
      date1: "2020/12/27",
      date2: yyyy + '/' + mm + '/' + dd,
      componentKey: 0,
      erreurMsg: ""
    }

  },
  async mounted() {
    await this.getinfoVaccinsFrance();
    this.percent_dose1 = ((this.nbCumDose1 / 67064000) * 100).toFixed(2);
    this.percent_dose2 = ((this.nbCumDose2 / 67064000) * 100).toFixed(2)
  },
  methods: {
    optionsFn(date) {
      return date >= "2020/12/27" && date <= yyyy + '/' + mm + '/' + dd;
    },
    async getinfoVaccinsFrance() {
      this.erreur = "";
      let resultInfoVaccinsFr = await vaccinationService.getInfoVaccinByDate(this.date.replaceAll("/", "-"), this.vaccin.value, "FR");
      this.nbDose1 = resultInfoVaccinsFr[3];
      this.nbDose2 = resultInfoVaccinsFr[4];
      this.nbCumDose1 = resultInfoVaccinsFr[5];
      this.nbCumDose2 = resultInfoVaccinsFr[6];

    },
    async getinfoVaccinsRegion() {
      if (this.model) {
        this.erreur = "";
        let resultInfoVaccinsRegion = await vaccinationService.getInfoVaccinByDate(this.date.replaceAll("/", "-"), this.vaccin.value, this.model.value);
        this.nbDose1 = resultInfoVaccinsRegion[3];
        this.nbDose2 = resultInfoVaccinsRegion[4];
        this.nbCumDose1 = resultInfoVaccinsRegion[5];
        this.nbCumDose2 = resultInfoVaccinsRegion[6];
      } else {
        this.erreur = "Veuillez choisir une région pour chercher les informations";
      }
    },
    async changeGraphe() {
      if (this.date1 === this.date2) {
        this.erreurMsg = "Veuillez choisir deux dates différentes avant de changer les graphes!";
      } else {
        this.erreurMsg = "";
        this.componentKey += 1;
      }
    }
  }
}

</script>

<style scoped>

</style>

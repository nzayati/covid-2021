<template>
  <q-card class="q-pb-xl">
    <q-card-section>
      <Banniere
        titre="Informations vaccination"></Banniere>
    </q-card-section>

    
  <div class="flex justify-center">
  
    <q-card-section>
      <div class="flex justify-center">
        <div class="row">
          <q-card class="my-card q-pt shadow-10" style="margin:10px;text-align:center;width:400px; lenghth:400px;">
            <q-card-section class="text-white " style="max-width: 400px; background-color: #32584E;">
              <div class="text-h6 text-weight-bold">Nombre de personnes ayant reçu la 1ere dose</div>
              <div class="text-overline " >*Deux doses sont nécessaires pour considérer qu'une personne est vaccinée<br><div class="text-h3 text-weight-bold text-center"> {{cum_dose1}}</div></div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-card-section>

    <q-card-section>
      <div class="flex justify-center">
        <div class="row">
          <q-card class="my-card q-pt shadow-10" style="margin:10px;text-align:center;width:400px;lenghth:400px;">
            <q-card-section class="text-white " style="max-width: 400px; background-color: #32584E;">
              <div class="text-h6 text-weight-bold">Nombre de personnes <br>vaccinées</div>
              <div class="text-overline ">*nombre total des personnes ayant reçu les deux doses de vaccin <br><div class="text-h3 text-weight-bold"> {{cum_dose2}}</div></div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-card-section>
  </div>
  
  <div class= "q-pa-lg" ></div>

<q-card class="my-card q-pa-xl ">
  <div class="flex justify-center">
          <q-card class="my-card q-pa-md my-card q-pt shadow-10 " style="margin-bottom:70px;text-align:center; width:850px;max-height:100px;">
            <q-card-section class="text-black" >
              <div style ="font-size:30px;color:#32584E;font-weight:bold;"> L'évolution de la vaccination en France</div>
            </q-card-section>
          </q-card>
        </div>
        </q-card>


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
          </div></q-circular-progress>

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


      <div class= "q-pa-lg" ></div>

<q-card class="my-card q-pa-xl ">
  <div class="flex justify-center">
          <q-card class="my-card q-pa-md my-card q-pt shadow-10 " style="margin-bottom:70px;text-align:center; width:850px;max-height:100px;">
            <q-card-section class="text-black" >
              <div style ="font-size:30px;color:#32584E;font-weight:bold;"> Rechercher les informations par département</div>
            </q-card-section>
          </q-card>
        </div>
        </q-card>


        
        <div class="flex justify-center">
    <div class="flex justify-center">
    <div class="col" style="width:500px;">
            <q-select color="grey-3" outlined style="color:#32584E;" v-model="model" :options="selectOptions" label="Sélectionner un département">
              <template v-slot:prepend>
                <q-icon name="place"/>
              </template>
            </q-select>
    </div>
    <div class="col"><q-btn style="padding:10px;margin-left:150px;width:200px; background-color:#3d7062;font-size:14px;" text-color="white" @click ="getInfoVaxDep" label="Rechercher" /></div>
        </div>
      <div style="text-align:center; color:#d64d4d;font-size:14px;font-weight:bold;"> {{ erreur }}</div>
    </div>
    </div>


   

    <div class="flex justify-center">
    

    <q-card-section>
      <div class="flex justify-center">
        <div class="row">
          <q-card class="my-card q-pt shadow-10" style="margin:10px;text-align:center;width:400px; lenghth:400px;">
            <q-card-section class="text-white " style="max-width: 400px; background-color: #32584E;">
              <div class="text-h6 text-weight-bold">Nombre de personnes ayant reçu la 1ere dose</div>
              <div class="text-overline " >*Deux doses sont nécessaires pour considérer qu'une personne est vaccinée<br><div class="text-h3 text-weight-bold text-center"> {{dose1_dep}}</div></div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-card-section>

  
    <q-card-section>
      <div class="flex justify-center">
        <div class="row">
          <q-card class="my-card q-pt shadow-10" style="margin:10px;text-align:center;width:400px;lenghth:400px;">
            <q-card-section class="text-white " style="max-width: 400px; background-color: #32584E;">
              <div class="text-h6 text-weight-bold">Nombre de personnes <br>vaccinées</div>
              <div class="text-overline ">*nombre total des personnes ayant reçu les deux doses de vaccin <br><div class="text-h3 text-weight-bold"> {{dose2_dep}}</div></div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-card-section>
    </div>


    



    <div class="q-pa-lg q-gutter-sm ">
    <q-banner class="shadow-8 text-black" style="background-color: #99c7cd; text-align:center; max-width:800px;max-height:100px">
      Consulter les centres de vaccination
      <template v-slot:action>
        <q-btn flat color="white" label="Dismiss" />
        <q-btn flat color="white" label="Update Credit Card" />
      </template>
    </q-banner>
    </div>
  
    

  </q-card>
</template>

<script>
import Banniere from 'components/Banniere.vue';
import Service from 'src/service/serviceVaccins';

let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 2);
let dd = String(yesterday.getDate()).padStart(2, '0');
let mm = String(yesterday.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = yesterday.getFullYear();
yesterday =yyyy+'-'+mm+'-'+dd;
const vaccinAPI = new Service(yesterday);

export default {
name: "Vaccination",
  components: { Banniere},
  data(){
  return {
    selectOptions: [],
    vaccin: "",
    cum_dose1: "",
    cum_dose2: "",
    model:null,
    erreur:"",
    dose1_dep: "",
    dose2_dep: "",
    percent_dose1: "",
    percent_dose2: "",
  }
  },



async mounted() {
    let resultAPI = await vaccinAPI.getDataFromAPI(yesterday);
    //console.log("*"+resultAPI.data.['records'].[5].['fields'].['n_cum_dose1']);

    let n_cum_dose1 = 0;
    for(var i=0; i<105; i++){
      let dose1 = parseInt(resultAPI.data.['records'].[i].['fields'].['n_cum_dose1'],10);
      n_cum_dose1 += dose1;

    }
    this.cum_dose1 = n_cum_dose1;
    let round_dose1 = (n_cum_dose1/67064000)*100;
    let percent_1 = round_dose1.toFixed(2);
    this.percent_dose1 = percent_1;


    let n_cum_dose2 = 0;
    for(var i=0; i<105; i++){
      let dose2 = parseInt(resultAPI.data.['records'].[i].['fields'].['n_cum_dose2'],10);
      n_cum_dose2 += dose2;

    }
    this.cum_dose2 = n_cum_dose2;
    let round_dose2 = (n_cum_dose2/67064000)*100;
    let percent_2 = round_dose2.toFixed(2);
    this.percent_dose2 = percent_2;
    



    for(var i=0; i<105; i++){
      let dep_name = resultAPI.data.['records'].[i].['fields'].['dep_name'];

      this.selectOptions.push(dep_name);
    }

    



  },
  methods: {
    async getInfoVaxDep(){
      if (this.model == null) {
        this.erreur = "VEUILLEZ CHOISIR UN DEPARTEMENT !"
      }else{
        let resultAPI = await vaccinAPI.getDataFromAPI(yesterday);
        let departement = this.model;
        for(var i=0; i<105; i++){
          let dep_name = resultAPI.data.['records'].[i].['fields'].['dep_name'];
          if(dep_name == departement){
            this.dose1_dep = parseInt(resultAPI.data.['records'].[i].['fields'].['n_cum_dose1'],10);
            this.dose2_dep = parseInt(resultAPI.data.['records'].[i].['fields'].['n_cum_dose2'],10);

          }
        }
        
      }
    }

    // async displayPercentage(){

    // }

  }

}



</script>



<style scoped>

</style>
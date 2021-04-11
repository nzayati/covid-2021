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
          <q-card class="my-card q-pt shadow-10" style="margin:10px;text-align:center;width:300px;">
            <q-card-section class="text-white " style="max-width: 300px; max-height:300px; background-color:#99c7cd; ">
              <div class="text-h6 text-weight-bold">Nombre total de personnes vaccinées </div>
              <div class="text-caption text-italic">Cumul de personnes ayant reçu une dose ou deux doses de vaccin<br><div class="text-h3 text-weight-bold"> {{cum_dose1}}</div></div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-card-section>

  
    <q-card-section>
      <div class="flex justify-center">
        <div class="row">
          <q-card class="my-card q-pt shadow-10" style="margin:10px;text-align:center;width:300px;">
            <q-card-section class="text-white " style="max-width: 300px; background-color: #99c7cd;">
              <div class="text-h6 text-weight-bold">Nombre de personnes ayant reçu la 1ere dose</div>
              <div class="text-caption text-italic" >*Deux doses sont nécessaires pour considérer qu'une personne est vaccinée<br><div class="text-h3 text-weight-bold"> {{cum_dose1}}</div></div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-card-section>

    <q-card-section>
      <div class="flex justify-center">
        <div class="row">
          <q-card class="my-card q-pt shadow-10" style="margin:10px;text-align:center;width:300px;">
            <q-card-section class="text-white " style="max-width: 300px; background-color: #99c7cd;">
              <div class="text-h6 text-weight-bold">Nombre de personnes ayant reçues deux doses de vaccin<br><div class="text-h3 text-weight-bold"> {{cum_dose2}}</div></div>
              <div class="text-caption text-italic"></div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-card-section>
  </div>

  <div class="flex justify-center">

  
    <q-card-section>
      <div class="flex justify-center">
        <div class="row">
          <q-card class="my-card q-pt" style="margin:10px;text-align:center;width:300px;">
            <q-card-section class="text-teal " style="max-width: 300px;">
              <div class="text-h6">Nombre total des personnes vaccinées</div>
              <div class="text-subtitle2">subtitle just in case</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-card-section>

    <q-card-section>
      <div class="flex justify-center">
        <div class="row">
          <q-card class="my-card q-pt" style="margin:10px;text-align:center;width:300px;">
            <q-card-section class="text-teal " style="max-width: 300px; max-height:300px; ">
              <div class="text-h6">Nombre de personnes ayant reçues une première dose</div>
              <div class="text-subtitle2">subtitle just in case</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-card-section>
  </div>

  <div class="flex justify-center">
  <div class="q-pa-lg q-gutter-sm ">
    <q-banner class="shadow-4 text-black" style="background-color: white; text-align:center; max-width:800px;max-height:100px">
      <div class="text-h5 text-weight-bold" style="color: #99c7cd">
        Rechercher les informations par département
      </div>
      
      
    </q-banner>
    </div>
    </div>

    <div class="flex justify-center">
    <div class="col" style="max-width:500px;">
            <q-select color="grey-3" outlined style="color:#32584E;" v-model="model" :options="selectOptions" label="Sélectionner un département">
              <template v-slot:prepend>
                <q-icon name="place"/>
              </template>
            </q-select>
    </div>
    <div class="col"><q-btn style="padding:10px;margin-left:40px;width:200px; background-color:teal;font-size:14px;" text-color="white" @click ="getInfoVaxDep" label="Vaccination" /></div>
        </div>
      <div style="text-align:center; color:#d64d4d;font-size:14px;font-weight:bold;"> {{ erreur }}</div>
    </div>

    <div class="flex justify-center">
    

    <q-card-section>
      <div class="flex justify-center">
        <div class="row">
          <q-card class="my-card q-pt shadow-10" style="margin:10px;text-align:center;width:300px;">
            <q-card-section class="text-white " style="max-width: 300px; max-height:300px; background-color:#99c7cd; ">
              <div class="text-h6 text-weight-bold">Nombre de personnes ayant reçu la 1ere dose </div>
              <div class="text-caption text-italic">*Deux doses sont nécessaires pour considérer qu'une personne est vaccinée<br><div class="text-h3 text-weight-bold"> {{dose1_dep}} </div></div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-card-section>

  
    <q-card-section>
      <div class="flex justify-center">
        <div class="row">
          <q-card class="my-card q-pt shadow-10" style="margin:10px;text-align:center;width:300px;">
            <q-card-section class="text-white " style="max-width: 300px; background-color: #99c7cd;">
              <div class="text-h6 text-weight-bold">Nombre de personnes ayant reçu les deux doses de vaccin</div>
              <div class="text-caption text-italic" >Nombre de personnes ayant reçues deux doses de vaccin<br><div class="text-h3 text-weight-bold"> {{dose2_dep}}</div></div>
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


    let n_cum_dose2 = 0;
    for(var i=0; i<105; i++){
      let dose2 = parseInt(resultAPI.data.['records'].[i].['fields'].['n_cum_dose2'],10);
      n_cum_dose2 += dose2;

    }
    this.cum_dose2 = n_cum_dose2;



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

  }

}



</script>



<style scoped>

</style>
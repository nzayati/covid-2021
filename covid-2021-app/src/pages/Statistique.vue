<template>
  <q-card class="q-pb-xl">
    <q-card-section>
      <Banniere
        titre="Statistiques des cas et hospitalisations "></Banniere>
    </q-card-section>
    <q-card-section>
      <div class="flex justify-center">
        <div class= "row" >
          <div class="col"><q-btn style="padding:10px;width:200px; background-color:#32584E;font-size:14px;"text-color="white" label="Info France" @click="getResultFrance" /></div>
          <div class="col" style="max-width:320px ;margin-right:50px;">
            <q-input outlined v-model="date"  mask="date" :rules="['date']">
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
          <div class="col" style="width:400px; ">
            <q-select color="grey-3" outlined style="color:#32584E;" v-model="model" :options="selectOptions" label="Sélectionner un département">
              <template v-slot:prepend>
                <q-icon name="place"/>
              </template>
            </q-select>
          </div>
          <div class="col"><q-btn style="padding:10px;margin-left:40px;width:200px; background-color:#32584E;font-size:14px;"text-color="white" @click ="getinfoDepartement" label="Info département" /></div>
        </div>
      </div>
    </q-card-section>
    <div style="text-align:center; color:red;font-size:14px;font-weight:bold;"> {{ erreur }}</div>
    <q-card-section>
      <div class="flex justify-center">
      <div class="column">
        <div class= "col row "  style="font-weight:bold;">
          <div class="col">
            <q-card class="my-card q-pt-lg" style="margin:10px;text-align:center;width:250px;">
              <q-card-section class="text-black" style="height:130px;">
                <div style ="font-size:16px;color:red;"> Nombre de personnes décédées<br> {{deces}}</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col">
            <q-card class="my-card q-pt-lg" style="margin:10px;text-align:center;width:250px;">
              <q-card-section class="text-black" style="height:130px;">
                <div style ="font-size:16px;color:#FF4500;"> Nombre de personnes hospitalisées<br> {{hospitalise}}</div>
              </q-card-section>
            </q-card>
         </div>
          <div class="col">
            <q-card class="my-card q-pt-lg" style="margin:10px; text-align:center; width:250px;">
              <q-card-section class="text-black" style="height:130px;">
                <div style ="font-size:16px;color:#FF6347;"> Nombre de personnes en réanimation<br> {{reanimation}}</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class= " col row"  style="font-weight:bold;">
          <div class="col">
            <q-card class="my-card q-pt-lg" style="margin:10px;text-align:center;width:250px;">
              <q-card-section class="text-black" style="height:130px;">
                <div style ="font-size:16px;color:#FF7F50;"> Nouvelles hospitalisations<br> {{nouvelleHospitalisation}}</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col">
            <q-card class="my-card q-pt-lg" style="margin:10px;text-align:center;width:250px;">
              <q-card-section class="text-black" style="height:130px;">
                <div style ="font-size:16px;color:orange;"> Nouvelles réanimations<br>{{nouvelleReanimation}}</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col">
            <q-card class="my-card q-pt-lg" style="margin:10px;text-align:center;width:250px;">
              <q-card-section class="text-black" style="height:130px;">
                <div style ="font-size:16px; color:green;"> Nombre de personnes guéries<br> {{gueris}}</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      </div>
    </q-card-section>

    <q-card-section>
      <div style="margin:50px;">
        <div class="flex justify-center">
          <q-card class="my-card q-pa-lg " style="margin-bottom:70px;text-align:center; max-width:800px;max-height:100px;">
            <q-card-section class="text-black" >
              <div style ="font-size:30px;color:#32584E;font-weight:bold;"> Nombre de cas confirmés en France en graphe</div>
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
            <div class="col"><q-btn style="padding:10px;width:250px; background-color:#32584E;font-size:14px;"text-color="white" label="Modifier le graphe" @click="changeGraphe" /></div>
          </div>
        </div>
        <div class="flex justify-center">
          <grapheStatistique :date1="dateGraphe1" :date2="dateGraphe2" :key="componentKey"></grapheStatistique>
        </div>
      </div>
    </q-card-section>

    <q-card-section>
      <div class="flex justify-center">
        <div>
          <q-btn style="padding:10px;width:350px; background-color:#32584E;font-size:14px;"text-color="white" label="Ou se faire dépister?" @click="changeGraphe" />
        </div>

      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import Service from 'src/service/serviceInfoCovid';
import Banniere from 'components/Banniere.vue';
import grapheStatistique from "../components/grapheStatistique";

let today = new Date();
let dd = String(today.getDate()-1).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today =yyyy+'-'+mm+'-'+dd;
const covidService = new Service(today);

export default {
name: "Statistique",
  components: { Banniere ,grapheStatistique},
  data(){
  return {
      selectOptions: [],
      date: today,
      date1:"2020/06/01",
      dateGraphe1 :"2020/06/01",
      date2:yyyy+'/'+mm+'/'+dd,
      dateGraphe2 :yyyy+'/'+mm+'/'+dd,
      model:null,
      hospitalise:"",
      reanimation:"",
      nouvelleHospitalisation:"",
      nouvelleReanimation:"",
      deces:"",
      gueris:"",
      erreur:"",
      componentKey:0
        }

  },
  async mounted() {
    let resultDepartementCall = await covidService.getDepartement();
    resultDepartementCall.data.forEach(e=>{
      this.selectOptions.push({label:e.nom , value: e.nom});
    })
    await this.getResultFrance();
    await this.changeGraphe();

  },
  methods: {
    optionsFn(date) {
      return date >= "2020/04/01" && date <= yyyy+'/'+mm+'/'+dd;
    },
    async getResultFrance() {
      this.erreur = "";
      let date = this.date.replaceAll('/', '-');
      let globalResultFrance = await covidService.getGlobalDataFranceByDate(date);
      this.hospitalise = globalResultFrance.data.FranceGlobalDataByDate[0].hospitalises ? globalResultFrance.data.FranceGlobalDataByDate[0].hospitalises :"Information indisponible";
      this.reanimation = globalResultFrance.data.FranceGlobalDataByDate[0].reanimation? globalResultFrance.data.FranceGlobalDataByDate[0].reanimation:"Information indisponible" ;
      this.nouvelleHospitalisation = globalResultFrance.data.FranceGlobalDataByDate[0].nouvellesHospitalisations?globalResultFrance.data.FranceGlobalDataByDate[0].nouvellesHospitalisations: "Information indisponible";
      this.nouvelleReanimation = globalResultFrance.data.FranceGlobalDataByDate[0].nouvellesReanimations?globalResultFrance.data.FranceGlobalDataByDate[0].nouvellesReanimations:"Information indisponible";
      this.deces = globalResultFrance.data.FranceGlobalDataByDate[0].deces ? globalResultFrance.data.FranceGlobalDataByDate[0].deces : "Information indisponible";
      this.gueris = globalResultFrance.data.FranceGlobalDataByDate[0].gueris? globalResultFrance.data.FranceGlobalDataByDate[0].gueris:"Information indisponible";
    },
    async getinfoDepartement()
    {
      if (this.model == null) {
        this.erreur = "Veuillez choisir un département pour chercher les informations!"
      } else {
        this.erreur = "";
        let departement = this.model.label;
        let date = this.date.replaceAll('/', '-');
        let globalResultDepartement = await covidService.getInfoDepartementByDate(date);
        console.log("data" + JSON.stringify(globalResultDepartement.data.allFranceDataByDate));
        let departementInfo = globalResultDepartement.data.allFranceDataByDate.filter(e => e.nom == departement);
        this.hospitalise = departementInfo[0].hospitalises?departementInfo[0].hospitalises: "Information indisponible";
        this.reanimation = departementInfo[0].reanimation? departementInfo[0].reanimation: "Information indisponible";
        this.nouvelleHospitalisation = departementInfo[0].nouvellesHospitalisations ? departementInfo[0].nouvellesHospitalisations :"Information indisponible";
        this.nouvelleReanimation = departementInfo[0].nouvellesReanimations? departementInfo[0].nouvellesReanimations:"Information indisponible";
        this.deces = departementInfo[0].deces? departementInfo[0].deces: "Information indisponible";
        this.gueris = departementInfo[0].gueris ? departementInfo[0].gueris :"Information indisponible";
      }

    },
    async changeGraphe(){
      this.dateGraphe1 = this.date1.replaceAll("/","-");
      console.log(this.dateGraphe1);
      this.dateGraphe2 = this.date2.replaceAll("/","-");
      console.log(this.dateGraphe2);
      console.log(JSON.stringify(await covidService.getDataGraphe(this.dateGraphe1,this.dateGraphe2)));
      this.componentKey +=1;
    }
  }
}
</script>

<style scoped>

</style>

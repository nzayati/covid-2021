<template>
  <q-card class="q-pb-xl">
    <q-card-section>
        <Banniere
      titre="Les statistiques au temps du Covid 19"></Banniere>
    </q-card-section>
    <q-card-section>
      <div class="flex justify-center" style="margin-bottom:30px;">
      <div class="row ">
        <div class="col q-pt-lg q-pl-lg" style="width:30%;margin-right:20px; margin-left:10px;padding-left:50px;">
          <q-img :src="'https://www.lhaylesroses.fr/images/6-Solidarite-Sante/Test_PCR.jpg'"
                style=""
                 class="rounded-borders shadow-2">
          </q-img>
        </div>
        <div class="col q-pt-lg q-pl-lg" style="color:#32584E;margin-right:60px;">
          <div class="" style="display: inline-block;">
            <q-card class="my_card bg-light-green-1" style="height:100%;">
              <q-card-section >
                <div style="text-align: center;font-size:30px;font-weight: bold; " class="q-pb-md"> A propos de la Covid</div>
                <div style="text-align: center;font-size:16px;"> <p>Les coronavirus forment une grande famille de virus. Ils peuvent être à l’origine de diverses maladies allant du simple rhume à des maladies plus graves comme le syndrome respiratoire aigu sévère (SRAS) et le syndrome respiratoire du Moyen-Orient (CoV-SRMO).
                  La COVID-19 est une nouvelle souche de coronavirus n’ayant encore jamais été identifiée chez l’homme.</p>
                  <p>
                    La transmission se fait par les gouttelettes respiratoires produites en toussant ou en éternuant;
                    les contacts personnels directs, comme le toucher ou les poignées de mains ou par les contacts avec un objet sur lequel se trouve le virus.
                  </p>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      </div>
    </q-card-section>

    <q-card-section >
      <div class="flex justify-center">
      <q-card style="width:93%;padding:20px;margin-bottom:30px;" class="my_card bg-light-green-1">
        <div class="flex-justify">
          <div class="row">
            <div class="col" style="width:30%;margin-right:30px;">
              <div class="flex justify-center">
                <q-card  style="padding:30px;margin:20px;width:100%;height:640px;border-radius:3%;">
                  <q-card-section>
                    <div style="color:#32584E;text-align:center;margin-bottom:29px;font-size:25px;font-weight:bold"> Des données sur le Coronavirus en France actualisées chaque jours</div>
                    <div class="flex justify-center"  >
                      <div class= "row "  style="font-weight:bold; margin-bottom:27px; ">
                        <div class="col">
                          <q-card flat bordered class="my-card bg-grey-1 text-center" style="margin-top:10px;text-align:center;width:180px;margin-right:40px;">
                            <q-card-section style="height:180px;">
                              <div style="font-size:18px;padding-top:15px;color:darkblue"> Nombre des nouvelles hospitalisations <br>
                                <br> {{ newHosp }}</div></q-card-section>

                          </q-card>
                        </div>
                        <div class="col">
                          <q-card flat bordered class="my-card bg-grey-1 text-center" style="margin-top:10px;text-align:center;width:180px;">
                            <q-card-section style="height:180px;">
                              <div style="font-size:18px;padding-top:15px;color:orangered">Nombre des nouveaux cas en réanimation <br>
                                <br> {{newrea}}</div>
                            </q-card-section>
                          </q-card>
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-center">
                      <div class= "row "  style="font-weight:bold; margin-bottom:10px; ">
                        <div class="col">
                          <q-card flat bordered class="my-card bg-grey-1 text-center" style="text-align:center;width:180px;margin-right:40px;">
                            <q-card-section style="height:180px;">
                              <div style="font-size:18px;padding-top:15px;color:red"> Nombre cumulé des décès
                                <br> <br> {{ deces}}</div>
                            </q-card-section>
                          </q-card>
                        </div>
                        <div class="col">
                          <q-card flat bordered class="my-card bg-grey-1 text-center" style="text-align:center;width:180px;">
                            <q-card-section style="height:180px;">
                              <div style="font-size:18px;padding-top:15px;color:darkgreen">Nombre de personnes guéries  <br>
                                <br> {{ gueris}}</div>
                            </q-card-section>
                          </q-card>
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
            <div class="col">
              <div class="flex justify-center">
               <q-card  style="padding:30px;width:100%;height:640px;margin:20px;border-radius:3%;">
                  <carteComponent></carteComponent>
                </q-card>
              </div>
            </div>
          </div>
        </div>
      </q-card>
      </div>
    </q-card-section>
    <q-card-section>
      <div style="margin:0px 50px 30px 50px;color:#32584E;">
        <q-img :src="'https://cache.magazine-avantages.fr/data/photo/w1536_ci/1jw/voyage-coronavirus-assurance-covid.webp'"
               style="max-height:500px;"
               class="rounded-borders shadow-2">
          <h4 style="padding-left:10px; font-weight:bold;">Un voyage de prévu,<br> notre site vous renseigne <br>sur la situation sanitaire <br>de votre destination <br> <q-btn flat style="margin-left:140px;" @click="$router.replace('/voyage')">  <i class='bx bxs-plane bx-md bx-rotate-90'></i> </q-btn></h4>
        </q-img>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>

import Banniere from 'components/Banniere.vue';
import carteComponent from 'components/carteComponent';
import serviceCovid from 'src/service/serviceInfoCovid';
import Service from "src/service/serviceInfoCovid";

let today = new Date();
let dd = String(today.getDate()-1).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today =yyyy+'-'+mm+'-'+dd;
const covidService = new serviceCovid(today);

export default {

  name: "AccueilComponent",
  components: { Banniere,carteComponent},
  data(){
    return {
      newHosp:"",
      newrea:"",
      deces:"",
      gueris:""
    }

  },
  async mounted() {
    await this.getInfoCovidLive();
  },
  methods:{
    async getInfoCovidLive () {
      let result = await covidService.getLiveDataCovidFrance();
      this.newHosp = result.data.FranceGlobalLiveData[0].nouvellesHospitalisations;
      this.newrea = result.data.FranceGlobalLiveData[0].nouvellesReanimations;
      this.deces = result.data.FranceGlobalLiveData[0].deces;
      this.gueris = result.data.FranceGlobalLiveData[0].gueris;

    }
  }
}
</script>

<style scoped>

</style>

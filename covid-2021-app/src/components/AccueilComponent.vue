<template>
  <q-card class="q-pb-xl">
    <q-card-section>
        <Banniere
      titre="Les statistiques au temps du Covid 19"></Banniere>
    </q-card-section>
    <q-card-section>
      <div class="q-gutter-sm row justify-center">
        <div class="col q-pt-lg q-pl-lg" style="margin-right:-40px; padding-left:50px;">
          <q-img :src="'https://www.lhaylesroses.fr/images/6-Solidarite-Sante/Test_PCR.jpg'"
                style="max-width:500px;"
                 class="rounded-borders shadow-2">
          </q-img>
        </div>
        <div class="col q-pt-lg q-pr-lg" style="margin-left:-40px; margin-top:40px; margin-right:40px;color:#32584E;">
          <div style="text-align: center;font-size:30px;font-weight: bold; " class="q-pb-md"> A propos de la Covid</div>
          <div style="text-align: center;font-size:16px;"> <p>Les coronavirus forment une grande famille de virus. Ils peuvent être à l’origine de diverses maladies allant du simple rhume à des maladies plus graves comme le syndrome respiratoire aigu sévère (SRAS) et le syndrome respiratoire du Moyen-Orient (CoV-SRMO).
            La COVID-19 est une nouvelle souche de coronavirus n’ayant encore jamais été identifiée chez l’homme.</p>
            <p>
          La transmission se fait par les gouttelettes respiratoires produites en toussant ou en éternuant;
            les contacts personnels directs, comme le toucher ou les poignées de mains ou par les contacts avec un objet sur lequel se trouve le virus.
            </p>
          </div>
        </div>
      </div>
    </q-card-section>
    <q-card-section >
      <div class=" q-gutter-sm justify-center " style="margin:15px 50px 15px 50px; background-color: #F2F2F2;">
          <div> Données du {{date}} <q-btn> Cliquer ici pour avoir plus d'information</q-btn></div>
        <div class="q-gutter-sm row " >
          <div class="col q-pt-lg q-pl-lg" >

            </div>
          <div class="col q-pt-lg" style ="margin:0 110px 30px 10px;">
            <img src="~assets/carteFranceSVG.svg"/>
          </div>
          <div>

          </div>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <div style="margin:0px 50px 30px 50px;color:#32584E;">
        <q-img :src="'https://cache.magazine-avantages.fr/data/photo/w1536_ci/1jw/voyage-coronavirus-assurance-covid.webp'"
               style="max-height:600px;"
               class="rounded-borders shadow-2">
          <h4 style="padding-left:10px; font-weight:bold;">Un voyage de prévu,<br> notre site vous renseigne <br>sur la situation sanitaire <br>de votre destination <br> <q-btn flat style="margin-left:140px;" @click="$router.replace('/voyage')">  <i class='bx bxs-plane bx-md bx-rotate-90'></i> </q-btn></h4>
        </q-img>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import {Component} from "vue-property-decorator";
import Service from 'src/service/serviceInfoCovid';
import Banniere from 'components/Banniere.vue';

let today = new Date();
let dd = String(today.getDate()-1).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
today =yyyy+'-'+mm+'-'+dd;

export default {

  name: "AccueilComponent",
  components: { Banniere },
  data(){
    return {
      date : today
    }
  },
  async mounted() {
    let covidService = new Service(today);

    this.idf = await covidService.getInfoRegion();
  }
}
</script>

<style scoped>

</style>

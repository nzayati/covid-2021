<template>
  <q-card class="q-pb-xl">
    <q-card-section>
      <Banniere
        titre="Information voyage"></Banniere>
    </q-card-section>
    <q-card-section>
      <div class="flex justify-center">
        <div class= "row" >
            <div class="col" style="max-width:300px; font-size:16px; color:#32584E ;padding-top:13px;font-weight:bold;">Sélectionner votre destination: </div>
            <div class="col" style="width:400px; ">
            <q-select color="grey-3" outlined style=" margin-right:50px;color:#32584E;" v-model="model" :options="selectOptions" label="Sélectionner un département">
              <template v-slot:prepend>
                <q-icon name="place"/>
              </template>
            </q-select>
            </div>
            <div class="col"><q-btn style="padding:10px;width:200px; background-color:#32584E;font-size:14px;"text-color="white" label="Info destination" @click="getResultCountries" /></div>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="flex justify-center">
        <div class="column" style="margin-bottom:70px;">
          <div class= "col row "  style="font-weight:bold;">
            <div class="col">
              <q-card class="my-card q-pt-lg" style="margin:10px;text-align:center;width:250px;">
                <q-card-section class="text-black" style="height:130px;">
                  <div style ="font-size:16px;color:red;"> Nouveaux décès :<br> {{newDeces}}</div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col">
              <q-card class="my-card q-pt-lg" style="margin:10px;text-align:center;width:250px;">
                <q-card-section class="text-black" style="height:130px;">
                  <div style ="font-size:16px;color:red;"> Total des décès<br> {{deces}}</div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col">
              <q-card class="my-card q-pt-lg" style="margin:10px; text-align:center; width:250px;">
                <q-card-section class="text-black" style="height:130px;">
                  <div style ="font-size:16px;color:#; "> Nouveaux cas <br> {{newCase}}</div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col">
              <q-card class="my-card q-pt-lg" style="margin:10px; text-align:center; width:250px;">
                <q-card-section class="text-black" style="height:130px;">
                  <div style ="font-size:16px;color:#FF4500;"> Total des cas <br> {{cas}}</div>
                </q-card-section>
              </q-card>
            </div>
          </div>
          <div class= " col row"  style="font-weight:bold; margin-left:60px;">
            <div class="col">
              <q-card class="my-card q-pt-lg" style="margin:10px;text-align:center;width:250px;">
                <q-card-section class="text-black" style="height:130px;">
                  <div style ="font-size:16px;color:#FF6347;"> Nombre de cas actif<br> {{actifCase}}</div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col">
              <q-card class="my-card q-pt-lg" style="margin:10px;text-align:center;width:250px;">
                <q-card-section class="text-black" style="height:130px;">
                  <div style ="font-size:16px;color:orange;"> Cas critique<br>{{critique}}</div>
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
      <div>
        <div class="flex justify-center" >
             <div>
              <q-card class="my-card q-pa-lg" style="margin-bottom:10px;background-color:#32584E; text-align:center; max-width:800px;max-height:100px;">
                <q-card-section class="text-white" >
                  <div style ="font-size:30px;"> Conseils par pays ou destination</div>
                </q-card-section>
              </q-card>
             </div>
          </div>
         <div class="flex justify-center" :key="componentKey">
              <iframe style =" width: 80%; height:1200px;margin-top:40px;margin-bottom:40px;" :src="siteGouv"></iframe>
          </div>
        </div>
    </q-card-section>

    <q-card-section>
      <div class="flex justify-center" >
        <div style="margin-right:80px;">
          <q-card class="my-card q-pa-lg" style="margin-bottom:10px;background-color:white;border-color:#32584E; text-align:center; max-width:800px;">
            <q-card-section>
              <div style ="font-size:25px;color:#32584E">Déclaration pour voyageur de 11 ans et plus</div>
            </q-card-section>
            <q-card-section>
              <div class="flex justify-center" style="margin-top:10px;margin-bottom:50px;" >
                <div style="margin-right:40px;">
                  <q-card flat bordered class="my-card bg-grey-1 text-center">
                    <q-card-section>
                      <div class="text-h6">PDF</div>
                      <q-img
                        :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/400px-PDF_file_icon.svg.png'"
                        spinner-color="white"
                        style="height: 80px; max-width: 60px"
                      />

                    </q-card-section>

                    <q-separator black />

                    <q-card-actions>
                      <q-btn flat @click="downloadPDFSup11">Télécharger</q-btn>
                    </q-card-actions>
                  </q-card>
                </div>
                <div style="margin-right:40px;">
                  <q-card flat bordered class="my-card bg-grey-1 text-center">
                    <q-card-section>
                      <div class="text-h6">DOCX</div>
                      <q-img
                        :src="'https://play-lh.googleusercontent.com/l-JVRfLKIS3VhM-iJ_4W_-kzCdd2uwTWr5eNtBiejB5yZNPqdUWxgzcwwqAAeAtxCuo=s360-rw'"
                        spinner-color="white"
                        style="height: 80px; max-width: 60px"
                      />

                    </q-card-section>

                    <q-separator black />

                    <q-card-actions>
                      <q-btn flat @click="downloadDocSup11">Télécharger</q-btn>
                    </q-card-actions>
                  </q-card>
                </div>
                <div>
                  <q-card flat bordered class="my-card bg-grey-1 text-center">
                    <q-card-section>
                      <div class="text-h6">TXT</div>
                      <q-img
                        :src="'https://image.flaticon.com/icons/png/512/28/28878.png'"
                        spinner-color="white"
                        style="height: 80px; max-width: 60px"
                      />

                    </q-card-section>

                    <q-separator black />

                    <q-card-actions>
                      <q-btn flat @click="downloadTxtSup11">Télécharger</q-btn>
                    </q-card-actions>
                  </q-card>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div>
          <q-card class="my-card q-pa-lg" style="margin-bottom:10px;background-color:white; text-align:center; max-width:800px;">
            <q-card-section  >
              <div style ="font-size:25px;color:#32584E">Déclaration pour voyageur de moins de 11 ans</div>
            </q-card-section>
            <q-card-section>
              <div class="flex justify-center" style="margin-top:10px;margin-bottom:50px;" >
                <div style="margin-right:40px;">
                  <q-card flat bordered class="my-card bg-grey-1 text-center">
                    <q-card-section>
                      <div class="text-h6">PDF</div>
                      <q-img
                        :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/400px-PDF_file_icon.svg.png'"
                        spinner-color="white"
                        style="height: 80px; max-width: 60px"
                      />

                    </q-card-section>

                    <q-separator black />

                    <q-card-actions>
                      <q-btn flat @click = "downloadPDFMin11">Télécharger</q-btn>
                    </q-card-actions>
                  </q-card>
                </div>
                <div style="margin-right:40px;">
                  <q-card flat bordered class="my-card bg-grey-1 text-center">
                    <q-card-section>
                      <div class="text-h6">DOCX</div>
                      <q-img
                        :src="'https://play-lh.googleusercontent.com/l-JVRfLKIS3VhM-iJ_4W_-kzCdd2uwTWr5eNtBiejB5yZNPqdUWxgzcwwqAAeAtxCuo=s360-rw'"
                        spinner-color="white"
                        style="height: 80px; max-width: 60px"
                      />

                    </q-card-section>

                    <q-separator black />

                    <q-card-actions>
                      <q-btn flat @click="downloadDocMin11">Télécharger</q-btn>
                    </q-card-actions>
                  </q-card>
                </div>
                <div>
                  <q-card flat bordered class="my-card bg-grey-1 text-center">
                    <q-card-section>
                      <div class="text-h6">TXT</div>
                      <q-img
                        :src="'https://image.flaticon.com/icons/png/512/28/28878.png'"
                        spinner-color="white"
                        style="height: 80px; max-width: 60px"
                      />

                    </q-card-section>

                    <q-separator black />

                    <q-card-actions>
                      <q-btn flat @click="downloadTxtMin11">Télécharger</q-btn>
                    </q-card-actions>
                  </q-card>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="flex justify-center">

      </div>


    </q-card-section>
  </q-card>
</template>

<script>
import Banniere from 'components/Banniere.vue';
import Service from "../service/serviceInfoCovid";
import Download from "../service/serviceDownload";
import dataSelectCountry from "../service/dataSelectCountry";

let today = new Date();
let dd = String(today.getDate()-1).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today =yyyy+'-'+mm+'-'+dd;
const covidService = new Service(today);
const download = new Download();

export default {
name: "Voyage",
  components: { Banniere },
  data(){
  return {
    model: {
      label:"France",
      value:"France"
    },
    selectOptions:[],
    componentKey : 0,
    newDeces: "",
    deces: "",
    newCase: "",
    cas: "",
    actifCase: "",
    critique: "",
    gueris: "",
    siteGouv:"https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/conseils-par-pays-destination/italie/?xtor=RSS-2&t=20210409180544"
  }
  },
  async mounted() {
    let resultCountriesCall = await covidService.getCountries();
    resultCountriesCall.data.forEach(e=>{
      let nom = "";
      let pays = dataSelectCountry.filter(c=> e.country == c.en );
      if(pays.length != 0){
        nom = pays[0].fr;
      }else{
        nom = e.country;
      }
      this.selectOptions.push({label: nom , value: e.country });
    })
    console.log(JSON.stringify(this.selectOptions.length));
    await this.getResultCountries();

  },
  methods:{
    async getResultCountries() {
      let globalResultCountry = await covidService.getResultCountry(this.model.value);
     this.newDeces = (globalResultCountry.data.todayDeaths || globalResultCountry.data.todayDeaths== 0) ? globalResultCountry.data.todayDeaths :"Information indisponible";
      this.deces = (globalResultCountry.data.deaths ||  globalResultCountry.data.deaths == 0)? globalResultCountry.data.deaths:"Information indisponible" ;
      this.newCase =( globalResultCountry.data.todayCases  || globalResultCountry.data.todayCases == 0) ? globalResultCountry.data.todayCases : "Information indisponible";
      this.cas = (globalResultCountry.data.cases || globalResultCountry.data.cases ==0) ? globalResultCountry.data.cases :"Information indisponible";
      this.actifCase = (globalResultCountry.data.active || globalResultCountry.data.active ==0) ? globalResultCountry.data.active : "Information indisponible";
      this.critique = (globalResultCountry.data.critical || globalResultCountry.data.critical ==0) ? globalResultCountry.data.critical :"Information indisponible";
      this.gueris = (globalResultCountry.data.recovered || globalResultCountry.data.recovered ==0) ? globalResultCountry.data.recovered:"Information indisponible";

      let nomPays = (this.model.label.replace(/\s/g, '-')).replace(/'/g, '-');
      this.siteGouv = "https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/conseils-par-pays-destination/"+nomPays+"/?xtor=RSS-2&t=20210409180544";
      this.componentKey +=1;
    },

    async downloadPDFSup11(){
      await download.downloadPdpSup11();
    },

    async downloadDocSup11(){
      await download.downloadDocSup11();
    },

    async downloadTxtSup11(){
      await download.downloadTxtSup11();
    },
    async downloadPDFMin11(){
      await download.downloadPdpMin11();
    },

    async downloadDocMin11(){
      await download.downloadDocMin11();
    },

    async downloadTxtMin11(){
      await download.downloadTxtMin11();
    }
  }
}
</script>

<style scoped>

</style>

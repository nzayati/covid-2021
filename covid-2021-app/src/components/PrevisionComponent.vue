<template>
  <q-card class="q-pb-xl">
    <q-card-section>
      <Banniere
        titre="Données prévisionnelles"></Banniere>
    </q-card-section>


    <q-card-section>
      <div class="flex justify-center">
        <h4 style="color:#32584E; font-weight:bold;margin-bottom:80px;"> Synthèse des indicateurs de suivi de l'épidémie COVID-19</h4>
      </div>
      <div class="flex justify-center">
        <div class= "row" >
          <div class="col"><q-btn style="padding:10px;width:300px;margin-left:80px; background-color:#32584E;font-size:14px;"text-color="white" label="Indicateurs France" @click="getIndicateurFrance" /></div>
          <div class="col" style="width:600px; ">
            <q-select color="grey-3" outlined style="color:#32584E;" v-model="model" :options="selectOptions" label="Sélectionner un département">
              <template v-slot:prepend>
                <q-icon name="place"/>
              </template>
            </q-select>
          </div>
          <div class="col"><q-btn style="padding:10px;margin-left:60px;width:300px; background-color:#32584E;font-size:14px;"text-color="white" @click ="getIndicateurDep" label="Indicateurs département" /></div>
        </div>
      </div>
    </q-card-section>
    <div style="text-align:center; color:red;font-size:14px;font-weight:bold;"> {{ erreur }}</div>
    <q-card-section>
      <div class="flex justify-center" style="margin-top:40px;">
        <div class="column">
          <div class= "col row "  style="font-weight:bold; margin-bottom:40px; ">
            <div class="col">
              <q-card flat bordered class="my-card bg-grey-1 text-center" style="margin:10px;text-align:center;width:250px;">
                <q-card-section style="height:230px;">
                  <div style="text-align:center;font-size:13px;"><b style="font-size:16px;color:#32584E">Taux de positivité des tests virologiques <br></b><br> Correspond au nombre de personnes testées positives
                    (RT-PCR et test antigénique) pour la première fois depuis plus de 60 jours rapporté au nombre total de personnes testées positives ou négatives.</div>
                </q-card-section>
                <q-separator black />
                <q-card-section>
                  <div><b  v-bind:style="{color: tx_pos.color,fontSize : fontsize +'px'}"> {{ tx_pos.info }} </b><br><br> Mise à jour le {{ tx_pos.date}} </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col">
              <q-card flat bordered class="my-card bg-grey-1 text-center" style="margin:10px;text-align:center;width:250px;">
                <q-card-section style="height:230px;">
                  <div style="text-align:center;font-size:13px;"><b style="font-size:16px;color:#32584E">Taux d'incidence </b><br><br>Correspond au
                    nombre de personnes testées positives (RT-PCR et test antigénique) pour la première fois depuis
                    plus de 60 jours rapporté à la taille de la population.Il est exprimé pour 100 000 habitants. </div>
                </q-card-section>
                <q-separator black />
                <q-card-section>
                  <div><b  v-bind:style="{color: tx_incid.color,fontSize : fontsize +'px'}"> {{ tx_incid.info }} </b><br><br> Mise à jour le {{ tx_incid.date}} </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col">
              <q-card flat bordered class="my-card bg-grey-1 text-center" style="margin:10px;text-align:center;width:250px;">
                <q-card-section style="height:230px;">
                  <div style="text-align:center;font-size:13px;"><b style="font-size:16px;color:#32584E">Taux d'occupation </b><br> <br>Tension hospitalière sur la capacité en réanimation (Proportion de patients atteints de COVID-19 actuellement en réanimation, en soins intensifs,
                    ou en unité de surveillance continue rapportée au total des lits en capacité initiale </div>
                </q-card-section>
                <q-separator black />
                <q-card-section>
                  <div><b  v-bind:style="{color: TO.color,fontSize : fontsize +'px'}"> {{ TO.info }} </b><br><br> Mise à jour le {{ TO.date}} </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col">
              <q-card flat bordered class="my-card bg-grey-1 text-center" style="margin:10px;text-align:center;width:250px;">
                <q-card-section style="height:230px;">
                  <div style="text-align:center;font-size:13px;"><b style="font-size:16px;color:#32584E">Facteur de reproduction du virus </b><br><br>
                    C’est le nombre moyen de personnes qu’une personne infectée peut contaminer. Si le R effectif est supérieur à 1,
                    l’épidémie se développe ; s’il est inférieur à 1, l’épidémie régresse)</div>
                </q-card-section>
                <q-separator black />
                <q-card-section>
                  <div><b  v-bind:style="{color: R.color, fontSize : fontsize +'px'}"> {{ R.info }} </b><br><br> Mise à jour le {{ R.date}} </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
          <div class= " col row"  style="font-weight:bold;">
            <div class="col">
              <q-card flat bordered class="my-card bg-grey-1 text-center" style="margin:10px;text-align:center;width:250px;">
                <q-card-section style="height:200px;">
                  <div style="text-align:center;font-size:13px;"><b style="font-size:16px;color:#32584E">Incidence réanimation </b> <br><br>
                    Nombre de nouveaux patients admis en réanimation au cours des dernières 24h.
                  </div> </q-card-section>
                <q-separator black />
                <q-card-section>
                  <div><b style="font-size:17px; color:darkblue;"> {{ incid_rea.info }} </b><br><br> Mise à jour le {{ incid_rea.date}} </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col">
              <q-card flat bordered class="my-card bg-grey-1 text-center" style="margin:10px;text-align:center;width:250px;">
                <q-card-section style="height:200px;">
                  <div style="text-align:center;font-size:13px;"><b style="font-size:16px;color:#32584E">Incidence hospitalisation </b><br><br>
                    Nombre de nouveaux patients hospitalisés au cours des dernières 24h.
                  </div>
                </q-card-section>
                <q-separator black />
                <q-card-section>
                  <div><b style="font-size:17px; color:darkblue;"> {{ incid_hosp.info }} </b><br><br> Mise à jour le {{ incid_hosp.date}} </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col">
              <q-card flat bordered class="my-card bg-grey-1 text-center" style="margin:10px;text-align:center;width:250px;">
                <q-card-section style="height:200px;">
                  <div style="text-align:center;font-size:13px;"><b style="font-size:16px;color:#32584E">Incidence retour à domicile </b><br><br>
                    Nombre de patients ayant été hospitalisés pour COVID-19 et de retour à domicile en raison de l'amélioration de leur état de santé au cours des dernières 24h.
                  </div>
                </q-card-section>
                <q-separator black />
                <q-card-section>
                  <div><b style="font-size:17px; color:darkblue;"> {{ incid_rad.info }} </b><br><br> Mise à jour le {{ incid_rad.date}} </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col">
              <q-card flat bordered class="my-card bg-grey-1 text-center" style="margin:10px;text-align:center;width:250px;">
                <q-card-section style="height:200px;">
                  <div style="text-align:center;font-size:13px;"><b style="font-size:16px;color:#32584E">Incidence décès à l'hospital </b><br><br>
                    Nouveaux patients décédés à l’hôpital au cours des dernières 24h.
                  </div>
                </q-card-section>
                <q-separator black />
                <q-card-section>
                  <div><b style="font-size:17px; color:darkblue;"> {{ incid_dchosp.info }} </b><br><br> Mise à jour le {{ incid_dchosp.date}} </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </q-card-section>
    <q-card-section style="margin-bottom:50px;">
      <div class="flex justify-center" >
        <h4 style="color:#32584E; font-weight:bold;margin-bottom:40px;"> Information prévisionnelle</h4>
      </div>
      <div class="flex justify-center" >
        <div>
          <q-card flat bordered class="my-card text-center" style="background-color:#192C27;margin:10px;text-align:center;width:1200px;height:760px;">

            <div class="row">
              <div class="col" style="background-color:white;width:40%;height:80%;margin:30px;border: 1px solid;border-color:lightgray; border-radius: 10px;">
                <div class="flex justify-center">
                  <h6 style="color:#32584E; font-weight:bold;margin-bottom:20px;"> Critère de confinement</h6>
                </div>
                <div class="flex justify-center" style="margin-bottom:30px;">
                  <div class="column">
                    <div class="col row">
                      <div class="col" style="margin:20px;">
                        <q-card flat bordered class="my-card bg-grey-1 text-center" style="width:200px;">
                          <q-card-section>
                            <div style="font-weight:bold;font-size:14px;height:130px;"><b style="font-size:16px;color:#32584E">Taux de positivité des tests virologiques</b><br><br>
                              Seuil d'alerte maximale fixé à 10%</div>
                          </q-card-section>
                          <q-separator black />
                          <q-card-section>
                            <div style="font-weight:bold;font-size:12px;"> <b  v-bind:style="{color: tx_pos.color,fontSize : fontsize +'px'}"> {{ tx_pos.info }}</b> <br> Mise à jour le {{ tx_pos.date}}</div>
                          </q-card-section>
                        </q-card>
                      </div>
                      <div class="col" style="margin:20px;">
                        <q-card flat bordered class="my-card bg-grey-1 text-center" style="width:200px;">
                          <q-card-section>
                            <div style="font-weight:bold;font-size:14px;height:130px;"><b style="font-size:16px;color:#32584E">Taux d'incidence</b><br>
                              Seuil d'alerte maximale fixé à 250</div>
                          </q-card-section>
                          <q-separator black />
                          <q-card-section>
                            <div style="font-weight:bold;font-size:12px;"> <b  v-bind:style="{color: tx_incid.color,fontSize : fontsize +'px'}"> {{ tx_incid.info }} </b><br> Mise à jour le {{ tx_incid.date}} </div>
                          </q-card-section>
                        </q-card>
                      </div>
                    </div>
                    <div class="col row">
                      <div class="col" style="margin:20px;">
                        <q-card flat bordered class="my-card bg-grey-1 text-center" style="width:200px;">
                          <q-card-section>
                            <div style="font-weight:bold;font-size:14px;height:130px;"><b style="font-size:16px;color:#32584E">Tension hospitalière</b><br><br>
                              Seuil d'alerte maximale fixé à 60%</div>
                          </q-card-section>
                          <q-separator black />
                          <q-card-section>
                            <div style="font-weight:bold;font-size:12px;"> <b  v-bind:style="{color: TO.color,fontSize : fontsize +'px'}"> {{ TO.info }} </b><br> Mise à jour le {{ TO.date}} </div>
                          </q-card-section>
                        </q-card>
                      </div>
                      <div class="col" style="margin:20px;">
                        <q-card flat bordered class="my-card bg-grey-1 text-center" style="width:200px;">
                          <q-card-section>
                            <div style="font-weight:bold;font-size:14px;height:130px;"><b style="font-size:16px;color:#32584E">Facteur de reproduction du virus</b><br><br>
                              Seuil d'alerte maximale fixé à 1.5</div>
                          </q-card-section>
                          <q-separator black />
                          <q-card-section>
                            <div style="font-weight:bold;font-size:12px;"> <b  v-bind:style="{color: R.color, fontSize : fontsize +'px'}"> {{ R.info }} </b><br> Mise à jour le {{ R.date}} </div>
                          </q-card-section>
                        </q-card>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div class = "col" style="background-color:white;width:40%;height:80%;margin:30px;margin:30px;border: 1px solid;border-color:lightgray; border-radius: 10px;">
                <div class="flex justify-center">
                  <h6 style="color:#32584E; font-weight:bold;margin-bottom:0px;"> Prévision de confinement<br> ou de déconfinement</h6>
                </div>

                <div class="flex justify-center" style="margin-bottom:30px;">
                  <div class="column">
                    <div class="col" style="margin:30px 20px 100px 20px;">
                      <q-card flat bordered class="my-card bg-grey-1 text-center" style="width:400px;height:297px;padding:5px;">
                        <q-card-section>
                          <div style="font-weight:bold;font-size:16px;">La synthèse des indicateurs clés de l'épidémie COVID-19 indique que <b style="color:red;">{{ rouge }}</b> indicateur(s) est/sont en alerte rouge, <br>
                            <b style="color:orange;"> {{ orange}} </b> indicateur(s) est/sont en alerte orange et
                            <b style="color:darkgreen;">{{ vert }}</b> indicateur (s) est/sont en vert.<br> <br>
                            <b style="color:#32584E;font-style: italic">La prévision indiquée ci-dessous est basée sur les précédentes décisions gouvernementales de confinement/déconfinement </b></div>
                        </q-card-section>
                      </q-card>
                    </div>
                    <div class="col" style="margin:20px 20px -50px 20px;">
                      <q-card flat bordered class="my-card text-center animate-blink" v-bind:style="{ width : width +'px', height: height + 'px' , border: border, borderColor:bordercolor}">
                        <q-card-section>
                          <div style="font-weight:bold;font-size:16px;" >{{ prevision }}</div>
                        </q-card-section>
                      </q-card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import Banniere from 'components/Banniere.vue';
import ServicePrevision from 'src/service/servicePrevision';

const servicePrevision = new ServicePrevision();
export default {
  name: "PrevisionComponent",
  components: { Banniere },
  data(){
    return {
      tx_pos :{},
      tx_incid:{},
      TO:{},
      R :{},
      incid_rea :{},
      incid_hosp :{},
      incid_rad :{},
      incid_dchosp :{},
      fontsize :17,
      model:null,
      selectOptions: [],
      erreur : "",
      width :400,
      height:150,
      border : "solid",
      bordercolor : "",
      prevision:"",
      rouge:"",
      orange:"",
      vert:"",
    }
  },

  async mounted() {
    await this.getIndicateurFrance();
    this.selectOptions = await servicePrevision.getNamedepartement();
  },
  methods: {
    async getIndicateurFrance() {
      let arrayInfoIndicateur = await servicePrevision.getIndicateurCovidFrance();
      await servicePrevision.getNamedepartement();
      this.tx_pos = arrayInfoIndicateur[0];
      this.tx_incid = arrayInfoIndicateur[1];
      this.TO = arrayInfoIndicateur[2];
      this.R = arrayInfoIndicateur[3];
      this.incid_rea = arrayInfoIndicateur[8];
      this.incid_hosp = arrayInfoIndicateur[9];
      this.incid_rad = arrayInfoIndicateur[10];
      this.incid_dchosp = arrayInfoIndicateur[11];
      this.getPrevision();
    },

    async getIndicateurDep() {
      if (this.model) {
        this.erreur = "";
        let arrayInfoIndicateur = await servicePrevision.getIndicateurDepartement(this.model);
        await servicePrevision.getNamedepartement();
        this.tx_pos = arrayInfoIndicateur[0];
        this.tx_incid = arrayInfoIndicateur[1];
        this.TO = arrayInfoIndicateur[2];
        this.R = arrayInfoIndicateur[3];
        this.incid_rea = arrayInfoIndicateur[8];
        this.incid_hosp = arrayInfoIndicateur[9];
        this.incid_rad = arrayInfoIndicateur[10];
        this.incid_dchosp = arrayInfoIndicateur[11];
        this.getPrevision();

      } else {
        this.erreur = "Veuillez sélectionner un département pour voir ses indicateurs!"
      }

    },
    getPrevision() {
      let infoPrevision = servicePrevision.setPrevision(this.tx_pos, this.tx_incid, this.TO, this.R);
      this.bordercolor = infoPrevision[0];
      this.prevision = infoPrevision[1];
      this.rouge = infoPrevision[2];
      this.orange = infoPrevision[3];
      this.vert = infoPrevision[4];
    },
  }
}
</script>

<style scoped>

</style>

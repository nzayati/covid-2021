<template>
  <q-layout view="lHh Lpr lFf">
   <q-header class="bg-white" elevated>
     <q-card>
       <q-card-section>
     <!-- le menu -->
          <div class="q-pt-sm">
            <div class="q-gutter-sm row justify-center" >

              <q-btn flat color="primary" @click="$router.replace('/')" label="Accueil" >
              </q-btn>

              <q-btn  flat color="primary" @click="$router.replace('/statistique')" label="Statistique des cas et hospitalisation">
                <!--<q-menu
                  transition-show="scale"
                  transition-hide="scale">
                  <q-list style="min-width: 100px">
                    <q-item clickable >
                      <q-item-section>Having fun</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>-->
              </q-btn>

              <q-btn flat color="primary" @click="$router.replace('/vaccination')" label="Information vaccination">
              </q-btn>

              <q-btn flat color="primary" @click="$router.replace('/prevision')" label="Données prévisionnelles">
              </q-btn>

              <q-btn  flat color="primary" @click="$router.replace('/voyage')" label="Information voyage" >
              </q-btn>

              <q-btn flat color="primary" @click="$router.replace('/contact')" label="Contact">
              </q-btn>

             </div>
           </div>
       </q-card-section>

     <q-separator inset />

     <!-- bannière avec le titre -->
       <q-card-section>
         <div class="q-gutter-md bg-white text-black row  justify-center q-mb-sm">
             <q-list  style="margin-right:250px;">
               <q-item >
                 <q-item-section style="margin-bottom:-40px;font-size:14px;">Source d'information</q-item-section>
               </q-item>
               <q-item style="margin-bottom:-35px;" >
                 <q-img
                   :src="'https://api.gouv.fr/images/linkedin.jpg'"
                   spinner-color="white"
                   style="height: 20px; max-width: 40px"
                 />
               </q-item>
               <q-item clickable
                       @click="openUrl()">
                 <q-item-section style="font-weight:bold;font-size:16px;">Gouvernement</q-item-section>
               </q-item>
             </q-list>

            <div class="column" style="margin-right:250px;">
               <div class="col" style="font-weight:bold;font-size:50px;text-align:center; color:#32584E;"> Covid-19</div>
               <div class="col q-mt-lg" style="font-weight:bold;font-size:16px;text-align:center;color:#32584E;" > Toutes les informations en temps réel</div>
             </div>

             <template>

               <q-btn flat  icon="facebook" style="margin-right:-20px;" />
               <q-btn flat style="margin-right:-20px;"> <i class='bx bxl-twitter bx-sm'></i></q-btn>
               <q-btn flat> <i class='bx bxl-instagram bx-sm' ></i> </q-btn>

             </template>

          </div>
       </q-card-section>
     </q-card>
    </q-header>

  <q-page-container>
      <router-view />
    <footer-component></footer-component>
  </q-page-container>


  </q-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import footerComponent from 'components/footerComponent.vue';
import { openURL } from 'quasar';
@Component({
  components: { footerComponent}
})
export default class MainLayout extends Vue {

  openUrl() {
    openURL('https://www.gouvernement.fr/info-coronavirus');
    return null;
  }
}
</script>

<style lang="stylus">
div
  font-family $fontfamily
  font-size $space-base

</style>

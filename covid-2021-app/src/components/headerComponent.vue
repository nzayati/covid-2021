<template>
  <q-card>
    <q-card-section>
      <!-- le menu -->
      <div class="q-pt-sm">
        <div class="q-gutter-sm row justify-center" >

          <q-btn flat color="primary" @click="$router.replace('/')" label="Accueil" >
          </q-btn>

          <q-btn  flat color="primary" @click="$router.replace('/statistique')" label="Statistique des cas et hospitalisation">
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
                  @click="openUrl('https://www.gouvernement.fr/info-coronavirus')">
            <q-item-section style="font-weight:bold;font-size:16px;">Gouvernement</q-item-section>
          </q-item>
        </q-list>

        <div class="column" style="margin-right:250px;">
          <div class="col" style="font-weight:bold;font-size:50px;text-align:center; color:#32584E;"> Covid-19</div>
          <div class="col q-mt-lg" style="font-weight:bold;font-size:16px;text-align:center;color:#32584E;" > Toutes les informations en temps réel</div>
        </div>

        <template>
          <q-btn flat  icon="facebook" style="margin-right:-20px;"  @click="openUrl('https://www.facebook.com/coronavirus_info/')"/>
          <q-btn flat style="margin-right:-20px;"  @click="openUrl('https://twitter.com/covid19_info?lang=fr')"> <i class='bx bxl-twitter bx-sm'></i></q-btn>
          <q-btn flat  @click="openUrl('https://www.instagram.com/gouvernementfr/?hl=fr')"> <i class='bx bxl-instagram bx-sm' ></i> </q-btn>

        </template>

      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
name: "headerComponent"
  ,methods:{
    openUrl(url){
      window.open(url, "_blank")
   }
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <q-card style="background-color:#32584E; height:320px">
      <q-card-section class="q-mb-md">
        <div class=" q-gutter-sm row ">
         <div class="col">
           <p style="color:white;font-size:20px;text-align:center;" class="q-mt-lg"> N'oubliez pas les gestes barrières</p>
           <div class="flex justify-center">
             <q-img :src="'geste_barriere.png'"
             style="max-width:700px;"
             class="q-ml-xl"/>
             </div>
         </div>
          <div class="col rounded-borders shadow-2 q-mr-md" style="background-color:#F2F2F2;max-width:450px;height:230px; color:#32584E;">
            <div class="row justify-center q-mt-lg" >
            <q-list >
                <q-item clickable style="margin-bottom:-25px;" @click="$router.replace('/')">Accueil
                </q-item>
                <q-item clickable style="margin-bottom:-25px;" @click="$router.replace('/statistique')" >Statistique des cas et hospitalisation
                </q-item>
                <q-item clickable style="margin-bottom:-25px;" @click="$router.replace('/vaccination')">Information vaccination
                </q-item>
                <q-item clickable style="margin-bottom:-25px;" @click="$router.replace('/prevision')">Données prévisionnelles
                </q-item>
                <q-item clickable style="margin-bottom:-25px;" @click="$router.replace('/voyage')">Information voyage
                </q-item>
                <q-item clickable style="margin-bottom:-15px;" @click="$router.replace('/contact')" >Contact
                </q-item>
                <q-separator />
                <q-item style="margin-bottom:-25px;">Tel: 0657890988
                </q-item>
                <q-item>Email: info-covid-19@gmail.com
                </q-item>
              </q-list>
            </div>
          </div>
        </div>
      </q-card-section>

      <q-separator/>

      <q-card-section style="background-color:#192C27;color:white;font-size:14px;text-align:center; margin-top:-10px;"> @2021 Master 1 Miage Apprentissage
      </q-card-section>
  </q-card>
  </div>
</template>

<script>
export default {
name: "footerComponent"
}
</script>

<style scoped lang="stylus">
</style>

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
              <div class="text-h6 text-weight-bold">Nombre total de personnes vaccinées</div>
              <div class="text-caption text-italic">Cumul de personnes ayant reçu une dose ou deux doses de vaccin</div>
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
              <div class="text-caption text-italic" >*Deux doses sont nécessaires pour considérer qu'une personne est vaccinée</div>
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
              <div class="text-h6 text-weight-bold">Nombre de personnes ayant reçues deux doses de vaccin</div>
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
export default {
name: "Vaccination",
  components: { Banniere },
}
</script>

<style scoped>

</style>

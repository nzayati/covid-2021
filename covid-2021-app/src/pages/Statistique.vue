<template>
  <q-card class="q-pb-xl">
    <q-card-section>
      <Banniere
        titre="Statistiques des cas et hospitalisations "></Banniere>
    </q-card-section>
  </q-card>
</template>

<script>
import Service from 'src/service/infoCovid';
import Banniere from 'components/Banniere.vue';
export default {
name: "Statistique",
  components: { Banniere },
  data(){
  return {reponse :null}
  },
  async mounted() {
    let covidService = new Service();

    this.reponse = await covidService.getInfoRegion();
  }
}
</script>

<style scoped>

</style>

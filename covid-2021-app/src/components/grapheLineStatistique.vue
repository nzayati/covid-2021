<template>
  <div style="width:550px;">
    <canvas id="covidLine-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
import Service from 'src/service/serviceInfoCovid';

let today = new Date();
let dd = String(today.getDate()-1).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today =yyyy+'-'+mm+'-'+dd;
let covidService = new Service(today);

export default {
  name: "grapheLineStatistique",
  props: {
    date1 :"",
    date2:"",
  },
  data(){
    return {
      CovidDataCases :""
    }
  },
  async mounted() {
    this.CovidDataCases = await covidService.getDataGraphe(this.date1,this.date2,"Death");
    const ctx = document.getElementById('covidLine-chart');
    new Chart(ctx, this.CovidDataCases);
  }
}
</script>

<style scoped>

</style>

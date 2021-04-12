<template>
  <div style="width:1000px;height:540px;">
    <canvas id="vaccinLine-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
import Service from 'src/service/serviceVaccins';

const vaccinService = new Service();

export default {
  name: "grapheLineVaccin",
  props: {
    date1 :"",
    date2:"",
  },
  data(){
    return {
      vaccinDataCases :""
    }
  },
  async mounted() {
    this.vaccinDataCases = await vaccinService.getDataGraphe(this.date1.replaceAll("/","-"),this.date2.replaceAll("/","-"));
    const ctx = document.getElementById('vaccinLine-chart');
    new Chart(ctx, this.vaccinDataCases);
  }
}
</script>

<style scoped>

</style>



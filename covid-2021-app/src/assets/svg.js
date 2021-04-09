import Service from 'src/service/serviceInfoCovid';
$(document).ready(async function() {
  let covidService = new Service();
  document.getElementById("idf").innerHTML = await covidService.getInfoRegion();
  console.log("hello"+document.getElementById("idf").innerHTML);
});

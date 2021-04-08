import Service from 'src/service/infoCovid';
$(document).ready(async function() {
  let covidService = new Service();
  document.getElementById("idf").innerHTML = await covidService.getInfoRegion();
  console.log("hello"+document.getElementById("idf").innerHTML);
});

import axios from "axios";

export default class infoCovid {


    getInfoDepartement(){
      let today = new Date();
      let dd = String(today.getDate()-1).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      let yyyy = today.getFullYear();
      today =yyyy+'-'+mm+'-'+dd;
      console.log('https://coronavirusapi-france.now.sh/AllDataByDate?date='+today);
      return new Promise(function (resolve, reject) {
        axios
          .get('https://coronavirusapi-france.now.sh/AllDataByDate?date='+today)
          .then(response => {
            resolve(response);;
          }).catch(error => {
          response;
          });
      });
   }
   async getInfoRegion(){
      //les régions de france
      const AuvergneRhoneAlpes =["DEP-01","DEP-03","DEP-07","DEP-15","DEP-26","DEP-38","DEP-42","DEP-43","DEP-63","DEP-69","DEP-73","DEP-74"];
      const BourgogneFrancheComte = [];

      let result =  await this.getInfoDepartement();
      let copieResult = JSON.parse(JSON.stringify(result.data.allFranceDataByDate));

      let AuvergneRhoneAlpesSum = AuvergneRhoneAlpes.reduce((a,e) => {return a.concat(copieResult.filter(c=> c.code === e))},[]).reduce((a,e)=> a+ e.nouvellesHospitalisations,0);
      return AuvergneRhoneAlpesSum;
   }

}

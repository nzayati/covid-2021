import axios from "axios";

export default class serviceInfoCovid {
  date;
  constructor(date) {
    this.date = date;
  }


    getInfoDepartement(){

      return new Promise(function (resolve, reject) {
        axios
          .get('https://coronavirusapi-france.now.sh/AllDataByDate?date='+this.date)
          .then(response => {
            resolve(response);
          }).catch(error => {
            reject();
          });
      });
   }

   getInfoDepartementByDate(date){
     return new Promise(function (resolve, reject) {
       axios
         .get('https://coronavirusapi-france.now.sh/AllDataByDate?date='+date)
         .then(response => {
           resolve(response);
         }).catch(error => {
         reject();
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

   getDepartement(){
     return new Promise(function (resolve, reject) {
       axios
         .get('https://geo.api.gouv.fr/departements')
         .then(response => {
           resolve(response);
         }).catch(error => {
            reject();
       });
     });
 }

  getGlobalDataFranceByDate(today){
    let url ='https://coronavirusapi-france.now.sh/FranceGlobalDataByDate?date='+today;
    console.log('https://coronavirusapi-france.now.sh/FranceGlobalDataByDate?date='+today);
    return new Promise(function (resolve, reject) {
      axios
        .get(url)
        .then(response => {
          resolve(response);
          console.log("passage");
        }).catch(error => {
           reject();
      });
    });
  }
    getCasCovidFranceFromTo(date1,date2){
      let url ='https://api.covid19api.com/total/country/france/status/confirmed?from='+date1+'T00:00:00Z&to='+date2+'T00:00:00Z';
      console.log(url);
      return new Promise(function (resolve, reject) {
        axios
          .get(url)
          .then(response => {
            resolve(response);
            console.log(JSON.stringify(response.data[0].Date));
          }).catch(error => {
          reject();
        });
      });
    }

    async getDataGraphe(date1,date2){
      let result = await this.getCasCovidFranceFromTo(date1,date2);
      let annee =parseInt(result.data[0].Date.substring(0,4)) ;
      let mois = parseInt(result.data[0].Date.substring(5,7)) ;
      let arrayData=[result.data[0]];
      result.data.forEach(e=> {
         let zero = mois <10 ? "0":"";
         if(!e.Date.includes(annee.toString()+"-"+zero+mois.toString())){
           arrayData.push(e);
         }
         annee = parseInt(e.Date.substring(0,4));
         mois = parseInt(e.Date.substring(5,7)) ;
        }
      );
      arrayData.push(result.data[result.data.length-1]);
      let labels=[];
      let data=[];
      arrayData.forEach(e=>{
        labels.push(e.Date.substring(0,10));
        data.push(e.Cases);
      })
      console.log(JSON.stringify(arrayData));
      let CovidDataCases = {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Nombre de cas Covid confirmés",
              data: data,
              backgroundColor: "rgba(71, 183,132,.5)",
              borderColor: "#47b784",
              borderWidth: 3
            }
          ]
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25
                }
              }
            ]
          }
        }
      };
      return CovidDataCases;
    }



}

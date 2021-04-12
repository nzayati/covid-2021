import axios from "axios";

export default class serviceInfoCovid {
  date;

  constructor(date) {
    this.date = date;
  }


  getLiveDataCovidFrance(){
    return new Promise(function (resolve, reject) {
      axios
        .get('https://coronavirusapi-france.vercel.app/FranceLiveGlobalData')
        .then(response => {
          resolve(response);
        }).catch(error => {
        reject();
      });
    });
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
    return new Promise(function (resolve, reject) {
      axios
        .get(url)
        .then(response => {
          resolve(response);
        }).catch(error => {
           reject();
      });
    });
  }
    getInfoCovidFranceAll(){
      return new Promise(function (resolve, reject) {
        axios
          .get('https://disease.sh/v3/covid-19/historical/France?lastdays=all')
          .then(response => {
            resolve(response);
          }).catch(error => {
          reject();
        });
      });
    }

    async getDataGraphe(date1,date2,retour){
      let result = await this.getInfoCovidFranceAll();
      let date1formatted  = new Date(date1);
      let date2formatted = new Date (date2);
      let casesList = result.data.timeline.cases;
      let deathList = result.data.timeline.deaths;
      let recoveredList = result.data.timeline.recovered;
      let annee =parseInt(date1.substring(0,4)) ;
      let mois = parseInt(date1.substring(5,7)) ;
      let arrayCases = [];
      Object.keys(casesList).forEach(e=> {
        let dateCase = new Date(e);
        if (date1formatted <= dateCase && date2formatted >= dateCase) {
          let dd = String(dateCase.getDate()).padStart(2, '0');
          let mm = String(dateCase.getMonth() + 1).padStart(2, '0');
          let yyyy = dateCase.getFullYear();
          dateCase = yyyy + '-' + mm + '-' + dd;
          let zero = mois < 10 ? "0" : "";
          if(Date.parse(date1) == Date.parse(e) || Date.parse(date2) == Date.parse(e) ){
            arrayCases.push([{"date": e, "cas": casesList[e]}]);
          }

          if (!dateCase.includes(annee.toString() + "-" + zero + mois.toString()) && Date.parse(date2) != Date.parse(e)) {
            arrayCases.push([{"date": e, "cas": casesList[e]}]);
            let date = e.split('/');
            annee = parseInt("20" + date[2]);
            mois = parseInt(date[0]);
          }
        }
      });

      let arrayDeaths = [];
      Object.keys(deathList).forEach(e=> {
        let dateD = new Date(e);
        if (date1formatted <= dateD && date2formatted >= dateD) {
          let dd = String(dateD.getDate()).padStart(2, '0');
          let mm = String(dateD.getMonth() + 1).padStart(2, '0');
          let yyyy = dateD.getFullYear();
          dateD = yyyy + '-' + mm + '-' + dd;
          let zero = mois < 10 ? "0" : "";
          if(Date.parse(date1) == Date.parse(e) || Date.parse(date2) == Date.parse(e) ){
            arrayDeaths.push([{"date": e, "death": deathList[e]}]);
          }

          if (!dateD.includes(annee.toString() + "-" + zero + mois.toString()) && Date.parse(date2) != Date.parse(e)) {
            arrayDeaths.push([{"date": e, "death": deathList[e]}]);
            let date = e.split('/');
            annee = parseInt("20" + date[2]);
            mois = parseInt(date[0]);
          }
        }
      });

      let arrayRecovered = [];
      Object.keys(recoveredList).forEach(e=> {
        let dateR = new Date(e);
        if (date1formatted <= dateR && date2formatted >= dateR) {
          let dd = String(dateR.getDate()).padStart(2, '0');
          let mm = String(dateR.getMonth() + 1).padStart(2, '0');
          let yyyy = dateR.getFullYear();
          dateR = yyyy + '-' + mm + '-' + dd;
          let zero = mois < 10 ? "0" : "";
          if(Date.parse(date1) == Date.parse(e) || Date.parse(date2) == Date.parse(e) ){
            arrayRecovered.push([{"date": e, "recovered": recoveredList[e]}]);
          }

          if (!dateR.includes(annee.toString() + "-" + zero + mois.toString()) && Date.parse(date2) != Date.parse(e)) {
            arrayRecovered.push([{"date": e, "recovered": recoveredList[e]}]);
            let date = e.split('/');
            annee = parseInt("20" + date[2]);
            mois = parseInt(date[0]);
          }
        }
      });

      let labels=[];
      let data=[];
      let type ="";
      let nom ="";
      let background="";
      let color = "";

      switch (retour){
        case "Cases":
          arrayCases.forEach(e=>{
            labels.push(e[0].date);
            data.push(e[0].cas);
          });
          type="bar";
          nom ="Nombre de cas Covid confirmés";
          background ="rgba(54,73,93,.5)";
          color = "#36495d";
          break;

        case "Death":
          arrayDeaths.forEach(e=>{
            labels.push(e[0].date);
            data.push(e[0].death);
          });
          type="line";
          nom ="Total des décès";
          background ="#ff6384";
          color = "rgba(255, 0, 0, 0.8)";
          break;

        case "Recovered":
          arrayRecovered.forEach(e=>{
            labels.push(e[0].date);
            data.push(e[0].recovered);
          });
          type="radar";
          nom ="Total des guérisons";
          background = "rgba(71, 183,132,.5)";
          color= "#47b784";
          break;
      }


      let CovidDataCases = {
        type: type,
        data: {
          labels: labels,
          datasets: [
            {
              label: nom,
              data: data,
              backgroundColor: background,
              borderColor: color,
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

  getCountries(){
    return new Promise(function (resolve, reject) {
      axios
        .get('https://coronavirus-19-api.herokuapp.com/countries')
        .then(response => {
          resolve(response);
        }).catch(error => {
        reject();
      });
    });
  }


  async getResultCountry(destination) {
    let url = 'https://coronavirus-19-api.herokuapp.com/countries/'+destination;
    return new Promise(function (resolve, reject) {
      axios
        .get(url)
        .then(response => {
          resolve(response);
        }).catch(error => {
        reject();
      });
    });
  }

  getListeCentreDepistage(lat,long){
    let url ='https://data.iledefrance.fr/api/records/1.0/search/?dataset=centres-depistage-covid-ile-de-france&q=&rows=15&sort=-dist&&facet=reg_code&facet=reg_name&facet=dep_code&facet=dep_name&facet=epci_code&facet=epci_name&facet=com_arm_name&facet=com_arm_area_code&geofilter.distance='+lat+'%2C'+long+'%2C10000';
    return new Promise(function (resolve, reject) {
      axios
        .get(url).then(response => {
          resolve(response);
        }).catch(error => {
        reject();
      });
    });
  }

  async getCentreDepistageLocal(lat,long){
    let resultcentreDepistage = await this.getListeCentreDepistage(lat,long);
    let arrayCentreAll= resultcentreDepistage.data.records;
    let arrayCentreDetails= [];
    arrayCentreAll.forEach(e=>
                    {arrayCentreDetails.push(e.fields);});
    return arrayCentreDetails;
  }
}

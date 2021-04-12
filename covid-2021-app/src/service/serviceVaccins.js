import axios from "axios";

export default class serviceVaccins {

  getInfoVaccinFrance(){
    return new Promise(function (resolve, reject) {
      axios
        .get('https://www.data.gouv.fr/fr/datasets/r/b273cf3b-e9de-437c-af55-eda5979e92fc')
        .then(response => {
          resolve(response);
        }).catch(error => {
        reject();
      });
    });
  }

  getInfoVaccinRegion(){
    return new Promise(function (resolve, reject) {
      axios
        .get('https://www.data.gouv.fr/fr/datasets/r/900da9b0-8987-4ba7-b117-7aea0e53f530')
        .then(response => {
          resolve(response);
        }).catch(error => {
        reject();
      });
    });
  }

  async getInfoVaccinByDate(date, vaccin,region){
    let resultInfoVaccin ="";
    if(region == "FR")
      resultInfoVaccin = await this.getInfoVaccinFrance();
    else
      resultInfoVaccin = await this.getInfoVaccinRegion();

    let infoVaccinList = resultInfoVaccin.data.split(/\r\n|\n/);
    let arrayInfoVaccin= [];
    infoVaccinList.forEach(e=>{
      arrayInfoVaccin.push(e.split(";"));
    });
    if(region == "FR") {
      let resultInfoDateVaccinFr = arrayInfoVaccin.filter(e => e[1] == vaccin && e[2] == date)[0];
      return resultInfoDateVaccinFr? resultInfoDateVaccinFr : arrayInfoVaccin [arrayInfoVaccin.length-2];
    }
    else{
      let resultInfoDateVaccinReg = arrayInfoVaccin.filter(e=> e[0]== region && e[1]== vaccin && e[2] == date )[0];
      return resultInfoDateVaccinReg? resultInfoDateVaccinReg : arrayInfoVaccin [arrayInfoVaccin.length-2];
    }

    return null;
  }

  async getDataGraphe(date1,date2){
    let resultInfoVaccin = await this.getInfoVaccinFrance();
    let infoVaccinList = resultInfoVaccin.data.split(/\r\n|\n/);
    let arrayInfoAllVaccin= [];
    infoVaccinList.forEach(e=>{
      arrayInfoAllVaccin.push(e.split(";"));
    });
    let arrayInfoVaccin = arrayInfoAllVaccin.filter(e=> e[1]==0);
    date2 = arrayInfoVaccin.filter(e=> e[2]==date2).length != 0 ? date2 : arrayInfoVaccin[arrayInfoVaccin.length -1][2];

    let date1formatted  = new Date(date1);
    let date2formatted = new Date (date2);
    let annee =date1.substring(0,4) ;
    let mois = date1.substring(5,7);
    let arrayInfoVaccinFromTo = [];
    arrayInfoVaccin.forEach(e=> {
      let dateLigne = new Date(e[2]);

      if (date1formatted <= dateLigne && date2formatted >= dateLigne) {
        if(Date.parse(date1) == Date.parse(e[2]) || Date.parse(date2) == Date.parse(e[2])){
          arrayInfoVaccinFromTo.push([{"date": e[2], "cumulDose1": e[5],"cumulDose2":e[6]}]);
        }

        if (!e[2].includes(annee+ "-" +mois) &&  Date.parse(date2) != Date.parse(e[2])) {
          arrayInfoVaccinFromTo.push([{"date": e[2], "cumulDose1": e[5],"cumulDose2":e[6]}]);
          annee = e[2].substring(0,4);
          mois = e[2].substring(5,7);
        }
      }
    });

    let labels = [];
    let data1 = [];
    let data2 = [];

    arrayInfoVaccinFromTo.forEach(e=>{
      labels.push(e[0].date);
      data1.push(e[0].cumulDose1);
      data2.push(e[0].cumulDose2);
    });

    let CovidDataCases = {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Cumul des personnes ayant reçu une dose de vaccin",
            data: data1,
            backgroundColor: "rgba(54,73,93,.5)",
            borderColor: "#36495d",
            borderWidth: 3
          },
          {
            label: "Cumul des personnes ayant reçu deux doses de vaccin",
            data: data2,
            backgroundColor: "#ff6384",
            borderColor: "rgba(255, 0, 0, 0.8)",
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

  getListeCentreVaccin(lat,long){
    let url = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=covid19-france-lieu-vaccination&q=&rows=15&sort=-dist&facet=vaccine_center_accessibility&facet=appointement_access&facet=pre_vaccination&facet=reg_code&facet=reg_name&facet=dep_code&facet=dep_name&facet=epci_code&facet=epci_name&facet=com_arm_name&facet=com_arm_area_code&geofilter.distance='+lat+'%2C'+long+'%2C10000';
    return new Promise(function (resolve, reject) {
      axios
        .get(url).then(response => {
        resolve(response);
      }).catch(error => {
        reject();
      });
    });
  }

  async getCentreVaccinLocal(lat, lng) {
    let resultcentreVaccin = await this.getListeCentreVaccin(lat,lng);
    let arrayCentreAll= resultcentreVaccin.data.records;
    let arrayCentreDetails= [];
    arrayCentreAll.forEach(e=>
    {arrayCentreDetails.push(e.fields);});
    console.log('centre'+JSON.stringify(arrayCentreDetails[1]));
    return arrayCentreDetails;
  }

}

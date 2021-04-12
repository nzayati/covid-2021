import axios from "axios";
import {matElectricalServices} from "@quasar/extras/material-icons";

export default class serviceInfoCovid {

  getAllIndicateurCovidFrance(){
    return new Promise(function (resolve, reject) {
      axios
        .get('https://www.data.gouv.fr/fr/datasets/r/f335f9ea-86e3-4ffa-9684-93c009d5e617')
        .then(response => {
          resolve(response);
        }).catch(error => {
        reject();
      });
    });
  }


  async getIndicateurCovidFrance(){
    let result = await this.getAllIndicateurCovidFrance();
    let infoToday = result.data.split(/\r\n|\n/);
    let arrayInfoDayFrance = [];
    infoToday.forEach(e=>{
      arrayInfoDayFrance.push(e.split(","));
    });
    return  this.getIndicateurFromList(arrayInfoDayFrance,1,0);
  }

  defineColorIndice(e) {
    switch (e.nom){
      case "tx_pos":
        if (e.info <= 5)
          return "green";
        else if (e.info > 5 && e.info <=10)
          return "orange";
        else
          return "red";
        break;
      case "tx_incid":
        if (e.info <= 10)
          return "green";
        else if (e.info > 10 && e.info <=50)
          return "orange";
        else
          return "red";
        break;
      case "TO":
        if (e.info <= 0.3)
          return "green";
        else if (e.info > 0.3 && e.info <=0.6)
          return "orange";
        else
          return "red";
        break;
      case "R":
        if (e.info <= 1)
          return "green";
        else if (e.info > 1 && e.info <=1.5)
          return "orange";
        else
          return "red";
        break;
      default:
        return "";
        break;
    }
    return undefined;
  }

  getAllIndicateurCovidDep(){
    return new Promise(function (resolve, reject) {
      axios
        .get('https://www.data.gouv.fr/fr/datasets/r/5c4e1452-3850-4b59-b11c-3dd51d7fb8b5')
        .then(response => {
          resolve(response);
        }).catch(error => {
        reject();
      });
    });
  }

  async getNamedepartement(){
    let result = await this.getAllIndicateurCovidDep();
    let arrayInfodep=[];
    let infoDep = result.data.split(/\r\n|\n/);
    infoDep.forEach(e=>{
      arrayInfodep.push(e.split(","));
    });
    let listNameDep = arrayInfodep.reduce((a,e)=>{
      if(!a.includes(e[3])) {
        return a.concat(e[3]);
      }
      else
        return a ;},[]);
    listNameDep.splice(0,1);
    return listNameDep;
  }

  async getIndicateurDepartement(departement) {
    let result = await this.getAllIndicateurCovidDep();
    let arrayInfodep=[];
    let infoDep = result.data.split(/\r\n|\n/);
    infoDep.forEach(e=>{
      arrayInfodep.push(e.split(","));
    });
    let listligneDep = arrayInfodep.filter(e=> e[3] == departement);
     return this.getIndicateurFromList(listligneDep,5,1);

  }

  getIndicateurFromList(listInfo,indiceDebut, indiceDate) {

    let size = listInfo.length - 1;
    let tx_pos = {"vide": true, "nom": "tx_pos", "info": "", "date": "", "color": ""};
    let tx_incid = {"vide": true, "nom": "tx_incid", "info": "", "date": "", "color": ""};
    let TO = {"vide": true, "nom": "TO", "info": "", "color": ""};
    let R = {"vide": true, "nom": "R", "info": "", "color": ""};
    let rea = {"vide": true, "nom": "rea", "info": "", "color": ""};
    let hosp = {"vide": true, "nom": "hosp", "info": "", "color": ""};
    let rad = {"vide": true, "nom": "rad", "info": "", "color": ""};
    let dchosp = {"vide": true, "nom": "dchosp", "info": "", "color": ""};
    let incid_rea = {"vide": true, "nom": "incid_rea", "info": "", "color": ""};
    let incid_hosp = {"vide": true, "nom": "incid_hosp", "info": "", "color": ""};
    let incid_rad = {"vide": true, "nom": "incid_rad", "info": "", "color": ""};
    let incid_dchosp = {"vide": true, "nom": "incid_dchosp", "info": "", "color": ""};

    for (let i = size; i >= 0; i--) {
      let j = indiceDebut;
      [tx_pos, tx_incid, TO, R, rea, hosp, rad, dchosp, incid_rea, incid_hosp, incid_rad, incid_dchosp].forEach(e => {
        if (e.vide) {
          e.info = (listInfo[i][j] != "") ? Math.round(listInfo[i][j] * 100) / 100 : undefined;
          e.date = e.info ? listInfo[i][indiceDate] : "";
          e.vide = e.info ? false : true;
          e.color = e.info ? this.defineColorIndice(e) : "";
        }
        j++;
      })

      if (!tx_incid.vide && !tx_pos.vide && !TO.vide && !R.vide && !rea.vide && !hosp.vide && !rad.vide
        && !dchosp.vide) {
        break;
      }
    }
    return [tx_pos, tx_incid, TO, R, rea, hosp, rad, dchosp, incid_rea, incid_hosp, incid_rad, incid_dchosp];
  }

  setPrevision(tx_pos,tx_incid,TO,R){
    let arrayIndicateurs = [tx_pos,tx_incid,TO,R];
    let bordercolor = "";
    let prevision = "";
    let rouge =0;
    let orange = 0;
    let vert = 0;
    arrayIndicateurs.forEach(e=> {
      switch(e.color){
        case "red":
          rouge++;
          break;
        case "orange":
          orange++;
          break;
        case "green":
          vert++;
          break;
      }
    });
    let arrayIndiceNum = [];
    [rouge,orange,vert].forEach(c=>{
      let str="";
      switch(c){
        case 0:
          str="aucun";
          break;
        case 1:
          str= "un";
          break;
        case 2:
          str= "deux";
          break;
        case 3:
          str="trois";
          break;
        case 4:
          str="quatre";
          break;
      }
      arrayIndiceNum.push(str);
    });

    if(tx_incid.info>250  && TO.info>0.6 ){
      prevision = "Le taux d'incidence et la tension hospitalière ont dépassé leurs seuils d'alerte maximales fixés par le gouvernement =>  Possibilité très élevée de confinement , s'il n'est pas déjà en cours";
      bordercolor = "red";
    }
    if((tx_incid.info>250  && TO.info > 0.3 && TO.info<0.6)|| (TO.info>0.6 && tx_incid.info>10 && tx_incid.info<250)){
      prevision = "Le taux d'incidence ou la tension hospitalière a dépassé son seuil d'alerte maximale fixé par le gouvernement =>  Possibilité  élevée de confinement , s'il n'est pas déjà en cours";
      bordercolor = "red";
    }
    if((tx_incid.info>10 && tx_incid.info<250) && (TO.info > 0.3 && TO.info<0.6) ){
      prevision = "Le taux d'incidence et la tension hospitalière sont oranges => Possibilité moyenne de confinement ou de déconfinement";
      bordercolor = "orange";
    }
    if((tx_incid.info>10 && tx_incid.info<250 && TO.info<0.3) || (TO.info > 0.3 && TO.info<0.6  && tx_incid.info<10)){
      prevision = "Le taux d'incidence ou la tension hospitalière est orange => Possibilité faible de confinement et possibilité élevée de déconfinement";
      bordercolor = "orange";
    }
    if(tx_incid.info<10 &&  TO.info<0.3 ) {
      prevision = "Le taux d'incidence et la tension hospitalière sont verts => Possibilité très élevée de déconfinement, si confinement en cours";
      bordercolor = "green";
    }
    if(tx_incid.info>250 && TO.info>0.6 && tx_pos.info>10 && R.info>1.5) {
      prevision = "Tous les indicateurs clé ont dépassé leurs seuils d'alerte maximales fixés par le gouvernement =>  Possibilité très élevées de confinement , s'il n'est pas déjà en cours";
      bordercolor = "red";
    }
    if((tx_incid.info>10 && tx_incid.info<250) && (TO.info > 0.3 && TO.info<0.6) && (tx_pos.info>5 && tx_pos.info <10) && (R.info>1 && R.info< 1.5)) {
      prevision = "Tous les indicateurs clé sont oranges => Possibilité moyenne de confinement et de déconfinement";
      bordercolor = "orange";
    }

    if(tx_incid.info<10 &&  TO.info<0.3 &&  tx_pos.info <5 && R.info< 1) {
      prevision = "Tous les indicateurs clé sont verts => Possibilité très élevée de déconfinement, si confinement en cours";
      bordercolor = "green";
    }
      return [bordercolor,prevision].concat(arrayIndiceNum);
  }
}

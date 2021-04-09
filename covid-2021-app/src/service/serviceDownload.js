import axios from "axios";

export default class serviceDownload {

  async downloadPdpSup11() {
    return new Promise(function (resolve, reject) {
      axios({
        url: 'https://www.interieur.gouv.fr/content/download/125988/1007782/file/25-01-2021-engagement-sur-l-honneur-plus-de-11-ans-espace-europeen.pdf',
        method: 'GET',
        responseType: 'blob',
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Declaration_voyage_de-plus-de-11.pdf');
        document.body.appendChild(link);
        link.click();
      }).catch(error => {
        reject();
      });
    });
  }

  async downloadDocSup11() {
    return new Promise(function (resolve, reject) {
      axios({
        url: 'https://www.interieur.gouv.fr/content/download/125989/1007787/file/25-01-2021-engagement-sur-l-honneur-plus-de-11-ans-espace-europeen.docx',
        method: 'GET',
        responseType: 'blob',
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Declaration_voyage_de-plus-de-11.docx');
        document.body.appendChild(link);
        link.click();
      }).catch(error => {
        reject();
      });
    });
  }

  async downloadTxtSup11() {
    return new Promise(function (resolve, reject) {
      axios({
        url: 'https://www.interieur.gouv.fr/content/download/125990/1007792/file/25-01-2021-engagement-sur-l-honneur-plus-de-11-ans-espace-europeen.txt',
        method: 'GET',
        responseType: 'blob',
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Declaration_voyage_de-plus-de-11.txt');
        document.body.appendChild(link);
        link.click();
      }).catch(error => {
        reject();
      });
    });
  }

  async downloadPdpMin11() {
    return new Promise(function (resolve, reject) {
      axios({
        url: 'https://www.interieur.gouv.fr/content/download/125986/1007772/file/25-01-2021-engagement-sur-l-honneur-moins-de-11-ans-espace-europeen.pdf',
        method: 'GET',
        responseType: 'blob',
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Declaration_voyage_de-moins-de-11.pdf');
        document.body.appendChild(link);
        link.click();
      }).catch(error => {
        reject();
      });
    });
  }

  async downloadDocMin11() {
    return new Promise(function (resolve, reject) {
      axios({
        url: 'https://www.interieur.gouv.fr/content/download/125985/1007767/file/25-01-2021-engagement-sur-l-honneur-moins-de-11-ans-espace-europeen.docx',
        method: 'GET',
        responseType: 'blob',
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Declaration_voyage_de-moins-de-11.docx');
        document.body.appendChild(link);
        link.click();
      }).catch(error => {
        reject();
      });
    });
  }

  async downloadTxtMin11() {
    return new Promise(function (resolve, reject) {
      axios({
        url: 'https://www.interieur.gouv.fr/content/download/125987/1007777/file/25-01-2021-engagement-sur-l-honneur-moins-de-11-ans-espace-europeen.txt',
        method: 'GET',
        responseType: 'blob',
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Declaration_voyage_de-moins-de-11.txt');
        document.body.appendChild(link);
        link.click();
      }).catch(error => {
        reject();
      });
    });
  }
}

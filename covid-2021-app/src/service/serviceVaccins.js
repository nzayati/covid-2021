import axios from "axios";

export default class serviceVaccins {
  date;
  constructor(date) {
    this.date = date;
  }

  getDataFromAPI(date) {
    return new Promise(function(resolve, reject) {
      axios
        .get(
          "https://public.opendatasoft.com/api/records/1.0/search/?dataset=covid-19-france-vaccinations-age-sexe-dep&q=&rows=105&facet=date&refine.date=" +
            date +
            "&refine.variable_label=Tous+%C3%A2ges"
        )
        .then(response => {
          resolve(response);
          console.log("?" + response);
        })
        .catch(error => {
          reject();
        });
    });
  }
}

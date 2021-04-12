<template>
  <q-page className="justify-evenly">
    <vaccination-component></vaccination-component>
  </q-page>
</template>

<script lang="ts">
import VaccinationComponent from 'components/VaccinationComponent.vue';
import {Vue, Component} from 'vue-property-decorator';

@Component({
  components: {VaccinationComponent}
})
export default class Vaccination extends Vue {

};
</script>

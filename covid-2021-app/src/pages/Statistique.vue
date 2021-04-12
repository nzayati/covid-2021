<template>
  <q-page className="justify-evenly">
    <statistique-component></statistique-component>
  </q-page>
</template>

<script lang="ts">
import StatistiqueComponent from 'components/StatistiqueComponent.vue';
import {Vue, Component} from 'vue-property-decorator';

@Component({
  components: {StatistiqueComponent}
})
export default class Statistique extends Vue {

};
</script>

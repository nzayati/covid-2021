<template>
  <q-page className="justify-evenly">
    <voyage-component></voyage-component>
  </q-page>
</template>

<script lang="ts">
import VoyageComponent from 'components/VoyageComponent.vue';
import {Vue, Component} from 'vue-property-decorator';

@Component({
  components: {VoyageComponent}
})
export default class Voyage extends Vue {

};
</script>

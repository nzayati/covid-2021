<template>
  <q-page className="justify-evenly">
    <prevision-component></prevision-component>
  </q-page>
</template>

<script lang="ts">
import PrevisionComponent from 'components/PrevisionComponent.vue';
import {Vue, Component} from 'vue-property-decorator';

@Component({
  components: {PrevisionComponent}
})
export default class Prevision extends Vue {

};
</script>

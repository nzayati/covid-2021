<template>
  <q-page class="justify-evenly">
    <accueil-component></accueil-component>
  </q-page>
</template>

<script lang="ts">
import AccueilComponent from 'components/AccueilComponent.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: { AccueilComponent }
})
export default class PageIndex extends Vue {

};
</script>

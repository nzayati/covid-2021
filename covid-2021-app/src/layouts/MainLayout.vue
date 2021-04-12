<template>
  <q-layout view="lHh Lpr lFf">
   <q-header class="bg-white" elevated>
    </q-header>

  <q-page-container>
    <header-component></header-component>
      <router-view />
    <footer-component></footer-component>
  </q-page-container>


  </q-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import footerComponent from 'components/footerComponent.vue';
import headerComponent from 'components/headerComponent.vue';
import { openURL } from 'quasar';
@Component({
  components: { footerComponent,headerComponent}
})
export default class MainLayout extends Vue {

  openUrl() {
    openURL('https://www.gouvernement.fr/info-coronavirus');
    return null;
  }
}
</script>

<style lang="stylus">
div
  font-family $fontfamily
  font-size $space-base

</style>

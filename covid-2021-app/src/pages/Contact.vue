<template>
  <q-page className="justify-evenly">
    <contact-component></contact-component>
  </q-page>
</template>

<script lang="ts">
import ContactComponent from 'components/ContactComponent.vue';
import {Vue, Component} from 'vue-property-decorator';

@Component({
  components: {ContactComponent}
})
export default class Contact extends Vue {

};
</script>

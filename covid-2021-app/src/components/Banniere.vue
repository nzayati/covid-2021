<template>
  <div  class="q-mt-sm">
    <q-img :src="'https://ichef.bbci.co.uk/news/976/cpsprodpb/13CE5/production/_112052118_new.jpg'"
           style="max-height:400px">
      <div class="absolute-full text-subtitle2 flex flex-center" style="font-size:40px;">
        {{ titre }}
      </div>
    </q-img>
  </div>
</template>

<script>
export default {
name: "Banniere",
props: {
    titre :""
  }
}
</script>

<style scoped>

</style>

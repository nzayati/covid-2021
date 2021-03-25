<template>
  <q-card class="q-pb-xl">
    <q-card-section>
        <div  class="q-mt-sm">
          <q-img :src="'https://ichef.bbci.co.uk/news/976/cpsprodpb/13CE5/production/_112052118_new.jpg'"
            style="max-height:500px">
            <div class="absolute-full text-subtitle2 flex flex-center" style="font-size:40px;">
            Les statistiques au temps du Covid 19
            </div>
          </q-img>
        </div>
    </q-card-section>
    <q-card-section>
      <div class="q-gutter-sm row justify-center">
        <div class="col q-pt-lg q-pl-lg" style="margin-right:-40px; padding-left:50px;">
          <q-img :src="'https://www.lhaylesroses.fr/images/6-Solidarite-Sante/Test_PCR.jpg'"
                style="max-width:500px;"
                 class="rounded-borders shadow-2">
          </q-img>
        </div>
        <div class="col q-pt-lg q-pr-lg" style="margin-left:-40px; margin-top:40px; margin-right:40px;color:#32584E;">
          <div style="text-align: center;font-size:30px;font-weight: bold; " class="q-pb-md"> A propos de la Covid</div>
          <div style="text-align: center;font-size:16px;"> <p>Les coronavirus forment une grande famille de virus. Ils peuvent être à l’origine de diverses maladies allant du simple rhume à des maladies plus graves comme le syndrome respiratoire aigu sévère (SRAS) et le syndrome respiratoire du Moyen-Orient (CoV-SRMO).
            La COVID-19 est une nouvelle souche de coronavirus n’ayant encore jamais été identifiée chez l’homme.</p>
            <p>
          La transmission se fait par les gouttelettes respiratoires produites en toussant ou en éternuant;
            les contacts personnels directs, comme le toucher ou les poignées de mains ou par les contacts avec un objet sur lequel se trouve le virus.
            </p>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
name: "AccueilComponent"
}
</script>

<style scoped>

</style>

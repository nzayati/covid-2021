<template>
  <q-card class="q-pb-xl">
    <q-card-section>
      <Banniere
        titre="Contact"></Banniere>
    </q-card-section> <q-card class="my-card q-pa-xl ">
    <div class="flex justify-center" style = "width:100%;">
      <q-card class="my-card q-pa-md my-card q-pt shadow-10 " style="margin-top:40px;margin-bottom:20px;text-align:center; width:50%;max-height:100px;">
        <q-card-section class="text-black" >
          <div style ="font-size:30px;color:#32584E;font-weight:bold;"> NOUS CONTACTER </div>
        </q-card-section>
      </q-card>
    </div>
  </q-card>
   <div class="q-pa-md" style="margin-bottom:100px;">
      <div class="flex justify-center">

        <q-form style="width:50%"
                @submit="onSubmit"
                @reset="onReset"
                class="q-gutter-md"
        >
          <q-input
            outlined
            v-model="name"
            label="Nom et Prénom *"
            hint="Nom et Prénom"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Veuillez entrer votre nom']"
          />

          <q-input
            outlined
            type="mail"
            v-model="mail"
            label="Adresse mail *"
          />

          <q-input
            outlined
            type="messageObject"
            v-model="messageObject"
            label="Objet du message *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Objet du message obligatoire']"
          />

          <q-input
            outlined
            type="textarea"
            v-model="message"
            label="Votre message"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Message obligatoire']"
          />

          <div>
            <q-btn label="Envoyer" type="submit" name = 'submit' id = 'submit' color="teal-10"/>
            <q-btn label="Réinitialiser" type="reset" color="bg-primary" flat class="q-ml-sm" />

          </div>
        </q-form>
      </div>
    </div>
  </q-card>
</template>

<script>
import Banniere from 'components/Banniere.vue';
import axios from 'axios';

const API_KEY = "c02f3b4561622dfe30c346bb17b946194be9b0e687f6e534ad67f2053223c0d4";
export default {
  name: "Contact",
  components: {Banniere},
  data () {
    return {
      name: null,
      mail: null,
      messageObject: null,
      message: null

    }
  },

  methods: {
    async onSubmit (evt) {
      await axios({
        method: "POST",
        url: `https://api.mailslurp.com/sendEmail?apiKey=${API_KEY}`,
        data: {
          senderId: this.name,
          to: 'sarah_12891@hotmail.fr',
          subject: this.messageObject,
          body: this.message,
        },
      })
    },

    onReset () {
      this.name = null
      this.mail= null
      this.messageObject = null
      this.message = null
    },

  }
}

</script>

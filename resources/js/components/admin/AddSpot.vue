<template>
                       <v-card width="100%">
                           <v-card-title>
                               <v-icon
                               >
                                   mdi-plus
                               </v-icon>
                               Ajouter une plateau
                           </v-card-title>
                           <v-form @submit.prevent="addSpot()">
                        <v-card-text>

                            <v-text-field prepend-icon="mdi-home" name="name" label="Nom" type="text" color="#e91f62" v-model="fields.name"></v-text-field>
                            <span v-if="errors && errors.name" class="invalid-feedback" role="alert">
                                        <strong>{{ errors.name[0] }}</strong>
                                    </span>

                            <v-text-field id="address" prepend-icon="mdi-map-marker" name="address" label="Adresse" type="text" color="#e91f62" v-model="fields.address"></v-text-field>
                            <span v-if="errors && errors.address" class="invalid-feedback" role="alert">
                                        <strong>{{ errors.address[0] }}</strong>
                                    </span>
                        </v-card-text>
                        <v-card-actions style="padding:20px;">
                            <v-spacer></v-spacer>
                            <v-btn color="#e91f62" type="submit" dark x-large>créer</v-btn>

                        </v-card-actions>
                    </v-form>
                    </v-card>

 </template>
<script>
export default {


    name: "AddSpot",
    data() {
        return {
            fields: {},
            errors: {},
        }
    },

    methods: {

        // creer un nouveau spot
        addSpot() {
            //alert("add");
            axios.post('/api/spot', this.fields);
                alert('Message sent!');

        },
    },

}
</script>

<style scoped>

</style>

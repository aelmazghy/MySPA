<template>
    <div>
    <v-snackbar v-model="show" :top="top" color="green" :timeout="timeout">
        {{message}}
    </v-snackbar>
                       <v-card width="100%" dark>
                           <v-card-title>
                               <v-icon
                               >
                                   mdi-plus
                               </v-icon>
                               Ajouter une plateau
                           </v-card-title>
                           <v-form @submit.prevent="addSpot()" v-model="valid">
                        <v-card-text>

                            <v-text-field
                                prepend-icon="mdi-home"
                                name="name"
                                label="Nom"
                                type="text"
                                color="#e91f62"
                                v-model="fields.name"
                                :rules="nameRules"
                                required></v-text-field>
                            <v-text-field
                                id="address"
                                prepend-icon="mdi-map-marker"
                                name="address"
                                label="Adresse"
                                type="text"
                                color="#e91f62"
                                v-model="fields.address"
                                :rules="addressRules"
                                required></v-text-field>
                        </v-card-text>
                        <v-card-actions style="padding:20px;">
                            <v-spacer></v-spacer>
                            <v-btn
                                color="#e91f62"
                                type="submit"
                                dark
                                x-large
                                :disabled="!valid"
                            >créer</v-btn>

                        </v-card-actions>
                    </v-form>
                    </v-card>
    </div>
 </template>
<script>
export default {


    name: "AddSpot",
    data() {
        return {
            valid: true,

            fields: {},
            errors: {},

            // Rules
            nameRules: [
                v => !!v || 'Le nom est obligatoire',
            ],
            addressRules: [
                v => !!v || 'L\'adresse est obligatoire',
            ],

            // toast
            show: false,
            top: true,
            message: "Le plateau à été ajouté",
            timeout: 3000,

        }
    },

    methods: {


        // creer un nouveau spot
        addSpot() {
            axios.post('/api/spot', this.fields);
            //alert(' ok');
            this.show = true;
            //reload page after add new spot
            setTimeout( () => window.location.reload(), 3100);

        },


    },

}
</script>

<style scoped>

</style>

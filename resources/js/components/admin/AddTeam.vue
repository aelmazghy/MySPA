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
            Ajouter une équipe
        </v-card-title>

        <v-form @submit.prevent="addTeam()" v-model="valid">
            <v-card-text>

                <v-text-field
                    prepend-icon="mdi-account"
                    name="name"
                    label="Nom"
                    type="text"
                    color="#e91f62"
                    v-model="fields.name"
                    :rules="nameRules"
                    required></v-text-field>
                <v-text-field
                    id="last"
                    prepend-icon="mdi-tooltip-account"
                    name="last"
                    label="Prénom"
                    type="text"
                    color="#e91f62"
                    v-model="fields.last"></v-text-field>
                <v-select
                    v-model="fields.spot_id"
                    :items="Spots"
                    item-text="name"
                    item-value="id"
                    id="spot_id"
                    prepend-icon="mdi-map-marker"
                    name="spot_id"
                    type="text"
                    color="#e91f62"
                    label="Plateau"
                    :rules="spotRules"
                    required
                ></v-select>
                <v-text-field
                    id="project"
                    prepend-icon="mdi-briefcase"
                    name="project"
                    label="Projet"
                    type="text"
                    color="#e91f62"
                    v-model="fields.project"
                    :rules="projectRules"
                    required></v-text-field>
            </v-card-text>
            <v-card-actions style="padding:20px;">
                <v-spacer></v-spacer>
                <v-btn color="#e91f62" type="submit" dark x-large :disabled="!valid">créer</v-btn>

            </v-card-actions>
        </v-form>
    </v-card>
</div>
</template>

<script>
export default {
name: "AddTeam",
    data() {
        return {
            valid: true,

            fields: {},
            errors: {},
            Spots: [],

            // Rules
            nameRules: [
                v => !!v || 'Le nom est obligatoire',
            ],
            spotRules: [
                v => !!v || 'Ce champ est obligatoire',
            ],
            projectRules: [
                v => !!v || 'Ce champ est obligatoire',
            ],

            // toast
            show: false,
            top: true,
            message: "L\'équipe à été ajoutée",
            timeout: 3000,
        }
    },
    created() {
        axios.get('/api/spot/get')
            .then(response => this.Spots =  response.data);
    },
    methods: {

        // creer un nouveau spot
        addTeam() {
            //alert("add");
            axios.post('/api/team', this.fields);
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

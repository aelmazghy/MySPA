<template>
    <v-card width="100%" dark>
        <v-card-title>
            <v-icon
            >
                mdi-plus
            </v-icon>
            Ajouter un jury
        </v-card-title>
        <v-form @submit.prevent="addJudge()">
            <v-card-text>

                <v-text-field prepend-icon="mdi-account" name="name" label="Nom" type="text" color="#e91f62" v-model="fields.name"></v-text-field>
                <span v-if="errors && errors.name" class="invalid-feedback" role="alert">
                <strong>{{ errors.name[0] }}</strong>
                </span>
                <v-text-field id="last" prepend-icon="mdi-tooltip-account" name="last" label="Prénom" type="text" color="#e91f62" v-model="fields.last"></v-text-field>
                <span v-if="errors && errors.last" class="invalid-feedback" role="alert">
                <strong>{{ errors.last[0] }}</strong>
                </span>

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
                >
                </v-select>
                 <span v-if="errors && errors.spot_id" class="invalid-feedback" role="alert">
                <strong>{{ errors.spot_id[0] }}</strong>
                </span>
                <v-text-field id="email" prepend-icon="mdi-email" name="email" label="Email" type="email" color="#e91f62" v-model="fields.email"></v-text-field>
                <span v-if="errors && errors.email" class="invalid-feedback" role="alert">
                <strong>{{ errors.email[0] }}</strong>
                </span>
                <v-text-field id="password" prepend-icon="mdi-key" name="password" label="Mot de passe" type="text" color="#e91f62" v-model="fields.password"></v-text-field>
                <span v-if="errors && errors.password" class="invalid-feedback" role="alert">
                <strong>{{ errors.password[0] }}</strong>
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
    name: "AddJudges",
    data() {
        return {
            fields: {},
            errors: {},
            Spots: []
        }
    },

    created() {
        axios.get('/api/spot/get')
            .then(response => this.Spots =  response.data);
    },

    methods: {
        // creer un nouveau jury
        addJudge() {
            //alert("add");
            axios.post('/api/judge', this.fields);
            alert('Message sent!');

        },
    },
}
</script>

<style scoped>

</style>

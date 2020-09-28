<template>
    <v-card width="100%">

        <v-card-title>
            <v-icon
            >
                mdi-plus
            </v-icon>
            Ajouter une équipe
        </v-card-title>

        <v-form>
            <v-card-text>

                <v-text-field prepend-icon="mdi-account" name="name" label="Nom" type="text" color="#e91f62"></v-text-field>
                <span class="invalid-feedback" role="alert">
                                        <strong></strong>
                                    </span>
                <v-text-field id="last" prepend-icon="mdi-tooltip-account" name="last" label="Prénom" type="text" color="#e91f62"></v-text-field>
                <span class="invalid-feedback" role="alert">
                                        <strong></strong>
                                    </span>

                <v-select
                    id="spot" prepend-icon="mdi-map-marker" name="spot" label="Plateau" type="text" color="#e91f62"
                    v-model="select"
                    :items="items"
                    :error-messages="errors"
                    data-vv-name="select"
                    required
                ></v-select>
                <span class="invalid-feedback" role="alert">
                                        <strong></strong>
                                    </span>
                <v-text-field id="project" prepend-icon="mdi-briefcase" name="project" label="Projet" type="text" color="#e91f62"></v-text-field>
                <span class="invalid-feedback" role="alert">
                                        <strong></strong>
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
name: "AddTeam",
    data: () => ({
        select: null,
        errors: null,
        items: [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
        ],
        checkbox: null,
    }),
}
</script>

<style scoped>

</style>

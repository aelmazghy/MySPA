<template>
    <div>
        <v-card class="result-card elevation-4">
            <v-card-text class="result-card__content">
                <!-- Card avatar -->
                <v-avatar :size="64" class="result-card__avatar" color="teal">
                    <slot name="icon" />
                </v-avatar>

                <!-- Card content -->
                <slot name="default" />
            </v-card-text>

            <!-- Card actions -->
            <v-card-actions class="result-card__actions">
                <v-btn class="actions__view" flat>
                    View
                </v-btn>
                <v-tooltip bottom>
                    <v-btn slot="activator" class="actions__open-in-new" flat icon>
                        <v-icon>open_in_new</v-icon>
                    </v-btn>
                    Open in New
                </v-tooltip>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "Teams",

    data(){
        return {
            Teams: []
        }
    },

    created() {
        axios.get('/api/team/get')
            .then(response => this.Teams =  response.data);
    },


}
</script>

<style scoped>

</style>

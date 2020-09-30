<template>
    <div>
        <v-card
            v-for="Judge in Judges"
            class="mx-auto mb-4"
            outlined
        >
            <v-list-item three-line>

                <v-list-item-content>
                    <v-list-item-title class="headline mb-1">
                        {{Judge.name}} {{Judge.last}}
                    </v-list-item-title>
                    <v-list-item-subtitle>{{Judge.email}}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action-text
                    tile
                    size="80"
                    color="grey"
                >
                    <div class="overline mb-4">
                        Plateau {{Judge.spot_id}}
                    </div>
                </v-list-item-action-text>
            </v-list-item>

            <v-card-actions>
                <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="cyan"
                >
                    <v-icon dark>
                        mdi-pencil
                    </v-icon>
                </v-btn>

                <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="pink"
                >
                    <v-icon dark>
                        mdi-delete
                    </v-icon>
                </v-btn>

            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "Judges",

    data(){
        return {
            Judges: []
        }
    },

    created() {
        axios.get('/api/judge/get')
            .then(response => this.Judges =  response.data);
    },
}
</script>

<style scoped>

</style>

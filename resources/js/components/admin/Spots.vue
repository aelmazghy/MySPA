<template>
    <div>
    <v-card
        v-for="Spot in Spots"
        class="mx-auto mb-4"
        dark
    >
        <v-list-item three-line>

            <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                    <v-chip color="gray">{{Spot.id}}</v-chip> {{Spot.name}}
                </v-list-item-title>
                <v-list-item-subtitle>{{Spot.address}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action-text
                color="green"
            >
                <div class="overline mb-4">

                    <v-card-actions>
                        <v-btn
                            class="mx-2"
                            fab
                            dark
                            small
                            color="green"
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
                            color="red"
                        >
                            <v-icon dark>
                                mdi-delete
                            </v-icon>
                        </v-btn>

                    </v-card-actions>


                </div>
            </v-list-item-action-text>
        </v-list-item>


    </v-card>
    </div>
</template>

<script>
export default {
    name: "Spots",

    data(){
        return {
            Spots: []
        }
    },

    created() {
        axios.get('/api/spot/get')
        .then(response => this.Spots =  response.data);
    },

    methods:{

    },



}
</script>

<style scoped>

</style>

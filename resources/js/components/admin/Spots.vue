<template>
    <div>
    <v-card
        v-for="Spot in Spots"
        class="mx-auto mb-4"
        outlined
    >
        <v-list-item three-line>

            <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                    {{Spot.name}}
                </v-list-item-title>
                <v-list-item-subtitle>{{Spot.address}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action-text
                tile
                size="80"
                color="grey"
            >
                <div class="overline mb-4">
                    Plateau 3 - Quai Alpha
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

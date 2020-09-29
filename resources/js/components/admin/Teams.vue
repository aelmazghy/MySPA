<template>
        <v-card
            class="mx-auto"
             outlined
        >
            <v-list-item three-line>

                <v-list-item-content>
                    <v-list-item-title class="headline mb-1">
                        Team 1
                    </v-list-item-title>
                    <v-list-item-subtitle>Projet: Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
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
</template>

<script>
export default {
    name: "Teams"
}
</script>

<style scoped>

</style>

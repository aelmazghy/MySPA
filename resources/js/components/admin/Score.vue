<template>
    <div>
        <div class="phase-btn">
            <v-btn
                class="mb-4"
                :loading="loading"
                :disabled="loading"
                color="secondary"
            >
                Phase 1
            </v-btn>
            <v-btn
                class="mb-4"
                :loading="loading"
                :disabled="loading"
                color="secondary"
            >
                Phase 2
            </v-btn>
        </div>
        <v-card
            class="mx-auto mb-4"
            dark
        >
            <v-list-item three-line>

                <v-list-item-content>
                    <v-list-item-title class="headline mb-1">
                        <v-chip color="gray">1</v-chip> Equipe 1
                    </v-list-item-title>
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


                        </v-card-actions>


                    </div>
                </v-list-item-action-text>
            </v-list-item>


        </v-card>
    </div>
</template>

<script>
export default {
    name: "Score",
    data: () => ({

    }
    )}
</script>

<style scoped>

</style>

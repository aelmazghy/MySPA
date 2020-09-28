<template>
    <div id="app" class="max-width">
        <v-app id="inspire">
            <div>
                <v-tabs
                    v-model="tab"
                    background-color="dark accent-4"
                    class="elevation-2"
                    dark
                    :centered="centered"
                    :grow="grow"
                    :vertical="vertical"
                    :right="right"
                    :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
                    :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
                    :icons-and-text="icons"
                >
                    <v-tabs-slider></v-tabs-slider>

                    <v-tab
                        v-for="i in tabs"
                        :key="i"
                        :href="`#tab-${i}`"
                    >
                       Phase {{ i }}
                        <v-icon v-if="icons">mdi-trophy</v-icon>
                    </v-tab>

                    <v-tab-item
                        v-for="i in tabs"
                        :key="i"
                        :value="'tab-' + i"
                    >
                        <v-card
                            flat
                            tile
                        >


                            <v-list two-line>
                                <v-list-item-group
                                    v-model="selected"
                                    multiple
                                    active-class="pink--text"
                                >
                                    <template v-for="(item, index) in items">
                                        <v-list-item :key="item.title">
                                            <template v-slot:default="{ active, toggle }">
                                                <v-list-item-content>
                                                    <v-list-item-title v-text="item.title"></v-list-item-title>
                                                    <v-list-item-subtitle class="text--primary" v-text="item.headline"></v-list-item-subtitle>
                                                    <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                                                </v-list-item-content>

                                                <v-list-item-action>
                                                    {{item.action}}
                                                </v-list-item-action>
                                            </template>
                                        </v-list-item>

                                        <v-divider
                                            v-if="index + 1 < items.length"
                                            :key="index"
                                        ></v-divider>
                                    </template>
                                </v-list-item-group>
                            </v-list>

                        </v-card>
                    </v-tab-item>
                </v-tabs>
            </div>
        </v-app>
    </div>
</template>

<script>
export default {
    name: "Score",
    data: () => ({
            tab: null,
            icons: true,
            centered: true,
            grow: true,
            vertical: false,
            prevIcon: false,
            nextIcon: false,
            right: false,
            tabs: 2,

            selected: [],
            items: [
            {
                action: '15',
                headline: 'Brunch this weekend?',
                title: 'Ali Connors',
                subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
            },
            {
                action: '2',
                headline: 'Summer BBQ',
                title: 'me, Scrott, Jennifer',
                subtitle: "Wish I could come, but I'm out of town this weekend.",
            },
            {
                action: '6',
                headline: 'Oui oui',
                title: 'Sandra Adams',
                subtitle: 'Do you have Paris recommendations? Have you ever been?',
            },
            {
                action: '12',
                headline: 'Birthday gift',
                title: 'Trevor Hansen',
                subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
            },
            {
                action: '18',
                headline: 'Recipe to try',
                title: 'Britta Holt',
                subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
            },
        ]
    }
    )}
</script>

<style scoped>

</style>

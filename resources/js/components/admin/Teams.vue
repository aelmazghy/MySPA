<template>
    <div class="col col-12">
             <v-card tag="section"
                    v-for="Team in Teams"
                    :key="Team.id"
             class="mb-5 mr-2 col-md-6 float-left">
                <v-card-title>
                    <h5 class="subheading font-weight-medium text-uppercase d-flex">
                        <img :alt="Team.name" :src="avatar" width="30" height="30" class="mr-2"> <span>{{ Team.name }}</span>
                    </h5>
                </v-card-title>
                <v-divider/>
                <v-card-text>
                    <v-list two-line>
                        <v-list-item>
                            <v-list-item-content>
                                <small class="grey--text">{{ Team.spot_id }}</small> {{ Team.project }}
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-btn class="mx-2"
                                       fab
                                       dark
                                       small
                                       color="cyan">
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                                <v-btn
                                       class="mx-2"
                                       fab
                                       dark
                                       small
                                       color="pink">
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-card-text>
            </v-card>

    </div>
</template>

<script>
export default {
    name: "Teams",

    data(){
        return {
            avatar: 'https://www.flaticon.com/svg/static/icons/svg/847/847969.svg',
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

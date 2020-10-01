<template>
<div>

    <v-app-bar
        app
        clipped-left
        dark
    >
        <span class="title ml-3 mr-5">Quai Alpha&nbsp;<span class="font-weight-light">Classement</span></span>


        <v-spacer></v-spacer>

        <v-menu
            left
            bottom
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item
                    @click="() => {}"
                >
                    <v-list-item-title @click="goTolink('logout')">Deconnexion</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>

    <v-main>
        <v-container
            class="fill-height"
            fluid
        >
            <v-row
                align="center"
                justify="center"
            >
                <v-col
                    cols="12"
                >
                    <v-img
                        class="mx-auto"
                        max-width="250"
                        src="./images/logo-qa.svg"
                    ></v-img>

                    <!--start if not logged-->

                    <!--end if not logged-->

                    <div class="text-center ">
                        <v-btn
                            class="ma-2 text-lg-h4"
                            color="pink"
                            height="128"
                            width="100%"
                            @click="goTolink('dashboard')"
                        >
                            Admin
                        </v-btn>
                        <v-btn
                            class="ma-2 text-lg-h4"
                            color="success"
                            height="128"
                            width="100%"
                            @click="loader = 'loading2'"
                        >
                            Jurys
                            <template v-slot:loader>
                                <span>Loading...</span>
                            </template>
                        </v-btn>

                        <v-btn
                            class="ma-2 text-lg-h4"
                            color="info"
                            height="128"
                            width="100%"
                            @click="loader = 'loading4'"
                        >
                            Score
                            <template v-slot:loader>
                                            <span class="custom-loader">
                                              <v-icon light>cached</v-icon>
                                            </span>
                            </template>
                        </v-btn>

                    </div>

                </v-col>
            </v-row>
        </v-container>
    </v-main>
</div>
</template>

<script>
export default {
    name: "HomePage",
    data: () => ({
    }),
    methods: {
        goTolink(linkName) {
            this.$root.$router.push({name: linkName}).then(response => {
                this.$router.push(linkName)
            }).catch(()=>{
                location.reload();
            });
            // this.$router.push("/admin").catch(()=>{});

        },
    }
}
</script>


<style>
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
}
@-moz-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
@-webkit-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
@-o-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>

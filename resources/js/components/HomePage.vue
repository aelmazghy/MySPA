<template>

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
                    <div class="text-center ">
                        <v-btn
                            class="ma-2 text-lg-h4"
                            color="pink"
                            height="128"
                            width="100%"
                            @click="goTolink('score')"
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

</template>

<script>
export default {
    name: "HomePage",
    methods: {
        goTolink(linkName) {
            this.$root.$router.push({name: linkName}).catch(()=>{});
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

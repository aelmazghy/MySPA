<template>
    <v-app id="keep" dark class="theme--dark">
        <v-main>
            <v-container
                fluid
                class="darken-1 fill-height"
            >
                <v-row
                    justify="center"
                    align="center"
                >

                    <router-view></router-view>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "welcome",
    props: {
        source: String,
    },
    data: () => ({
        drawer: null,

    }),

}




</script>




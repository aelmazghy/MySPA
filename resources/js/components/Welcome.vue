<template>
    <v-app id="keep">
        <v-main>
            <v-container
                fluid
                class="lighten-4 fill-height"
            >
                <v-row
                    justify="center"
                    align="center"
                >
                    <transition name="page" mode="out-in">
                    <router-view></router-view>
                    </transition>
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




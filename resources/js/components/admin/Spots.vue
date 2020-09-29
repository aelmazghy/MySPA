<template>
<div>all Plateaux</div>
</template>

<script>
export default {
    name: "Spots",
    mounted() {
        console.log('Component mounted.')
    },
    data(){

    },
    methods:{
        getSpots: function() {
            axios.get('/spots').then(function(response){
                this.rows = response.data;
            }.bind(this));
        }
    },
    created: function(){
        this.getSpots()
    }


}
</script>

<style scoped>

</style>

<template>
  
</template>

<script>
// import example from '@/data/example.js';
export default {
    created(){
        let id = this.$route.params.num
        let form = new FormData()
        form.append('id',id)
        this.$axios({
            url:'http://47.95.23.74:3001/user/getOne',
            method:'post',
            data:form
        }).then(res=>{
            localStorage.setItem('views',res.data.result.result)
            this.$router.replace({path:'/'})
        })
    }
}
</script>

<style>

</style>
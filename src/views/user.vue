<template>
    <div>
        <span>{{a}}</span>
        <span>{{$route.params.id}}</span>
    </div>
</template>
<script>
    export default{
            props:[],
            data(){
                return {
                    a:'1'
                }
            },
            methods:{

            },
            mounted(){

            }
    }
</script>
<template>
    <div>
        <label v-if="label">{{ label }}</label>
        $<input ref="input" v-bind:value="value" v-on:input="updateValue($event.target.value)" v-on:focus="selectAll" v-on:blur="formatValue">
    </div>
</template>

<script>
    export default {
        props:{
            value:{
                type:Number,
                default:0
            },
            label:{
                type:String,
                default:''
            }   
        },
        mounted(){
           this.formatValue(); 
        },
        methods:{
            formatValue(){
                this.$refs.input.value = currencyValidator.format(this.value);
            },
            updateValue(){
                var result =  currencyValidator.parse(value,this.value);
                if(result.warning){
                    this.$refs.input.value = result.value;
                }
                this.$emit('input',result.value);
            },
            selectAll(event){
                setTimeout(()=>{
                    event.target.select();
                },0)
            }
        }
    }
</script>

<template>
    <div id="search">
        <input type="text" name="" id="" placeholder="Pesquise por um filme" v-model="search" @keyup="getInputSearch">
        {{search}}
    </div>
</template>

<script>
export default {
    name: 'Search',
    data(){
        return {
            search: '',
            typed: ''
        }
    }, 
    methods: {
        getInputSearch(){
            this.typed = this.search
            console.log(this.typed)
            this.$emit('getInput', this.typed )
        }
    }
}
</script>

<style>
    #search{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 90px;
        margin-bottom: 40px;

    }
    input{
        border: none; 
        padding: 8px 20px; 
        width: 100%;
        border-radius: 20px;
        background-color: #c4c4c49c;
        color: white; 
        outline: none;
    }

    input::-webkit-input-placeholder {
        color: rgb(186, 195, 207); 
        font-style: italic;
    }
</style>
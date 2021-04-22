<template>
    <div class="page-search">
        <h1>Search</h1>
        <h2>Search term : "{{query}}"</h2>
    </div>

   <div class="container">
  <div class="row">
    <ProductBox v-for="product in products" 
    v-bind:key="product.id"
    v-bind:product="product" />
    
  </div>
</div>

</template>

<script>
import axios from 'axios';
import ProductBox from '@/components/ProductBox';

export default {
    name:"Search",
    data(){
        return{
            products:[],
            query:''
        }
    },
    components:{
        ProductBox
    },
    mounted(){
        document.title='Search | Djackets'

        let uri=window.location.search.substring(1);
        let params=new URLSearchParams(uri);

        if (params.get("query")){
            this.query=params.get("query");
            this.performSearch();
        }
    },
    methods:{
        async performSearch(){
            this.$store.commit('setIsLoading',true);
            await axios.post("/api/v1/products/search/",{'query':this.query})
            .then(res =>{
                this.products=res.data;
            })
            .catch(err => console.log(err));
            this.$store.commit('setIsLoading',false);
        }
    }
}
</script>
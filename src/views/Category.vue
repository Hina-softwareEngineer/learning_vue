<template>
    <div class="page-category">
        <div class="col">
            <h2>{{category.name}}</h2>

        </div>
    </div>

    <div class="container">
  <div class="row">
    <ProductBox v-for="product in category.products" 
    v-bind:key="product.id"
    v-bind:product="product" />
    
  </div>
</div>
</template>

<script>
import axios from 'axios';
import ProductBox from '@/components/ProductBox';

export default {
    name:"Category",
    data(){
        return{
            category:{
                products:[]
            }
        }
    },
    components:{
        ProductBox
    },
    mounted(){
        this.getCategory();
    },
    watch:{
        $route(to, from){
            console.log(to, from,'---------to from--------');
            if (to.name ==='Category'){
                this.getCategory();
            }
        }
    },
    methods:{
        async getCategory(){
               this.$store.commit('setIsLoading',true);
    const category_slug=this.$route.params.category_slug;

            await axios.get(`/api/v1/products/${category_slug}`)
            .then(res => {this.category=res.data;
            document.title=this.category.name+"| Djackets";})
            .catch(err => console.log(err))
            this.$store.commit("setIsLoading",false);
        }
    }
}
</script>
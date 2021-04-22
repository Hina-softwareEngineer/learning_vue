<template>
  <div class="home">
    <section>
      <div class="container">
        <p>Welcome to Djacket</p>
        <p>The best Jacket store online</p>
    </div>
  </section>


  <h2>Latest Products</h2>

<div class="container">
  <div class="row">
    <ProductBox v-for="product in latestProducts" 
    v-bind:key="product.id"
    v-bind:product="product" />
    
  </div>
</div>
  

  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import ProductBox from '@/components/ProductBox';

export default {
  name: "Home",
  data(){
    return {
      latestProducts:[]
    }
  },
  components:{
    ProductBox
  },
  mounted(){
    document.title="Home | Djackets";
    this.getLatestProducts()
  },
  methods:{
    async getLatestProducts(){
      this.$store.commit('setIsLoading',true);
      await axios.get("/api/v1/latest-products/")
      .then(res => {this.latestProducts=res.data;
      console.log('---res---',res.data);})
      .catch(err => console.log(err))
      this.$store.commit('setIsLoading',false);
    }
  }
};
</script>

<style scoped>
  .column{
    margin-right: 1.25rem;
  }
</style>
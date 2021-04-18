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
    <div class="col-3 column" v-for="product in latestProducts" v-bind:key="product.id">
    <div class="card" style="">
  <img v-bind:src="product.get_thumbnail" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{product.name}}</h5>
    <p class="card-text">${{product.price}}</p>

    <a href="#" class="btn btn-primary">
      <router-link v-bind:to="product.get_absolute_url" class="text-white"> View Details</router-link>
      </a>
  </div>
</div>
    </div>
    
  </div>
</div>
  

  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: "Home",
  data(){
    return {
      latestProducts:[]
    }
  },
  components:{},
  mounted(){
    this.getLatestProducts()
  },
  methods:{
    getLatestProducts(){
      axios.get("/api/v1/latest-products/")
      .then(res => {this.latestProducts=res.data;
      console.log('---res---',res.data);})
      .catch(err => console.log(err))
    }
  }
};
</script>

<style scoped>
  .column{
    margin-right: 1.25rem;
  }
</style>
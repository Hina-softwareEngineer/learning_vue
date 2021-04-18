<template>
  <div>
    <!-- <md-toolbar md-elevation='1' class="md-primary">
      <router-link to="/"><h3 class="md-title" style="flex: 1">Vue-Shopping</h3></router-link>      
        <router-link to="/summer">
        <md-button class="md-primary">Summer</md-button>
        </router-link>
        <router-link to="/winter"><md-button class="md-raised md-primary">Winter</md-button></router-link>
      
    </md-toolbar> -->
  
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link class="navbar-brand text-white" to="/">Jackets</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="showMobileMenu = !showMobileMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{'active' : showMobileMenu}">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link text-white" aria-current="page" to="/summer">Summer</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/winter">Winter</router-link>
        </li>
         <li class="nav-item">
           <div class="btns">
          <router-link class="btn btn-light" style='margin-right:10px;' to="/log-in">Log In</router-link>
          <router-link style='display : inline-flex;' class="btn btn-success" to="/cart">
          <span class="material-icons">
shopping_cart
</span>
<span>Cart ({{cartTotalLength}})</span>
          </router-link>
          </div>
        </li>
      </ul>
     
    </div>
  </div>
  </nav>
  </div>

  <section class="section">
    <router-view />
  </section>

  <footer>
    <p class='text-center'>Copyright (c) 2021</p>
  </footer>
</template>

<script>
  export default {
    data(){
      return {
        showMobileMenu : false,
        cart:{
          items:[]
        }
      }
    },
    mounted(){
      this.cart=this.$store.state.cart;
    },
    beforeCreate(){
      this.$store.commit('initializeStore')
    },
    computed:{
      cartTotalLength(){
        let totalLength=0;
        for (let i=0; i < this.cart.items.length;i++){
          totalLength+=this.cart.items[i].quantity
        }
        return totalLength;
      }
    }
  }
</script>

<style lang="sass">

</style>

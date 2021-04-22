<template>
    <div class="col-3 column" >
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
</template>

<script>
export default {
    name: 'ProductBox',
    props: {
        product: Object
    }
}
</script>

<style scoped>
  .image {
    margin-top: -1.25rem;
    margin-left: -1.25rem;
    margin-right: -1.25rem;
  }
</style>
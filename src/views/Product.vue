<template>
    <div class="card mb-3" style="max-width: 80%;">
        <div class="row g-0">
            <div class="col-md-4">
                <img v-bind:src="product.get_image" alt="..." width="273" height="280">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{product.name}}</h5>
                    <p class="card-text">{{product.description}}</p>
                    <p class="card-text"><small class="text-muted"></small></p>

                    <div class="col-12">
                        <h2>Information</h2>
                        <p><strong>Price : </strong>${{product.price}}</p>
                        <div class="col-6">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Quantity</span>
                            <input type="number" min="1" v-model="quantity" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                        </div>
                        <div class="col-3">
                            <a class="btn btn-primary" @click="addToCart">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios';
export default {
    name:'Product',
    data(){
        return {
            product:{},
            quantity:1
        }
    },
    mounted(){
        this.getProduct();
    },
    methods:{
        getProduct(){
            console.log("---params---",this.$route.params)
            const category_slug=this.$route.params.category_slug
            const product_slug=this.$route.params.product_slug

            axios.get(`/api/v1/products/${category_slug}/${product_slug}`)
            .then(res => this.product=res.data)
            .catch(err => console.log(err))

        },
        addToCart(){
            if (isNaN(this.quantity) || this.quantity < 1){
                this.quantity=1;
            }
            const item={
                product:this.product,
                quantity:this.quantity
            }
            this.$store.commit("addToCart",item)
        }
    },
}
</script>
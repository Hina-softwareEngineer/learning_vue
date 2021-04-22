<template>
    <div class='cart-div'>
        <h2>Cart</h2>

    <div class="col-12 card">
        <table class="table" v-if="cartTotalLength">
            <thead><tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
                </tr></thead>
            <tbody>
                <CartItem
                v-for="item in cart.items"
                v-bind:key="item.product.id"
                v-bind:initialItem='item'
                v-on:removeFromCart='removeFromCart'
                 />
            </tbody>
        </table> 
        <p v-else>You don't have any products in your cart.</p>   
    </div>

    <div class="card col-12">
        <h2>Summary</h2>
        <strong>${{cartTotalPrice.toFixed(2)}}</strong>

        <hr>

        <router-link to="/cart/checkout" class="btn btn-primary">Proceed to Checkout</router-link>
    </div>
    </div>
</template>

<script>
// import axios from 'axios';
import CartItem from '@/components/CartItem.vue';
export default {
    name:'Cart',
    data(){
        return {
            cart:{
                items:[],
            },
        }
    },
    components:{
        CartItem
    },
        mounted(){
        this.cart=this.$store.state.cart;
    },
    computed:{
        cartTotalLength(){
            return this.cart.items.reduce((acc, curVal)=>{
                return acc+=curVal.quantity
            },0)
        },
        cartTotalPrice(){
            return this.cart.items.reduce((acc, curVal)=>{
                return acc+=curVal.quantity * curVal.product.price
            },0)
        },
    },
    methods:{
        removeFromCart(item){
            this.cart.items=this.cart.items.filter(i => i.product.id !==item.product.id);
        }
    }
}
</script>
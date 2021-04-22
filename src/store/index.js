import { createStore } from "vuex";

export default createStore({
  state: {
    cart: {
      items: [],
    },
    isAuthenticated: false,
    token: '',
    isLoading:false
  },
  mutations: {
    initializeStore(state) {
      console.log("--", state);
      if (localStorage.getItem("cart")) {
        state.cart=JSON.parse(localStorage.getItem('cart'))
      }
      else {
        localStorage.setItem('cart',JSON.stringify(state.cart))
      }
    },
    addToCart(state, item) { 
      const exists = state.cart.items.filter(i => i.product.id === item.product.id);
      console.log( exists, '---------before exist----');
      if (exists.length) {
        exists[0].quantity=parseInt(exists[0].quantity)+parseInt(item.quantity)
      } else {
        state.cart.items.push(item);
      }
      console.log(state, exists,'---------after exist----');
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    setIsLoading(state, status) { 
      state.isLoading=status
    }
  },
  actions: {},
  modules: {},
});

const App = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        };
    },
    methods: {
        addProduct(productId) {
            this.cart.push(productId)
        }
    }
})

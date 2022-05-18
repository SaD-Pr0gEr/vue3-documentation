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
        },
        removeProduct(productId) {
            const index = this.cart.indexOf(productId)
            if (index > -1) {
                this.cart.splice(index, 1)
            }
        }
    }
})

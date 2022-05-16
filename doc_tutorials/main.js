const App = Vue.createApp({
    data() {
        return {
            product: "Socks",
            brand: "Vue company",
            selectedVariantIndex: 0,
            // inventory: 20,
            details: ["50% cotton", "30% wool", "20% polyester"],
            variants: [
                {id: 1, color: "blue", image: "./assets/img/blue_socks.png", quantity: 20},
                {id: 2, color: "green", image: "./assets/img/green_socks.png", quantity: 0},
            ],
            cart: 0,
        }
    },
    methods: {
        addToCart() {
            this.inStock ? this.cart += 1 : null
        },
        removeFromCart() {
            if(this.cart >= 1){
                this.cart -= 1
            }
        },
        updateVariant(productIndex) {
            this.selectedVariantIndex = productIndex
        }
    },
    computed: {
        title() {
            return `${this.brand} ${this.product}`
        },
        showProductImage() {
            return this.variants[this.selectedVariantIndex].image
        },
        inStock() {
            return this.variants[this.selectedVariantIndex].quantity
        }
    }
})

const mountedApp = App.mount("#app")

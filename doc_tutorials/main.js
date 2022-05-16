const App = Vue.createApp({
    data() {
        return {
            product: "Socks",
            image: "./assets/img/blue_socks.png",
            inventory: 20,
            details: ["50% cotton", "30% wool", "20% polyester"],
            variants: [
                {id: 1, color: "blue", image: "./assets/img/blue_socks.png"},
                {id: 2, color: "green", image: "./assets/img/green_socks.png"},
            ],
            cart: 0
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(image) {
            this.image = image
        },
        removeFromCart() {
            if(this.cart >= 1){
                this.cart -= 1
            }
        }
    }
})

const mountedApp = App.mount("#app")

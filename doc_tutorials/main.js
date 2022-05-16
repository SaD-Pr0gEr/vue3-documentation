const App = Vue.createApp({
    data() {
        return {
            product: "Socks",
            image: "./assets/img/blue_socks.png",
            inventory: 20,
            onSale: true,
            details: ["50% cotton", "30% wool", "20% polyester"],
            variants: [
                {id: 1, color: "blue"},
                {id: 2, color: "green"},
            ]
        }
    }
})

const mountedApp = App.mount("#app")

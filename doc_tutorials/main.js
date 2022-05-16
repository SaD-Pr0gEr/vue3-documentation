const App = Vue.createApp({
    data() {
        return {
            product: "Socks",
            image: "./assets/img/blue_socks.png",
            inventory: 20,
            onSale: true
        }
    }
})

const mountedApp = App.mount("#app")

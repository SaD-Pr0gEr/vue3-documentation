const App = Vue.createApp({
    data() {
        return {
            product: "Socks",
            description: "Just Vue Socks",
            image: "./assets/img/blue_socks.png",
        }
    }
})

const mountedApp = App.mount("#app")

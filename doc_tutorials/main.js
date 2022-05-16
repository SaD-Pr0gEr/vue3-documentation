const App = Vue.createApp({
    data() {
        return {
            product: "Socks",
            description: "Just Vue Socks",
            image: "./assets/img/blue_socks.png",
            url: "https://google.com"
        }
    }
})

const mountedApp = App.mount("#app")

const App = Vue.createApp({
    data() {
        return {
            product: "Socks",
            description: "Just Vue Socks"
        }
    }
})

const mountedApp = App.mount("#app")

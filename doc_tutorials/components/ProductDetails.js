App.component("product-detail", {
    props: {
        productDetail: {
            type: Array,
            required: true
        }
    },
    template:
        `<p>Detail: </p>
         <ul>
             <li v-for="detail in productDetail">{{ detail }}</li>
         </ul>`,
})

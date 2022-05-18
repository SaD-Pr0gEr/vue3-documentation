App.component('product-info', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img :src="showProductImage" :class="{'out-of-stock-img ': !inStock}" alt="">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p>{{ onSaleComputed }}</p>
                <p v-if="inStock">In stock</p>
                <p v-else>Not in Stock</p>
                <p>Shipping: {{ shipping }}</p>
                <product-detail :productDetail="details"></product-detail>
                <p>Colors: </p>
                <ul>
                    <li
                                v-for="(variant, productIndex) in variants"
                                :key="variant.id"
                                @mouseover="updateVariant(productIndex)"
                                class="color-circle"
                                :style="{'background-color': variant.color}"
                        ><!--:style="{backgroundColor: variant.color}"--></li>
                </ul>
                <button class="button" :class="{disabledButton: !inStock}" @click="addToCart"><!--:disabled="!inStock"-->Add to Cart</button>
                <button class="button" @click="removeFromCart" v-show="inStock">Remove</button>
            </div>
        </div>
    </div>`,
    data() {
        return {
            product: "Socks",
            brand: "Vue company",
            selectedVariantIndex: 0,
            onSale: true,
            details: ["50% cotton", "30% wool", "20% polyester"],
            variants: [
                {id: 1, color: "blue", image: "./assets/img/blue_socks.png", quantity: 20},
                {id: 2, color: "green", image: "./assets/img/green_socks.png", quantity: 0},
            ],
        }
    },
    methods: {
        addToCart() {
            if(this.inStock) {
                this.$emit("add-to-cart", this.variants[this.selectedVariantIndex].id)
            }
        },
        removeFromCart() {
            this.$emit("remove-from-cart", this.variants[this.selectedVariantIndex].id)
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
        },
        onSaleComputed() {
            return this.onSale ? `${this.brand} ${this.product} is on sale` : `${this.brand} ${this.product} isn't on sale`
        },
        shipping() {
            return this.premium ? "Free" : "3.99$"
        }
    }
})

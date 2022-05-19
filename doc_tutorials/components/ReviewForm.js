App.component("review-form", {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>review</h3>
        
        <label for="name">Name:</label>
        <input id="name" v-model="name">
        
        <label for="review">Review: </label>
        <textarea id="review" v-model="review"></textarea>
        
        <label for="rating">Rating: </label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
        <label for="recommend">Would you recommended this product?</label>
        <select v-model="recommended" id="recommend">
            <option>yes</option>
            <option>no</option>
        </select>
        <input type="submit" class="button" value="Submit">
    </form>`,
    data() {
        return {
            name: "",
            review: "",
            rating: null,
            recommended: null
        }
    },
    methods: {
        onSubmit() {
            if (!this.name || !this.review || !this.rating || !this.recommended) {
                alert("Validation failed")
                return
            }
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommended: this.recommended
            }
            this.$emit("review-submitted", productReview)
            this.resetProductData()
        },
        resetProductData() {
            this.name = ""
            this.review = ""
            this.rating = null
            this.recommended = null
        }
    }
})

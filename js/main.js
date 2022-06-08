let app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        selectedElem: 0, // хранение свойства
        cart: 0,
        brand: "Vue Mastery",
        onSale: false, // наличие скидки
        details: ['80% хлопок', '20% полиэстер', 'Мужские'],
        size: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        elements: [
            {
                elemId: 234,
                elemColor: 'green',
                elemImg: "img/green.jpg",
                elemQuantity: 10
            },
            {
                elemId: 235,
                elemColor: 'blue',
                elemImg: "img/blue.jpg",
                elemQuantity: 0
            }
        ],
    },

    methods: {
        addCart() {
            this.cart += 1
        },

        updateImage(index) {
            this.selectedElem = index;  // обновление изображения
        }
    },

    computed: {
        title() {
            return this.brand + " " + this.product;
        },

        image() {
            return this.elements[this.selectedElem].elemImg;
        },

        inStock() {
            return this.elements[this.selectedElem].elemQuantity;
        }
    }
})
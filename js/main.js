let app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: "img/green.jpg",
        cart: 0,
        inStock: true, // наличие товара
        onSale: false, // наличие скидки
        details: ['80% хлопок', '20% полиэстер', 'Мужские'],
        size: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        elements: [
            {
                elemId: 234,
                elemColor: 'green',
                elemImg: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
                elemQuantity: 10
            },
            {
                elemId: 235,
                elemColor: 'blue',
                elemImg: "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
                elemQuantity: 0
            }
        ],
    },
    methods: {
        addCart() {
            this.cart += 1
        },

        updateImage(elemImg) {
            this.image = elemImg; // обновление изображения
        }
    }
})
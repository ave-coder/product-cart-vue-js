let app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: "img/green.jpg",
        cart: 0,
        inStock: true,
        onSale: false,
        details: ['80% хлопок', '20% полиэстер', 'Мужские'],
        elements: [
            {
                elemId: 234,
                elemColor: 'green'
            },
            {
                elemId: 235,
                elemColor: 'blue'
            }
        ],
    },
    methods: {
        addCart() {
            this.cart += 1
        }

    }
})
// let app = new Vue({
//     el: '#app',
//     data: {
//         product: 'Socks',
//         selectedElem: 0, // хранение свойства
//         cart: 0,
//         brand: "Vue Mastery",
//         onSale: false, // наличие скидки
//         details: ['80% хлопок', '20% полиэстер', 'Мужские'],
//         size: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
//         elements: [
//             {
//                 elemId: 234,
//                 elemColor: 'green',
//                 elemImg: "img/green.jpg",
//                 elemQuantity: 10
//             },
//             {
//                 elemId: 235,
//                 elemColor: 'blue',
//                 elemImg: "img/blue.jpg",
//                 elemQuantity: 0
//             }
//         ],
//     },

//     methods: {
//         addCart() {
//             this.cart += 1
//         },

//         updateImage(index) {
//             this.selectedElem = index;  // обновление изображения
//         }
//     },

//     computed: {
//         title() {
//             return this.brand + " " + this.product;
//         },

//         image() {
//             return this.elements[this.selectedElem].elemImg;
//         },

//         inStock() {
//             return this.elements[this.selectedElem].elemQuantity;
//         }
//     }
// })

Vue.component('product', {
    template: ` <div class="product">
                    <div class="product-image">
                        <img :src="image" alt="socks">
                    </div>
                    <div class="product-info">
                        <h1>{{ title }}</h1>

                        <p v-if="inStock">В наличии</p>
                        <p v-else>Нет в наличии :(</p>

                        <span v-if="onSale">Распродажа!</span>

                        <ul>
                            <li v-for="detail in details">{{ detail }}</li>
                        </ul>

                        <ul>
                            <li v-for="elem in size">{{ elem }}</li>
                        </ul>

                        <div class="color">
                            <div class="color-choose" v-for="(elem, index) in elements" :key="elem.elemId"
                                :style="{ backgroundColor: elem.elemColor }" @mouseover="updateImage(index)"></div>
                        </div>
                        <div class="btn">
                            <button @click="addCart" :disabled="!inStock" :class="{ disabledBtn: !inStock }">Добавить в
                                корзину</button>

                            <div class="cart">
                                <p>Корзина: {{ cart }}</p>
                            </div>
                        </div>
                    </div>
                </div> `,

    data() {
        return {
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
            ]
        }
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

let app = new Vue({
    el: '#app',
})
const app = Vue.createApp({
    //es6寫法
    data() {
        return {
            cart: 0,
            product: "socks",
            image: './assets/images/socks_green.jpg',
            // isStock:false
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [{
                    id: 2234,
                    color: 'green',
                    image: './assets/images/socks_green.jpg'
                },
                {
                    id: 2235,
                    color: 'blue',
                    image: './assets/images/socks_blue.jpg'
                },
            ]


        }
    },
methods:{
addToCart(){
    this.cart +=1;
},
updateImage(variantImage){
    this.image =variantImage
}


}
    //購物車監聽額外拉出來寫


    //原始寫法
    // data: function(){
    // return{
    // product:"socks"

    // }
    // }
})
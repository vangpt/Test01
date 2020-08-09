<template>
    <section>
        <top-area />
        <menu-comp />
        <banner-comp v-bind:contentBanner="banner" />
        <main>
            <div class="container">
                <section class="list-product">
                    <div class="list-product__title">You Have <span>6 Items </span>In Your Cart</div>
                    <table>
                        <tr>
                            <th style="width: 7%"></th>
                            <th style="width: 50%">product</th>
                            <th style="width: 13%">price</th>
                            <th style="width: 15%">quantity</th>
                            <th style="width: 15%">total</th>
                        </tr>
                        <tr v-for="(item,index) in listItems" :key="index">
                            <td class="table-close">
                                <div class="d-flex-center">
                                    <i class="fa fa-times-circle" aria-hidden="true"></i>
                                </div>
                            </td>
                            <td class="table-product">
                                <div class="box">
                                    <img :src="require(`../../assets/imgs/${item.image}`)" alt="">
                                    <div class="text">
                                        {{item.text}} <span class="size">{{item.size}}</span>
                                    </div>
                                </div>
                            </td>
                            <td class="table-price">${{item.price.toFixed(2)}}</td>
                            <td class="table-quantity">
                                <div class="box">
                                    <button>-</button>
                                    <input type="text" name="" id="" :value="item.quantity">
                                    <button>+</button>
                                </div>
                            </td>
                            <td class="table-total">${{(item.price * item.quantity).toFixed(2)}}</td>
                        </tr>
                    </table>
                    <div class="infos">
                        <div class="infos__left">
                            <input type="text" value="" placeholder="Enter Coupon Code Here..">
                            <button>apply</button>
                        </div>
                        <div class="infos__right">
                            <a href="#">uppdate cart</a>
                            <a href="#"><i class="fa fa-check-circle-o" aria-hidden="true"></i> checkout</a>
                        </div>
                    </div>
                </section>
                <section class="shipping-total">
                    <article class="shipping">
                        <div class="title">calculate shipping</div>
                        <div class="box-shipping">
                            <div class="box-select">
                                <select>
                                    <option value="" selected>Select Your Country</option>
                                    <option value="">VN</option>
                                    <option value="">Jap</option>
                                </select>
                            </div>
                            <div class="box-input">
                                <div class="input-item">
                                    <input type="text" placeholder="State/ Country" name="" id="">
                                </div>
                                <div class="input-item">
                                    <input type="text" placeholder="Postcode/ Zip" name="" id="">

                                </div>
                            </div>
                            <button>update totals</button>
                        </div>
                    </article>
                    <article class="total">
                        <div class="title">cart totals</div>
                        <div class="box-total">
                            <table border="1">
                                <tr>
                                    <td>Subtotal</td>
                                    <td class="td-sub-total">$1285.99</td>
                                </tr>
                                <tr>
                                    <td>Shipping And Handling</td>
                                    <td class="td-ship">
                                        <label class="box-radio">Rate: $3.99
                                        <input type="radio" checked="checked" name="radio">
                                        <span class="checkmark"></span>
                                        </label>
                                        <label class="box-radio">Free Shipping
                                        <input type="radio" name="radio">
                                        <span class="checkmark"></span>
                                        </label>
                                        <label class="box-radio">Flat Rate: $12.99
                                        <input type="radio" name="radio">
                                        <span class="checkmark"></span>
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td class="td-total">$2015.00</td>
                                </tr>
                            </table>
                        </div>
                    </article>
                </section>
                <section class="related-product">
                    <div class="text">
                        <div class="title">You may be interested in</div>
                        <div class="border"></div>
                    </div>
                    <div class="box-related">
                        <div
                            class="box"
                            v-for="(element, index) in listProduct2"
                            :key="index"
                        >
                                <div class="item">
                                    <div class="item__image">
                                        <img
                                            :src="
                                                require(`../../assets/imgs/shop/list-product/${element.image}`)
                                            "
                                            alt=""
                                        />
                                        <div class="background-blue"></div>
                                        <div
                                            v-if="element.isSale"
                                            class="sale-abso d-flex-center"
                                        >
                                            sale!
                                        </div>
                                        <div
                                            v-if="element.isNew"
                                            class="new-abso d-flex-center"
                                            :class="{
                                                'new-sale-abso':
                                                    element.isSale &&
                                                    element.isNew
                                            }"
                                        >
                                            new
                                        </div>
                                    </div>
                                    <div class="info">
                                        <a :href="element.link">
                                            <div class="info__name">
                                                {{ element.nameProduct }}
                                            </div>
                                            <div class="info__price">
                                                {{ element.priceProduct }}
                                            </div>
                                        </a>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        <footer-comp />
    </section>
</template>

<script>
import TopArea from "./TopArea";
import MenuComp from "./MenuComp";
import FooterComp from "./FooterComp";
import BannerComp from "./BannerComp";
export default {
    name: "shop-cart",
    components:{
        TopArea,
        MenuComp,
        FooterComp,
        BannerComp,
    },
    data(){
        return{
            banner:{
                title: "<b>woo</b> cart",
                image: "woo-cart.png"
            },
            listItems:[
                {
                    image: "square-gray.png",
                    text: "Lorem ipsum dolor sit amet",
                    size: "Size: Large, Color: Black",
                    price: 35.99,
                    quantity: 1
                },
                {
                    image: "square-gray.png",
                    text: "Consectetur adipisicing",
                    size: "",
                    price: 1285.99,
                    quantity: 1
                },
                {
                    image: "square-gray.png",
                    text: "Elit sed do eiusmod ",
                    size: "Size: Large",
                    price: 89.99,
                    quantity: 1
                },
                {
                    image: "square-gray.png",
                    text: "Tempor incididunt ut labore",
                    size: "",
                    price: 12.00,
                    quantity: 1
                },
                {
                    image: "square-gray.png",
                    text: "Et dolore magna aliqua",
                    size: "",
                    price: 158.25,
                    quantity: 1
                }
            ],
            listProduct2: [
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    nameProduct: "Denim Classy Shorts",
                    priceProduct: "$35.00–$89.99",
                },
                {
                    image: "product2.png",
                    isSale: true,
                    isNew: true,
                    link: "#",
                    nameProduct: "Golden Heels",
                    priceProduct: "$89.99",
                },
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    nameProduct: "Black Impression",
                    priceProduct: "$259.99",
                },
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    nameProduct: "Denim Classy Shorts",
                    priceProduct: "$35.00–$89.99",
                },
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    nameProduct: "Golden Heels",
                    priceProduct: "$89.99",
                },
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    nameProduct: "Black Impression",
                    priceProduct: "$259.99",
                },
            ]
        }
    }

}
</script>

<style lang="scss">
@import "../../styles/shop/ShopCart";
</style>
<template>
    <section>
        <top-area />
        <menu-comp />
        <banner-comp v-bind:contentBanner="banner" />
        <main>
            <div class="container">
                <section class="list-product">
                    <div class="list-product__title">You Have <span>6 Items </span>In WishList</div>
                    <table>
                        <tr>
                            <th style="width: 7%"></th>
                            <th style="width: 48%">product</th>
                            <th style="width: 10%">price</th>
                            <th style="width: 15%">stock status</th>
                            <th style="width: 20%"></th>
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
                            <td class="table-stock">
                                <div v-if="item.inStock">In Stock</div>
                                <div v-else style="color: red">Out Of Stock</div>
                            </td>
                            <td class="table-button">
                                <button><i class="fa fa-shopping-cart" aria-hidden="true"></i> add to cart</button>
                            </td>
                        </tr>
                    </table>
                    <div class="list-product__social">Share your wishlist on: 
                        <div class="icon">
                            <a href="#" style="background: #22c5da"><i class="fa fa-twitter"></i></a>
                            <a href="#" style="background: #5275db">
                                <i class="fa fa-facebook-official"></i>
                            </a>
                            <a href="#" style="background: #2498d7"
                                ><i class="fa fa-info-circle"></i
                            ></a>
                            <a href="#" style="background: #9a8f62"><i class="fa fa-google-plus-square"></i></a>
                            <a href="#" style="background: #ae0e0e"
                                ><i class="fa fa-youtube-play"></i
                            ></a>
                            <a href="#" style="background: #f44336"><i class="fa fa-instagram"></i></a>
                            <a href="#" style="background: #ff5757"><i class="fa fa-pinterest-p"></i></a>
                        </div>
                    </div>
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
    name: "wish-list",
    components: {
        TopArea,
        MenuComp,
        FooterComp,
        BannerComp
    },
    data() {
        return {
            banner: {
                title: "<b>my</b> wishlist",
                image: "wishlist.png"
            },
            listItems:[
                {
                    image: "square-gray.png",
                    text: "Lorem ipsum dolor sit amet",
                    size: "Size: Large, Color: Black",
                    price: 35.99,
                    inStock: true,
                },
                {
                    image: "square-gray.png",
                    text: "Consectetur adipisicing",
                    size: "",
                    price: 1285.99,
                    inStock: false,
                },
                {
                    image: "square-gray.png",
                    text: "Elit sed do eiusmod ",
                    size: "Size: Large",
                    price: 89.99,
                    inStock: true,
                },
                {
                    image: "square-gray.png",
                    text: "Tempor incididunt ut labore",
                    size: "",
                    price: 12.00,
                    inStock: true,
                },
                {
                    image: "square-gray.png",
                    text: "Et dolore magna aliqua",
                    size: "",
                    price: 158.25,
                    inStock: true,
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
        };
    }
};
</script>

<style lang="scss">
@import "../../styles/shop/WishList";
</style>

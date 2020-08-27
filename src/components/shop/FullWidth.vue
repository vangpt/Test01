<template>
    <div>
        <top-area />
        <menu-comp />
        <banner-product v-bind:contentBanner="banner">
            <bread-crumb v-bind:breadCrumb="listBreadCrumb" />
        </banner-product>
        <main>
            <div class="container">
                <section class="product">
                    <article class="detail-product">
                        <div class="image-product">
                            <div class="wrap-image">
                                <div class="arrow-left d-flex-center">
                                    <i class="fa fa-angle-left"></i>
                                </div>
                                <div class="arrow-right d-flex-center">
                                    <i class="fa fa-angle-right"></i>
                                </div>
                                <img
                                    src="../../assets/imgs/product-detail.png"
                                    alt=""
                                />
                            </div>
                            <div class="child-image">
                                <div class="item">
                                    <img
                                        src="../../assets/imgs/square-gray.png"
                                        alt=""
                                    />
                                </div>
                                <div class="item">
                                    <img
                                        src="../../assets/imgs/square-gray.png"
                                        alt=""
                                    />
                                </div>
                                <div class="item">
                                    <img
                                        src="../../assets/imgs/square-gray.png"
                                        alt=""
                                    />
                                </div>
                                <div class="item">
                                    <div class="icon-image-choose">
                                        <img
                                            src="../../assets/imgs/image-choose.png"
                                            alt=""
                                        />
                                    </div>
                                    <img
                                        src="../../assets/imgs/square-gray.png"
                                        alt=""
                                    />
                                </div>
                                <div class="item">
                                    <img
                                        src="../../assets/imgs/square-gray.png"
                                        alt=""
                                    />
                                </div>
                                <div class="item">
                                    <img
                                        src="../../assets/imgs/square-gray.png"
                                        alt=""
                                    />
                                </div>
                                <div class="arrow-left">
                                    <img
                                        src="../../assets/imgs/arrow-left.png"
                                        alt=""
                                    />
                                </div>
                                <div class="arrow-right">
                                    <img
                                        src="../../assets/imgs/arrow-right.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div class="icon">
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#">
                                    <i class="fa fa-facebook-official"></i>
                                </a>
                                <a href="#"
                                    ><i class="fa fa-info-circle"></i
                                ></a>
                                <a href="#"
                                    ><i class="fa fa-google-plus-square"></i
                                ></a>
                                <a href="#"><i class="fa fa-instagram"></i></a>
                                <a href="#"
                                    ><i class="fa fa-youtube-play"></i
                                ></a>
                                <a href="#"
                                    ><i class="fa fa-pinterest-p"></i
                                ></a>
                            </div>
                            <div class="information-product">
                                <div class="element">
                                    <span>SKU:</span> 4564ZH
                                </div>
                                <div class="element">
                                    <span>Categories:</span> Clothes, Dresses
                                </div>
                                <div class="element">
                                    <span>Tags: </span>
                                    <div class="tag-bg">elegant</div>
                                    <div class="tag-bg">dresses</div>
                                    <div class="tag-bg">summer</div>
                                </div>
                            </div>
                        </div>
                        <div class="info-product">
                            <div class="name-product">
                                <div>{{ productDetail.nameProduct }}</div>
                                <button>
                                    <i class="fa fa-angle-left"></i>
                                </button>
                            </div>
                            <div class="review-product">
                                <div class="info__star">
                                    <star-rating
                                        v-bind:star-size="20"
                                        v-bind:increment="0.5"
                                        v-bind:show-rating="false"
                                        v-bind:read-only="true"
                                        v-model="productDetail.rating"
                                    ></star-rating>
                                </div>
                                4 customer reviews
                            </div>
                            <div class="price-product">
                                <article class="price-old">
                                    <div class="text">Old Price</div>
                                    <div class="number">
                                        $ {{ productDetail.maxPrice }}
                                    </div>
                                </article>
                                <article class="price-new">
                                    <div class="text">New Price</div>
                                    <div class="number">
                                        $ {{ productDetail.minPrice }}
                                    </div>
                                </article>
                            </div>
                            <div class="desc-product">
                                {{ productDetail.decription }}
                            </div>
                            <ul class="list-info-product">
                                <li>
                                    <i class="fa fa-angle-right"></i>Lorem ipsum
                                    dolor sit amet, consectetur dipisicing elit
                                </li>
                                <li>
                                    <i class="fa fa-angle-right"></i>Sed do
                                    eiusmod tempor incididunt ut labore et
                                    dolore magna
                                </li>
                                <li>
                                    <i class="fa fa-angle-right"></i>Aliqua enim
                                    ad minim veniam, quis nostrud exercitation
                                    ullamco
                                </li>
                                <li>
                                    <i class="fa fa-angle-right"></i>Laboris
                                    nisi ut aliquip ex ea commodo consequat
                                    lorem ipsum
                                </li>
                                <li>
                                    <i class="fa fa-angle-right"></i>dolor sit
                                    amet, consectetur adipisicing elit, sed do
                                    eiusmod
                                </li>
                                <li>
                                    <i class="fa fa-angle-right"></i>tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad
                                </li>
                            </ul>
                            <div class="select-product">
                                <table>
                                    <tr>
                                        <td style="width: 50px">Size</td>
                                        <td>
                                            <div class="box-select">
                                                <select
                                                    @change="
                                                        selecetSize($event)
                                                    "
                                                >
                                                    <option value="Large"
                                                        >Large</option
                                                    >
                                                    <option value="Medium"
                                                        >Medium</option
                                                    >
                                                    <option value="Small"
                                                        >Small</option
                                                    >
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Color</td>
                                        <td>
                                            <div class="box-select">
                                                <select
                                                    @change="
                                                        selecetColor($event)
                                                    "
                                                >
                                                    <option value="White"
                                                        >White</option
                                                    >
                                                    <option value="Black"
                                                        >Black</option
                                                    >
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <i class="fa fa-times"></i>
                                            <a href="#">Clear Selection</a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="original-price">
                                <span>$ {{ productDetail.maxPrice }}</span>
                                <span>$ {{ productDetail.minPrice }}</span>
                                <span
                                    >{{ productDetail.quantity }} in stock</span
                                >
                            </div>
                            <div class="buttons-option">
                                <div>10</div>
                                <a
                                    v-if="productDetail.quantity > 0"
                                    class="link-cart"
                                    href="#"
                                    @click.prevent="handleAddToCart"
                                    ><i class="fa fa-shopping-cart"></i> add to
                                    cart</a
                                >
                                <a
                                    class="link-wishlist"
                                    href="#"
                                    :disabled="productDetail.isHeart"
                                    @click.prevent="handleAddToWishList"
                                    ><i class="fa fa-heart-o"></i> add to
                                    wishlist</a
                                >
                            </div>
                            <div class="size-guide">
                                <i class="fa fa-sliders"></i>
                                <a href="#">
                                    Size guide
                                </a>
                            </div>
                        </div>
                    </article>
                </section>
                <article class="description-product">
                    <div class="description-product__head">
                        <div
                            :class="{ active: tabDesc == 1 }"
                            @click="chooseTabDesc(1)"
                        >
                            description
                        </div>
                        <div
                            :class="{ active: tabDesc == 2 }"
                            @click="chooseTabDesc(2)"
                        >
                            additional info
                        </div>
                        <div
                            :class="{ active: tabDesc == 3 }"
                            @click="chooseTabDesc(3)"
                        >
                            review <span>(4)</span>
                        </div>
                    </div>
                    <div v-if="tabDesc == 1" class="description-product__main">
                        <div class="desc">
                            <div class="box-item">
                                <div class="title">
                                    <i
                                        v-if="isShowOpen"
                                        @click="setShowOpen(false)"
                                        class="fa fa-minus-square"
                                        aria-hidden="true"
                                    ></i
                                    ><i
                                        v-else
                                        @click="setShowOpen(true)"
                                        class="fa fa-plus-square"
                                        aria-hidden="true"
                                    ></i>
                                    opened tab title
                                </div>
                                <div v-if="isShowOpen" class="wrapp-content">
                                    <div class="text">
                                        E Lorem ipsum dolor sit amet,
                                        consectetur adi pisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation
                                        ullamco laboris nisiut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor
                                        in reprehenderit in voluptate velit esse
                                        cillum dolore eu ipsum dolor sit amet,
                                        consectetur adi pisicing elit, sed do
                                        eiusmod tempor inci didunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea
                                        commodo
                                    </div>
                                    <ul>
                                        <li>
                                            <i
                                                class="fa fa-check"
                                                aria-hidden="true"
                                            ></i
                                            >Lorem ipsum dolor sit amet,
                                            consectetur dipisicing elit sed do
                                            eiusmod tempor incididunt ut labore
                                            et
                                        </li>
                                        <li>
                                            <i
                                                class="fa fa-check"
                                                aria-hidden="true"
                                            ></i
                                            >Dolore magna aliqua enim ad minim
                                            veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip
                                        </li>
                                        <li>
                                            <i
                                                class="fa fa-check"
                                                aria-hidden="true"
                                            ></i
                                            >Ex ea commodo consequat lorem ipsum
                                            dolor sit amet enim ad minim veniam
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="box-item">
                                <div class="title">
                                    <i
                                        v-if="isShowClose1"
                                        @click="setShowClose1(false)"
                                        class="fa fa-minus-square"
                                        aria-hidden="true"
                                    ></i
                                    ><i
                                        v-else
                                        @click="setShowClose1(true)"
                                        class="fa fa-plus-square"
                                        aria-hidden="true"
                                    ></i>
                                    closed tab tiltle
                                </div>
                                <div v-if="isShowClose1" class="wrapp-content">
                                    <div class="text">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                    </div>
                                </div>
                            </div>
                            <div class="box-item">
                                <div class="title">
                                    <i
                                        v-if="isShowClose2"
                                        @click="setShowClose2(false)"
                                        class="fa fa-minus-square"
                                        aria-hidden="true"
                                    ></i
                                    ><i
                                        v-else
                                        @click="setShowClose2(true)"
                                        class="fa fa-plus-square"
                                        aria-hidden="true"
                                    ></i>
                                    closed tab tiltle
                                </div>
                                <div v-if="isShowClose2" class="wrapp-content">
                                    <div class="text">
                                        Lorem ipsum dolor sit amet,
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="tabDesc == 2" class="description-product__main">
                        <div class="desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </div>
                    </div>
                    <div v-if="tabDesc == 3" class="description-product__main">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Mollitia repellendus modi nostrum nesciunt beatae
                        pariatur magnam debitis, assumenda fugiat ut tempora
                        iste eos, eaque expedita distinctio? Repudiandae fuga
                        quisquam sunt.
                    </div>
                    <div class="description-product__button">
                        <button>
                            <i class="fa fa-angle-left" aria-hidden="true"></i
                            >&nbsp;&nbsp;&nbsp;prev
                        </button>
                        <button>
                            next&nbsp;&nbsp;&nbsp;<i
                                class="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                        </button>
                    </div>
                </article>
                <article class="buy-now">
                    <div>
                        buy it right now and get free shipping!
                    </div>
                    <button>
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i
                        >&nbsp;&nbsp;&nbsp;purchase now
                    </button>
                </article>
                <article class="size">
                    <div class="size__logo">
                        <div class="box">
                            <div>logo here</div>
                            <div>
                                <a href="#"
                                    ><i
                                        class="fa fa-angle-left"
                                        aria-hidden="true"
                                    ></i>
                                    Show all from this brand</a
                                >
                            </div>
                        </div>
                    </div>
                    <div class="size__desc">
                        <div class="text">
                            Lorem ipsum dolor sit amet, consectetur adi pisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisiut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum. Sed ut
                            perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium
                        </div>
                        <div class="extended-info">
                            <div class="item">
                                <div class="wrap">
                                    <img
                                        src="../../assets/imgs/truck.png"
                                        alt=""
                                    />
                                    <div class="text">
                                        free worldwide shipping and returns
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="wrap">
                                    <img
                                        src="../../assets/imgs/protect-caro.png"
                                        alt=""
                                    />
                                    <div class="text">
                                        compliance with the buyer protection
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="wrap">
                                    <img
                                        src="../../assets/imgs/headphone.png"
                                        alt=""
                                    />
                                    <div class="text">
                                        free support hotline<br />
                                        <b>0800 123 45 67</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <article class="wrap-checkout">
                <div class="checkout-title">
                    <div class="bar-white">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="checkout-title__text">
                        check out our <b>new arrivals!</b>
                    </div>
                    <div class="checkout-title__desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                    </div>
                </div>
                <div class="checkout-image">
                    <img
                        src="../../assets/imgs/goes-here/goes-here.png"
                        alt=""
                    />
                </div>
            </article>
            <article class="wrap-newspaper">
                <div class="container">
                    <div class="newspaper">
                        <div class="newspaper-left">
                            <div class="newspaper-left__highlight">
                                ...Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod exercitation
                                tempor incididunt ut labore et dolore magna
                                aliqua enim ad minim veniam, nostrud
                                <img
                                    src="../../assets/imgs/quotes/quotes-yellow.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div class="newspaper-right">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum. Sed ut
                            perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi
                        </div>
                    </div>
                </div>
            </article>
            <section class="wrap-product-description">
                <div class="container">
                    <div class="product-description">
                        <article class="product-description__info">
                            <div class="info-head">
                                <div
                                    :class="{ active: tabInfo == 1 }"
                                    @click="chooseTabInfo(1)"
                                >
                                    advantages
                                </div>
                                <div
                                    :class="{ active: tabInfo == 2 }"
                                    @click="chooseTabInfo(2)"
                                >
                                    disclaimer
                                </div>
                                <div
                                    :class="{ active: tabInfo == 3 }"
                                    @click="chooseTabInfo(3)"
                                >
                                    return policy
                                </div>
                                <div
                                    :class="{ active: tabInfo == 4 }"
                                    @click="chooseTabInfo(4)"
                                >
                                    return policy
                                </div>
                            </div>
                            <div v-if="tabInfo == 1" class="info-main">
                                <div class="items">
                                    <div
                                        class="box-item"
                                        v-for="(element, index) in listDesc"
                                        :key="index"
                                    >
                                        <div class="item">
                                            <div class="icon d-flex-center">
                                                <img
                                                    :src="
                                                        require(`../../assets/imgs/desc/${element.img}`)
                                                    "
                                                    alt=""
                                                />
                                            </div>
                                            <div class="content">
                                                {{ element.text }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="tabInfo == 2" class="info-main">
                                <div class="desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                </div>
                            </div>
                            <div v-if="tabInfo == 3" class="info-main">
                                <div class="desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                </div>
                            </div>
                            <div v-if="tabInfo == 4" class="info-main">
                                <div class="desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <article class="wrap-slide-testimonial">
                <div class="arrow-left d-flex-center">
                    <i class="fa fa-angle-left"></i>
                </div>
                <div class="arrow-right d-flex-center">
                    <i class="fa fa-angle-right"></i>
                </div>
                <div class="container">
                    <div class="slide-testimonial">
                        <div class="title">clients about us</div>
                        <div class="name">Jeniffer Burns</div>
                        <div class="short-desc">Creative Heads Inc.</div>
                        <div class="long-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation
                        </div>
                        <img
                            src="../../assets/imgs/quotes/quotes-yellow.png"
                            alt=""
                        />
                    </div>
                </div>
            </article>
            <related-product />
            <more-product />
            <section class="bottom-buttons">
                <a href="#">
                    <i class="fa fa-usd" aria-hidden="true"></i>
                    purchase now
                </a>
                <a href="#">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                    more details
                </a>
            </section>
        </main>
        <footer-comp />
    </div>
</template>

<script>
import TopArea from "./TopArea";
import MenuComp from "../MenuComp";
import FooterComp from "./FooterComp";
import BannerProduct from "./BannerProduct";
import BreadCrumb from "./BreadCrumb";
import RelatedProduct from "./RelatedProduct";
import MoreProduct from "./MoreProduct";

import StarRating from "vue-star-rating";
import { mapState, mapActions } from "vuex";
import {
    ADD_CART_SUCCESS,
    ADD_WISHLISST_SUCCESS,
    WARN_ADD_WISHLISST
} from "../../constants/config";
export default {
    name: "full-width",
    components: {
        TopArea,
        MenuComp,
        FooterComp,
        BannerProduct,
        BreadCrumb,
        RelatedProduct,
        MoreProduct,
        StarRating
    },
    computed: {
        ...mapState({
            listProducts: state => state.product.listProducts
        })
    },
    data() {
        return {
            banner: {
                title: "<b>urban  </b> gem-shirt",
                image: "icon-black/hanger.png",
                bgImage: "#ffce3b",
                desc:
                    " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore "
            },
            listBreadCrumb: [
                {
                    link: "#",
                    text: "Home"
                },
                {
                    link: "#",
                    text: "Breadcrumbs Example"
                },
                {
                    link: "#",
                    text: "Second Level"
                },
                {
                    link: "#",
                    text: "Third Level"
                }
            ],
            listDesc: [
                {
                    img: "umbrella.png",
                    text:
                        "Lorem ipsum dolor sit ametcon sectetur adipisicing elit sed."
                },
                {
                    img: "clock.png",
                    text:
                        "Lorem ipsum dolor sit ametcon sectetur adipisicing elit sed."
                },
                {
                    img: "note-book.png",
                    text:
                        "Lorem ipsum dolor sit ametcon sectetur adipisicing elit sed."
                },
                {
                    img: "scissors.png",
                    text:
                        "Lorem ipsum dolor sit ametcon sectetur adipisicing elit sed."
                },
                {
                    img: "gift.png",
                    text:
                        "Lorem ipsum dolor sit ametcon sectetur adipisicing elit sed."
                },
                {
                    img: "reload.png",
                    text:
                        "Lorem ipsum dolor sit ametcon sectetur adipisicing elit sed."
                }
            ],
            tabDesc: 1,
            tabInfo: 1,
            isShowOpen: true,
            isShowClose1: false,
            isShowClose2: false,
            idProduct: null,
            productDetail: null,
            size: "Large",
            color: "White"
        };
    },
    created() {
        this.getProductById();
    },
    methods: {
        ...mapActions({
            addToCart: "cart/addToCart",
            reduceQuantity: "product/reduceQuantity",
            addToWishList: "wishlist/addToWishList"
            // changeHeart: "product/changeHeart"
        }),
        chooseTabDesc(number) {
            this.tabDesc = number;
        },
        setShowClose1(bool) {
            this.isShowClose1 = bool;
        },
        setShowClose2(bool) {
            this.isShowClose2 = bool;
        },
        setShowOpen(bool) {
            this.isShowOpen = bool;
        },
        chooseTabInfo(number) {
            this.tabInfo = number;
        },
        getProductById() {
            this.idProduct = this.$route.params.id;
            if (this.idProduct) {
                this.productDetail = this.listProducts.filter(
                    item => item.id === this.idProduct
                )[0];
            }
        },
        selecetSize(e) {
            this.size = e.target.value;
        },
        selecetColor(e) {
            this.color = e.target.value;
        },
        handleAddToCart() {
            let objCart = {
                infoProduct: this.productDetail,
                size: this.size,
                color: this.color
            };
            let objProduct = {
                id: this.productDetail.id,
                count: 1
            };
            this.reduceQuantity(objProduct);
            this.addToCart(objCart);
            this.$notify(ADD_CART_SUCCESS);
            this.$router.push("/shop-cart");
        },
        handleAddToWishList() {
            let objWishList = {
                infoProduct: this.productDetail,
                size: this.size,
                color: this.color
            };
            this.addToWishList(objWishList).then(res => {
                if (res == 0) {
                    this.$notify(ADD_WISHLISST_SUCCESS);
                    this.$router.push("/shop-wishlist");
                } else {
                    this.$notify(WARN_ADD_WISHLISST);
                }
            });
        }
    }
};
</script>

<style lang="scss">
@import "../../styles/shop/FullWidth";
@import "../../styles/shop/responsive-full-width";
</style>

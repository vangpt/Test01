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
                    <section>
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
                                    <a href="#"
                                        ><i class="fa fa-twitter"></i
                                    ></a>
                                    <a href="#">
                                        <i class="fa fa-facebook-official"></i>
                                    </a>
                                    <a href="#"
                                        ><i class="fa fa-info-circle"></i
                                    ></a>
                                    <a href="#"
                                        ><i class="fa fa-google-plus-square"></i
                                    ></a>
                                    <a href="#"
                                        ><i class="fa fa-instagram"></i
                                    ></a>
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
                                        <span>Categories:</span> Clothes,
                                        Dresses
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
                                    <div>Exclusive shoes</div>
                                    <button>
                                        <i class="fa fa-angle-left"></i>
                                    </button>
                                </div>
                                <div class="review-product">
                                    <div class="info__star">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    4 customer reviews
                                </div>
                                <div class="price-product">
                                    <article class="price-old">
                                        <div class="text">Old Price</div>
                                        <div class="number">
                                            $165.00–$199.00
                                        </div>
                                    </article>
                                    <article class="price-new">
                                        <div class="text">New Price</div>
                                        <div class="number">
                                            $135.00–$179.00
                                        </div>
                                    </article>
                                </div>
                                <div class="desc-product">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum. Sed ut
                                    perspiciatis unde omnis iste natus error sit
                                    voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt
                                    explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas sit aspernatur aut odit aut
                                </div>
                                <ul class="list-info-product">
                                    <li>
                                        <i class="fa fa-angle-right"></i>Lorem
                                        ipsum dolor sit amet, consectetur
                                        dipisicing elit
                                    </li>
                                    <li>
                                        <i class="fa fa-angle-right"></i>Sed do
                                        eiusmod tempor incididunt ut labore et
                                        dolore magna
                                    </li>
                                    <li>
                                        <i class="fa fa-angle-right"></i>Aliqua
                                        enim ad minim veniam, quis nostrud
                                        exercitation ullamco
                                    </li>
                                    <li>
                                        <i class="fa fa-angle-right"></i>Laboris
                                        nisi ut aliquip ex ea commodo consequat
                                        lorem ipsum
                                    </li>
                                    <li>
                                        <i class="fa fa-angle-right"></i>dolor
                                        sit amet, consectetur adipisicing elit,
                                        sed do eiusmod
                                    </li>
                                    <li>
                                        <i class="fa fa-angle-right"></i>tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad
                                    </li>
                                </ul>
                                <div class="select-product">
                                    <table>
                                        <tr>
                                            <td style="width: 50px">Size</td>
                                            <td>
                                                <div class="box-select">
                                                    <select>
                                                        <option value=""
                                                            >Large</option
                                                        >
                                                    </select>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Color</td>
                                            <td>
                                                <div class="box-select">
                                                    <select>
                                                        <option value=""
                                                            >White</option
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
                                    <span>$199.00</span>
                                    <span>$135.00</span>
                                    <span>22 in stock</span>
                                </div>
                                <div class="buttons-option">
                                    <div>10</div>
                                    <a class="link-cart" href="#"
                                        ><i class="fa fa-shopping-cart"></i> add
                                        to cart</a
                                    >
                                    <a class="link-wishlist" href="#"
                                        ><i class="fa fa-heart-o"></i> to
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
                </section>
            </div>
            <article class="wrap-checkout">
                <div class="checkout-title">
                    <div class="bar-white">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="checkout-title__text">
                        check out our  <b>new arrivals!</b>
                    </div>
                    <div class="checkout-title__desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 
                    </div>
                </div>
                <div class="checkout-image">
                    <img src="../../assets/imgs/goes-here/goes-here.png" alt="">
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
                        <div class="long-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
                        <img src="../../assets/imgs/quotes/quotes-yellow.png" alt="">
                    </div>
                </div>
            </article>
        </main>
        <footer-comp />
    </div>
</template>

<script>
import TopArea from "./TopArea";
import MenuComp from "./MenuComp";
import FooterComp from "./FooterComp";
import BannerProduct from "./BannerProduct";
import BreadCrumb from "./BreadCrumb";
export default {
    name: "left-side",
    components: {
        TopArea,
        MenuComp,
        FooterComp,
        BannerProduct,
        BreadCrumb
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
            tabDesc: 1
        };
    },
    methods: {
        chooseTabDesc(number) {
            this.tabDesc = number;
        }
    }
};
</script>

<style lang="scss">
@import "../../styles/shop/FullWidth";
</style>

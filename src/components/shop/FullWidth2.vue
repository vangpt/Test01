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
                                        <i
                                            class="fa fa-angle-left"
                                        
                                        ></i>
                                    </div>
                                    <div class="arrow-right d-flex-center">
                                        <i
                                            class="fa fa-angle-right"
                                        
                                        ></i>
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
                                        <i
                                            class="fa fa-angle-left"
                                           
                                        ></i>
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
                                    <li><i class="fa fa-angle-right"></i>Lorem ipsum dolor sit amet, consectetur dipisicing elit</li>
                                    <li><i class="fa fa-angle-right"></i>Sed do eiusmod tempor incididunt ut labore et dolore magna</li>
                                    <li><i class="fa fa-angle-right"></i>Aliqua enim ad minim veniam, quis nostrud exercitation ullamco</li>
                                    <li><i class="fa fa-angle-right"></i>Laboris nisi ut aliquip ex ea commodo consequat lorem ipsum </li>
                                    <li><i class="fa fa-angle-right"></i>dolor sit amet, consectetur adipisicing elit, sed do eiusmod </li>
                                    <li><i class="fa fa-angle-right"></i>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </li>
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
                                        ><i
                                            class="fa fa-shopping-cart"
                                           
                                        ></i>
                                        add to cart</a
                                    >
                                    <a class="link-wishlist" href="#"
                                        ><i
                                            class="fa fa-heart-o"
                                           
                                        ></i>
                                        to wishlist</a
                                    >
                                </div>
                                <div class="size-guide">
                                    <i
                                        class="fa fa-sliders"
                                       
                                    ></i>
                                    <a href="#">
                                    Size guide
                                    </a>
                                </div>
                            </div>
                        </article>
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
                            <div
                                v-if="tabDesc == 1"
                                class="description-product__main"
                            >
                                <div class="wrapp-content">
                                    <div class="image">
                                        <img
                                            src="../../assets/imgs/accordion1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div class="text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.  veritatis et quasi architecto beatae vitae dicta sunt 
                                    </div>
                                    <div class="number">
                                        <div class="item">
                                            <div class="item__number d-flex-center">1</div>
                                            <div class="item__text">Lorem ipsum dolor sit amet, consectetur</div>
                                        </div>
                                        <div class="item">
                                            <div class="item__number d-flex-center">2</div>
                                            <div class="item__text">Consectetur adipisicing elit, sed do eiusmod </div>
                                        </div>
                                        <div class="item">
                                            <div class="item__number d-flex-center">3</div>
                                            <div class="item__text">Adipisicing elit, sed do eiusmod tempor</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                v-if="tabDesc == 2"
                                class="description-product__main"
                            >
                                Tab2
                            </div>
                            <div
                                v-if="tabDesc == 3"
                                class="description-product__main"
                            >
                                Tab3
                            </div>
                            <div class="description-product__button">
                                <button>
                                    <i
                                        class="fa fa-angle-left"
                                       
                                    ></i
                                    >&nbsp;&nbsp;&nbsp;prev
                                </button>
                                <button>
                                    next&nbsp;&nbsp;&nbsp;<i
                                        class="fa fa-angle-right"
                                       
                                    ></i>
                                </button>
                            </div>
                        </article>
                    </section>
                </section>
            </div>
            <article class="wrap-product-highlight">
                <div class="container">
                    <div class="product-highlight">
                        <div class="product-highlight__title">
                            <div class="title-large">
                                lorem ipsum <b>dolor sit amet</b>
                            </div>
                            <div class="title-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 
                            </div>
                        </div>
                        <div class="product-highlight__main">
                            <div class="main-left">
                                <div class="image">
                                    <img src="../../assets/imgs/shoe-gray.png" alt="">
                                </div>
                                <div class="icons">
                                    <div class="icon d-flex-center">
                                        <img src="../../assets/imgs/icon-yellow/colors.png" alt="">
                                    </div>
                                    <div class="icon d-flex-center">
                                        <img src="../../assets/imgs/icon-yellow/crown-yellow.png" alt="">
                                    </div>
                                    <div class="icon d-flex-center">
                                        <img src="../../assets/imgs/icon-yellow/leaf.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="main-right">
                                <div class="item">
                                    <div class="item__title"><b>unique</b> color</div>
                                    <div class="item__desc">
                                        Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="item__title"><b>Exclusive </b> design</div>
                                    <div class="item__desc">
                                        Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="item__title"><b>natural </b> materials</div>
                                    <div class="item__desc">
                                        Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article class="wrap-size-product">
                <div class="container">
                    <div class="size-product">
                        <div class="size-detail">
                            <div class="size-detail__title">lorem ipsum dolor sit!</div>
                            <div class="size-detail__desc">
                                <div class="icon d-flex-center"><i class="fa fa-arrows-alt"></i></div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat. Duis lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                            <table class="size-detail__size">
                                <tr>
                                    <th>SHOES</th>
                                    <th>8</th>
                                    <th>9</th>
                                    <th>10</th>
                                    <th>11</th>
                                    <th>12</th>
                                </tr>
                                <tr>
                                    <td>Length (cm)</td>
                                    <td>18</td>
                                    <td>19</td>
                                    <td>20</td>
                                    <td>21</td>
                                    <td>22</td>
                                </tr>
                            </table>
                        </div>
                        <div class="image">
                            <img src="../../assets/imgs/shoe-border.png" alt="">
                        </div>
                    </div>
                </div>
            </article>
            <article class="wrap-qf">
                <div class="container">
                    <div class="qf">
                        <div
                            class="element"
                            v-for="(item, index) in qf"
                            :key="index"
                        >
                            <div class="item">
                                <div class="title" v-html="item.title"></div>
                                <div class="content">{{ item.content }}</div>
                                <div class="button">
                                    <button>learn more</button>
                                </div>
                            </div>
                            <div class="icon">
                                <img
                                    :src="
                                        require(`../../assets/imgs/icon-black/${item.image}`)
                                    "
                                    alt="icon QF"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article class="catalogues">
                <div class="catalogues__title">
                    BROWSE <b>OUR CATALOGUES</b>
                </div>
                <div class="catalogues__desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </div>
            </article>
            <article class="wrap-newspaper">
                <div class="container">
                    <div class="newspaper">
                        <div class="newspaper-left">
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla </div>
                            <div class="newspaper-left__highlight">
                                ...Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod exercitation tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, nostrud
                                <img src="../../assets/imgs/quotes/quotes-black.png" alt="">
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                        <div class="newspaper-right">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                        </div>
                    </div>
                </div>
            </article>
            <article class="wrap-three-images">
                <div class="container">
                    <div class="three-images">
                        <div class="three-images-left">
                            <div></div>
                        </div>
                        <div class="three-images-right">
                            <div></div>
                            <div></div>
                        </div>
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
                title: "<b>Exclusive </b> shoes",
                image: "icon-black/crown.png",
                bgImage: "#ffce3b",
                desc:
                    " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"
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
            qf: [
                {
                    title: "free worldwide shipping and returns",
                    content:
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    link: "#",
                    image: "truck.png"
                },
                {
                    title: "compliance with the uyer protection",
                    content:
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    link: "#",
                    image: "shield.png"
                },
                {
                    title: "free support hotline <b>0800 123 45 67</b>",
                    content:
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    link: "#",
                    image: "headphone.png"
                }
            ],
            tabDesc: 1,
        };
    },
    methods: {
        chooseTabDesc(number) {
            this.tabDesc = number;
        },
    }
};
</script>

<style lang="scss">
@import "../../styles/shop/FullWidth2";
</style>

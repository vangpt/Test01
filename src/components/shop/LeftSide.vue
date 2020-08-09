<template>
    <div>
        <top-area />
        <menu-comp />
        <banner-product v-bind:contentBanner="banner">
            <bread-crumb-product v-bind:breadCrumb="listBreadCrumb" />
        </banner-product>
        <main>
            <div class="container">
                <section class="product">
                    <aside class="aside-top">
                        <div class="categories">
                            <div class="title">
                                categories
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <ul class="grand-categories">
                                <!-- <li v-for="(element,index) in listCategories" :key="index">
                                    <div class="grand-title">

                                    <a :href="element.link">{{element.text}}</a><i v-if="element.categroyies1.length > 0" class="fa fa-angle-right"></i>
                                    </div>
                                    <ul v-if="element.categroyies1.length > 0" class="parents-categories">
                                        <li v-for="(item,index) in element.categroyies1" :key="index">
                                            <div class="categroy-title">
                                                <a :href="item.link" class="text">
                                                    <i class="fa fa-square"></i>&nbsp;&nbsp;&nbsp;{{item.text}}
                                                </a>
                                                <i v-if="item.categroyies2.length > 0" class="fa fa-angle-right"></i>
                                            </div>
                                            <ul v-if="item.categroyies2.length" class="child-categories">
                                                <li
                                                    v-for="(itemChild,index) in item.categroyies2" :key="index"
                                                >
                                                    <div class="child-title">
                                                        <a :href="itemChild.link" class="text">
                                                            <i class="fa fa-square"></i>&nbsp;&nbsp;&nbsp;{{itemChild.text}}
                                                        </a>
                                                        <i class="fa fa-angle-right"></i>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li> -->
                                <li>
                                    <div class="grand-title">
                                        <a href="#">version</a
                                        ><i class="fa fa-angle-right"></i>
                                    </div>
                                </li>
                                <li>
                                    <div class="grand-title">
                                        <a href="#">lorem ipsum</a>
                                    </div>
                                </li>
                                <li>
                                    <div class="grand-title">
                                        <a href="#">proin</a
                                        ><i class="fa fa-angle-right"></i>
                                    </div>
                                    <ul class="parents-categories">
                                        <li>
                                            <div class="categroy-title">
                                                <a href="#" class="text">
                                                    <i class="fa fa-square"></i
                                                    >&nbsp;&nbsp;&nbsp;July 2015
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="categroy-title">
                                                <a href="#" class="text">
                                                    <i class="fa fa-square"></i
                                                    >&nbsp;&nbsp;&nbsp;January
                                                    2013
                                                </a>
                                                <i
                                                    class="fa fa-angle-right"
                                                ></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="categroy-title">
                                                <a href="#" class="text">
                                                    <i class="fa fa-square"></i
                                                    >&nbsp;&nbsp;&nbsp;March
                                                    2012
                                                </a>
                                                <i
                                                    class="fa fa-angle-right"
                                                ></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="categroy-title">
                                                <a href="#" class="text">
                                                    <i class="fa fa-square"></i
                                                    >&nbsp;&nbsp;&nbsp;January
                                                    2012
                                                </a>
                                                <i
                                                    class="fa fa-angle-right"
                                                ></i>
                                            </div>
                                            <ul class="child-categories">
                                                <li>
                                                    <div class="child-title">
                                                        <a
                                                            href="#"
                                                            class="text"
                                                        >
                                                            <i
                                                                class="fa fa-square"
                                                            ></i
                                                            >&nbsp;&nbsp;&nbsp;July
                                                            2015
                                                        </a>
                                                        <i
                                                            class="fa fa-angle-right"
                                                        ></i>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="child-title">
                                                        <a
                                                            href="#"
                                                            class="text"
                                                        >
                                                            <i
                                                                class="fa fa-square"
                                                            ></i
                                                            >&nbsp;&nbsp;&nbsp;January
                                                            2013
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="child-title">
                                                        <a
                                                            href="#"
                                                            class="text"
                                                        >
                                                            <i
                                                                class="fa fa-square"
                                                            ></i
                                                            >&nbsp;&nbsp;&nbsp;March
                                                            2012
                                                        </a>
                                                        <i
                                                            class="fa fa-angle-right"
                                                        ></i>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="child-title">
                                                        <a
                                                            href="#"
                                                            class="text"
                                                        >
                                                            <i
                                                                class="fa fa-square"
                                                            ></i
                                                            >&nbsp;&nbsp;&nbsp;January
                                                            2012
                                                        </a>
                                                        <i
                                                            class="fa fa-angle-right"
                                                        ></i>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div class="grand-title">
                                        <a href="#">gravida</a
                                        ><i class="fa fa-angle-right"></i>
                                    </div>
                                </li>
                                <li>
                                    <div class="grand-title">
                                        <a href="#">nibh vel velit</a
                                        ><i class="fa fa-angle-right"></i>
                                    </div>
                                </li>
                                <li>
                                    <div class="grand-title">
                                        <a href="#">auctor</a>
                                    </div>
                                </li>
                                <li>
                                    <div class="grand-title">
                                        <a href="#">aliquet</a
                                        ><i class="fa fa-angle-right"></i>
                                    </div>
                                </li>
                                <li>
                                    <div class="grand-title">
                                        <a href="#">Aenean</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="recent-viewed">
                            <div class="title">
                                recent-viewed
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <div class="items">
                                <div class="item">
                                    <div class="avatar">
                                        <img
                                            src="../../assets/imgs/img-testtimonials.png"
                                            alt=""
                                            height="70px"
                                        />
                                    </div>
                                    <div class="info">
                                        <div class="info__name">
                                            <a href="#">product title here</a>
                                        </div>
                                        <div class="info__star">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                        <div class="price">$35.00</div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="avatar">
                                        <div class="avatar__percent">%</div>
                                        <img
                                            src="../../assets/imgs/img-testtimonials.png"
                                            alt=""
                                            height="70px"
                                        />
                                    </div>
                                    <div class="info">
                                        <div class="info__name">
                                            <a href="#">product title here</a>
                                        </div>
                                        <div class="info__star">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i
                                                class="fa fa-star"
                                                style="color: #b6c6c9"
                                            ></i>
                                        </div>
                                        <div class="price">$35.00</div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="avatar">
                                        <img
                                            src="../../assets/imgs/img-testtimonials.png"
                                            alt=""
                                            height="70px"
                                        />
                                    </div>
                                    <div class="info">
                                        <div class="info__name">
                                            <a href="#">product title here</a>
                                        </div>
                                        <div class="price">$35.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="search d-flex">
                            <input
                                type="text"
                                placeholder="Search for product..."
                            />
                            <button><i class="fa fa-search"></i></button>
                        </div>
                        <div class="filter-price">
                            <div class="title">
                                filter by price
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <div class="bar-filter">
                                <div class="bar-fill">
                                    <div class="two-circle">
                                        <i class="fa fa-circle"></i>
                                        <i class="fa fa-circle"></i>
                                    </div>
                                </div>
                                <div class="bar-not-fill"></div>
                            </div>
                            <div class="btn">
                                <a href="">filter</a>
                                <div><span>Price: </span>$345 - $1640</div>
                            </div>
                        </div>
                        <div class="featured">
                            <div class="title">
                                featured products
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <div class="items">
                                <div class="item">
                                    <div class="avatar">
                                        <img
                                            src="../../assets/imgs/shop/featured-product/product1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div class="info">
                                        <div class="info__name">
                                            <a href="#">product title here</a>
                                        </div>
                                        <div class="info__price">$35.00</div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="avatar">
                                        <div class="avatar__percent">%</div>
                                        <img
                                            src="../../assets/imgs/shop/featured-product/product1.png"
                                            alt=""
                                            height="80px"
                                        />
                                    </div>
                                    <div class="info">
                                        <div class="info__name">
                                            <a href="#">product title here</a>
                                        </div>
                                        <div class="info__price">$35.00</div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="avatar">
                                        <div class="avatar__percent">%</div>
                                        <img
                                            src="../../assets/imgs/shop/featured-product/product1.png"
                                            alt=""
                                            height="80px"
                                        />
                                    </div>
                                    <div class="info">
                                        <div class="info__name">
                                            <a href="#">product title here</a>
                                        </div>
                                        <div class="info__price">$35.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tags">
                            <div class="title">
                                product tags
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <div class="list-tags">
                                <a
                                    v-for="(item, index) in tags"
                                    :key="index"
                                    :href="item.link"
                                    >{{ item.text }}</a
                                >
                            </div>
                        </div>
                        <div class="text-box">
                            <div class="title">
                                textbox
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <div class="wrapper">
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor et
                                    incididunt ut labore dolore...
                                </div>
                                <button>learn more</button>
                            </div>
                        </div>
                    </aside>
                    <section>
                        <article class="detail-product">
                            <div class="image-product">
                                <div class="wrap-image">
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
                                    <div>
                                        <span>SKU:</span> 4564ZH
                                    </div>
                                    <div>
                                        <span>Categories:</span> Clothes, Dresses
                                    </div>
                                    <div>
                                        <span>Tags: </span>elegant, dresses, summer
                                    </div>
                                </div>
                            </div>
                            <div class="info-product">
                                asfs
                            </div>
                        </article>
                    </section>
                </section>
            </div>
        </main>
        <footer-comp />
    </div>
</template>

<script>
import TopArea from "./TopArea";
import MenuComp from "./MenuComp";
import FooterComp from "./FooterComp";
import BannerProduct from "./BannerProduct";
import BreadCrumbProduct from "./BreadCrumbProduct";
export default {
    name: "left-side",
    components: {
        TopArea,
        MenuComp,
        FooterComp,
        BannerProduct,
        BreadCrumbProduct
    },
    data() {
        return {
            banner: {
                title: "<b>summer</b> feeling",
                image: "left-side-banner.png",
                bgImage: "#f94c4f",
                desc:
                    " Absolutely marvelous piece of lingerie from The Gem developers. It is so stunning and sexy as The Gem itself."
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
            tags: [
                {
                    link: "#",
                    text: "morbi"
                },
                {
                    link: "#",
                    text: "accumsan "
                },
                {
                    link: "#",
                    text: "ipsum"
                },
                {
                    link: "#",
                    text: "velit"
                },
                {
                    link: "#",
                    text: "nam"
                },
                {
                    link: "#",
                    text: "tellus"
                },
                {
                    link: "#",
                    text: "aodio"
                },
                {
                    link: "#",
                    text: "tincidunt"
                },
                {
                    link: "#",
                    text: "auctor"
                },
                {
                    link: "#",
                    text: "aornare odi"
                }
            ]
        };
    }
};
</script>

<style lang="scss">
@import "../../styles/shop/LeftSide";
</style>

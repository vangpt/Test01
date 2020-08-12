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
                                    <div>Lorem ipsum dolor</div>
                                    <button>
                                        <i
                                            class="fa fa-angle-left"
                                            aria-hidden="true"
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
                                    esse cillum dolore eu fugiat nulla
                                </div>
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
                                            aria-hidden="true"
                                        ></i>
                                        add to cart</a
                                    >
                                    <a class="link-wishlist" href="#"
                                        ><i
                                            class="fa fa-heart-o"
                                            aria-hidden="true"
                                        ></i>
                                        to wishlist</a
                                    >
                                </div>
                                <div class="size-guide">
                                    <i
                                        class="fa fa-sliders"
                                        aria-hidden="true"
                                    ></i>
                                    Size guide
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
                                <div class="desc">
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
                                    laudantium, totam rem, eaque ipsa quae ab
                                    illo inventore. Veritatis et quasi
                                    architecto beatae vitae dicta sunt
                                    explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas sit aspernatur aut odit aut fugit,
                                    sed quia consequuntur magni dolores eos qui
                                    ratione voluptatem.
                                </div>
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
                            <div
                                v-if="tabDesc == 2"
                                class="description-product__main"
                            >
                                <div class="desc">
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
                                    laudantium, totam rem, eaque ipsa quae ab
                                    illo inventore. Veritatis et quasi
                                    architecto beatae vitae dicta sunt
                                    explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas sit aspernatur aut odit aut fugit,
                                    sed quia consequuntur magni dolores eos qui
                                    ratione voluptatem.
                                </div>
                            </div>
                            <div
                                v-if="tabDesc == 3"
                                class="description-product__main"
                            >
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
                            <div class="description-product__button">
                                <button>
                                    <i
                                        class="fa fa-angle-left"
                                        aria-hidden="true"
                                    ></i
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
                        <article class="alert-box">
                            <div class="alert">
                                <div class="alert__price item">$5</div>
                                <div class="alert__title item">
                                    coupon<br />
                                    <span>for free</span>
                                </div>
                                <div class="alert__desc item">
                                    Just Signup For Our Newsletter And Get $5 To
                                    Your Account
                                </div>
                                <div class="alert__input item">
                                    <input
                                        type="text"
                                        placeholder="Enter Your Email..."
                                        value=""
                                    />
                                    <button>sign up me!</button>
                                </div>
                            </div>
                        </article>
                        <article class="accordion">
                            <div class="box-item">
                                <div class="title">
                                    <i
                                        v-if="isShowQuality"
                                        @click="setShowQuality(false)"
                                        class="fa fa-minus-square"
                                        aria-hidden="true"
                                    ></i
                                    ><i
                                        v-else
                                        @click="setShowQuality(true)"
                                        class="fa fa-plus-square"
                                        aria-hidden="true"
                                    ></i>
                                    quality
                                </div>
                                <div v-if="isShowQuality" class="wrapp-content">
                                    <div class="image">
                                        <img src="../../assets/imgs/accordion1.png" alt="">
                                    </div>
                                    <div class="text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
                                    </div>
                                </div>
                            </div>
                            <div class="box-item">
                                <div class="title">
                                    <i
                                        v-if="isShowBrand"
                                        @click="setShowBrand(false)"
                                        class="fa fa-minus-square"
                                        aria-hidden="true"
                                    ></i
                                    ><i
                                        v-else
                                        @click="setShowBrand(true)"
                                        class="fa fa-plus-square"
                                        aria-hidden="true"
                                    ></i>
                                    Brand
                                </div>
                                <div v-if="isShowBrand" class="wrapp-content">
                                    <div class="image">
                                        <img src="../../assets/imgs/accordion1.png" alt="">
                                    </div>
                                    <div class="text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
                                    </div>
                                </div>
                            </div>
                            <div class="box-item">
                                <div class="title">
                                    <i
                                        v-if="isShowGuarantee"
                                        @click="setShowGuarantee(false)"
                                        class="fa fa-minus-square"
                                        aria-hidden="true"
                                    ></i
                                    ><i
                                        v-else
                                        @click="setShowGuarantee(true)"
                                        class="fa fa-plus-square"
                                        aria-hidden="true"
                                    ></i>
                                    Guarantee
                                </div>
                                <div v-if="isShowGuarantee" class="wrapp-content">
                                    <div class="image">
                                        <img src="../../assets/imgs/accordion1.png" alt="">
                                    </div>
                                    <div class="text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
                                    </div>
                                </div>
                            </div>
                            <div class="box-item">
                                <div class="title">
                                    <i
                                        v-if="isShowStyle"
                                        @click="setShowStyle(false)"
                                        class="fa fa-minus-square"
                                        aria-hidden="true"
                                    ></i
                                    ><i
                                        v-else
                                        @click="setShowStyle(true)"
                                        class="fa fa-plus-square"
                                        aria-hidden="true"
                                    ></i>
                                    Style
                                </div>
                                <div v-if="isShowStyle" class="wrapp-content">
                                    <div class="image">
                                        <img src="../../assets/imgs/accordion1.png" alt="">
                                    </div>
                                    <div class="text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                </section>
            </div>
            <article class="blocks">
                <div class="block">

                </div>
                <div class="block">

                </div>
                <div class="block">

                </div>
                <div class="block">

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
            isShowQuality: false,
            isShowBrand: true,
            isShowGuarantee: false,
            isShowStyle: false,
        };
    },
    methods: {
        chooseTabDesc(number) {
            this.tabDesc = number;
        },
        setShowBrand(bool){
            this.isShowBrand = bool;
        },
        setShowGuarantee(bool){
            this.isShowGuarantee = bool;
        },
        setShowStyle(bool){
            this.isShowStyle = bool;
        },
        setShowQuality(bool){
            this.isShowQuality = bool;
        },
    }
};
</script>

<style lang="scss">
@import "../../styles/shop/LeftSide";
</style>

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
                    <section class="left-product">
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
                                    <a href="#">Size guide</a>
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
                                        <div
                                            v-if="isShowOpen"
                                            class="wrapp-content"
                                        >
                                            <div class="text">
                                                E Lorem ipsum dolor sit amet,
                                                consectetur adi pisicing elit,
                                                sed do eiusmod tempor incididunt
                                                ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation
                                                ullamco laboris nisiut aliquip
                                                ex ea commodo consequat. Duis
                                                aute irure dolor in
                                                reprehenderit in voluptate velit
                                                esse cillum dolore eu ipsum
                                                dolor sit amet, consectetur adi
                                                pisicing elit, sed do eiusmod
                                                tempor inci didunt ut labore et
                                                dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud
                                                exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo
                                            </div>
                                            <ul>
                                                <li>
                                                    <i
                                                        class="fa fa-check"
                                                        aria-hidden="true"
                                                    ></i
                                                    >Lorem ipsum dolor sit amet,
                                                    consectetur dipisicing elit
                                                    sed do eiusmod tempor
                                                    incididunt ut labore et
                                                </li>
                                                <li>
                                                    <i
                                                        class="fa fa-check"
                                                        aria-hidden="true"
                                                    ></i
                                                    >Dolore magna aliqua enim ad
                                                    minim veniam, quis nostrud
                                                    exercitation ullamco laboris
                                                    nisi ut aliquip
                                                </li>
                                                <li>
                                                    <i
                                                        class="fa fa-check"
                                                        aria-hidden="true"
                                                    ></i
                                                    >Ex ea commodo consequat
                                                    lorem ipsum dolor sit amet
                                                    enim ad minim veniam
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
                                        <div
                                            v-if="isShowClose1"
                                            class="wrapp-content"
                                        >
                                            <div class="text">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit,
                                                sed do eiusmod tempor
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
                                        <div
                                            v-if="isShowClose2"
                                            class="wrapp-content"
                                        >
                                            <div class="text">
                                                Lorem ipsum dolor sit amet,
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
                                </div>
                            </div>
                            <div
                                v-if="tabDesc == 3"
                                class="description-product__main"
                            >
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Mollitia repellendus modi
                                nostrum nesciunt beatae pariatur magnam debitis,
                                assumenda fugiat ut tempora iste eos, eaque
                                expedita distinctio? Repudiandae fuga quisquam
                                sunt.
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
                        <article class="buy-now">
                            <div>
                                buy it right now and
                                <span>get free shipping!</span>
                            </div>
                            <button>
                                <i
                                    class="fa fa-shopping-cart"
                                    aria-hidden="true"
                                ></i
                                >&nbsp;&nbsp;&nbsp;buy now
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
                                    Ipsum dolor sit amet, consectetur adi
                                    pisicing elit, sed do eiusmod tempor inci
                                    didunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud
                                </div>
                                <table border="1">
                                    <tr>
                                        <th style="width:25%">Dress</th>
                                        <th style="width:15%">XS</th>
                                        <th style="width:15%">S</th>
                                        <th style="width:15%">M</th>
                                        <th style="width:15%">L</th>
                                        <th style="width:15%">XL</th>
                                    </tr>
                                    <tr>
                                        <td>Length(cm)</td>
                                        <td>60</td>
                                        <td>63</td>
                                        <td>68</td>
                                        <td>72</td>
                                        <td>76</td>
                                    </tr>
                                    <tr>
                                        <td>Width(cm)</td>
                                        <td>40</td>
                                        <td>45</td>
                                        <td>51</td>
                                        <td>57</td>
                                        <td>57</td>
                                    </tr>
                                </table>
                            </div>
                        </article>
                        <article class="extended-info">
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
                                        free support hotline
                                        <b>0800 123 45 67</b>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
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
                        <div class="alert-box">
                            <div class="alert">
                                <div class="alert__price">$5</div>
                                <div class="alert__title">
                                    coupon
                                </div>
                                <div class="alert__desc">
                                    Just Signup For Our Newsletter
                                </div>
                                <div class="alert__input">
                                    <input
                                        type="text"
                                        placeholder="Enter Your Email..."
                                        value=""
                                    />
                                    <button>sign up me!</button>
                                </div>
                            </div>
                        </div>
                    </aside>
                </section>
            </div>
            <section class="wrap-new-arrivals">
                <div class="container">
                    <section class="new-arrivals">
                        <article class="new-arrivals__left">
                            <div class="desc">
                                <div class="desc__title">
                                    new arrivals in stock!
                                </div>
                                <div class="desc__text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed orem ipsum dolor sit
                                    amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore
                                </div>
                            </div>
                        </article>
                        <article class="new-arrivals__right">
                            <img src="../../assets/imgs/image-ad.png" alt="" />
                        </article>
                    </section>
                </div>
            </section>
            <section class="wrap-product-description">
                <div class="container">
                    <div class="product-description">
                        <div class="left-side">
                            <article class="info">
                                <section class="info__text">
                                    <div class="wrap">
                                        <div class="content">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </div>
                                    </div>
                                    <div class="wrap">
                                        <div class="content">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </div>
                                    </div>
                                    <div class="wrap">
                                        <div class="content">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </div>
                                    </div>
                                </section>
                                <section class="info__tab"></section>
                            </article>
                            <article class="description-product">
                                <div class="description-product__head">
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
                                <div
                                    v-if="tabInfo == 1"
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
                                <div
                                    v-if="tabInfo == 2"
                                    class="description-product__main"
                                >
                                    <div class="desc">
                                        Lorem ipsum dolor sit amet, consectetur
                                    </div>
                                </div>
                                <div
                                    v-if="tabInfo == 3"
                                    class="description-product__main"
                                >
                                    <div class="desc">
                                        Lorem ipsum dolor sit amet, consectetur
                                    </div>
                                </div>
                                <div
                                    v-if="tabInfo == 4"
                                    class="description-product__main"
                                >
                                    <div class="desc">
                                        Lorem ipsum dolor sit amet, consectetur
                                    </div>
                                </div>
                            </article>
                        </div>
                        <aside class="aside-bottom">
                            <div class="back">
                                <div class="back-top">
                                    <div>
                                        The Gem not just a wordpress theme. A
                                        real design jewel!
                                    </div>
                                    <img
                                        src="../../assets/imgs/icon-testtimonials2.png"
                                        alt=""
                                    />
                                </div>
                                <div class="back-bottom">
                                    <div class="back-bottom__image">
                                        <img
                                            src="../../assets/imgs/img-testtimonials.png"
                                            alt=""
                                        />
                                    </div>
                                    <div class="back-bottom__name">
                                        Jeniffer Burns
                                    </div>
                                    <div class="back-bottom__desc">
                                        Creative Heads Inc.
                                    </div>
                                    <div class="arrow-left">
                                        <i
                                            class="fa fa-arrow-left"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                    <div class="arrow-right">
                                        <i
                                            class="fa fa-arrow-right"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
            <related-product />
            <more-product />
            <section class="bottom-buttons">
                <div class="lines"></div>
                <a class="link-blue" href="#">
                    <img src="../../assets/imgs/diamond-blue.jpg" alt="" />
                    buy the gem
                </a>
                <a class="link-orange" href="#">
                    <img src="../../assets/imgs/shield-orange.jpg" alt="" />
                    more options
                </a>
                <div class="lines"></div>
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
export default {
    name: "right-side",
    components: {
        TopArea,
        MenuComp,
        FooterComp,
        BannerProduct,
        BreadCrumb,
        RelatedProduct,
        MoreProduct
    },
    data() {
        return {
            banner: {
                title: "<b>silk</b> diamond",
                image: "right-side-banner.png",
                bgImage: "#5cc692",
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
            tabInfo: 1,
            isShowOpen: true,
            isShowClose1: false,
            isShowClose2: false
        };
    },
    methods: {
        chooseTabDesc(number) {
            this.tabDesc = number;
        },
        chooseTabInfo(number) {
            this.tabInfo = number;
        },
        setShowClose1(bool) {
            this.isShowClose1 = bool;
        },
        setShowClose2(bool) {
            this.isShowClose2 = bool;
        },
        setShowStyle(bool) {
            this.isShowStyle = bool;
        },
        setShowOpen(bool) {
            this.isShowOpen = bool;
        }
    }
};
</script>

<style lang="scss">
@import "../../styles/shop/RightSide";
@import "../../styles/shop/_responsive-right-side";
</style>

<template>
    <div>
        <top-area />
        <menu-comp />
        <banner>
            <bread-crumb v-bind:breadCrumb="listBreadCrumb" />
        </banner>
        <main class="shop">
            <div class="container">
                <section class="product">
                    <aside>
                        <div class="categories">
                            <div class="title">
                                categories
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <ul class="grand-categories">
                                <li
                                    v-for="(element, index) in listCategories"
                                    :key="index"
                                >
                                    <div
                                        class="grand-title"
                                        @click="showParentMenu(index)"
                                        v-bind:class="{
                                            'active-title': element.isShowMenu
                                        }"
                                    >
                                        <a :href="element.link">{{
                                            element.text
                                        }}</a
                                        ><i
                                            v-if="
                                                element.categroyies1.length > 0
                                            "
                                            :class="{
                                                'angle-down': element.isShowMenu
                                            }"
                                            class="fa fa-angle-right"
                                        ></i>
                                    </div>
                                    <ul
                                        v-bind:class="{
                                            'active-menu': element.isShowMenu
                                        }"
                                        v-if="element.categroyies1.length > 0"
                                        class="parents-categories"
                                    >
                                        <li
                                            v-for="(item,
                                            stt) in element.categroyies1"
                                            :key="stt"
                                        >
                                            <div
                                                class="categroy-title"
                                                @click="
                                                    showChildMenu(index, stt)
                                                "
                                                v-bind:class="{
                                                    'active-title':
                                                        item.isShowMenu
                                                }"
                                            >
                                                <a
                                                    :href="item.link"
                                                    class="text"
                                                >
                                                    <i class="fa fa-square"></i
                                                    >{{ item.text }}
                                                </a>
                                                <i
                                                    :class="{
                                                        'angle-down':
                                                            item.isShowMenu
                                                    }"
                                                    v-if="
                                                        item.categroyies2
                                                            .length > 0
                                                    "
                                                    class="fa fa-angle-right"
                                                ></i>
                                            </div>
                                            <ul
                                                v-bind:class="{
                                                    'active-menu':
                                                        item.isShowMenu
                                                }"
                                                v-if="item.categroyies2.length"
                                                class="child-categories"
                                            >
                                                <li
                                                    v-for="(itemChild,
                                                    index) in item.categroyies2"
                                                    :key="index"
                                                >
                                                    <div class="child-title">
                                                        <a
                                                            :href="
                                                                itemChild.link
                                                            "
                                                            class="text"
                                                        >
                                                            <i
                                                                class="fa fa-square"
                                                            ></i
                                                            >{{
                                                                itemChild.text
                                                            }}
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
                            </ul>
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
                        <div class="filter-color-size">
                            <div class="title">
                                filter by color
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <div class="box-select">
                                <select>
                                    <option value="">Any color</option>
                                </select>
                            </div>
                        </div>
                        <div class="filter-color-size">
                            <div class="title">
                                filter by size
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <div class="box-select">
                                <select>
                                    <option value="">Any size</option>
                                </select>
                            </div>
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
                                            src="../assets/imgs/img-testtimonials.png"
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
                                            src="../assets/imgs/img-testtimonials.png"
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
                                            src="../assets/imgs/img-testtimonials.png"
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
                        <div class="featured">
                            <div class="title">
                                featured products
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <div class="items">
                                <div class="item">
                                    <div class="avatar">
                                        <img
                                            src="../assets/imgs/shop/featured-product/product1.png"
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
                                            src="../assets/imgs/shop/featured-product/product1.png"
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
                                            src="../assets/imgs/shop/featured-product/product1.png"
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
                                    coupon<br />
                                    <span>for free</span>
                                </div>
                                <div class="alert__desc">
                                    Just Signup For Our Newsletter And Get $5 To
                                    Your Account
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
                        <div class="cart">
                            <div class="title">
                                cart
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <div class="cart__products">
                                <div class="item">
                                    <div class="avatar">
                                        <img
                                            src="../assets/imgs/shop/featured-product/product1.png"
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
                                            src="../assets/imgs/shop/featured-product/product1.png"
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
                            <div class="cart__price">
                                <div>
                                    <span>Subtotal:</span>
                                    <span>$2589.99</span>
                                </div>
                                <div>
                                    <a href="#">view cart</a>
                                    <a href="#">checkout</a>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <section>
                        <article class="list-product-1">
                            <template v-for="(element, stt) in listProductTop">
                                <div class="list-products" :key="stt">
                                    <div
                                        class="box-item"
                                        v-for="(item, index) in element"
                                        :key="index"
                                    >
                                        <div class="item">
                                            <img
                                                :src="
                                                    require(`../assets/imgs/shop/list-product/${item.image}`)
                                                "
                                                alt=""
                                            />
                                            <div class="box">
                                                <div class="desc">
                                                    <div class="name">
                                                        <a href="#">{{
                                                            item.name
                                                        }}</a>
                                                        <div
                                                            class="name__border"
                                                        ></div>
                                                    </div>
                                                    <div class="number">
                                                        {{ item.item }} items
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <div class="arrow">
                                <div class="d-flex-center">
                                    <i class="fa fa-angle-left"></i>
                                </div>
                                <div class="d-flex-center">
                                    <i class="fa fa-angle-right"></i>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div class="sort d-flex-wrap">
                                <div class="sort-left d-flex-align">
                                    <div class="box-select">
                                        <select @change="onChangeSort($event)">
                                            <option value="0"
                                                >Defult sorting</option
                                            >
                                            <option value="1"
                                                >Defult sorting price</option
                                            >
                                        </select>
                                    </div>
                                    <span>DESC&nbsp;&nbsp;</span>
                                    <div
                                        class="btn-switch d-flex-align"
                                        :class="{ 'sort-desc': isSortDesc }"
                                    >
                                        <i
                                            class="fa fa-circle"
                                            @click="setDesc"
                                        ></i>
                                    </div>
                                    <span>&nbsp;&nbsp;ASC</span>
                                </div>
                                <div class="sort-right d-flex-align">
                                    <div class="text">
                                        Showing 1-12 of 17 results
                                    </div>
                                    <div class="box-select">
                                        <select @change="onChangeShow($event)">
                                            <option value="12"
                                                >Show 12 on page</option
                                            >
                                            <option value="15"
                                                >Show 15 on page</option
                                            >
                                            <option value="18"
                                                >Show full</option
                                            >
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article class="list-product-2">
                            <div class="items">
                                <div
                                    class="box"
                                    v-for="(element, index) in listProductsMain"
                                    :key="index"
                                >
                                    <div class="item">
                                        <div class="item__image">
                                            <img
                                                :src="
                                                    require(`../assets/imgs/shop/list-product/${element.image}`)
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
                                            <div
                                                v-if="element.rating > 0"
                                                class="info__star"
                                            >
                                                <star-rating
                                                    v-bind:star-size="20"
                                                    v-bind:increment="0.5"
                                                    v-bind:show-rating="false"
                                                    v-bind:read-only="true"
                                                    v-model="element.rating"
                                                ></star-rating>
                                            </div>
                                            <div
                                                v-if="element.rating == 0"
                                                class="info__border"
                                            ></div>
                                            <router-link
                                                :to="{
                                                    name: 'detail-product',
                                                    params: { id: element.id }
                                                }"
                                            >
                                                <div class="info__name">
                                                    {{ element.nameProduct }}
                                                </div>
                                            </router-link>
                                            <div class="info__price">
                                                ${{ element.minPrice }} - ${{
                                                    element.maxPrice
                                                }}
                                            </div>
                                            <div
                                                v-if="element.quantity == 0"
                                                class="info__view"
                                            >
                                                <i class="fa fa-list-ul"></i
                                                >&nbsp;<router-link
                                                    to="/shop-cart"
                                                    tag="a"
                                                    >View Cart</router-link
                                                >
                                            </div>
                                            <!-- <div
                                                v-else-if="element.isHeart"
                                                class="info__view"
                                            >
                                                <i class="fa fa-star-o"></i
                                                >&nbsp;<router-link
                                                    to="/shop-wishlist"
                                                    tag="a"
                                                    >View Wishlist</router-link
                                                >
                                            </div> -->
                                            <div v-else class="info__icon">
                                                <router-link to="/shop-cart">
                                                    <i
                                                        class="fa fa-shopping-cart"
                                                    ></i>
                                                </router-link>
                                                <router-link
                                                    to="/shop-wishlist"
                                                    tag="a"
                                                    ><i
                                                        class="fa fa-list-alt"
                                                    ></i
                                                ></router-link>
                                                <i
                                                    v-if="!element.isHeart"
                                                    class="fa fa-heart-o"
                                                ></i>
                                                <i
                                                    v-else
                                                    class="fa fa-heart"
                                                    aria-hidden="true"
                                                    style="color: red"
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pagination">
                                <div class="d-flex-center">
                                    <i
                                        class="fa fa-angle-left"
                                        aria-hidden="true"
                                    ></i>
                                </div>
                                <div
                                    v-for="stt in totalPage"
                                    :key="stt"
                                    class="d-flex-center"
                                    :class="{
                                        'pagi-active': currentPage == stt
                                    }"
                                    @click="setCurrentPage(stt)"
                                >
                                    {{ stt }}
                                </div>
                                <div class="d-flex-center">
                                    <i
                                        class="fa fa-angle-right"
                                        aria-hidden="true"
                                    ></i>
                                </div>
                            </div>
                        </article>
                    </section>
                </section>
            </div>
            <section class="slider">
                <div class="container">
                    <div class="slider-content">
                        <div class="slider-title">our brands</div>
                        <div class="slider-imges">
                            <div class="item">
                                <div class="content-item">
                                    <a href="#">
                                        <img
                                            src="../assets/imgs/img-testtimonials.png"
                                            alt=""
                                        />
                                        <div class="background-black"></div>
                                    </a>
                                </div>
                            </div>
                            <div class="item">
                                <div class="content-item">
                                    <a href="#">
                                        <img
                                            src="../assets/imgs/img-testtimonials.png"
                                            alt=""
                                        />
                                        <div class="background-black"></div>
                                    </a>
                                </div>
                            </div>
                            <div class="item">
                                <div class="content-item">
                                    <a href="#">
                                        <img
                                            src="../assets/imgs/img-testtimonials.png"
                                            alt=""
                                        />
                                        <div class="background-black"></div>
                                    </a>
                                </div>
                            </div>
                            <div class="item">
                                <div class="content-item">
                                    <a href="#">
                                        <img
                                            src="../assets/imgs/img-testtimonials.png"
                                            alt=""
                                        />
                                        <div class="background-black"></div>
                                    </a>
                                </div>
                            </div>
                            <div class="item">
                                <div class="content-item">
                                    <a href="#">
                                        <img
                                            src="../assets/imgs/img-testtimonials.png"
                                            alt=""
                                        />
                                        <div class="background-black"></div>
                                    </a>
                                </div>
                            </div>
                            <div class="item">
                                <div class="content-item">
                                    <a href="#">
                                        <img
                                            src="../assets/imgs/img-testtimonials.png"
                                            alt=""
                                        />
                                        <div class="background-black"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="slider-pagi">
                            <div class="pagin-active"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="latest">
                <div class="container">
                    <div class="latest__title">latest news</div>
                    <div class="latest__products">
                        <div
                            class="box"
                            v-for="(item, index) in listLatest"
                            :key="index"
                        >
                            <div class="item">
                                <div class="item-image">
                                    <img
                                        :src="
                                            require(`../assets/imgs/${item.image}`)
                                        "
                                        alt=""
                                        width="262"
                                        height="190"
                                    />
                                </div>
                                <div class="item-content">
                                    <div class="item-content__head">
                                        <div>
                                            By: <span>{{ item.by }}</span>
                                        </div>
                                        <div>
                                            <i
                                                class="fa fa-comment"
                                                aria-hidden="true"
                                                >&nbsp;&nbsp;&nbsp;{{
                                                    item.countComments
                                                }}</i
                                            >
                                            <i
                                                class="fa fa-heart"
                                                aria-hidden="true"
                                                @click="setHeartLatest(index)"
                                                :class="{
                                                    'fa-heart-red':
                                                        item.countHeart != 0
                                                }"
                                                >&nbsp;&nbsp;&nbsp;{{
                                                    item.countHeart
                                                }}</i
                                            >
                                        </div>
                                    </div>
                                    <div
                                        class="item-content__title"
                                        v-html="item.title"
                                    ></div>
                                    <div
                                        class="item-content__desc"
                                        v-html="item.desc"
                                    ></div>
                                    <div class="item-content__button">
                                        <i
                                            class="fa fa-share-alt-square"
                                            aria-hidden="true"
                                        ></i>
                                        <a :href="item.link">read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="latest__border"></div>
                    <div class="latest__info">
                        <div class="box">
                            <div class="info-item">
                                <div class="info-item__title">
                                    <div>
                                        we accept
                                    </div>
                                    <div>
                                        <img
                                            src="../assets/imgs/we-accept.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div class="info-item__desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et
                                </div>
                                <div class="info-item__rectangle">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div class="box">
                            <div class="info-item">
                                <div class="info-item__title">
                                    <div>
                                        shipping methods
                                    </div>
                                    <div>
                                        <img
                                            src="../assets/imgs/method-ship.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <ul class="info-item__list">
                                    <li>
                                        <i
                                            class="fa fa-check-square-o"
                                            aria-hidden="true"
                                        ></i
                                        >Lorem ipsum dolor sit amet, consectetur
                                    </li>
                                    <li>
                                        <i
                                            class="fa fa-check-square-o"
                                            aria-hidden="true"
                                        ></i
                                        >Adipisicing elit, sed do eiusmod tempor
                                    </li>
                                    <li>
                                        <i
                                            class="fa fa-check-square-o"
                                            aria-hidden="true"
                                        ></i
                                        >Incididunt ut labore et dolore magna
                                        aliqua
                                    </li>
                                    <li>
                                        <i
                                            class="fa fa-check-square-o"
                                            aria-hidden="true"
                                        ></i
                                        >Enim ad minim veniam, quis nostrud
                                        exercitation
                                    </li>
                                    <li>
                                        <i
                                            class="fa fa-check-square-o"
                                            aria-hidden="true"
                                        ></i
                                        >ullamco laboris nisi ut aliquip ex ea
                                        commodo
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <more-product />
            <section class="advertise">
                <div class="container">
                    <div class="box-advertise">
                        <div class="advertise-left">
                            <div class="advertise-left__image">
                                <img
                                    src="../assets/imgs/icon-diamond.png"
                                    alt=""
                                />
                            </div>
                            <div class="advertise-left__text">
                                sell more <span>with the gem shop!</span>
                            </div>
                        </div>
                        <button>purchase now !</button>
                    </div>
                </div>
            </section>
        </main>
        <footer-comp />
    </div>
</template>

<script>
import TopArea from "../components/shop/TopArea";
import MenuComp from "../components/MenuComp";
import Banner from "../components/shop/Banner";
import FooterComp from "../components/shop/FooterComp";
import BreadCrumb from "../components/shop/BreadCrumb";
import MoreProduct from "../components/shop/MoreProduct";

import StarRating from "vue-star-rating";
import { mapState } from "vuex";
export default {
    name: "shop",
    components: {
        TopArea,
        MenuComp,
        Banner,
        FooterComp,
        BreadCrumb,
        MoreProduct,
        StarRating
    },
    data() {
        return {
            listBreadCrumb: [
                {
                    link: "#",
                    text: "Home"
                },
                {
                    link: "#",
                    text: "Shop"
                }
            ],
            listCategories: [
                {
                    text: "version",
                    link: "#",
                    isShowMenu: false,
                    categroyies1: []
                },
                {
                    text: "lorem ipsum",
                    link: "#",
                    isShowMenu: false,
                    categroyies1: [
                        {
                            text: "July 2015",
                            link: "#",
                            isShowMenu: false,
                            categroyies2: []
                        },
                        {
                            text: "January 2013",
                            link: "#",
                            isShowMenu: false,
                            categroyies2: []
                        }
                    ]
                },
                {
                    text: "proin",
                    link: "#",
                    isShowMenu: false,
                    categroyies1: [
                        {
                            text: "July 2015",
                            link: "#",
                            isShowMenu: false,
                            categroyies2: []
                        },
                        {
                            text: "January 2013",
                            link: "#",
                            isShowMenu: false,
                            categroyies2: [
                                {
                                    text: "July 2015",
                                    link: "#"
                                },
                                {
                                    text: "January 2013",
                                    link: "#"
                                }
                            ]
                        },
                        {
                            text: "March 2012",
                            link: "#",
                            isShowMenu: false,
                            categroyies2: []
                        },
                        {
                            text: "July 2015",
                            link: "#",
                            isShowMenu: false,
                            categroyies2: [
                                {
                                    text: "July 2015",
                                    link: "#"
                                },
                                {
                                    text: "January 2013",
                                    link: "#"
                                },
                                {
                                    text: "March 2012",
                                    link: "#"
                                },
                                {
                                    text: "July 2015",
                                    link: "#"
                                }
                            ]
                        }
                    ]
                },
                {
                    text: "gravida",
                    link: "#",
                    isShowMenu: false,
                    categroyies1: []
                },
                {
                    text: "nibh vel velit",
                    link: "#",
                    isShowMenu: false,
                    categroyies1: []
                },
                {
                    text: "auctor",
                    link: "#",
                    isShowMenu: false,
                    categroyies1: []
                },
                {
                    text: "aliquet",
                    link: "#",
                    isShowMenu: false,
                    categroyies1: []
                },
                {
                    text: "Aenean",
                    link: "#",
                    isShowMenu: false,
                    categroyies1: []
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
                },
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
            isSortDesc: false,
            typeSort: 0,
            typeShow: 0,
            quantityShow: 12,
            isHeart: false,
            listLatest: [
                {
                    image: "background-gray.jpg",
                    by: "Admin",
                    countComments: 0,
                    countHeart: 0,
                    title: "<b>5 way:</b> simple blog post",
                    desc:
                        "Lorem Ipsum. Proin <br /> gravida nibh vel velit auctor<br />aliquet. Aenean sollicitudin, lorem",
                    link: "#"
                },
                {
                    image: "background-gray.jpg",
                    by: "Admin",
                    countComments: 0,
                    countHeart: 0,
                    title: "<b>5 way:</b> simple blog post",
                    desc:
                        "Lorem Ipsum. Proin <br /> gravida nibh vel velit auctor<br />aliquet. Aenean sollicitudin, lorem",
                    link: "#"
                },
                {
                    image: "background-gray.jpg",
                    by: "Admin",
                    countComments: 0,
                    countHeart: 0,
                    title: "<b>5 way:</b> simple blog post",
                    desc:
                        "Lorem Ipsum. Proin <br /> gravida nibh vel velit auctor<br />aliquet. Aenean sollicitudin, lorem",
                    link: "#"
                },
                {
                    image: "background-gray.jpg",
                    by: "Admin",
                    countComments: 0,
                    countHeart: 0,
                    title: "<b>5 way:</b> simple blog post",
                    desc:
                        "Lorem Ipsum. Proin <br /> gravida nibh vel velit auctor<br />aliquet. Aenean sollicitudin, lorem",
                    link: "#"
                }
            ],
            listProductTop: [],
            listProductsMain: [],
            perPage: 18,
            totalItem: 0,
            totalPage: 0,
            currentPage: 1,
            startIndex: 0,
            endIndex: 0
        };
    },
    computed: {
        ...mapState({
            listTop: state => state.product.products,
            listProducts: state => state.product.listProducts
        })
    },
    created() {
        this.totalItem = this.listProducts.length;
        this.totalPage = Math.ceil(this.totalItem / this.perPage);
        this.endIndex = this.perPage;
        this.listProductsMain = this.listProducts.slice(
            this.startIndex,
            this.endIndex
        );
        console.log(this.listProductsMain, this.startIndex, this.endIndex);
        this.chunkArray();
    },
    watch: {
        typeSort(newData) {
            this.typeSort = newData;
            this.renderListSort();
        },
        isSortDesc(newData) {
            this.isSortDesc = newData;
            this.renderListSort();
        },
        quantityShow(newData) {
            this.quantityShow = newData;
            this.renderListShow(newData);
            this.renderListSort();
            console.log(this.quantityShow);
        },
        currentPage(newData) {
            this.startIndex = newData * this.perPage - this.perPage;
            this.endIndex = newData * this.perPage;
            this.listProductsMain = this.listProducts.slice(
                this.startIndex,
                this.endIndex
            );
        }
    },
    methods: {
        showParentMenu(index) {
            this.listCategories[index].isShowMenu = !this.listCategories[index]
                .isShowMenu;
        },
        showChildMenu(index, stt) {
            this.listCategories[index].categroyies1[stt].isShowMenu = !this
                .listCategories[index].categroyies1[stt].isShowMenu;
        },
        setHeart(index) {
            this.listProduct2[index].isHeart = !this.listProduct2[index]
                .isHeart;
        },
        setHeartLatest(index) {
            this.listLatest[index].countHeart =
                this.listLatest[index].countHeart == 0 ? 1 : 0;
        },
        chunkArray() {
            let i = 0;
            for (i = 0; i < this.listTop.length; i += 6) {
                this.listProductTop.push(this.listTop.slice(i, i + 6));
            }
            return this.listProductTop;
        },
        onChangeShow(event) {
            this.quantityShow = event.target.value;
        },
        setDesc() {
            this.isSortDesc = !this.isSortDesc;
        },
        onChangeSort(e) {
            this.typeSort = e.target.value;
        },
        renderListSort() {
            if (this.typeSort == 0) {
                this.listProductsMain = this.listProductsMain.sort(function(
                    a,
                    b
                ) {
                    if (
                        a.nameProduct.toUpperCase() <
                        b.nameProduct.toUpperCase()
                    ) {
                        return -1;
                    }
                    if (
                        a.nameProduct.toUpperCase() >
                        b.nameProduct.toUpperCase()
                    ) {
                        return 1;
                    }
                });
                this.listProductsMain = this.isSortDesc
                    ? this.listProductsMain.reverse()
                    : this.listProductsMain;
            }
            if (this.typeSort == 1) {
                this.listProductsMain = this.listProductsMain.sort(function(
                    a,
                    b
                ) {
                    return a.maxPrice - b.maxPrice;
                });
                this.listProductsMain = this.isSortDesc
                    ? this.listProductsMain.reverse()
                    : this.listProductsMain;
            }
        },
        renderListShow(length) {
            this.listProductsMain = this.listProductsMain.slice(0, length);
        },
        setCurrentPage(stt) {
            this.currentPage = stt;
        }
    }
};
</script>

<style lang="scss">
@import "../styles/shop.scss";
@import "../styles/responsive-shop.scss";
</style>

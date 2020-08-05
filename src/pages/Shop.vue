<template>
    <div>
        <top-area />
        <menu-comp />
        <banner />
        <main>
            <div class="container">
                <section class="product">
                    <aside>
                        <div class="categories">
                            <div class="title">
                                recent post
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
                                        <a href="#">version</a><i class="fa fa-angle-right"></i>
                                    </div>
                                </li>
                                <li>
                                    <div class="grand-title">
                                        <a href="#">lorem ipsum</a>
                                    </div>
                                </li>
                                <li>
                                    <div class="grand-title">
                                    <a href="#">proin</a><i class="fa fa-angle-right"></i>
                                    </div>
                                    <ul class="parents-categories">
                                        <li>
                                            <div class="categroy-title">
                                                <a href="#" class="text">
                                                    <i class="fa fa-square"></i>&nbsp;&nbsp;&nbsp;July 2015
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="categroy-title">
                                                <a href="#" class="text">
                                                    <i class="fa fa-square"></i>&nbsp;&nbsp;&nbsp;January 2013
                                                </a>
                                                <i class="fa fa-angle-right"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="categroy-title">
                                                <a href="#" class="text">
                                                    <i class="fa fa-square"></i>&nbsp;&nbsp;&nbsp;March 2012
                                                </a>
                                                <i class="fa fa-angle-right"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="categroy-title">
                                                <a href="#" class="text">
                                                    <i class="fa fa-square"></i>&nbsp;&nbsp;&nbsp;January 2012
                                                </a>
                                                <i class="fa fa-angle-right"></i>
                                            </div>
                                            <ul class="child-categories">
                                                <li>
                                                    <div class="child-title">
                                                        <a href="#" class="text">
                                                            <i class="fa fa-square"></i>&nbsp;&nbsp;&nbsp;July 2015
                                                        </a>
                                                        <i class="fa fa-angle-right"></i>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="child-title">
                                                        <a href="#" class="text">
                                                            <i class="fa fa-square"></i>&nbsp;&nbsp;&nbsp;January 2013
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="child-title">
                                                        <a href="#" class="text">
                                                            <i class="fa fa-square"></i>&nbsp;&nbsp;&nbsp;March 2012
                                                        </a>
                                                        <i class="fa fa-angle-right"></i>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="child-title">
                                                        <a href="#" class="text">
                                                            <i class="fa fa-square"></i>&nbsp;&nbsp;&nbsp;January 2012
                                                        </a>
                                                        <i class="fa fa-angle-right"></i>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div class="grand-title">
                                        <a href="#">gravida</a><i class="fa fa-angle-right"></i>
                                    </div>
                                </li>
                                <li>
                                    <div class="grand-title">
                                        <a href="#">nibh vel velit</a><i class="fa fa-angle-right"></i>
                                    </div>
                                </li>
                                <li>
                                    <div class="grand-title">
                                        <a href="#">auctor</a>
                                    </div>
                                </li>
                                <li>
                                    <div class="grand-title">
                                        <a href="#">aliquet</a><i class="fa fa-angle-right"></i>
                                    </div>
                                </li>
                                <li>
                                    <div class="grand-title">
                                        <a href="#">Aenean</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="search d-flex">
                            <input type="text" placeholder="Search for product...">
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
                                        <div class="info__name"><a href="#">product title here</a></div>
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
                                        <div class="info__name"><a href="#">product title here</a></div>
                                        <div class="info__star">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star" style="color: #b6c6c9"></i>
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
                                        <div class="info__name"><a href="#">product title here</a></div>
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
                                <a v-for="(item, index) in tags" :key="index" :href="item.link">{{item.text}}</a>
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
                                        <div class="info__name"><a href="#">product title here</a></div>
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
                                        <div class="info__name"><a href="#">product title here</a></div>
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
                                        <div class="info__name"><a href="#">product title here</a></div>
                                        <div class="info__price">$35.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="alert-box">
                            <div class="alert">
                                <div class="alert__price">$5</div>
                                <div class="alert__title">
                                    coupon<br>
                                    <span>for free</span>
                                </div>
                                <div class="alert__desc">
                                    Just Signup For Our Newsletter And Get $5 To Your Account
                                </div>
                                <div class="alert__input">
                                    <input type="text" placeholder="Enter Your Email..." value="">
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
                                        <div class="info__name"><a href="#">product title here</a></div>
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
                                        <div class="info__name"><a href="#">product title here</a></div>
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
                        <article>
                            <div class="list-products">
                                <div class="item">
                                    <img src="../assets/imgs/shop/list-product/gray-mid.png" alt="">
                                    <div class="box">
                                        <div class="desc">
                                            <div class="name">
                                                <a href="#">salddsdes</a>
                                                <div class="name__border"></div>
                                            </div>
                                            <div class="number">19 items</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <img src="../assets/imgs/shop/list-product/gray-mid.png" alt="">
                                    <div class="box">
                                        <div class="desc">
                                            <div class="name">
                                                <a href="#">salddsdes</a>
                                                <div class="name__border"></div>
                                            </div>
                                            <div class="number">19 items</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <img src="../assets/imgs/shop/list-product/gray-mid.png" alt="">
                                    <div class="box">
                                        <div class="desc">
                                            <div class="name">
                                                <a href="#">salddsdes</a>
                                                <div class="name__border"></div>
                                            </div>
                                            <div class="number">19 items</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <img src="../assets/imgs/shop/list-product/gray-mid.png" alt="">
                                    <div class="box">
                                        <div class="desc">
                                            <div class="name">
                                                <a href="#">salddsdes</a>
                                                <div class="name__border"></div>
                                            </div>
                                            <div class="number">19 items</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <img src="../assets/imgs/shop/list-product/gray-mid.png" alt="">
                                    <div class="box">
                                        <div class="desc">
                                            <div class="name">
                                                <a href="#">salddsdes</a>
                                                <div class="name__border"></div>
                                            </div>
                                            <div class="number">19 items</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <img src="../assets/imgs/shop/list-product/gray-mid.png" alt="">
                                    <div class="box">
                                        <div class="desc">
                                            <div class="name">
                                                <a href="#">salddsdes</a>
                                                <div class="name__border"></div>
                                            </div>
                                            <div class="number">19 items</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="arrow">
                                <div class="d-flex-center"><i class="fa fa-angle-left"></i></div>
                                <div class="d-flex-center"><i class="fa fa-angle-right"></i></div>
                            </div>
                        </article>
                        <article>
                            <div class="sort d-flex-wrap">
                                <div class="sort-left d-flex-align">
                                    <div class="box-select">
                                        <select>
                                            <option value="">Defult sorting</option>
                                            <option value="">Defult sorting 1</option>
                                        </select>
                                    </div>
                                    <span>DESC&nbsp;&nbsp;&nbsp;</span>
                                    <div class="btn-switch d-flex-align" :class="{'sort-desc': isSortDesc}">
                                        <i class="fa fa-circle"
                                            @click="setDesc"
                                        ></i>
                                    </div>
                                    <span>&nbsp;&nbsp;&nbsp;ASC</span>
                                </div>
                                <div class="sort-right d-flex-align">
                                    <div class="text">
                                        Showing 1-12 of 17 results
                                    </div>
                                    <div class="box-select">
                                        <select>
                                            <option value="">Show 12 on page</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article class="list-product-2">
                            <div class="items">
                                <div class="box"  v-for="(element, index) in listProduct2" :key="index">
                                    <div class="item">
                                        <div class="item__image">
                                            <img :src="require(`../assets/imgs/shop/list-product/${element.image}`)" alt="">
                                            <div class="background-blue"></div>
                                            <div v-if="element.isSale" class="sale-abso d-flex-center">sale!</div>
                                            <div v-if="element.isNew" class="new-abso d-flex-center" :class="{'new-sale-abso' : element.isSale && element.isNew}">new</div>
                                        </div>
                                        <a :href="element.link">
                                            <div class="info">
                                                <div v-if="element.isStar" class="info__star">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                                <div v-if="element.isBorder" class="info__border">
                                                </div>
                                                <div class="info__name">{{element.nameProduct}}</div>
                                                <div class="info__price">{{element.priceProduct}}</div>
                                                <div  v-if="element.isViewCart" class="info__view"><i class="fa fa-list-ul"></i>&nbsp;<a href="#">View Cart</a></div>
                                                <div v-if="element.isViewWishList" class="info__view"><i class="fa fa-star-o"></i>&nbsp;<a href="#">View Wishlist</a></div>
                                                <div v-if="element.isIcon" class="info__icon">
                                                    <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                                    <a href="#"><i class="fa fa-list-alt"></i></a>
                                                    <i class="fa fa-heart-o" :class="{'heart-red' : isHeart}" @click="setHeart"></i>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="pagination">
                                <div class="d-flex-center"><i class="fa fa-angle-left" aria-hidden="true"></i></div>
                                <div class="d-flex-center pagi-active">1</div>
                                <div class="d-flex-center">2</div>
                                <div class="d-flex-center">3</div>
                                <div class="d-flex-center">4</div>
                                <div class="d-flex-center">5</div>
                                <div class="d-flex-center"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
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
                                <a href="#">
                                    <img src="../assets/imgs/img-testtimonials.png" alt="">
                                    <div class="background-black"></div>
                                </a>
                            </div>
                            <div class="item">
                                <a href="#">
                                    <img src="../assets/imgs/img-testtimonials.png" alt="">
                                    <div class="background-black"></div>
                                </a>
                            </div>
                            <div class="item">
                                <a href="#">
                                    <img src="../assets/imgs/img-testtimonials.png" alt="">
                                    <div class="background-black"></div>
                                </a>
                            </div>
                            <div class="item">
                                <a href="#">
                                    <img src="../assets/imgs/img-testtimonials.png" alt="">
                                    <div class="background-black"></div>
                                </a>
                            </div>
                            <div class="item">
                                <a href="#">
                                    <img src="../assets/imgs/img-testtimonials.png" alt="">
                                    <div class="background-black"></div>
                                </a>
                            </div>
                            <div class="item">
                                <a href="#">
                                    <img src="../assets/imgs/img-testtimonials.png" alt="">
                                    <div class="background-black"></div>
                                </a>
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
                        <div class="box">
                            <div class="item"></div>
                        </div>
                        <div class="box">
                            <div class="item"></div>
                        </div>
                        <div class="box">
                            <div class="item"></div>
                        </div>
                        <div class="box">
                            <div class="item"></div>
                        </div>
                    </div>
                    <div class="latest__border">
                    </div>
                    <div class="latest__info">
                        <div class="box">
                            <div class="item"></div>
                        </div>
                        <div class="box">
                            <div class="item"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="more-product">
                <div class="container">
                    <div class="box-more-product">
                        <div class="element">
                            <div class="element__title">new Products <i class="fa fa-caret-down"></i></div>
                            <div class="element__item">
                                <div class="avatar">
                                    <img
                                        src="../assets/imgs/shop/featured-product/product1.png"
                                        alt=""
                                        
                                    />
                                </div>
                                <div class="info">
                                    <div class="info__name"><a href="#">product title here</a></div>
                                    <div class="info__price">
                                        <span>$35.00</span>
                                        <div class="info__star">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="element__item">
                                <div class="avatar">
                                    <div class="avatar__percent">%</div>
                                    <img
                                        src="../assets/imgs/shop/featured-product/product1.png"
                                        alt=""
                                        
                                    />
                                </div>
                                <div class="info">
                                    <div class="info__name"><a href="#">product title here</a></div>
                                    <div class="info__price">
                                        <span>$35.00</span>
                                        <div class="info__star">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="element__item">
                                <div class="avatar">
                                    <img
                                        src="../assets/imgs/shop/featured-product/product1.png"
                                        alt=""
                                        
                                    />
                                </div>
                                <div class="info">
                                    <div class="info__name"><a href="#">product title here</a></div>
                                    <div class="info__price">
                                        <span>$35.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="element">
                            <div class="element__title">top rated Products <i class="fa fa-caret-down"></i></div>
                            <div class="element__item">
                                <div class="avatar">
                                    <img
                                        src="../assets/imgs/shop/featured-product/product1.png"
                                        alt=""
                                        
                                    />
                                </div>
                                <div class="info">
                                    <div class="info__name"><a href="#">product title here</a></div>
                                    <div class="info__price">
                                        <span>$35.00</span>
                                        <div class="info__star">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="element__item">
                                <div class="avatar">
                                    <div class="avatar__percent">%</div>
                                    <img
                                        src="../assets/imgs/shop/featured-product/product1.png"
                                        alt=""
                                        
                                    />
                                </div>
                                <div class="info">
                                    <div class="info__name"><a href="#">product title here</a></div>
                                    <div class="info__price">
                                        <span>$35.00</span>
                                        <div class="info__star">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="element__item">
                                <div class="avatar">
                                    <img
                                        src="../assets/imgs/shop/featured-product/product1.png"
                                        alt=""
                                        
                                    />
                                </div>
                                <div class="info">
                                    <div class="info__name"><a href="#">product title here</a></div>
                                    <div class="info__price">
                                        <span>$35.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="element">
                            <div class="element__title">on sale <i class="fa fa-caret-down"></i></div>
                            <div class="element__item">
                                <div class="avatar">
                                    <img
                                        src="../assets/imgs/shop/featured-product/product1.png"
                                        alt=""
                                        
                                    />
                                </div>
                                <div class="info">
                                    <div class="info__name"><a href="#">product title here</a></div>
                                    <div class="info__price">
                                        <span>$35.00</span>
                                        <div class="info__star">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="element__item">
                                <div class="avatar">
                                    <div class="avatar__percent">%</div>
                                    <img
                                        src="../assets/imgs/shop/featured-product/product1.png"
                                        alt=""
                                        
                                    />
                                </div>
                                <div class="info">
                                    <div class="info__name"><a href="#">product title here</a></div>
                                    <div class="info__price">
                                        <span>$35.00</span>
                                        <div class="info__star">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="element__item">
                                <div class="avatar">
                                    <img
                                        src="../assets/imgs/shop/featured-product/product1.png"
                                        alt=""
                                        
                                    />
                                </div>
                                <div class="info">
                                    <div class="info__name"><a href="#">product title here</a></div>
                                    <div class="info__price">
                                        <span>$35.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="advertise">
                <div class="container">
                    <div class="box-advertise">
                        <div class="advertise-left">
                            <div class="advertise-left__image">
                                <img src="../assets/imgs/icon-diamond.png" alt=""> 
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
import MenuComp from "../components/shop/MenuComp";
import Banner from "../components/shop/Banner";
import FooterComp from "../components/shop/FooterComp";

export default {
    name: "shop",
    components: {
        TopArea,
        MenuComp,
        Banner,
        FooterComp
    },
    data() {
        return {
            listCategories:[
                {
                    text: "version",
                    link: "#",
                    categroyies1:[]
                },
                {
                    text: "lorem ipsum",
                    link: "#",
                    categroyies1:[]
                },
                {
                    text: "proin",
                    link: "#",
                    categroyies1:[
                        {
                            text: "proin",
                            link: "#",
                            categroyies2:[
                                {
                                    text: "proin",
                                    link: "#",
                                }
                            ]
                        }
                    ]
                },
                {
                    text: "gravida",
                    link: "#",
                    categroyies1:[]
                },
                {
                    text: "nibh vel velit",
                    link: "#",
                    categroyies1:[]
                },
                {
                    text: "auctor",
                    link: "#",
                    categroyies1:[]
                },
                {
                    text: "aliquet",
                    link: "#",
                    categroyies1:[]
                },
                {
                    text: "Aenean",
                    link: "#",
                    categroyies1:[]
                },
            ],
            tags:[
                {
                    link:"#",
                    text: "morbi"
                },
                {
                    link:"#",
                    text: "accumsan "
                },
                {
                    link:"#",
                    text: "ipsum"
                },
                {
                    link:"#",
                    text: "velit"
                },
                {
                    link:"#",
                    text: "nam"
                },
                {
                    link:"#",
                    text: "tellus"
                },
                {
                    link:"#",
                    text: "aodio"
                },
                {
                    link:"#",
                    text: "tincidunt"
                },
                {
                    link:"#",
                    text: "auctor"
                },
                {
                    link:"#",
                    text: "aornare odi"
                },
                {
                    link:"#",
                    text: "morbi"
                },
                {
                    link:"#",
                    text: "accumsan "
                },
                {
                    link:"#",
                    text: "ipsum"
                },
                {
                    link:"#",
                    text: "velit"
                },
                {
                    link:"#",
                    text: "nam"
                },
                {
                    link:"#",
                    text: "tellus"
                },
                {
                    link:"#",
                    text: "aodio"
                },
                {
                    link:"#",
                    text: "tincidunt"
                },
                {
                    link:"#",
                    text: "auctor"
                },
                {
                    link:"#",
                    text: "aornare odi"
                },
                
            ],
            isSortDesc: false,
            isHeart: false,
            listProduct2:[
                {
                    image: "product2.png",
                    isSale: true,
                    isNew: true,
                    link: "#",
                    isStar: true,
                    isBorder: false,
                    nameProduct: "Black Impression",
                    priceProduct: "$35.00–$89.99",
                    isViewCart: true,
                    isViewWishList: false,
                    isIcon: false
                },
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    isStar: false,
                    isBorder: true,
                    nameProduct: "Denim Classy Shorts",
                    priceProduct: "$35.00–$89.99",
                    isViewCart: false,
                    isViewWishList: true,
                    isIcon: false
                },
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    isStar: false,
                    isBorder: true,
                    nameProduct: "Golden Heels",
                    priceProduct: "$35.00–$89.99",
                    isViewCart: false,
                    isViewWishList: false,
                    isIcon: true
                },
                {
                    image: "product2.png",
                    isSale: true,
                    isNew: false,
                    link: "#",
                    isStar: true,
                    isBorder: false,
                    nameProduct: "Black Impression",
                    priceProduct: "$35.00–$89.99",
                    isViewCart: false,
                    isViewWishList: false,
                    isIcon: true
                },
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: true,
                    link: "#",
                    isStar: false,
                    isBorder: true,
                    nameProduct: "Denim Classy Shorts",
                    priceProduct: "$35.00–$89.99",
                    isViewCart: false,
                    isViewWishList: false,
                    isIcon: true
                },
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    isStar: false,
                    isBorder: true,
                    nameProduct: "Golden Heels",
                    priceProduct: "$35.00–$89.99",
                    isViewCart: false,
                    isViewWishList: false,
                    isIcon: true
                },
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    isStar: true,
                    isBorder: false,
                    nameProduct: "Black Impression",
                    priceProduct: "$35.00–$89.99",
                    isViewCart: false,
                    isViewWishList: false,
                    isIcon: true
                },
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    isStar: false,
                    isBorder: true,
                    nameProduct: "Denim Classy Shorts",
                    priceProduct: "$35.00–$89.99",
                    isViewCart: false,
                    isViewWishList: false,
                    isIcon: true
                },
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    isStar: false,
                    isBorder: true,
                    nameProduct: "Golden Heels",
                    priceProduct: "$35.00–$89.99",
                    isViewCart: false,
                    isViewWishList: false,
                    isIcon: true
                },
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    isStar: true,
                    isBorder: false,
                    nameProduct: "Black Impression",
                    priceProduct: "$35.00–$89.99",
                    isViewCart: false,
                    isViewWishList: false,
                    isIcon: true
                },
                {
                    image: "product2.png",
                    isSale: true,
                    isNew: true,
                    link: "#",
                    isStar: false,
                    isBorder: true,
                    nameProduct: "Denim Classy Shorts",
                    priceProduct: "$35.00–$89.99",
                    isViewCart: false,
                    isViewWishList: false,
                    isIcon: true
                },
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    isStar: false,
                    isBorder: true,
                    nameProduct: "Golden Heels",
                    priceProduct: "$35.00–$89.99",
                    isViewCart: false,
                    isViewWishList: false,
                    isIcon: true
                },
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    isStar: true,
                    isBorder: false,
                    nameProduct: "Black Impression",
                    priceProduct: "$35.00–$89.99",
                    isViewCart: false,
                    isViewWishList: false,
                    isIcon: true
                },
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    isStar: false,
                    isBorder: true,
                    nameProduct: "Denim Classy Shorts",
                    priceProduct: "$35.00–$89.99",
                    isViewCart: false,
                    isViewWishList: false,
                    isIcon: true
                },
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    isStar: false,
                    isBorder: true,
                    nameProduct: "Golden Heels",
                    priceProduct: "$35.00–$89.99",
                    isViewCart: false,
                    isViewWishList: false,
                    isIcon: true
                },
            ]
        }
    },
    methods:{
        setDesc(){
            this.isSortDesc = !this.isSortDesc;
        },
        setHeart(){
            this.isHeart = !this.isHeart;
        }
    }
};
</script>

<style lang="scss">
@import "../styles/shop.scss";
</style>

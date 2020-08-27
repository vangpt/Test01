<template>
    <section>
        <top-area />
        <menu-comp />
        <banner-comp v-bind:contentBanner="banner" />
        <main class="shop-cart">
            <div class="container">
                <section class="list-product">
                    <div class="list-product__title">
                        You Have <span>{{ listCart.length }} Items </span>In
                        Your Cart
                    </div>
                    <template v-if="listCart.length > 0">
                        <table>
                            <tr>
                                <th style="width: 7%"></th>
                                <th style="width: 50%">product</th>
                                <th style="width: 13%">price</th>
                                <th style="width: 15%">quantity</th>
                                <th style="width: 15%">total</th>
                            </tr>
                            <tr v-for="(item, index) in listCart" :key="index">
                                <td class="table-close">
                                    <div class="d-flex-center">
                                        <i
                                            @click="deleteItemCart(index)"
                                            class="fa fa-times-circle"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </td>
                                <td class="table-product">
                                    <div class="box">
                                        <img
                                            src="../../assets/imgs/square-gray.png"
                                            alt=""
                                        />
                                        <div class="text">
                                            {{ item.infoProduct.nameProduct }}
                                            <span class="size"
                                                >Size: {{ item.size }} Color:
                                                {{ item.color }}</span
                                            >
                                        </div>
                                    </div>
                                </td>
                                <td class="table-price">
                                    ${{
                                        parseFloat(
                                            item.infoProduct.minPrice
                                        ).toFixed(2)
                                    }}
                                </td>
                                <td class="table-quantity">
                                    <div class="box">
                                        <button
                                            @click="
                                                changeQuantity('minus', index)
                                            "
                                            :disabled="
                                                listCart[index].quantityCart ==
                                                    1
                                            "
                                        >
                                            -
                                        </button>
                                        <input
                                            type="text"
                                            :value="item.quantityCart"
                                            @blur="
                                                handleUpdateQuantity(
                                                    $event,
                                                    index
                                                )
                                            "
                                        />
                                        <button
                                            @click="
                                                changeQuantity('plus', index)
                                            "
                                            :disabled="
                                                listCart[index].infoProduct
                                                    .quantity == 0
                                            "
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td class="table-total">
                                    ${{
                                        (
                                            parseFloat(
                                                item.infoProduct.minPrice
                                            ) * parseInt(item.quantityCart)
                                        ).toFixed(2)
                                    }}
                                </td>
                            </tr>
                        </table>

                        <div class="infos">
                            <div class="infos__left">
                                <input
                                    type="text"
                                    value=""
                                    placeholder="Enter Coupon Code Here.."
                                />
                                <button>apply</button>
                            </div>
                            <div class="infos__right">
                                <a href="#" disabled>update cart</a>
                                <router-link
                                    :to="{
                                        name: 'checkout-error',
                                        query: {
                                            status: !user
                                                ? 'sign-in'
                                                : 'billing'
                                        }
                                    }"
                                    tag="a"
                                    ><i
                                        class="fa fa-check-circle-o"
                                        aria-hidden="true"
                                    ></i>
                                    checkout</router-link
                                >
                            </div>
                        </div>
                    </template>
                </section>
                <section class="shipping-total">
                    <article class="shipping">
                        <div class="title">calculate shipping</div>
                        <div class="box-shipping">
                            <div class="box-select">
                                <select>
                                    <option value="" selected
                                        >Select Your Country</option
                                    >
                                    <option value="">VN</option>
                                    <option value="">Jap</option>
                                </select>
                            </div>
                            <div class="box-input">
                                <div class="input-item">
                                    <input
                                        type="text"
                                        placeholder="State/ Country"
                                    />
                                </div>
                                <div class="input-item">
                                    <input
                                        type="text"
                                        placeholder="Postcode/ Zip"
                                    />
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
                                        <label class="box-radio"
                                            >Rate: $3.99
                                            <input
                                                type="radio"
                                                checked="checked"
                                                name="radio"
                                            />
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="box-radio"
                                            >Free Shipping
                                            <input type="radio" name="radio" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="box-radio"
                                            >Flat Rate: $12.99
                                            <input type="radio" name="radio" />
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
                                                element.isSale && element.isNew
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
import MenuComp from "../MenuComp";
import FooterComp from "./FooterComp";
import BannerComp from "./BannerComp";

import { mapState, mapActions } from "vuex";
import { validateQuantity } from "../../helpers";
import {
    DELETE_ITEM_CART,
    MAX_QUANTITY,
    VAL_QUANTITY,
    UPDATE_QUANTITY
} from "../../constants/config";
export default {
    name: "shop-cart",
    components: {
        TopArea,
        MenuComp,
        FooterComp,
        BannerComp
    },
    computed: {
        ...mapState({
            listCart: state => state.cart.listCart,
            user: state => state.users.currentUser
        })
    },
    data() {
        return {
            banner: {
                title: "<b>woo</b> cart",
                image: "woo-cart.png"
            },
            listProduct2: [
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    nameProduct: "Denim Classy Shorts",
                    priceProduct: "$35.00–$89.99"
                },
                {
                    image: "product2.png",
                    isSale: true,
                    isNew: true,
                    link: "#",
                    nameProduct: "Golden Heels",
                    priceProduct: "$89.99"
                },
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    nameProduct: "Black Impression",
                    priceProduct: "$259.99"
                },
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    nameProduct: "Denim Classy Shorts",
                    priceProduct: "$35.00–$89.99"
                },
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    nameProduct: "Golden Heels",
                    priceProduct: "$89.99"
                },
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    nameProduct: "Black Impression",
                    priceProduct: "$259.99"
                }
            ]
        };
    },
    methods: {
        ...mapActions({
            deleteItem: "cart/deleteItemCart",
            changeItemQuantity: "cart/changeQuantity",
            updateQuantity: "cart/updateQuantity",
            reduceQuantity: "product/reduceQuantity",
            setLoading: "setLoading"
        }),
        deleteItemCart(index) {
            if (confirm("Do you want to remove this item in cart?")) {
                let objReduce = {
                    id: this.listCart[index].infoProduct.id,
                    count: -this.listCart[index].quantityCart
                };
                this.reduceQuantity(objReduce);
                this.deleteItem(index);
                this.$notify(DELETE_ITEM_CART);
            }
        },
        changeQuantity(str, index) {
            let obj = {
                str,
                index
            };
            let objReduce = {
                id: this.listCart[index].infoProduct.id,
                count: str == "minus" ? -1 : 1
            };
            if (this.listCart[index].infoProduct.quantity > 0) {
                this.reduceQuantity(objReduce);
                this.changeItemQuantity(obj);
            } else {
                let objReduce = {
                    id: this.listCart[index].infoProduct.id,
                    count: -1
                };
                this.changeItemQuantity(obj);
                this.reduceQuantity(objReduce);
            }
        },
        handleUpdateQuantity(e, index) {
            this.setLoading(true);
            setTimeout(() => {
                const check = validateQuantity(e.target.value);
                if (check) {
                    let obj = {
                        newQuantity: e.target.value,
                        index
                    };
                    let objReduce = {
                        id: this.listCart[index].infoProduct.id,
                        count:
                            parseInt(e.target.value) -
                            this.listCart[index].quantityCart
                    };
                    if (
                        objReduce.count <=
                        this.listCart[index].infoProduct.quantity
                    ) {
                        this.reduceQuantity(objReduce);
                        this.updateQuantity(obj);
                        this.$notify(UPDATE_QUANTITY);
                    } else {
                        e.target.value = this.listCart[index].quantityCart;
                        this.$notify(MAX_QUANTITY);
                    }
                } else {
                    e.target.value = this.listCart[index].quantityCart;
                    this.$notify(VAL_QUANTITY);
                }
                this.setLoading(false);
            }, 2000);
        }
    }
};
</script>

<style lang="scss">
@import "../../styles/shop/ShopCart";
</style>

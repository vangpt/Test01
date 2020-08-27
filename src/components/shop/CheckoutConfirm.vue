<template>
    <section>
        <top-area />
        <menu-comp />
        <banner-comp v-bind:contentBanner="banner" />
        <main>
            <div class="container">
                <div v-if="isShowAlert" class="box-full">
                    <div class="content-box-full">
                        <div class="tick d-flex-center">
                            <img src="../../assets/imgs/tick.png" alt="" />
                        </div>
                        <div class="text">
                            Thank you. Your order has been received.
                        </div>
                        <div class="close">
                            <img
                                src="../../assets/imgs/close.png"
                                alt=""
                                @click="hideAlert"
                            />
                        </div>
                    </div>
                </div>
                <div class="order-data">
                    <ul>
                        <li>
                            <i class="fa fa-check-square-o"></i> Order:
                            <span>11463</span>
                        </li>
                        <li>
                            <i class="fa fa-check-square-o"></i> Date:
                            <span>{{ dateNow }}</span>
                        </li>
                        <li>
                            <i class="fa fa-check-square-o"></i> Total:
                            <span>€25,67</span>
                        </li>
                        <li>
                            <i class="fa fa-check-square-o"></i> Payment method:
                            <span>Cash on Delivery</span>
                        </li>
                        <li>Pay with cash upon delivery.</li>
                    </ul>
                </div>
                <div class="order-detail">
                    <article class="details-table">
                        <div class="title-article title-order">
                            Order details
                        </div>
                        <table>
                            <tr>
                                <th style="width: 50%;text-align:center">
                                    product
                                </th>
                                <th style="width: 25%; text-align:center">
                                    quantity
                                </th>
                                <th style="width: 25%">total</th>
                            </tr>
                            <tr v-for="(item, index) in listCart" :key="index">
                                <td class="table-product">
                                    <div class="box">
                                        <img
                                            src="
                                                ../../assets/imgs/$square-gray.png
                                            "
                                            alt=""
                                        />
                                        <a href="">
                                            <div class="text">
                                                {{
                                                    item.infoProduct.nameProduct
                                                }}
                                            </div>
                                        </a>
                                    </div>
                                </td>
                                <td class="table-quantity">
                                    <div class="box">
                                        {{ item.quantityCart }}
                                    </div>
                                </td>
                                <td class="table-total">
                                    ${{
                                        (
                                            item.infoProduct.minPrice *
                                            item.quantityCart
                                        ).toFixed(2)
                                    }}
                                </td>
                            </tr>
                        </table>
                    </article>
                    <article class="detail-cart">
                        <div class="title-article title-order">
                            cart totals
                        </div>
                        <table border="1">
                            <tr>
                                <td>Subtotal</td>
                                <td class="td-sub-total">
                                    ${{ total.toFixed(2) }}
                                </td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td class="td-ship">
                                    Free Shipping
                                </td>
                            </tr>
                            <tr>
                                <td>Payment Method</td>
                                <td class="td-ship">
                                    Cash on Delivery
                                </td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td class="td-total">
                                    ${{ total.toFixed(2) }}
                                </td>
                            </tr>
                        </table>
                    </article>
                </div>
                <div class="order-customer">
                    <article>
                        <div class="title-article title-order">
                            customer details
                        </div>
                        <div class="content-customer">
                            <div>
                                Email:
                                <span>{{ currentUser.info.emailAddress }}</span>
                            </div>
                            <div>
                                Phone: <span>{{ currentUser.info.phone }}</span>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div class="title-article title-order">
                            billing address
                        </div>
                        <div class="content-customer">
                            <div>
                                Mr. {{ currentUser.info.firstName }}
                                {{ currentUser.info.lastName }}
                            </div>
                            <div>{{ currentUser.info.address }}</div>
                            <div>Southern Barberton</div>
                            <div>OH 44203</div>
                            <div>Bahamas</div>
                        </div>
                    </article>
                    <article>
                        <div class="title-article title-order">
                            shipping address
                        </div>
                        <div class="content-customer">
                            <div>
                                Mr. {{ currentUser.info.firstName }}
                                {{ currentUser.info.lastName }}
                            </div>
                            <div>{{ currentUser.info.address }}</div>
                            <div>Southern Barberton</div>
                            <div>OH 44203</div>
                            <div>Bahamas</div>
                        </div>
                    </article>
                </div>
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

import { mapState } from "vuex";
import { formatDate } from "../../helpers";
export default {
    name: "checkout-confirm",
    components: {
        TopArea,
        MenuComp,
        FooterComp,
        BannerComp
    },
    data() {
        const currentTime = new Date();
        return {
            banner: {
                title: "<b>checkout</b> confirm",
                image: "checkout-confirm.png"
            },
            listItems: [
                {
                    image: "square-gray.png",
                    text: "Lorem ipsum dolor sit amet",
                    price: 35.99,
                    quantity: 1
                },
                {
                    image: "square-gray.png",
                    text: "Consectetur adipisicing",
                    size: "",
                    price: 428.66,
                    quantity: 3
                },
                {
                    image: "square-gray.png",
                    text: "Elit sed do eiusmod ",
                    size: "Size: Large",
                    price: 89.99,
                    quantity: 1
                }
            ],
            isShowAlert: true,

            currentYear: currentTime.getFullYear(),
            currentMonth: currentTime.getMonth(),
            currentDate: currentTime.getDate(),
            dateNow: null,
            total: 0
        };
    },
    computed: {
        ...mapState({
            listCart: state => state.cart.listCart,
            currentUser: state => state.users.currentUser
        })
    },
    created() {
        this.dateNow = formatDate(
            this.currentYear,
            this.currentMonth,
            this.currentDate
        );
        this.total = this.listCart.reduce(
            (total, item) =>
                total + item.infoProduct.minPrice * item.quantityCart,
            0
        );
    },
    methods: {
        hideAlert() {
            this.isShowAlert = false;
        }
    }
};
</script>

<style lang="scss">
@import "../../styles/shop/CheckoutConfirm";
</style>

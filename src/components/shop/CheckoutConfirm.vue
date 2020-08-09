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
                            <img src="../../assets/imgs/tick.png" alt="">
                        </div>
                        <div class="text">
                            Thank you. Your order has been received.
                        </div>
                        <div class="close">
                            <img src="../../assets/imgs/close.png" alt=""
                                @click="hideAlert"
                            >
                        </div>
                    </div>
                </div>
                <div class="order-data">
                    <ul>
                        <li><i class="fa fa-check-square-o"></i> Order:  <span>11463</span></li>
                        <li><i class="fa fa-check-square-o"></i> Date: <span>January 19, 2016</span></li>
                        <li><i class="fa fa-check-square-o"></i> Total: <span>€25,67</span></li>
                        <li><i class="fa fa-check-square-o"></i> Payment method:  <span>Cash on Delivery</span></li>
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
                            <th style="width: 50%;text-align:center">product</th>
                            <th style="width: 25%; text-align:center">quantity</th>
                            <th style="width: 25%">total</th>
                        </tr>
                        <tr v-for="(item,index) in listItems" :key="index">
                            <td class="table-product">
                                <div class="box">
                                    <img :src="require(`../../assets/imgs/${item.image}`)" alt="">
                                    <a href="">
                                        <div class="text">
                                            {{item.text}}
                                        </div>
                                    </a>
                                </div>
                            </td>
                            <td class="table-quantity">
                                <div class="box">
                                    {{item.quantity}}
                                </div>
                            </td>
                            <td class="table-total">${{(item.price * item.quantity).toFixed(2)}}</td>
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
                                <td class="td-sub-total">$1285.99</td>
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
                                <td class="td-total">$2015.00</td>
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
                            <div>Email: <span>yourmail@yourdomain.com</span></div>
                            <div>Phone: <span>+123 456 7890</span></div>
                        </div>
                    </article>
                    <article>
                        <div class="title-article title-order">
                            billing address
                        </div>
                        <div class="content-customer">
                            <div>Mr. John Doe</div>
                            <div>1395 Marshall Street</div>
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
                            <div>Mr. John Doe</div>
                            <div>1395 Marshall Street</div>
                            <div>Southern Barberton</div>
                            <div>OH 44203</div>
                            <div>Bahamas</div>
                        </div>
                    </article>
                </div>
            </div>
        </main>
        <footer-comp/>
    </section>
</template>

<script>
import TopArea from "./TopArea";
import MenuComp from "./MenuComp";
import FooterComp from "./FooterComp";
import BannerComp from "./BannerComp";
export default {
    name: "checkout-confirm",
    components: {
        TopArea,
        MenuComp,
        FooterComp,
        BannerComp
    },
    data(){
        return{
            banner:{
                title: "<b>checkout</b> confirm",
                image: "checkout-confirm.png"
            },
            listItems:[
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
                },
            ],
            isShowAlert: true,
        }
    },
    methods:{
        hideAlert(){
            this.isShowAlert = false;
        }
    }
};
</script>

<style lang="scss">
@import "../../styles/shop/CheckoutConfirm";
</style>

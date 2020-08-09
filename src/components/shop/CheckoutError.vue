<template>
    <section>
        <top-area />
        <menu-comp />
        <banner-comp v-bind:contentBanner="banner" />
        <main>
            <div class="container">
                <div v-if="isShowError" class="box-alert box-error">
                    <div class="content-box-full">
                        <div class="icon d-flex-center">
                            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                        </div>
                        <div class="text">
                            <div>
                                <b>ERROR:</b> Invalid username. <a href="#">Lost your password?</a>
                            </div>
                            <div class="close">
                                <img src="../../assets/imgs/close.png" alt=""
                                    @click="hideError"
                                >
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div v-if="isShowRequired" class="box-alert box-required">
                    <div class="content-box-full">
                        <div class="icon d-flex-center">
                            <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                        </div>
                        <div class="text">
                            <div>
                                <b>Phone</b> is a required field
                            </div>
                            <div class="close">
                                <img src="../../assets/imgs/close.png" alt=""
                                    @click="hideRequired"
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="steps">
                    <div class="step" :class="{'step-active' : step == 1}">
                        1. sign in
                    </div>
                    <div class="step" :class="{'step-active' : step == 2}">
                        2. billing
                    </div>
                    <div class="step" :class="{'step-active' : step == 3}">
                        3. payment
                    </div>
                    <div class="step">
                        4. confirmation
                    </div>
                </div>
                <div v-if="step == 1" class="info-customer">
                    <div class="login">
                        <div class="title-customer">
                            <img src="../../assets/imgs/key.png" alt="">
                            existing customer
                        </div>
                        <div class="box-form">
                            <div class="form-input">
                                <div>Username or Email <span>*</span></div>
                                <input type="text" value="">
                            </div>
                            <div class="form-input">
                                <div>Password <span>*</span></div>
                                <input type="password" value="">
                            </div>
                            <div class="form-login__button">
                                <button @click="nextStep">login</button>
                                <div class="checkbox">
                                    <label class="box-checkbox">Remember me?
                                        <input type="checkbox" checked="checked">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <a href="#">Lost your password?</a>
                            </div>
                        </div>
                    </div>
                    <div class="register">
                        <div class="title-customer">
                            <img src="../../assets/imgs/contact.png" alt="">
                            new customer
                        </div>
                        <div class="register__button">
                            <button>checkout as guest</button>
                            <button @click="showFromRegister(true)">create an account</button>
                        </div>
                    </div>
                </div>
                <div v-if="step == 2" class="billing">
                    <article class="bill-address">
                        <div class="title-customer">
                            <img src="../../assets/imgs/truck.png" alt="">
                            billing address
                        </div>
                        <div class="box-form">
                            <div class="form-input">
                                <div>Country <span>*</span></div>
                                <div class="box-select">
                                    <select>
                                        <option value="" selected>United States Of America</option>
                                        <option value="">VN</option>
                                        <option value="">Jap</option>
                                    </select>
                                </div>
                            </div>
                            <div class="group-2-input">
                                <div class="form-input">
                                    <div>First Name <span>*</span></div>
                                    <input type="text" value="">
                                </div>
                                <div class="form-input">
                                    <div>Last Name <span>*</span></div>
                                    <input type="text" value="">
                                </div>
                            </div>
                            <div class="form-input">
                                <div>Company Name</div>
                                <input type="text" value="">
                            </div>
                            <div class="form-input">
                                <div>Address <span>*</span></div>
                                <input type="text" value="" placeholder="Street Address">
                                <input type="text" value="" placeholder="Apartment, suite, unit etc. (optional)">
                            </div>
                            <div class="form-input">
                                <div>Town / City <span>*</span></div>
                                <input type="text" value="">
                            </div>
                            <div class="group-2-input">
                                <div class="form-input">
                                    <div>State / Country <span>*</span></div>
                                    <input type="text" value="">
                                </div>
                                <div class="form-input">
                                    <div>Postcode / Zip <span>*</span></div>
                                    <input type="text" value="">
                                </div>
                            </div>
                            <div class="group-2-input">
                                <div class="form-input">
                                    <div>Email Address <span>*</span></div>
                                    <input type="text" value="">
                                </div>
                                <div class="form-input">
                                    <div>Phone <span>*</span></div>
                                    <input type="text" value="">
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="different-address">
                        <div class="title-customer">
                            <img src="../../assets/imgs/earth.png" alt="" >
                            different address?
                        </div>
                        <div class="box-form">
                            <div class="checkbox">
                                <label class="box-checkbox">Remember me?
                                    <input type="checkbox" checked="checked">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div class="form-input">
                                <div>Order Notes</div>
                                <textarea name="" id="" placeholder="Notes about your order, e.g. special notess for delivery">
                                </textarea>

                            </div>
                        </div>
                    </article>
                    <div class="btn-step">
                        <button @click="preStep"><i class="fa fa-angle-left" aria-hidden="true"></i>previous step</button>
                        <button @click="nextStep">next step<i class="fa fa-angle-right" aria-hidden="true"></i></button>
                    </div>
                </div>
                <div v-if="step == 3" class="payment">
                    <div class="table-order">
                         <div class="title-customer">
                            <img src="../../assets/imgs/cart.png" alt="">
                            your order
                        </div>
                        <table class="table-order-detail">
                            <tr>
                                <th style="width: 65%;">product</th>
                                <th style="width: 20%; text-align:center">quantity</th>
                                <th style="width: 15%">total</th>
                            </tr>
                            <tr v-for="(item,index) in listItems" :key="index">
                                <td class="table-product">
                                    <div class="box">
                                        <img :src="require(`../../assets/imgs/${item.image}`)" alt="">
                                        <a href="">
                                            <div class="text">
                                                {{item.text}}&nbsp;
                                                <span class="size">{{item.size}}</span>
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
                        <div class="infos">
                            <div class="infos__left">
                                <input type="text" value="" placeholder="Enter Coupon Code Here..">
                                <button>apply</button>
                            </div>
                            <div class="infos__right">
                                <table>
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
                                        <td>Total</td>
                                        <td class="td-total">$2015.00</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="wrapper-radio">
                        <label class="box-radio">Direct Bank Transfer
                        <input type="radio" checked="checked" name="radio">
                        <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="box-full">
                        <div class="content-box-full">
                            <div class="tick d-flex-center">
                                <img src="../../assets/imgs/tick.png" alt="">
                            </div>
                            <div class="text">
                                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="wrapper-box-radio">
                            <label class="box-radio">Cheque Payment
                            <input type="radio" name="radio">
                            <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="wrapper-box-radio">
                            <label class="box-radio">PayPal <span style="color: #00bcd4">What is PayPal?</span>
                            <input type="radio" name="radio">
                            <span class="checkmark"></span>
                            </label>
                            <fieldset>
                                <legend><img src="../../assets/imgs/paypal.png" alt=""></legend>
                                <img src="../../assets/imgs/visa.png" alt="">
                            </fieldset>
                        </div>
                    </div>
                    <div class="btn-step">
                        <button @click="preStep"><i class="fa fa-angle-left" aria-hidden="true"></i>previous step</button>
                        <button><i class="fa fa-newspaper-o" aria-hidden="true"></i>place order</button>
                    </div>
                </div>
            </div>
        </main>
        <section v-if="isShowFormRegister" id="register" class="d-flex-center">
            <div class="container">
                <div class="box-form-register">
                    <div class="title-customer">
                        <img src="../../assets/imgs/user.png" alt="" width="36" height="36">
                        register
                    </div>
                    <div class="form-register">
                        <div class="form-register__desc">
                            Create an account by entering the information below. If you are a returning customer please login at the top of the page.
                        </div>
                        <div class="form-register__input">
                            <div>Account password <span>*</span></div>
                            <input type="password" value="" placeholder="">
                        </div>
                        <div class="form-register__button">
                            <div class="checkbox">
                                <label class="box-checkbox">Create an account ?
                                    <input type="checkbox" checked="checked">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <button @click="showFromRegister(false)">register</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer-comp/>
    </section>
</template>

<script>
import TopArea from "./TopArea";
import MenuComp from "./MenuComp";
import FooterComp from "./FooterComp";
import BannerComp from "./BannerComp";
export default {
    name: "checkout-error",
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
                    size: "Size: Large, Color: Black",
                    price: 35.99,
                    quantity: 1
                },
                {
                    image: "square-gray.png",
                    text: "Consectetur adipisicing",
                    size: "",
                    price: 1285.99,
                    quantity: 1
                },
                {
                    image: "square-gray.png",
                    text: "Elit sed do eiusmod ",
                    size: "Size: Large",
                    price: 44.99,
                    quantity: 2
                },
                {
                    image: "square-gray.png",
                    text: "Tempor incididunt ut labore",
                    size: "Size: Large",
                    price: 6,
                    quantity: 2
                },
                {
                    image: "square-gray.png",
                    text: "Et dolore magna aliqua",
                    size: "Size: Large",
                    price: 158.25,
                    quantity: 1
                },
            ],
            step:1,
            isShowError: true,
            isShowRequired: true,
            isShowFormRegister: false
        }
    },
    methods:{
        hideError(){
            this.isShowError = false;
        },
        hideRequired(){
            this.isShowRequired = false;
        },
        showFromRegister(res){
            this.isShowFormRegister = res;
        },
        nextStep(){
            this.step++;
        },
        preStep(){
            this.step--;
        }
    }
}
</script>

<style lang="scss">
@import "../../styles/shop/CheckoutError";
</style>
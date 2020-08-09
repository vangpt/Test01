<template>
    <section>
        <top-area />
        <menu-comp />
        <main>
            <div class="container">
                <div class="box">
                    <article>
                        <div class="item">
                            <div class="avatar">
                                <img
                                    src="../../assets/imgs/shop/featured-product/product1.png"
                                    alt=""
                                />
                            </div>
                            <div class="info">
                                <span class="info__close">x</span>
                                <div class="info__name">
                                    <a href="#">product title here</a>
                                </div>
                                <div class="info__price">
                                    <span>2 x&nbsp;</span>$35.00
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="avatar">
                                <img
                                    src="../../assets/imgs/shop/featured-product/product1.png"
                                    alt=""
                                />
                                <div class="avatar__percent">%</div>
                            </div>
                            <div class="info">
                                <span class="info__close">x</span>
                                <div class="info__name">
                                    <a href="#">product title here</a>
                                </div>
                                <div class="info__price">
                                    <span>1 x&nbsp;</span>$128.99
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="avatar">
                                <img
                                    src="../../assets/imgs/shop/featured-product/product1.png"
                                    alt=""
                                />
                                <div class="avatar__percent">%</div>
                            </div>
                            <div class="info">
                                <span class="info__close">x</span>
                                <div class="info__name">
                                    <a href="#">product title here</a>
                                </div>
                                <div class="info__price">
                                    <span>1 x&nbsp;</span>$89.99
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
                    </article>
                    <article>
                        <div class="item">
                            <div class="avatar">
                                <img
                                    src="../../assets/imgs/shop/featured-product/product1.png"
                                    alt=""
                                />
                            </div>
                            <div class="info">
                                <span class="info__close">x</span>
                                <div class="info__name">
                                    <a href="#">product title here</a>
                                </div>
                                <div class="info__price">
                                    <span>2 x&nbsp;</span>$35.00
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="avatar">
                                <img
                                    src="../../assets/imgs/shop/featured-product/product1.png"
                                    alt=""
                                />
                                <div class="avatar__percent">%</div>
                            </div>
                            <div class="info">
                                <span class="info__close">x</span>
                                <div class="info__name">
                                    <a href="#">product title here</a>
                                </div>
                                <div class="info__price">
                                    <span>1 x&nbsp;</span>$128.99
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="avatar">
                                <img
                                    src="../../assets/imgs/shop/featured-product/product1.png"
                                    alt=""
                                />
                                <div class="avatar__percent">%</div>
                            </div>
                            <div class="info">
                                <span class="info__close">x</span>
                                <div class="info__name">
                                    <a href="#">product title here</a>
                                </div>
                                <div class="info__price">
                                    <span>1 x&nbsp;</span>$89.99
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
                    </article>
                </div>
            </div>
        </main>
    </section>
</template>

<script>
import TopArea from "./TopArea";
import MenuComp from "./MenuComp";
export default {
    name: "menu-widget",
    components: {
        TopArea,
        MenuComp
    }
};
</script>

<style lang="scss">
@import "../../styles/mixin";
@import "../../styles/varibles";
.box {
    display: flex;
    justify-content: flex-end;
    .item {
        @include custom-product-short;
        margin-bottom: 0;
        padding: 15px;
        border-top: 1px solid $border-gray;
        border-left: 1px solid $border-gray;
        border-right: 1px solid $border-gray;

        .info {
            border: none;
            position: relative;
            &__close {
                position: absolute;
                top: 0;
                right: 0;
                font-family: $font2;
                font-size: 16px;
                color: $gray-mid;
                cursor: pointer;
            }
            &__price {
                justify-content: flex-start;
                span {
                    font-family: $font2;
                    font-size: 16px;
                    color: $gray-mid;
                }
            }
        }
    }
    .cart__price {
        background: #f0f3f2;
        padding: 15px;
        div:first-child {
            font-family: $font2;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 15px;
            margin-bottom: 15px;
            span:first-child {
                color: $gray-mid;
            }
            span:last-child {
                font-size: 24px;
                font-weight: 300;
            }
        }
        div:last-child {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            a {
                border-radius: 5px;
                padding: 4px 15px;
                font-family: $font1;
                font-size: 14px;
                font-weight: bold;
                text-transform: uppercase;
                transition: ease .5s;
            }
            a:first-child {
                background-color: $blue-light;
                border: 2px solid $blue-light;
                color: white;
                margin-right: 15px;
                &:hover{
                    background-color: white;
                    color: $blue-light;
                }
            }
            a:last-child {
                background-color: none;
                border: 2px solid black;
                color: black;
                &:hover{
                    background-color: $black-light;
                    color: white;
                }
            }
        }
    }
    article:nth-child(2) {
        margin-left: 15%;
        .item {
            padding-left: 25px;
            padding-right: 25px;
            padding-top: 0px;
            padding-bottom: 25px;
            border-top: none;
            &:first-child {
                padding-top: 25px;
            }
             .avatar {
                width: 60px;
                height: 60px;
                img {
                    width: 100%;
                    height: auto;
                }
            }
        }
        .cart__price {
            padding: 25px 20px;
            div:first-child{
                margin-top: 0px;
            }
        }
    }
}

@media (max-width: 768px){
    .box{
        flex-direction: column;
        align-items: center;
        article:nth-child(2){
            margin-left: 0 !important;
            margin-top: 30px;
            border-top: 1px solid $border-gray;
        }
        .cart__price{
            div:last-child{
                a{
                    padding: 5px 10px !important;
                    font-size: 12px !important;
                }
            }
        }
    }
}

</style>

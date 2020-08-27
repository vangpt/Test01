<template>
    <div id="app">
        <router-view></router-view>
        <!-- <shop /> -->
        <!-- <shop-cart /> -->
        <!-- <menu-widget/> -->
        <!-- <checkout-confirm/> -->
        <!-- <checkout-error/> -->
        <!-- <wish-list /> -->
        <!-- <left-side /> -->
        <!-- <right-side /> -->
        <!-- <full-width-2 /> -->
        <!-- <full-width /> -->
        <loading :class="{ show: isLoading }" />
        <notifications
            group="foo"
            position="top center"
            classes="custom-noti"
        />
        <footer-bottom />
    </div>
</template>

<script>
import FooterBottom from "./components/FooterBottom";
import ShopCart from "./components/shop/ShopCart";

import FullWidth2 from "./components/shop/FullWidth2";
import FullWidth from "./components/shop/FullWidth";
import MenuWidget from "./components/shop/MenuWidget";
import CheckoutConfirm from "./components/shop/CheckoutConfirm";
import CheckoutError from "./components/shop/CheckoutError";
import WishList from "./components/shop/WishList";
import LeftSide from "./components/shop/LeftSide";
import RightSide from "./components/shop/RightSide";
import Loading from "./components/Loading";

import { mapState } from "vuex";
export default {
    name: "app",
    components: {
        FooterBottom,
        ShopCart,
        MenuWidget,
        CheckoutConfirm,
        CheckoutError,
        WishList,
        LeftSide,
        FullWidth2,
        FullWidth,
        RightSide,
        Loading
    },
    data() {
        return {};
    },
    computed: {
        ...mapState(["isLoading"])
    }
};
</script>

<style lang="scss">
@import "styles/main.scss";
.custom-noti {
    font-family: "Source Sans Pro", sans-serif;
    color: white;
    padding: 15px;
    border-radius: 5px;
    margin-top: 30px;
    &.success {
        background: #00bcd4;
    }
    &.warn {
        background: #ffc107;
    }
    &.error {
        background: red;
    }
    &.wishlist {
        background: #5f727f;
    }
    .notification-title {
        font-size: 16px;
        font-weight: bold;
    }
    .notification-content {
        font-size: 16px;
    }
}
</style>

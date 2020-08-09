<template>
    <div>
        <top-area />
        <menu-comp />
        <banner-product v-bind:contentBanner="banner">
            <bread-crumb-product v-bind:breadCrumb="listBreadCrumb"/>
        </banner-product>
        <main>
            a
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
    components:{
        TopArea,
        MenuComp,
        FooterComp,
        BannerProduct,
        BreadCrumbProduct
    },
    data(){
        return{
            banner:{
                title: "<b>summer</b> feeling",
                image: "left-side-banner.png",
                bgImage: "#f94c4f",
                desc: " Absolutely marvelous piece of lingerie from The Gem developers. It is so stunning and sexy as The Gem itself."
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
                },
            ],
        }
    }
};
</script>

<style lang="scss">
@import "../../styles/shop/LeftSide";
</style>

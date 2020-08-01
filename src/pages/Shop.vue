<template>
    <div>
        <top-area />
        <menu-comp />
        <banner />
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
        return {};
    }
};
</script>

<style lang="scss"></style>

<template>
    <div id="app">
        <!-- <top-area></top-area>
        <menu-comp></menu-comp>
        <slider />
        <home /> -->
        <!-- <footer-comp /> -->
        <shop />
        <footer-bottom />
    </div>
</template>

<script>
import TopArea from "./components/TopArea";
import MenuComp from "./components/MenuComp";
import Slider from "./components/Slider";
import FooterComp from "./components/FooterComp";
import FooterBottom from "./components/FooterBottom";
import Home from "./pages/home";
import Shop from "./pages/shop";
export default {
    name: "app",
    components: {
        TopArea,
        MenuComp,
        Slider,
        Home,
        Shop,
        FooterComp,
        FooterBottom
    },
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    }
};
</script>

<style lang="scss">
@import "styles/main.scss";
</style>

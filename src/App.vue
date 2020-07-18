<template>
    <div id="app">
        <top-area></top-area>
        <menu-comp></menu-comp>
        <slider/>
        <home/>
        <footer-comp/>
    </div>
</template>

<script>
import TopArea from "./components/TopArea";
import MenuComp from "./components/MenuComp";
import Slider from "./components/Slider";
import FooterComp from "./components/FooterComp";
import Home from "./pages/home";
export default {
    name: "app",
    components: {
        TopArea,
        MenuComp,
        Slider,
        Home,
        FooterComp
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

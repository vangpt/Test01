<template>
    <div id="menu">
        <div class="container">
            <div class="content">
                <div class="icon-menu">
                    <i class="fa fa-bars" @click="toggleMenu"></i>
                </div>
                <div class="logo">
                    <a href="#"
                        ><img src="../../assets/imgs/logo1.png" width="41" />
                        <span class="font-light">the</span
                        ><span class="font-bold">gem</span></a
                    >
                </div>
                <ul>
                    <li v-for="(item, index) in menu" :key="index">
                        <a :href="item.link">{{ item.name }}</a>
                    </li>
                </ul>
                <div class="icon">
                    <a href="#"
                        ><img
                            src="../../assets/imgs/uk.png"
                            alt=""
                            height="13px"
                    /></a>
                    <a href="#"><i class="fa fa-search"></i></a>
                    <a href="#"><i class="fa fa-cart-arrow-down"></i></a>
                    <div class="icon-tag">
                        <div class="triangle-left"></div>
                        <div class="rectangle">2</div>
                    </div>
                </div>
            </div>
            <menu-res v-if="isShowMenu" v-on:toggleMenu="toggleMenu" />
        </div>
    </div>
</template>

<script>
import MenuRes from "../MenuRes";
export default {
    name: "menu-comp",
    components: {
        MenuRes
    },
    data() {
        return {
            menu: [
                {
                    name: "home",
                    link: "#"
                },
                {
                    name: "page",
                    link: "#"
                },
                {
                    name: "blog",
                    link: "#"
                },
                {
                    name: "portfolios",
                    link: "#"
                },
                {
                    name: "shop",
                    link: "#"
                },
                {
                    name: "features",
                    link: "#"
                },
                {
                    name: "element",
                    link: "#"
                }
            ],
            isShowMenu: false
        };
    },
    methods: {
        toggleMenu() {
            this.isShowMenu = !this.isShowMenu;
        }
    }
};
</script>

<style lang="scss">
@import "../../styles/varibles";
#menu {
    background-color: white;
    border-bottom: 1px solid $border-gray;
    box-shadow: 0px 2px 8px gray;

    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 0;
        font-family: "Montserrat", sans-serif;
        .icon-menu {
            display: none;
            i {
                font-size: 30px;
            }
        }
        ul {
            margin-left: 50px;
            li {
                display: inline-block;
                padding: 5px 18px;
                margin-right: 14px;
                a {
                    font-size: 14px;
                    font-weight: bold;
                    text-transform: uppercase;
                    color: $black-light;
                    transition: ease 0.5s;
                }
                a:hover {
                    color: $blue-light;
                }
                &:nth-child(5){
                    border: 2px solid $black-light;
                }
            }
            li:last-child {
                margin-right: 0;
                padding-right: 0;
            }
        }
        .logo {
            a {
                font-size: 27px;
                color: $black-light;
                text-transform: uppercase;
                img {
                    vertical-align: middle;
                }
            }
        }

        .icon {
            display: flex;
            align-items: center;
            a:first-child {
                img {
                    margin-right: 20px;
                }
            }
            a:nth-child(2) {
                i {
                    font-size: 22px;
                    margin-right: 20px;
                }
            }
            a:nth-child(3) {
                i {
                    font-size: 22px;
                    margin-right: 5px;
                }
            }
            .icon-tag {
                display: flex;
                .triangle-left {
                    width: 0;
                    height: 0;
                    border-top: 10px solid transparent;
                    border-right: 10px solid $blue-light;
                    border-bottom: 10px solid transparent;
                }
                .rectangle {
                    color: white;
                    font-size: 14px;
                    text-align: center;
                    line-height: 20px;
                    width: 30px;
                    height: 20x;
                    background-color: $blue-light;
                }
            }
        }
    }
}

@media (max-width: 1200px) {
    #menu {
        box-shadow: 0 4px 2px -2px gray;
        position: sticky;
        top: 0;
        z-index: 10;
        .content {
            position: sticky;
            top: 0;
            padding-top: 15px !important;
            padding-bottom: 15px !important;
            .icon-menu {
                display: block;
            }
            ul,
            .icon {
                display: none;
            }
        }
    }
}
</style>

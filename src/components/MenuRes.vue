<template>
    <div class="wrap">
        <div class="menu-res" :class="{ active: isShow }">
            <div class="icon-close">
                <i class="fa fa-times" @click="closeMenu"></i>
            </div>
            <div class="menu-top">
                <a href="#"
                    ><img src="../assets/imgs/uk.png" alt="" height="13px"
                /></a>
                <router-link to="/shop-cart"
                    ><i class="fa fa-shopping-bag" aria-hidden="true"></i
                ></router-link>
                <div class="icon-tag">
                    <div class="triangle-left"></div>
                    <div class="rectangle">{{ listCart.length }}</div>
                </div>
            </div>
            <div class="search">
                <input type="text" name="" id="" placeholder="Search..." />
                <i class="fa fa-search"></i>
            </div>
            <ul class="menu">
                <li v-for="(item, index) in menu" :key="index">
                    <router-link :to="item.link">{{ item.name }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "menu-res",
    props: {
        isShow: { type: Boolean, default: false }
    },
    computed: {
        ...mapState({
            listCart: state => state.cart.listCart
        })
    },
    data() {
        return {
            menu: [
                {
                    name: "home",
                    link: "/"
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
                    link: "/shop"
                },
                {
                    name: "features",
                    link: "#"
                },
                {
                    name: "element",
                    link: "#"
                }
            ]
        };
    },
    methods: {
        closeMenu() {
            this.$emit("toggleMenu");
        }
    }
};
</script>

<style lang="scss">
@import "../styles/varibles";
.menu-res {
    position: fixed;
    top: 0;
    left: -265px;
    z-index: 5;
    width: 260px;
    height: 100%;
    padding: 10px;
    background-color: white;
    box-shadow: 5px 0px 5px #888888;
    transition: left 0.5s;
    &.active {
        left: 0;
    }
    .icon-close {
        text-align: right;
        cursor: pointer;
        i {
            font-size: 30px;
            color: $black-light;
        }
    }
    .menu-top {
        display: flex;
        img {
            height: 20px;
            display: block;
        }
        i {
            font-size: 20px;
            padding-left: 20px;
            padding-right: 20px;
        }
    }
    .search {
        margin-top: 20px;
        position: relative;
        input[type="text"] {
            width: 100%;
            height: 30px;
            border: none;
            background-color: #181828;
            font-size: 16px;
            color: white;
            padding-left: 10px;
            border-radius: 5px;
        }
        i {
            position: absolute;
            right: 10px;
            top: 7px;
            color: white;
        }
    }
    .menu {
        margin-top: 30px;
        li {
            padding-top: 15px;
            padding-bottom: 15px;
            a {
                font-size: 18px;
                text-transform: uppercase;
                font-weight: bold;
                transition: ease 0.5s;
            }
            &:hover {
                a {
                    color: $blue-light;
                }
            }
        }
    }
    .icon-tag {
        display: flex;
        .triangle-left {
            width: 0;
            height: 0;
            border-top: 10px solid transparent;
            border-right: 10px solid $black-light;
            border-bottom: 10px solid transparent;
        }
        .rectangle {
            color: white;
            font-size: 14px;
            text-align: center;
            line-height: 20px;
            width: 30px;
            height: 20px;
            background-color: $black-light;
        }
    }
}
</style>

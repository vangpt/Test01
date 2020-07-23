<template>
<div id="menu">
    <div class="container">
        <div class="content">
            <div class="icon-menu" >
                <i class="fa fa-bars" @click="toggleMenu"></i>
            </div>
            <ul>
                <li v-for="(item, index) in menu" :key="index">
                    <a :href="item.link">{{item.name}}</a>
                </li>
            </ul> 
            <div class="icon">
                <a href="#"><img src="../assets/imgs/uk.png" alt="" height="13px"></a>
                <a href="#"><i class="fa fa-search"></i></a>
                <a href="#"><i class="fa fa-cart-arrow-down"></i></a>
                <a href="#"><i class="fa fa-tag" style="color: #315bd6"></i></a>
            </div>
            <div class="logo">
                <a href="#"><img src="../assets/imgs/logo.png" width="41"> <span>the <b>gem</b></span></a>
            </div>
        </div>
        <menu-res 
            v-if="isShowMenu"
			v-on:toggleMenu="toggleMenu"
        />
    </div>
</div>
</template>

<script>
import MenuRes from "./MenuRes";
export default {
    name: "menu-comp",
    components:{
        MenuRes
    },
    data() {
        return {
            menu:[
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
            isShowMenu: false,
        }
    },
    methods:{
        toggleMenu(){
            this.isShowMenu = !this.isShowMenu;
        }
    }
};
</script>

<style lang="scss">
@import "../styles/varibles";
#menu{
    background-color: white;
    .content{
        display: flex;
        justify-content: space-between;
        align-items:center;
        padding: 30px 0;
        .icon-menu {
            display: none;
            i {
                font-size: 30px;
            }
        }
        ul{
            margin-left:-15px;
            li{
                display:inline-block;
                padding:0 15px;
                a{
                    font-weight:bold;
                    text-transform: uppercase;
                    color: $black-light;
                    transition: ease .5s;
                }
                a:hover{
                    color: $blue-light;
                }
            }
        }
        .logo{
            a{
                font-size:27px;
                text-transform: uppercase;  
                span{
                color: $black-light;
                }
                img{
                    vertical-align: middle;
                }
            }
        }
        
        .icon{
            a{
                padding: 0 10px;
                margin-right: -10px;
                i{
                    font-size: 20px;
                }
            }
        }
    }
}

@media (max-width: 768px) {
    
    #menu{
        position: sticky;
        top: 0;
        z-index: 10;
    .content{
            position: sticky;
            top: 0;
            padding-top: 15px !important;
            padding-bottom: 15px !important;
            .icon-menu{
                display: block;
            }
            ul, .icon{
                display: none;
            }
        }
    }
}
</style>

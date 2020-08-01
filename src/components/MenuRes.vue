<template>
    <div id="menu-res">
        <div class="icon-close">
            <i class="fa fa-times" @click="closeMenu"></i>
        </div>
        <ul class="icon">
            <li>
                <a href="#"
                    ><img src="../assets/imgs/uk.png" alt="" height="13px"
                /></a>
            </li>
            <li class="search">
                <input type="text" name="" id="" placeholder="Search...">
                &nbsp;
                <a href="#"><i class="fa fa-search"></i></a>
            </li>
            <li>
                <a href="#"
                    ><i class="fa fa-cart-arrow-down"></i
                ></a>
            </li>
            <li>
                <div class="icon-tag">
                    <div class="triangle-left"></div>
                    <div class="rectangle">2</div>
                </div>
            </li>
        </ul>
        <ul class="menu">
            <li v-for="(item, index) in menu" :key="index">
                <a :href="item.link">{{item.name}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "menu-res",
    data(){
        return{
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
            ]
        }
    },
    methods:{
        closeMenu(){
            this.$emit('toggleMenu');
        }
    }
};
</script>

<style lang="scss">
@import "../styles/varibles";
#menu-res {
    position: fixed ;
    top: 0;
    left: 0;
    z-index: 3;
    width: 40%;
    height: 100%;
    background-color: $blue-light;
    padding: 10px;
    border-right: 3px solid $black-light;
    .icon-close{
        text-align: right;
            i{
                font-size: 30px;
                color:white;
            }
    }
    .icon{
        li{
            padding-top:10px;
            padding-bottom:10px;
            a{
                i{
                    font-size: 25px;
                }
            }
        }
        .search{
            display: flex;
            input[type="text"]{
                width: 80%;
                border: none;
                background-color: #181828;
                font-size: 16px;
                color: $black-light;
                padding-left: 10px;
            }
        }
    }
    .menu{
        li{
            padding-top:10px;
            padding-bottom:10px;
            a{
                color:white;
                font-size: 18px;
                text-transform: uppercase;
            }
        }
    }
    .icon-tag{
        display: flex;
        .triangle-left{
            width: 0;
            height: 0;
            border-top: 10px solid transparent;
            border-right: 10px solid $black-light;
            border-bottom: 10px solid transparent;
        }
        .rectangle{
            color:white;
            font-size: 14px;
            text-align: center;
            line-height: 20px;
            width: 30px;
            height: 20x;
            background-color: $black-light;
        }
    }
    

}
</style>

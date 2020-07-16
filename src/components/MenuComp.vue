<template>
    <div id="menu" class="container">
        <div>
            <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">page</a></li>
                <li><a href="#">blog</a></li>
                <li><a href="#">portfolios</a></li>
                <li><a href="#">shop</a></li>
                <li><a href="#">features</a></li>
                <li><a href="#">element</a></li>
            </ul> 
        </div>
        <div>
            icon
        </div>
        <div class="logo">
            <a href="#"><img src="../assets/imgs/logo.png" width="41"> <span>the <b>gem</b></span></a>
        </div>
    </div>
</template>

<script>
export default {
    name: "menu-comp"
};
</script>

<style lang="scss">
@import "../styles/varibles";
#menu{
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 30px 0;
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
    ul{
        margin-left:-25px;
        li{
            display:inline-block;
            padding:0 25px;
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
}
</style>

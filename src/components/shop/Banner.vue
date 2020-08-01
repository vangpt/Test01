<template>
    <div class="banner">
        <img
            class="img-slide"
            src="../../assets/imgs/banner-shop-main.png"
            alt=""
        />
        <div class="arrow-left d-flex-center">
            <a href="#"
                ><img src="../../assets/imgs/arrow-white-left.png" alt=""
            /></a>
        </div>
        <div class="arrow-right d-flex-center">
            <a href="#"
                ><img src="../../assets/imgs/arrow-white-right.png" alt=""
            /></a>
        </div>
        <div class="box">
            <div class="content">
                <h2>50% <span>off</span></h2>
                <div class="desc">
                    Annual Seasonal Discounts On All Kinds Of Jewelry In
                    Selected Categories. <br />
                    Limited Time Only Proposition! Look For The "Sales" Label
                    Over Desired Items.
                </div>
            </div>
        </div>
        <div class="box-bread-crumb">
            <ul class="bread-crumb">
                <li><a href="#">Home</a></li>
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                <li><a href="#">shop</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "banner"
};
</script>

<style lang="scss">
@import "../../styles/mixin";
@import "../../styles/varibles";

.banner {
    @include custom-slide;
    max-height: fit-content;
    // background-color: yellow;
    // border: 2px solid red;
    img {
        width: 100%;
        height: auto;
    }
    .arrow-left,
    .arrow-right {
        height: 80px;
        width: 80px;
        background-color: $black-light;
    }
    .arrow-left:hover,
    .arrow-right:hover {
        background-color: $blue-light;
    }
    .box {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 1;
        transform: translate(-50%, -50%);
        max-width: 1210px;
        padding-left: 20px;
        padding-right: 20px;
        width: 100%;
        .content {
            text-align: right;
            h2 {
                @include custom-title-section;
                text-align: right !important;
                font-size: 100px;
                color: white;
                margin-bottom: 20px;
            }
            .desc {
                font-family: "Source Sans Pro", sans-serif;
                font-size: 24px;
                color: white;
                font-weight: 300;
            }
        }
    }
    .box-bread-crumb {
        position: absolute;
        bottom: 0;
        left: 50%;
        z-index: 100;
        transform: translateX(-50%);
        max-width: 1210px;
        padding-left: 20px;
        padding-right: 20px;
        width: 100%;
        .bread-crumb {
            color: white;
            font-family: "Source Sans Pro", sans-serif;
            text-transform: capitalize;
            li {
                padding-bottom: 10px;
                display: inline-block;
                a {
                    color: $blue-light;
                }
            }
            li:last-child {
                border-bottom: 5px solid red;
                a {
                    color: white;
                }
            }
            i {
                padding-left: 10px;
                padding-right: 10px;
            }
        }
    }
}
</style>

<template>
    <section class="banner-product">
        <div class="container">
            <div class="box">
                <div class="box-content">
                    <div
                        class="image-banner"
                        :style="{ 'background-color': contentBanner.bgImage }"
                    >
                        <img
                            :src="
                                require(`../../assets/imgs/${contentBanner.image}`)
                            "
                            alt=""
                        />
                    </div>
                    <div
                        class="title-banner"
                        v-html="contentBanner.title"
                    ></div>
                    <div class="desc-banner">
                        {{ contentBanner.desc }}
                    </div>
                </div>
                <slot> </slot>
            </div>
        </div>
    </section>
</template>

<script>
import BreadCrumb from "./BreadCrumb";
export default {
    name: "banner-comp",
    components: {
        BreadCrumb
    },
    props: {
        contentBanner: { type: Object, defult: null }
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss">
@import "../../styles/mixin";
@import "../../styles/varibles";
.banner-product {
    background: #6a6f7d;
    .box {
        padding-top: 40px;
        // padding-bottom: 40px;
        position: relative;
    }
    .box-content {
        text-align: center;
        color: white;
        .title-banner {
            font-family: $font1;
            font-size: 50px;
            font-weight: 300;
            text-transform: uppercase;
        }
        .image-banner {
            margin: 30px auto;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            padding: 20px;
            img {
                width: 100%;
                height: auto;
            }
        }
        .desc-banner {
            font-family: $font2;
            font-size: 24px;
            font-weight: 300;
            margin-top: 50px;
            margin-bottom: 70px;
        }
    }
}
.box-bread-crumb {
    color: white !important;
}

@media (max-width: 576px) {
    .title-banner {
        font-size: 30px !important;
    }
    .image {
        width: 20%;
    }
}
</style>

<template>
    <section class="box-banner-product">
        <div class="container">
            <div class="banner-product">
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
                <slot></slot>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "banner-comp",
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
.box-banner-product {
    background: #6a6f7d;
    .banner-product {
        padding-top: 40px;
        // padding-bottom: 40px;
        // position: relative;
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
            font-weight: 200;
            margin-top: 50px;
            margin-bottom: 70px;
        }
    }
}

@media (max-width: 576px) {
    .box {
        padding-top: 20px !important;
    }
    .image-banner {
        margin: 10px auto !important;
        width: 60px !important;
        height: 60px !important;
    }
    .title-banner {
        font-size: 28px !important;
    }
    .desc-banner {
        font-size: 16px !important;
        margin-top: 20px !important;
        margin-bottom: 20px !important;
    }
}
</style>

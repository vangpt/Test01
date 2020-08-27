<template>
    <section class="banner">
        <div class="container">
            <div class="box">
                <div class="box-content">
                    <div
                        class="title-banner"
                        v-html="contentBanner.title"
                    ></div>
                    <div class="image">
                        <img
                            :src="
                                require(`../../assets/imgs/${contentBanner.image}`)
                            "
                            alt=""
                        />
                    </div>
                </div>
                <bread-crumb v-bind:breadCrumb="listBreadCrumb" />
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
        return {
            listBreadCrumb: [
                {
                    link: "#",
                    text: "Home"
                },
                {
                    link: "#",
                    text: "Breadcrumbs Example"
                },
                {
                    link: "#",
                    text: "Second Level"
                },
                {
                    link: "#",
                    text: "Third Level"
                }
            ]
        };
    }
};
</script>

<style lang="scss">
@import "../../styles/mixin";
@import "../../styles/varibles";
.banner {
    background: #e9f0ef;
    .box {
        padding-top: 40px;
        position: relative;
    }
    .box-content {
        display: flex;
        justify-content: space-between;
        .title-banner {
            font-family: $font1;
            font-size: 50px;
            font-weight: 300;
            text-transform: uppercase;
            color: #3c3950;
        }
        .image {
            img {
                width: 100%;
                height: auto;
            }
        }
    }
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

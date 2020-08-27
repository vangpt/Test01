<template>
    <section>
        <div class="container">
            <section class="related-product">
                <div class="text">
                    <div class="border"></div>
                    <div class="title">You may be interested in</div>
                    <div class="border"></div>
                </div>
                <div class="box-related">
                    <div
                        class="box"
                        v-for="(element, index) in listProduct2"
                        :key="index"
                    >
                        <div class="item">
                            <div class="item__image">
                                <img
                                    :src="
                                        require(`../../assets/imgs/shop/list-product/${element.image}`)
                                    "
                                    alt=""
                                />
                                <div class="background-blue"></div>
                                <div
                                    v-if="element.isSale"
                                    class="sale-abso d-flex-center"
                                >
                                    sale!
                                </div>
                                <div
                                    v-if="element.isNew"
                                    class="new-abso d-flex-center"
                                    :class="{
                                        'new-sale-abso':
                                            element.isSale && element.isNew
                                    }"
                                >
                                    new
                                </div>
                            </div>
                            <div class="info">
                                <a :href="element.link">
                                    <div class="info__name">
                                        {{ element.nameProduct }}
                                    </div>
                                    <div class="info__price">
                                        {{ element.priceProduct }}
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
export default {
    name: "related-product",
    data() {
        return {
            listProduct2: [
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    nameProduct: "Denim Classy Shorts",
                    priceProduct: "$35.00–$89.99"
                },
                {
                    image: "product2.png",
                    isSale: true,
                    isNew: true,
                    link: "#",
                    nameProduct: "Golden Heels",
                    priceProduct: "$89.99"
                },
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    nameProduct: "Black Impression",
                    priceProduct: "$259.99"
                },
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    nameProduct: "Denim Classy Shorts",
                    priceProduct: "$35.00–$89.99"
                },
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    nameProduct: "Golden Heels",
                    priceProduct: "$89.99"
                },
                {
                    image: "product2.png",
                    isSale: false,
                    isNew: false,
                    link: "#",
                    nameProduct: "Black Impression",
                    priceProduct: "$259.99"
                }
            ]
        };
    }
};
</script>

<style lang="scss">
@import "../../styles/varibles";
@import "../../styles/mixin";

.related-product {
    margin-top: 144px;
    margin-bottom: 144px;
    .text {
        display: flex;
        align-items: center;
        // justify-content: space-between;
        .title {
            @include text-uppercase($font1, 36px);
            font-weight: 300;
            margin-right: 20px;
            margin-left: 20px;
        }
        .border {
            border-top: 1px solid $border-gray;
            border-bottom: 1px solid $border-gray;
            height: 4px;
            flex-grow: 1;
        }
    }
    .box-related {
        display: flex;
        flex-wrap: wrap;
        margin-left: -20px;
        margin-right: -20px;
        .box {
            padding-left: 20px;
            padding-right: 20px;
            flex: 0 0 16.66%;
            margin-top: 40px;
        }
        .item {
            &__image {
                position: relative;
                img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
                .background-blue {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(52, 152, 219, 0.5);
                    visibility: hidden;
                    opacity: 0;
                    transition: ease 0.5s;
                    z-index: 1;
                }
                .sale-abso {
                    width: 60px;
                    height: 60px;
                    background-color: $blue-light;
                    border-radius: 50%;
                    color: white;
                    font-family: $font1;
                    font-weight: bold;
                    font-size: 14px;
                    text-transform: uppercase;
                    position: absolute;
                    z-index: 3;
                    right: -20px;
                    top: 20px;
                }
                .new-abso {
                    width: 50px;
                    height: 50px;
                    background-color: $black-light;
                    border-radius: 50%;
                    color: white;
                    font-family: $font1;
                    font-weight: bold;
                    font-size: 12px;
                    text-transform: uppercase;
                    position: absolute;
                    z-index: 2;
                    right: -15px;
                    top: 25px;
                }
                .new-sale-abso {
                    top: 65px !important;
                }
            }
            &:hover {
                .background-blue {
                    visibility: visible;
                    opacity: 1;
                }
                .info {
                    background-color: $bg-gray;
                    &__border {
                        width: 80px;
                    }
                }
            }
            .info {
                border-bottom: 1px solid $border-gray;
                border-left: 1px solid $border-gray;
                border-right: 1px solid $border-gray;
                text-align: center;
                padding-top: 20px;
                padding-bottom: 20px;
                transition: ease 0.5s;
                padding-left: 5px;
                padding-right: 5px;
                &__name {
                    font-family: $font2;
                    color: $black-light;
                    text-transform: capitalize;
                    margin-bottom: 8px;
                }
                &__price {
                    color: $blue-light;
                    font-family: $font2;
                }
            }
        }
    }
}

@media (max-width: 1200px) {
    .box-related {
        .box {
            flex: 0 0 33.33% !important;
        }
    }
}

@media (max-width: 768px) {
    .box-related {
        .box {
            flex: 0 0 50% !important;
        }
    }
}
@media (max-width: 768px) {
    .title {
        font-size: 20px !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
    }
    .border {
        display: none;
    }
}
</style>

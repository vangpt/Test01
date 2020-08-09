<template>
    <div class="box-bread-crumb">
        <ul class="bread-crumb">
            <template v-for="(item, index) in breadCrumb">
                <i :key="index" class="fa fa-long-arrow-right"></i>
                <li :key="index + 100">
                    <a :href="item.link">{{ item.text }}</a>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
export default {
    name: "bread-crum-product",
    props: {
        breadCrumb: { type: Array, defaultStatus: null }
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss">
@import "../../styles/varibles";
.box-bread-crumb {
    // position: absolute;
    // bottom: 0;
    // left: 50%;
    // z-index: 1;
    // transform: translateX(-50%);
    // max-width: 1210px;
    // padding-left: 20px;
    // padding-right: 20px;
    width: 100%;
    .bread-crumb {
        margin: auto;
        width: fit-content;
        color: white;
        font-family: "Source Sans Pro", sans-serif;
        text-transform: capitalize;
        li {
            padding-bottom: 5px;
            display: inline-block;
            a {
                color: white;
            }
        }
        li:last-child {
            border-bottom: 4px solid #ffe033;
            a {
                color: #ffe033;
            }
        }
        i {
            padding-left: 15px;
            padding-right: 15px;
            color: #ffe033;
            &:first-child {
                display: none;
            }
        }
    }
}

@media (max-width: 768px) {
    .bread-crumb {
        li {
            padding-bottom: 2px !important;
            font-size: 12px;
        }
        i {
            font-size: 10px;
            padding-left: 5px !important;
            padding-right: 5px !important;
        }
        li:last-child {
            border-bottom: 2px solid red !important;
        }
    }
}
@media (max-width: 576px) {
    .bread-crumb {
        li {
            padding-bottom: 0px !important;
            font-size: 12px;
        }
    }
}
</style>

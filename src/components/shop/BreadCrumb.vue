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
    name: "bread-crumb",
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
    .bread-crumb {
        text-align: left;
        color: white;
        font-family: "Source Sans Pro", sans-serif;
        text-transform: capitalize;
        li {
            padding-bottom: 5px;
            display: inline-block;
            a {
                color: $blue-light;
            }
        }
        li:last-child {
            border-bottom: 4px solid red;
            a {
                color: #99a9b5;
            }
        }
        i {
            padding-left: 15px;
            padding-right: 15px;
            color: #5f727f;
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

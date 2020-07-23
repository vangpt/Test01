<template>
    <div id="box-top-area">
        <div class="container">
            <div id="top-area">
                <div class="address element">
                    <i class="fa fa-map-marker"></i> 19th Ave New York, NY 95822, USA
                </div>
                <div class="phone element">
                    <i class="fa fa-headphones"></i> +1 916-85-2235
                </div>
                <div class="icon element">
                        <div class="items">
                            <a href="#"
                                ><i
                                    class="fa fa-facebook-official"
                                   
                                    style="color: #16a7b9"
                                ></i
                            ></a>
                            <a href="#"
                                ><i
                                    class="fa fa-twitter"
                                   
                                    style="color: #315bd6"
                                ></i
                            ></a>
                            <a href="#"
                                ><i
                                    class="fa fa-instagram"
                                   
                                    style="color: #786f4c"
                                ></i
                            ></a>
                            <a href="#"
                                ><i
                                    class="fa fa-youtube-play"
                                   
                                    style="color: #ae0e0e"
                                ></i
                            ></a>
                            <a href="#"
                                ><i
                                    class="fa fa-google-plus-square"
                                   
                                    style="color: #d53c33"
                                ></i
                            ></a>
                        </div>
                    </div>
                <div class="menu element">
                    <ul>
                        <li>
                            <a href="#">
                                > Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                > Sign In
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                > More Menu
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="button element">
                    <button>Join Now</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "top-area"
};
</script>

<style lang="scss"> 
@import "../styles/mixin";
@import "../styles/varibles";
#box-top-area {
    border-top: 3px solid $blue-light;
    border-bottom: 1px solid #ced3d6;
    background-color: #f4f6f7;
    #top-area {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        font-size: 14px;
        color: #5f727f;
        .menu {
            ul {
                padding-top: 10px;
                padding-bottom: 10px;
                li {
                    display: inline-block;
                    padding: 0 10px;
                    a {
                        color: #5f727f;
                        transition: ease .5s;
                    }
                    a:hover {
                        color: black;
                    }
                }
            }
        }
        .icon {
            padding-left: 10px;
            padding-right: 10px;
            .items {
                margin-left: -10px;
                margin-right: -10px;
                a {
                    padding-left: 10px;
                    padding-right: 10px;
                    i {
                        font-size: 20px;
                    }
                }
            }
        }
        .button {
            button {
                @include custom-button(32px, 88px, $black-light, 5px);
            }
            button:hover {
                background-color: #1c1e2b;
            }
        }
    }
}

@media (max-width: 768px) {
    #top-area {
        display: none !important;
        align-items: center;
        flex-direction: column;
        .element {
            flex: 0 0 100%;
            margin-top: 10px;
            margin-bottom: 10px;
        }
    }
}

@media (max-width: 576px) {}
</style>

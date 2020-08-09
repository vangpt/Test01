<template>
    <div id="top-area">
        <div class="container">
            <div class="top-area">
                <div class="address">
                    <i class="fa fa-map-marker"></i>&nbsp; 19th Ave New York, NY
                    95822, USA
                </div>
                <div class="phone"><i class="fa fa-headphones"></i>&nbsp; +1 916-85-2235</div>

                <div class="icon">
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#">
                        <i class="fa fa-facebook-official"></i>
                    </a>
                    <a href="#"
                        ><i class="fa fa-info-circle"></i
                    ></a>
                    <a href="#"><i class="fa fa-google-plus-square"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <a href="#"
                        ><i class="fa fa-youtube-play" style="color: red"></i
                    ></a>
                    <a href="#"><i class="fa fa-pinterest-p"></i></a>
                </div>

                <div class="menu">
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
                <div class="button">
                    <button><a href="#">Join Now</a></button>
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
#top-area {
    border-top: 3px solid $blue-light;
    border-bottom: 1px solid #ced3d6;
    background-color: #f4f6f7;
    .top-area {
        font-family: "Source Sans Pro", sans-serif;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        font-size: 14px;
        color: #5f727f;
        height: 50px;
        .icon {
            padding-left: 45px;
            padding-right: 45px;
            border-left: 1px solid #dfe5e8;
            border-right: 1px solid #dfe5e8;
            height: 100%;
            a {
                line-height: 50px;
                padding-left: 10px;
                padding-right: 10px;
                i {
                    color: #5f727f;
                    font-size: 18px;
                }
            }
        }
        .menu {
            ul {
                li {
                    display: inline-block;
                    padding: 0 10px;
                    a {
                        color: #5f727f;
                        transition: ease 0.5s;
                    }
                    a:hover {
                        color: black;
                    }
                }
            }
        }
        .button {
            button {
                @include custom-button(32px, 88px, $black-light, 5px);
                a {
                    color: white;
                    font-family: 'Source Sans Pro', sans-serif;
                    font-size: 14px;
                }
            }
            button:hover {
                background-color: #1c1e2b;
            }
        }
    }
}

@media (max-width: 1200px) {
    #top-area {
        .top-area{
            .address, .phone, .icon{
                display: none;
            }
        }
    }
}

@media (max-width: 576px) {
    .top-area {
        display: none !important;
        // justify-content: center;
        flex-direction: column;
        .menu, .button{
            // padding-top: 10px;
            // padding-bottom: 10px;
        }
    }
}
</style>

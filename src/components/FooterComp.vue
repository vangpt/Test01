<template>
    <div id="footer">
        <div id="footer-head">
            <div class="containera">
                <div >
                    <div class="footer-head">
                        <div class="foot-logo item">
                            <div class="logo">
                                <img
                                    src="../assets/imgs/logo3.jpg"
                                    alt=""
                                    height="70px"
                                />
                                <div>the<br /><b>gem</b></div>
                            </div>
                            <div class="desc">
                                Lorem Ipsum. Proin gravida nibh vel velit auctor
                                aliquet. Aenean sollicitudin, lorem quis bibendum
                                auctor, nisi elit consequat ipsum, nec sagittis sem
                                nibh id elit. Duis sed odio
                            </div>
                        </div>
                        <div class="useful item">
                            <div class="title">
                                Useful links
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <ul>
                                <li>
                                    <a href="#"><i class="fa fa-circle"></i> General Information For Users</a>
                                </li>
                                <li><a href="#"><i class="fa fa-circle"></i> Interactive Fairy Tales</a></li>
                                <li>
                                    <a href="#"> <i class="fa fa-circle"></i> Official Storybook Maker Website</a>
                                </li>
                                <li><a href="#"><i class="fa fa-circle"></i> Everyday Mathematics Links</a></li>
                                <li>
                                    <a href="#"><i class="fa fa-circle"></i> Basic Knowledge and Experience</a>
                                </li>
                            </ul>
                        </div>
                        <div class="news item">
                            <div class="title">
                                Newsletter
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <div class="desc">
                                Subscribe to our MailChimp newsletter and stay up to
                                date with all events coming straight in your
                                mailbox:
                            </div>
                            <div class="input">
                                <form action="">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Your email address"
                                    /><input type="button" value=">" />
                                </form>
                            </div>
                            <div class="note">
                                <sup>*</sup> information will be encrypted
                            </div>
                        </div>
                        <div class="recent item">
                            <div class="title">
                                recent post
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <div class="recent-detail">
                                <div class="avatar">
                                    <img
                                        src="../assets/imgs/counters-icon.png"
                                        alt=""
                                        height="70px"
                                    />
                                </div>
                                <div class="desc">
                                    <div class="info">
                                        Proin gravida nibh vel velit auctor aliquet
                                        aenean...
                                    </div>
                                    <div class="date">
                                        <a href="#">27 Dec 2015</a>
                                        <a href="#"
                                            ><i
                                                class="fa fa-comments"
                                               
                                                >15</i
                                            ></a
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="recent-detail">
                                <div class="avatar">
                                    <img
                                        src="../assets/imgs/counters-icon.png"
                                        alt=""
                                        height="70px"
                                    />
                                </div>
                                <div class="desc">
                                    <div class="info">
                                        Proin gravida nibh vel velit auctor aliquet
                                        aenean...
                                    </div>
                                    <div class="date">
                                        <a href="#">27 Dec 2015</a>
                                        <a href="#"
                                            ><i
                                                class="fa fa-comments"
                                               
                                                >15</i
                                            ></a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="footer-bottom">
            <div class="container">
                <div class="footer-bottom">
                    <div class="first">
                        © Copyright 2015 <span>CodexThemes</span>
                    </div>
                    <ul>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Disclaimer</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                    <div class="icon">
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "footer-comp"
};
</script>

<style lang="scss">
@import "../styles/mixin";
@import "../styles/varibles";

#footer {
    #footer-head {
        background-color: #212331;
        color: #798692;
        padding-bottom: 110px;
        .containera{
            max-width: 1210px;
            margin-left: auto;
            margin-right: auto;
            padding-left: 20px;
            padding-right: 20px;
            .footer-head {
                display: flex;
                // flex-wrap: wrap;
                // justify-content: space-between;
                margin-left: -20px;
                margin-right: -20px;
                .item {
                    flex: 0 0 25%;
                    padding-left: 20px;
                    padding-right: 20px;
                    margin-top: 130px;
                }
                .foot-logo {
                    .logo {
                        display: flex;
                        div {
                            color: white;
                            font-size: 33px;
                            text-transform: uppercase;
                        }
                    }
                    .desc {
                        margin-top: 55px;
                    }
                }
                .useful {
                    .title {
                        @include custom-title-footer;
                    }
                    ul {
                        li {
                            margin-bottom: 20px;
                            a {
                                color: $gray-mid;
                                transition: ease 0.5s;
                                i{
                                    color: $blue-light;
                                    font-size: 8px;
                                    vertical-align: middle;
                                }
                            }
                            a:hover {
                                color: $blue-light;
                                i{
                                    color: white;   
                                }
                            } 
                        }
                        li:last-child {
                            margin: 0;
                        }
                    }
                }
                .news {
                    .title {
                        @include custom-title-footer;
                    }
                    .input {
                        form{
                            display: flex;
                        }
                        margin: 45px 0 10px 0;
                        input[type="text"] {
                            width: 80%;
                            height: 40px;
                            border: 1px solid $gray-mid;
                            background-color: #181828;
                            font-size: 16px;
                            color: $black-light;
                            padding-left: 10px;
                        }
                        input[type="button"] {
                            width: 40px;
                            height: 40px;
                            background-color: $gray-mid;
                            border: 1px solid $gray-mid;
                            font-size: 18px;
                            color: $background-slider;
                            font-weight: bold;
                            transition: ease 0.5s;
                        }
                        input[type="button"]:hover {
                            cursor: pointer;
                            background-color: $blue-light;
                        }
                    }
                    .note {
                        font-size: 14px;
                        sup {
                            color: $blue-light;
                        }
                    }
                }
                .recent {
                    .title {
                        @include custom-title-footer;
                    }
                    .recent-detail {
                        display: flex;
                        padding: 15px 0;
                        border-bottom: 1px solid #798692;
                        margin-top: -15px;
                        margin-bottom: 15px;
                        .desc {
                            padding-left: 10px;
                            .date {
                                display: flex;
                                justify-content: space-between;
                                a {
                                    color: $blue-light;
                                    font-size: 14px;
                                }
                            }
                        }
                    }
                    .recent-detail:last-child {
                        border: none;
                    }
                }
            }
        }
    }
    #footer-bottom {
        background-color: #181828;
        color: $gray-mid;
        font-size: 13px;
        .footer-bottom {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: 45px 0;
            .first {
                span {
                    color: $blue-light;
                }
            }
            ul {
                display: flex;
                li {
                    border-right: 1px solid $gray-mid;
                    padding: 0 20px;
                    a {
                        color: $gray-mid;
                        transition: ease 0.5s;
                    }
                    a:hover {
                        color: $blue-light;
                    }
                }
                li:last-child {
                    border: none;
                }
            }
            .icon {
                padding-left: 10px;
                padding-right: 10px;
                .items{
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
        }
    }
}

@media (max-width: 768px) {
    .footer-head {
        flex-wrap: wrap;
        padding: 15px;
        .item {
            flex: 0 0 50% !important;
        }
    }
    .footer-bottom {
        justify-content: center;
        .first {
            flex: 0 0 100%;
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
        }
        ul {
            margin-top: 20px;
            margin-bottom: 20px;
            flex: 0 0 100%;
            justify-content: center;
        }
        .icon {
            flex: 0 0 100%;
            text-align: center;
        }
    }
}
@media (max-width: 576px) {
    .footer-head {
        .item {
            flex: 0 0 100% !important;
        }
    }
    .footer-bottom {
        font-size: 9px;
        .icon {
            a {
                padding: 0 10px;
                margin-right: -10px;
                i {
                    font-size: 15px !important  ;
                }
            }
        }
    }
}
</style>

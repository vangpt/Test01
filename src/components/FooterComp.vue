<template>
    <div id="footer">
        <div id="footer-head">
            <div class="container footer-head">
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
                        auctor, nisi elit consequat ipsum, nec sagittis sem nibh
                        id elit. Duis sed odio
                    </div>
                </div>
                <div class="useful item">
                    <div class="title">Useful links</div>
                    <ul>
                        <li><a href="#">General Information For Users</a></li>
                        <li><a href="#">Interactive Fairy Tales</a></li>
                        <li>
                            <a href="#">Official Storybook Maker Website</a>
                        </li>
                        <li><a href="#">Everyday Mathematics Links</a></li>
                        <li><a href="#">Basic Knowledge and Experience</a></li>
                    </ul>
                </div>
                <div class="news item">
                    <div class="title">Newsletter</div>
                    <div class="desc">
                        Subscribe to our MailChimp newsletter and stay up to
                        date with all events coming straight in your mailbox:
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
                    <div class="title">recent post</div>
                    <div class="item">
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
                                27 Dec 2015
                            </div>
                        </div>
                    </div>
                    <div class="item">
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
                                27 Dec 2015
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="foot-bottom">
            <div class="container foot-bottom">
                <div class="first">© Copyright 2015 <span>CodexThemes</span></div>
                <ul>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Disclaimer</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
                <div class="icon">
                    icon
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
        padding: 130px 0 110px 0;
        .footer-head {
            display: flex;
            justify-content: space-between;
            .item{
                width: 261px;
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
                .desc{
                    margin-top: 55px;
                }
            }
            .useful {
                .title {
                    @include custom-title-footer;
                }
                ul {
                    // list-style-type: disc;
                    li {
                        margin-bottom: 20px;
                        a {
                            color: $gray-mid;
                            transition: ease 0.5s;
                        }
                        a:hover {
                            color: $blue-light;
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
                    margin: 45px 0 10px 0;
                    input[type="text"] {
                        width: 220px;
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
                        border: none;
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
                .item {
                    display: flex;
                    padding: 15px 0;
                    border-bottom: 1px solid #798692;
                    margin-top: -15px;
                    margin-bottom: 15px;
                    .desc{
                        padding-left: 10px;
                        .date{
                        color: $blue-light;
                        font-size: 14px;
                        }
                    }
                }
                .item:last-child{
                    border:none;
                }
            }
        }
    }
    #foot-bottom {
        background-color: #181828;
        color: $gray-mid;
        font-size: 13px;
        .foot-bottom {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: 45px 0;
            .first{
                span{
                    color: $blue-light;
                }
            }
            ul{
                display: flex;
                li{
                    border-right: 1px solid $gray-mid;
                    padding: 0 20px;
                    a{
                        color: $gray-mid;
                        transition:  ease .5s;
                    }
                    a:hover{
                        color: $blue-light;
                    }
                }
                li:last-child{
                    border: none;
                }
            }
        }
    }
}
</style>

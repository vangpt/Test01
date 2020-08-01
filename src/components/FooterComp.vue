<template>
    <div id="footer-head">
        <div class="container">
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
                        auctor, nisi elit consequat ipsum, nec sagittis sem nibh
                        id elit. Duis sed odio
                    </div>
                </div>
                <div class="useful item">
                    <div class="title">
                        Useful links
                        <i class="fa fa-caret-down"></i>
                    </div>
                    <ul>
                        <li>
                            <i class="fa fa-circle"></i>&nbsp;&nbsp;<a href="#">
                                General Information For Users</a
                            >
                        </li>
                        <li>
                            <i class="fa fa-circle"></i>&nbsp;&nbsp;<a href="#">
                                Interactive Fairy Tales</a
                            >
                        </li>
                        <li>
                            <i class="fa fa-circle"></i>&nbsp;&nbsp;<a href="#">
                                Official Storybook Maker Website</a
                            >
                        </li>
                        <li>
                            <i class="fa fa-circle"></i>&nbsp;&nbsp;<a href="#">
                                Everyday Mathematics Links</a
                            >
                        </li>
                        <li>
                            <i class="fa fa-circle"></i>&nbsp;&nbsp;<a href="#">
                                Basic Knowledge and Experience</a
                            >
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
                        <sup>*</sup>Personal information will be encrypted
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
                                src="../assets/imgs/img-testtimonials.png"
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
                                <div class="day">27 Dec 2015</div>
                                <div class="comment">
                                    <i class="fa fa-comments">15</i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="recent-detail">
                        <div class="avatar">
                            <img
                                src="../assets/imgs/img-testtimonials.png"
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
                                <div class="day">27 Dec 2015</div>
                                <div class="comment">
                                    <i class="fa fa-comments">15</i>
                                </div>
                            </div>
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

#footer-head {
    background-color: #212331;
    color: #798692;
    padding-bottom: 110px;
    .footer-head {
        display: flex;
        margin-left: -20px;
        margin-right: -20px;
        font-family: "Source Sans Pro", sans-serif;
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
                    font-family: "Montserrat", sans-serif;
                    font-weight: 300;
                }
            }
            .desc {
                line-height: 25px;
                margin-top: 55px;
            }
        }
        .useful {
            ul {
                li {
                    margin-bottom: 20px;
                    display: flex;
                    align-items: center;
                    a {
                        color: $gray-mid;
                        transition: ease 0.5s;
                    }
                    i {
                        color: $blue-light;
                        font-size: 8px;
                        vertical-align: middle;
                    }
                }
                li:hover {
                    a {
                        color: $blue-light;
                    }
                    i {
                        color: white;
                    }
                }
                li:last-child {
                    margin: 0;
                }
            }
        }
        .title {
            color: white;
            font-size: 19px;
            text-transform: uppercase;
            font-weight: bold;
            font-family: "Montserrat", sans-serif;
            margin-bottom: 50px;
            i {
                color: red;
                transform: rotate(45deg);
                vertical-align: bottom;
            }
        }
        .news {
            .input {
                form {
                    display: flex;
                }
                margin: 45px 0 10px 0;
                input[type="text"] {
                    width: 80%;
                    height: 40px;
                    border: 1px solid $gray-mid;
                    background-color: #181828;
                    font-family: "Source Sans Pro", sans-serif;
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
                color: #4a4b5b;
                sup {
                    color: $blue-light;
                }
            }
        }
        .recent {
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
                        margin-top: 5px;
                        font-size: 14px;
                        .day {
                            color: $blue-light;
                        }
                    }
                    .date:hover {
                        .comment {
                            i {
                                color: $blue-light;
                            }
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

@media (max-width: 992px) {
    .footer-head {
        flex-wrap: wrap;
        padding: 15px;
        .item {
            flex: 0 0 50% !important;
        }
    }
}
@media (max-width: 576px) {
    .footer-head {
        .item {
            flex: 0 0 100% !important;
        }
    }
}
</style>

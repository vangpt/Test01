<template>
    <div id="footer">
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
                                    <i class="fa fa-circle"></i>&nbsp;&nbsp;<a href="#"> General Information For Users</a>
                                </li>
                                <li>
                                    <i class="fa fa-circle"></i>&nbsp;&nbsp;<a href="#"> Interactive Fairy Tales</a></li>
                                <li>
                                    <i class="fa fa-circle"></i>&nbsp;&nbsp;<a href="#">  Official Storybook Maker Website</a>
                                </li>
                                <li><i class="fa fa-circle"></i>&nbsp;&nbsp;<a href="#"> Everyday Mathematics Links</a></li>
                                <li>
                                    <i class="fa fa-circle"></i>&nbsp;&nbsp;<a href="#"> Basic Knowledge and Experience</a>
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
                                            <i class="fa fa-comments" >15</i>
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
                                            <i class="fa fa-comments" >15</i>
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
                        <a href="#"><i class="fa fa-twitter" style="color: #16a7b9"></i></a>
                        <a href="#">
                            <i class="fa fa-facebook-official" 
                            style="color: #315bd6"></i>
                        </a>
                        <a href="#"
                            ><i class="fa fa-info-circle" aria-hidden="true" 
                            style="color: #16a7b9"></i
                        ></a>
                        <a href="#"><i class="fa fa-google-plus-square"
                        style="color: #f44336"></i></a>
                        <a href="#"><i class="fa fa-instagram" style="color: #786f4c"></i></a>
                        <a href="#"
                            ><i class="fa fa-youtube-play" style="color: red"></i
                        ></a>
                        <a href="#"><i class="fa fa-pinterest-p" style="color: #d53c33"></i></a>
                    </div>
                </div>
            </div>
            <div class="top-menu"><a href="#"><i class="fa fa-angle-up"></i></a></div>
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
        .footer-head {
            display: flex;
            margin-left: -20px;
            margin-right: -20px;
            font-family: 'Source Sans Pro', sans-serif;
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
                        font-family: 'Montserrat', sans-serif;
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
                        i{
                                color: $blue-light;
                                font-size: 8px;
                                vertical-align: middle;
                        }
                        
                    }
                    li:hover{
                        a{

                            color: $blue-light;
                        }
                        i{
                            color: white;   
                        }
                    }
                    li:last-child {
                        margin: 0;
                    }
                }
            }
            .title{
                color: white;
                font-size: 19px;
                text-transform: uppercase;
                font-weight: bold;
                font-family: 'Montserrat', sans-serif;
                margin-bottom: 50px;
                i {
                    color: red;
                    transform: rotate(45deg);
                    vertical-align: bottom;
                }
            }
            .news {
            
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
                        font-family: 'Source Sans Pro', sans-serif;
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
                        .date:hover{
                            .comment{
                                i{
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
    #footer-bottom {
        background-color: #181828;
        color: $gray-mid;
        font-size: 13px;
        border-top: 1px solid #798692;
        position: relative;
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
                a {
                    padding-left: 15px;
                    i {
                        font-size: 20px;
                    }
                }
            }
        }
        .top-menu{
            width: 50px;
            height: 50px;
            border-radius: 5px;
            background-color: rgba(44, 62, 80,.6);
            display:flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: -25px;
            right: 10%;
            i{
                font-size: 30px;
                color: white;
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
        ul{
            flex-direction: column;
            align-items: center;
            li{
                border-right: none !important;
                padding-top: 5px !important;
                padding-bottom: 5px !important;
            }
        }
    }   
}
</style>

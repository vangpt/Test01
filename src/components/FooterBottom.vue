<template>
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
                    <a href="#"
                        ><i class="fa fa-twitter" style="color: #16a7b9"></i
                    ></a>
                    <a href="#">
                        <i
                            class="fa fa-facebook-official"
                            style="color: #315bd6"
                        ></i>
                    </a>
                    <a href="#"
                        ><i
                            class="fa fa-info-circle"
                            aria-hidden="true"
                            style="color: #16a7b9"
                        ></i
                    ></a>
                    <a href="#"
                        ><i
                            class="fa fa-google-plus-square"
                            style="color: #f44336"
                        ></i
                    ></a>
                    <a href="#"
                        ><i class="fa fa-instagram" style="color: #786f4c"></i
                    ></a>
                    <a href="#"
                        ><i class="fa fa-youtube-play" style="color: red"></i
                    ></a>
                    <a href="#"
                        ><i class="fa fa-pinterest-p" style="color: #d53c33"></i
                    ></a>
                </div>
            </div>
        </div>
        <div class="top-menu">
            <a href="#"><i class="fa fa-angle-up"></i></a>
        </div>
    </div>
</template>

<script>
export default {
    name: "footer-botom"
};
</script>

<style lang="scss">
#footer-bottom {
    background-color: #181828;
    color: #798692;
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
                color: #16a7b9;
            }
        }
        ul {
            display: flex;
            li {
                border-right: 1px solid #798692;
                padding: 0 20px;
                a {
                    color: #798692;
                    transition: ease 0.5s;
                }
                a:hover {
                    color: #16a7b9;
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
    .top-menu {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        background-color: rgba(44, 62, 80, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -25px;
        right: 10%;
        i {
            font-size: 30px;
            color: white;
        }
    }
}

@media (max-width: 992px) {
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
    .footer-bottom {
        ul {
            flex-direction: column;
            align-items: center;
            li {
                border-right: none !important;
                padding-top: 5px !important;
                padding-bottom: 5px !important;
            }
        }
    }
}
</style>

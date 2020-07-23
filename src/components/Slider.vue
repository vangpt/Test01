<template>
    <div id="slider">
        <div class="array">
                <a href="#"><i class="fa fa-arrow-left"></i></a>
                <a href="#"><i class="fa fa-arrow-right"></i></a>
        </div>
        <div class="box">
            <img class="img-slide" src="../assets/imgs/background-slide.jpg" alt="" height="630">
            <div class="slider-content">
                <h1><span>the</span> gem.</h1>
                <h1><span>the</span> opportunity.</h1>
                <div class="desc">Step Forward, Lead The Innovation</div>
                <div class="button">
                    <button><i class="fa fa-diamond"></i> our services</button>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
export default {
    name: "slider",
};
</script>

<style lang="scss">
@import "../styles/varibles";
@import "../styles/mixin";
#slider{
    background-color: $background-slider;
    border-top: 1px solid #ced3d6;
    position: relative;
    .array{
        display:flex;
        justify-content: space-between;
        width: 100%;
        position:absolute;
        top: 50%;
        z-index: 2;
        transform: translateY(-50%);
        a{
            i{
                font-size: 30px;
            }
        }
    }
    .img-slide{
        width: 100%;
        height: auto;
    }
    .slider-content{
        max-width: 100%;
        width: 1250px;
        padding-left: 30px;
        padding-right: 30px;
        text-transform: uppercase;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 1;
        transform: translate(-50%, -50%);
        
        h1{
            color: $black-light;
            font-size: 4vw;
            padding:0;
            margin: 0;
            span{
                font-weight: 1;
            }
        }
        .desc{
            font-size: 1.5vw;
            margin-top: 50px;
            margin-bottom: 50px;
            color: #3c3950;
        }
        .button{
            button{
                @include custom-button(50px, 250px, $blue-light, 10px);
                text-transform: uppercase;
                font-weight:bold;
                font-size: 19px;
            }
            button:hover{
                background-color: $blue-dark;
            }
        }
        
    }
    
}
@media (max-width: 768px){
    .box{
        .slider-content{
            h1{
                font-size: 40px !important;
            }
            .desc{
                font-size: 16px !important;
                margin-top: 25px !important;
                margin-bottom: 25px !important;
            }
            .button{
                button{
                    width: 180px !important;
                    height: 30px !important;
                    font-size: 14px !important;
                }
            }
        }
    }
}

@media (max-width: 576px){
    .array{
        a{
            i{
                font-size: 15px !important;
            }
        }
    }
    .box{
        .slider-content{
            h1{
                font-size: 18px !important;
            }
            .desc{
                font-size: 13px !important;
                margin-top: 5px !important;
                margin-bottom: 5px !important;
            }
            .button{
                button{
                    width: 150px !important;
                    height: 20px !important;
                    font-size: 12px !important;
                }
            }
        }
    }
}
</style>

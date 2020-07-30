<template>
    <div id="slider">
        <img class="img-slide" src="../assets/imgs/background-slide.jpg" alt="" height="630">
        <div class="array-left">
                <a href="#"><img src="../assets/imgs/array-left.png" alt=""></a>
        </div>
        <div class="array-right">
            <a href="#"><img src="../assets/imgs/array-right.png" alt=""></a>
        </div>
        <div class="box">
            
            <div class="slider-content">
                <h1><span class="font-light">the</span><span class="font-weight"> gem.</span></h1>
                <h1><span class="font-light">the</span><span class="font-weight"> opportunity.</span></h1>
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
    border-top: 1px solid #ced3d6;
    position: relative;
    font-family: 'Montserrat', sans-serif;
    .array-right,
    .array-left {
        position: absolute;
        top: 50%;
        z-index: 2;
        transform: translateY(-50%);
        a {
            img {
                width: 30px;
            }
        }
    }
    .array-right {
        right: 20px;
    }
    .array-left {
        left: 20px;
    }

    .img-slide{
        width: 100%;
        height: auto;
    }
    .box{
        max-width: 1170px;
        width: 100%;
        margin:auto;
        text-transform: uppercase;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 1;
        transform: translate(-50%, -50%);
    }
    .slider-content{
        h1{
            color: #3c3950;
            font-size: 4vw;
            padding:0;
            margin: 0;
        }
        .desc{
            font-size: 1.5vw;
            margin-top: 50px;
            margin-bottom: 65px;
            color: #3c3950;
            font-weight: 200;
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

@media (max-width: 1200px){
    .box{
        .slider-content{
            margin-left: 30px;
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

@media (max-width: 768px){
    .box{
        .slider-content{
            h1{
                font-size: 30px !important;
            }
            .desc{
                
                margin-top: 15px !important;
                margin-bottom: 15px !important;
            }
        }
    }
}

@media (max-width: 576px){
    .array-left, .array-right{
        a{
            img{
                width: 20px !important;
            }
        }
    }
    .box{
        .slider-content{
            margin-left: 10px !important;
            h1{
                font-size: 16px !important;
            }
            .desc{
                font-size: 12px !important;
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

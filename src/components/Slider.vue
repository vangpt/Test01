<template>
    <div id="slider">
        <div id="array">
                <div>left</div>
                <div>right</div>
        </div>
        <div id="sliderContent" class="container">
            <h1><span>the</span> gem.</h1>
            <h1><span>the</span> opportunity.</h1>
            <div class="desc">Step Forward, Lead The Innovation</div>
            <div class="button">
                <button>our services</button>
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
    // position: relative;
    #array{
        display:flex;
        justify-content: space-between;
        width: 100%;
        position:absolute;
        top: 50%;
    }
    #sliderContent{
        padding: 100px 0;   
        text-transform: uppercase;
        h1{
            color: $black-light;
            font-size: 80px;
            padding:0;
            margin: 0;
            span{
                font-weight: 1;
            }
        }
        .desc{
            font-size: 24px;
            margin: 50px 0;
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
</style>

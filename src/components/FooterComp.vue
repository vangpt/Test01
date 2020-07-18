<template>
    <div id="footer">
        <div id="footer-head">
            <div class="container footer-head">
                <div class="foot-logo">
                    <div class="logo">
                        <img src="../assets/imgs/logo3.jpg" alt="" height="70px">
                        <div>the<br><b>gem</b></div>
                    </div>
                    <div class="desc">
                        Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio 
                    </div>
                </div>
                <div class="useful">
                    <div class="title">Useful links</div>
                    <ul>
                        <li><a href="#">Official Storybook Maker Website</a></li>
                        <li><a href="#">Official Storybook Maker Website</a></li>
                        <li><a href="#">Official Storybook Maker Website</a></li>
                        <li><a href="#">Official Storybook Maker Website</a></li>
                        <li><a href="#">Official Storybook Maker Website</a></li>
                    </ul>
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

#footer{
    #footer-head{
        background-color: #212331;
        .footer-head{
            .foot-logo{
                .logo{
                    display:flex;
                    div{
                        color:white;
                        font-size: 33px;
                        text-transform: uppercase;
                    }
                }   
                .desc{
                    color: $gray-mid;
                }
            }
            .useful{
                .title{
                    color:white;
                    font-size: 19px;
                    text-transform: uppercase;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>

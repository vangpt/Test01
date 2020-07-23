<template>
    <div id="home">
        <section id="qf">
            <div class="container">
                <div class="qf">
                    <div class="element" v-for="(item, index) in qf" :key="index">
                        <div class="item">
                            <div class="title">{{item.title}}</div>
                            <div class="content">{{item.content}}</div>
                            <div class="button">
                                <a :href="item.linkn"><button>Button</button></a>
                            </div>
                        </div>
                        <div class="icon">
                            <img :src="'../assets/imgs/' + item.image" alt="icon QF" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="counters">
            <div class="container">
                <div class="content-counters">
                    <div class="item" v-for="(element, index) in counters" :key="index">
                        <img src="../assets/imgs/counters-icon.png" />
                        <div class="number">{{element.number}}</div>
                        <div class="desc">{{element.desc}}</div>
                    </div>
                </div>
            </div>
        </section>
        <section id="why-choosing-us">
            <div class="container">
                <div class="content-wcu">
                    <h1>why <span>choosing us</span></h1>
                    <div class="box-article">
                        <article
                            v-for="(item, index) in wcu" :key="index"
                            :class="item.isBorder"
                        >
                            <img src="../assets/imgs/counters-icon.png" alt="" width="50px" height="50">
                            <div class="content">
                                <div class="title">
                                    {{item.title}}
                                </div>
                                <div class="desc">
                                    {{item.desc}} 
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </section>
        <section id="three-col">
            <div class="item">
                <div class="text">
                    <h1>01.</h1>
                    <h2>lorem <span>ipsun</span></h2>
                    <div>Duis sed odio sit amet nibh vulputate <br>cursus a sit amet mauris. Morbi </div>
                </div>
            </div>
            <div class="item">
                <div class="text">
                    <h1>02.</h1>
                    <h2>lorem <span>ipsun</span></h2>
                    <div>Duis sed odio sit amet nibh vulputate <br>cursus a sit amet mauris. Morbi </div>
                </div>
            </div>
            <div class="item">
                <div class="text">
                    <h1>03.</h1>
                    <h2>lorem <span>ipsun</span></h2>
                    <div>Duis sed odio sit amet nibh vulputate <br>cursus a sit amet mauris. Morbi </div>
                </div>
            </div>
            
        </section>
        <section id="our-case-studies">
            <div class="container">
                <div class="content-ocs">
                    <h1>our case <span>studies</span></h1>
                    <div class="desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    </div>
                    <ul class="options">
                        <li 
                            v-for="(item, index) in optionOurCaseStudies" :key="index"
                            @click="setActiveOption(index)"
                        >
                            {{item.text}}
                        </li>
                    </ul>
                    <div class="square" v-if="activeOption == 0">
                        <div class="row-1">
                            <div class="square-4"></div>
                            <div class="group-4-squares">
                                <div class="square-1"></div>
                                <div class="square-1"></div>
                                <div class="square-1"></div>
                                <div class="square-1"></div>
                            </div>
                        </div>
                        <div class="row-2">
                            <div class="square-1"></div>
                            <div class="square-1"></div>
                            <div class="square-2"></div>
                        </div>
                    </div>
                    <div class="square" v-if="activeOption == 1">
                        <div class="row-1">
                            <div class="group-4-squares">
                                <div class="square-1"></div>
                                <div class="square-1"></div>
                                <div class="square-1"></div>
                                <div class="square-1"></div>
                            </div>
                            <div class="square-4"></div>

                        </div>
                        <div class="row-2">
                            <div class="square-1"></div>
                            <div class="square-1"></div>
                            <div class="square-2"></div>
                        </div>
                    </div>
                    <div class="square" v-if="activeOption == 2">
                        <div class="row-2">
                            <div class="square-1"></div>
                            <div class="square-1"></div>
                            <div class="square-2"></div>
                        </div>
                        <div class="row-1">
                            <div class="square-4"></div>
                            <div class="group-4-squares">
                                <div class="square-1"></div>
                                <div class="square-1"></div>
                                <div class="square-1"></div>
                                <div class="square-1"></div>
                            </div>
                        </div>
                    </div>
                    <div class="square" v-if="activeOption == 3">
                        <div class="row-2">
                            <div class="square-1"></div>
                            <div class="square-1"></div>
                            <div class="square-2"></div>
                        </div>
                        <div class="row-1">
                            <div class="group-4-squares">
                                <div class="square-1"></div>
                                <div class="square-1"></div>
                                <div class="square-1"></div>
                                <div class="square-1"></div>
                            </div>
                            <div class="square-4"></div>
                        </div>
                    </div>
                    <div class="more-work">
                        <div class="row">
                        </div>
                        <div class="button">
                            <button>more work</button>
                        </div>
                        <div class="row">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="core-competence">
            <div class="core-head">
                <div class="container">
                    <h1>core <span>competence</span></h1>
                    <div class="desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    </div>
                </div>
                <div class="core-content">
                    <div class="bg-head">
                        <div class="box-left"></div>
                        <div class="box-right"></div>
                    </div>
                    <div class="bg-items">
                        <div class="container items">
                            <div class="item">

                                <img src="../assets/imgs/core-icon.png" alt="" height="125px">
                                <h2>consulting</h2>
                                <div class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                </div>
                                <div class="button">
                                    <button>learn more</button>
                                </div>
                            </div>
                            <div class="item">
                                <img src="../assets/imgs/core-icon.png" alt="" height="125px">
                                <h2>consulting</h2>
                                <div class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                </div>
                                <div class="button">
                                    <button>learn more</button>
                                </div>
                            </div>
                            <div class="item ">
                                <img src="../assets/imgs/core-icon.png" alt="" height="125px">
                                <h2>consulting</h2>
                                <div class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                </div>
                                <div class="button">
                                    <button>learn more</button>
                                </div>
                            </div>
                            <div class="item">
                                <img src="../assets/imgs/core-icon.png" alt="" height="125px">
                                <h2>consulting</h2>
                                <div class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                </div>
                                <div class="button">
                                    <button>learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section id="testtimonials">
            <div class="container content-test">
                <div class="content-test">
                    <img src="../assets/imgs/counters-icon.png" alt="">
                    <div class="name">Jeniffer Burns</div>
                    <div class="short-desc">Creative Heads Inc.</div>
                    <div class="long-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    </div>
                    <div class="icon">"</div>
                </div>
            </div>
        </section>
        <section id="pricing">
            <div class="container">
                <div class="content-pri">
                    <h1 class="title">pricing <span>table</span></h1>
                    <div class="desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    </div>
                    <div class="items">
                        <div class="item" 
                            v-for="(element, index) in pricing" :key="index"
                            :class="element.color"
                        >
                            <div class="box">
                                <div class="new" v-if="element.isNew">new</div>
                                <div class="item-title">
                                    <div>
                                        {{element.title}}  
                                    </div>
                                    <p v-show="element.desc">{{element.desc}}</p>
                                </div>
                                <div class="item-price">
                                    <div class="price">{{element.price}}</div>
                                    <div>{{element.per}}</div>
                                </div>
                                <ul>
                                    <li 
                                        v-for="(list, index) in element.lists" :key="index"
                                        :class="list.isLineThrough"
                                    >
                                        {{list.content}}
                                    </li>
                                </ul>
                                <button>order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="ad">
            <div class="container">
                <div class="ad">
                    <div class="logo">the <img src="../assets/imgs/logo2.jpg" alt="" width="70px;"> gem</div>
                    <div class="desc">Lorem ipsum dolor sit ametcon, consectetur adipisicing elit</div>
                    <div class="btn">
                        <button>great, i want to buy now</button>

                    </div>
                </div>
            </div>
        </section>
        <section id="open-vacanies">
            <div class="container">
                <div class="box">
                    <div class="open-vacanies">
                        <div class="teams">
                            <div class="title">out teams</div>
                            <div class="item" 
                                v-for="(element, index) in teams" :key="index"
                            >
                                <div class="avatar">
                                    <img src="../assets/imgs/counters-icon.png" alt="" height="80px">
                                </div>
                                <div class="info">
                                    <div>{{element.name}}</div>
                                    <div>{{element.desc}}</div>
                                    <div>{{element.phone}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="vacanies">
                            <div class="title">open vacanies</div>
                            <div class="position">
                                <ul>
                                    <li 
                                        v-for="(item, index) in positions" 
                                        :key="index"
                                        :class="{active: activePosition == index}"
                                        @click="setPositionActive(index)"
                                    >
                                        <button>{{item.text}}</button>
                                    </li>
                                </ul>
                            </div>
                            <div class="desc"  
                                v-for="(element, index) in descPosition"
                                :key="index"
                                v-if="activePosition === index">
                                <div class="detail">
                                    <img src="../assets/imgs/background-gray.jpg" alt="" width="350" height="230">
                                    <div class="more-detail">
                                        <div class="more-detail-title">
                                            {{element.title}}
                                        </div>
                                        <div class="more-detail-desc">
                                            {{element.description}}
                                        </div>
                                    </div>
                                </div>
                                <div class="list-item">
                                        <ul>
                                            <li v-for="(item, index) in element.lists" :key="index"><i class="fa fa-square"></i> {{item.text}}</li>
                                            
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="contact-us">
            <div class="container">
                <div class="contact-us">
                    <div class="item">
                        <img src="../assets/imgs/contact-icon.jpg" alt="">
                        <div class="title">contact us</div>
                        <div class="list">
                            info@domain.ltd <br>
                            thegem@domain.ltd <br>
                            www.codex-themes.com
                        </div>
                    </div>
                    <div class="item">
                        <img src="../assets/imgs/contact-icon.jpg" alt="">
                        <div class="title">contact us</div>
                        <div class="list">
                            info@domain.ltd <br>
                            thegem@domain.ltd <br>
                            www.codex-themes.com
                        </div>
                    </div>
                    <div class="item">
                        <img src="../assets/imgs/contact-icon.jpg" alt="">
                        <div class="title">contact us</div>
                        <div class="list">
                            info@domain.ltd <br>
                            thegem@domain.ltd <br>
                            www.codex-themes.com
                        </div>
                    </div>
                    <div class="item">
                        <img src="../assets/imgs/contact-icon.jpg" alt="">
                        <div class="title">contact us</div>
                        <div class="list">
                            info@domain.ltd <br>
                            thegem@domain.ltd <br>
                            www.codex-themes.com
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-head">
                    <div class="box-left"></div>
                    <div class="box-right"></div>
            </div>
        </section>
    </div>
   
</template>

<script>
export default {
    name: "home",
    data(){
        return{
            qf:[
                {
                    title: "Lorem input dolor sit",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    link: "#",
                    image: "qf-icon.png"
                },
                {
                    title: "Lorem input dolor sit",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    link: "#",
                    image: "qf-icon.png"
                },
                {
                    title: "Lorem input dolor sit",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    link: "#",
                    image: "qf-icon.png"
                }
            ],
            counters:[
                {
                    number: 2189,
                    desc: "Support Ports"
                },
                {
                    number: 123,
                    desc: "Customers"
                },
                {
                    number: 4789,
                    desc: "Lorem Ipsum Dolor"
                },
                {
                    number: 502,
                    desc: "Lorem Ipsum Dolor"
                },
            ],
            wcu:[
                {
                    title: "LOREM INPUT",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    isBorder: 'none-border'
                },
                {
                    title: "LOREM INPUT",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    isBorder: 'none-border'
                },
                {
                    title: "LOREM INPUT",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    isBorder: 'none-border'
                },
                {
                    title: "LOREM INPUT",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    title: "LOREM INPUT",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    title: "LOREM INPUT",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
            ],
            pricing:[
                {
                    title: "master1",
                    price: "100$",
                    per: "per month",
                    desc: "",
                    isNew: false,
                    color: "item-background-blue",
                    lists: [
                        {
                            content: "Photo sharing school",
                            isLineThrough: 'line-through'
                        },
                        {
                            content: "Photo sharing school",
                            isLineThrough: 'line-through'
                        },
                        {
                            content: "Photo sharing school",
                            isLineThrough: 'line-through'
                        },
                        {
                            content: "Photo sharing school",
                        },
                        {
                            content: "Photo sharing school",
                        },
                        {
                            content: "Photo sharing school",
                        },
                    ]
                    
                },
                {
                    title: "master1",
                    price: "100$",
                    per: "per month",
                    desc: "The best price/quantity plan",
                    isNew: true,
                    color: "item-background-green",
                    lists: [
                        {
                            content: "Photo sharing school",
                            isLineThrough: 'line-through'
                        },
                        {
                            content: "Photo sharing school",
                            isLineThrough: 'line-through'
                        },
                        {
                            content: "Photo sharing school",
                            isLineThrough: 'line-through'
                        },
                        {
                            content: "Photo sharing school",
                        },
                        {
                            content: "Photo sharing school",
                        },
                        {
                            content: "Photo sharing school",
                        },
                    ]
                    
                },
                {
                    title: "master1",
                    price: "100$",
                    per: "per month",
                    desc: "",
                    isNew: false,
                    color: "item-background-blue-dark",
                    lists: [
                        {
                            content: "Photo sharing school",
                            isLineThrough: 'line-through'
                        },
                        {
                            content: "Photo sharing school",
                            isLineThrough: 'line-through'
                        },
                        {
                            content: "Photo sharing school",
                            isLineThrough: 'line-through'
                        },
                        {
                            content: "Photo sharing school",
                        },
                        {
                            content: "Photo sharing school",
                        },
                        {
                            content: "Photo sharing school",
                        },
                    ]
                    
                },
                {
                    title: "master1",
                    price: "100$",
                    per: "per month",
                    desc: "The best price/quantity plan",
                    isNew: true,
                    color: "item-background-purple",
                    lists: [
                        {
                            content: "Photo sharing school",
                            isLineThrough: 'line-through'
                        },
                        {
                            content: "Photo sharing school",
                            isLineThrough: 'line-through'
                        },
                        {
                            content: "Photo sharing school",
                            isLineThrough: 'line-through'
                        },
                        {
                            content: "Photo sharing school",
                        },
                        {
                            content: "Photo sharing school",
                        },
                        {
                            content: "Photo sharing school",
                        },
                    ]
                    
                },
            ],
            teams:[
                {
                    name: "DD Tung",
                    desc: "Senior Sales Manager",
                    phone: "+1 (987) 1625346"
                },
                {
                    name: "Emerson Anderson",
                    desc: "Senior Sales Manager",
                    phone: "+1 (987) 1625346"
                },
                {
                    name: "Emerson Anderson",
                    desc: "Senior Sales Manager",
                    phone: "+1 (987) 1625346"
                },
            ],
            positions:[
                {text: 'web designer'},
                {text: 'manager'},
                {text: 'programer'},
                {text: 'support staff'}
            ],
            activePosition: 0,
            descPosition: [
                {
                    title: "web designer",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ",
                    lists:[
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"}
                    ]
                },
                {
                    title: "manager",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    lists:[
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"}
                    ]
                },
                {
                    title: "programer",
                    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ",
                    lists:[
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"}
                    ]
                },
                {
                    title: "support staff",
                    description: "Lorem ipsum dolor sit ametUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    lists:[
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"},
                        {text: "Lorem ipsum dolor sit amet, consectetur"}
                    ]
                },
            ],
            optionOurCaseStudies:[
                {text: "all"},
                {text: "active but"},
                {text: "hover but"},
                {text: "caregory 3"}
            ],
            activeOption: 0
        }
    },
    methods:{
        setPositionActive(index){
            this.activePosition = index;
        },
        setActiveOption(index){
            this.activeOption = index;
        }
    }
}

</script>

<style lang="scss">
@import "../styles/home";
</style>

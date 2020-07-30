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
                                <button></button>
                            </div>
                        </div>
                        <div class="icon">
                            <img :src="require(`../assets/imgs/qf/${item.image}`)" alt="icon QF" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="counters">
            <div class="container">
                <div class="content-counters">
                    <div class="item">
                        <div class="box">
                            <div class="box-child">
                                <img src="../assets/imgs/counters/compa.png" alt="">
                            </div>
                        </div>
                        <div class="number">2189</div>
                        <div class="desc">Support Posts</div>
                    </div>
                    <div class="item">
                        <div class="box">
                            <div class="box-child">
                                <img src="../assets/imgs/counters/man.png" alt="">
                            </div>
                        </div>
                        <div class="number">125</div>
                        <div class="desc">Customers</div>
                    </div>
                    <div class="item">
                        <div class="box">
                            <div class="box-child">
                                <img src="../assets/imgs/counters/hv.png" alt="">
                            </div>
                        </div>
                        <div class="number">4789</div>
                        <div class="desc">Lorem Ipsum Dolor</div>
                    </div>
                    <div class="item">
                        <div class="box">
                            <div class="box-child">
                                <img src="../assets/imgs/counters/kimtiem.png" alt="">
                            </div>
                        </div>
                        <div class="number">502</div>
                        <div class="desc">Lorem Ipsum Dolor</div>
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
                            <div class="icon"></div>
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
                    <h2>01.</h2>
                    <div class="title"><span>lorem</span> ipsun</div>
                    <div class="desc">Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi </div>
                </div>
            </div>
            <div class="item">
                <div class="text">
                    <h2>02.</h2>
                    <div class="title"><span>left side</span> aligning</div>
                    <div class="desc">Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi </div>
                </div>
            </div>
            <div class="item">
                <div class="text">
                    <h2>03.</h2>
                    <div class="title"><span>Cursus</span> mauris</div>
                    <div class="desc">Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi </div>
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
                            :class="{active: activeOption == index}"
                        >
                            {{item.text}}
                        </li>
                    </ul>
                    <!-- <img src="../assets/imgs/squares.jpg" alt=""> -->
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
                            <button>more works</button>
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

                                <img src="../assets/imgs/core/bongden.png" alt="" height="125px">
                                <h2>consulting</h2>
                                <div class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                </div>
                                <div class="button">
                                    <button>learn more</button>
                                </div>
                            </div>
                            <div class="item">
                                <img src="../assets/imgs/core/HCN.png" alt="" height="125px">
                                <h2>programming</h2>
                                <div class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                </div>
                                <div class="button">
                                    <button>learn more</button>
                                </div>
                            </div>
                            <div class="item ">
                                <img src="../assets/imgs/core/phone.png" alt="" height="125px">
                                <h2>development</h2>
                                <div class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                </div>
                                <div class="button">
                                    <button>learn more</button>
                                </div>
                            </div>
                            <div class="item">
                                <img src="../assets/imgs/core/cups.png" alt="" height="125px">
                                <h2>marketing</h2>
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
            <div class="array-left">
                    <a href="#"><img src="../assets/imgs/array-left.png" alt=""></a>
                </div>
                <div class="array-right">
                    <a href="#"><img src="../assets/imgs/array-right.png" alt=""></a>
                </div>
            <div class="box">
                <img class="img-slide" src="../assets/imgs/background-slide.jpg" alt="" height="630">
                <div class="content-test">
                    <img src="../assets/imgs/img-testtimonials.png" alt="">
                    <div class="name">Jeniffer Burns</div>
                    <div class="short-desc">Creative Heads Inc.</div>
                    <div class="long-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcp 
                    </div>
                    <img class="icon" src="../assets/imgs/icon-testtimonials.png" alt="">
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
                                    <div class="title-table">
                                        {{element.title}}  
                                    </div>
                                    <div class="short-desc" v-show="element.desc">{{element.desc}}</div>
                                </div>
                                <div class="item-price">
                                    <div class="price">{{element.price}}</div>
                                    <div class="per">{{element.per}}</div>
                                </div>
                                <ul>
                                    <li 
                                        v-for="(list, index) in element.lists" :key="index"
                                        :class="list.isLineThrough"
                                    >
                                        {{list.content}}
                                    </li>
                                </ul>
                                <button><i class="fa fa-caret-right"></i> order</button>
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
                        <button>great, i want to buy now !</button>
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
                                    <img src="../assets/imgs/img-testtimonials.png" alt="" height="80px">
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
                            <template v-for="(element, index) in descPosition">
                                <div v-if="activePosition == index" class="desc"  :key="index" >
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
                                                <li v-for="(item, index) in element.lists" :key="index"><i class="fa fa-square"></i>&nbsp;&nbsp;&nbsp;{{item.text}}</li>
                                                
                                            </ul>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="contact-us">
            <div class="container">
                <div class="contact-us">
                    <div class="item">
                        <img src="../assets/imgs/contact/address.png" alt="">
                        <div class="title">address</div>
                        <div class="list">
                            908 New Hampshire Avenue <br>
                            Northwest #100, Washington, DC<br>
                            20037, United States
                        </div>
                    </div>
                    <div class="item">
                        <img src="../assets/imgs/contact/iphones.png" alt="">
                        <div class="title">phone</div>
                        <div class="list">
                            Phone:  +1 916-875-2235<br>
                            Mobile: +1 916-875-2235<br>
                            Fax: +1 916-875-2235
                        </div>
                    </div>
                    <div class="item">
                        <img src="../assets/imgs/contact/contact.png" alt="">
                        <div class="title">contacts</div>
                        <div class="list">
                            info@domain.ltd <br>
                            thegem@domain.ltd <br>
                            www.codex-themes.com
                        </div>
                    </div>
                    <div class="item">
                        <img src="../assets/imgs/contact/clocks.png" alt="">
                        <div class="title">working hours</div>
                        <div class="list">
                            Monday - Friday: 9.00 - 18.00 <br>
                            Saturday: 11:00 - 17.00 <br>
                            Sunday: Closed
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
                    title: "Lorem ipsum dolor sit",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    link: "#",
                    image: "icons.png",
                },
                {
                    title: "Lorem ipsum dolor sit",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    link: "#",
                    image: "bags.png"
                },
                {
                    title: "Lorem ipsum dolor sit",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    link: "#",
                    image: "tivi.png"
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
                    title: "beginner",
                    price: "$10",
                    per: "per month",
                    desc: "",
                    isNew: false,
                    color: "item-background-blue",
                    lists: [
                        {
                            content: "Photo sharing school",
                            
                        },
                        {
                            content: "Drop out ramen hustle",
                            
                        },
                        {
                            content: "Coworking viral landing",
                            
                        },
                        {
                            content: "Crush revenue traction",
                            isLineThrough: 'line-through'
                        },
                        {
                            content: "User base minimum viable",
                            isLineThrough: 'line-through'
                        },
                        {
                            content: "Lorem ipsum dolor",
                            isLineThrough: 'line-through'
                        },
                    ]
                    
                },
                {
                    title: "advanced",
                    price: "$45",
                    per: "per month",
                    isNew: false,
                    color: "item-background-green",
                    lists: [
                        {
                            content: "Photo sharing school",
                            
                        },
                        {
                            content: "Drop out ramen hustle",
                            
                        },
                        {
                            content: "Coworking viral landing",
                            
                        },
                        {
                            content: "Crush revenue traction",
                            isLineThrough: 'line-through'
                        },
                        {
                            content: "User base minimum viable",
                            isLineThrough: 'line-through'
                        },
                        {
                            content: "Lorem ipsum dolor",
                            isLineThrough: 'line-through'
                        },
                    ]
                    
                },
                {
                    title: "master",
                    price: "100$",
                    per: "per month",
                    desc: "The best price/quantity plan",
                    isNew: true,
                    color: "item-background-blue-dark",
                    lists: [
                        {
                            content: "Photo sharing school",
                            
                        },
                        {
                            content: "Drop out ramen hustle",
                            
                        },
                        {
                            content: "Coworking viral landing",
                            
                        },
                        {
                            content: "Crush revenue traction",
                            isLineThrough: 'line-through'
                        },
                        {
                            content: "User base minimum viable",
                            isLineThrough: 'line-through'
                        },
                        {
                            content: "Lorem ipsum dolor",
                            isLineThrough: 'line-through'
                        },
                    ]
                    
                },
                {
                    title: "insane",
                    price: "$1399",
                    per: "per month",
                    desc: "",
                    isNew: false,
                    color: "item-background-purple",
                    lists: [
                        {
                            content: "Photo sharing school",
                            
                        },
                        {
                            content: "Drop out ramen hustle",
                            
                        },
                        {
                            content: "Coworking viral landing",
                            
                        },
                        {
                            content: "Crush revenue traction",
                            isLineThrough: 'line-through'
                        },
                        {
                            content: "User base minimum viable",
                            isLineThrough: 'line-through'
                        },
                        {
                            content: "Lorem ipsum dolor",
                            isLineThrough: 'line-through'
                        },
                    ]
                    
                },
            ],
            teams:[
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
                {text: "hover but"},
                {text: "active but"},
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

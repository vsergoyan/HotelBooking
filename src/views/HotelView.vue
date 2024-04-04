<template>
    <div>
        <!-- header -->
        <header class="header" id="header">
            <div class="head-top">
                <div class="site-name">
                    <span>Hotel Name</span>
                </div>
                <div class="site-nav">
                    <span id="nav-btn">ՄԵՆՅՈւ <i class="fas fa-bars"></i></span>
                </div>
            </div>

            <div class="head-bottom flex">
                <h2>ՀՐԱՇՔ ԵՎ ՀԱՐՄԱՐԱՎԵՏ ՀԱՆԳՍՏԻ ՀԱՄԱՐ</h2>
                <p>Բարի գալուստ Hotel Name! Զգացեք շքեղության և նրբագեղության մարմնացում մեր բացառիկ վայրում: Զգացեք շքեղության և նրբագեղության մարմնացում մեր բացառիկ վայրում, որտեղ յուրաքանչյուր պահ ստեղծված է գերազանցելու ձեր սպասելիքները:</p>
                <button type="button" class="head-btn">ՍԿՍԵԼ</button>
            </div>
        </header>
        <!-- end of header -->

        <!-- side navbar -->
        <div class="sidenav" id="sidenav">
            <span class="cancel-btn" id="cancel-btn">
                <i class="fas fa-times"></i>
            </span>

            <ul class="navbar">
                <li><a href="#header">գլխավոր</a></li>
                <li><a href="#services">ծառայություններ</a></li>
                <li><a href="#rooms">սենյակներ</a></li>
                <li><a href="#customers">կարծիքներ</a></li>
                <li><a href="#contacts">կոնտակտներ</a></li>
                <li><a href="indexeng.html">EN</a></li>
            </ul>
            <button class="btn sign-up">գրանցվել</button>
            <button class="btn log-in">մուտք գործել</button>
        </div>
        <!-- end of side navbar -->

        <!-- fullscreen modal -->
        <div id="modal"></div>
        <!-- end of fullscreen modal -->

        <!-- body content -->
        <section class="services sec-width" id="services">
            <div class="title">
                <h2>ծառայություններ</h2>
            </div>
            <div class="services-container">
                <!-- single service -->
                <article class="service">
                    <div class="service-icon">
                        <span>
                            <i class="fas fa-utensils"></i>
                        </span>
                    </div>
                    <div class="service-content">
                        <h2>Սննդի Ցանց</h2>
                        <p>Սկսեք ձեր օրը ճոխ նախաճաշով, որը պարունակում է թարմ մրգերի, խմորեղենի և համեղ ուտեստների տեսականի: Անկախ նրանից, թե դուք նախընտրում եք առատ նախաճաշ կամ թեթև, առողջարար տարբերակ, մեր խոհանոցն ունի ցանկացածը Ձեզ գոհացնելու համար:</p>
                        <button type="button" class="btn">Ավելին</button>
                    </div>
                </article>
                <!-- end of single service -->
                <!-- single service -->
                <article class="service">
                    <div class="service-icon">
                        <span>
                            <i class="fas fa-swimming-pool"></i>
                        </span>
                    </div>
                    <div class="service-content">
                        <h2>Թարմացում</h2>
                        <p>Մեր հյուրանոցում մենք հասկանում ենք հանգստի և երիտասարդացման կարևորությունը: Ահա թե ինչու մենք առաջարկում ենք թարմացնող հարմարությունների շարք՝ ձեր հանգիստը բարելավելու և ձեր զգայարանները աշխուժացնելու համար: Բարձրացրեք Ձեր հանգիստը մեր թարմացվող ծառայությունների միջոցով:</p>
                        <button type="button" class="btn">Ավելին</button>
                    </div>
                </article>
                <!-- end of single service -->
                <!-- single service -->
                <article class="service">
                    <div class="service-icon">
                        <span>
                            <i class="fas fa-broom"></i>
                        </span>
                    </div>
                    <div class="service-content">
                        <h2>Մաքրություն</h2>
                        <p>Զգացեք հարմարավետություն մեր մաքրության ծառայության հետ։ Մեր հյուրանոցում մենք հյուրերին տրամադրում ենք մաքրություն և հարմարավետություն: Մեր նվիրված մաքրության թիմն առանց ջանք խնայելու աշխատում է ապահովել, որ ձեր կեցության յուրաքանչյուր կողմը գերազանցի ձեր սպասելիքները՝ ձեր սենյակ մտնելու պահից մինչև հրաժեշտի պահը:</p>
                        <button type="button" class="btn">Ավելին</button>
                    </div>
                </article>
                <!-- end of single service -->
                <!-- single service -->
                <article class="service">
                    <div class="service-icon">
                        <span>
                            <i class="fas fa-door-closed"></i>
                        </span>
                    </div>
                    <div class="service-content">
                        <h2>Ապահովություն</h2>
                        <p>Ձեր անվտանգությունը մեր առաջնահերթությունն է: Սենյակի անվտանգության ծառայությունը լավագույնս: Մեր ժամանակակից անվտանգության համակարգերը նախագծված են ձեզ և ձեր իրերի առավելագույն պաշտպանությունն ապահովելու համար: Մեր հատուկ անվտանգության թիմը վերահսկում է տարածքը շուրջօրյա՝ անհապաղ լուծելու ցանկացած մտահոգություն կամ արտակարգ իրավիճակ, որը կարող է առաջանալ:</p>
                        <button type="button" class="btn">Ավելին</button>
                    </div>
                </article>
                <!-- end of single service -->
            </div>
        </section>

        <section class="rooms sec-width" id="rooms">
            <div class="title">
                <h2>սենյակներ</h2>
            </div>
            <div class="rooms-container">
                <!-- single room -->
                <article class="room">
                    <div class="room-image">
                        <img src="../assets/hotel_img1.jpg" alt="room image">
                    </div>
                    <div class="room-text">
                        <h3>Ստանդարտ Սենյակներ</h3>
                        <ul>
                            <li>
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                Հարմարավետ մահճակալ։
                            </li>
                            <li>
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                Առանձին լոգարան։
                            </li>
                            <li>
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                Հիմնական կահավորանք։
                            </li>
                        </ul>
                        <p>Ստանդարտ սենյակները հարմար են միայնակ ճանապարհորդների, զույգերի կամ փոքր ընտանիքների համար, ովքեր փնտրում են հարմարավետ և մատչելի հանգիստ:</p>
                        <p class="rate">
                            <span>39800.00֏ /</span> Գիշեր
                        </p>
                        <button type="button" class="btn">ամրագրել</button>
                    </div>
                </article>
                <!-- end of single room -->
                <!-- single room -->
                <article class="room">
                    <div class="room-image">
                        <img src="../assets/hotel_room3.jpg" alt="room image">
                    </div>
                    <div class="room-text">
                        <h3>Լյուքս Սենյակներ</h3>
                        <ul>
                            <li>
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                Բարձրակարգ անկողին։
                            </li>
                            <li>
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                Բարելավված լոգարան։
                            </li>
                            <li>
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                Արդիականացված կահավորանք։
                            </li>
                        </ul>
                        <p>Իդեալական է այն հյուրերի համար, ովքեր փնտրում են լրացուցիչ հարմարավետություն, գաղտնիություն և ավելի ներողամիտ հյուրանոցային փորձ:</p>
                        <p class="rate">
                            <span>60300.00֏ /</span> Գիշեր
                        </p>
                        <button type="button" class="btn">ամրագրել</button>
                    </div>
                </article>
                <!-- end of single room -->
                <!-- single room -->
                <article class="room">
                    <div class="room-image">
                        <img src="../assets/hotel_room4.jpg" alt="room image">
                    </div>
                    <div class="room-text">
                        <h3>Ընտանեկան Սենյակներ</h3>
                        <ul>
                            <li>
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                Մուտք մասնավոր լաունջ։
                            </li>
                            <li>
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                Առաջնահերթ մուտք/ելք։
                            </li>
                            <li>
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                Բիզնես օբյեկտների հասանելիություն 
                            </li>
                        </ul>
                        <p>Իդեալական է ճանապարհորդների համար, ովքեր փնտրում են ավելի բարձր մակարդակի սպասարկում և հարմարություններ իրենց գտնվելու ընթացքում:</p>
                        <p class="rate">
                            <span>200500.00֏ /</span> Գիշեր
                        </p>
                        <button type="button" class="btn">ամրագրել</button>
                    </div>
                </article>
                <!-- end of single room -->
            </div>
        </section>    

        <section class="customers" id="customers">
            <div class="sec-width">
                <div class="title">
                    <h2>կարծիքներ</h2>
                </div>
                <div class="customers-container">
                    <!-- single customer -->
                    <div class="customer">
                        <div class="rating">
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="far fa-star"></i></span>
                        </div>
                        <h3>Մենք Սիրեցինք</h3>
                        <p>Բացարձակապես ֆանտաստիկ կացություն: Մեր ժամանման պահից մեզ դիմավորեցին ջերմ ժպիտներով և բացառիկ սպասարկումով: Սենյակն անթերի էր:</p>
                        <img src="../assets/cus1.jpg" alt="customer image">
                        <span>Ֆրանցեսկա Ռիչի, ԱՄՆ</span>
                    </div>
                    <!-- end of single customer -->
                    <!-- single customer -->
                    <div class="customer">
                        <div class="rating">
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="far fa-star"></i></span>
                        </div>
                        <h3>Հարմարավետ է</h3>
                        <p>Ընդհանուր առմամբ, մեր հանգիստը հաճելի էր: Սենյակը մաքուր էր և հարմարավետ: Անձնակազմը բարեհամբույր և ըմբռնող էր, վայրը հարմար էր:</p>
                        <img src="../assets/cus2.jpg" alt="customer image">
                        <span>Լյուսի Ուայթ, Գերմանիա</span>
                    </div>
                    <!-- end of single customer -->
                    <!-- single customer -->
                    <div class="customer">
                        <div class="rating">
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="far fa-star"></i></span>
                        </div>
                        <h3>Հիանալի Վայր</h3>
                        <p>Հաճախորդների սպասարկումը բացառիկ էր, անձնակազմի անդամները միշտ պատրաստ էին օգնել ցանկացած հարցում: Սենյակը ընդարձակ էր և լավ կահավորված։</p>
                        <img src="../assets/cus3.jpg" alt="customer image">
                        <span>Թոմ Թեյլոր, Իտալիա</span>
                    </div>
                    <!-- end of single customer -->
                </div>
            </div>
        </section>
        <!-- end of body content -->

        <!-- foote -->
        <section id="contacts">
            <footer class="footer">
                <div class="footer-container">
                    <div>
                        <h2>Մեր Մասին</h2>
                        <p>Մենք հավատում ենք յուրաքանչյուր հյուրի համար անմոռանալի փորձառություններ ստեղծելուն: Մեր հյուրանոցը մարմնավորում է շքեղության և հարմարավետության կատարյալ խառնուրդ: Մեր անթերի ձևավորված սենյակներից մինչև մեր համաշխարհային կարգի հարմարություններն ու բացառիկ սպասարկումը, մենք ամեն քայլափոխի ձգտում ենք գերազանցել սպասելիքները:</p>
                        <ul class="social-icons">
                            <li class="flex">
                                <i class="fa fa-twitter fa-2x"></i>
                            </li>
                            <li class="flex">
                                <i class="fa fa-facebook fa-2x"></i>
                            </li>
                            <li class="flex">
                                <i class="fa fa-instagram fa-2x"></i>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2>Օգտակար Հղումներ</h2>
                        <a href="#">Blog</a>
                        <a href="#">Rooms</a>
                        <a href="#">Subscription</a>
                        <a href="#">Gift Card</a>
                    </div>

                    <div>
                        <h2>Գաղտնիություն</h2>
                        <a href="#">Career</a>
                        <a href="#">About Us</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Services</a>
                    </div>

                    <div>
                        <h2>Ունե՞ք Հարցեր</h2>
                        <div class="contact-item">
                            <span>
                                <i class="fas fa-map-marker-alt"></i>
                            </span>
                            <span>
                                203 Fake St.Mountain View, San Francisco, California, USA
                            </span>
                        </div>
                        <div class="contact-item">
                            <span>
                                <i class="fas fa-phone-alt"></i>
                            </span>
                            <span>
                                +374 77 009 009
                            </span>
                        </div>
                        <div class="contact-item">
                            <span>
                                <i class="fas fa-envelope"></i>
                            </span>
                            <span>
                                info@hotel.com
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
        <!-- end of footer -->
    </div>
</template>

<script>
    export default {
        name: "HotelView",
    }
</script>

<style scoped>
.btn{
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    padding: 10px;
    width: 140px;
    display: block;
    margin: 15px auto;
    cursor: pointer;
    transition: var(all 0.7s ease);
}
.btn:hover{
    opacity: 0.85;
}
.flex{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h1, h2, h3, h4, h5, h6{
    padding: 8px 0;
}
img{
    width: 100%;
    display: block;
}
@media(max-width: 500px){
    body{
        font-size: 14px;
    }
}

/* header */
.header{
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url(../assets/hotel_view.jpg) center/cover no-repeat;
    min-height: 100vh;
    color: #fff;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}
.head-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.head-top span{
    cursor: pointer;
    letter-spacing: 2px;
    transition: var(all 0.7s ease);
}
.head-top span:hover{
    color: var(#f9d342);
}
.head-bottom{
    flex: 1;
    text-align: center;
    width: 80vw;
    margin: 0 auto;
}
.head-bottom h2{
    padding: 22px 0;
    font-size: 45px;
    border-bottom: 1px solid #fff;
}
.head-bottom p{
    opacity: 0.7;
    font-size: 20px;
    margin: 45px auto;
    width: 60vw;
}
.head-btn{
    margin: 20px 0;
    font-size: 20px;
    font-weight: bold;
    border: 3px solid #fff;
    background: transparent;
    padding: 13px 20px;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    cursor: pointer;
    transition: var(all 0.7s ease);
}
.head-btn:hover{
    background: transparent;
}
@media(max-width: 500px){
    .head-btn{
        font-size: 17px;
    }
    .head-bottom h2{
        font-size: 28px;
    }
    .head-bottom p{
        font-size: 17px;
        margin: 20px auto;
    }
}

/* side nav */
.sidenav{
    background: var(#292826);
    color: #fff;
    position: fixed;
    top: 0;
    bottom: 0;
    right: -100%;
    width: 300px;
    padding: 20px;
    transition: var(all 0.7s ease);
    z-index: 10;
}

/********/
.sidenav.show{
    right: 0;
}
/*************/
.cancel-btn{
    position: absolute;
    right: 25px;
    font-size: 22px;
    cursor: pointer;
    transition: var(all 0.7s ease);
}
.cancel-btn:hover{
    opacity: 0.7;
}
.navbar{
    margin-top: 50px;
    list-style: none;
    padding: 12px;
}
.navbar li a{
    color: #fff;
    text-transform: capitalize;
    text-decoration: none;
    padding: 15px 0;
    display: flex;
    border-bottom: 0.5px solid rgba(249, 211, 66, 0.3);
    opacity: 0.8;
    letter-spacing: 1.5px;
    transition: var(all 0.7s ease);
}
.navbar li a:hover{
    padding-left: 12px;
}
.sign-up, .log-in{
    background: var(#f9d342);
    color: #fff;
}
@media(max-width: 400px){
    .sidenav{
        width: 100vw;
    }
}

/** title */
.title{
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 30px;
    color: var(#f9d342);
    border-bottom: 5px solid var(#292826);
    width: 235px;
    margin: 15px 0;
}

.sec-width{
    width: 85vw;
    margin: 0 auto!important;
}

/* service */
.services{
    margin: 40px 0;
}
.service{
    display: flex;
    margin: 30px 0;
}
.service-icon{
    flex: 30%;
    align-self: flex-start;
    font-size: 48px;
    color: #252525;
}
.service-content{
    padding-left: 20px;
}
.service-content h2{
    opacity: 0.7;
}
.service-content button{
    margin-left: 0;
    margin-right: 0;
    background: var(#f9d342);
    color: #fff;
}
@media(min-width: 992px){
    .services-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 30px;
    }
    .title h2{
        font-size: 10px!important;
    }
}
@media(max-width: 500px){
    .title h2{
        font-size: 24px;
    }
}

/* room */

/* .rooms{
    margin: 40px 0;
}
.room{
    margin: 45px 0;
    padding-bottom: 25px;
    background: var(#292826);
    color: #fff;
}
.room-text{
    padding: 5px 20px;
}
.room-text h3{
    font-size: 24px;
}
.room-text ul{
    list-style-type: none;
    margin: 15px 0;
}
.room-text ul li{
    padding: 7px 0;
}
.room-text ul li i{
    color: var(#f9d342);
    margin-right: 10px;
}
.rate{
    opacity: 0.8;
}
.rate span{
    font-size: 40px;
    font-weight: 900;
    color: var(#f9d342);
}
.room-image{
    overflow: hidden;
}
.room-image img{
    transition: var(all 0.7s ease);
}
.room-image:hover img{
    transform: scale(1.1);
}
@media(min-width: 900px){
    .rooms-container{
        display: flex;
        flex-wrap: wrap;
    }
    .room{
        flex: 0 0 calc(50% - 20px);
        margin: 10px;
    }
}
@media(min-width: 1370px){
    .rooms-container{
        flex-direction: column;
    }
    .room{
        display: flex;
        padding-bottom: 0;
        margin: 5px 0;
    }
    .room-image{
        flex: 1;
    }
    .room-image img{
        height: 100%;
    }
    .room-text{
        flex: 1;
    }
    .room:nth-child(even){
        flex-direction: row-reverse;
    }
} */
.rooms{
    margin: 40px 0;
}
.room{
    margin: 45px 0;
    padding-bottom: 25px;
    background: #292826;
    color: #fff;
}
.room-text{
    padding: 5px 20px;
}
.room-text h3{
    font-size: 24px;
}
.room-text ul{
    list-style-type: none;
    margin: 15px 0;
}
.room-text ul li{
    padding: 7px 0;
}
.room-text ul li i{
    color: #f9d342;
    margin-right: 10px;
}
.rate{
    opacity: 0.8;
}
.rate span{
    font-size: 40px;
    font-weight: 900;
    color: #f9d342;
}
.room-image{
    overflow: hidden;
}
.room-image img{
    transition: all 0.7s ease;
}
.room-image:hover img{
    transform: scale(1.1);
}
@media(min-width: 900px){
    .rooms-container{
        display: flex;
        flex-wrap: wrap;
    }
    .room{
        flex: 0 0 calc(50% - 20px);
        margin: 10px;
    }
}
@media(min-width: 1370px){
    .rooms-container{
        flex-direction: column;
    }
    .room{
        display: flex;
        padding-bottom: 0;
        margin: 5px 0;
    }
    .room-image{
        flex: 1;
    }
    .room-image img{
        height: 100%;
    }
    .room-text{
        flex: 1;
    }
    .room:nth-child(even){
        flex-direction: row-reverse;
    }
}

/* customers */

.customers{
    margin-top: 40px;
    padding: 40px 0;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../assets/hotel_view.jpg) center/cover no-repeat fixed;
}
.customer{
    background: #fff;
    padding: 35px;
    text-align: center;
    margin: 24px 0;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.75);
    cursor: pointer;
    transition: var(all 0.7s ease);
}
.rating{
    margin: 10px 0;
    color: var(#f9d342);
}
.customer h3{
    font-size: 25px;
}
.customer p{
    opacity: 0.7;
    line-height: 1.8;
    width: 60%;
    margin: 0 auto;
}
.customer img{
    width: 170px;
    height: 170px;
    border-radius: 50%;
    margin: 25px auto;
}
.customer span{
    font-weight: 700;
    opacity: 0.7;
}
.customer:hover{
    transform: translateY(-18px);
}
@media(min-width: 992px){
    .customers-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 30px;
    }
}
@media(min-width: 1370px){
    .customers-container{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
}
@media(max-width: 500px){
    .customers p{
        width: 100%;
    }
    .customer img{
        width: 100px;
        height: 100px;
    }
}

/* footer */
.footer{
    background: var(#292826);
    color: #fff;
    text-align: center;
}
.footer-container{
    width: 85vw;
    margin: 0 auto;
    padding: 30px 0;
}
.footer-container p, .footer-container a, .footer-container span{
    opacity: 0.8;
}
.footer a{
    display: block;
    color: #fff;
    text-decoration: none;
}
.social-icons{
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 15px 0;
}
.social-icons li{
    margin: 0 10px;
    width: 50px;
    height: 50px;
    background: #2e2e2e;
    border-radius: 50%;
    transition: var(all 0.7s ease);
    cursor: pointer;
}
.social-icons li:hover{
    background: #fff;
    color: #2e2e2e;
}
.contact-item span{
    display: block;
}
@media(min-width: 900px){
    .footer-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }
}
@media(min-width: 1170px){
    .footer{
        text-align: left;
    }
    .footer-container{
        grid-template-columns: repeat(4, 1fr);
    }
    .footer-container div:nth-child(1) p{
        padding-right: 20px;
    }
    .contact-item{
        display: grid;
        grid-template-columns: 10% 90%;
        margin-bottom: 15px;
        align-items: center;
    }
}

.showModal{
    position: fixed;
    background: transparent;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
}
</style>
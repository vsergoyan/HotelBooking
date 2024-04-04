<template>
    <div>
        <header class="header" id="header">
            <div class="head-top">
                <div class="site-name">
                    <span>Հյուրանոցների ամագրման հարթակ</span>
                </div>
                <div class="site-nav">
                    <span id="nav-btn">ՄԵՆՅՈւ <i class="fas fa-bars"></i></span>
                </div>
            </div>

            <div class="head-bottom flex">
                <h2>Բարի գալուստ մեր հարթակ։ </h2>
                <p>Մեզ մոտ կգտնեք Հայաստանի բոլոր մարզերի և քաղաքների հանգստյան տներն ու հյուրանոցները։</p>
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
                <li><a href="#book">ամրագրել</a></li>
                <li><a href="#hotels">հյուրանոցներ</a></li>
                <li><a href="#contacts">կոնտակներ</a></li>
                <li><a href="indexeng.html">EN</a></li>
            </ul>
            <button class="btn sign-up">գրանցվել</button>
            <button class="btn log-in">մուտք գործել</button>
        </div>
        <!-- end of side navbar -->

        <!-- fullscreen modal -->
        <div id="modal"></div>
        <!-- end of fullscreen modal -->

        <section id="book">
            <div class="book">
                <form class="book-form">
                    <div class="form-item">
                        <label for="region">Մարզ։</label>
                        <select size="1" v-model="hotelInfo.region">
                            <option value="Կոտայք">Կոտայք</option>
                            <option value="Տավուշ">Տավուշ</option>
                            <option value="Երևան">Երևան</option>
                            <option value="Արմավիր">Արմավիր</option>
                            <option value="Գեղարքունիք">Գեղարքունիք</option>
                            <option value="Սյունիք">Սյունիք</option>
                            <option value="Շիրակ">Շիրակ</option>
                            <option value="Վայոց ձոր">Վայոց ձոր</option>
                            <option value="Լոռի">Լոռի</option>
                            <option value="Արարատ">Արարատ</option>
                            <option value="Արագածոտն">Արագածոտն</option>
                            <option value="Բոլորը">Ընտրել բոլորը</option>
                        </select>
                    </div>
                    <div class="form-item">
                        <label for="checkin-date">Գալու Օր:</label>
                        <input type="date" id="chekin-date" v-model="hotelInfo.checkIn">
                    </div>
                    <div class="form-item">
                        <label for="checkout-date">Գնալու Oր:</label>
                        <input type="date" id="chekout-date" v-model="hotelInfo.checkOut">
                    </div>
                    <div class="form-item">
                        <label for="adult">ԱՆձ:</label>
                        <input type="number" min="1" value="1" id="adult" v-model="hotelInfo.adult">
                    </div>
                    <div class="form-item">
                        <label for="children">Երեխա:</label>
                        <input type="number" min="0" value="1" id="Children" v-model="hotelInfo.children" :style="validationErrors.childrenError ? 'border: 1px solid red' : ''">
                        <small v-if="validationErrors.childrenError" style="color: red;"> {{ validationErrors.childrenError }} </small>
                    </div>
                    <div class="form-item">
                        <label for="rooms">Սենյակ:</label>
                        <input type="number" min="1" value="1" id="rooms" v-model="hotelInfo.rooms">
                    </div>
                    <div class="form-item">
                        <input type="button" class="btn" value="Ամրագրել" @click="book()">
                    </div>
                </form>
            </div>
        </section>

        <section class="hotels sec-width" id="hotels">
            <div class="title">
                <h2>Հյուրանոցներ և հյուրատներ</h2>
            </div>
            <div class="hotels-container">
                <!-- single hotel -->
                <article class="hotel">
                    <div class="hotel-image">
                        <img src="../assets/hotel_img1.jpg" alt="hotel image">
                    </div>
                    <div class="hotel-text">
                        <h3>Dilijan resort</h3>
                        <ul>
                            <li>
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                Հիասքանչ բնություն։
                            </li>
                            <li>
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                Հարմարավետ սենյակներ։
                            </li>
                            <li>
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                Բար։
                            </li>
                        </ul>
                        <p>Սիրով հրավիրում ենք Dilijan Resort՝ ձեռք բերելու անմոռանալի հիշողություններ, ինչպես նաև անկրկնելի հանգստի։</p>
                        <p class="rate">
                            <span>39800.00֏ /</span>
                            X գիշեր, Y անձ
                        </p>
                        <button type="button" class="btn">ամրագրել</button>
                    </div>
                </article>
                <!-- end of single hotel -->
                <!-- single hotel -->
                <article class="hotel">
                    <div class="hotel-image">
                        <img src="../assets/hotel_room3.jpg" alt="hotel image">
                    </div>
                    <div class="hotel-text">
                        <h3>Haghartsin Hotel & Spa</h3>
                        <ul>
                            <li>
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                Հիասքանչ բնություն։
                            </li>
                            <li>
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                Հարմարավետ սենյակներ։
                            </li>
                            <li>
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                Բար։
                            </li>
                        </ul>
                        <p>Իդեալական է այն հյուրերի համար, ովքեր փնտրում են լրացուցիչ հարմարավետություն և գաղտնիություն:</p>
                        <p class="rate">
                            <span>60300.00֏ /</span>
                            X գիշեր, Y անձ
                        </p>
                        <button type="button" class="btn">ամրագրել</button>
                    </div>
                </article>
                <!-- end of single hotel -->
                <!-- single hotel -->
                <article class="hotel">
                    <div class="hotel-image">
                        <img src="../assets/img3.jpg" alt="hotel image">
                    </div>
                    <div class="hotel-text">
                        <h3>YVN Hotel</h3>
                        <ul>
                            <li>
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                Գերհարմարավետ սենյակներ։
                            </li>
                            <li>
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                Գտնում է քաղաքի կենտրոնում։
                            </li>
                            <li>
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                Բիզնես օբյեկտների հասանելիություն։
                            </li>
                        </ul>
                        <p>Իդեալական է ճանապարհորդների համար, ովքեր փնտրում են ավելի բարձր մակարդակի սպասարկում և ցանկանում են հանգիստն անցկացնել աշխարհի մայրաքաղաք Երևանում:</p>
                        <p class="rate">
                            <span>121500.00֏ /</span>
                            X գիշեր, Y անձ
                        </p>
                        <button type="button" class="btn">ամրագրել</button>
                    </div>
                </article>
                <!-- end of single hotel -->
            </div>
        </section>    

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
    </div>
</template>

<script>
    export default {
        name: 'HomeComponent',

        data() {
            return {
                hotelInfo: {
                    checkIn: null,
                    checkOut: null,
                    adult: null,
                    children: null,
                    region: null,
                    rooms: null
                },
                validationErrors: {
                    checkInError: '',
                    checkOutError: '',
                    adultError: '',
                    childrenError: '',
                    regionError: '',
                    roomsError: '' 
                }
            }
        },

        methods: {
            book() {
                this.validationErrors = {
                    checkInError: '',
                    checkOutError: '',
                    adultError: '',
                    childrenError: '',
                    regionError: '',
                    roomsError: '' 
                }
                
                const childrenState = this.isChildrenValid(this.hotelInfo.children)

                this.validationErrors.childrenError = childrenState.errorMessage

                if (childrenState.isValid) {
                    console.log(this.hotelInfo)
                }
            },

            isChildrenValid(children) {
                if(!children) {
                    return {
                        errorMessage: 'Երեխաների դաշտը պարտադիր է',
                        isValid: false
                    }
                } else if (children < 0) {
                    return {
                        errorMessage: 'Երեխաների քանակը չի կարող լինել բացասական',
                        isValid: false
                    }
                }  else {
                    return {
                        errorMessage: '',
                        isValid: true
                    }
                }
            }
        }
    }
</script>

<style scoped>
.btn {
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
    transition: all 0.7s ease;
}

.btn:hover {
    opacity: 0.85;
}

.flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1, h2, h3, h4, h5, h6 {
    padding: 8px 0;
}

img {
    width: 100%;
    display: block;
}

@media(max-width: 500px) {
    body {
        font-size: 14px;
    }
}

.header {
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url(../assets/banner-img.jpg) center/cover no-repeat;
    min-height: 100vh;
    color: #fff;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.head-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.head-top span {
    cursor: pointer;
    letter-spacing: 2px;
    transition: all 0.7s ease;
}

.head-top span:hover {
    color: #f9d342;
}

.head-bottom {
    flex: 1;
    text-align: center;
    width: 80vw;
    margin: 0 auto;
}

.head-bottom h2 {
    padding: 22px 0;
    font-size: 45px;
    border-bottom: 1px solid #fff;
}

.head-bottom p {
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
    transition: all 0.7s ease;
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
    background: #292826;
    color: #fff;
    position: fixed;
    top: 0;
    bottom: 0;
    right: -100%;
    width: 300px;
    padding: 20px;
    transition: all 0.7s ease;
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
    transition: all 0.7s ease;
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
    transition: all 0.7s ease;
}
.navbar li a:hover{
    padding-left: 12px;
}
.sign-up, .log-in{
    background: #f9d342;
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
    color: #f9d342;
    border-bottom: 5px solid #292826;
    width: 235px;
    margin: 15px 0;
}

.sec-width{
    width: 85vw;
    margin: 0 auto!important;
}

/* booking form */
.book{
    background: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(../assets/banner-img.jpg) center/cover no-repeat;
    color: #fff;
    padding: 40px 60px;
}
.book-form{
    display: grid;
}
.form-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.book-form input[type = "submit"]{
    margin: 18px 0 0 0;
    background: #292826;
    color: #fff;
    border: 1px solid #fff;
}
.book-form label, .book-form input, .book-form select{
    width: 100%;
}
.book-form label{
    font-weight: 600;
    word-spacing: 5px;
    padding-bottom: 8px;
}
.book-form input:not(.btn), .book-form select{
    margin: 4px 0 16px 0;
    padding: 12px 15px;
    border-radius: 5px;
    font-size: 17px;
    border: none;
}
.book-form input:focus{
    outline: 0;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.4);
}
@media(min-width: 768px){
    .book-form{
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 24px;
    }
}
@media(min-width: 1170px){
    .book-form{
        grid-template-columns: repeat(3, 1fr);
    }
}
@media(min-width: 1370px){
    .book-form{
        grid-template-columns: 2fr 2fr 1fr 1fr 1fr 2fr;
    }
    .book{
        height: 40vh;
        display: grid;
    }
}
@media(max-width: 500px){
    .book{
        padding-left: 20px;
        padding-right: 20px;
    }
}

/* hotels */

@media(min-width: 992px){
    .title h2{
        font-size: 10px!important;
    }
}
@media(max-width: 500px){
    .title h2{
        font-size: 24px;
    }
}
.hotels{
    margin: 40px 0;
}
.hotel{
    margin: 45px 0;
    padding-bottom: 25px;
    background: #292826;
    color: #fff;
}
.hotel-text{
    padding: 5px 20px;
}
.hotel-text h3{
    font-size: 24px;
}
.hotel-text ul{
    list-style-type: none;
    margin: 15px 0;
}
.hotel-text ul li{
    padding: 7px 0;
}
.hotel-text ul li i{
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
.hotel-image{
    overflow: hidden;
}
.hotel-image img{
    transition: all 0.7s ease;
}
.hotel-image:hover img{
    transform: scale(1.1);
}
@media(min-width: 900px){
    .hotels-container{
        display: flex;
        flex-wrap: wrap;
    }
    .hotel{
        flex: 0 0 calc(50% - 20px);
        margin: 10px;
    }
}
@media(min-width: 1370px){
    .hotels-container{
        flex-direction: column;
    }
    .hotel{
        display: flex;
        padding-bottom: 0;
        margin: 5px 0;
    }
    .hotel-image{
        flex: 1;
    }
    .hotel-image img{
        height: 100%;
    }
    .hotel-text{
        flex: 1;
    }
    .hotel:nth-child(even){
        flex-direction: row-reverse;
    }
}

/* footer */
.footer{
    background: #292826;
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
    transition: all 0.7s ease;
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
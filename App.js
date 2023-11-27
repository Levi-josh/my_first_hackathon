const setupArrow = document.getElementById("setup-arrow");
const content = document.getElementById("content");
const dcontent = document.getElementById("dcontent");
const setupGuide = document.getElementById("setup-guide");
const dsetupGuide = document.getElementById("d_setup-guide");
const addproductBtn = document.getElementById("add-product2")
const daddproductBtn = document.getElementById("dadd-product2")
const showproductcontent = document.getElementById("second")
const dshowproductcontent = document.getElementById("dsecond")
const customizecontent = document.getElementById("first")
const dcustomizecontent = document.getElementById("dfirst")
const customdomain = document.getElementById("third")
const dcustomdomain = document.getElementById("dthird")
const namestore = document.getElementById("fourth")
const dnamestore = document.getElementById("dfourth")
const payment = document.getElementById("fifth")
const dpayment = document.getElementById("dfifth")
const customizecontent2 = document.getElementById("first2")
const dcustomizecontent2 = document.getElementById("dfirst2")
const showproductdiv = document.getElementById("second2")
const dshowproductdiv = document.getElementById("dsecond2")
const customdomain2 = document.getElementById("third2")
const dcustomdomain2 = document.getElementById("dthird2")
const namestore2 = document.getElementById("fourth2")
const dnamestore2 = document.getElementById("dfourth2")
const payment2 = document.getElementById("fifth2")
const dpayment2 = document.getElementById("dfifth2")
const customizebtn = document.getElementById("add-product1")
const dcustomizebtn = document.getElementById("dadd-product1")
const custombtn = document.getElementById("add-product3")
const dcustombtn = document.getElementById("dadd-product3")
const namestorebtn = document.getElementById("add-product4")
const dnamestorebtn = document.getElementById("dadd-product4")
const paymentbtn = document.getElementById("add-product5")
const dpaymentbtn = document.getElementById("dadd-product5")
const firsticonbtn = document.getElementById("second1-icon2")
const dfirsticonbtn = document.getElementById("dsecond1-icon2")
const secondiconbtn = document.getElementById("second2-icon2")
const dsecondiconbtn = document.getElementById("dsecond2-icon2")
const thirdiconbtn = document.getElementById("second3-icon2")
const dthirdiconbtn = document.getElementById("dsecond3-icon2")
const fourthiconbtn = document.getElementById("second4-icon2")
const dfourthiconbtn = document.getElementById("dsecond4-icon2")
const fifthiconbtn = document.getElementById("second5-icon2")
const dfifthiconbtn = document.getElementById("dsecond5-icon2")
const loading = document.getElementById("loading-span")
const oldicon2 = document.getElementById("secondoldicon")
const doldicon2 = document.getElementById("dsecondoldicon")
const oldicon1 = document.getElementById("firstoldicon")
const doldicon1 = document.getElementById("dfirstoldicon")
const oldicon3 = document.getElementById("thirdoldicon")
const doldicon3 = document.getElementById("dthirdoldicon")
const oldicon4 = document.getElementById("fourtholdicon")
const doldicon4 = document.getElementById("dfourtholdicon")
const oldicon5 = document.getElementById("fiftholdicon")
const doldicon5 = document.getElementById("dfiftholdicon")
const changeicon1 = document.getElementById("first-icon")
const dchangeicon1 = document.getElementById("dfirst-icon")
const changeicon2 = document.getElementById("second-icon")
const dchangeicon2 = document.getElementById("dsecond-icon")
const changeicon3 = document.getElementById("third-icon")
const dchangeicon3 = document.getElementById("dthird-icon")
const changeicon4 = document.getElementById("fourth-icon")
const dchangeicon4 = document.getElementById("dfourth-icon")
const changeicon5 = document.getElementById("fifth-icon")
const dchangeicon5 = document.getElementById("dfifth-icon")
const secondoldicon2 = document.getElementById("secondoldicon2")
const dsecondoldicon2 = document.getElementById("dsecondoldicon2")
const firstoldicon2 = document.getElementById("firstoldicon2")
const dfirstoldicon2 = document.getElementById("dfirstoldicon2")
const thirdoldicon2 = document.getElementById("thirdoldicon2")
const dthirdoldicon2 = document.getElementById("dthirdoldicon2")
const fourtholdicon2 = document.getElementById("fourtholdicon2")
const dfourtholdicon2 = document.getElementById("dfourtholdicon2")
const fiftholdicon2 = document.getElementById("fiftholdicon2")
const dfiftholdicon2 = document.getElementById("dfiftholdicon2")
const dsetuparrow = document.getElementById("setup1")



const checkloading = {
    isloading: 0,


    calculateWidth: function (num) {


        this.isloading = this.isloading + num


    }
}


setupArrow.addEventListener("click", () => {
    const showcontent = window.getComputedStyle(content)

    if (showcontent.display === "flex") {
        content.style.display = "none";
        setupGuide.style.height = "124px";
    }
    else {
        content.style.display = "flex";
        setupGuide.style.height = "449px";
    }

})
dsetuparrow.addEventListener("click", () => {
    const dshowcontent = window.getComputedStyle(dcontent)

    if (dshowcontent.display === "flex") {
        dcontent.style.display = "none";
        dsetupGuide.style.height = "106px";
    }
    else {
        dcontent.style.display = "flex";
        dsetupGuide.style.height = "431px";
    }

})





/* const showcontent = window.getComputedStyle(content)
 
    if (showcontent.display === "flex") {
        content.style.display = "none";
        setupGuide.style.height = "124px";
    }
    else {
        content.style.display = "flex";
        setupGuide.style.height = "449px";
    }*/

/*function showaccordion() {
    const showcontent = window.getComputedStyle(content)

    if (showcontent.display === "flex") {
        content.style.display = "none";
        setupGuide.style.height = "124px";
    }
    else {
        content.style.display = "flex";
        setupGuide.style.height = "449px";
    }
    console.log('hello')
};

// Your code here
setupArrow.addEventListener("keydown", ev => {

    console.log(ev.key);
    console.log("hello");

});

let addloading = 0
loading.style.width = addloading*/

addproductBtn.addEventListener("click", () => {
    const showaddproduct = window.getComputedStyle(showproductcontent)
    if (showaddproduct.display === "none") {
        customizecontent2.style.display = "block";
        customizecontent.style.display = "none";
        showproductcontent.style.display = "block";
        showproductdiv.style.display = "none";
        customdomain.style.display = "none";
        customdomain2.style.display = "block";
        namestore.style.display = "none";
        namestore2.style.display = "block";
        payment.style.display = "none";
        payment2.style.display = "block";
    }

})
daddproductBtn.addEventListener("click", () => {
    const dshowaddproduct = window.getComputedStyle(dshowproductcontent)
    if (dshowaddproduct.display === "none") {
        dcustomizecontent2.style.display = "block";
        dcustomizecontent.style.display = "none";
        dshowproductcontent.style.display = "flex";
        dshowproductdiv.style.display = "none";
        dcustomdomain.style.display = "none";
        dcustomdomain2.style.display = "block";
        dnamestore.style.display = "none";
        dnamestore2.style.display = "block";
        dpayment.style.display = "none";
        dpayment2.style.display = "block";
    }

})
secondiconbtn.addEventListener("click", () => {

    const showaddproduct = window.getComputedStyle(showproductcontent)


    if (showaddproduct.display === "none") {

        customizecontent2.style.display = "block";
        customizecontent.style.display = "none";
        showproductcontent.style.display = "block";

        showproductdiv.style.display = "none";
        customdomain.style.display = "none";
        customdomain2.style.display = "block";
        namestore.style.display = "none";
        namestore2.style.display = "block";
        payment.style.display = "none";
        payment2.style.display = "block";
    }
    checkloading.calculateWidth(18)
    loading.style.width = checkloading.isloading + "px"
    const newicon2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon2.setAttribute('id', 'newicon2')
    newicon2.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon2.setAttribute('width', '16')
    newicon2.setAttribute('height', '16')
    newicon2.setAttribute('viewBox', '0 0 28 28')
    newicon2.setAttribute('fill', 'none')

    newicon2.innerHTML = `<path
    d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
    stroke="#000"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
/>`;

    changeicon2.replaceChild(newicon2, oldicon2);

    //hhhhhhhhhhhhh


    const newicon22 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon22.setAttribute('id', 'newicon22')
    newicon22.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon22.setAttribute('width', '20')
    newicon22.setAttribute('height', '20')
    newicon22.setAttribute('viewBox', '0 0 24 24')
    newicon22.setAttribute('fill', 'none')


    newicon22.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`;

    const newicon222 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon222.setAttribute('id', 'newicon222')
    newicon222.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon222.setAttribute('width', '20')
    newicon222.setAttribute('height', '20')
    newicon222.setAttribute('viewBox', '0 0 24 24')
    newicon222.setAttribute('fill', 'none')


    newicon222.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`;

    setTimeout(() => {
        changeicon2.replaceChild(newicon22, newicon2);
        secondiconbtn.replaceChild(newicon222, secondoldicon2);


    }, 500)






})
dsecondiconbtn.addEventListener("click", () => {

    const dshowaddproduct = window.getComputedStyle(dshowproductcontent)


    if (dshowaddproduct.display === "none") {

        dcustomizecontent2.style.display = "block";
        dcustomizecontent.style.display = "none";
        dshowproductcontent.style.display = "flex";

        dshowproductdiv.style.display = "none";
        dcustomdomain.style.display = "none";
        dcustomdomain2.style.display = "block";
        dnamestore.style.display = "none";
        dnamestore2.style.display = "block";
        dpayment.style.display = "none";
        dpayment2.style.display = "block";
    }

    const dnewicon2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    dnewicon2.setAttribute('id', 'dnewicon2')
    dnewicon2.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    dnewicon2.setAttribute('width', '16')
    dnewicon2.setAttribute('height', '16')
    dnewicon2.setAttribute('viewBox', '0 0 28 28')
    dnewicon2.setAttribute('fill', 'none')

    dnewicon2.innerHTML = `<path
    d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
    stroke="#000"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
/>`;

    dchangeicon2.replaceChild(dnewicon2, doldicon2);

    //hhhhhhhhhhhhh


    const dnewicon22 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    dnewicon22.setAttribute('id', 'dnewicon22')
    dnewicon22.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    dnewicon22.setAttribute('width', '20')
    dnewicon22.setAttribute('height', '20')
    dnewicon22.setAttribute('viewBox', '0 0 24 24')
    dnewicon22.setAttribute('fill', 'none')


    dnewicon22.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
        <path
            d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
            fill="#fff"
        ></path>`;

    const dnewicon222 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    dnewicon222.setAttribute('id', 'newicon222')
    dnewicon222.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    dnewicon222.setAttribute('width', '20')
    dnewicon222.setAttribute('height', '20')
    dnewicon222.setAttribute('viewBox', '0 0 24 24')
    dnewicon222.setAttribute('fill', 'none')


    dnewicon222.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
        <path
            d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
            fill="#fff"
        ></path>`;

    setTimeout(() => {
        dchangeicon2.replaceChild(dnewicon22, dnewicon2);
        dsecondiconbtn.replaceChild(dnewicon222, dsecondoldicon2);


    }, 500)






})

changeicon2.addEventListener("click", () => {
    const newicon2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon2.setAttribute('id', 'newicon2')
    newicon2.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon2.setAttribute('width', '16')
    newicon2.setAttribute('height', '16')
    newicon2.setAttribute('viewBox', '0 0 28 28')
    newicon2.setAttribute('fill', 'none')

    newicon2.innerHTML = `<path
    d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
    stroke="#000"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
/>`;

    changeicon2.replaceChild(newicon2, oldicon2);

    //hhhhhhhhhhhhh


    const newicon22 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon22.setAttribute('id', 'newicon22')
    newicon22.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon22.setAttribute('width', '20')
    newicon22.setAttribute('height', '20')
    newicon22.setAttribute('viewBox', '0 0 24 24')
    newicon22.setAttribute('fill', 'none')


    newicon22.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`;
    const newicon222 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon222.setAttribute('id', 'newicon222')
    newicon222.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon222.setAttribute('width', '20')
    newicon222.setAttribute('height', '20')
    newicon222.setAttribute('viewBox', '0 0 24 24')
    newicon222.setAttribute('fill', 'none')


    newicon222.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`;

    setTimeout(() => {
        changeicon2.replaceChild(newicon22, newicon2);
        secondiconbtn.replaceChild(newicon222, secondoldicon2);


    }, 500)

})

dchangeicon2.addEventListener("click", () => {
    const dnewicon2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    dnewicon2.setAttribute('id', 'dnewicon2')
    dnewicon2.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    dnewicon2.setAttribute('width', '16')
    dnewicon2.setAttribute('height', '16')
    dnewicon2.setAttribute('viewBox', '0 0 28 28')
    dnewicon2.setAttribute('fill', 'none')

    dnewicon2.innerHTML = `<path
    d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
    stroke="#000"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
/>`;

    dchangeicon2.replaceChild(dnewicon2, doldicon2);

    //hhhhhhhhhhhhh


    const dnewicon22 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    dnewicon22.setAttribute('id', 'newicon22')
    dnewicon22.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    dnewicon22.setAttribute('width', '20')
    dnewicon22.setAttribute('height', '20')
    dnewicon22.setAttribute('viewBox', '0 0 24 24')
    dnewicon22.setAttribute('fill', 'none')


    dnewicon22.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`;
    const dnewicon222 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    dnewicon222.setAttribute('id', 'newicon222')
    dnewicon222.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    dnewicon222.setAttribute('width', '20')
    dnewicon222.setAttribute('height', '20')
    dnewicon222.setAttribute('viewBox', '0 0 24 24')
    dnewicon222.setAttribute('fill', 'none')


    dnewicon222.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`;

    setTimeout(() => {
        dchangeicon2.replaceChild(dnewicon22, dnewicon2);
        dsecondiconbtn.replaceChild(dnewicon222, dsecondoldicon2);


    }, 500)

})



customizebtn.addEventListener("click", () => {
    const showcustomcontent = window.getComputedStyle(customizecontent)
    if (showcustomcontent.display === "none") {
        customizecontent.style.display = "block";
        showproductcontent.style.display = "none";
        customizecontent2.style.display = "none";
        showproductdiv.style.display = "block";
        customdomain.style.display = "none";
        customdomain2.style.display = "block";
        namestore.style.display = "none";
        namestore2.style.display = "block";
        payment.style.display = "none";
        payment2.style.display = "block";
    }

})
dcustomizebtn.addEventListener("click", () => {
    const dshowcustomcontent = window.getComputedStyle(dcustomizecontent)
    if (dshowcustomcontent.display === "none") {
        dcustomizecontent.style.display = "flex";
        dshowproductcontent.style.display = "none";
        dcustomizecontent2.style.display = "none";
        dshowproductdiv.style.display = "block";
        dcustomdomain.style.display = "none";
        dcustomdomain2.style.display = "block";
        dnamestore.style.display = "none";
        dnamestore2.style.display = "block";
        dpayment.style.display = "none";
        dpayment2.style.display = "block";
    }

})

firsticonbtn.addEventListener("click", () => {
    const showcustomcontent = window.getComputedStyle(customizecontent)
    if (showcustomcontent.display === "none") {
        customizecontent.style.display = "block";
        showproductcontent.style.display = "none";
        customizecontent2.style.display = "none";
        showproductdiv.style.display = "block";
        customdomain.style.display = "none";
        customdomain2.style.display = "block";
        namestore.style.display = "none";
        namestore2.style.display = "block";
        payment.style.display = "none";
        payment2.style.display = "block";
    }
    const newicon1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon1.setAttribute('id', 'newicon1')
    newicon1.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon1.setAttribute('width', '16')
    newicon1.setAttribute('height', '16')
    newicon1.setAttribute('viewBox', '0 0 28 28')
    newicon1.setAttribute('fill', 'none')

    newicon1.innerHTML = `<path
    d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
    stroke="#000"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
/>`;

    changeicon1.replaceChild(newicon1, oldicon1)
    //nnnnnnnnnnnnnnn

    const newicon11 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon11.setAttribute('id', 'newicon11')
    newicon11.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon11.setAttribute('width', '20')
    newicon11.setAttribute('height', '20')
    newicon11.setAttribute('viewBox', '0 0 24 24')
    newicon11.setAttribute('fill', 'none')


    newicon11.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`

    const newicon111 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon111.setAttribute('id', 'newicon111')
    newicon111.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon111.setAttribute('width', '20')
    newicon111.setAttribute('height', '20')
    newicon111.setAttribute('viewBox', '0 0 24 24')
    newicon111.setAttribute('fill', 'none')


    newicon111.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`
    setTimeout(() => {
        changeicon1.replaceChild(newicon11, newicon1)
        firsticonbtn.replaceChild(newicon111, firstoldicon2);
    }, 500)


})
dfirsticonbtn.addEventListener("click", () => {
    const dshowcustomcontent = window.getComputedStyle(dcustomizecontent)
    if (dshowcustomcontent.display === "none") {
        dcustomizecontent.style.display = "flex";
        dshowproductcontent.style.display = "none";
        dcustomizecontent2.style.display = "none";
        dshowproductdiv.style.display = "block";
        dcustomdomain.style.display = "none";
        dcustomdomain2.style.display = "block";
        dnamestore.style.display = "none";
        dnamestore2.style.display = "block";
        dpayment.style.display = "none";
        dpayment2.style.display = "block";
    }
    const newicon1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon1.setAttribute('id', 'dnewicon1')
    newicon1.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon1.setAttribute('width', '16')
    newicon1.setAttribute('height', '16')
    newicon1.setAttribute('viewBox', '0 0 28 28')
    newicon1.setAttribute('fill', 'none')

    newicon1.innerHTML = `<path
    d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
    stroke="#000"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
/>`;

    dchangeicon1.replaceChild(newicon1, doldicon1)
    //nnnnnnnnnnnnnnn

    const newicon11 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon11.setAttribute('id', 'newicon11')
    newicon11.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon11.setAttribute('width', '20')
    newicon11.setAttribute('height', '20')
    newicon11.setAttribute('viewBox', '0 0 24 24')
    newicon11.setAttribute('fill', 'none')


    newicon11.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`

    const newicon111 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon111.setAttribute('id', 'newicon111')
    newicon111.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon111.setAttribute('width', '20')
    newicon111.setAttribute('height', '20')
    newicon111.setAttribute('viewBox', '0 0 24 24')
    newicon111.setAttribute('fill', 'none')


    newicon111.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`
    setTimeout(() => {
        dchangeicon1.replaceChild(newicon11, newicon1)
        dfirsticonbtn.replaceChild(newicon111, dfirstoldicon2);
    }, 500)


})

changeicon1.addEventListener("click", () => {
    const newicon1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon1.setAttribute('id', 'newicon1')
    newicon1.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon1.setAttribute('width', '16')
    newicon1.setAttribute('height', '16')
    newicon1.setAttribute('viewBox', '0 0 28 28')
    newicon1.setAttribute('fill', 'none')

    newicon1.innerHTML = `<path
    d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
    stroke="#000"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
/>`;

    changeicon1.replaceChild(newicon1, oldicon1)
    //nnnnnnnnnnnnnnn

    const newicon11 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon11.setAttribute('id', 'newicon11')
    newicon11.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon11.setAttribute('width', '20')
    newicon11.setAttribute('height', '20')
    newicon11.setAttribute('viewBox', '0 0 24 24')
    newicon11.setAttribute('fill', 'none')


    newicon11.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`
    const newicon111 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon111.setAttribute('id', 'newicon111')
    newicon111.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon111.setAttribute('width', '20')
    newicon111.setAttribute('height', '20')
    newicon111.setAttribute('viewBox', '0 0 24 24')
    newicon111.setAttribute('fill', 'none')


    newicon111.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`
    setTimeout(() => {
        changeicon1.replaceChild(newicon11, newicon1)
        firsticonbtn.replaceChild(newicon111, firstoldicon2);

    }, 500)
})
dchangeicon1.addEventListener("click", () => {
    const newicon1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon1.setAttribute('id', 'dnewicon1')
    newicon1.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon1.setAttribute('width', '16')
    newicon1.setAttribute('height', '16')
    newicon1.setAttribute('viewBox', '0 0 28 28')
    newicon1.setAttribute('fill', 'none')

    newicon1.innerHTML = `<path
    d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
    stroke="#000"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
/>`;

    dchangeicon1.replaceChild(newicon1, doldicon1)
    //nnnnnnnnnnnnnnn

    const newicon11 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon11.setAttribute('id', 'newicon11')
    newicon11.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon11.setAttribute('width', '20')
    newicon11.setAttribute('height', '20')
    newicon11.setAttribute('viewBox', '0 0 24 24')
    newicon11.setAttribute('fill', 'none')


    newicon11.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`
    const newicon111 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon111.setAttribute('id', 'newicon111')
    newicon111.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon111.setAttribute('width', '20')
    newicon111.setAttribute('height', '20')
    newicon111.setAttribute('viewBox', '0 0 24 24')
    newicon111.setAttribute('fill', 'none')


    newicon111.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`
    setTimeout(() => {
        dchangeicon1.replaceChild(newicon11, newicon1)
        dfirsticonbtn.replaceChild(newicon111, dfirstoldicon2);

    }, 500)
})

custombtn.addEventListener("click", () => {
    const showcustomcontent = window.getComputedStyle(customdomain)
    if (showcustomcontent.display === "none") {
        customdomain.style.display = "block";
        customdomain2.style.display = "none";
        customizecontent.style.display = "none";
        customizecontent2.style.display = "block";
        showproductdiv.style.display = "block";
        showproductcontent.style.display = "none";
        namestore.style.display = "none";
        namestore2.style.display = "block";
        setupGuide.style.height = "467px";
        payment.style.display = "none";
        payment2.style.display = "block";
    }
})
dcustombtn.addEventListener("click", () => {
    const dshowcustomcontent = window.getComputedStyle(dcustomdomain)
    if (dshowcustomcontent.display === "none") {
        dcustomdomain.style.display = "flex";
        dcustomdomain2.style.display = "none";
        dcustomizecontent.style.display = "none";
        dcustomizecontent2.style.display = "block";
        dshowproductdiv.style.display = "block";
        dshowproductcontent.style.display = "none";
        dnamestore.style.display = "none";
        dnamestore2.style.display = "block";

        dpayment.style.display = "none";
        dpayment2.style.display = "block";
    }
})
thirdiconbtn.addEventListener("click", () => {
    const showcustomcontent = window.getComputedStyle(customdomain)
    if (showcustomcontent.display === "none") {
        customdomain.style.display = "block";
        customdomain2.style.display = "none";
        customizecontent.style.display = "none";
        customizecontent2.style.display = "block";
        showproductdiv.style.display = "block";
        showproductcontent.style.display = "none";
        namestore.style.display = "none";
        namestore2.style.display = "block";
        setupGuide.style.height = "467px";
        payment.style.display = "none";
        payment2.style.display = "block";
    }
    const newicon3 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon3.setAttribute('id', 'newicon3')
    newicon3.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon3.setAttribute('width', '16')
    newicon3.setAttribute('height', '16')
    newicon3.setAttribute('viewBox', '0 0 28 28')
    newicon3.setAttribute('fill', 'none')

    newicon3.innerHTML = `<path
    d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
    stroke="#000"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
/>`;

    changeicon3.replaceChild(newicon3, oldicon3)


    const newicon33 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon33.setAttribute('id', 'newicon33')
    newicon33.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon33.setAttribute('width', '20')
    newicon33.setAttribute('height', '20')
    newicon33.setAttribute('viewBox', '0 0 24 24')
    newicon33.setAttribute('fill', 'none')


    newicon33.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`

    const newicon333 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon333.setAttribute('id', 'newicon333')
    newicon333.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon333.setAttribute('width', '20')
    newicon333.setAttribute('height', '20')
    newicon333.setAttribute('viewBox', '0 0 24 24')
    newicon333.setAttribute('fill', 'none')


    newicon333.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`
    setTimeout(() => {
        changeicon3.replaceChild(newicon33, newicon3)
        thirdiconbtn.replaceChild(newicon333, thirdoldicon2);

    }, 500)
    checkloading.calculateWidth(18)
    loading.style.width = checkloading.isloading + "px"
})
dthirdiconbtn.addEventListener("click", () => {
    const dshowcustomcontent = window.getComputedStyle(dcustomdomain)
    if (dshowcustomcontent.display === "none") {
        dcustomdomain.style.display = "flex";
        dcustomdomain2.style.display = "none";
        dcustomizecontent.style.display = "none";
        dcustomizecontent2.style.display = "block";
        dshowproductdiv.style.display = "block";
        dshowproductcontent.style.display = "none";
        dnamestore.style.display = "none";
        dnamestore2.style.display = "block";

        dpayment.style.display = "none";
        dpayment2.style.display = "block";
    }
    const newicon3 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon3.setAttribute('id', 'dnewicon3')
    newicon3.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon3.setAttribute('width', '16')
    newicon3.setAttribute('height', '16')
    newicon3.setAttribute('viewBox', '0 0 28 28')
    newicon3.setAttribute('fill', 'none')

    newicon3.innerHTML = `<path
    d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
    stroke="#000"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
/>`;

    dchangeicon3.replaceChild(newicon3, doldicon3)


    const newicon33 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon33.setAttribute('id', 'newicon33')
    newicon33.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon33.setAttribute('width', '20')
    newicon33.setAttribute('height', '20')
    newicon33.setAttribute('viewBox', '0 0 24 24')
    newicon33.setAttribute('fill', 'none')


    newicon33.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`

    const newicon333 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon333.setAttribute('id', 'newicon333')
    newicon333.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon333.setAttribute('width', '20')
    newicon333.setAttribute('height', '20')
    newicon333.setAttribute('viewBox', '0 0 24 24')
    newicon333.setAttribute('fill', 'none')


    newicon333.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`
    setTimeout(() => {
        dchangeicon3.replaceChild(newicon33, newicon3)
        dthirdiconbtn.replaceChild(newicon333, dthirdoldicon2);

    }, 500)

})
changeicon3.addEventListener("click", () => {

    const newicon3 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon3.setAttribute('id', 'newicon3')
    newicon3.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon3.setAttribute('width', '16')
    newicon3.setAttribute('height', '16')
    newicon3.setAttribute('viewBox', '0 0 28 28')
    newicon3.setAttribute('fill', 'none')

    newicon3.innerHTML = `<path
    d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
    stroke="#000"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
/>`;

    changeicon3.replaceChild(newicon3, oldicon3)


    const newicon33 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon33.setAttribute('id', 'newicon33')
    newicon33.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon33.setAttribute('width', '20')
    newicon33.setAttribute('height', '20')
    newicon33.setAttribute('viewBox', '0 0 24 24')
    newicon33.setAttribute('fill', 'none')


    newicon33.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`
    const newicon333 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon333.setAttribute('id', 'newicon333')
    newicon333.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon333.setAttribute('width', '20')
    newicon333.setAttribute('height', '20')
    newicon333.setAttribute('viewBox', '0 0 24 24')
    newicon333.setAttribute('fill', 'none')


    newicon333.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`
    setTimeout(() => {
        changeicon3.replaceChild(newicon33, newicon3)
        thirdiconbtn.replaceChild(newicon333, thirdoldicon2);

    }, 500)
})
namestorebtn.addEventListener("click", () => {
    const shownamestore = window.getComputedStyle(namestore)
    if (shownamestore.display === "none") {
        namestore.style.display = "block";
        namestore2.style.display = "none";
        customizecontent.style.display = "none";
        customizecontent2.style.display = "block";
        showproductdiv.style.display = "block";
        showproductcontent.style.display = "none";
        customdomain.style.display = "none";
        customdomain2.style.display = "block";
        payment.style.display = "none";
        payment2.style.display = "block";
        setupGuide.style.height = "467px"

    }
})
dnamestorebtn.addEventListener("click", () => {
    const dshownamestore = window.getComputedStyle(dnamestore)
    if (dshownamestore.display === "none") {
        dnamestore.style.display = "flex";
        dnamestore2.style.display = "none";
        dcustomizecontent.style.display = "none";
        dcustomizecontent2.style.display = "block";
        dshowproductdiv.style.display = "block";
        dshowproductcontent.style.display = "none";
        dcustomdomain.style.display = "none";
        dcustomdomain2.style.display = "block";
        dpayment.style.display = "none";
        dpayment2.style.display = "block";


    }
})
fourthiconbtn.addEventListener("click", () => {
    const shownamestore = window.getComputedStyle(namestore)
    if (shownamestore.display === "none") {
        namestore.style.display = "block";
        namestore2.style.display = "none";
        customizecontent.style.display = "none";
        customizecontent2.style.display = "block";
        showproductdiv.style.display = "block";
        showproductcontent.style.display = "none";
        customdomain.style.display = "none";
        customdomain2.style.display = "block";
        payment.style.display = "none";
        payment2.style.display = "block";
        setupGuide.style.height = "467px"
    }

    const newicon4 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon4.setAttribute('id', 'newicon4')
    newicon4.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon4.setAttribute('width', '16')
    newicon4.setAttribute('height', '16')
    newicon4.setAttribute('viewBox', '0 0 28 28')
    newicon4.setAttribute('fill', 'none')

    newicon4.innerHTML = `<path
    d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
    stroke="#000"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
/>`;

    changeicon4.replaceChild(newicon4, oldicon4)

    const newicon44 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon44.setAttribute('id', 'newicon44')
    newicon44.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon44.setAttribute('width', '20')
    newicon44.setAttribute('height', '20')
    newicon44.setAttribute('viewBox', '0 0 24 24')
    newicon44.setAttribute('fill', 'none')


    newicon44.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`

    const newicon444 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon444.setAttribute('id', 'newicon444')
    newicon444.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon444.setAttribute('width', '20')
    newicon444.setAttribute('height', '20')
    newicon444.setAttribute('viewBox', '0 0 24 24')
    newicon444.setAttribute('fill', 'none')


    newicon444.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`

    setTimeout(() => {
        changeicon4.replaceChild(newicon44, newicon4)
        fourthiconbtn.replaceChild(newicon444, fourtholdicon2);

    }, 500)

    checkloading.calculateWidth(18)
    loading.style.width = checkloading.isloading + "px"
})
changeicon4.addEventListener("click", () => {

    const newicon4 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon4.setAttribute('id', 'newicon4')
    newicon4.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon4.setAttribute('width', '16')
    newicon4.setAttribute('height', '16')
    newicon4.setAttribute('viewBox', '0 0 28 28')
    newicon4.setAttribute('fill', 'none')

    newicon4.innerHTML = `<path
    d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
    stroke="#000"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
/>`;

    changeicon4.replaceChild(newicon4, oldicon4)

    const newicon44 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon44.setAttribute('id', 'newicon44')
    newicon44.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon44.setAttribute('width', '20')
    newicon44.setAttribute('height', '20')
    newicon44.setAttribute('viewBox', '0 0 24 24')
    newicon44.setAttribute('fill', 'none')


    newicon44.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`
    const newicon444 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon444.setAttribute('id', 'newicon444')
    newicon444.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon444.setAttribute('width', '20')
    newicon444.setAttribute('height', '20')
    newicon444.setAttribute('viewBox', '0 0 24 24')
    newicon444.setAttribute('fill', 'none')


    newicon444.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`

    setTimeout(() => {
        changeicon4.replaceChild(newicon44, newicon4)
        fourthiconbtn.replaceChild(newicon444, fourtholdicon2);

    }, 500)
})

paymentbtn.addEventListener("click", () => {
    const showpayment = window.getComputedStyle(payment)
    if (showpayment.display === "none") {
        payment.style.display = "block";
        payment2.style.display = "none";
        customizecontent.style.display = "none";
        customizecontent2.style.display = "block";
        showproductdiv.style.display = "block";
        showproductcontent.style.display = "none";
        customdomain.style.display = "none";
        customdomain2.style.display = "block";
        namestore.style.display = "none";
        namestore2.style.display = "block";
        setupGuide.style.height = "485px"

    }
})
dpaymentbtn.addEventListener("click", () => {
    const dshowpayment = window.getComputedStyle(dpayment)
    if (dshowpayment.display === "none") {
        dpayment.style.display = "flex";
        dpayment2.style.display = "none";
        dcustomizecontent.style.display = "none";
        dcustomizecontent2.style.display = "block";
        dshowproductdiv.style.display = "block";
        dshowproductcontent.style.display = "none";
        dcustomdomain.style.display = "none";
        dcustomdomain2.style.display = "block";
        dnamestore.style.display = "none";
        dnamestore2.style.display = "block";
        dsetupGuide.style.height = "449px"

    }
})

fifthiconbtn.addEventListener("click", () => {

    const showpayment = window.getComputedStyle(payment)
    if (showpayment.display === "none") {
        payment.style.display = "block";
        payment2.style.display = "none";
        customizecontent.style.display = "none";
        customizecontent2.style.display = "block";
        showproductdiv.style.display = "block";
        showproductcontent.style.display = "none";
        customdomain.style.display = "none";
        customdomain2.style.display = "block";
        namestore.style.display = "none";
        namestore2.style.display = "block";
        setupGuide.style.height = "485px"
    }
    const newicon5 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon5.setAttribute('id', 'newicon5')
    newicon5.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon5.setAttribute('width', '16')
    newicon5.setAttribute('height', '16')
    newicon5.setAttribute('viewBox', '0 0 28 28')
    newicon5.setAttribute('fill', 'none')

    newicon5.innerHTML = `<path
    d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
    stroke="#000"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
/>`;

    changeicon5.replaceChild(newicon5, oldicon5)



    const newicon55 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon55.setAttribute('id', 'newicon55')
    newicon55.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon55.setAttribute('width', '20')
    newicon55.setAttribute('height', '20')
    newicon55.setAttribute('viewBox', '0 0 24 24')
    newicon55.setAttribute('fill', 'none')


    newicon55.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`

    const newicon555 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon555.setAttribute('id', 'newicon555')
    newicon555.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon555.setAttribute('width', '20')
    newicon555.setAttribute('height', '20')
    newicon555.setAttribute('viewBox', '0 0 24 24')
    newicon555.setAttribute('fill', 'none')


    newicon555.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`
    setTimeout(() => {
        changeicon5.replaceChild(newicon55, newicon5)
        fifthiconbtn.replaceChild(newicon555, fiftholdicon2);

    }, 500)
    checkloading.calculateWidth(18)
    loading.style.width = checkloading.isloading + "px"

})

changeicon5.addEventListener("click", () => {
    const newicon5 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon5.setAttribute('id', 'newicon5')
    newicon5.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon5.setAttribute('width', '16')
    newicon5.setAttribute('height', '16')
    newicon5.setAttribute('viewBox', '0 0 28 28')
    newicon5.setAttribute('fill', 'none')

    newicon5.innerHTML = `<path
    d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
    stroke="#000"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
/>`;

    changeicon5.replaceChild(newicon5, oldicon5)



    const newicon55 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon55.setAttribute('id', 'newicon55')
    newicon55.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon55.setAttribute('width', '20')
    newicon55.setAttribute('height', '20')
    newicon55.setAttribute('viewBox', '0 0 24 24')
    newicon55.setAttribute('fill', 'none')


    newicon55.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`
    const newicon555 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    newicon555.setAttribute('id', 'newicon555')
    newicon555.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    newicon555.setAttribute('width', '20')
    newicon555.setAttribute('height', '20')
    newicon555.setAttribute('viewBox', '0 0 24 24')
    newicon555.setAttribute('fill', 'none')


    newicon555.innerHTML = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
    ></path>`
    setTimeout(() => {
        changeicon5.replaceChild(newicon55, newicon5)
        fifthiconbtn.replaceChild(newicon555, fiftholdicon2);

    }, 500)

})

console.log(checkloading.isloading)

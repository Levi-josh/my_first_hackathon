const setupArrow = document.getElementById("setup-arrow");
const content = document.getElementById("content");
const setupGuide = document.getElementById("setup-guide");
const addproductBtn = document.getElementById("add-product2")
const showproductcontent = document.getElementById("second")
const customizecontent = document.getElementById("first")
const customdomain = document.getElementById("third")
const namestore = document.getElementById("fourth")
const payment = document.getElementById("fifth")
const customizecontent2 = document.getElementById("first2")
const showproductdiv = document.getElementById("second2")
const customdomain2 = document.getElementById("third2")
const namestore2 = document.getElementById("fourth2")
const payment2 = document.getElementById("fifth2")
const customizebtn = document.getElementById("add-product1")
const custombtn = document.getElementById("add-product3")
const namestorebtn = document.getElementById("add-product4")
const paymentbtn = document.getElementById("add-product5")
const firsticonbtn = document.getElementById("second1-icon2")
const secondiconbtn = document.getElementById("second2-icon2")
const thirdiconbtn = document.getElementById("second3-icon2")
const fourthiconbtn = document.getElementById("second4-icon2")
const fifthiconbtn = document.getElementById("second5-icon2")
const loading = document.getElementById("loading-span")
const oldicon2 = document.getElementById("secondoldicon")
const oldicon1 = document.getElementById("firstoldicon")
const oldicon3 = document.getElementById("thirdoldicon")
const oldicon4 = document.getElementById("fourtholdicon")
const oldicon5 = document.getElementById("fiftholdicon")
const changeicon1 = document.getElementById("first-icon")
const changeicon2 = document.getElementById("second-icon")
const changeicon3 = document.getElementById("third-icon")
const changeicon4 = document.getElementById("fourth-icon")
const changeicon5 = document.getElementById("fifth-icon")
const secondoldicon2 = document.getElementById("secondoldicon2")



/*class isloading {
    constructor() {

    }
    calculateWeight(num) {
        let newweight = 0
        let c = newweight += num + "px"
        c = loading.style.width
        console.log(c)

    }
}

const firstloading = new isloading()
const secondloading = new isloading()
const thirdloading = new isloading()
const fourthloading = new isloading()
const fifthloading = new isloading()*/


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
secondiconbtn.addEventListener("click", () => {
    const showaddproduct = window.getComputedStyle(showproductcontent)
    if (showaddproduct.display === "none") {

        customizecontent2.style.display = "block";
        customizecontent.style.display = "none";
        showproductcontent.style.display = "block";
        //secondiconbtn.replaceChild(newicon22, secondoldicon2)
        showproductdiv.style.display = "none";
        customdomain.style.display = "none";
        customdomain2.style.display = "block";
        namestore.style.display = "none";
        namestore2.style.display = "block";
        payment.style.display = "none";
        payment2.style.display = "block";
    }
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
    setTimeout(() => {
        changeicon2.replaceChild(newicon22, newicon2);



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
    setTimeout(() => {
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
        changeicon1.replaceChild(newicon11, newicon1)

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

        setTimeout(() => {
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
            changeicon3.replaceChild(newicon33, newicon3)

        }, 500)
    }
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

        setTimeout(() => {
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
            changeicon4.replaceChild(newicon44, newicon4)

        }, 500)

    }
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


        setTimeout(() => {
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
            changeicon5.replaceChild(newicon55, newicon5)

        }, 500)

    }
});


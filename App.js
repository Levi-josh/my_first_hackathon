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


/*setupArrow.addEventListener("click", () => {
    const showcontent = window.getComputedStyle(content)

    if (showcontent.display === "flex") {
        content.style.display = "none";
        setupGuide.style.height = "124px";
    }
    else {
        content.style.display = "flex";
        setupGuide.style.height = "449px";
    }

})*/

function showaccordion() {
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

setupArrow.addEventListener("keyup", (event) => {



    if (event.key === "Escape") {
        console.log('hello')
    }

});
console.log()

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
        showproductdiv.style.display = "none";
        customdomain.style.display = "none";
        customdomain2.style.display = "block";
        namestore.style.display = "none";
        namestore2.style.display = "block";
        payment.style.display = "none";
        payment2.style.display = "block";
        loading.style.width = loading.style.width + "18px"
    }




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
        loading.style.width = loading.style.width + "36px"
    }

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
        loading.style.width = loading.style.width + "18px"
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
        loading.style.width = loading.style.width + "18px"

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
        loading.style.width = loading.style.width + "0px"

    }
});

const setupArrow = document.getElementById("setup-arrow");
const content = document.getElementById("content");
const setupGuide = document.getElementById("setup-guide");
const addproductBtn = document.getElementById("second-detail2")
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
const customizebtn = document.getElementById("first-detail2")
const custombtn = document.getElementById("third-detail2")
const namestorebtn = document.getElementById("fourth-detail2")
const paymentbtn = document.getElementById("fifth-detail2")



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
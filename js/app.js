document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn")
    const mobileMenu = document.getElementById("mobileMenu")
    const mobileMenuClose = document.getElementById("mobileMenuClose")

    function openMobileMenu() {
        mobileMenuBtn.classList.add("active")
        mobileMenu.classList.add("active")
        document.body.style.overflow = "hidden"
    }

    function closeMobileMenu() {
        mobileMenuBtn.classList.remove("active")
        mobileMenu.classList.remove("active")
        document.body.style.overflow = ""
    }

    mobileMenuBtn.addEventListener("click", () => {
        if (mobileMenu.classList.contains("active")) {
            closeMobileMenu()
        } else {
            openMobileMenu()
        }
    })

    mobileMenuClose.addEventListener("click", closeMobileMenu)

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
            closeMobileMenu()
        }
    })

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && mobileMenu.classList.contains("active")) {
            closeMobileMenu()
        }
    })
})


const pricingSwitch = document.getElementById('pricingSwitch')
const flicker = pricingSwitch.querySelector('.flicker')
const monthlyPrices = document.querySelectorAll('.price-monthly')
const yearlyPrices = document.querySelectorAll('.price-yearly')

pricingSwitch.addEventListener('click', () => {
    flicker.classList.toggle('dark')
    
    monthlyPrices.forEach(price => {
        price.style.display = flicker.classList.contains('dark') ? 'none' : 'block'
    })
    
    yearlyPrices.forEach(price => {
        price.style.display = flicker.classList.contains('dark') ? 'block' : 'none'
    })
})


function toggleQuestion(element) {
    const description = element.nextElementSibling
    const icon = element.querySelector('.question-img')
    
    description.classList.toggle('active')
    icon.style.transform = description.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)'
}
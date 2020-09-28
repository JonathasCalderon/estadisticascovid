const navSlide = () => {
    const burgerIcon = document.querySelector('.icons')
    const navList = document.querySelector('.nav-links')
    const navListItems = document.querySelectorAll('.nav-links li')

    burgerIcon.addEventListener('click', () => {
        navList.classList.toggle('nav-active')

        navListItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${(index / 7 + 0.3)}s`
            }
        })
    })
}

const footerDate = () => {
    const footer = document.querySelector('.footer h6')

    const today = new Date();

    const date = ' ' + today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();

    console.log(date)

    footer.innerHTML = footer.innerHTML + date
}

const logoInicio = () => {
    const logo = document.getElementById('logo-inicio')

    console.log(window.innerWidth)

    if (window.innerWidth > 1000) {
        logo.src = "./img/editadoblanco.png"
    }
    else {
        logo.src = "./img/editadonegro.png"
    }
}


navSlide()
footerDate()
logoInicio()
window.onresize = logoInicio
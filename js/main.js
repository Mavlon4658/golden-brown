let bars = document.querySelector('header .bars');
let header_menu = document.querySelector('header .header_menu')
bars.onclick = () => {
    if (bars.classList.contains('active')) {
        bars.classList.remove('active');
        bars.classList.add('no_active');
    } else {
        bars.classList.remove('no_active');
        bars.classList.add('active');
    }

    if (header_menu.classList.contains('active')) {
        header_menu.classList.remove('active')
        header_menu.classList.add('no_active')
    } else {
        header_menu.classList.remove('no_active');
        header_menu.classList.add('active')
    }
}

let lang_btn = document.querySelector('.lang_selected');
let lang_list = document.querySelector('.lang_list');
lang_btn.onclick = () => {
    if (lang_list.classList.contains('active')) {
        lang_list.classList.remove('active');
        lang_list.classList.add('no_active');
    } else {
        lang_list.classList.remove('no_active');
        lang_list.classList.add('active');
    }
}

const target = document.querySelector('header .lang')

document.addEventListener('click', (event) => {
    const withinBoundaries = event.composedPath().includes(target)

    if (! withinBoundaries) {
        if (lang_list.classList.contains('active')) {
            lang_list.classList.remove('active');
            lang_list.classList.add('no_active');
        }
    }
})

let apartments_card = document.querySelector('.apartments .apartments_cards')
if (apartments_card) {
    apartements_slider = new Swiper(apartments_card, {
        slidesPerView: 2.3,
        spaceBetween: 48,
    })
    
    let apartments_cards__ins = document.querySelectorAll('.apartments .apartments_cards__in');
    let apartments_cards__in_paginations = document.querySelectorAll('.apartments .apartments_cards__in_pagination');
    if (apartments_cards__ins.length) {
        apartments_cards__ins.forEach((card, idx) => {
            let slide = new Swiper(card, {
                slidesPerView: 1,
                spaceBetween: 0,
                pagination: {
                    el: apartments_cards__in_paginations[idx],
                    clickable: true
                }
            })

            slide.on('touchStart', function () {
                apartements_slider.detachEvents();
            });

            slide.on('touchEnd', function () {
                apartements_slider.attachEvents();
            });
        })
    }
}

let stars = document.querySelectorAll('.star');
if (stars.length) {
    stars.forEach(star => {
        star.onclick = () => {
            star.classList.toggle('active')
        }
    })
}

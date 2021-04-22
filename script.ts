const links = {
    'github': {
        'text': 'github.com/npv3s',
        'href': 'https://github.com/npv3s'
    },
    'telegram': {
        'text': 't.me/npv3s',
        'href': 'tg://t.me/npv3s'
    },
    'email': {
        'text': 'npv3s@skopa.dev',
        'href': 'mailto:npv3s@skopa.dev'
    }
}

const texts = {
    'github': 'GitHub',
    'telegram': 'Telegram',
    'email': 'E-Mail'
}

function focused(event: Event) {
    let button = event.target as HTMLButtonElement
    button.innerText = links[button.id].text
    button.onclick = () => document.location.href = links[button.id].href
    button.classList.add('is-focused')
    button.classList.remove('is-dark')
}

function unfocused(event: Event) {
    let button = event.target as HTMLButtonElement
    button.innerText = texts[button.id]
    button.onclick = undefined
    button.classList.remove('is-focused')
    button.classList.add('is-dark')
}

document.addEventListener('DOMContentLoaded', () => {
    let contacts = document.querySelectorAll('.contact')
    if ("ontouchstart" in document.documentElement)
        contacts.forEach((e) => {
            e.addEventListener("touchend", (event) => setTimeout(focused, 200, event))
            e.addEventListener("focusout", (event) => unfocused(event))
        })
    else
        contacts.forEach((e) => {
            e.addEventListener("mouseover", (event) => focused(event))
            e.addEventListener("mouseout", (event) => unfocused(event))
        })
})
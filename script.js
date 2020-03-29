function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function hover(id) {
    let element = document.getElementById(id);
    element.style.color = "blue";
    element.style.borderColor = "blue";
    switch (id) {
        case "github":
            element.innerHTML = "github.com/npv3s";
            element.href = "https://github.com/npv3s";
            break;
        case "telegram":
            element.innerHTML = "t.me/npv3s";
            element.href = "https://t.me/npv3s";
            break;
        case "email":
            element.innerHTML = "npv3s@skopa.dev";
            element.href = "mailto:npv3s@skopa.dev";
            break;
    }
}

function unhover(id) {
    let element = document.getElementById(id);
    element.style.color = "black";
    element.style.borderColor = "black";
    element.href = "#";
    switch (id) {
        case "github":
            element.innerHTML = "GitHub";
            break;
        case "telegram":
            element.innerHTML = "Telegram";
            break;
        case "email":
            element.innerHTML = "E-Mail";
            break;
    }
}

document.addEventListener('DOMContentLoaded', () => {

    let gh = document.getElementById("github");
    let tg = document.getElementById("telegram");
    let em = document.getElementById("email");
    if ("ontouchstart" in document.documentElement) {
        gh.addEventListener("touchend", (event) => {
            sleep(200).then(() => hover(event.target.id));
        });
        tg.addEventListener("touchend", (event) => {
            sleep(200).then(() => hover(event.target.id));
        });
        em.addEventListener("touchend", (event) => {
            sleep(200).then(() => hover(event.target.id));
        });
        gh.addEventListener("focusout", (event) => {
            unhover(event.target.id);
        });
        tg.addEventListener("focusout", (event) => {
            unhover(event.target.id);
        });
        em.addEventListener("focusout", (event) => {
            unhover(event.target.id);
        });
    } else {
        gh.addEventListener("mouseover", (event) => {
            hover(event.target.id);
        });
        tg.addEventListener("mouseover", (event) => {
            hover(event.target.id);
        });
        em.addEventListener("mouseover", (event) => {
            hover(event.target.id);
        });
        gh.addEventListener("mouseout", (event) => {
            unhover(event.target.id);
        });
        tg.addEventListener("mouseout", (event) => {
            unhover(event.target.id);
        });
        em.addEventListener("mouseout", (event) => {
            unhover(event.target.id);
        });
    }
});
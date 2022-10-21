function onClickMenu() {
    document.getElementById("header").classList.toggle("open-header");
    document.getElementById("menu").classList.toggle("open-menu");
    document.getElementById("nav").classList.toggle("open-nav");
}

const burgers = [
    {
        name: "ЧЕРНАЯ МАМБА",
        description: "С вишней, беконом и сыром чеддер",
        price: 10,
        img: "1.png"
    },
    {
        name: "СПЕЦАГЕНТ",
        description: "С сыром чеддер и авторским кетчупом",
        price: 12,
        img: "2.png"
    },
    {
        name: "BAD BRO",
        description: "С острым соусом из смеси перцев и красным ялтинским луком",
        price: 9,
        img: "3.png"
    },
    {
        name: "ВАРКА",
        description: "С копчёным сыром сулугуни и луком конфи",
        price: 11,
        img: "4.png"
    },
    {
        name: "РОДЖЕРС",
        description: "С карамельным беконом, красным луком, с горчичным соусом и соусом релиш",
        price: 10,
        img: "5.png"
    },
    {
        name: "БУРГЕР МУХАММАРА",
        description: "С помидором, огурцом и греческим йогуртом с черносливом",
        price: 12,
        img: "6.png"
    },
]

window.onload = function () {
    let content = ``;
    const linkimg = `./assets/img-burgers/`;
    const cards = document.getElementById("cards");
    burgers.forEach(i => {
        content += `
        <div class="card">
            <img src="${linkimg + i.img}" alt="img">
            <div class="card-text">
                <h2>${i.name}</h2>
                <p>${i.description}</p>
                 <p>${i.price}$</p>
            </div>
        </div>
    `;
    });
    cards.innerHTML = content;

};
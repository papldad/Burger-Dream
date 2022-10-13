function onClickMenu() {
    console.log("click");

    document.getElementById("menu-lines").classList.toggle("open-menu");
    document.getElementById("nav").classList.toggle("show-block");
    document.getElementById("nav-bg").classList.toggle("show-block-bg");
    document.getElementById("menu-list").classList.toggle("show-block-bg");

}
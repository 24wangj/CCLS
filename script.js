
const scrollThreshold = 100

function scrollImage() {  
    var scrollTop = document.scrollingElement.scrollTop;
    var target = document.getElementById("background-image");
    var factor = 0.5;
    var yvalue = scrollTop * factor;
    target.style.backgroundPosition = "center " + yvalue + "px";
  }

function adjustHomeHeader() {
    var scrollTop = document.scrollingElement.scrollTop;
    var header = header = document.getElementById("header");
    var activeText =  document.getElementById("active");
    if (scrollTop > scrollThreshold) {
        header.style.backgroundColor = "var(--red)";
        header.style.padding = "4px 0px 8px 0px";
        header.style.outline = "none";

        document.getElementById("title").style.fontSize = "24px";

        activeText.style.backgroundColor = "var(--white)";
        activeText.style.color = "var(--red)";

        inactiveText = document.getElementsByClassName("inactive");
        for (let i = 0; i < inactiveText.length; i++) {
            inactiveText[i].style.color = "var(--white)";
        }
    } else {
        header.style.backgroundColor = "var(--headerHomeBackground)";
        header.style.padding = "20px 0px 24px 0px";
        header.style.outline = "rgba(255, 255, 255, 0.2) 2px solid";

        document.getElementById("title").style.fontSize = "34px";

        activeText.style.backgroundColor = "var(--red)";
        activeText.style.color = "var(--white)";

        inactiveText = document.getElementsByClassName("inactive");
        for (let i = 0; i < inactiveText.length; i++) {
            inactiveText[i].style.color = "var(--headerHomeText)";
        }
    }
}

function adjustHeader() {
    var scrollTop = document.scrollingElement.scrollTop;
    if (scrollTop > scrollThreshold) {
        header = document.getElementById("header");
        header.style.padding = "4px 0px 8px 0px";

        document.getElementById("title").style.fontSize = "24px";
    } else {
        header = document.getElementById("header");
        header.style.padding = "20px 0px 24px 0px";

        document.getElementById("title").style.fontSize = "34px";
    }
}

function showHideHeader() {
    var headerRight = document.getElementById("header-right");
    var menu = document.getElementById("menu");
    if (headerRight.className == "") {
        headerRight.className = "responsive";

        document.getElementById("menu-icon").className = "fa-solid fa-xmark";
        menu.style.fontSize = "24px";
        menu.style.padding = "3px 0px 3px 0px";
    } else {
        headerRight.className = "";

        document.getElementById("menu-icon").className = "fa-solid fa-bars-staggered";
        menu.style.fontSize = "20px";
        menu.style.padding = "5px 0px 5px 0px";
    }
}

function jumpToContent() {
    var scroll = document.getElementById("background-image").offsetHeight;
    var header_offset = 46;
    window.scroll({
        top: scroll - header_offset,
        behavior: 'smooth'
    });
}
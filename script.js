
const scrollThreshold = 100

function scrollImage() {
    var scrollTop = document.scrollingElement.scrollTop;
    var target = document.getElementById("background-image");
    var factor = 0.5;
    var yvalue = scrollTop * factor;
    target.style.backgroundPosition = "center " + yvalue + "px";
}

function adjustHomeHeader() {
    var scroll = document.scrollingElement.scrollTop;
    var header = header = document.getElementById("header");
    var title = document.getElementById("title");
    var activeText = document.getElementById("active");
    var inactiveText = document.getElementsByClassName("inactive");
    if (scroll > scrollThreshold) {
        header.className = "home active";
        title.className = "inactive active";
        activeText.className = "active";
        for (let i = 0; i < inactiveText.length; i++) {
            inactiveText[i].className = "inactive active"
        }
    } else {
        header.className = "home";
        title.className = "inactive";
        activeText.className = "";
        for (let i = 0; i < inactiveText.length; i++) {
            inactiveText[i].className = "inactive"
        }
    }
}

function adjustHeader() {
    var scroll = document.scrollingElement.scrollTop;
    var header = document.getElementById("header");
    var title = document.getElementById("title");
    if (scroll > scrollThreshold) {
        header.className = "active"
        title.className = "inactive active"
    } else {
        header.className = "";
        title.className = "inactive";
    }
}

function showHideHeader() {
    var headerRight = document.getElementById("header-right");
    var menu = document.getElementById("menu");
    if (headerRight.className == "") {
        headerRight.className = "active";
        menu.className = "active";
        document.getElementById("menu-icon").className = "fa-solid fa-xmark";
    } else {
        headerRight.className = "";
        menu.className = "";
        document.getElementById("menu-icon").className = "fa-solid fa-bars-staggered";
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

const imgList = ["./images/IMG_5885.JPG", "./images/img_4210.webp", "./images/IMG_5856.JPG"];

function preloadImages() {
    var img = new Image();
    for (let i = 0; i < imgList.length; i++) {
        img.src = imgList[i];
    }
}

let index = 0;
function cycleImages() {
    var parent = document.getElementById("background-image");
    parent.style.backgroundImage = "url('" + imgList[index] + "')";
    if (index >= imgList.length - 1) {
        index = 0;
    } else {
        index++;
    }

    setTimeout(cycleImages, 4000);
}

function collapseList(id) {
    var list = document.getElementById(id + "-list");
    var icon = document.getElementById(id + "-icon");
    if (list.className == "") {
        list.className = "active";
        icon.className = "fa-solid fa-chevron-down";
    } else {
        list.className = "";
        icon.className = "fa-solid fa-chevron-right";
    }
}

const numMap = new Map();
numMap.set(1, "一");
numMap.set(2, "二");
numMap.set(3, "三");
numMap.set(4, "四");
numMap.set(5, "五");
numMap.set(6, "六");
numMap.set(7, "七");
numMap.set(8, "八");
numMap.set(9, "九");
numMap.set(10, "十");
numMap.set(11, "十一");
numMap.set(12, "十二");

function loadStudentList() {
    const length = 12;
    var parent = document.getElementById("student-list");
    var html = "";
    for (let i = 1; i < length + 1; i++) {
        html += "<li><span class='title'><b>Volume " + i + " 第" + numMap.get(i) + "册</b></span><a href='http://web.hwjyw.com/fj/jcxz/zhongwen/" + i + "/all.pdf' target='_blank'><span class='download'>Download 下载</span></a></li>"
    }
    parent.innerHTML = html;
}

function loadTeachingList() {
    const length = 12;
    var parent = document.getElementById("teaching-list");
    var html = "";
    for (let i = 1; i < length + 1; i++) {
        html += "<li><span class='title'><b>Volume " + i + " 第" + numMap.get(i) + "册</b></span><a href='http://web.hwjyw.com/fj/jcxz/zwjxck/" + i + "/all.pdf' target='_blank'><span class='download'>Download 下载</span></a></li>"
    }
    parent.innerHTML = html;
}

function loadWorkbookAList() {
    const length = 12;
    var parent = document.getElementById("workbook-a-list");
    var html = "";
    for (let i = 1; i < length + 1; i++) {
        html += "<li><span class='title'><b>Volume " + i + " 第" + numMap.get(i) + "册</b></span><a href='http://web.hwjyw.com/fj/jcxz/zwlxca/" + i + "/all.pdf' target='_blank'><span class='download'>Download 下载</span></a></li>"
    }
    parent.innerHTML = html;
}

function loadWorkbookBList() {
    const length = 12;
    var parent = document.getElementById("workbook-b-list");
    var html = "";
    for (let i = 1; i < length + 1; i++) {
        html += "<li><span class='title'><b>Volume " + i + " 第" + numMap.get(i) + "册</b></span><a href='http://web.hwjyw.com/fj/jcxz/zwlxcb/" + i + "/all.pdf' target='_blank'><span class='download'>Download 下载</span></a></li>"
    }
    parent.innerHTML = html;
}
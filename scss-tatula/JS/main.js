const GetEle = (id) => document.getElementById(id);


window.addEventListener("scroll", (evt) => {
    // console.log(evt.target)
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const SideBarOpen = () => {
    document.querySelector(".navbar-brand").style.display = "none";
    GetEle("sidebar").style.transform = "translateX(25%)";
    GetEle("sidebar-nav").style.transform = "translateX(0)";
    GetEle("openNav").style.display = "none";
    GetEle("closeNav").style.display = "block";
}

const SideBarCloses = () => {
    document.querySelector(".navbar-brand").style.display = "block";
    GetEle("sidebar").style.transform = "translateX(0)";
    GetEle("sidebar-nav").style.transform = "translateX(-120%)";
    GetEle("openNav").style.display = "block";
    GetEle("closeNav").style.display = "none";
}

/////////////////////////////////////////////////////////////////////////////////

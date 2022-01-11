let sectionProjects = document.querySelector(".containerContentProjects");
let sectionCV = document.querySelector(".containerContentCV");
let sectionAbout = document.querySelector(".containerContentAbout");
let sectionHome = document.querySelector(".containerContentHome");

let linkNavProjects = document.querySelector(".linkItem.linkProjects");
let linkNavCV = document.querySelector(".linkItem.linkCV");
let linkNavAbout = document.querySelector(".linkItem.linkAbout");

let temporary = document.querySelector(".temporary");

function changeToProjects(){
  sectionProjects.classList.remove("disabled");
  sectionCV.classList.add("disabled");
  sectionAbout.classList.add("disabled");
  sectionHome.classList.add("disabled");

  linkNavProjects.classList.remove("linkOff");
  linkNavProjects.classList.add("linkOn")
  linkNavAbout.classList.remove("linkOn");
  linkNavCV.classList.remove("linkOn");

  temporary.classList.remove("disabled");
}

function changeToAbout(){
  sectionProjects.classList.add("disabled");
  sectionCV.classList.add("disabled");
  sectionAbout.classList.remove("disabled");
  sectionHome.classList.add("disabled");

  linkNavAbout.classList.remove("linkOff");
  linkNavAbout.classList.add("linkOn")
  linkNavProjects.classList.remove("linkOn");
  linkNavCV.classList.remove("linkOn");

  temporary.classList.add("disabled");

}

function changeToCV(){
  sectionProjects.classList.add("disabled");
  sectionCV.classList.remove("disabled");
  sectionAbout.classList.add("disabled");
  sectionHome.classList.add("disabled");

  linkNavCV.classList.remove("linkOff");
  linkNavCV.classList.add("linkOn")
  linkNavAbout.classList.remove("linkOn");
  linkNavProjects.classList.remove("linkOn");

  temporary.classList.remove("disabled");
}

function changeToHome(){
  sectionProjects.classList.add("disabled");
  sectionCV.classList.add("disabled");
  sectionAbout.classList.add("disabled");
  sectionHome.classList.remove("disabled");

  linkNavProjects.classList.remove("linkOn");
  linkNavAbout.classList.remove("linkOn");
  linkNavCV.classList.remove("linkOn");

  temporary.classList.remove("disabled");
}
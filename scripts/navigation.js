let sectionProjects = document.querySelector(".containerContentProjects");
let sectionCV = document.querySelector(".containerContentCV");
let sectionAbout = document.querySelector(".containerContentAbout");
let sectionHome = document.querySelector(".containerContentHome");

function changeToProjects(){
  sectionProjects.classList.remove("disabled");
  sectionCV.classList.add("disabled");
  sectionAbout.classList.add("disabled");
  sectionHome.classList.add("disabled");
}

function changeToAbout(){
  sectionProjects.classList.add("disabled");
  sectionCV.classList.add("disabled");
  sectionAbout.classList.remove("disabled");
  sectionHome.classList.add("disabled");
}

function changeToCV(){
  sectionProjects.classList.add("disabled");
  sectionCV.classList.remove("disabled");
  sectionAbout.classList.add("disabled");
  sectionHome.classList.add("disabled");
}

function changeToHome(){
  sectionProjects.classList.add("disabled");
  sectionCV.classList.add("disabled");
  sectionAbout.classList.add("disabled");
  sectionHome.classList.remove("disabled");
}

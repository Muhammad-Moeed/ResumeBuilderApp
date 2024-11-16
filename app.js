"use strict";

    
var resumeForm = document.querySelector("#cv-form");
var resumeOutput = document.querySelector("#resume-output");

resumeForm?.addEventListener("submit", (evt) => {
    evt.preventDefault();
    resumeOutput.style.display = "block"; // show the form

    var  name = document.getElementById("name");
    var  email = document.getElementById("email");
    var  phone = document.getElementById("phone");
    var  education = document.getElementById("education");
    var  experience = document.getElementById("experience");
    var  skills = document.getElementById("skills");
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert("please fill all field");
        return;
    }
    document.getElementById("resumeName").innerText = `Name: ${name.value}`;
    document.getElementById("resumeEmail").innerText = `Email: ${email.value}`;
    document.getElementById("resumePhone").innerText = `Phone: ${phone.value}`;
    document.getElementById("resumeEducation").innerText = `Education: ${education.value}`;
    document.getElementById("resumeExperience").innerText = `Experience: ${experience.value}`;
    document.getElementById("resumeSkils").innerText = `Skills: ${skills.value}`;
});

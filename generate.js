"use strict";
var sharebtn = document.getElementById("share-btn");
var cvform = document.querySelector("#cv-form");
var editbtn = document.getElementById("edit");
var cvTemplate = document.getElementById("cv-template");

cvform?.addEventListener("submit", function(e) {
    e.preventDefault();
    
    var name = document.getElementById("nameField").value;
    var currently_live = document.getElementById("currently_live").value;
    var DOB = document.getElementById("dateField").value;
    var phone = document.getElementById("contactField").value;
    var email = document.getElementById("emailField").value;
    var address = document.getElementById("addressField").value;
    
    // School
    var degree = document.getElementById("degree").value;
    var institution = document.getElementById("institution").value;
    var graduationDateStart = document.getElementById("graduation-date-start").value;
    var graduationDateEnd = document.getElementById("graduation-date-end").value;
    var jobTitle = document.getElementById("job-title").value;
    var company = document.getElementById("company").value;
    var startDate = document.getElementById("start-date").value;
    var endDate = document.getElementById("end-date").value;
    var jobDescription = document.getElementById("job-description").value;
    var profession = document.getElementById("professionField").value;
    var about = document.getElementById("aboutField").value;
    
    // links
    var Github = document.getElementById("GithubField").value;
    var linkedin = document.getElementById("linkedinField").value;
    
    document.getElementById("currentlyT").textContent = currently_live;
    document.getElementById("DOBT").textContent = DOB;
    document.getElementById("nameT").textContent = name;
    document.getElementById("contactT").textContent = phone;
    document.getElementById("emailT").textContent = email;
    document.getElementById("addressT").textContent = address;
    document.getElementById("aboutT").textContent = about;
    
    // School
    document.getElementById("display-degree").textContent = degree;
    document.getElementById("display-institution").textContent = institution;
    document.getElementById("display-graduation-start").textContent = graduationDateStart;
    document.getElementById("display-graduation-end").textContent = graduationDateEnd;
    document.getElementById("LinkedInT").textContent = linkedin;
    document.getElementById("githubT").textContent = Github;
    document.getElementById("display-job-title").textContent = jobTitle;
    document.getElementById("display-company").textContent = company;
    document.getElementById("display-start-date").textContent = startDate;
    document.getElementById("display-end-date").textContent = endDate;
    document.getElementById("display-discription").textContent = jobDescription;
    document.getElementById("professionT").textContent = profession;
    
    // ******* Skills *********
    var skills = document.getElementsByClassName("sfield");
    var skillsStr = "";
    for (var e of skills) {
        var entries = e.value.split(",");
        for (var entry of entries) {
            skillsStr += "<li>" + entry.trim() + "</li>";
        }
    }
    document.getElementById("skillT").innerHTML = skillsStr;
    
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
});

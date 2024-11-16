var toggleSkillsButton = document.getElementById('toggle-skills');
var skillsList = document.getElementById('skills-list');
toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener('click', function () {
    if (skillsList) {
        if (skillsList.style.display === 'none') {
            skillsList.style.display = 'block';
        }
        else {
            skillsList.style.display = 'none';
        }
    }
});
var toggleEduButton = document.getElementById('toggle-edu');
var eduList = document.getElementById('edu-list');
toggleEduButton === null || toggleEduButton === void 0 ? void 0 : toggleEduButton.addEventListener('click', function () {
    if (eduList) {
        if (eduList.style.display === 'none') {
            eduList.style.display = 'block';
        }
        else {
            eduList.style.display = 'none';
        }
    }
});
var toggleExpButton = document.getElementById('toggle-exp');
var expList = document.getElementById('exp-list');
toggleExpButton === null || toggleExpButton === void 0 ? void 0 : toggleExpButton.addEventListener('click', function () {
    if (expList) {
        if (expList.style.display === 'none') {
            expList.style.display = 'block';
        }
        else {
            expList.style.display = 'none';
        }
    }
});

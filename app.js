// Get the button and skills section by their IDs
var toggleSkillsButton = document.getElementById('toggleSkills');
var skillsSection = document.getElementById('skills');
// Add event listener to the button
toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});

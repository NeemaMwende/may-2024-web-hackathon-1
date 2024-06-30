// Assuming data.js has an array of skills data in the following format:
const skillsData = [
    {
      skill: "JavaScript",
      level: "Intermediate",
      percentage: 75,
      icon: "path_to_icon"
    },
    {
      skill: "Python",
      level: "Advanced",
      percentage: 85,
      icon: "path_to_icon"
    },
    // Add more skills as needed
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const skillsContainer = document.getElementById("skills");
    const skillsInfoContainer = document.getElementById("skills-info");
  
    skillsData.forEach((skill, index) => {
      const skillCard = document.createElement("div");
      skillCard.className = "skills-card";
      skillCard.innerHTML = `
        <div class="skill-icon">
          <img src="${skill.icon}" alt="${skill.skill} icon">
        </div>
        <span>${skill.skill}</span>
      `;
      skillCard.addEventListener("click", () => {
        document.querySelectorAll(".skills-card").forEach(card => card.classList.remove("active"));
        skillCard.classList.add("active");
        showSkillInfo(skill);
      });
  
      skillsContainer.appendChild(skillCard);
  
      if (index === 0) {
        skillCard.classList.add("active");
        showSkillInfo(skill);
      }
    });
  
    function showSkillInfo(skill) {
      skillsInfoContainer.innerHTML = `
        <div class="skills-info-card">
          <h6>${skill.skill}</h6>
          <div class="skills-info-content">
            <div class="skills-info">
              <p>${skill.level}</p>
              <p class="percentage">${skill.percentage}%</p>
            </div>
            <div class="skill-progress-bg">
              <div class="skill-progress" style="width: ${skill.percentage}%"></div>
            </div>
          </div>
        </div>
      `;
    }
  });
  
// Profile data (can be fetched from API later)
const profileData = {
    name: "Nisha R S",
    role: "Aspiring Full Stack Developer",
    description:
        "Focused on building clean UI, dynamic web applications, and learning modern JavaScript frameworks.",
    image: "https://via.placeholder.com/150",
    socials: {
        linkedin: "https://www.linkedin.com",
        github: "https://github.com"
    }
};

// Select container
const profileCard = document.getElementById("profileCard");

// Create dynamic HTML
profileCard.innerHTML = `

    <h2>${profileData.name}</h2>
    <h4>${profileData.role}</h4>
    <p>${profileData.description}</p>
    <div class="social-links">
        <a href="${profileData.socials.linkedin}" target="_blank">LinkedIn</a>
        <a href="${profileData.socials.github}" target="_blank">GitHub</a>
    </div>
`;

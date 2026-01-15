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
    <img src=""C:\Users\rsn36\OneDrive\Pictures\Screenshots\WhatsApp Image 2025-06-01 at 09.12.28_91429d75.jpg"" alt="Profile Image">
    <h2>${profileData.name}</h2>
    <h4>${profileData.role}</h4>
    <p>${profileData.description}</p>
    <div class="social-links">
        <a href="${profileData.socials.linkedin}" target="_blank">LinkedIn</a>
        <a href="${profileData.socials.github}" target="_blank">GitHub</a>
    </div>
`;

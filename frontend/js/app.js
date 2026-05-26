import { api } from "./api.js";
import {
    renderProfile,
    renderSkills,
    renderProjects,
    renderEducation,
    renderExperience,
    renderCertifications
} from "./render.js";


async function init() {
    const results = await Promise.allSettled([
        api.getProfile(),
        api.getSkills(),
        api.getProjects(),
        api.getEducation(),
        api.getExperience(),
        api.getCertifications()
    ]);

    const [profile, skills, projects, education, experience, certifications] = results;

    if (profile.status === "fulfilled") {
        renderProfile(profile.value);
    } else {
        const err = profile.reason;
        console.error("Profile API error:", err);
        document.getElementById("hero-title").textContent = "Data Science Engineer | FastAPI Developer";
        document.getElementById("hero-about").textContent = "Computer Science graduate with hands-on experience in Python, SQL, FastAPI and Machine Learning.";
        showError("profile", err);
    }

    if (skills.status === "fulfilled") {
        renderSkills(skills.value);
    } else {
        const err = skills.reason;
        console.error("Skills API error:", err);
        document.getElementById("skills-container").innerHTML =
            `<p class="text-red-500 text-sm">Failed to load skills: ${err.message}</p>`;
        showError("skills", err);
    }

    if (projects.status === "fulfilled") {
        renderProjects(projects.value);
    } else {
        const err = projects.reason;
        console.error("Projects API error:", err);
        document.getElementById("projects-container").innerHTML =
            `<p class="text-red-500 text-sm">Failed to load projects: ${err.message}</p>`;
        showError("projects", err);
    }

    if (education.status === "fulfilled") {
        renderEducation(education.value);
    } else {
        const err = education.reason;
        console.error("Education API error:", err);
        document.getElementById("education-container").innerHTML =
            `<p class="text-red-500 text-sm">Failed to load education: ${err.message}</p>`;
        showError("education", err);
    }

    if (experience.status === "fulfilled") {
        renderExperience(experience.value);
    } else {
        const err = experience.reason;
        console.error("Experience API error:", err);
        document.getElementById("experience-container").innerHTML =
            `<p class="text-red-500 text-sm">Failed to load experience: ${err.message}</p>`;
        showError("experience", err);
    }

    if (certifications.status === "fulfilled") {
        renderCertifications(certifications.value);
    } else {
        const err = certifications.reason;
        console.error("Certifications API error:", err);
        document.getElementById("certifications-container").innerHTML =
            `<p class="text-red-500 text-sm">Failed to load certifications: ${err.message}</p>`;
        showError("certifications", err);
    }
}


function showError(section, err) {
    const el = document.getElementById("debug-errors");
    if (el) {
        el.style.border = "1px solid #fecaca";
        el.style.background = "#fef2f2";
        el.style.padding = "1rem";
        el.style.borderRadius = "8px";
        el.innerHTML += `<p class="text-red-600 text-sm"><strong>${section}</strong>: ${err.message}</p>`;
    }
}


document.getElementById("contact-form")
    .addEventListener("submit", async (e) => {
        e.preventDefault();

        const nameInput = document.getElementById("contact-name");
        const emailInput = document.getElementById("contact-email");
        const messageInput = document.getElementById("contact-message");
        const statusEl = document.getElementById("contact-status");

        // Client-side validation
        if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
            statusEl.textContent = "Name must be at least 2 characters";
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            statusEl.textContent = "Please enter a valid email address";
            return;
        }

        if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
            statusEl.textContent = "Message must be at least 10 characters";
            return;
        }

        const payload = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            message: messageInput.value.trim()
        };

        try {
            const response = await api.sendContact(payload);
            statusEl.textContent = response.message;
            statusEl.style.color = "#22c55e";
            e.target.reset();
        } catch (error) {
            statusEl.textContent = error.message || "Failed to send message";
            statusEl.style.color = "#ef4444";
        }
    });


init();

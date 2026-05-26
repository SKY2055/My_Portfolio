export function renderProfile(data) {
    document.getElementById("nav-name").textContent = data.name;
    document.getElementById("hero-title").textContent = data.title;
    document.getElementById("hero-about").textContent = data.about;

    const linksEl = document.getElementById("hero-links");
    linksEl.innerHTML = `
        <a href="${data.github}" target="_blank">GitHub</a>
        <a href="${data.linkedin}" target="_blank">LinkedIn</a>
        <a href="mailto:${data.email}">${data.email}</a>
        <span>${data.location}</span>
    `;
}

export function renderSkills(data) {
    const container = document.getElementById("skills-container");
    container.innerHTML = "";

    data.forEach(skill => {
        const section = document.createElement("div");
        section.className = "skill-category";
        section.innerHTML = `
            <h3>${skill.category}</h3>
            <div class="skill-tags">
                ${skill.skills.map(s => `<span class="skill-tag">${s}</span>`).join("")}
            </div>
        `;
        container.appendChild(section);
    });
}

export function renderProjects(data) {
    const container = document.getElementById("projects-container");
    container.innerHTML = "";

    data.forEach((project, i) => {
        const a = document.createElement("a");
        a.href = project.github;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = `card ${i === 0 ? "project-wide" : ""}`;
        a.style.textDecoration = "none";
        a.style.display = "block";
        a.innerHTML = `
            <h3 class="card-title" style="font-size: 1.25rem; margin-bottom: 0.5rem;">${project.title}</h3>
            <p class="card-text" style="margin-bottom: 1rem;">${project.description}</p>
            <div class="project-tech">
                ${(project.tech || []).map(t => `<span>${t}</span>`).join("")}
            </div>
            <span class="card-link">View on GitHub</span>
        `;
        container.appendChild(a);
    });
}

export function renderEducation(data) {
    const container = document.getElementById("education-container");
    container.innerHTML = "";

    data.forEach(edu => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                <div class="edu-icon">&#x1F393;</div>
                <span class="edu-year">${edu.year}</span>
            </div>
            <h3 class="card-title">${edu.degree}</h3>
            <p class="card-text" style="margin-bottom: 0.5rem;">${edu.institution}</p>
            ${edu.cgpa ? `<span class="edu-cgpa">CGPA: ${edu.cgpa}</span>` : ""}
        `;
        container.appendChild(div);
    });
}

export function renderExperience(data) {
    const container = document.getElementById("experience-container");
    container.innerHTML = "";

    data.forEach(exp => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <div class="exp-header">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <div class="exp-icon">&#x1F4BC;</div>
                    <div>
                        <h3 class="card-title">${exp.role}</h3>
                        <p class="exp-company">${exp.company}</p>
                    </div>
                </div>
                <span class="exp-period">${exp.period}</span>
            </div>
            <ul class="exp-bullets">
                ${exp.highlights.map(h => `<li>${h}</li>`).join("")}
            </ul>
        `;
        container.appendChild(div);
    });
}

export function renderCertifications(data) {
    const container = document.getElementById("certifications-container");
    container.innerHTML = "";

    data.forEach(cert => {
        const div = document.createElement("div");
        div.className = "cert-item";
        div.innerHTML = `
            <span class="cert-icon">&#x2714;</span>
            <div>
                <span class="cert-title">${cert.title}</span>
                <span class="cert-provider"> — ${cert.provider}</span>
            </div>
        `;
        container.appendChild(div);
    });
}

const API_BASE = "/api/v1";

console.log("[api.js] API_BASE =", JSON.stringify(API_BASE));

async function request(endpoint, options = {}) {
    const url = `${API_BASE}${endpoint}`;
    console.log(`[api.js] Fetching`, url);
    const response = await fetch(url, options);

    if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(`HTTP ${response.status}: ${text.slice(0, 100)}`);
    }

    return response.json();
}

export const api = {
    getProfile: () => request("/profile/"),
    getSkills: () => request("/skills/"),
    getProjects: () => request("/projects/"),
    getEducation: () => request("/education/"),
    getExperience: () => request("/experience/"),
    getCertifications: () => request("/certifications/"),

    sendContact: (data) =>
        request("/contact/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
};

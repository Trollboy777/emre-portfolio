const projects = [
    { name: "emre-portfolio", url: "https://github.com/Trollboy777/emre-portfolio", description: "Mijn persoonlijke portfolio-website." },
    { name: "Game_Story_AI_CLIENT", url: "https://github.com/Trollboy777/Game_Story_AI_CLIENT", description: "Een AI-client om gameverhalen te genereren." },
    { name: "AI_GameStory_ChatBot", url: "https://github.com/Trollboy777/AI_GameStory_ChatBot", description: "Een chatbot die helpt bij het maken van rijke gamestories." },
    { name: "prg8-beeldherkenning", url: "https://github.com/Trollboy777/prg8-beeldherkenning", description: "Een JavaScript-project voor beeldherkenning." },
    { name: "Pokemon Rotterdam League", url: "https://github.com/Trollboy777/PRG7-eindopdracht", description: "React Native Opdracht, work in progress." },
    { name: "pokemon-emerald-romhack", url: "https://github.com/Trollboy777/pokemon-emerald-romhack", description: "Testproject voor een Pokémon Emerald ROM-hack." },
    { name: "PRG6-webservice-emre", url: "https://github.com/Trollboy777/PRG6-webservice-emre", description: "Webservice project PRG6, gemaakt met express." },
    { name: "frontend_eindopdracht_prg6_emre", url: "https://github.com/Trollboy777/frontend_eindopdracht_prg6_emre", description: "Frontend eindopdracht voor PRG6, react." },
    { name: "PRG5-Eindopdracht", url: "https://github.com/Trollboy777/PRG5-Eindopdracht", description: "Laravel Opdracht!" },
    { name: "Gary's Adventures", url: "https://github.com/Trollboy777/Emre-PRG4", description: "Een leuke gameproject: Gary's Adventures." },
    { name: "frontend-eind", url: "https://github.com/Trollboy777/frontend-eind", description: "Frontend eindproject." },
    { name: "frontend-tussenopdracht", url: "https://github.com/Trollboy777/frontend-tussenopdracht", description: "Mijn eerste project!" }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
    const item = document.createElement("li");
    item.innerHTML = `<a href="${project.url}" target="_blank">${project.name}</a><br><span>${project.description}</span>`;
    projectList.appendChild(item);
});

// main.js
fetch('assets/data/projects.json')
    .then(response => response.json())
    .then(data => {
        const projectContainer = document.getElementById('latest-projects');
        
        // Ordenar los proyectos por fecha, de más reciente a más antiguo
        data.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Tomar los últimos 3 proyectos
        data.slice(0, 3).forEach(project => {
            const projectCard = `
                <div class="col-md-4">
                    <a href="${project.link}" class="card-link">
                        <div class="card mb-4 shadow-sm">
                            <img src="${project.image}" class="card-img-top" alt="Imagen del ${project.title}">
                            <div class="card-body text-center">
                                <h5 class="card-title">${project.title}</h5>
                                <p class="card-text">${project.description}</p>
                                <div class="d-flex justify-content-center flex-wrap">
                                    ${project.keywords.map(keyword => `<span class="badge bg-success me-2">${keyword}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            `;
            projectContainer.innerHTML += projectCard;
        });
    });

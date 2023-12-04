document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Modern House',
            imageUrl: 'path_to_project1_image.jpg',
            description: 'Sleek and modern residential design with an emphasis on sustainable materials.',
            link: '#'
        },
        {
            title: 'Commercial Complex',
            imageUrl: 'path_to_project2_image.jpg',
            description: 'An innovative commercial complex combining aesthetics with practical business needs.',
            link: '#'
        },
        {
            title: 'Renovation Project',
            imageUrl: 'path_to_project3_image.jpg',
            description: 'A bold and sensitive renovation of a historic building.',
            link: '#'
        },
        // Add more project objects here
    ];

    const createProjectElement = project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project-item');
        projectElement.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.title}" class="project-image">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <a href="${project.link}" class="project-link">View Project</a>
        `;
        return projectElement;
    };

    const projectsGrid = document.querySelector('.projects-grid');

    projects.forEach(project => {
        const projectElement = createProjectElement(project);
        projectsGrid.appendChild(projectElement);
    });

});

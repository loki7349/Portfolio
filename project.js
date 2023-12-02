let projectData = [
    {
        image: 'assets/project-1.png',
        name: 'project one',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
        github: '#',
        live: '#',
        tags: '#javascript, #fullstack, #css, #all'
    },
    {
        image: 'assets/project-2.png',
        name: 'project two',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
        github: '#',
        live: '#',
        tags: '#javascript, #css, #all'
    },
    {
        image: 'assets/project-3.png',
        name: 'project three',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
        github: '#',
        live: '#',
        tags: '#javascript, #all'
    },
    {
        image: 'assets/project-4.png',
        name: 'project four',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
        github: '#',
        live: '#',
        tags: '#fullstack, #css, #all'
    },
    {
        image: 'assets/project-5.png',
        name: 'project five',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
        github: '#',
        live: '#',
        tags: '#fullstack, #ll'
    },
    {
        image: 'assets/project-6.png',
        name: 'project six',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
        github: '#',
        live: '#',
        tags: '#css, #all'
    },
    {
        image: 'assets/project-7.png',
        name: 'project seven',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
        github: '#',
        live: '#',
        tags: '#javascript, #all'
    },
    {
        image: 'assets/project-8.png',
        name: 'project eight',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
        github: '#',
        live: '#',
        tags: '#css, #all'
    },
]

//creating project cards in frontend

const createProjectsCards = (data) => {
    let projectContainer = document.querySelector('.project-container');

    projectContainer.innerHTML += `
    <div class="project-card" data-tags="${data.tags}">
                <div class="project-wrapper">
                    <div class="project-thumbnail">
                        <img src="assets/close.png" class="close-btn" alt="">
                        <img src="${data.image}" class="project-img" alt="">
                        <span class="tags">${data.tags}</span>
                    </div>

                    <div class="project-body">
                        <h1 class="project-name">${data.name}</h1>
                            <p class="project-details">${data.detail}.</p>
                            <a href="${data.github}" class="btn">Github</a>
                            <a href="${data.live}" class="btn">See Live</a>
                    </div>
                </div>
            </div>
    `;
}

projectData.forEach(data => createProjectsCards(data))
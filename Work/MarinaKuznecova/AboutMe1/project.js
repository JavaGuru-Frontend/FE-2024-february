let projects = [
    {
        name: "project one",
        tags: "#javascript",
        image: "project-1.png",
    },
    {
        name: "project two",
        tags: "#javascript, #fullstack",
        image: "project-2.png",
    },
    {
        name: "project three",
        tags: "#javascript,#ui/ux",
        image: "project-3.png",
    },
    {
        name: "project four",
        tags: "#fullstack, #ui/ux, #backend",
        image: "project-4.png",
    },
   
]

// creating dynamic project card
const projectContainer = document.querySelector('.project-container');
projects.forEach(project => {
    projectContainer.innerHTML += `
    <div class="project-card" data-tags="#all, ${project.tags}">
        <img src="img/${project.image}" alt="">
        <div class="content">
            <h1 class="project-name">${project.name}</h1>
            <span class="tags">${project.tags}</span>
        </div>
    </div>
    `;
})

// filters
const filters = document.querySelectorAll('.filter-btn');
filters.forEach(filterBtn => {
    filterBtn.addEventListener('click', () => {
        let id = filterBtn.getAttribute('id');
        let projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            if(card.getAttribute('data-tags').includes(id)){
                card.classList.remove('hide');
            } else{
                card.classList.add('hide');
            }
        })
        filters.forEach(btn => btn.classList.remove('active'));
        filterBtn.classList.add('active');
    })
})

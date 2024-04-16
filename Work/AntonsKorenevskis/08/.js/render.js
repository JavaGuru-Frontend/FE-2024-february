projects.forEach(project => {
    document.getElementById('projects').innerHTML += `
<section class="project">
<div class="project__img">
    <img src="${project.image}">
</div>
<div class="project__text">
    <div class="title__subtext">${project.title}</div>
        <p>${project.description}</p>
        <div class="project__resources">
            ${project.resources.forEach((i, resource) => {
                return
                `<div class="project__resource"><div class="icon projects-html"></div>${resource[i]}</div>` // все еще undefined
            })}
        
    </div>
</div>
</section>`;

}
);


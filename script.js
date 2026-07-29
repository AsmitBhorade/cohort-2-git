const users = [
    {
        fullName: "Aarav Mehta",
        profession: "UX Designer",
        description: "Designs apps that feel human. Loves coffee & pixel-perfect layouts.",
        tags: ["Figma", "UI/UX", "Design Systems", "Freelancer"]
    },
    {
        fullName: "Emily Carter",
        profession: "Software Engineer",
        description: "Writes clean code and breaks things just to fix them better.",
        tags: ["React", "TypeScript", "Open Source", "Tech Speaker"]
    },
    {
        fullName: "Aisha Khan",
        profession: "Data Scientist",
        description: "Finds patterns in the noise. Speaks fluently in charts and numbers.",
        tags: ["Python", "AI", "Machine Learning", "Analytics"]
    },
    {
        fullName: "Noah Williams",
        profession: "Content Creator",
        description: "Makes complex topics easy. Lives on caffeine and camera angles.",
        tags: ["Video Editing", "Education", "YouTube", "Storytelling"]
    }
];

var sum = ''

users.forEach(function (elem) {
    sum = sum + `<div class="card">
            <h2>${elem.fullName}</h2>
            <h3>${elem.profession}</h3>
        <h5>${elem.description}</h5>
    </div> `

})

var main = document.querySelector('main')

main.innerHTML = sum
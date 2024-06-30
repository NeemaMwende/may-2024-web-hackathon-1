document.addEventListener('DOMContentLoaded', () => {
    const experienceContainer = document.getElementById('experience-container');

    experienceData.forEach(details => {
        const card = document.createElement('div');
        card.className = 'work-experience-card';

        const title = document.createElement('h6');
        title.textContent = details.title;

        const date = document.createElement('div');
        date.className = 'work-duration';
        date.textContent = details.date;

        const ul = document.createElement('ul');
        details.responsibilities.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });

        card.appendChild(title);
        card.appendChild(date);
        card.appendChild(ul);

        experienceContainer.appendChild(card);
    });
});

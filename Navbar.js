class NavBar extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'nav-bar');

    const liHome = document.createElement('li');
    const aHome = document.createElement('a');
    aHome.setAttribute('href', '/index.html');
    aHome.textContent = 'Home';
    liHome.appendChild(aHome);

    const liBlog = document.createElement('li');
    const aBlog = document.createElement('a');
    aBlog.setAttribute('href', '/blog/root.html');
    aBlog.textContent = 'Blog';
    liBlog.appendChild(aBlog);

    const liProjects = document.createElement('li');
    const aProjects = document.createElement('a');
    aProjects.setAttribute('href', '/projects/root.html');
    aProjects.textContent = 'Projects';
    liProjects.appendChild(aProjects);

    const liWork = document.createElement('li');
    const aWork = document.createElement('a');
    aWork.setAttribute('href', '/index.html');
    aWork.textContent = 'Work';
    liWork.appendChild(aWork);

    const liResume = document.createElement('li');
    const aResume = document.createElement('a');
    aResume.setAttribute('href', '/assets/resume.pdf');
    aResume.setAttribute('target', '_blank');
    aResume.textContent = 'Resume';
    liResume.appendChild(aResume);

    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', '/styles.css');
    shadow.appendChild(linkElem);
    shadow.appendChild(ul);
    ul.appendChild(liHome);
    ul.appendChild(liBlog);
    ul.appendChild(liProjects);
    ul.appendChild(liWork);
    ul.appendChild(liResume);
  }
}

customElements.define('nav-bar', NavBar);

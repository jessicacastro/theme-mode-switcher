const switchElement = document.getElementById('switch');
const mainTag = document.querySelector('main');
const footerTag = document.querySelector('footer');
const darkTheme = getComputedStyle(document.documentElement).getPropertyValue('--dark');
const lightTheme = getComputedStyle(document.documentElement).getPropertyValue('--light');
const h3Title = document.querySelector('h3');
const divAboutProject = document.querySelector('div.about-project');
const linkGithub = document.querySelector('strong > a')


changeTheme = (e) => {
  if (e.target.checked) {
    localStorage.setItem('theme', 'dark');
    mainTag.style.backgroundColor = darkTheme;
    footerTag.style.backgroundColor = darkTheme;
    footerTag.style.color = lightTheme;
    h3Title.style.color = lightTheme;  
    divAboutProject.style.color = lightTheme;
    return;
  }

  localStorage.setItem('theme', 'light');
  mainTag.style.backgroundColor = lightTheme;
  footerTag.style.backgroundColor = lightTheme;
  footerTag.style.color = darkTheme;
  h3Title.style.color = darkTheme;
  divAboutProject.style.color = darkTheme;
  return;
}

switchElement.onclick = (event) => changeTheme(event)

const switchElement = document.getElementById('switch');
const mainTag = document.querySelector('main');
const darkTheme = getComputedStyle(document.documentElement).getPropertyValue('--dark');
const lightTheme = getComputedStyle(document.documentElement).getPropertyValue('--light');
const h3Title = document.querySelector('h3');
const divAboutProject = document.querySelector('div.about-project');
const linkGithub = document.querySelector('strong > a')


changeTheme = (e) => {
  if (e.target.checked) {
    localStorage.setItem('theme', 'dark');
    mainTag.style.backgroundColor = darkTheme;
    h3Title.style.color = lightTheme;  
    divAboutProject.style.color = lightTheme;
    return;
  }

  localStorage.setItem('theme', 'light');
  mainTag.style.backgroundColor = lightTheme;
  h3Title.style.color = darkTheme;
  divAboutProject.style.color = darkTheme;
  return;
}

switchElement.onclick = (event) => changeTheme(event)

console.log('Connected');
const footer = document.getElementById('footer');
// function to load footer
const loadFooter = () => {
  fetch('https://bunny-developers.github.io/codequiz/footer/footer.html')
  .then(res => res.text())
  .then(data => {
    footer.insertAdjacentHTML('beforeend', data);
  })
  .catch(error => console.error('Error loading footer:', error));
}

//Call the function to load footer
loadFooter();

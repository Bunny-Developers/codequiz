// Function to load footer
function loadFooter() {
  fetch('footer/index.html')
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML('beforeend', data);
    })
    .catch(error => console.error('Error loading footer:', error));
}

// Call the function to load footer
loadFooter();
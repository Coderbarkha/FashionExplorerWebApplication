// Function to show the correct section
function showSection(sectionId) {
  // Hide all sections
  let sections = document.querySelectorAll('.section');
  sections.forEach((section) => {
      section.style.display = 'none';  // Hide all sections
  });

  // Show the selected section
  let section = document.getElementById(sectionId);
  if (section) {
    section.style.display = 'block';  // Display the chosen section
  }
}


// Explore Section: Dynamic Loading of Fashion Items
function loadExplore() {
  let exploreContainer = document.getElementById('exploreContainer');
  
  // Example of dynamically loading fashion items
  const fashionItems = [
      { name: 'Fashion Item 1', imgSrc: 'images/fashion1.jpg' },
      { name: 'Fashion Item 2', imgSrc: 'images/fashion2.jpg' },
      { name: 'Fashion Item 3', imgSrc: 'images/fashion3.jpg' },
  ];

  // Clear previous content
  exploreContainer.innerHTML = '';

  fashionItems.forEach((item) => {
      let itemDiv = document.createElement('div');
      itemDiv.classList.add('fashion-item');
      itemDiv.innerHTML = `
          <img src="${item.imgSrc}" alt="${item.name}" class="fashion-image">
          <p>${item.name}</p>
      `;
      exploreContainer.appendChild(itemDiv);
  });
}

// Dashboard Functionality: Add charts and graphs dynamically
function loadDashboard() {
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: ['Fashion', 'Beauty', 'Lifestyle'],
          datasets: [{
              label: 'Categories',
              data: [50, 30, 20],
              backgroundColor: ['#ff5733', '#33b5ff', '#ffcc00'],
              borderColor: ['#ffffff', '#ffffff', '#ffffff'],
              borderWidth: 1
          }]
      }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Load home page by default
  showSection('homePage');

  // Event listeners for menu links
  document.getElementById('homeLink').addEventListener('click', () => showSection('homePage'));
  document.getElementById('dashboardLink').addEventListener('click', () => {
      showSection('dashboardPage');
      loadDashboard();  // Load dashboard charts
  });
  document.getElementById('exploreLink').addEventListener('click', () => {
      showSection('explorePage');
      loadExplore();  // Load fashion items dynamically
  });
  document.getElementById('workspaceLink').addEventListener('click', () => {
      showSection('workspacePage');
  });
  document.getElementById('logoutLink').addEventListener('click', logout);
});

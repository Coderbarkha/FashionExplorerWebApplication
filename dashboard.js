// Sales Chart
const salesCtx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(salesCtx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Sales (in $)',
            data: [12000, 19000, 3000, 5000, 20000],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' }
        },
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Popularity Chart
const popularityCtx = document.getElementById('popularityChart').getContext('2d');
const popularityChart = new Chart(popularityCtx, {
    type: 'pie',
    data: {
        labels: ['Brand A', 'Brand B', 'Brand C', 'Brand D', 'Brand E'],
        datasets: [{
            label: 'Popularity',
            data: [30, 25, 20, 15, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
            ]
        }]
    }
});
const trendCtx = document.getElementById('trendChart').getContext('2d');
const trendChart = new Chart(trendCtx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Users Growth',
            data: [50, 100, 200, 300, 400],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' }
        },
        scales: {
            y: { beginAtZero: true }
        }
    }
});
const categoryCtx = document.getElementById('categoryChart').getContext('2d');
const categoryChart = new Chart(categoryCtx, {
    type: 'doughnut',
    data: {
        labels: ['Clothing', 'Accessories', 'Shoes', 'Jewelry'],
        datasets: [{
            label: 'Category Distribution',
            data: [40, 20, 25, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' }
        }
    }
});
const ratingsCtx = document.getElementById('ratingsChart').getContext('2d');
const ratingsChart = new Chart(ratingsCtx, {
    type: 'radar',
    data: {
        labels: ['Design', 'Quality', 'Price', 'Durability', 'Popularity'],
        datasets: [{
            label: 'Rating (out of 5)',
            data: [4, 5, 3, 4, 4.5],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' }
        },
        scales: {
            r: { beginAtZero: true }
        }
    }
});
const topProductsCtx = document.getElementById('topProductsChart').getContext('2d');
const topProductsChart = new Chart(topProductsCtx, {
    type: 'polarArea',
    data: {
        labels: ['T-Shirts', 'Jeans', 'Hats', 'Shoes', 'Watches'],
        datasets: [{
            label: 'Popularity',
            data: [20, 25, 15, 30, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' }
        }
    }
});
const bubbleCtx = document.getElementById('bubbleChart').getContext('2d');
const bubbleChart = new Chart(bubbleCtx, {
    type: 'bubble',
    data: {
        datasets: [{
            label: 'Products',
            data: [
                { x: 10, y: 20, r: 15 },
                { x: 15, y: 10, r: 10 },
                { x: 20, y: 30, r: 20 },
                { x: 25, y: 15, r: 25 }
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' }
        },
        scales: {
            x: { beginAtZero: true },
            y: { beginAtZero: true }
        }
    }
});

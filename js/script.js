
// data for farmers per ward
const farmersData = {
  labels: ['Ward 1', 'Ward 2', 'Ward 3', 'Ward 4', 'Ward 5'],
  datasets: [{
    label: 'Farmers per ward (percentage)',
    data: [25, 20, 30, 15, 10],
    backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745', '#6f42c1']
  }]
};

// data for uploads per ward
const uploadsData = {
  labels: ['Ward 1', 'Ward 2', 'Ward 3', 'Ward 4', 'Ward 5'],
  datasets: [{
    label: 'Uploads per ward (percentage)',
    data: [20, 25, 15, 30, 10],
    backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745', '#6f42c1']
  }]
};

// options for both charts
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
};

// create farmers per ward chart
const farmersChart = new Chart(document.getElementById('farmers-chart'), {
  type: 'pie',
  data: farmersData,
  options: chartOptions
});

// create uploads per ward chart
const uploadsChart = new Chart(document.getElementById('uploads-chart'), {
  type: 'pie',
  data: uploadsData,
  options: chartOptions
});




// Create the data sets for the production chart
var productionData = {
    labels: ["November 2022", "December 2022", "January 2023"],
    datasets: [
      {
        label: "Maize",
        data: [500, 600, 700],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1
      },
      {
        label: "Beans",
        data: [300, 400, 500],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1
      },
      {
        label: "Peas",
        data: [200, 300, 400],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1
      }
    ]
  };

  // Create the data sets for the profits chart
  var profitsData = {
    labels: ["August 2022", "September 2022", "October 2022", "November 2022", "December 2022", "January 2023"],
    datasets: [
      {
        label: "Profits",
        data: [10000, 12000, 11000, 13000, 14000, 15000],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1
      }
    ]
  };

  // Get the canvas elements for the production chart and the profits chart
  var productionChartCanvas = document.getElementById("production-chart").getContext("2d");
  var profitsChartCanvas = document.getElementById("profits-chart").getContext("2d");

  // Create the bar chart for the production chart
  var productionChart = new Chart(productionChartCanvas, {
    type: "bar",
    data: productionData,
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });

  // Create the line chart for the profits chart
  var profitsChart = new Chart(profitsChartCanvas, {
    type: "line",
    data: profitsData,
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
})
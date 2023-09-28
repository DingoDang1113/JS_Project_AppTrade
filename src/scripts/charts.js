
  
  export function buildPieChart(labels, percentageContributions, colors) {
    const ctx = document.getElementById('pieChart').getContext('2d');
    
    const pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: percentageContributions,
          backgroundColor: colors,
          // ... other chart properties
        }]
      },
      options: {
        // ... chart options
      }
    });
  
    return pieChart;
  }
  
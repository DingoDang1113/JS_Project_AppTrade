
export function buildChart(labels, gainLosses) {
    const ctx = document.getElementById('myChart').getContext('2d');
  
    const myChart = new Chart(ctx, {
      type: 'bar', 
      data: {
        labels: labels,
        datasets: [{
          label: 'Gain/Loss in USD',
          data: gainLosses,
          // ... other chart properties
        }]
      },
      options: {
        // ... chart options
      },
    });
  
    return myChart;
  }
  

  
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
  
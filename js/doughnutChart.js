var ctx = document.getElementById("doughnutChart").getContext('2d');
var doughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Phontes', 'Tablets', 'Desktop'],
        datasets: [{
            label: 'Traffic',
            data: ["70", "13", "13"],
            backgroundColor: [
              '#65619E',
              '#7DD4A1',
              '#7496B4'

            ],
            borderColor: [
              'rgb(91, 44, 129)'
            ],

            borderWidth: 1
        }]
    },
    options: {
      elements: {
        line: {
            tension: 0,
      scales: {
          yAxes: [{
            type: 'category',
            labels: ["2500", "2000", "1500", "1000", "500", "0"],
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  }
}
});


//Weekly
var ctx = document.getElementById("weeklyChart").getContext('2d');
var weeklyChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Week-1', 'Week-2', 'Week-3', 'Week-4', 'Week-5', 'Week-6', 'Week-7', 'Week-8'],
        datasets: [{
            label: 'Traffic',
            data: ["500", "1000", "800", "1200", "1000", "1300", "1200", "1500", "1400", "1800", "1700", "200"],
            backgroundColor: [
              'rgba(191, 162, 215, 0.2)',

            ],
            borderColor: [
              'rgb(91, 44, 129)'
            ],

            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false,
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

    }}
  }
}
}});



//

//Monthly
var ctx = document.getElementById("monthlyChart").getContext('2d');
var monthlyChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'Traffic',
            data: ["1700","1900","2100","2200","2500","2100","2000","1800","2000", "2200", "2400", "2200"],
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

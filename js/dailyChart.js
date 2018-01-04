//Daily
var ctx = document.getElementById("dailyChart").getContext('2d');
var dailyChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
        datasets: [{
            label: 'Traffic',
            data: ["120", "200", "75", "80","180","210","280"],
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

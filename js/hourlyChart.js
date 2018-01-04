//Hourly
var ctx = document.getElementById("hourlyChart").getContext('2d');
var hourlyChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['12a','1a','2a','3a','4a','5a','6a','7a','8a','9a','10a','11a','12p','1p','2p','3p','4p','5p','6p','7p','8p','9p','10p','11p'],
        datasets: [{
            label: 'Traffic',
            data: ["3","15","22","50","25","28","30","45","70","13","80","70","44","22", "50","80","32","33","44","88","34","22","48","55"],
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

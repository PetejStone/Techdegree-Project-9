var ctx = document.getElementById("barChart").getContext('2d');
var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['S','M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: 'Traffic',
            data: ["50", "100", "75", "150", "200", "175", "7"],
            backgroundColor: [
              '#65619E',
              '#65619E',
              '#65619E',
              '#65619E',
              '#65619E',
              '#65619E',
              '#65619E'

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
                    beginAtZero: false
                }
            }]
        }
    }
  }
}
}});

var width = document.documentElement.clientWidth > 768 ? 1140 : document.documentElement.clientWidth;

var chartCtx = document.getElementById("chartjs-test").getContext('2d');

var chartConfig = {
    type: 'bar',
    data: {
        labels: ['1 кв. 2018', '2 кв. 2018', '3 кв. 2018', '4 кв. 2018', '1 кв. 2019', '2 кв. 2019', '3 кв. 2019', '4 кв. 2019', '1 кв. 2020', '2 кв. 2020', '3 кв. 2020', '4 кв. 2020'
        ],
        datasets: [{
            label: 'Сервисные центры открыто',
             backgroundColor: '#023e7f',
            borderColor: '#023e7f',

            fill: false,
            data: [
            67,
            86,
            106,
            143,
            200,
            300,
            400,
            500,
            600,
            700,
            800,
            900
            ]
        }, {
             label: 'Сервисные центры на открытии',

           backgroundColor: '#ffc12a',
            borderColor: '#ffc12a',
            fill: false,
            data: [
                12,
                30,
                74,
                87,
                100,
                110,
                120,
                120,
                120,
                120,
                120,
                120
            ]
        }]
    },
    options: {
        responsive: false,
        title: {
            display: false,
            text: 'Растём из года в год'
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                stacked: true,
                scaleLabel: {
                    display: false,
                    labelString: 'Месяц'
                },
                ticks: {
                    autoSkip: false
                }
            }],
            yAxes: [{
                display: true,
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Сервисы'
                },
                ticks: {
                    min: 0,
                    stepSize: 100
                }
            }]
        }
    }
};

window.chart = new Chart(chartCtx, chartConfig);

/*
 {
            label: 'На стадии открытия',
            backgroundColor: '#242424',
            borderColor: '#242424',
            fill: false,
            data: [
                4,
                4,
                7,
                12,
                9,
                23,
                30,
                42,
                57,
                74,
                87,
                80,
                72,
                79
            ]
        }
*/

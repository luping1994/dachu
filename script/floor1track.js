var dom = document.getElementById("track");
var myChart = echarts.init(dom);
var track1Color = "#006d6a";
var track2Color = "#1f8e94";
var trackSpeed = 80;
var track1 = [
    {
        name: "test",
        coords: [
            [0, 280],  // 起点
            [865, 280],
            [865, 390],
            [1500, 390],

        ],

        lineStyle: {
            normal: {
                color: "#006d6a"
            }
        }
    }

];
var track2 = [
    {
        name: "test",
        coords: [
            [530, 0],  // 起点
            [530, 280],
            [865, 280],
            [865, 390],
            [1500, 390],

        ],

        lineStyle: {
            normal: {
                color: "#006d6a"
            }
        }
    }
];
var track3 = [
    {
        name: "test",
        coords: [
            [0, 480],  // 起点
            [200, 480],
            [200, 280],
            [865, 280],
            [865, 390],
            [1500, 390],
        ],

        lineStyle: {
            normal: {
                color: "#006d6a"
            }
        }
    }
];
var track4 = [
    {
        name: "test",
        coords: [
            [200, 680],  // 起点
            [200, 480],
            [200, 280],
            [865, 280],
            [865, 390],
            [1500, 390],
        ],

        lineStyle: {
            normal: {
                color: "#006d6a"
            }
        }
    }
];var track5 = [
    {
        name: "test",
        coords: [
            [530, 0],  // 起点
            [530, 280],
            [0, 280],
        ],

        lineStyle: {
            normal: {
                color: "#006d6a"
            }
        }
    }
];

var xAxisData = [];
var yAxisData = [];
for (var i = 0; i <= 1309; i++) {
    xAxisData.push(i);
}
for (var i = 0; i <= 693; i++) {
    yAxisData.push(i);
}
var option = {
    backgroundColor: 'rgba(255,255,255,0)',
    title: {
        show: false,
        text: '',
        subtext: '',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        show: false,
        trigger: 'item'
    },
    xAxis: {

        max: 1309,
        min: 0,
        show: false,
        data: xAxisData
    },
    yAxis: {
        max: 693,
        min: 0,
        show: false,
        data: yAxisData
    },
    legend: {
        show: false,
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: [''],
        textStyle: {
            color: '#fff'
        },
    },

    series: [
        {
            type: 'lines',
            animation: false,
            coordinateSystem: 'cartesian2d',
            polyline: true,
            data: track1,
            lineStyle: {
                // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
                width: 0
            },
            effect: {
                constantSpeed: 80,
                show: true,
                trailLength: 0.5,
                symbolSize: 4,
                color: "#1f8e94"
            },
            zlevel: 1
        },

        {

            type: 'lines',
            animation: false,
            coordinateSystem: 'cartesian2d',
            polyline: true,
            data: track2,
            lineStyle: {
                // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
                width: 0
            },
            effect: {
                constantSpeed: 95,
                show: true,
                trailLength: 0.5,
                symbolSize: 4,
                color: "#016fb7"
            },
            zlevel: 1
        },

        {
            type: 'lines',
            animation: false,
            coordinateSystem: 'cartesian2d',
            polyline: true,
            data: track3,
            lineStyle: {
                // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
                width: 0
            },
            effect: {
                constantSpeed: 60,
                show: true,
                trailLength: 0.5,
                symbolSize: 4,
                color: "#027693"
            },
            zlevel: 1
        },

        {
            type: 'lines',
            animation: false,

            coordinateSystem: 'cartesian2d',
            polyline: true,
            data: track4,
            lineStyle: {
                // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
                width: 0
            },
            effect: {
                constantSpeed: 100,
                show: true,
                trailLength: 0.5,
                symbolSize: 4,
                color: "#b960ce"
            },
            zlevel: 1
        },

        {
            type: 'lines',
            animation: false,

            coordinateSystem: 'cartesian2d',
            polyline: true,
            data: track5,
            lineStyle: {
                // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
                width: 0
            },
            effect: {
                constantSpeed: 90,
                show: true,
                trailLength: 0.5,
                symbolSize: 4,
                color: "#45448f"
            },
            zlevel: 1
        }


    ]
};
myChart.setOption(option);

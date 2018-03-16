var dom = document.getElementById("track2");
var myChart2 = echarts.init(dom);
var track1Color = "#45448f";
var track2Color = "#b960ce";
var trackSpeed = 80;
var track21 = [
    {
        name: "test",
        coords: [
            [0, 450],  // 起点
            [64, 450],
            [160, 342],

            [180, 400],
            [192, 420],
            [215, 446],
            [225, 453],
            [245, 465],
            [256, 468],
            [320, 486],
            [1024, 486],



            [1024, 72],


            [1056, 20],
            [1152, 0],

        ],

        lineStyle: {
            normal: {
                color: "#006d6a"
            }
        }
    }

];
var track22 = [
    {
        name: "test",
        coords: [

            [160, 50],

            [180, 400],
            [192, 420],
            [215, 446],
            [225, 453],
            [245, 465],
            [256, 468],
            [320, 486],
            [1024, 486],



            [1024, 72],


            [1056, 20],
            [1152, 0],

        ],

        lineStyle: {
            normal: {
                color: "#006d6a"
            }
        }
    }
];
var track23 = [
    {
        name: "test",
        coords: [

            [1152, 0],
            [1056, 20],
            [1024, 72],
            [1024, 486],
            [320, 486],
            [256, 468],
            [245, 465],
            [225, 453],
            [215, 446],
            [192, 420],
            [180, 400],
            [160, 50],

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
];
var track5 = [
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
        data: xAxisData,
        axisLine: {
            show: true,
            lineStyle: {
                color: "#ffffff",
                width: '3'
            }
        },
    },
    yAxis: {
        max: 693,
        min: 0,
        show: false,
        data: yAxisData,
        axisLine: {
            show: true,
            lineStyle: {
                color: "#ffffff",
                width: '3'
            }
        },
    },
    legend: {
        show: false,
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: [''],
        textStyle: {
            color: '#fff'
        }
    },
    grid: {
        left: '2%',
        top: '0',
        right: '0%',
        bottom: '50',
    },

    series: [
        {
            type: 'lines',
            animation: false,
            coordinateSystem: 'cartesian2d',
            polyline: false,
            data: track21,
            lineStyle: {
                // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
                width: 0
            },
            effect: {
                constantSpeed: trackSpeed,
                show: true,
                trailLength: 0.5,
                symbolSize: 4,
                color: track1Color
            },
            zlevel: 1
        },
        {
            type: 'lines',
            animation: false,
            coordinateSystem: 'cartesian2d',
            polyline: true,
            data: track22,
            lineStyle: {
                // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
                width: 0
            },
            effect: {
                constantSpeed: trackSpeed,
                show: true,
                trailLength: 0.5,
                symbolSize: 4,
                color: track2Color
            },
            zlevel: 1
        },
        {
            type: 'lines',
            animation: false,
            coordinateSystem: 'cartesian2d',
            polyline: true,
            data: track23,
            lineStyle: {
                // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
                width: 0
            },
            effect: {
                constantSpeed: trackSpeed,
                show: true,
                trailLength: 0.5,
                symbolSize: 4,
                color: track2Color
            },
            zlevel: 1
        }
        // {
        //     type: 'lines',
        //     coordinateSystem: 'cartesian2d',
        //     polyline: true,
        //     data: track4,
        //     lineStyle: {
        //         // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
        //         width: 0
        //     },
        //     effect: {
        //         constantSpeed: trackSpeed,
        //         show: true,
        //         trailLength: 0.5,
        //         symbolSize: 10,
        //         color: track2Color
        //     },
        //     zlevel: 1
        // },
        // {
        //     type: 'lines',
        //     coordinateSystem: 'cartesian2d',
        //     polyline: true,
        //     data: track5,
        //     lineStyle: {
        //         // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
        //         width: 0
        //     },
        //     effect: {
        //         constantSpeed: trackSpeed,
        //         show: true,
        //         trailLength: 0.5,
        //         symbolSize: 10,
        //         color: track2Color
        //     },
        //     zlevel: 1
        // }


    ]
};
myChart2.setOption(option);

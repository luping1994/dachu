var defultColor = '#03AFF8';
var electricity = new Vue({
    el: "#electricity",
    data: {
        month: "--",
        today: "--",
        yesterday: "--"
    }
});
var floor1Env = new Vue({
    el: "#floor1Env",
    data: {
        pm25:'150',
        pm1:'',
        pm10:'',
        shidu:'',
        wendu:'',
        jiaquan:'',
        yanwu:'',
        showWendu:[],
        showShidu:[],
        showPm25:[],
        showPm10:[],
        showPm1:[],
        showYanwu:[],
        showJiaquan:[],
    }
});
var floor2Env = new Vue({
    el: "#floor2Env",
    data: {
        pm25:'',
        pm1:'',
        pm10:'',
        shidu:'',
        wendu:'',
        jiaquan:'',
        yanwu:'',
        showWendu:[],
        showShidu:[],
        showPm25:[     "轻度",
            "#FFFFFF"],
        showPm10:[],
        showPm1:[],
        showYanwu:[],
        showJiaquan:[],
    }
});
var floor3Env = new Vue({
    el: "#floor3Env",
    data: {
        pm25:'',
        pm1:'',
        pm10:'',
        shidu:'',
        wendu:'',
        jiaquan:'',
        yanwu:'',
        showWendu:[],
        showShidu:[],
        showPm25:[],
        showPm10:[],
        showPm1:[],
        showYanwu:[],
        showJiaquan:[],
    }
});
var floor4Env = new Vue({
    el: "#floor4Env",
    data: {
        pm25:'',
        pm1:'',
        pm10:'',
        shidu:'',
        wendu:'',
        jiaquan:'',
        yanwu:'',
        showWendu:[],
        showShidu:[],
        showPm25:[],
        showPm10:[],
        showPm1:[],
        showYanwu:[],
        showJiaquan:[],
    }
});

function setYdQvXian(json) {

    // var xData = [];
    // for (var i = 0; i < json.today.length; i++) {
    //     xData.push( {
    //         value: json.today,
    //         textStyle: {
    //             color: defultColor
    //         }
    //     })
    // }
//用电量温度chart
    var ydlChart = echarts.init(document.getElementById('ydQXChart'));
    var xData = [];
    for (var i = 0; i < 24; i++) {
        xData.push({
            value: i,
            textStyle: {
                color: defultColor
            }
        })
    }
    var ydOption = {
        title: {
            text: '',
            textStyle: {
                color: defultColor
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [{
                name: '今日用电',
                textStyle: {
                    color: '#30c4ec'
                }
            }, {
                name: '昨日用电',
                textStyle: {
                    color: '#dd4b77'
                }
            }, {
                name: '温度',
                textStyle: {
                    color: '#b5ea34'
                }
            }]
        },
        grid: {
            show: false
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xData,
            // x轴的颜色和宽度
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#0f879d",
                    width: '3'
                }
            },
            // 控制网格线是否显示
            splitLine: {
                show: false,
                //  改变轴线颜色
                lineStyle: {
                    // 使用深浅的间隔色
                    color: ['#0f879d']

                }
            },

        },
        yAxis: [
            {
                type: 'value',
                name: '用电量(kw·h)',
                position: 'left',
                // x轴的颜色和宽度
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#0f879d",
                        width: '3'
                    }
                },
                // 控制网格线是否显示
                splitLine: {
                    show: false,
                    //  改变轴线颜色
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: ['#0f879d']
                    }
                },

            },
            {
                type: 'value',
                name: '温度(℃)',
                position: 'right',
                // x轴的颜色和宽度
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#0f879d",
                        width: '3'
                    }
                },
                // 控制网格线是否显示
                splitLine: {
                    show: false,
                    //  改变轴线颜色
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: ['#0f879d']
                    }
                },

            }
        ],
        series: [
            {
                name: '今日用电',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210],
                itemStyle: {
                    color: "#30c4ec"
                }


            },
            {
                name: '昨日用电',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310],
                itemStyle: {
                    color: "#dd4b77"
                }
            },
            {
                name: '温度',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410],
                itemStyle: {
                    color: "#b5ea34"
                }
            }
        ]
    };
    ydlChart.setOption(ydOption);
}


// 基于准备好的dom，初始化echarts实例

function setWeekData(json) {
    // 指定图表的配置项和数据
    var dataAxis = [];
    var data = [];
    for (var i = 1; i < 8; i++) {
        data.push(360 + i);
        dataAxis.push(i);
    }
    var weekChart = echarts.init(document.getElementById('yd7Chart'));

    var option = {
        title: {
            text: '单位:kW·h',
            subtext: '',
            textStyle: {
                color: defultColor
            }
        },
        xAxis: {
            data: dataAxis,
            axisLabel: {
                textStyle: {
                    color: '#03AFF8'
                }
            },
            nameTextStyle: {
                color: '#03AFF8'
            },
            axisTick: {
                show: false
            },
            // x轴的颜色和宽度
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#0f879d",
                    width: '3'
                }
            },
            // 控制网格线是否显示
            splitLine: {
                show: false,
                //  改变轴线颜色
                lineStyle: {
                    // 使用深浅的间隔色
                    color: ['#0f879d']

                }
            },
            z: 10
        },
        yAxis: {
            // 控制网格线是否显示
            splitLine: {
                show: true,
                //  改变轴线颜色
                lineStyle: {
                    // 使用深浅的间隔色
                    color: ['#0f879d'],
                    type: 'dashed'

                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#0f879d",
                    width: '3'

                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#03AFF8'
                }
            }
        },
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        series: [
            {
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#12d2f4'},
                                {offset: 0.5, color: '#096f83'},
                                {offset: 1, color: '#000000'}
                            ]
                        )
                    },
                    emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#12d2f4'},
                                {offset: 0.7, color: '#096f83'},
                                {offset: 1, color: '#000000'}
                            ]
                        )
                    }
                },
                data: data,
                label: {
                    show: true,
                    position: 'top',
                    color: "#12d2f4",
                    fontFamily: 'Arial',
                    fontSize: '18'
                }
            }
        ]
    };

// 使用刚指定的配置项和数据显示图表。
    weekChart.setOption(option);
}


var ydlChart = echarts.init(document.getElementById('dlChart'));

function setI24Chart(json) {

    // var xData = [];
    // for (var i = 0; i < json.today.length; i++) {
    //     xData.push( {
    //         value: json.today,
    //         textStyle: {
    //             color: defultColor
    //         }
    //     })
    // }
//用电量温度chart
    $.getJSON("data/IData.json", function (json) {
        var Ia = [];
        var Ib = [];
        var Ic = [];

        Ia = Ia.concat(json.data.I.ia);
        Ib = Ib.concat(json.data.I.ib);
        Ic = Ic.concat(json.data.I.ic);
        var xData = [];
        for (var j = 0; j < 24; j++) {
            xData.push({
                value: j + '时',
                textStyle: {
                    color: defultColor
                }
            })
        }
        var ydOption = {
            title: {
                text: '',
                textStyle: {
                    color: defultColor
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: [
                    {
                        name: 'A相电流',
                        textStyle: {
                            color: '#135ef5'
                        }
                    },
                    {
                        name: 'B相电流',
                        textStyle: {
                            color: '#30c4ec'
                        }
                    },
                    {
                        name: 'C相电流',
                        textStyle: {
                            color: '#974e91'
                        }
                    }]
            },
            grid: {
                show: false
            },

            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: xData,
                // x轴的颜色和宽度
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#0f879d",
                        width: '3'
                    }
                },
                // 控制网格线是否显示
                splitLine: {
                    show: false,
                    //  改变轴线颜色
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: ['#0f879d']

                    }
                },

            },
            yAxis: [
                {
                    type: 'value',
                    name: '电流(A)',
                    position: 'left',
                    // x轴的颜色和宽度
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "#0f879d",
                            width: '3'
                        }
                    },
                    // 控制网格线是否显示
                    splitLine: {
                        show: false,
                        //  改变轴线颜色
                        lineStyle: {
                            // 使用深浅的间隔色
                            color: ['#0f879d']
                        }
                    },

                }
            ],
            series: [
                {
                    name: 'A相电流',
                    type: 'line',
                    stack: '总量',
                    data: Ia,
                    itemStylae: {
                        color: "#135ef5"
                    }
                },
                {
                    name: 'B相电流',
                    type: 'line',
                    stack: '总量',
                    data: Ib,
                    itemStyle: {
                        color: "#30c4ec"
                    }
                },
                {
                    name: 'C相电流',
                    type: 'line',
                    stack: '总量',
                    data: Ic,
                    itemStyle: {
                        color: "#974e91"
                    }
                }
            ]
        };
        ydlChart.setOption(ydOption);
    });


}


function getData() {
    //获取电量信息
    $.ajax({
        url: 'http://dcw.suntrans-cloud.com/api/v1/electricity',
        type: 'GET',
        dataType: "json",
        success: function (json) {
            electricity.month = json.data.month == null ? '--' : json.data.month;
            electricity.today = json.data.today == null ? '--' : json.data.today;
            electricity.yesterday = json.data.yesterday == null ? '--' : json.data.yesterday;
        }
    });
    //获取环境信息

    //获取1楼环境信息
    var env1 ={
        "code": 200,
        "msg": "ok",
        "data": [
            {
                "area_id": 0,
                "pm25": "100.0",
                "pm1": "93.0",
                "pm10": "108.0",
                "shidu": "6.1",
                "wendu": "19.23",
                "jiaquan": "0.003",
                "yanwu": "72.0",
                "showWendu": [
                    "凉爽",
                    "#FFFFFF"
                ],
                "showShidu": [
                    "干燥",
                    "#FFFFFF"
                ],
                "showPm25": [
                    "轻度",
                    "#FFFFFF"
                ],
                "showPm10": [
                    "轻度",
                    "#FFFFFF"
                ],
                "showPm1": [
                    "轻度",
                    "#FFFFFF"
                ],
                "showYanwu": [
                    "清洁",
                    "#FFFFFF"
                ],
                "showJiaquan": [
                    "清洁",
                    "#FFFFFF"
                ]
            }
        ]
    };
    floor1Env.pm25 = env1.data[0].pm25;
    floor1Env.pm1 = env1.data[0].pm1;
    floor1Env.pm10 = env1.data[0].pm10;
    floor1Env.shidu = env1.data[0].shidu;
    floor1Env.wendu = env1.data[0].wendu;
    floor1Env.jiaquan = env1.data[0].jiaquan;
    floor1Env.yanwu = env1.data[0].yanwu;
    floor1Env.showWendu = env1.data[0].showWendu;
    floor1Env.showShidu = env1.data[0].showShidu;
    floor1Env.showPm25 = env1.data[0].showPm25;
    floor1Env.showPm10 = env1.data[0].showPm10;
    floor1Env.showPm1 = env1.data[0].showPm1;
    floor1Env.showYanwu = env1.data[0].showYanwu;
    floor1Env.showJiaquan = env1.data[0].showJiaquan;

}

// var ydlChart = echarts.init(document.getElementById('dlChart'));
//
// var series=[];
// var xData =[];
// for(var k=0;k<24;k++){
//     xData.push(  {
//         value: k,
//         textStyle: {
//             color: defultColor
//         }
//     })
// }
// for (var i=0;i<3;i++){
//     var seriesData = [];
//
//
//     for (var j=0;j<23;j++){
//         seriesData.push(10*i*j)
//     }
//     series.push(  {
//         name: 'A相电流',
//         type: 'line',
//         stack: '总量',
//         data: seriesData,
//         itemStyle: {
//             color: "#135ef5"
//         }
//     })
// }
// var ydOption = {
//     title: {
//         text: '',
//         textStyle: {
//             color: defultColor
//         }
//     },
//     tooltip: {
//         trigger: 'axis'
//     },
//     legend: {
//         data: [
//             {
//                 name: 'A相电流',
//                 textStyle: {
//                     color: '#135ef5'
//                 }
//             },
//             {
//                 name: 'B相电流',
//                 textStyle: {
//                     color: '#30c4ec'
//                 }
//             },
//             {
//                 name: 'C相电流',
//                 textStyle: {
//                     color: '#974e91'
//                 }
//             }]
//     },
//     grid: {
//         show: false
//     },
//
//     xAxis: {
//         type: 'category',
//         boundaryGap: false,
//         data: xData,
//         // x轴的颜色和宽度
//         axisLine: {
//             show: true,
//             lineStyle: {
//                 color: "#0f879d",
//                 width: '3'
//             }
//         },
//         // 控制网格线是否显示
//         splitLine: {
//             show: false,
//             //  改变轴线颜色
//             lineStyle: {
//                 // 使用深浅的间隔色
//                 color: ['#0f879d']
//
//             }
//         },
//
//     },
//     yAxis: [
//         {
//             type: 'value',
//             name: '电流(A)',
//             position: 'left',
//             // x轴的颜色和宽度
//             axisLine: {
//                 show: true,
//                 lineStyle: {
//                     color: "#0f879d",
//                     width: '3'
//                 }
//             },
//             // 控制网格线是否显示
//             splitLine: {
//                 show: false,
//                 //  改变轴线颜色
//                 lineStyle: {
//                     // 使用深浅的间隔色
//                     color: ['#0f879d']
//                 }
//             },
//
//         }
//     ],
//     series: series
// };
// ydlChart.setOption(ydOption);
var debug = false;
var defultColor = '#03AFF8';
var electricity = new Vue({
    el: "#electricity",
    data: {
        month: "--",
        today: "--",
        yesterday: "--",
        power: "--"
    }
});
//1楼环境参数
var floor1Env = new Vue({
    el: "#floor1Env",
    data: {
        pm25: '150',
        pm1: '',
        pm10: '',
        shidu: '',
        wendu: '',
        jiaquan: '',
        yanwu: '',
        showWendu: [],
        showShidu: [],
        showPm25: [],
        showPm10: [],
        showPm1: [],
        showYanwu: [],
        showJiaquan: [],
    }
});
//2楼环境参数
var floor2Env = new Vue({
    el: "#floor2Env",
    data: {
        pm25: '',
        pm1: '',
        pm10: '',
        shidu: '',
        wendu: '',
        jiaquan: '',
        yanwu: '',
        showWendu: [],
        showShidu: [],
        showPm25: ["轻度",
            "#FFFFFF"],
        showPm10: [],
        showPm1: [],
        showYanwu: [],
        showJiaquan: [],
    }
});
//3楼环境参数
var floor3Env = new Vue({
    el: "#floor3Env",
    data: {
        pm25: '',
        pm1: '',
        pm10: '',
        shidu: '',
        wendu: '',
        jiaquan: '',
        yanwu: '',
        showWendu: [],
        showShidu: [],
        showPm25: [],
        showPm10: [],
        showPm1: [],
        showYanwu: [],
        showJiaquan: [],
    }
});

//3楼环境参数
var floor4Env = new Vue({
    el: "#floor4Env",
    data: {
        pm25: '',
        pm1: '',
        pm10: '',
        shidu: '',
        wendu: '',
        jiaquan: '',
        yanwu: '',
        showWendu: [],
        showShidu: [],
        showPm25: [],
        showPm10: [],
        showPm1: [],
        showYanwu: [],
        showJiaquan: [],
    }
});

//今天昨天温度曲线
var ydlChart = echarts.init(document.getElementById('ydQXChart'));

function setYdQvXian(json) {
    // var xData = [];
    // for (var i = 0; i < json.today.length; i++) {
    //     xData.push( {
    //         value: json.today,
    //         textStyle: {
    //             color: defultColor
    //         }
    //     })

    var xData = [];
    for (var i = 0; i <= 24; i++) {
        xData.push({
            value: i,
            textStyle: {
                color: defultColor
            }
        })
    }

    var todayData = [];
    var yesterdayData = [];
    var wendu = [];

    if (debug)
        console.log(json.data.today);

    todayData = todayData.concat(json.data.today == null ? [] : json.data.today);
    yesterdayData = yesterdayData.concat(json.data.yesterday == null ? [] : json.data.yesterday);
    wendu = wendu.concat(json.data.wendu == null ? [] : json.data.wendu);

    var ydOption = {
        title: {},
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [{
                name: '今日用电',
                icon:'image://img/today_line.png',
                textStyle: {
                    color: '#30c4ec',
                    borderColor: '#30c4ec'
                }
            }, {

                name: '昨日用电',
                icon:'image://img/yesterday_line.png',
                textStyle: {
                    color: '#dd4b77',
                    borderColor: '#dd4b77'
                }
            }, {
                name: '温度',
                icon:'image://img/wendu_line.png',
                textStyle: {
                    color: '#b5ea34',
                    borderColor: '#b5ea34'
                }
            }]
        },
        grid: {
            show: false
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            name: '',
            nameLocation: 'middle',
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
                // y轴的颜色和宽度
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#30c4ec",
                        width: '3'
                    }
                },
                // 控制网格线是否显示
                splitLine: {
                    show: false,
                }

            },
            {
                type: 'value',
                name: '温度(℃)',
                position: 'right',
                min: 10,
                max: 40,
                interval: 5,
                axisLabel: {
                    formatter: '{value} '
                },
                // y轴的颜色和宽度
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#30c4ec",
                        width: '3'
                    }
                },
                // 控制网格线是否显示
                splitLine: {
                    show: false,
                    //  改变轴线颜色

                },

            }
        ],
        series: [
            {
                name: '今日用电',
                type: 'line',
                smooth: true,
                data: todayData,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#30c4ec'
                        }
                    }
                }


            },
            {
                name: '昨日用电',
                type: 'line',
                smooth: true,
                data: yesterdayData,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#dd4b77'
                        }
                    }
                }
            },
            {
                name: '温度',
                type: 'line',
                smooth: true,
                yAxisIndex: 1,
                data: wendu,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#b5ea34'
                        }
                    }
                }
            }
        ]
    };
    ydlChart.setOption(ydOption);
}

//rgba(18,210,244,0.0)
// 最近7天用电曲线
var weekChart = echarts.init(document.getElementById('yd7Chart'));

function setWeekData(json) {
    // 指定图表的配置项和数据
    var dataAxis = [];
    var datas = [];
    for (var i = 7; i > 0; i--) {
        dataAxis.push(GetDateStr(-i));
    }

    for (var j = json.data.length - 1; j >= 0; j--) {
        datas.push(json.data[j])
    }


    var option = {
        title: {
            text: '单位:kW·h',
            subtext: '',
            textStyle: {
                color: defultColor
            }
        },
        tooltip: {
            trigger: 'axis'
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
                show: false,
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
                    },
                    animation:true
                },
                data: datas,
                barWidth: 15,
                label: {
                    show: true,
                    position: 'top',
                    color: "#ffffff",
                    fontFamily: 'Arial',
                    fontSize: '10'
                }
            }
        ]
    };

// 使用刚指定的配置项和数据显示图表。
    weekChart.setOption(option,true);
}

//最近七天电流曲线
var dianliu = echarts.init(document.getElementById('dlChart'));
var dianya = echarts.init(document.getElementById('V24Chart'));
var gonglv = echarts.init(document.getElementById('P24Chart'));

function setI24Chart(json) {
    var Ia = [];
    var Ib = [];
    var Ic = [];

    var Va = [];
    var Vb = [];
    var Vc = [];

    var Pa = [];
    var Pb = [];
    var Pc = [];


    //给电流赋值
    for (var j = 0; j < json.data.I.ia.length; j++) {
        Ia.push(json.data.I.ia[j] == null ? "0" : json.data.I.ia[j])

    }
    for (var k = 0; k < json.data.I.ib.length; k++) {
        Ib.push(json.data.I.ib[k] == null ? "0" : json.data.I.ib[k])

    }
    for (var n = 0; n < json.data.I.ic.length; n++) {
        Ic.push(json.data.I.ic[n] == null ? "0" : json.data.I.ic[n])

    }

    //给电压赋值v
    for (var a = 0; a < json.data.V.va.length; a++) {
        Va.push(json.data.V.va[a] == null ? "0" : json.data.V.va[a])

    }
    for (var b = 0; b < json.data.V.vb.length; b++) {
        Vb.push(json.data.V.vb[b] == null ? "0" : json.data.V.vb[b])

    }
    for (var c = 0; c < json.data.V.vc.length; c++) {
        Vc.push(json.data.V.vc[c] == null ? "0" : json.data.V.vc[c])

    }
    //给功率赋值v
    for (var d = 0; d < json.data.P.pa.length; d++) {
        Pa.push( json.data.P.pa[d] == null ? "0" :  json.data.P.pa[d])

    }
   for (var e = 0; e < json.data.P.pb.length; e++) {
        Pb.push( json.data.P.pb[e] == null ? "0" :  json.data.P.pb[e])

    }
   for (var f = 0; f < json.data.P.pc.length; f++) {
        Pc.push( json.data.P.pc[f] == null ? "0" :  json.data.P.pc[f])

    }

    // Ia = Ia.concat(json.data.I.ia);
    // Ib = Ib.concat(json.data.I.ib);
    // Ic = Ic.concat(json.data.I.ic);
    var xData = [];

    for (var i = 24; i > 0; i--) {
        var hours = getHours(-i);
        xData.push({
            value: hours,
            textStyle: {
                color: defultColor
            }
        })
    }
    var dianliuOptions = {
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
                min: 'dataMin',
                max: 'dataMax',
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
                data: Ia,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#135ef5'
                        }
                    }
                }
            },
            {
                name: 'B相电流',
                type: 'line',
                data: Ib,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#30c4ec'
                        }
                    }
                }

            },
            {
                name: 'C相电流',
                type: 'line',
                data: Ic,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#974e91'
                        }
                    }
                }
            }
        ]
    };
    var dianyaOptions = {
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
                    name: 'A相电压',
                    textStyle: {
                        color: '#135ef5'
                    }
                },
                {
                    name: 'B相电压',
                    textStyle: {
                        color: '#30c4ec'
                    }
                },
                {
                    name: 'C相电压',
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
                min: 'dataMin',
                max: 'dataMax',
                type: 'value',
                name: '电压(V)',
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
                name: 'A相电压',
                type: 'line',
                data: Va,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#135ef5'
                        }
                    }
                }
            },
            {
                name: 'B相电压',
                type: 'line',
                data: Vb,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#30c4ec'
                        }
                    }
                }

            },
            {
                name: 'C相电压',
                type: 'line',
                data: Vc,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#974e91'
                        }
                    }
                }
            }
        ]
    };
    var gongLvOptions = {
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
                    name: 'A相功率',
                    textStyle: {
                        color: '#135ef5'
                    }
                },
                {
                    name: 'B相功率',
                    textStyle: {
                        color: '#30c4ec'
                    }
                },
                {
                    name: 'C相功率',
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
                min: 'dataMin',
                max: 'dataMax',
                type: 'value',
                name: '功率(kW)',
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
                name: 'A相功率',
                type: 'line',
                data: Pa,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#135ef5'
                        }
                    }
                }
            },
            {
                name: 'B相功率',
                type: 'line',
                data: Pb,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#30c4ec'
                        }
                    }
                }

            },
            {
                name: 'C相功率',
                type: 'line',
                data: Pc,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#974e91'
                        }
                    }
                }
            }
        ]
    };
    dianliu.setOption(dianliuOptions,true);
    dianya.setOption(dianyaOptions,true);
    gonglv.setOption(gongLvOptions,true);
}

//第六感设备id
var sixsensorID = [458, 458, 460, 459];

function getData() {
    //首先获取异常信息
    getDevYicmsg();
    getEnvYiChang();
    //获取电量信息
    $.ajax({
        url: 'http://dcw.suntrans-cloud.com/api/v1/electricity',
        type: 'GET',
        dataType: "json",
        success: function (json) {
            electricity.month = json.data.month == null ? '--' : parseFloat(json.data.month).toFixed(0);
            electricity.today = json.data.today == null ? '--' : parseFloat(json.data.today).toFixed(1);
            electricity.yesterday = json.data.yesterday == null ? '--' : parseFloat(json.data.yesterday).toFixed(1);
            electricity.power = json.data.power == null ? '--' : parseFloat(json.data.power).toFixed(1);
        }
    });

    //获取今天昨天温度数据
    //获取电量信息
    $.ajax({
        url: 'http://dcw.suntrans-cloud.com/api/v1/electricityCurve',
        type: 'GET',
        dataType: "json",
        success: function (json) {
            setYdQvXian(json)
        }
    });
    //获取最近七天用电
    $.ajax({
        url: 'http://dcw.suntrans-cloud.com/api/v1/electricityLastWeek',
        type: 'GET',
        dataType: "json",
        success: function (json) {
            setWeekData(json)
        }
    });
    //获取最近24小时电压电流
    $.ajax({
        url: 'http://dcw.suntrans-cloud.com/api/v1/yesterdayI',
        type: 'GET',
        dataType: "json",
        success: function (json) {
            setI24Chart(json)
        }
    });
    //获取环境信息
    $.ajax({
        url: 'http://dcw.suntrans-cloud.com/api/v1/environmental',
        type: 'GET',
        data: {'dev_id': sixsensorID[0]},

        dataType: "json",
        success: function (json) {
            setEnvData(json, 0)
        }
    });
    $.ajax({
        url: 'http://dcw.suntrans-cloud.com/api/v1/environmental',
        type: 'GET',
        data: {'dev_id': sixsensorID[1]},

        dataType: "json",
        success: function (json) {
            setEnvData(json, 1)
        }
    });
    $.ajax({
        url: 'http://dcw.suntrans-cloud.com/api/v1/environmental',
        type: 'GET',
        data: {'dev_id': sixsensorID[2]},

        dataType: "json",
        success: function (json) {
            setEnvData(json, 2)
        }
    });
    $.ajax({
        url: 'http://dcw.suntrans-cloud.com/api/v1/environmental',
        type: 'GET',
        data: {'dev_id': sixsensorID[3]},

        dataType: "json",
        success: function (json) {
            setEnvData(json, 3)
        }
    });
    //环境end
}

//设置环境数据
function setEnvData(env1, floor) {
    if (floor == 0) {
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
    } else if (floor == 1) {

        floor2Env.pm25 = env1.data[0].pm25;
        floor2Env.pm1 = env1.data[0].pm1;
        floor2Env.pm10 = env1.data[0].pm10;
        floor2Env.shidu = env1.data[0].shidu;
        floor2Env.wendu = env1.data[0].wendu;
        floor2Env.jiaquan = env1.data[0].jiaquan;
        floor2Env.yanwu = env1.data[0].yanwu;
        floor2Env.showWendu = env1.data[0].showWendu;
        floor2Env.showShidu = env1.data[0].showShidu;
        floor2Env.showPm25 = env1.data[0].showPm25;
        floor2Env.showPm10 = env1.data[0].showPm10;
        floor2Env.showPm1 = env1.data[0].showPm1;
        floor2Env.showYanwu = env1.data[0].showYanwu;
        floor2Env.showJiaquan = env1.data[0].showJiaquan;

    } else if (floor == 2) {
        floor3Env.pm25 = env1.data[0].pm25;
        floor3Env.pm1 = env1.data[0].pm1;
        floor3Env.pm10 = env1.data[0].pm10;
        floor3Env.shidu = env1.data[0].shidu;
        floor3Env.wendu = env1.data[0].wendu;
        floor3Env.jiaquan = env1.data[0].jiaquan;
        floor3Env.yanwu = env1.data[0].yanwu;
        floor3Env.showWendu = env1.data[0].showWendu;
        floor3Env.showShidu = env1.data[0].showShidu;
        floor3Env.showPm25 = env1.data[0].showPm25;
        floor3Env.showPm10 = env1.data[0].showPm10;
        floor3Env.showPm1 = env1.data[0].showPm1;
        floor3Env.showYanwu = env1.data[0].showYanwu;
        floor3Env.showJiaquan = env1.data[0].showJiaquan;
    } else if (floor == 3) {
        floor4Env.pm25 = env1.data[0].pm25;
        floor4Env.pm1 = env1.data[0].pm1;
        floor4Env.pm10 = env1.data[0].pm10;
        floor4Env.shidu = env1.data[0].shidu;
        floor4Env.wendu = env1.data[0].wendu;
        floor4Env.jiaquan = env1.data[0].jiaquan;
        floor4Env.yanwu = env1.data[0].yanwu;
        floor4Env.showWendu = env1.data[0].showWendu;
        floor4Env.showShidu = env1.data[0].showShidu;
        floor4Env.showPm25 = env1.data[0].showPm25;
        floor4Env.showPm10 = env1.data[0].showPm10;
        floor4Env.showPm1 = env1.data[0].showPm1;
        floor4Env.showYanwu = env1.data[0].showYanwu;
        floor4Env.showJiaquan = env1.data[0].showJiaquan;

    }


}


//获取前几天的日期
function GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1;//获取当前月份的日期
    var d = dd.getDate();
    return m + "-" + d;
}

//获取前几个小时的时间
function getHours(addHours) {
    var dd = new Date();
    dd.setHours(dd.getHours() + addHours);
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1;
    var d = dd.getDate();
    var h = dd.getHours();
    var min = dd.getMinutes();
    return h + "时";
}
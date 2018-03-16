
function getPlan2Data() {

    $.ajax({
        url: 'http://dcw.suntrans-cloud.com/api/v1/plan',
        type: 'GET',
        data: {'house_id': 2},

        dataType: "json",
        success: function (json) {
            setPlan2Data(json);
        }
    });

    // $.getJSON("data/floorData.json", function (json) {
    //     setPlan2Data(json)
    // })

}

function setPlan2Data(json) {
    var con = json.data.container;
    if (con) {
        var width =1309;
        var height = 693;
        var scale = $(".floor2Container").width()/width;
        $("#floor2-wrapper").css("height",height*scale);
        $("#floor2").css("transform","scale("+scale+")");
        $("#floor2").css("width", width);
        $("#floor2").css("height", height);
        // $("#floor1").css("background-color", con.bgColor);
        // $("#floor1").css("background-image", "url('img/floor2.png')");
        $("#floor2").empty();
        $("#floor2").css("background-color", "#000000");
    }
    // json.signals.map(function(signal){
    //  if(signal){
    // 	 signalMap[''+signal.id]=signal;
    //  }
    // });
    json.data.elements.map(createFloor2Element);
}

//创建一张图片
function createFloor2Element(data) {
    var imageGroup = d3.select("#floor2")
        .append("g")
        .data([data]);

    if (data.status){
        if (data.vtype == 1){
            imageGroup.classed("ele", true)
        }
    }

    imageGroup.append("image")
        .classed("control-image", true)
        .attr("x", function (d) {
            return d.x-552
        })
        .attr("y", function (d) {
            return d.y-106
        })
        .attr("title",function (d) {
            return d.channel_id+"_"+d.x+"_"+d.y
        })
        .attr("width", function (d) {
            if (d.vtype == 1){
                return 60
            }else {
                return 30
            }
        })
        .attr("height", function (d) {
            if (d.vtype == 1){
                return 60

            }else {
                return 30

            }
        })
        .attr("xlink:href", function (d) {
            if (d.status) {
                if (d.vtype == 1)
                    return 'img/light_on2.png';
                else
                    return 'img/socket_on2.png';

            } else {
                if (d.vtype == 1)
                    return 'img/light_off2.png';
                else
                    return 'img/socket_off2.png';
            }
        });

    imageGroup.on("mousemove",alertPosition2)

}

function alertPosition2(d) {

}
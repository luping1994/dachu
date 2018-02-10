
getPlanData();
function getPlanData() {
    $.getJSON("data/floorData.json", function (json) {
        var con = json.container;
        if (con) {
            var   width = con.width;
            var  height = con.height;
            var scale = $(".floor1Container").width()/width;
            console.log($(".floor1Container").width());
            console.log(height*scale);
            $("#floor1-wrapper").css("height",height*scale);
            $("#floor1").css("transform","scale("+scale+")");
            $("#floor1").css("width", con.width);
            $("#floor1").css("height", con.height);
            $("#floor1").css("background-color", con.bgColor);
            $("#floor1").css("background-image", "url(" + con.bgImage + ")");
            $("#floor1").empty();
            $("#floor1").css("background-color", con.bgColor);
        }
        // json.signals.map(function(signal){
        //  if(signal){
        // 	 signalMap[''+signal.id]=signal;
        //  }
        // });
        json.elements.map(createFloor1Element);
    })

}

//创建一张图片
function createFloor1Element(data) {
    var imageGroup = d3.select("#floor1")
        .append("g")
        .classed("ele", true)
        .data([data]);
    imageGroup.append("image")
        .classed("control-image", true)
        .attr("x", function (d) {
            return d.x
        })
        .attr("y", function (d) {
            return d.y
        })
        .attr("width", function (d) {
            return d.width
        })
        .attr("height", function (d) {
            return d.height
        })
        .attr("xlink:href", function (d) {
            if (d.status)
                return d.openUrl;
            return d.closeUrl;
        });

}
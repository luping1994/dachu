function getDevYicmsg() {
    $.ajax({
        url: 'http://dcw.suntrans-cloud.com/api/v1/deviceLog',
        type: 'GET',
        dataType: "json",
        success: function (json) {
            setDeviceYichang(json.data);
        }
    });
    //http://dcw.suntrans-cloud.com/api/v1/deviceLog
}

function setDeviceYichang(devYichang) {

    if (devYichang.length == 0) {
        $("#msgContainer").empty();
        var html = '   <div class="swiper-slide messageSlide">' +
            '                <p class="">' +
            '                   没有什么消息' +
            '                </p>' +
            '            </div>';
        $("#msgContainer")
            .append(html);

    } else {

        $("#msgContainer").empty();
        for (var i = 0; i < devYichang.length; i++) {
            var html = '   <div class="swiper-slide messageSlide">' +
                '                <p class="">' +
                '                   公告: ' + devYichang[i].name+'-'+devYichang[i].message+'-'+devYichang[i].updated_at
            '                </p>' +
            '            </div>';
            $("#msgContainer")
                .append(html);
        }

    }

//消息滚动
    var messageSwiper = new Swiper('.messageSwiper', {
        disableOnInteraction: false,
        direction: 'vertical',
        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
    });
}

function getEnvYiChang() {


    $.ajax({
        url: 'http://dcw.suntrans-cloud.com/api/v1/environmentalLog',
        type: 'GET',
        dataType: "json",
        success: function (json) {
            setEnvYichang(json.data);
        }
    });
}

function setEnvYichang(envYichang) {

    if (envYichang.length == 0) {
        $("#envUl").empty();
        var html = ' <li >' +
            '<p class="" style="text-align: left"><span class="YichangName">' + '没有异常信息!' + '</span> ' +
            ' </li>';
        $("#envUl")
            .append(html);

    } else {
        $("#envUl").empty();
        for (var i = 0; i < envYichang.length; i++) {
            var html = ' <li >' +
                '<p class="" style="text-align: left"><span class="YichangMsg">' + envYichang[i].msg + '</span> ' +
                '<span class="YichangName">  ' + envYichang[i].name + '</span> <span class="YichangName" >' + envYichang[i].created_at + '</span></p>' +
                ' </li>';
            $("#envUl")
                .append(html);
        }
    }

    // $(".envMSg").myScroll({
    //     speed: 100, //数值越大，速度越慢
    //     rowHeight: 30 //li的高度
    // });
}


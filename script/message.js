getDevYicmsg();
getEnvYiChang();
function getDevYicmsg() {
    var devYichang = [
        "过压 员工办公区右 2018-02-0799 13：24：44 ",
        "过压 员工办公区右 2018-02-07 13：24：44 ",
        "过压 员工办公区右 2018-02-07 13：24：44",
        "过压 员工办公区右 2018-02-07 13：24：44",
        "过压 员工办公区右 2018-02-07 13：24：44",
        "过压 员工办公区右 2018-02-07 13：24：44",
        "过压 员工办公区右 2018-02-07 13：24：44",
        "过压 员工办公区右 2018-02-07 13：24：44",
        "过压 员工办公区右 2018-02-07 13：24：44",
        "过压 员工办公区右 2018-02-07 13：24：44",
        "过压 员工办公区右 2018-02-07 13：24：44",
        "过压 员工办公区右 2018-02-07 13：24：44",
        "过压 员工办公区右 2018-02-07 13：24：44",
        "过压 员工办公区右 2018-02-07 13：24：44",
        "过压 员工办公区右 2018-02-07 13：24：44",
        "过压 员工办公区右 2018-02-07 13：24：44",
        "过压 员工办公区右 2018-02-07 13：24：44",
        "过压 员工办公区右 2018-02-07 13：24：44",
        "过压 员工办公区右 2018-02-07 13：24：44",
        "过压 员工办公区右 2018-02-07 13：24：44",
        "过压 员工办公区右 2018-02-07 13：24：44",

    ];
    for (var i = 0; i < devYichang.length; i++) {
        devYichang[i] = devYichang[i] + "---" + i
        var html = ' <li >' +
            '<p style="color: white;text-align: left">' + devYichang[i] + '</p>' +
            ' </li>';
        $("#devUl")
            .append(html);
    }
    $(".devMsg").myScroll({
        speed: 50, //数值越大，速度越慢
        rowHeight: 27 //li的高度
    });
}

function getEnvYiChang() {
    var envYichang = [
        "甲醛超标 一楼 2018-02-0799 13：24：44 ",
        "甲醛超标 一楼 2018-02-0799 13：24：44 ",
        "甲醛超标 一楼 2018-02-0799 13：24：44 ",
        "甲醛超标 一楼 2018-02-0799 13：24：44 ",
        "甲醛超标 一楼 2018-02-0799 13：24：44 ",
        "甲醛超标 一楼 2018-02-0799 13：24：44 ",
        "甲醛超标 一楼 2018-02-0799 13：24：44 ",
        "甲醛超标 一楼 2018-02-0799 13：24：44 ",
        "甲醛超标 一楼 2018-02-0799 13：24：44 ",
        "甲醛超标 一楼 2018-02-0799 13：24：44 ",
        "甲醛超标 一楼 2018-02-0799 13：24：44 ",
        "甲醛超标 一楼 2018-02-0799 13：24：44 ",
        "甲醛超标 一楼 2018-02-0799 13：24：44 ",
        "甲醛超标 一楼 2018-02-0799 13：24：44 ",


    ];
    for (var i = 0; i < envYichang.length; i++) {
        envYichang[i] = envYichang[i] + "---" + i
        var html = ' <li >' +
            '<p style="color: white;text-align: left">' + envYichang[i] + '</p>' +
            ' </li>';
        $("#envUl")
            .append(html);
    }
    $(".envMSg").myScroll({
        speed: 50, //数值越大，速度越慢
        rowHeight: 27 //li的高度
    });
}


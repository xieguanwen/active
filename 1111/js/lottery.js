var lottery = {
    index: 0, //当前转动到哪个位置，起点位置
    count: 0, //总共有多少个位置
    timer: 0, //setTimeout的ID，用clearTimeout清除
    speed: 20, //初始转动速度
    times: 0, //转动次数
    cycle: 50, //转动基本次数：即至少需要转动多少次再进入抽奖环节
    prize: 0, //中奖位置
    init: function(id) {
        if ($("#" + id).find(".lottery-unit").length > 0) {
            $lottery = $("#" + id);
            $units = $lottery.find(".lottery-unit");
            this.obj = $lottery;
            this.count = $units.length;
            $lottery.find(".lottery-unit-" + this.index).addClass("active");
        }
    },
    roll: function() {
        var index = this.index;
        var count = this.count;
        var lottery = this.obj;
        $(lottery).find(".lottery-unit-" + index).removeClass("active");
        index += 1;
        if (index > count - 1) {
            index = 0;
        }
        $(lottery).find(".lottery-unit-" + index).addClass("active");
        this.index = index;
        return false;
    },
    stop: function(index) {
        this.prize = index;
        return false;
    }
};

function roll() {
    lottery.times += 1;
    lottery.roll();
    var prize_site = $("#lottery").attr("prize_site");
    if (lottery.times > lottery.cycle + 10 && lottery.index == prize_site) {
        var prize_id = $("#lottery").attr("prize_id");
        var prize_name = $("#lottery").attr("prize_name");
        clearTimeout(lottery.timer);
        lottery.prize = -1;
        lottery.times = 0;
        click = false;
        alert("中奖名称："+prize_name+"\n中奖id："+prize_id);

    } else {
        if (lottery.times < lottery.cycle) {
            lottery.speed -= 10;
        } else if (lottery.times == lottery.cycle) {
            var index = Math.random() * (lottery.count) | 0;
            lottery.prize = index;
        } else {
            if (lottery.times > lottery.cycle + 10 && ((lottery.prize == 0 && lottery.index == 7) || lottery.prize == lottery.index + 1)) {
                lottery.speed += 110;
            } else {
                lottery.speed += 20;
            }
        }
        if (lottery.speed < 40) {
            lottery.speed = 40;
        }
        lottery.timer = setTimeout(roll, lottery.speed);
    }
    return false;
}

var click = false;

$(function() {
    lottery.init('lottery');
    $("#lottery a").click(function() {
        if (click) {
            return false;
        } else {
            lottery.speed = 100;
            $.getJSON("http://www.xlj.com/data.php?method=gerPrize&callback=?",function(data){
                console.log(data.data);
                //$("#lottery").attr("prize_site", data.data.prize_site);
                //$("#lottery").attr("prize_id", data.data.prize_id);
                //$("#lottery").attr("prize_name", data.data.prize_name);
                //roll();
                click = true;
                return false;
            });

            //$.post("ajax.php", {uid: 1}, function(data) { //获取奖品，也可以在这里判断是否登陆状态
            //    $("#lottery").attr("prize_site", data.prize_site);
            //    $("#lottery").attr("prize_id", data.prize_id);
            //    $("#lottery").attr("prize_name", data.prize_name);
            //    roll();
            //    click = true;
            //    return false;
            //}, "json");

        }
    });
});
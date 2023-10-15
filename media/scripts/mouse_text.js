var a_idx = 0;

function randomColor(){
    var r = Math.floor(Math.random() * 206);
    var g = Math.floor(Math.random() * 276);
    var b = Math.floor(Math.random() * 296);
    var color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
    //return "rgb(72,85,137)"
}
jQuery(document).ready(function($) {


    $("body").click(function(e) {
        var a = new Array("OP","泰拉铁道","原神怎么你了","我测尼滴码","乐","崩","崩铁怎么你了","玩原玩的","玩崩玩的","写C艹写的","写C井写的","不要在玩原和崩辣");
        var $i = $("<span></span>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 25,
            "left": x,
            "position": "absolute",
            "font-weight": "bolder",
            "color": randomColor
        });
        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            1500,
            function() {
                $i.remove();
            });
    });
});
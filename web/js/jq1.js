$(function () {
    let count = 1;
    let click = true;
    let num = $(".cart").length;
    $(".cart").click(function() {
        if(!click) {
            return;
        }
        click = false;
        let card = $(this);
        if(count < num) {
            $(this).addClass("bottom");
            count++;
            }  else {
            $(this).addClass("bottom_last");
            count++;
        }
        if(count == num + 1) {
            setTimeout(function () {
                $(".cart").removeClass("bottom").removeClass("bottom_last");
                count = 1;
            }, 1000);
        }
        setTimeout(function () {
            click = true;
        }, 1000);
    });
});

$(document).ready(function () {
    $(function () {
        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                this.addClass('animated ' + animationName).one(animationEnd, function () {
                    $(this).removeClass(animationName);
                });
            }
        });


        $("#testImage").animateCss("slideInUp");

        $("#animationBlocTexte").animateCss("slideInRight");





    })
});






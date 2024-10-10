$(function () {

    $('.imglayout').hover(function () {
        if ($(this).hasClass('on') == false) {
            // 全てのレイアウトの「on」状態を解除する関数
            function resetLayouts() {
                $('.layout-1').attr('src', './images/layout-off-1.svg').removeClass('on1');
                $('.layout-2').attr('src', './images/layout-off-1.svg').removeClass('on2');
                $('.layout-3').attr('src', './images/layout-off-3.svg').removeClass('on3');
                $('.layout-4').attr('src', './images/layout-off-4.svg').removeClass('on4');
                $('.display1').hide();
                $('.display2').hide();
                $('.display3').hide();
                $('.display4').hide();
                $('.display1').addClass('rounded-box');
                $('.display2').addClass('rounded-box');
                $('.display3').addClass('rounded-box');
                $('.display4').addClass('rounded-box');
            }

            $('.layout-1').hover(function () {
                resetLayouts(); // 他のレイアウトの「on」状態を解除
                if (!$(this).hasClass('on1')) {
                    $(this).attr('src', './images/layout-on-1.svg').addClass('on1');
                    $('.imglayout').addClass('on');
                    $('.display1').show();
                    $('.display2').hide();
                    $('.display3').hide();
                    $('.display4').hide();
                } else {
                    $(this).attr('src', './images/layout-off-1.svg').removeClass('on1');
                }
            });

            $('.layout-2').hover(function () {
                resetLayouts(); // 他のレイアウトの「on」状態を解除
                if (!$(this).hasClass('on2')) {
                    $(this).attr('src', './images/layout-on-1.svg').addClass('on2');
                    $('.imglayout').addClass('on');
                    $('.display1').hide();
                    $('.display2').show();
                    $('.display3').hide();
                    $('.display4').hide();
                } else {
                    $(this).attr('src', './images/layout-off-1.svg').removeClass('on2');

                }
            });

            $('.layout-3').hover(function () {
                resetLayouts(); // 他のレイアウトの「on」状態を解除
                if (!$(this).hasClass('on3')) {
                    $(this).attr('src', './images/layout-on-3.svg').addClass('on3');
                    $('.imglayout').addClass('on');
                    $('.display1').hide();
                    $('.display2').hide();
                    $('.display3').show();
                    $('.display4').hide();
                } else {
                    $(this).attr('src', './images/layout-off-3.svg').removeClass('on3');
                }
            });

            $('.layout-4').hover(function () {
                resetLayouts(); // 他のレイアウトの「on」状態を解除
                if (!$(this).hasClass('on4')) {
                    $(this).attr('src', './images/layout-on-4.svg').addClass('on4');
                    $('.imglayout').addClass('on');
                    $('.display1').hide();
                    $('.display2').hide();
                    $('.display3').hide();
                    $('.display4').show();
                } else {
                    $(this).attr('src', './images/layout-off-4.svg').removeClass('on4');
                }
            });

        } else {
            $('.imglayout').removeClass('on');
        }
    });

    $(window).scroll(function () {

        // ウィンドウサイズ取得
        var windowH = $(this).height();

        // スクロール量取得
        var scroll = $(this).scrollTop();

        // 背景画像の不透明度を制御
        var opValue = 1 - (scroll / windowH);

        // 不透明度が 0 から 1 の範囲に収まるように制限
        if (opValue > 1) {
            opValue = 1;
        } else if (opValue < 0) {
            opValue = 0;
        }

        // .overlay の不透明度を設定
        $(".overlay").css("opacity", opValue);
    });

    $(".bgimage").mgGlitch({
        destroy: false, // set 'true' to stop the plugin
        glitch: true, // set 'false' to stop glitching
        scale: true, // set 'false' to stop scaling
        blend: true, // set 'false' to stop glitch blending
        blendModeType: 'hue', // select blend mode type
        glitch1TimeMin: 600, // set min time for glitch 1 elem
        glitch1TimeMax: 900, // set max time for glitch 1 elem
        glitch2TimeMin: 100, // set min time for glitch 2 elem
        glitch2TimeMax: 300, // set max time for glitch 2 elem
        zIndexStart: 0, // because of absolute position, set z-index base value
    });

    $(".overlay").mgGlitch({
        destroy: false, // set 'true' to stop the plugin
        glitch: true, // set 'false' to stop glitching
        scale: true, // set 'false' to stop scaling
        blend: false, // set 'false' to stop glitch blending
        blendModeType: 'hue', // select blend mode type
        glitch1TimeMin: 600, // set min time for glitch 1 elem
        glitch1TimeMax: 900, // set max time for glitch 1 elem
        glitch2TimeMin: 100, // set min time for glitch 2 elem
        glitch2TimeMax: 300, // set max time for glitch 2 elem
        zIndexStart: 1, // because of absolute position, set z-index base value
    });

});


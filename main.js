steal(
    'can',
    'jquery',
    'intro.stache!',
    'app.stache!',
    'styles.less!',

    function(can, $, introView, appView) {

        can.view.preload('intro', introView);
        $('#app').html(appView());

    }
);

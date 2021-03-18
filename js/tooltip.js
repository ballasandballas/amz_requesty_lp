
    // Intercom('trackEvent', 'viewed-pricing');

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip(
        {
            trigger: "manual"
        }).on("mouseenter", function () {
        var _this = this;
        $(this).tooltip("show");
        $(".tooltip").on("mouseleave", function () {
            $(_this).tooltip('hide');
        });

        jQuery('.tooltip-btn-plan').click(function(e) {
            e.preventDefault();
            jQuery("#biggerPlans").collapse('show');
            jQuery('html, body').animate({ scrollTop:jQuery("#biggerPlansWrap").offset().top},1000);

            // Intercom('trackEvent', 'BiggerPlans Shopify Clicked');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".tooltip:hover").length) {
                $(_this).tooltip("hide");
            }
        }, 100);
    });
});

jQuery('.btn-plan').each(function() {

    var plan = jQuery(this).data("plan");
    jQuery(this).click(function() {

        if(!jQuery("#"+ plan).hasClass('in'))
            jQuery('html, body').animate({ scrollTop:jQuery("#"+plan+"Wrap").offset().top},1000);

        // Intercom('trackEvent', plan + ' Clicked');
    });
});
var counter = 0;

function toggleMenu(){
    checkDesktop()

    counter == 0 ? (hideMenu(), counter++) : {}

    var menuList = document.getElementById("menuList");
    
    if(menuList.style.opacity == "0"){
        menuList.style.opacity = "100"
        console.log("toggling menu OPEN")
    }
    else{
        menuList.style.opacity = "0"
        console.log("toggling menu CLOSED")
    }
}

function hideMenu(){
    let element = document.getElementById("menuList")
    element.setAttribute('style', 'opacity: 0;')
}

function checkDesktop(){
    const mq = window.matchMedia( "max-width:1150px" );
    mq == false ? (hideMenu(), counter--) : {}

    var $animation_elements = $('.animation-element');
    var $window = $(window);
        
    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        
        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
        
            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
            } else {
            $element.removeClass('in-view');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
}
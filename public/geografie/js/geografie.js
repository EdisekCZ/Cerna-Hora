$(function(){
    let lastfill = $("svg").attr('fill');
    $("path").on('click', function(){ 
        if(lastfill == 'rgb(255, 77, 77)') { 
            $(this).css({'fill':'rgb(179, 179, 179)'}); 
            lastfill = "rgb(124, 124, 124)"; 
        } else {
            $("path").css('fill', $("svg").attr('fill')); 
            $(this).css({'fill':'rgb(255, 77, 77)'}); 
            lastfill = "rgb(255, 77, 77)";
            $("h1").html($(this).attr('name')); 
        }
    });

    $("path").on('mouseover', function(){ 
        lastfill = $(this).css('fill');
        if(lastfill == 'rgb(255, 77, 77)') {
            $(this).css({'fill':'rgb(255, 51, 51)'});
        } else {
            $(this).css({'fill':'rgb(179, 179, 179)'});
        }
    });
    $("path").on('mouseout', function(){
        $(this).css({'fill':lastfill});
    });
});

$(function(){
    let lastfill = $("svg").attr('fill');
    $("rect").on('click', function(){ 
        if(lastfill == 'rgb(230, 92, 0)') { 
            $(this).css({'fill':'rgb(128, 0, 0)'}); 
            lastfill = "rgb(128, 0, 0)"; 
        } else {
            $(this).css({'fill':'rgb(230, 92, 0)'}); 
            lastfill = "rgb(230, 92, 0)";
            $("h1").html($(this).attr('name')); 
        }
    });

    $("rect").on('mouseover', function(){ 
        lastfill = $(this).css('fill');
        if(lastfill == 'rgb(230, 92, 0)') {
            $(this).css({'fill':'rgb(179, 71, 0)'});
        } else {
            $(this).css({'fill':'rgb(128, 0, 0)'});
        }
    });
    $("rect").on('mouseout', function(){
        $(this).css({'fill':lastfill});
    });
});

$(function(){
    let lastfill = $("svg").attr('fill');
    $("ellipse").on('click', function(){ 
        if(lastfill == 'rgb(255, 255, 0)') { 
            $(this).css({'fill':'rgb(179, 179, 0)'}); 
            lastfill = "rgb(153, 115, 0)"; 
        } else {
            $(this).css({'fill':'rgb(255, 255, 0)'}); 
            lastfill = "rgb(255, 255, 0)";
            $("h1").html($(this).attr('name')); 
        }
    });

    $("ellipse").on('mouseover', function(){ 
        lastfill = $(this).css('fill');
        if(lastfill == 'rgb(255, 255, 0)') {
            $(this).css({'fill':'rgb(204, 204, 0)'});
        } else {
            $(this).css({'fill':'rgb(179, 179, 0)'});
        }
    });
    $("ellipse").on('mouseout', function(){
        $(this).css({'fill':lastfill});
    });
});
    
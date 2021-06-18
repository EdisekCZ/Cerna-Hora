$(document).ready(function () {
    let towns = [];
    let cityColor = ['rgb(170, 0, 0)'];
    let unescoColor = ['rgb(179, 179, 0)'];
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
            $(this).css({'fill':'rgb(170, 0, 0)'}); 
            lastfill = "rgb(170, 0, 0)"; 
        } else {
            $(this).css({'fill':'rgb(230, 92, 0)'}); 
            lastfill = "rgb(230, 92, 0)"; 
        }
    });

    $("rect").on('mouseover', function(){ 
        lastfill = $(this).css('fill');
        if(lastfill == 'rgb(230, 92, 0)') {
            $(this).css({'fill':'rgb(179, 71, 0)'});
        } else {
            $(this).css({'fill':'rgb(170, 0, 0)'});
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

fetch('https://floating-ravine-25095.herokuapp.com/api/towns')
.then(response => {
    return response.json();
 })
 .then(json =>{
    towns = json;
 })
 .catch(function(error){
    console.error('Chyba: \n', error);
 });

 $('rect').on('click', function () {
    let id = $(this).attr('id');
    console.log(id);
    $('rect').css({ 'fill': cityColor });
    $(this).css('fill', 'teal');
    let town = towns.find(item => {return item.id == id});
    console.log(town);
    $('#vypisTextu').html(`
    <div class = "row">
        <div class = "col-12">
            <h2 class = "text-center py-1">${town.city}</h2>
        </div>
    </div>
    <div class = "row">
        <div class = "col-8 pt-2">
            <p style = "font-size:1.5em;" class = "pl-4">Populace: <strong>${town.peoples}</strong></p>
            <p class = "text-justify; pl-4">${town.text}</p>
        </div>
        <div class = "col-4">
            <figure class = "text-center">
                <img src = "img/${town.sign}" class = "m-auto" style = "height:250px">
                <figcaption class = "pt-1"><strong>Městský Znak</strong></figcaption>
            </figure>
        </div>
    </div>
    <div class = "row">
        <figure class = "text-center col-12">
            <img src = "img/${town.photo}" class = "m-auto" style = "width:600px; height:300px">
        </figure>
    </div>
    `)
    });
});

$('ellipse').on('click', function () {
    let id = $(this).attr('id');
    console.log(id);
    $('ellipse').css({ 'fill': unescoColor });
    $(this).css('fill', 'teal');
    let town = towns.find(item => {return item.id == id});
    console.log(town);
    $('#vypisTextu').html(`
    <div class = "row">
        <div class = "col-12">
            <h2 class = "text-center py-1">${town.city}</h2>
        </div>
    </div>
    <div class = "row">
        <div class = "col-8 pt-2">
            <p style = "font-size:1.5em;" class = "pl-4">Populace: <strong>${town.peoples}</strong></p>
            <p class = "text-justify">${town.text}</p>
        </div>
        <div class = "col-4">
            <figure class = "text-center">
                <img src = "img/${town.sign}" class = "m-auto" style = "height:250px">
                <figcaption class = "pt-1"><strong>Městský Znak</strong></figcaption>
            </figure>
        </div>
    </div>
    <div class = "row">
        <figure class = "text-center col-12">
            <img src = "img/${town.photo}" class = "m-auto" style = "width:900px">
        </figure>
    </div>
    `)
});


function heroesBlock(heroes) {
   heroes.forEach((hero) => {
      $("#postavy .list-group").append(`<li class="list-group-item list-group-item-action list-group-item-primary">${hero.name}</li>`);
   });
   function fillPersonCard(person) {
      let hero = heroes.find(item => { return item.name === person });
      $(".card-header").html(`<i class="fas fa-star-of-life"></i> <b>${hero.birth}</b> - <i class="fas fa-cross"></i> <b>${hero.death}</b>`);
      $(".card-title").text(hero.name);
      $(".card-text").text(hero.biography);
      $(".card-footer").html(`Odkaz: <a href="${hero.online}">${hero.online}</a>`);
      $(".gallery").empty();
      for (let i = 0; i < hero.portraits.length; i++) {
         $(".gallery").append(`<div class="col-sm-4"><a href="#"><img src="img/${hero.portraits[i]}" alt="" class="img-fluid"></a></div>`);
      }
   }
   $("#postavy li:first").addClass('active');
   fillPersonCard(heroes[0].name);
   $("#postavy li").on("click", function () {
      $("#postavy li").removeClass("active");
      $(this).addClass("active");
      let person = $(this).text();
      $("#portret").slideUp(1000, function () {
         fillPersonCard(person);
      });
      $("#portret").slideDown(1000);
   });
};

function eventsBlock(events) {
   events.forEach((event) => {
      $("#udalosti tbody").append(`<tr>
            <td class="event-year">${event.year}</td>
            <td>
              <p class="event-name"><i class="fas fa-chevron-down"></i> <a href="${event.url}" target="_new">${event.event}</a></p>
              <p class="event-detail">${event.detail}</p>
            </td>            
            <td class="event-evaluation">${(event.evaluation == "true") ? '<i class="fas fa-plus-circle text-success"></i>' : '<i class="fas fa-minus-circle text-danger"></i>'}</td>
        </tr>`);
   });
   $(".event-detail").hide();
   $(".event-name i, .event-name a").on("mouseover", function () {
      $("#udalosti tr").removeClass("bg-secondary text-white");
      $(this).parents("tr").addClass("bg-secondary text-white");
      $(".event-detail").hide();
      $(this).parent().next().show(500);
   });
};

fetch('https://floating-ravine-25095.herokuapp.com/api/events')
     .then(response => {
        return response.json();
     })
     .then(json =>{
         eventsBlock(json);
     })
     .catch(function(error){
        console.error('Chyba: \n', error);
     });
     
     fetch('https://floating-ravine-25095.herokuapp.com/api/heroes')
     .then(response => {
        return response.json();
     })
     .then(json =>{
         heroesBlock(json);
     })
     .catch(function(error){
        console.error('Chyba: \n', error);
     });
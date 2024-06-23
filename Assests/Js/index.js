var projectData = [
  {
    "img": "https://placehold.co/600x400",
    "title": "Card title",
    "desc": "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "techs": "ASP.NET,ANGULAR,JQUERY"
  },
  {
    "img": "https://placehold.co/600x400",
    "title": "Card title",
    "desc": "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "techs": "Test,Test,Test"
  },
  {
    "img": "https://placehold.co/600x400",
    "title": "Card title",
    "desc": "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "techs": "Ok,Data,JQUERY"
  }
];

$(document).ready(x => {
  var content = '';
  projectData.forEach(element => {
    var techs = "";
    element.techs.split(",").forEach(tech => {
      techs += `<span class="tech border px-2 py-1">` + tech.trim() + `</span>`
    });

    content += `<div class="card border-0">
  <img src="`+ element.img + `" class="card-img-top rounded" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">`+ element.title + `</h5>
                    <p class="card-text">`+ element.desc + `</p>
                    <div class="techs">
                      `+ techs + `
                    </div>
                  </div>
                  </div>

  `
  });
  $(".projects")[0].innerHTML = content;


  $(".card-title").each((i, obj) => {
    $($(obj)[0]).on('click', (e) => {
      var title = e.target.innerText;
      var closet = $(e.target).parent()[0];
      var desc = $(closet).find('.card-text')[0].innerText;
      var techs = $(closet).find('.techs')[0].innerHTML;
      $("#exampleModal").modal('show');
      $(".modal .modal-title")[0].innerText = title;
      $(".modal .card-text")[0].innerText = desc;
      $(".modal .techs")[0].innerHTML = techs;
    })
  });
});
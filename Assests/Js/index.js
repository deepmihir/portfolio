$(document).ready(function() {
  var projectData = [
    {
      "img": "https://placehold.co/600x400",
      "title": "MLS (Multiple Listing Services) data pipeline ",
      "desc": "MLS data pipeline development for Invitation Homes, delivering end-to-end solutions for listing services, property acquisition, rehab, and maintenance.",
      "details": [
        {
          "img": "https://placehold.co/600x400",
          "text": "API Integration and Data Collection: Utilized Python modules and API integration to collect data from 800+ MLS efficiently."
        },
        {
          "img": "https://placehold.co/600x400",
          "text": "Ingestion System Development: Engineered a robust system to gather and store data in JSON format for further processing."
        },
        {
          "img": "https://placehold.co/600x400",
          "text": "Transformation Logic Implementation: Implemented logic to standardize data into tabular form, accommodating metadata and schema variations. Used DBT for applying transformations."
        },
        {
          "img": "https://placehold.co/600x400",
          "text": "Standardized Data Processing Pipeline: Established a unified pipeline for data consolidation, ensuring consistency and integrity."
        },
        {
          "img": "https://placehold.co/600x400",
          "text": "Snowflake Integration: Integrated processed data into Snowflake for analysis and reporting, maintaining accessibility and integrity."
        }
      ],
      "techs": "ASP.NET, ANGULAR, JQUERY"
    },
    {
      "img": "https://placehold.co/600x400",
      "title": "Card title",
      "desc": "Some quick example text to build on the card title and make up the bulk of the card's content.",
      "details": [
        {
          "img": "https://placehold.co/600x400",
          "text": "Detail about Card title 1."
        },
        // Add more details if necessary
      ],
      "techs": "Test,Test,Test"
    },
    {
      "img": "https://placehold.co/600x400",
      "title": "Card title",
      "desc": "Some quick example text to build on the card title and make up the bulk of the card's content.",
      "details": [
        {
          "img": "https://placehold.co/600x400",
          "text": "Detail about Card title 2."
        },
        // Add more details if necessary
      ],
      "techs": "Ok,Data,JQUERY"
    }
  ];

  var content = '';
  projectData.forEach(element => {
    var techs = "";
    element.techs.split(",").forEach(tech => {
      techs += `<span class="tech border px-2 py-1">` + tech.trim() + `</span>`;
    });

    content += `
      <div class="card border-0">
        <img src="${element.img}" class="card-img-top rounded" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.desc}</p>
          <div class="techs">
            ${techs}
          </div>
        </div>
      </div>
    `;
  });

  $(".projects")[0].innerHTML = content;

  $(".card-title").each((i, obj) => {
    $($(obj)[0]).on('click', (e) => {
      var title = e.target.innerText;
      var project = projectData.find(p => p.title === title);

      // Populate modal title
      $("#projectModalLabel").text(title);

      // Populate modal body with project details and images
      var modalContent = '';
      project.details.forEach(detail => {
        modalContent += `
          <div class="mb-4">
            <img src="${detail.img}" class="img-fluid mb-2" alt="Project Detail">
            <p>${detail.text}</p>
          </div>
        `;
      });
      
      $("#projectModalBody").html(modalContent);

      // Show modal
      $("#projectModal").modal('show');
    });
  });
});

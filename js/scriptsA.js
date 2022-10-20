// for ratingA.html scripts!

$( document ).ready(function() {
    load_table('#eu_table','EU_data/eu_airconditioners.json');
  });
  
  function load_table(table,url){
    table = $('#eu_table').DataTable({
      destroy: true,
      ajax: {
        dataType: "json",
        url: url,
        dataSrc: 'hits',
      },
      columns: [
       { data: 'supplierOrTrademark' },
       { data: 'modelIdentifier' },
       { data: "energyClass" }
        ]
      })
  }
  
  
    const eu_selectElement = document.querySelector('#eu_categories');
  
  
    if(eu_selectElement){
    eu_selectElement.addEventListener('change', (event) => {
    switch(eu_selectElement.value) {
          case '#Air conditioners':
          load_table('#eu_table','EU_data/eu_airconditioners.json');
          
          break;
          case '#Dishwashers':
          load_table('#eu_table','EU_data/eu_dishwashers2019.json');
  
          break;
          case '#Heaters':
          load_table('#eu_table','EU_data/eu_spaceheaters.json');
  
          break;
          case '#Light bulbs and lamps':
          load_table('#eu_table','EU_data/eu_lightsources.json');
  
          break;
          case '#Local space heaters':
          load_table('#eu_table','EU_data/eu_localspaceheaters.json');
  
          break;
          case '#Fridges and freezers (household)':
          load_table('#eu_table','EU_data/eu_refrigeratingappliances2019.json');
  
          break;
          case '#Refrigeration (professional)':
          load_table('#eu_table','EU_data/eu_professionalrefrigeratedstoragecabinets.json');
  
          break;
          case '#Refrigeration with a direct sales function':
          load_table('#eu_table','EU_data/eu_refrigeratingappliancesdirectsalesfunction.json');
  
          break;
          case '#Solid fuel boilers':
          load_table('#eu_table','EU_data/eu_solidfuelboilers.json');
  
          break;
          case '#Electronic displays':
          load_table('#eu_table','EU_data/eu_electronicdisplays.json');
  
          break;
          case '#Tumble driers':
          load_table('#eu_table','EU_data/eu_tumbledriers.json');
  
          break;
          case '#Ventilation units':
          load_table('#eu_table','EU_data/eu_residentialventilationunits.json');
  
          break;
          case '#Washing machines':
          load_table('#eu_table','EU_data/eu_washingmachines2019.json');
  
          break;
          case '#Tyres':
          load_table('#eu_table','EU_data/eu_tyres.json');
  
          break;
    }
  });
    }
// for ratingB.html scripts!

const all = 'ENERGY_STAR_data/all.json'
const dishwashersFile = 'ENERGY_STAR_data/dishwashers.json'
const clotheswashersFile = 'ENERGY_STAR_data/clotheswashers.json'

window.onload = function() {
    load_table(all)
}

const select = document.getElementById('select-appliance')
select.addEventListener('change', function() {
    let value = select.value
    if (value === 'all') {
        load_table(all)
    }
    if (value === 'dishwashers') {
        load_table(dishwashersFile)
    }
    if (value === 'clotheswashers') {
        load_table(clotheswashersFile)
    }
})

const load_table = (url) => {
    table = $('#data-energy-star').DataTable({
        destroy: true,
        ajax: {
            dataType: "json",
            url: url,
            dataSrc: ''
        },
        columnDefs: [{
            "defaultContent": "-",
            "targets": "_all"
          }],
        columns: [
            { data: 'appliance_type' },
            { data: 'Brand_Name' },
            { data: 'Model_Number' },
            { data: 'Water_Consumption_(gallons/rack)' },
            { data: 'Integrated_Water_Factor_(IWF)' },
            { data: 'Annual_Energy_Use_(kWh/yr)'},
        ]
    })
}
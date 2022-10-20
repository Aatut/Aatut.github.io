// for ratingC.html scripts!

const all = 'ENERGYRATING_data/all.json'
const airconditionersFile = 'ENERGYRATING_data/airconditioners.json'
const clothesdryesrsFile = 'ENERGYRATING_data/clothesdryers.json'
const clotheswashersFile = 'ENERGYRATING_data/clotheswashers.json'


window.onload = function() {
    load_table(all)
}

let select = document.getElementById('select-appliance')
select.addEventListener('change', function() {
    let value = select.value
    if (value === 'all') {
        load_table(all)
    }
    if (value === 'airconditioners') {
        load_table(airconditionersFile)
    }
    if (value === 'clotheswashers') {
        load_table(clotheswashersFile)
    }
    if (value === 'clothesdryers') {
        load_table(clothesdryesrsFile)
    }
})

const load_table = (url) => {
    table = $('#data-energyrating').DataTable({
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
            { data: 'Brand' },
            { data: 'Model_No' },
            { data: 'Star_Image_Small',render: function (data, type, row, meta) {
                if(data !== null) {
                return '<img src="' + data + '" height="80" width="100" object-fit: contain/>';
                } else {
                    return 'No rating';
                }
              }
            },
        ]
    })
}

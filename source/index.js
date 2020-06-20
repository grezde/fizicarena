
window.onload = function() {

    var container = document.getElementById('container');
    
    getAll([[getJson, 'data/ipho'], [getFile, 'bits/ipho_year.bit']], function(data) {
        
        container.innerHTML = populate(data[1][0], { values: data[0][0] });
        console.log(container.innerHTML);

    });

    getJson('data/ipho', function(data) {
        for(var year of data) {
            var str = '<h2>' + year.year + ' - ' + year.country + '</h2>';
            container.innerHTML += str;
        }
    });

};




window.onload = function() {

    var container = document.getElementById('container');
    
    getAll([[getJson, 'data/ipho'], [getFile, 'bits/ipho_year.bit']], function(data) {
        
        console.log(data);
        console.log(data[1][0]);
        container.innerHTML = populate(data[1][0], data[0][0][0]);

    });

    getJson('data/ipho', function(data) {
        for(var year of data) {
            var str = '<h2>' + year.year + ' - ' + year.country + '</h2>';
            container.innerHTML += str;
        }
    });

};



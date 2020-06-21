
window.onload = function() {

    var container = document.getElementById('all_problems');
    
    getAll([[getJson, 'data/ipho'], [getFile, 'bits/ipho_year.bit']], function(data) {
        
        var iphoHTML = populate(data[1][0], data[0][0], null);

        container.innerHTML = iphoHTML; 
        console.log(container.innerHTML);

    });

};



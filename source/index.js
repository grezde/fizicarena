
window.onload = function() {

    var container = document.getElementById('all_problems');
    
    getAll([[getJson, 'data/ipho'], [getFile, 'bits/ipho_year.bit']], function(data) {
        
        container.innerHTML = populate(data[1][0], {
            values: data[0][0],
            base: 'https://www.ioc.ee/~kree/students/iphoTable/'
        }, null);
        console.log(container.innerHTML);

    });

};



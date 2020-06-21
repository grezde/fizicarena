
var container;
var iphoData, iphoText;

function rerender() {
    iphoData.jaanNotes = document.getElementById('showJaan').checked;
    container.innerHTML = populate(iphoText, iphoData, null); 
    console.log(container.innerHTML);
}


window.onload = function() {

    container = document.getElementById('all_problems');
    getAll([[getJson, 'data/files', 'data/ipho'], [getFile, 'templates/ipho_year.tem']], function(data) {
        
        iphoText = data[1][0];
        iphoData = data[0][1];
        rerender();
    });

};



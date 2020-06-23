
var container, contestsContainer;
var contests;
var classFiltersEl, filtersEl;

function rerender() {
    var selected;
    for(var i=0; i<contests.length; i++)
        if(Array.from(contests[i].element.parentNode.classList).includes('active')) {
            selected = i;
            break;
        }
   
    if(contests[selected].hasClass)
        document.getElementById('classFilters').style.display = 'initial'; 
    else 
        document.getElementById('classFilters').style.display = 'none'; 
        

    document.getElementById('longName').textContent = '(' + contests[selected].longName + ')';
    contests[selected].data.jaanNotes = document.getElementById('showJaan').checked;
    contests[selected].data.showTopics = document.getElementById('showTopics').checked;
    container.innerHTML = populate(contests[selected].template, contests[selected].data, null); 
    makeVisible();
}

window.onload = function() {

    container = document.getElementById('all_problems');
    contestsContainer = document.getElementById('contests_container');
    classFiltersEl = document.getElementById('classFilters');
    filtersEl = document.getElementById('filters');
    toggleFilters();

    getAll([[getJson, 'data/contests'], [getFile, 'templates/selectContest.tem']], function(data) {
        contests = data[0][0].contests;
        contestsContainer.innerHTML = populate(data[1][0], data[0][0]);
        for(var i=0; i<contests.length; i++)
            contests[i].element = document.getElementById('contest'+i);
        console.log(contests);
        var jsonArray = [getJson];
        var temArray = [getFile], temMap=[];
        for(var i=0; i<contests.length; i++) {
            var tempStr = 'templates/'+contests[i].template+'.tem';
            jsonArray.push('data/'+contests[i].data);
            
            if(temArray.includes(tempStr))
                temMap.push(temArray.indexOf(tempStr)-1);
            else {
                temMap.push(temArray.length-1);
                temArray.push(tempStr);
            }
        }
        getAll([jsonArray, temArray], function(data) {
            for(var i=0; i<contests.length; i++) {
                contests[i].data = data[0][i];
                contests[i].template = data[1][temMap[i]];
            }
            rerender();
        });
    })

};



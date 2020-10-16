
var container, contestsContainer;
var siteSections = [], selectedSection=1;
var contests, selected=0;
var classFiltersEl, filtersEl;

function rerender() {
    for(var i=0; i<contests.length; i++)
        if(Array.from(contests[i].element.parentNode.classList).includes('active')) {
            selected = i;
            break;
        }
   
    if(contests[selected].hasClass)
        document.getElementById('classFilters').style.display = 'initial'; 
    else 
        document.getElementById('classFilters').style.display = 'none'; 

    contests[selected].data.jaanNotes = document.getElementById('showJaan').checked;
    contests[selected].data.showTopics = document.getElementById('showTopics').checked;
    contests[selected].data.showState = document.getElementById('showState').checked;
    container.innerHTML = populate(contests[selected].template, contests[selected].data, null); 
    makeVisible();

}

function reselect() {
    for(var i=0; i<siteSections.length; i++)
        if(Array.from(siteSections[i].element.classList).includes('active')) {
            selectedSection = i;
            break;
        }
 
    for(var i=0; i<siteSections.length; i++) {
        siteSections[i].idsToShow.forEach(function(id) {
            document.getElementById(id).style.display = selectedSection == i ? 'initial' : 'none'
        });
    }

    if(selectedSection == 0)
        siteSections[0].container.innerHTML = populate(
            siteSections[0].template,
            getData()
        );
}

window.onload = function() {

    container = document.getElementById('all_problems');
    contestsContainer = document.getElementById('contests_container');
    classFiltersEl = document.getElementById('classFilters');
    filtersEl = document.getElementById('filters');
    toggleSettings();

    getAll([[getJson, 'data/contests'], [getFile, 'templates/selectContest.html', 'templates/accountInfo.html']], function(data) {
        contests = data[0][0].contests;
        for(var i=0; i<contests.length; i++)
            contests[contests[i].data] = contests[i];

        contestsContainer.innerHTML = populate(data[1][0], data[0][0]);
        for(var i=0; i<contests.length; i++)
            contests[i].element = document.getElementById('contest'+(i+1));
        for(var i=0; i<3; i++) {
            siteSections[i] = {
                element: document.getElementById('section'+(i+1))
            };
        }
        siteSections[0].idsToShow = ['account_info'];
        siteSections[0].template = data[1][1];
        siteSections[0].container = document.getElementById('account_info');
        siteSections[1].idsToShow = ['all_problems', 'archive_container'];
        siteSections[2].idsToShow = ['small_contests'];
        reselect();

        var jsonArray = [getJson];
        var temArray = [getFile], temMap=[];
        for(var i=0; i<contests.length; i++) {
            var tempStr = 'templates/'+contests[i].template+'.html';
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
                contests[i].shortName = contests[i].data;
                contests[i].data = data[0][i];
                contests[i].data.longName = contests[i].longName;
                contests[i].data.shortName = contests[i].shortName;
                contests[i].template = data[1][temMap[i]];
            }
            getData();
            rerender();
        });
    })

};



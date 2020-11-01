
var container, contestsContainer, probaToggle;
var siteSections = [], selectedSection=1;
var contests, selected=0, selectedProba=0;
var classFiltersEl, filtersEl;
var languageMap, curentLanguage;
var urlParams;

function rerender(newIndex, newProba) {
    selectedProba = probaToggle.children[0].classList.contains('active') ? 0 : 1;
    if(newProba != undefined) {
        selectedProba = newProba;
        probaToggle.children[selectedProba].classList.add('active');
        probaToggle.children[1-selectedProba].classList.remove('active');
    }

    for(var i=0; i<contests.length; i++)
        if(Array.from(contests[i].element.parentNode.classList).includes('active')) {
            selected = i;
            break;
        }
    if(newIndex != undefined) {
        contests[selected].element.parentNode.classList.remove('active');
        contests[newIndex].element.parentNode.classList.add('active');
        selected = newIndex;
    }
   
    if(contests[selected].hasClass)
        document.getElementById('classFilters').style.display = 'initial'; 
    else 
        document.getElementById('classFilters').style.display = 'none';

    for(var i=0; i<contests.length; i++)
        if(selectedProba == 0) {
            contests[i].element.parentElement.classList.remove('disabled');
            contests[i].element.disabled = false;
        } else if(!contests[i].experimental) {
            contests[i].element.parentElement.classList.add('disabled');
            contests[i].element.disabled = true;
        }
    if(selectedProba == 1 && !contests[selected].experimental) {
        contests[selected].element.parentNode.classList.remove('active');
        contests[0].element.parentNode.classList.add('active');
        selected = 0;
    }

    var con;
    if(selectedProba == 0)
        con = contests[selected];
    else
        con = contests[selected].experimental;

    con.data.jaanNotes = document.getElementById('showJaan').checked;
    con.data.showTopics = document.getElementById('showTopics').checked;
    con.data.showState = document.getElementById('showState').checked;
    container.innerHTML = populate(con.template, con.data, null); 
    makeVisible();

}

function reselect(newIndex) {
    for(var i=0; i<siteSections.length; i++)
        if(Array.from(siteSections[i].element.classList).includes('active')) {
            selectedSection = i;
            break;
        }
    if(newIndex != undefined) {
        siteSections[selectedSection].element.classList.remove('active');
        siteSections[newIndex].element.classList.add('active');
        selectedSection = newIndex;
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

    urlParams = new URLSearchParams(window.location.search);

    probaToggle = document.getElementById('proba_toggle');
    container = document.getElementById('all_problems');
    contestsContainer = document.getElementById('contests_container');
    classFiltersEl = document.getElementById('classFilters');
    filtersEl = document.getElementById('filters');
    toggleSettings();

    getAll([
        [getJson, 'data/contests', 'data/lang'], 
        [getFile, 'templates/selectContest.html', 'templates/accountInfo.html'], 
        [ipLookup, null]
    ], function(data) {

        languageMap = data[0][1];
    
        var lookup = data[2][0];
        var countrycode = urlParams.get('lang') ? urlParams.get('lang') : lookup ? lookup.country == 'Romania' ? 'ro' : 'en' : 'en';
        changeLanguage(countrycode);

        contests = data[0][0].contests;
        for(var i=0; i<contests.length; i++)
            contests[contests[i].shortName] = contests[i];

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
            var tempStr = 'templates/archive/'+contests[i].template+'.html', tindex;
            jsonArray.push('data/'+contests[i].data);
            if(contests[i].experimental)
                jsonArray.push('data/'+contests[i].experimental.data);

            if(temArray.includes(tempStr))
                temMap.push(tindex = temArray.indexOf(tempStr)-1);
            else {
                temMap.push(tindex = temArray.length-1);
                temArray.push(tempStr);
            }
            if(contests[i].experimental) {
                if(contests[i].experimental.template) {
                    tempStr = 'templates/archive/'+contests[i].experimental.template+'.html';
                    if(temArray.includes('archive/'+tempStr))
                        temMap.push(temArray.indexOf(tempStr)-1);
                    else {
                        temMap.push(temArray.length-1);
                        temArray.push('archive/'+tempStr);
                    }
                } else 
                    temMap.push(tindex);
            }
        }
        getAll([jsonArray, temArray], function(data) {
            for(var i=0, j=0; i<contests.length; i++) {
                contests[i].data = data[0][j];
                contests[i].template = data[1][temMap[j++]];
                contests[i].data.longName = contests[i].longName;
                contests[i].data.shortName = contests[i].shortName;
                if(contests[i].experimental) {
                    contests[i].experimental.data = data[0][j];
                    contests[i].experimental.template = data[1][temMap[j++]];
                    contests[i].experimental.data.longName = contests[i].experimental.longName = contests[i].longName;
                    contests[i].experimental.data.shortName = contests[i].experimental.shortName;
                }  
            }
            getData();
            rerender();
        });
    })

};



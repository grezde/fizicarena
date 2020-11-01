
function changeLanguage(code) { 
    history.replaceState('', '', '?lang='+code);
    curentLanguage = code;
    refillLanguage();
}

function refillLanguage() {

    var fillers = document.getElementsByClassName('fill-me');
    for(var i=0; i<fillers.length; i++) {
        var clsar = Array.from(fillers[i].classList);
        clsar.splice(clsar.indexOf('fill-me'), 1);
        if(clsar[0].startsWith('fill-me-')) {
            var prop = clsar[0].slice('fill-me-'.length);
            fillers[i][prop] = languageMap[curentLanguage][clsar[1]];
        }
        else
            fillers[i].textContent = languageMap[curentLanguage][clsar[0]];
    }

}
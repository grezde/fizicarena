
function changeLanguage(code) { 
    history.replaceState('', '', '?lang='+code);
    curentLanguage = code;
    refillLanguage();
}

function refillLanguage() {

    var fillers = document.getElementsByClassName('fill-me');
    console.log(fillers);
    for(var i=0; i<fillers.length; i++) {
        var clsar = Array.from(fillers[i].classList);
        clsar.splice(clsar.indexOf('fill-me'), 1);
        console.log(clsar);
        if(clsar[0].startsWith('fill-me-'))
            {}
        else {
            console.log(languageMap[curentLanguage]);
            fillers[i].textContent = languageMap[curentLanguage][clsar[0]];
        }
    }

}
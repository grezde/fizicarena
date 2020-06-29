const fs = require('fs');

var onf = {
    base: 'files/onf/',
    values: []
};

for(var y=2020; y>=1998; y--)
    onf.values.push(getYear(y));

function getYear(year) {
    return {
        year: year,
        place: '',
        classes: [
            getClass('09'), getClass('10'), getClass('11'), getClass('12'), getClass('baraj', year)
        ]
    }
}

function getClass(cls, year) {
    if(cls != 'baraj')
        return {
            class: cls,
            problems: [
                {
                    title: '',
                    topics: []
                },
                {
                    title: '',
                    topics: []
                },
                {
                    title: '',
                    topics: []
                }
            ]
        };
    return {
        class: 'baraj',
        problems: [
            getBarajProblem(1, year),
            getBarajProblem(2, year),
            getBarajProblem(3, year),
            getBarajProblem(4, year),
            getBarajProblem(5, year),
        ]
    }
}

function getBarajProblem(pr, year) {
    return {
        title: '',
        probLink: ''+year+'_cbaraj_p'+pr+'_prob.pdf',
        solLink: ''+year+'_cbaraj_p'+pr+'_sol.pdf',
        topics: []
    }
}

fs.writeFileSync('data/onf.json', JSON.stringify(onf, undefined, 4));


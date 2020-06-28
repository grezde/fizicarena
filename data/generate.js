const fs = require('fs');

var ojf = {
    base: 'files/ojf/',
    values: []
};

for(var y=2020; y>=1995; y--)
    ojf.values.push(getYear(y));

function getYear(year) {
    return {
        year: year,
        classes: [
            getClass('09'), getClass('10'), getClass('11'), getClass('12')
        ]
    }
}

function getClass(cls) {
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
}

fs.writeFileSync('data/ojf.json', JSON.stringify(ojf, undefined, 4));


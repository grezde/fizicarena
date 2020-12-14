import axios from 'axios';

const archivedata = {
    done: false
};

axios.get('/data/contests.json')
    .then(res => {
        archivedata.contests = res.data.contests;
    })
    .catch(res => {
        archivedata.status = res.status;
    })
    .finally(() => {
        
        const indices = [];
        for(let contest of archivedata.contests) {
            indices.push(contest);
            if(contest.experimental)
                indices.push(contest.experimental);
        }
        axios.all(indices.map(c => axios.get('/data/'+c.data+'.json')))
            .then(res => {
                for(let i in indices) {
                    indices[i].data = res[i].data;
                }
                archivedata.done = true;
            })
            .catch(res => {
                archivedata.status = res.status;
            });
    });

export default archivedata;
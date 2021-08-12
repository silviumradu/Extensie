const axios = require('axios');

axios.get('http://webcode.me').then(resp => {

    // console.log(resp.data);
    if (resp.status === 200) {
        console.log("OK") // resp.data
    } else {
        console.log("Error code:", resp.status)
    }
});

const MonkeyLearn = require('monkeylearn')

const ml = new MonkeyLearn('6df8e369616a4607d1953c7a4eb62909673ebec5')
let model_id = 'cl_pi3C7JiL'
let data = ["Flowers are beautiful!"]
ml.classifiers.classify(model_id, data).then(res => {
    console.log(res.body)
    if (res.raw_responses[0].status == 200) {
        console.log("Response is :", res.body[0].classifications[0].tag_name)
    }
})
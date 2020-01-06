import probe from 'probe-image-size';

export function calcDimensions (url) {
    var data = require('fs').readFileSync(url);

    console.log(probe.sync(data));

}
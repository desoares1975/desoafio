var monsoose = require('mongoose'),
	Schema = mongoose.Schema;

var LocusSchema = new Schema({
    "type": String,
    "geometry": {
        "type": String,
        "coordinates": [Number]
    },
    "properties": {
        "name": String
    }
});

module.exports = mongoose.model('Locus', LocusSchema);

/*
{
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -46.678066400000034,
                    -23.5509186,
                    0
                ]
            },
            "properties": {
                "name": "Sumaré"
            }
        },

*/
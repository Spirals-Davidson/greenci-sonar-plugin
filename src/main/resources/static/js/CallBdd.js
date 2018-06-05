var proxy = 'https://cors-anywhere.herokuapp.com/';
const ES_URL = "http://elasticsearch.app.projet-davidson.fr/powerapici_test/_search";

/**
 * Do ajax call to get dataSearch
 * @param dataForSearch
 * @returns {*}
 */
var esCall = function (dataForSearch) {
    return $.ajax({
        url: proxy + ES_URL,
        type: "POST",
        dataType: 'json',
        data: JSON.stringify(dataForSearch)
    });
};


/**
 * Search all field on the elasticsearch index
 * @param fieldName the field to search
 */
var searchAllSomething = function (fieldName) {
    var data = {
        "query": {
            "match_all": {}
        },
        "_source": [fieldName]
    };

    return esCall(data);
};


/**
 * Get value for the build name build_name
 * @param build_name : build name to search
 */
var dataFromField = function (build_name) {
    var data = {
        "query": {
            "bool": {
                "must": [
                    {"match": {build_name: build_name}}
                ]
            }
        }
    };

    esCall(data).done(function (response) {
        printPowerapiCIData(response.hits.hits[0]._source);
    });
};

function getPreviousBuildName(build_name) {
    var list = actual_select_list.getElementsByTagName('select')[0].options;
    var tmpList = [];
    for (var i = 0; i < list.length; i++) {
        if (list[i].value < build_name) {
            tmpList.push(list[i].value);
        }
    }
    var previous_build_name = Math.max.apply(Math, tmpList);
    return previous_build_name;
}

/**
 * Get value for the build name previous_build_name
 * @param previous_build_name : build name to search
 */
var energyFromPreviousBuild = function (build_name, test, div) {
    var previous_build_name = getPreviousBuildName(build_name);
    var data = {
        "query": {
            "bool": {
                "must": [
                    {"match": {build_name: ""+previous_build_name}}
                ]
            }
        }
    };

    esCall(data).done(function (response) {
        if(response.hits.hits.length == 0){
            div.setAttribute('class', 'oi oi-media-record');
        }
        else{
            var previousEnergy = 0;
            var methods =  response.hits.hits[0]._source.methods;

            methods.forEach(function(method){
                if(method.name === test.name){
                    previousEnergy = method.energy;
                }
            })

            var arrow = '';
            var testEnergySup = previousEnergy * 1.1;
            var testEnergyInf = previousEnergy * 0.9;
            if(test.energy < testEnergySup && test.energy > testEnergyInf){
                arrow = 'oi oi-arrow-thick-right';
            }
            else if(test.energy > testEnergySup){
                arrow = 'oi oi-arrow-thick-top';
            }
            else if(test.energy < testEnergyInf){
                arrow = 'oi oi-arrow-thick-bottom';
            }
            div.setAttribute('class', arrow);
        }
    });
};
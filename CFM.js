var CFM = {
    parameters: {},

    feedInput: function(params, value) {},
    triggerOutput: function(params, value){},
    readOutput: function(params, callback){},
    watchOutput: function(params, callback){},
    unwatchOutput: function(params, watchId){},
    getParameters: function(instanceId, callback){},
    setParameter: function(instanceId, parameter, value){},
    log: function(logString){}
};
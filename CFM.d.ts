interface InputOutputParameters {
    0:number
    1:string
}

interface OutputCallback {
    (
        output: string,
        value: string
    ):void
}

interface ParametersCallback {
    (
        parameters:{}
    ):void
}

interface CFM {
    feedInput(params:InputOutputParameters, value:any):void
    triggerOutput(params:InputOutputParameters, value:any):void
    readOutput(params:InputOutputParameters, callback:OutputCallback):void
    watchOutput(params:InputOutputParameters, callback:OutputCallback):number
    unwatchOutput(params:InputOutputParameters, watchId:number):number
    getParameters(instanceId:number, callback:ParametersCallback):void
    setParameter(instanceId:number, parameter:string, value:any):void
    log(logString:string):void
}

declare var CFM:CFM;
/////////////////////////////////////////////////////GUI////////////////////////////////////////////////////////
interface GetJoinCallback {
    (
        join:string,
        value: string,
        tokens:{},
        tags:string[]
    )
}

interface TokenObject {
    //TODO
}

interface GetJoinsCallback {
    (joins:{})
    //TODO
    //could define this better with what will be in each join
}

interface JoinObject {
    join:string
    value:string
    tokens: TokenObject
    tags:string[]
}

interface GetPropertiesChangesObject {
    join:string
    x:number
    y:number
    w:number
    h:number
    xrotation:number
    yrotation:number
    zrotation:number
    scale:number
    opacity:number
    theme:string
}


interface SetJoinPropertyChangesObject {
    join:string
    x?:number
    y?:number
    w?:number
    h?:number
    xrotation?:number
    yrotation?:number
    zrotation?:number
    scale?:number
    opacity?:number
    theme?:string
}

interface GetPropertiesCallback {
    (properties:GetPropertiesChangesObject)
}

interface GetMultiplePropertiesCallback {
    (properties:GetPropertiesChangesObject[])
}

interface GetGuiDescriptionCallback {
    (guiDescription:GuiDescriptionObject):void
}

interface PageObject {
    name:string
    join:string
    type:string
    portraitObjects:GuiObject[]
    landscapeObjects:GuiObject[]
}

interface SubpageObject {
    name:string
    type:string
    objects:GuiObject[]
}

interface GuiObject {
    join:string
    type:string
    digitalJoin:string
}

interface ButtonObject extends GuiObject {
    activeTextJoin:string
    inactiveTextJoin:string
}

interface SliderObject extends GuiObject {
    pressedJoin:string
}

interface VideoObject extends GuiObject {
    playTriggerJoin:string
    stopTriggerJoin:string
}

interface WebviewObject extends GuiObject {
    backTriggerJoin:string
    forwardTriggerJoin:string
    refreshTriggerJoin:string
    stopTriggerJoin:string
}

interface SubpageRefObject extends GuiObject {
    subpgae:string
}

interface Size {
    w:number
    h:number
}

interface GuiDescriptionObject {
    name:string
    url:string
    portraitSize:Size
    landscapeSize:Size
    allJoins:string[]
    pages:PageObject[]
    subpages:SubpageObject[]
}

/////////////////////////////////////////////////////LISTS////////////////////////////////////////////////////////
interface ListItem {
    title?:boolean
    subpage?:string
}

interface ListUpdateItem extends ListItem {
    index:number
}

interface ListInfoCallback {
    (
        join:string,
        count:number,
        first:number,
        numVisible:number,
        scrollPosition:number
    ):void
}

interface ListContentsCallback {
    (
        contents:ListContentsObject[]
    ):void
}

interface ListContentsObject {
    subpage:string
    title:boolean
    any
}

/////////////////////////////////////////////////////NETWORK////////////////////////////////////////////////////////
interface SystemPropertiesObject {
    enabled:boolean
    address:string
    port:number
    localPort:number
    connect:number
    disconnect:number
}

interface SetSystemPropertiesObject {
    enabled?:boolean
    address?:string
    port?:number
    localPort?:number
    connect?:number
    disconnect?:number
}

interface RequestCallback {
    (
        status:number,
        headers:{},
        body:string
    ):void
}

interface StartLookupCallback {
    (
        addedServices:BonjourService[],
        removedServices:BonjourService[],
        error:string
    ):void
}

interface BonjourService {
    name:string
    type:string
    addresses:string[]
    hostname:string
    port:number
    data:{}
}

interface StartPublishingCallback {
    (
        serviceType:string,
        serviceName:string,
        port:number,
        published:boolean,
        error:string
    ):void
}


/////////////////////////////////////////////////////VIDEO////////////////////////////////////////////////////////
interface VideoFeedInformation {
    url: string
    dataURL: string
    width: number
    height: number
    duration: number
    hasAudio: boolean
    hasVideo: boolean
    playable: boolean
    buffered: boolean
    streaming: boolean
    playing: boolean
    stopped: boolean
    paused: boolean
    finished: boolean
    error: boolean
}

interface VideoInfoCallback {
    (
        join: string,
        info: VideoFeedInformation
    ):void
}

/////////////////////////////////////////////////////SENSORS////////////////////////////////////////////////////////
interface StartMonitoringCallback {
    (
        sensorType:string,
        data: AccelerometerGyroscopeSensorOptions
    ):void
}

interface AccelerometerGyroscopeSensorOptions {
    xthreshold?:number
    ythreshold?:number
    zthreshold?:number
    historySize?:number
    captureInterval?:number
    reportInterval?:number
}

interface AccelerometerGyroscopeSensorData {
    x:number
    y:number
    z:number
    t:number
}

interface AttitudeSensorOptions {
    xthreshold?:number
    ythreshold?:number
    zthreshold?:number
    historySize?:number
    captureInterval?:number
    reportInterval?:number
}

interface AttitudeSensorData {
    roll:number
    putch:number
    yaw:number
    t:number
}

interface HeadingSensorOptions {
    threshold?:number
    historySize?:number
    captureInterval?:number
    reportInterval?:number
}

interface HeadingSensorData {
    heading:number
    t:number
}

interface LocationSensorOptions {
    historySize?:number
    captureInterval?:number
    reportInterval?:number
}

interface LocationSensorData {
    lon:number
    lat:number
    alt:number
    speed:number
    course:number
    err:number
}

/////////////////////////////////////////////////////UTILITIES////////////////////////////////////////////////////////
interface GuiSettingsObject {
    reloadGUI?:boolean
    reloadAssets?:boolean
    preloadAllAssets?:boolean
    rememberLastGUI?:boolean
    buttonPressSound?:boolean
    enableMultitasking?:boolean
    enableProximitySensor?:boolean
    disconnectOnSuspend?:boolean
    showPreloadStatus?:boolean
    autoLockDelay?:boolean
    password?:string
}

interface CF {
    //GLOBAL
    watch(event:string, join:string, callback:()=>void):void
    watch(event:string, callback:()=>void):void

    unwatch(event:string):void
    unwatch(event:string, join:string):void
    unwatch(event:string, joins:string[]):void

    //GUI
    //joins
    getJoin(join: string, callback:GetJoinCallback):void
    getJoins(joins:string[], callback:GetJoinsCallback):void
    setJoin(join:string, value:string, sendJoinChangeEvent?:boolean):void
    setJoins(joins:JoinObject[], sendJoinChangeEvent?:boolean):void
    setToken(join:string, token:string, value:string):void

    //tags
    addTag(join:string, tag:string):void
    addTag(joinsArray:string[], tag:string):void
    removeTag(tag:string):void
    removeTag(join:string, tag:string):void
    removeTag(joinsArray:string[], tag:string):void

    //properties
    getProperties(join:string, callback:GetPropertiesCallback):void
    getProperties(join:string[], callback:GetMultiplePropertiesCallback):void
    //TODO fix curve type
    setProperties(changes:SetJoinPropertyChangesObject, delay?:number, duration?:number, curve?:string, callback?:SetPropertiesCallback):void
    setProperties(changes:SetJoinPropertyChangesObject[], delay?:number, duration?:number, curve?:string, callback?:SetPropertiesCallback):void

    //gui
    getGuiDescription(callback:GetGuiDescriptionCallback):void

    //LISTS
    listAdd(list:string, array:ListItem[], position?:number):void
    listUpdate(list, array:ListUpdateItem[]):void
    listRemove(list:string):void
    listRemove(list:string, index:number):void
    listRemove(list:string, index:number, count:number):void
    listScroll(list:string, index:number, position:number, animated:boolean, visibilityOnly:boolean):void
    listInfo(list:string, callback:ListInfoCallback)
    listContents(list:string, index:number, count:number, callback:ListContentsCallback)

    //NETWORK
    setSystemProperties(systemName:string, changes:SetSystemPropertiesObject):void
    send(systemName:string, string:string, outputFormat?:string):void
    runCommand(systemName:string, commandName:string):void
    runMacro(macroName:string)
    stopMacro(macroName:string)
    request(url:string, callback:RequestCallback):void
    request(url:string, headers:{}, callback:RequestCallback):void
    request(url:string, method:string, headers:{}, callback:RequestCallback):void
    request(url:string, method:string, headers:{}, body:string, callback:RequestCallback):void
    startLookup(serviceType:string, serviceName:string, callback:StartLookupCallback):void
    stopLookup(serviceType:string, serviceName:string):void
    startPublishing(serviceType:string, serviceName:string, port:number, txtData:{}, callback:StartPublishingCallback):void
    stopPublishing(serviceType:string, serviceName:string, port:number):void

    //SENSORS
    startMonitoring(sensor:string, options, callback:StartMonitoringCallback)
    stopMonitoring(monitorID:string)

    //UTILITIES
    log(msg:string):void
    logObject(object:{}):void
    crc(crcType:string, string:string, outputFormat:string, callback:any):void
    hash(hashType, sting, callback):void
    openURL(url:string):void
    loadGUI(url:string, settings:GuiSettingsObject):void
    loadAsset(assetName, dataEncoding, callback, cache):void
    setDeviceProperty(property, value):void
}

declare var CF:CF;

declare module "CF" {
    export = CF;
}
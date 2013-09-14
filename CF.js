var CF =
{
//GUI
    //EVENTS
    PreloadingCompleteEvent:"PRELOADING_COMPLETE_EVENT",
    preloadingCompleteEventCallback:function () {},

    JoinChangeEvent:"JOIN_CHANGE_EVENT",
    joinChangeEventCallback:function (join, value, tokens) {},

    InputFieldEditedEvent:"INPUT_FIELD_EDITED_EVENT",
    inputFieldEditedEventCallback:function (join, value, tokens) {},

    KeyboardUpEvent:"KEYBOARD_UP_EVENT",
    KeyboardUpEventCallback:function (join) {},

    KeyboardDownEvent:"KEYBOARD_UP_EVENT",
    keyboardDownEventCallback:function (join, value) {},

    ObjectPressedEvent:"OBJECT_PRESSED_EVENT",
    objectPressedEventCallback:function (join, value, tokens) {},

    ObjectDraggedEvent:"OBJECT_DRAGGED_EVENT",
    objectDraggedEventCallback:function(join, value, tokens) {},

    ObjectReleasedEvent:"OBJECT_RELEASED_EVENT",
    objectReleasedEventCallback:function(join, value, tokens) {},

    GUISuspendedEvent:"GUI_SUSPENDED_EVENT",
    guiSuspendedEventCallback:function() {},

    GUIResumedEvent:"GUI_RESUMED_EVENT",
    guiResumedEventCallback:function() {},

    //CONSTANTS
    guiURL: "URL",
    GlobalTokensJoin:"e0",
    AnimationCurveLinear: "ANIMATION_CURVE_LINEAR",
    AnimationCurveEaseIn: "ANIMATION_CURVE_EASE_IN",
    AnimationCurveEaseOut: "ANIMATION_CURVE_EASE_OUT",
    AnimationCurveEaseInOut: "ANIMATION_CURVE_EASE_IN_OUT",

    //FUNCTIONS
    getJoin:function(join, callback) {},
    getJoinCallback:function(join, value, tokens){},

    getJoins:function(arrayOfJoins, callback){},
    getJoinsCallback:function(arrayOfJoinValues){},

    /**
     * @param {String} join The join string.
     * @param {String} value The value to assign to the join.
     * @param {Boolean} [sendJoinChangeEvent="true"] Flag to enable or disable the JoinChangeEvent from firing.
     */
    setJoin:function (join, value, sendJoinChangeEvent) {},

    /**
     * @param {Array} joinsArray The array of join values to set.
     * @param {Boolean} [sendJoinChangeEvents="true"] Flag to enable or disable the JoinChangeEvent from firing.
     */
    setJoins:function (joinsArray, sendJoinChangeEvents) {},

    /**
     * @param {String} join The join string.
     * @param {String} token The token string..
     * @param {String} value The value to assign to the join.
     */
    setToken:function (join, token, value) {},

    addTag:function(join, tag) {},
    addTags:function(joinsArray, tag){},
    removeTag:function(joinOrJoinsArray, tag) {},

    getProperties:function (joinOrJoinsArray, callback) {},
    getPropertiesCallback:function(join, x, y, w, h, xrotation, yrotation, zrotation, scale, opacity, theme){},

    setProperties:function (changes, delay, duration, curve, callback, callbackParam1, callbackParamN) {},
    setPropertiesCallback:function() {},

    getGuiDescription:function (callback) {},
    getGuiDescriptionCallback:function (object) {},

//LISTS
    //EVENTS
    ListWillStartScrollingEvent: "LIST_WILL_START_SCROLLING_EVENT",
    ListDidScrollEvent: "LIST_DID_SCROLL_EVENT",
    ListDidEndScrollingEvent: "LIST_DID_END_SCROLLING_EVENT",

    //CONSTANTS
    //Index Constants
    LastItem:"LAST_ITEM",
    AllItems:"ALL_ITEMS",
    //Position Constants
    TopPosition:"TOP_POSITION",
    LeftPosition:"LEFT_POSITION",
    MiddlePosition:"MIDDLE_POSITION",
    BottomPosition:"BOTTOM_POSITION",
    RightPosition:"RIGHT_POSITION",
    VisiblePosition:"VISIBLE_POSITION",
    RelativePosition:"RELATIVE_POSITION",
    PixelPosition:"PIXEL_POSITION",

    //FUNCTIONS

    /**
     * @param {String} list The list join string in l# format.
     * @param {Array} array The array of list items to add.
     * @param {Number} [position] The position of the list to add the items. Default is append to the end.
     */
    listAdd:function (list, array, position) {},

    /**
     * @param {String} list The list join string in l# format.
     * @param {Array} array The array of list indexes to update and their values.
     */
    listUpdate:function (list, array) {},

    /**
     * @param {String} list The list join string in l# format.
     * @param {Number} [index] The list index to remove, or start from if removing multiple.
     * @param {Number} [count] The number of list items to remove, starting at index.
     */
    listRemove:function (list, index, count) {},

    listScroll:function (list, index, position, animated, visibleOnly) {},

    listInfo:function (list, callback) {},
    listInfoCallback:function (join, numberOfItems, currentIndexOfFirstVisibleItem, numberOfVisibleItems, currentScrollPosition) {},

    listContents:function (list, index, count, callback) {},
    listContentsCallback:function (object) {},

//DISPLAY
    //EVENTS (and corresponding callbacks)
    OrientationChangeEvent:"ORIENTATION_CHANGE_EVENT",
    orientationChangeEventCallback:function (pageName, newOrientation) {},
    PageFlipEvent:"PAGE_FLIP_EVENT",
    pageFlipEventCallback:function (from, to, orientation) {},

    //CONSTANTS
    PortraitOrientation:"PORTRAIT_ORIENTATION",
    LandscapeOrientation:"LANDSCAPE_ORIENTATION",

    //VARIABLES (UP TO DATE)
    currentPage:'CURRENT_PAGE',
    currentOrientation:"CURRENT_ORIENTATION",

    //FUNCTIONS
    flipToPage:function (pageName) {},

//NETWORK
    //CONSTANTS
    UTF8:"UTF8",
    BINARY:"BINARY",

    //VARIABLES
    ipv4address:"IPV4_ADDRESS",
    ipv4netmask:"IPV4_NETMASK",
    ipv6address:"IPV6_ADDRESS",
    ipv6netmask: "IPV6_NETMASK",
    MACaddress:"MAC_ADDRESS",
    networkType: "NETWORK_TYPE",
    networkSSID: "NETWORK_SSID",


    //EVENTS (and corresponding callbacks)
    NetworkStatusChangeEvent:"NETWORK_STATUS_CHANGE_EVENT",
    networkStatusChangedEventCallback:function (networkStatus) {},

    ConnectionStatusChangeEvent:"CONNECTION_STATUS_CHANGE_EVENT",
    connectionStatusChangeEventCallback:function (system, connected, remote) {},

    FeedbackMatchedEvent:"FEEDBACK_MATCHED_EVENT",
    feedbackMatchedEventCallback:function (feedbackItem, matchedString) {},

    //FUNCTIONS
    setSystemProperties:function (systemName, changes) {},

    /**
     * @param {String} systemName The name of the system (as defined in the GUI) to send the data to.
     * @param {String} string The message to send to the system.
     * @param {Number} [outputFormat] The data format to use when sending messages.
     */
    send:function (systemName, string, outputFormat) {},

    runCommand:function (systemName, command) {},

    runMacro:function (macroName) {},

    stopMacro:function (macroName) {},

    request:function (url, method, headers, body, callback) {},
    requestCallback:function (status, headers, body) {},

    startLookup:function (serviceType, serviceName, callback) {},
    startLookupCallback:function (addedServices, removedServices, error) {},

    stopLookup:function (serviceType, serviceName) {},

    startPublishing:function (serviceType, serviceName, port, txtData, callback) {},
    startPublishingCallback:function (serviceType, serviceName, port, published, error) {},

    stopPublishing:function (serviceType, serviceName, port) {},

//VIDEO
    //EVENTS
    MovieInfoReceivedEvent:"MOVIE_INFO_RECEIVED_EVENT",
    movieInfoReceivedEventCallback:function (join, movie) {},

    MoviePlaybackStateChangedEvent:"MOVIE_PLAYBACK_STATE_CHANGED_EVENT",
    moviePlaybackStateChangedEventCallback:function (join, movie) {},

    MovieLoadStateChangedEvent:"MOVIE_LOAD_STATE_CHANGED_EVENT",
    movieLoadStateChangedEventCallback:function (join, movie) {},


//SENSORS
    AccelerometerSensor: "ACCELEROMETER_SENSOR",
    GyroscopeSensor: "GYROSCOPE_SENSOR",
    AttitudeSensor: "ATTITUDE_SENSOR",
    HeadingSensor: "HEADING_SENSOR",
    LocationSensor: "LOCATION_SENSOR",

    //FUNCTIONS
    startMonitoring:function(sensor, options, callback) {},
    startMonitoringCallback:function(sensorType, data) {},

    stopMonitoring: function(monitorID) {},


//UTILITIES
    //EVENTS
    DevicePropertyChangedEvent: "DEVICE_PROPERTY_CHANGED_EVENT",
    devicePropertyChangedEventCallback: function(property, value) {},

    ScreenBrightnessProperty: "SCREEN_BRIGHTNESS_PROPERTY",
    SoundOutputVolumeProperty: "SOUND_OUTPUT_VOLUME_PROPERTY",
    BatteryLevelProperty: "BATTERY_LEVEL_PROPERTY",
    BatteryChargeStatusProperty: "BATTERY_CHARGE_STATUS_PROPERTY",

    //CONSTANTS
    //Hash
    Hash_MD5:"HASH_MD5",
    Hash_SHA1:"HASH_SHA1",
    Hash_SHA256:"HASH_SHA256",
    Hash_SHA384:"HASH_SHA384",
    Hash_SHA512:"HASH_SHA512",
    //CRC
    CRC_8:"CRC_8",
    CRC_16:"CRC_16",
    CRC_16_CCITT:"CRC_16_CCITT",
    CRC_16_MODBUS:"CRC_16_MODBUS",
    CRC_32:"CRC_32",
    CRC_32C:"CRC_32C",
    //Output Format
    OUTPUT_NUMBER:"OUTPUT_NUMBER",
    OUTPUT_STRING:"OUTPUT_STRING",
    OUTPUT_BINARY:"OUTPUT_BINARY",
    OUTPUT_BINARY_LE:"OUTPUT_BINARY_LE",
    //Battery Charge
    CHARGE_UNKNOWN: "CHARGE_UNKNOWN",
    CHARGE_UNPLUGGED: "CHARGE_UNPLUGGED",
    CHARGE_CHARGING: "CHARGE_CHARGING",
    CHARGE_FULL: "CHARGE_FULL",
    //Cache
    CACHE_READONLY: "CACHE_READONLY",
    CACHE: "CACHE",
    NO_CACHE: "NO_CACHE",
    RECACHE: "RECACHE",
    DECACHE: "DECACHE"

    //OBJECTS
    device:
    {
        screenBrightness: "SCREEN_BRIGHTNESS",
        soundOutputVolume: "SOUND_OUTPUT_VOLUME",
        batteryLevel: "BATTERY_LEVEL",
        batteryChargeStatus: "BATTERY_CHARGE_STATUS"
    },
    systems: Array(this.system),

    system: {
        type: "",
        enabled: false,
        address: "",
        port: 0,
        localPort: 0,
        connect: "",
        disconnect: "",
        connections: []
    },

    gui: {
        name: "",
        url: "",
        portraitSize: {
            w: 0,
            h: 0
        },
        landscapeSize: {
            w: 0,
            h: 0
        },
        allJoins: [],
        pages: Array(this.page),
        subpages: Array(this.subpage),
    },

    page: {
        name: "",
        join: "",
        type: "Page",
        portraitObjects: Array(this.guiObject),
        landscapeObjects: Array(this.guiObject)
    },

    subpage: {
        name: "",
        type: "Subpage",
        objects: []
    },

    guiObject: {
        join: "",
        type: "",
        digitalJoin: "",
        activeTextJoin: "",
        inactiveTextJoin: "",
        pressedJoin: "",
        playTriggerJoin: "",
        stoptriggerJoin: "",
        backTriggerJoin: "",
        forwardTriggerJoin: "",
        refreshTriggerJoin: "",
        subpage: ""
    },

    modules: [],

    //FUNCTIONS
    log:function (message) {},

    logObject:function (object) {},

    crc:function (crcType, string, outputFormat, callback) {},
    crcCallback:function (crc) {},

    hash:function (hashType, string, callback) {},
    hashCallback:function (hash) {},

    openURL:function(url) {},

    loadGUI:function(url, settings) {},

    loadAsset:function (assetName, dataEncoding, callback, cache) {},
    loadAssetCallback:function(assetFileAsString){},

    setDeviceProperty:function(property, value) {},

    watch:function(event, joinsArray, callback) {},
    watch:function(event, callback) {},
    unwatch:function(event) {},
    unwatch:function(event, joinsArray) {}
};
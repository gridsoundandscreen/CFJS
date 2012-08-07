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

    setJoin:function (join, value, tokens) {},

    setJoins:function (joinsArray, sendJoinChangeEvent) {},

    setToken:function (join, token, value) {},

    getProperties:function (joinOrJoinsArray, callback) {},
    getPropertiesCallback:function(join, x, y, w, h, xrotation, yrotation, zrotation, scale, opacity, theme){},

    setProperties:function (changes) {},

    getGuiDescription:function (callback) {},
    getGuiDescriptionCallback:function (object) {},

//LISTS
    //CONSTANTS
    LastItem:"LAST_ITEM",
    AllItems:"ALL_ITEMS",
    TopPosition:"TOP_POSITION",
    LeftPosition:"LEFT_POSITION",
    MiddlePosition:"MIDDLE_POSITION",
    BottomPosition:"BOTTOM_POSITION",
    RightPosition:"RIGHT_POSITION",
    VisiblePosition:"VISIBLE_POSITION",
    RelativePosition:"RELATIVE_POSITION",
    PixelPosition:"PIXEL_POSITION",

    //FUNCTIONS
    listAdd:function (list, array, position) {},

    listUpdate:function (list, array) {},

    listRemove:function (list, index, count) {},

    listScroll:function (list, index, position, animated, visibleOnly) {},

    listInfo:function (list, index, count, callback) {},
    ListInfoCallback:function (join, numberOfItems, currentIndexOfFirstVisibleItem, numberOfVisibleItems, currentScrollPosition) {},

    listContents:function (list, index, count, callback) {},
    ListContentsCallback:function (object) {},

//DISPLAY
    //CONSTANTS
    PortraitOrientation:"PORTRAIT_ORIENTATION",
    LandscapeOrientation:"LANDSCAPE_ORIENTATION",

    //VARIABLES (UP TO DATE)
    currentPage:'',
    currentOrientation:"",

    //EVENTS
    OrientationChangeEvent:"ORIENTATION_CHANGE_EVENT",
    orientationChangeEventCallback:function (pageName, newOrientation) {},

    PageFlipEvent:"PAGE_FLIP_EVENT",
    pageFlipEventCallback:function (from, to, orientation) {},

    //FUNCTIONS
    flipToPage:function (pageName) {},


//NETWORK
    //CONSTANTS
    UTF8:"UTF8",
    BINARY:"BINARY",

    //VARIABLES
    ipv4address:"",
    ipv4netmask:"",
    ipv6address:"",
    MACaddress:"",

    systems:{},

    device:{},

    //EVENTS
    NetworkStatusChangeEvent:"NETWORK_STATUS_CHANGE_EVENT",
    networkStatusChangedEventCallback:function (networkStatus) {},

    ConnectionStatusChangeEvent:"CONNECTION_STATUS_CHANGE_EVENT",
    connectionStatusChangeEventCallback:function (system, connected, remote) {},

    FeedbackMatchedEvent:"FEEDBACK_MATCHED_EVENT",
    feedbackMatchedEventCallback:function (feedbackItem, matchedString) {},

    //FUNCTIONS
    setSystemProperties:function (systemName, changes) {},

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

//UTILITIES
    //CONSTANTS
    Hash_MD5:"HASH_MD5",
    Hash_SHA1:"HASH_SHA1",
    Hash_SHA256:"HASH_SHA256",
    Hash_SHA384:"HASH_SHA384",
    Hash_SHA512:"HASH_SHA512",

    CRC_8:"CRC_8",
    CRC_16:"CRC_16",
    CRC_16_CCITT:"CRC_16_CCITT",
    CRC_16_MODBUS:"CRC_16_MODBUS",
    CRC_32:"CRC_32",
    CRC_32C:"CRC_32C",

    OUTPUT_NUMBER:"OUTPUT_NUMBER",
    OUTPUT_STRING:"OUTPUT_STRING",
    OUTPUT_BINARY:"OUTPUT_BINARY",
    OUTPUT_BINARY_LE:"OUTPUT_BINARY_LE",

    //FUNCTIONS
    log:function (message) {},

    logObject:function (object) {},

    crc:function (crcType, string, outputFormat, callback) {},
    crcCallback:function (crc) {},

    hash:function (hashType, string, callback) {},
    hashCallback:function (hash) {},

    loadAsset:function (assetName, dataEncoding, callback) {},
    loadAssetCallback:function(assetFileAsString){}
};

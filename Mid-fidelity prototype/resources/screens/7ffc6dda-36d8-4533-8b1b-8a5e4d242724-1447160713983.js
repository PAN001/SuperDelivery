jQuery("#simulation")
.on("click", ".s-7ffc6dda-36d8-4533-8b1b-8a5e4d242724 .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Button_17")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#s-Button_18",
"effect": {
"type": "fade",
"easing": "linear",
"duration": 200
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimShow",
"parameter": {
"target": "#s-Button_18",
"effect": {
"type": "fade",
"easing": "linear",
"duration": 200
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimShow",
"parameter": {
"target": "#s-signin-button",
"effect": {
"type": "bounce",
"duration": 100
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/18f8704d-49c1-4bc5-b327-2ade19ef24b0",
"transition": "fade"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Callout")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": "#s-Callout",
"effect": {
"type": "fade",
"duration": 500
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
}
})
.on("click", ".s-7ffc6dda-36d8-4533-8b1b-8a5e4d242724 .toggle", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Info")) {
if(jFirer.data("jimHasToggle")) {
jFirer.removeData("jimHasToggle");
jEvent.undoCases(jFirer);
} else {
jFirer.data("jimHasToggle", true);
event.backupState = true;
event.target = jFirer;
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Callout",
"effect": {
"type": "fade",
"duration": 500
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
jEvent.launchCases(cases);
}
}
})
.on("pageload", ".s-7ffc6dda-36d8-4533-8b1b-8a5e4d242724 .pageload", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Label_31")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Label_31",
"value": {
"action": "jimConcat",
"parameter": [ {
"action": "jimSubstring",
"parameter": [ {
"action": "jimSystemTime"
},"0","5" ]
}," PM" ]
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
}
})
.on("focusin", ".s-7ffc6dda-36d8-4533-8b1b-8a5e4d242724 .focusin", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Input-text_2")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input-text_2",
"value": ""
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
},
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input-text_2",
"property": "jimGetValue"
},"Password" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input-text_2",
"value": ""
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Boxes",
"top": {
"type": "movetoposition",
"value": "243"
},
"left": {
"type": "movetoposition",
"value": "27"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 300
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Image_1",
"top": {
"type": "movetoposition",
"value": "39"
},
"left": {
"type": "movetoposition",
"value": "121"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 300
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "parallel",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Rich_text_2",
"top": {
"type": "movetoposition",
"value": "151"
},
"left": {
"type": "movetoposition",
"value": "31"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 300
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "parallel",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Label_2",
"top": {
"type": "movetoposition",
"value": "259"
},
"left": {
"type": "movetoposition",
"value": "33"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 300
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "parallel",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Group_1",
"top": {
"type": "movetoposition",
"value": "300"
},
"left": {
"type": "movetoposition",
"value": "-1"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 300
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "parallel",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Input-text")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input-text",
"value": ""
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
},
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input-text",
"property": "jimGetValue"
},"Email" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input-text",
"value": ""
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Image_1",
"top": {
"type": "movetoposition",
"value": "39"
},
"left": {
"type": "movetoposition",
"value": "121"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 300
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Boxes",
"top": {
"type": "movetoposition",
"value": "243"
},
"left": {
"type": "movetoposition",
"value": "27"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 300
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "parallel",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Rich_text_2",
"top": {
"type": "movetoposition",
"value": "151"
},
"left": {
"type": "movetoposition",
"value": "31"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 300
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "parallel",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Label_2",
"top": {
"type": "movetoposition",
"value": "259"
},
"left": {
"type": "movetoposition",
"value": "33"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 300
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "parallel",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Group_1",
"top": {
"type": "movetoposition",
"value": "300"
},
"left": {
"type": "movetoposition",
"value": "-1"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 300
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "parallel",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
}
})
.on("focusout", ".s-7ffc6dda-36d8-4533-8b1b-8a5e4d242724 .focusout", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Input-text_2")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input-text_2",
"property": "jimGetValue"
},"" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input-text_2",
"value": "Password"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
},
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ null,"1" ]
},
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Boxes",
"top": {
"type": "movetoposition",
"value": "293"
},
"left": {
"type": "movetoposition",
"value": "27"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 300
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Boxes",
"top": {
"type": "movetoposition",
"value": "293"
},
"left": {
"type": "movetoposition",
"value": "27"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 300
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "parallel",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Image_1",
"top": {
"type": "movetoposition",
"value": "89"
},
"left": {
"type": "movetoposition",
"value": "121"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 300
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "parallel",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Rich_text_2",
"top": {
"type": "movetoposition",
"value": "201"
},
"left": {
"type": "movetoposition",
"value": "31"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 300
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "parallel",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Label_2",
"top": {
"type": "movetoposition",
"value": "309"
},
"left": {
"type": "movetoposition",
"value": "33"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 300
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "parallel",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Group_1",
"top": {
"type": "movetoposition",
"value": "350"
},
"left": {
"type": "movetoposition",
"value": "-1"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 300
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "parallel",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Input-text")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "property",
"target": "#s-Input-text",
"property": "jimGetValue"
},"" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": "#s-Input-text",
"value": "Email"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
},
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ null,"password" ]
},
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Boxes",
"top": {
"type": "movetoposition",
"value": "293"
},
"left": {
"type": "movetoposition",
"value": "27"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 300
}
},
"exectype": "serial",
"delay": 0
}
]
},
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Boxes",
"top": {
"type": "movetoposition",
"value": "293"
},
"left": {
"type": "movetoposition",
"value": "27"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 300
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Image_1",
"top": {
"type": "movetoposition",
"value": "89"
},
"left": {
"type": "movetoposition",
"value": "121"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 300
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "parallel",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Rich_text_2",
"top": {
"type": "movetoposition",
"value": "201"
},
"left": {
"type": "movetoposition",
"value": "31"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 300
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "parallel",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Label_2",
"top": {
"type": "movetoposition",
"value": "309"
},
"left": {
"type": "movetoposition",
"value": "33"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 300
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "parallel",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Group_1",
"top": {
"type": "movetoposition",
"value": "350"
},
"left": {
"type": "movetoposition",
"value": "-1"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 300
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "parallel",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
}
});
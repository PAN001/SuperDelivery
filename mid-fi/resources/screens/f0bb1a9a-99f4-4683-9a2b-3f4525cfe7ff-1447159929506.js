jQuery("#simulation")
.on("click", ".s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-close")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Group_2",
"top": {
"type": "movetoposition",
"value": "714"
},
"left": {
"type": "movetoposition",
"value": "-2"
},
"containment": false,
"effect": {
"type": "none",
"easing": "easeOutQuad",
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
} else if(jFirer.is("#s-Button-red_1")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff #s-Button-red_1": {
"attributes": {
"background-color": "#01BBD2",
"background-image": "none",
"font-size": "11.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff #s-Button-red_1 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff #s-Button-red_1 span": {
"attributes": {
"color": "#FFFFFF",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "11.0pt"
}
}
},{
"#s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff #s-Button-red_1": {
"attributes-ie": {
"-pie-background": "#01BBD2",
"-pie-poll": "false"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimPause",
"parameter": {
"pause": 300
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff #s-Button-red_1": {
"attributes": {
"background-color": "#FFFFFF",
"background-image": "none",
"font-size": "11.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff #s-Button-red_1 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff #s-Button-red_1 span": {
"attributes": {
"color": "#01BBD2",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "11.0pt"
}
}
},{
"#s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff #s-Button-red_1": {
"attributes-ie": {
"-pie-background": "#FFFFFF",
"-pie-poll": "false"
}
}
} ],
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
.on("click", ".s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff .toggle", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Radio-button")) {
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
"action": "jimSetValue",
"parameter": {
"target": "#s-Radio-button",
"value": ""
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff #s-Radio-button": {
"attributes": {
"font-size": "20.0pt",
"font-family": "IOS8-Icons-Regular,Arial"
}
}
},{
"#s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff #s-Radio-button .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff #s-Radio-button span": {
"attributes": {
"color": "#999999",
"text-align": "left",
"text-decoration": "none",
"font-family": "IOS8-Icons-Regular,Arial",
"font-size": "20.0pt"
}
}
} ],
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
} else if(jFirer.is("#s-Radio-button_5")) {
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
"action": "jimSetValue",
"parameter": {
"target": "#s-Radio-button_5",
"value": ""
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff #s-Radio-button_5": {
"attributes": {
"font-size": "20.0pt",
"font-family": "IOS8-Icons-Regular,Arial"
}
}
},{
"#s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff #s-Radio-button_5 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff #s-Radio-button_5 span": {
"attributes": {
"color": "#666666",
"text-align": "left",
"text-decoration": "none",
"font-family": "IOS8-Icons-Regular,Arial",
"font-size": "20.0pt"
}
}
} ],
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
} else if(jFirer.is("#s-Radio-button_6")) {
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
"action": "jimSetValue",
"parameter": {
"target": "#s-Radio-button_6",
"value": ""
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff #s-Radio-button_6": {
"attributes": {
"font-size": "20.0pt",
"font-family": "IOS8-Icons-Regular,Arial"
}
}
},{
"#s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff #s-Radio-button_6 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff #s-Radio-button_6 span": {
"attributes": {
"color": "#666666",
"text-align": "left",
"text-decoration": "none",
"font-family": "IOS8-Icons-Regular,Arial",
"font-size": "20.0pt"
}
}
} ],
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
} else if(jFirer.is("#s-Radio-button_7")) {
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
"action": "jimSetValue",
"parameter": {
"target": "#s-Radio-button_7",
"value": ""
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff #s-Radio-button_7": {
"attributes": {
"font-size": "20.0pt",
"font-family": "IOS8-Icons-Regular,Arial"
}
}
},{
"#s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff #s-Radio-button_7 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff #s-Radio-button_7 span": {
"attributes": {
"color": "#666666",
"text-align": "left",
"text-decoration": "none",
"font-family": "IOS8-Icons-Regular,Arial",
"font-size": "20.0pt"
}
}
} ],
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
} else if(jFirer.is("#s-Radio-button_8")) {
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
"action": "jimSetValue",
"parameter": {
"target": "#s-Radio-button_8",
"value": ""
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff #s-Radio-button_8": {
"attributes": {
"font-size": "20.0pt",
"font-family": "IOS8-Icons-Regular,Arial"
}
}
},{
"#s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff #s-Radio-button_8 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff #s-Radio-button_8 span": {
"attributes": {
"color": "#666666",
"text-align": "left",
"text-decoration": "none",
"font-family": "IOS8-Icons-Regular,Arial",
"font-size": "20.0pt"
}
}
} ],
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
.on("focusin", ".s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff .focusin", function(event, data) {
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
}
];
event.data = data;
jEvent.launchCases(cases);
}
})
.on("focusout", ".s-f0bb1a9a-99f4-4683-9a2b-3f4525cfe7ff .focusout", function(event, data) {
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
}
];
event.data = data;
jEvent.launchCases(cases);
}
});
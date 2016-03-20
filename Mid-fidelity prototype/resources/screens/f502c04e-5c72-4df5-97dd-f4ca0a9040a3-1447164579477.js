jQuery("#simulation")
.on("click", ".s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Label_291")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"isbackward": true,
"transition": "slideright"
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
} else if(jFirer.is("#s-Label_3")) {
cases = [
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
} else if(jFirer.is("#s-Label_296")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/aba35f8c-0d27-4d82-b935-74957243e129"
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
} else if(jFirer.is("#s-Label_294")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/ec6e3939-071c-4b29-9f2a-64e7714d9ee5",
"transition": "slideleft"
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
} else if(jFirer.is("#s-Button-red")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Button-red": {
"attributes": {
"background-color": "#01BBD2",
"background-image": "none",
"font-size": "11.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Button-red .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Button-red span": {
"attributes": {
"color": "#FFFFFF",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "11.0pt"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Button-red": {
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
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Button-red": {
"attributes": {
"background-color": "#FFFFFF",
"background-image": "none",
"font-size": "11.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Button-red .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Button-red span": {
"attributes": {
"color": "#01BBD2",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "11.0pt"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Button-red": {
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
},
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
"value": "428"
},
"left": {
"type": "movetoposition",
"value": "0"
},
"containment": false,
"effect": {
"type": "none",
"easing": "easeInQuad",
"duration": 500
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimMove",
"parameter": {
"target": "#s-Rectangle_13",
"top": {
"type": "movetoposition",
"value": "0"
},
"left": {
"type": "movetoposition",
"value": "0"
},
"containment": false,
"effect": {
"type": "none",
"easing": "easeInOutQuad",
"duration": 500
}
},
"exectype": "parallel",
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
} else if(jFirer.is("#s-close")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Rectangle_13",
"top": {
"type": "movetoposition",
"value": "-481"
},
"left": {
"type": "movetoposition",
"value": "0"
},
"containment": false,
"effect": {
"type": "none",
"easing": "easeInQuad",
"duration": 500
}
},
"exectype": "serial",
"delay": 0
},
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
"exectype": "parallel",
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
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Button-red_1": {
"attributes": {
"background-color": "#01BBD2",
"background-image": "none",
"font-size": "11.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Button-red_1 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Button-red_1 span": {
"attributes": {
"color": "#FFFFFF",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "11.0pt"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Button-red_1": {
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
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Button-red_1": {
"attributes": {
"background-color": "#FFFFFF",
"background-image": "none",
"font-size": "11.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Button-red_1 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Button-red_1 span": {
"attributes": {
"color": "#01BBD2",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "11.0pt"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Button-red_1": {
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
},
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Dialog-3",
"top": {
"type": "movetoposition",
"value": "252"
},
"left": {
"type": "movetoposition",
"value": "61"
},
"containment": false
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimMove",
"parameter": {
"target": "#s-Rectangle_14",
"top": {
"type": "movetoposition",
"value": "0"
},
"left": {
"type": "movetoposition",
"value": "0"
},
"containment": false
},
"exectype": "parallel",
"delay": 0
},
{
"action": "jimMove",
"parameter": {
"target": "#s-Rectangle_13",
"top": {
"type": "movetoposition",
"value": "-481"
},
"left": {
"type": "movetoposition",
"value": "0"
},
"containment": false
},
"exectype": "parallel",
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
} else if(jFirer.is("#s-Rectangle_14")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Rectangle_14",
"top": {
"type": "movetoposition",
"value": "-481"
},
"left": {
"type": "movetoposition",
"value": "0"
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
},
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
"easing": "easeInQuad",
"duration": 500
}
},
"exectype": "parallel",
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
} else if(jFirer.is("#s-Rectangle_13")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Rectangle_13",
"top": {
"type": "movetoposition",
"value": "-481"
},
"left": {
"type": "movetoposition",
"value": "0"
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
},
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
"easing": "easeInQuad",
"duration": 500
}
},
"exectype": "parallel",
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
} else if(jFirer.is("#s-Label_28")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Label_28": {
"attributes": {
"font-size": "12.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Label_28 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Label_28 span": {
"attributes": {
"color": "#80B8F1",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "12.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimPause",
"parameter": {
"pause": 500
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Label_28": {
"attributes": {
"font-size": "12.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Label_28 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Label_28 span": {
"attributes": {
"color": "#007DFF",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "12.0pt"
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
},
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Rectangle_14",
"top": {
"type": "movetoposition",
"value": "-1219"
},
"left": {
"type": "movetoposition",
"value": "0"
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
},
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
"exectype": "parallel",
"delay": 0
},
{
"action": "jimMove",
"parameter": {
"target": "#s-Dialog-3",
"top": {
"type": "movetoposition",
"value": "252"
},
"left": {
"type": "movetoposition",
"value": "-355"
},
"containment": false
},
"exectype": "parallel",
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
} else if(jFirer.is("#s-Label_29")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Label_29": {
"attributes": {
"font-size": "12.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Label_29 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Label_29 span": {
"attributes": {
"color": "#80B8F1",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "12.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimPause",
"parameter": {
"pause": 500
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Label_29": {
"attributes": {
"font-size": "12.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Label_29 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Label_29 span": {
"attributes": {
"color": "#007DFF",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "12.0pt"
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
},
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/6975f9e2-c34d-4093-a57a-03ab9a61b1f3",
"transition": "slideleft"
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
} else if(jFirer.is("#s-Button-red_2")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Button-red_2": {
"attributes": {
"background-color": "#01BBD2",
"background-image": "none",
"font-size": "11.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Button-red_2 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Button-red_2 span": {
"attributes": {
"color": "#FFFFFF",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "11.0pt"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Button-red_2": {
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
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Button-red_2": {
"attributes": {
"background-color": "#FFFFFF",
"background-image": "none",
"font-size": "11.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Button-red_2 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Button-red_2 span": {
"attributes": {
"color": "#01BBD2",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "11.0pt"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Button-red_2": {
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
},
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": "#s-Dialog-3",
"top": {
"type": "movetoposition",
"value": "252"
},
"left": {
"type": "movetoposition",
"value": "61"
},
"containment": false
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimMove",
"parameter": {
"target": "#s-Rectangle_14",
"top": {
"type": "movetoposition",
"value": "0"
},
"left": {
"type": "movetoposition",
"value": "0"
},
"containment": false
},
"exectype": "parallel",
"delay": 0
},
{
"action": "jimMove",
"parameter": {
"target": "#s-Rectangle_13",
"top": {
"type": "movetoposition",
"value": "-481"
},
"left": {
"type": "movetoposition",
"value": "0"
},
"containment": false
},
"exectype": "parallel",
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
.on("click", ".s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 .toggle", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Radio-button_1")) {
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
"target": "#s-Radio-button_1",
"value": ""
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Radio-button_1": {
"attributes": {
"font-size": "20.0pt",
"font-family": "IOS8-Icons-Regular,Arial"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Radio-button_1 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Radio-button_1 span": {
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
} else if(jFirer.is("#s-Radio-button_2")) {
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
"target": "#s-Radio-button_2",
"value": ""
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Radio-button_2": {
"attributes": {
"font-size": "20.0pt",
"font-family": "IOS8-Icons-Regular,Arial"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Radio-button_2 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Radio-button_2 span": {
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
} else if(jFirer.is("#s-Radio-button")) {
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
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Radio-button": {
"attributes": {
"font-size": "20.0pt",
"font-family": "IOS8-Icons-Regular,Arial"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Radio-button .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Radio-button span": {
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
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Radio-button_5": {
"attributes": {
"font-size": "20.0pt",
"font-family": "IOS8-Icons-Regular,Arial"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Radio-button_5 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Radio-button_5 span": {
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
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Radio-button_6": {
"attributes": {
"font-size": "20.0pt",
"font-family": "IOS8-Icons-Regular,Arial"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Radio-button_6 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Radio-button_6 span": {
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
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Radio-button_7": {
"attributes": {
"font-size": "20.0pt",
"font-family": "IOS8-Icons-Regular,Arial"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Radio-button_7 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Radio-button_7 span": {
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
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Radio-button_8": {
"attributes": {
"font-size": "20.0pt",
"font-family": "IOS8-Icons-Regular,Arial"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Radio-button_8 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 #s-Radio-button_8 span": {
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
.on("pageload", ".s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 .pageload", function(event, data) {
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
.on("focusin", ".s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 .focusin", function(event, data) {
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
.on("focusout", ".s-f502c04e-5c72-4df5-97dd-f4ca0a9040a3 .focusout", function(event, data) {
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
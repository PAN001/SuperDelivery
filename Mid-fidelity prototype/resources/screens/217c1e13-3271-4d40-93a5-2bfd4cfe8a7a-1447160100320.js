jQuery("#simulation")
.on("click", ".s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Label_22")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_22": {
"attributes": {
"background-color": "#FFFFFF",
"background-image": "none",
"font-size": "9.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_22 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_22 span": {
"attributes": {
"color": "#01BBD2",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "9.0pt"
}
}
},{
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_22": {
"attributes-ie": {
"-pie-background": "#FFFFFF",
"-pie-poll": "false"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_21": {
"attributes": {
"background-color": "transparent",
"background-image": "none",
"font-size": "9.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_21 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_21 span": {
"attributes": {
"color": "#FFFFFF",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "9.0pt"
}
}
},{
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_21": {
"attributes-ie": {
"-pie-background": "transparent",
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
} else if(jFirer.is("#s-Label_21")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_21": {
"attributes": {
"background-color": "#FFFFFF",
"background-image": "none",
"font-size": "9.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_21 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_21 span": {
"attributes": {
"color": "#01BBD2",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "9.0pt"
}
}
},{
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_21": {
"attributes-ie": {
"-pie-background": "#FFFFFF",
"-pie-poll": "false"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_22": {
"attributes": {
"background-color": "transparent",
"background-image": "none",
"font-size": "9.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_22 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_22 span": {
"attributes": {
"color": "#FFFFFF",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "9.0pt"
}
}
},{
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_22": {
"attributes-ie": {
"-pie-background": "transparent",
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
} else if(jFirer.is("#s-Label_275")) {
cases = [
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
"value": "1"
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
"target": "#s-Rectangle_11",
"top": {
"type": "movetoposition",
"value": "1"
},
"left": {
"type": "movetoposition",
"value": "235"
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
} else if(jFirer.is("#s-Label_296")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/537e0422-4e31-477d-9b16-5dd83edc4d28"
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
} else if(jFirer.is("#s-Label_30")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/dfe58af8-2bf0-4885-b60c-b0e9d09c0cc0",
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
} else if(jFirer.is("#s-Label_3")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/217c1e13-3271-4d40-93a5-2bfd4cfe8a7a",
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
} else if(jFirer.is("#s-Button_1")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/18f8704d-49c1-4bc5-b327-2ade19ef24b0"
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
} else if(jFirer.is("#s-Button_4")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/2272b70c-81f1-4c72-aa34-776051780aaf"
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
} else if(jFirer.is("#s-Button_5")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/c1581ad6-b19e-462c-aade-650296744450"
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
} else if(jFirer.is("#s-Label_23")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_23": {
"attributes": {
"background-color": "#FFFFFF",
"background-image": "none",
"font-size": "9.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_23 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_23 span": {
"attributes": {
"color": "#FF2B70",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "9.0pt"
}
}
},{
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_23": {
"attributes-ie": {
"-pie-background": "#FFFFFF",
"-pie-poll": "false"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_24": {
"attributes": {
"background-color": "transparent",
"background-image": "none",
"font-size": "9.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_24 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_24 span": {
"attributes": {
"color": "#FFFFFF",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "9.0pt"
}
}
},{
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_24": {
"attributes-ie": {
"-pie-background": "transparent",
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
} else if(jFirer.is("#s-Label_24")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_24": {
"attributes": {
"background-color": "#FFFFFF",
"background-image": "none",
"font-size": "9.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_24 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_24 span": {
"attributes": {
"color": "#FF2B70",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "9.0pt"
}
}
},{
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_24": {
"attributes-ie": {
"-pie-background": "#FFFFFF",
"-pie-poll": "false"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_23": {
"attributes": {
"background-color": "transparent",
"background-image": "none",
"font-size": "9.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_23 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_23 span": {
"attributes": {
"color": "#FFFFFF",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "9.0pt"
}
}
},{
"#s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a #s-Label_23": {
"attributes-ie": {
"-pie-background": "transparent",
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
"exectype": "timed",
"delay": 500
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Rectangle_11")) {
cases = [
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
"value": "0"
},
"left": {
"type": "movetoposition",
"value": "-267"
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
"target": "#s-Rectangle_11",
"top": {
"type": "movetoposition",
"value": "1"
},
"left": {
"type": "movetoposition",
"value": "500"
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
} else if(jFirer.is("#s-Rich_text_1")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/537e0422-4e31-477d-9b16-5dd83edc4d28",
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
}
})
.on("pageload", ".s-217c1e13-3271-4d40-93a5-2bfd4cfe8a7a .pageload", function(event, data) {
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
});
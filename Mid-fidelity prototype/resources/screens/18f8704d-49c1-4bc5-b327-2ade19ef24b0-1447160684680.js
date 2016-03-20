jQuery("#simulation")
.on("click", ".s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Button_1")) {
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
} else if(jFirer.is("#s-Button_2")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/f54aea0c-3f82-4996-bfe2-5519eb268e7d"
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
} else if(jFirer.is("#s-Button_3")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/d1b2e539-405e-4142-90ec-361de2150430"
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
"target": "screens/a54f1b3b-e5bd-403c-a59b-99fcbc6eedf0"
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
"target": "screens/8e802ac8-e8bc-484f-88b4-f3366177bd53"
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
} else if(jFirer.is("#s-Label_275")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Group_1",
"effect": {
"type": "fade",
"duration": 100
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimMove",
"parameter": {
"target": "#s-Group_1",
"top": {
"type": "movetoposition",
"value": "-2"
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
"exectype": "parallel",
"delay": 0
},
{
"action": "jimMove",
"parameter": {
"target": "#s-Rectangle_11",
"top": {
"type": "movetoposition",
"value": "0"
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
} else if(jFirer.is("#s-Text_8")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": "#s-Rectangle_9",
"effect": {
"type": "fade",
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
} else if(jFirer.is("#s-Label_290")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/f870c248-2064-417a-9b56-09d56e3bef26",
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
"#s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 #s-Button-red": {
"attributes": {
"background-color": "#01BBD2",
"background-image": "none",
"font-size": "8.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 #s-Button-red .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 #s-Button-red span": {
"attributes": {
"color": "#FFFFFF",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "8.0pt"
}
}
},{
"#s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 #s-Button-red": {
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
"#s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 #s-Button-red": {
"attributes": {
"background-color": "#FFFFFF",
"background-image": "none",
"line-height": "15px",
"font-size": "8.0pt",
"font-family": "Roboto-Bold,Arial"
}
}
},{
"#s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 #s-Button-red .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 #s-Button-red span": {
"attributes": {
"color": "#01BBD2",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Bold,Arial",
"font-size": "8.0pt"
}
}
},{
"#s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 #s-Button-red": {
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
"action": "jimNavigation",
"parameter": {
"target": "screens/4a6aa475-6599-4c79-b58f-4b9883d9ea73",
"transition": "slideleft"
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
"value": "-2"
},
"left": {
"type": "movetoposition",
"value": "-283"
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
"value": "0"
},
"left": {
"type": "movetoposition",
"value": "402"
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
} else if(jFirer.is("#s-Label_22")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 #s-Label_22": {
"attributes": {
"background-color": "#FFFFFF",
"background-image": "none",
"font-size": "9.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 #s-Label_22 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 #s-Label_22 span": {
"attributes": {
"color": "#01BBD2",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "9.0pt"
}
}
},{
"#s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 #s-Label_22": {
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
"#s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 #s-Label_21": {
"attributes": {
"background-color": "transparent",
"background-image": "none",
"font-size": "9.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 #s-Label_21 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 #s-Label_21 span": {
"attributes": {
"color": "#FFFFFF",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "9.0pt"
}
}
},{
"#s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 #s-Label_21": {
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
"target": "screens/217c1e13-3271-4d40-93a5-2bfd4cfe8a7a",
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
} else if(jFirer.is("#s-Label_21")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 #s-Label_21": {
"attributes": {
"background-color": "#FFFFFF",
"background-image": "none",
"font-size": "9.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 #s-Label_21 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 #s-Label_21 span": {
"attributes": {
"color": "#01BBD2",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "9.0pt"
}
}
},{
"#s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 #s-Label_21": {
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
"#s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 #s-Label_22": {
"attributes": {
"background-color": "transparent",
"background-image": "none",
"font-size": "9.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 #s-Label_22 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 #s-Label_22 span": {
"attributes": {
"color": "#FFFFFF",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "9.0pt"
}
}
},{
"#s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 #s-Label_22": {
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
}
})
.on("pageload", ".s-18f8704d-49c1-4bc5-b327-2ade19ef24b0 .pageload", function(event, data) {
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
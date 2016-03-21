jQuery("#simulation")
.on("click", ".s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Label_296")) {
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
} else if(jFirer.is("#s-Label_9")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_9": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_9 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_9 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
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
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_10": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_10 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_10 span": {
"attributes": {
"color": "#CCCCCC",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_13": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_13 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_13 span": {
"attributes": {
"color": "#CCCCCC",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "parallel",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_11": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_11 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_11 span": {
"attributes": {
"color": "#CCCCCC",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "parallel",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_14": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_14 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_14 span": {
"attributes": {
"color": "#CCCCCC",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
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
} else if(jFirer.is("#s-Label_10")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_9": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_9 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_9 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_10": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_10 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_10 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "parallel",
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
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_13": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_13 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_13 span": {
"attributes": {
"color": "#CCCCCC",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_11": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_11 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_11 span": {
"attributes": {
"color": "#CCCCCC",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "parallel",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_14": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_14 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_14 span": {
"attributes": {
"color": "#CCCCCC",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
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
} else if(jFirer.is("#s-Label_11")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_9": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_9 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_9 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_10": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_10 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_10 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "parallel",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_13": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_13 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_13 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "parallel",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_11": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_11 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_11 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "parallel",
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
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_14": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_14 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_14 span": {
"attributes": {
"color": "#CCCCCC",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
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
} else if(jFirer.is("#s-Label_13")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_9": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_9 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_9 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_10": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_10 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_10 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "parallel",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_13": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_13 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_13 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "parallel",
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
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_11": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_11 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_11 span": {
"attributes": {
"color": "#CCCCCC",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_14": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_14 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_14 span": {
"attributes": {
"color": "#CCCCCC",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
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
} else if(jFirer.is("#s-Label_14")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_9": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_9 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_9 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_10": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_10 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_10 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "parallel",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_13": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_13 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_13 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "parallel",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_14": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_14 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_14 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "parallel",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_11": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_11 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_11 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
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
} else if(jFirer.is("#s-Label_19")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_19": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_19 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_19 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
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
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_20": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_20 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_20 span": {
"attributes": {
"color": "#CCCCCC",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_22": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_22 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_22 span": {
"attributes": {
"color": "#CCCCCC",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "parallel",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_21": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_21 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_21 span": {
"attributes": {
"color": "#CCCCCC",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "parallel",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_23": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_23 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_23 span": {
"attributes": {
"color": "#CCCCCC",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
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
} else if(jFirer.is("#s-Label_20")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_19": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_19 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_19 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_20": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_20 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_20 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "parallel",
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
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_22": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_22 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_22 span": {
"attributes": {
"color": "#CCCCCC",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_21": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_21 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_21 span": {
"attributes": {
"color": "#CCCCCC",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "parallel",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_23": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_23 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_23 span": {
"attributes": {
"color": "#CCCCCC",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
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
} else if(jFirer.is("#s-Label_21")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_19": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_19 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_19 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_20": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_20 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_20 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "parallel",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_22": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_22 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_22 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "parallel",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_21": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_21 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_21 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "parallel",
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
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_23": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_23 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_23 span": {
"attributes": {
"color": "#CCCCCC",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
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
} else if(jFirer.is("#s-Label_22")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_19": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_19 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_19 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_20": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_20 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_20 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "parallel",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_22": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_22 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_22 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "parallel",
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
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_21": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_21 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_21 span": {
"attributes": {
"color": "#CCCCCC",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_23": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_23 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_23 span": {
"attributes": {
"color": "#CCCCCC",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
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
} else if(jFirer.is("#s-Label_23")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_19": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_19 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_19 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_20": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_20 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_20 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "parallel",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_22": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_22 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_22 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "parallel",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_23": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_23 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_23 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
"exectype": "parallel",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_21": {
"attributes": {
"font-size": "16.0pt",
"font-family": "materialdesignjim-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_21 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Label_21 span": {
"attributes": {
"color": "#FACA51",
"text-align": "left",
"text-decoration": "none",
"font-family": "materialdesignjim-Regular,Arial",
"font-size": "16.0pt"
}
}
} ],
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
} else if(jFirer.is("#s-Label_291")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/18f8704d-49c1-4bc5-b327-2ade19ef24b0",
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
} else if(jFirer.is("#s-Button-red")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Button-red": {
"attributes": {
"background-color": "#01BBD2",
"background-image": "none",
"font-size": "11.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Button-red .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Button-red span": {
"attributes": {
"color": "#FFFFFF",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "11.0pt"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Button-red": {
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
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Button-red": {
"attributes": {
"background-color": "#FFFFFF",
"background-image": "none",
"font-size": "11.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Button-red .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Button-red span": {
"attributes": {
"color": "#01BBD2",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "11.0pt"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Button-red": {
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
"target": "screens/5b77764d-4165-4621-86e9-cdaaf2a95bc7",
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
}
})
.on("click", ".s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 .toggle", function(event, data) {
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
"value": ""
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Radio-button_1": {
"attributes": {
"font-size": "20.0pt",
"font-family": "IOS8-Icons-Regular,Arial"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Radio-button_1 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 #s-Radio-button_1 span": {
"attributes": {
"color": "#01BBD2",
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
.on("pageload", ".s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 .pageload", function(event, data) {
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
.on("focusin", ".s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 .focusin", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Input-text")) {
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
},"Please leave your valuable comments :)" ]
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
"target": "#s-Group_1",
"top": {
"type": "movetoposition",
"value": "-46"
},
"left": {
"type": "movetoposition",
"value": "0"
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
},
{
"action": "jimMove",
"parameter": {
"target": "#s-Input-text",
"top": {
"type": "movetoposition",
"value": "333"
},
"left": {
"type": "movetoposition",
"value": "9"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 300
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
}
})
.on("focusout", ".s-4a6aa475-6599-4c79-b58f-4b9883d9ea73 .focusout", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Input-text")) {
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
"value": "Please leave your valuable comments :)"
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
"target": "#s-Group_1",
"top": {
"type": "movetoposition",
"value": "64"
},
"left": {
"type": "movetoposition",
"value": "0"
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
},
{
"action": "jimMove",
"parameter": {
"target": "#s-Input-text",
"top": {
"type": "movetoposition",
"value": "433"
},
"left": {
"type": "movetoposition",
"value": "9"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 300
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
}
});
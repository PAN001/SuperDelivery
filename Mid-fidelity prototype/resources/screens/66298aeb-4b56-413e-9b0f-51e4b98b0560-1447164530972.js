jQuery("#simulation")
.on("click", ".s-66298aeb-4b56-413e-9b0f-51e4b98b0560 .click", function(event, data) {
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
} else if(jFirer.is("#s-Label_296")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/aba35f8c-0d27-4d82-b935-74957243e129",
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
} else if(jFirer.is("#s-Label_9")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-66298aeb-4b56-413e-9b0f-51e4b98b0560 #s-Label_9": {
"attributes": {
"font-size": "20.0pt",
"font-family": "IOS8-Icons-Regular,Arial"
}
}
},{
"#s-66298aeb-4b56-413e-9b0f-51e4b98b0560 #s-Label_9 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-66298aeb-4b56-413e-9b0f-51e4b98b0560 #s-Label_9 span": {
"attributes": {
"color": "#FFFFFF",
"text-align": "left",
"text-decoration": "none",
"font-family": "IOS8-Icons-Regular,Arial",
"font-size": "20.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-66298aeb-4b56-413e-9b0f-51e4b98b0560 #s-Ellipse_1 .shapert-clipping": {
"attributes": {
"left": "0px",
"top": "0px",
"width": "36px",
"height": "35px",
"position": "absolute",
"overflow": "hidden"
}
}
},{
"#s-66298aeb-4b56-413e-9b0f-51e4b98b0560 #s-Ellipse_1 .content": {
"attributes": {
"width": "36px",
"height": "35px"
}
}
},{
"#s-66298aeb-4b56-413e-9b0f-51e4b98b0560 #s-Ellipse_1": {
"attributes": {
"background-color": "#01BBD2",
"background-image": "none"
}
}
},{
"#s-66298aeb-4b56-413e-9b0f-51e4b98b0560 #s-Ellipse_1": {
"attributes-ie": {
"-pie-background": "#01BBD2",
"-pie-poll": "false"
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
"action": "jimNavigation",
"parameter": {
"target": "screens/aba35f8c-0d27-4d82-b935-74957243e129",
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
} else if(jFirer.is("#s-Label_10")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-66298aeb-4b56-413e-9b0f-51e4b98b0560 #s-Label_10": {
"attributes": {
"font-size": "20.0pt",
"font-family": "IOS8-Icons-Regular,Arial"
}
}
},{
"#s-66298aeb-4b56-413e-9b0f-51e4b98b0560 #s-Label_10 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-66298aeb-4b56-413e-9b0f-51e4b98b0560 #s-Label_10 span": {
"attributes": {
"color": "#FFFFFF",
"text-align": "left",
"text-decoration": "none",
"font-family": "IOS8-Icons-Regular,Arial",
"font-size": "20.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-66298aeb-4b56-413e-9b0f-51e4b98b0560 #s-Ellipse_2 .shapert-clipping": {
"attributes": {
"left": "0px",
"top": "0px",
"width": "26px",
"height": "26px",
"position": "absolute",
"overflow": "hidden"
}
}
},{
"#s-66298aeb-4b56-413e-9b0f-51e4b98b0560 #s-Ellipse_2 .content": {
"attributes": {
"width": "26px",
"height": "26px"
}
}
},{
"#s-66298aeb-4b56-413e-9b0f-51e4b98b0560 #s-Ellipse_2": {
"attributes": {
"background-color": "#01BBD2",
"background-image": "none"
}
}
},{
"#s-66298aeb-4b56-413e-9b0f-51e4b98b0560 #s-Ellipse_2": {
"attributes-ie": {
"-pie-background": "#01BBD2",
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
"target": "screens/f870c248-2064-417a-9b56-09d56e3bef26",
"transition": "slideup"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "timed",
"delay": 300
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
}
})
.on("pageload", ".s-66298aeb-4b56-413e-9b0f-51e4b98b0560 .pageload", function(event, data) {
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
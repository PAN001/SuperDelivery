jQuery("#simulation")
.on("click", ".s-ec6e3939-071c-4b29-9f2a-64e7714d9ee5 .click", function(event, data) {
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
} else if(jFirer.is("#s-ok")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-ec6e3939-071c-4b29-9f2a-64e7714d9ee5 #s-ok": {
"attributes": {
"font-size": "48.0pt",
"font-family": "IOS8-Icons-Regular,Arial"
}
}
},{
"#s-ec6e3939-071c-4b29-9f2a-64e7714d9ee5 #s-ok .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-ec6e3939-071c-4b29-9f2a-64e7714d9ee5 #s-ok span": {
"attributes": {
"color": "#01BBD2",
"text-align": "left",
"text-decoration": "none",
"font-family": "IOS8-Icons-Regular,Arial",
"font-size": "48.0pt"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-ec6e3939-071c-4b29-9f2a-64e7714d9ee5 #s-Ellipse_1 .shapert-clipping": {
"attributes": {
"left": "0px",
"top": "0px",
"width": "68px",
"height": "68px",
"position": "absolute",
"overflow": "hidden"
}
}
},{
"#s-ec6e3939-071c-4b29-9f2a-64e7714d9ee5 #s-Ellipse_1 .content": {
"attributes": {
"width": "68px",
"height": "68px"
}
}
},{
"#s-ec6e3939-071c-4b29-9f2a-64e7714d9ee5 #s-Ellipse_1": {
"attributes": {
"background-color": "#FFFFFF",
"background-image": "none"
}
}
},{
"#s-ec6e3939-071c-4b29-9f2a-64e7714d9ee5 #s-Ellipse_1": {
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
} else if(jFirer.is("#s-Label_303")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-ec6e3939-071c-4b29-9f2a-64e7714d9ee5 #s-Label_303": {
"attributes": {
"font-size": "28.0pt",
"font-family": "IOS8-Icons-Regular,Arial"
}
}
},{
"#s-ec6e3939-071c-4b29-9f2a-64e7714d9ee5 #s-Label_303 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-ec6e3939-071c-4b29-9f2a-64e7714d9ee5 #s-Label_303 span": {
"attributes": {
"color": "#01CEE8",
"text-align": "left",
"text-decoration": "none",
"font-family": "IOS8-Icons-Regular,Arial",
"font-size": "28.0pt"
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
"isbackward": true,
"transition": "slideright"
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
}
})
.on("pageload", ".s-ec6e3939-071c-4b29-9f2a-64e7714d9ee5 .pageload", function(event, data) {
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
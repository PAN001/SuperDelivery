jQuery("#simulation")
.on("click", ".s-a2bd85c6-ee5b-41a2-8d00-9fa1d91915ce .click", function(event, data) {
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
} else if(jFirer.is("#s-Label_291")) {
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
} else if(jFirer.is("#s-Label_6")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-a2bd85c6-ee5b-41a2-8d00-9fa1d91915ce #s-Label_6": {
"attributes": {
"font-size": "20.0pt",
"font-family": "IOS8-Icons-Regular,Arial"
}
}
},{
"#s-a2bd85c6-ee5b-41a2-8d00-9fa1d91915ce #s-Label_6 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-a2bd85c6-ee5b-41a2-8d00-9fa1d91915ce #s-Label_6 span": {
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
"#s-a2bd85c6-ee5b-41a2-8d00-9fa1d91915ce #s-Ellipse_6 .shapert-clipping": {
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
"#s-a2bd85c6-ee5b-41a2-8d00-9fa1d91915ce #s-Ellipse_6 .content": {
"attributes": {
"width": "26px",
"height": "26px"
}
}
},{
"#s-a2bd85c6-ee5b-41a2-8d00-9fa1d91915ce #s-Ellipse_6": {
"attributes": {
"background-color": "#01BBD2",
"background-image": "none"
}
}
},{
"#s-a2bd85c6-ee5b-41a2-8d00-9fa1d91915ce #s-Ellipse_6": {
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
}
});
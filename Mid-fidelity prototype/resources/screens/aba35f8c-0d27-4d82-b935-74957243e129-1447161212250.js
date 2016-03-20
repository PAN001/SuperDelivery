jQuery("#simulation")
.on("click", ".s-aba35f8c-0d27-4d82-b935-74957243e129 .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Text_10")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-aba35f8c-0d27-4d82-b935-74957243e129 #s-Text_10": {
"attributes": {
"font-size": "10.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-aba35f8c-0d27-4d82-b935-74957243e129 #s-Text_10 .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-aba35f8c-0d27-4d82-b935-74957243e129 #s-Text_10 span": {
"attributes": {
"color": "#01BBD2",
"text-align": "left",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "10.0pt"
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
"#s-aba35f8c-0d27-4d82-b935-74957243e129 #s-ok-green": {
"attributes": {
"font-size": "20.0pt",
"font-family": "IOS8-Icons-Regular,Arial"
}
}
},{
"#s-aba35f8c-0d27-4d82-b935-74957243e129 #s-ok-green .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "left"
}
}
},{
"#s-aba35f8c-0d27-4d82-b935-74957243e129 #s-ok-green span": {
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
"exectype": "parallel",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/f502c04e-5c72-4df5-97dd-f4ca0a9040a3",
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
}
})
.on("pageload", ".s-aba35f8c-0d27-4d82-b935-74957243e129 .pageload", function(event, data) {
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
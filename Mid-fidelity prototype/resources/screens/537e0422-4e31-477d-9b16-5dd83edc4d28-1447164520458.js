jQuery("#simulation")
.on("click", ".s-537e0422-4e31-477d-9b16-5dd83edc4d28 .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Label_3")) {
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
} else if(jFirer.is("#s-Button-red")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-537e0422-4e31-477d-9b16-5dd83edc4d28 #s-Button-red": {
"attributes": {
"background-color": "#FF2B70",
"background-image": "none",
"font-size": "11.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-537e0422-4e31-477d-9b16-5dd83edc4d28 #s-Button-red .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-537e0422-4e31-477d-9b16-5dd83edc4d28 #s-Button-red span": {
"attributes": {
"color": "#FFFFFF",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "11.0pt"
}
}
},{
"#s-537e0422-4e31-477d-9b16-5dd83edc4d28 #s-Button-red": {
"attributes-ie": {
"-pie-background": "#FF2B70",
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
"#s-537e0422-4e31-477d-9b16-5dd83edc4d28 #s-Button-red": {
"attributes": {
"background-color": "#FFFFFF",
"background-image": "none",
"font-size": "11.0pt",
"font-family": "Roboto-Regular,Arial"
}
}
},{
"#s-537e0422-4e31-477d-9b16-5dd83edc4d28 #s-Button-red .valign": {
"attributes": {
"vertical-align": "middle",
"text-align": "center"
}
}
},{
"#s-537e0422-4e31-477d-9b16-5dd83edc4d28 #s-Button-red span": {
"attributes": {
"color": "#FF2B70",
"text-align": "center",
"text-decoration": "none",
"font-family": "Roboto-Regular,Arial",
"font-size": "11.0pt"
}
}
},{
"#s-537e0422-4e31-477d-9b16-5dd83edc4d28 #s-Button-red": {
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
"target": "screens/95854606-050b-4acf-a044-5fbac002bdba",
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
.on("pageload", ".s-537e0422-4e31-477d-9b16-5dd83edc4d28 .pageload", function(event, data) {
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
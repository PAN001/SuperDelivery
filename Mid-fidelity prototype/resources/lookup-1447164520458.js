(function(window, undefined) {
var dictionary = {
"66298aeb-4b56-413e-9b0f-51e4b98b0560": "Details screen",
"4a6aa475-6599-4c79-b58f-4b9883d9ea73": "Confirm receipt screen",
"2272b70c-81f1-4c72-aa34-776051780aaf": "D-Delivered screen",
"a54f1b3b-e5bd-403c-a59b-99fcbc6eedf0": "Delivered screen",
"d12245cc-1680-458d-89dd-4f0d7fb22724": "Log In",
"92c5b261-701c-4277-8bd5-7f1043f9c278": "Map screen",
"d1b2e539-405e-4142-90ec-361de2150430": "Non-confirmed screen",
"aba35f8c-0d27-4d82-b935-74957243e129": "Service screen",
"6975f9e2-c34d-4093-a57a-03ab9a61b1f3": "Pay-successful screen",
"6b9d62e4-287a-4fa4-8c9a-1149388f6900": "Tracking hisotry screen",
"18f8704d-49c1-4bc5-b327-2ade19ef24b0": "Delivery history screen",
"95854606-050b-4acf-a044-5fbac002bdba": "D-Accept-successful screen",
"5b77764d-4165-4621-86e9-cdaaf2a95bc7": "Confirm-successful screen",
"8e802ac8-e8bc-484f-88b4-f3366177bd53": "Ongoing screen",
"f502c04e-5c72-4df5-97dd-f4ca0a9040a3": "Delivery confirm screen",
"f3884e0d-accd-4ceb-8439-8b90a66fe2cc": "Error screen",
"ec6e3939-071c-4b29-9f2a-64e7714d9ee5": "Select-deliveryman screen",
"f54aea0c-3f82-4996-bfe2-5519eb268e7d": "Canceled screen",
"c1581ad6-b19e-462c-aade-650296744450": "D-Ongoing screen",
"a2bd85c6-ee5b-41a2-8d00-9fa1d91915ce": "Monitor screen",
"7ac4a299-1c95-484b-bf40-d50d595f25ca": "Splash screen",
"217c1e13-3271-4d40-93a5-2bfd4cfe8a7a": "D-Main screen",
"73d29c40-c3e1-4dda-a071-161c05b53d9d": "Template",
"7ffc6dda-36d8-4533-8b1b-8a5e4d242724": "login screen",
"f870c248-2064-417a-9b56-09d56e3bef26": "ID screen",
"537e0422-4e31-477d-9b16-5dd83edc4d28": "D-Service screen",
"33d2a27a-7d1e-47ea-8711-ae0a2fc43fb9": "Service",
"f39803f7-df02-4169-93eb-7547fb8c961a": "Template"
};

var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
window.lookUpURL = function(fragment) {
var matches = uriRE.exec(fragment || "") || [],
folder = matches[2] || "",
canvas = matches[3] || "",
name, url;
if(dictionary.hasOwnProperty(canvas)) { /* search by name */
url = folder + "/" + canvas;
}
return url;
};

window.lookUpName = function(fragment) {
var matches = uriRE.exec(fragment || "") || [],
folder = matches[2] || "",
canvas = matches[3] || "",
name, canvasName;
if(dictionary.hasOwnProperty(canvas)) { /* search by name */
canvasName = dictionary[canvas];
}
return canvasName;
};
})(window);
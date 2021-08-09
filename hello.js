//using chrome developers, I build this code wich send an alert tab when I open a facebook page
//chrome tabs.query provides tab control

//import natural from 'extensie_project/node_modules/natural';
var natural = require('node_modules/natural');

var tokenizer = new natural.WordTokenizer(); //this splits the text in words

//the username, the date and the description of the post are listed by array form so for the description I used postTextByClass[2].innerText
var postTextByClass = document.getElementsByClassName("j83agx80 cbu4d94t ew0dbk1b irj2b8pg");
var a = tokenizer.tokenize(postTextByClass[1].innerText);

try {
    console.log(postTextByClass[1].innerText);
    console.log(a);
}
catch (error) {
    console.error("error");
}
//I used the class code of comments and names of the facebook page
var listComments = document.getElementsByClassName("ecm0bbzt e5nlhep0 a8c37x1j");
var listCommentsAuthors = document.getElementsByClassName("d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d9wwppkn fe6kdd0r mau55g9w c8b282yb mdeji52x sq6gx45u j5wam9gi lrazzd5p oo9gr5id");

//the comments are listed by array form so I use an index to retain them
var count = 0;
for (let index = 0; index < listComments.length; index++) {
    console.log("Author:", listCommentsAuthors[index].innerText, "<commented>: ", listComments[index].innerText + "\n"); //display comments
    count++;
}
//console.log(count);

//for scraping the reactions, I observed I have an array who contains the same number of elements as types of reactions of the post

let element = document.querySelector('.bp9cbjyn .j83agx80 .buofh1pr .ni8dbmo4 .stjgntxs').click();
var numberReact = document.getElementsByClassName("oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 pq6dq46d p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l dwo3fsh8 ow4ym5g4 auili1gw mf7ej076 gmql0nx0 tkr6xdv7 bzsjyuwj cb02d2ww j1lvzwm4");

for (let i = 1; i < numberReact.length; i++) {
    try {
        console.log(numberReact[i].innerText);
    } catch (error) {
        console.error('error');
    }
}








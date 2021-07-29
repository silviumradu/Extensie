//using chrome developers, I build this code wich send an alert tab when I open a facebook page
//chrome tabs.query provides tab control

//var postTextByClass = document.getElementsByClassName("qzhwtbm6 knvmm38d")[2].innerText; //text of the post
//var postTextById = document.getElementById("jsc_c_s").innerText; //id of the post
var listComments = document.getElementsByClassName("ecm0bbzt e5nlhep0 a8c37x1j");
var listCommentsAuthors = document.getElementsByClassName("d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d9wwppkn fe6kdd0r mau55g9w c8b282yb mdeji52x e9vueds3 j5wam9gi lrazzd5p oo9gr5id");
var count = 0;

for (let index = 0; index < listComments.length; index++) {
    console.log("Author:", listCommentsAuthors[index].innerText, "<commented>: ", listComments[index].innerText + "\n"); //display comments
    count++;
}

console.log(count);
/*var s = document.querySelector(".bp9cbjyn .j83agx80 .buofh1pr .ni8dbmo4 .stjgntxs").click();
var numberReact = document.getElementsByClassName("oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 pq6dq46d p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l dwo3fsh8 ow4ym5g4 auili1gw mf7ej076 gmql0nx0 tkr6xdv7 bzsjyuwj cb02d2ww j1lvzwm4");
var likeReact = numberReact[1].innerText;
var loveReact = numberReact[2].innerText;
var careReact = numberReact[3].innerText;
var wowReact = numberReact[4].innerText;
var hahaReact = numberReact[5].innerText;
var sadReact = numberReact[6].innerText;
var angryReact = numberReact[7].innerText;

console.log("Like:", likeReact, "Love:", loveReact, "Care:", careReact, "Wow:", wowReact, "HaHa:", hahaReact, "Sad:", sadReact, "Angry:", angryReact);*/


//Function for choosing a random word from the arrays

function random_number(num) {
    var num = num;
    return Math.floor(Math.random() * num);
}


//YOU WON'T BELIEVE WHAT HAPPENED
//Functions, "you won't believe what happened next"-titles
function one_choice() {
<<<<<<< HEAD
var one = ["Jentene", "De", "Bodyguarden", "Den lille gutten", "Femåringen", "Den ensomme mannen", "College-gutten", "Den ensomme damen", "Den gamle mannen", "Den gamle damen", "Sønnen", "Datteren", "Læreren", "Politimannen", "Politikvinnen", "Tiåringene", "Gutten", "Seksåringen", "Gutten", "Kvinnen", "Mannen", "Eleven", "Ungdommen", "Tiåringen", "De to bestemødrene", "Bestemoren"];
=======
var one = ["Jentene", "De", "Bodyguarden", "Den lille gutten", "Femåringen", "Foreldrene", "Den ensomme mannen", "College-gutten", "Den ensomme damen", "Den gamle mannen", "Den gamle damen", "Sønnen", "Datteren", "Læreren", "Politimannen", "Politikvinnen", "Tiåringene", "Gutten", "Foreldrene", "Turistene", "Seksåringen", "Gutten", "Kvinnen", "Mannen", "Eleven", "Ungdommen", "Tiåringen", "De to bestemødrene", "Bestemoren"];
>>>>>>> 7dd206039b806b6d21bfcca2dd223858796cbf35

var randomNum = random_number(one.length);

return one[randomNum];
}

function two_choice() {
<<<<<<< HEAD
var two = ["oppdager", "ser plutselig", "finner tilfeldigvis", "ser", "ser", "oppdager"]
=======
var two = ["oppdager plutselig", "ber dem om å se på", "oppdager", "ser plutselig", "finner tilfeldigvis", "ser", "ser", "oppdager"]
>>>>>>> 7dd206039b806b6d21bfcca2dd223858796cbf35

var randomNum = random_number(two.length);

return two[randomNum];
}

function three_choice() {
<<<<<<< HEAD
var three = ["det deformerte gresskaret.", "gangsteren.", "den romantiske sms-en.", "en aggressiv katt.", "den savnede katten.", "meningen med livet.", "en dobbel regnbue.", "en tarantella.", "Valentines-kortet.", "en kjendis.", "kaken kompisen har laget.", "en elg.", "to søte valper.", "venninnen uten sminke.", "en hjemløs hund.", "Lotto-kupongen.", "en lommebok på gata.", "en hasjpipe.", "en skummel klovn.", "en trist sirkuselefant.", "det som ligger under sengen.", "bursdagsoverraskelsen.", "det som gjemmer seg på loftet.", "det som ligger i suppeskålen.", "vennen uten bukser.", "de nydelige tvillingene.", "det som ligger i skuffen.", "julegaven.", "Halloween-kostymet.", "bursdagsgaven.", "personen som gjemmer seg bak døra.", "den gøyale sms-en.", "filmen fra bryllupet.", "den avslørende Youtube-videoen.", "et par gamle truser.", "det sexy undertøyet.", "en brudekjole fra 80-tallet.","en morsom agurk.", "den søte katten.", "tekstmeldingen.", "det som ligger i kjøleskapet.", "nakenbildene.", "den som gjemmer seg i kottet.", "den søte babyen.", "den lille hunden.", "det som ligger i kofferten.", "bildene på telefonen."];
=======
var three = ["det deformerte gresskaret.", "gangsteren.", "den romantiske sms-en.", "en aggressiv katt.", "den store overraskelsen.", "den savnede katten.", "meningen med livet.", "en dobbel regnbue.", "en tarantella.", "Valentines-kortet.", "en kjendis.", "kaken kompisen har laget.", "en elg.", "to søte valper.", "venninnen uten sminke.", "en hjemløs hund.", "Lotto-kupongen.", "en lommebok på gata.", "en hasjpipe.", "en skummel klovn.", "en trist sirkuselefant.", "det som ligger under sengen.", "bursdagsoverraskelsen.", "det som gjemmer seg på loftet.", "det som ligger i suppeskålen.", "vennen uten bukser.", "karikaturtegningen.", "de nydelige tvillingene.", "det som ligger i skuffen.", "en vitsetegning.", "julegaven.", "Halloween-kostymet.", "bursdagsgaven.", "personen som gjemmer seg bak døra.", "den gøyale sms-en.", "filmen fra bryllupet.", "den avslørende Youtube-videoen.", "et par gamle truser.", "det sexy undertøyet.", "en brudekjole fra 80-tallet.","en morsom agurk.", "den søte katten.", "tekstmeldingen.", "det som ligger i kjøleskapet.", "nakenbildene.", "den som gjemmer seg i kottet.", "den søte babyen.", "den lille hunden.", "det som ligger i kofferten.", "bildene på telefonen."];
>>>>>>> 7dd206039b806b6d21bfcca2dd223858796cbf35

var randomNum = random_number(three.length);

return three[randomNum];
}

function four_choice() {
var four = ["Resultatet", "Reaksjonen", "Reaksjonen", "Det som skjer etterpå"];

var randomNum = random_number(four.length);

return four[randomNum];
}

function five_choice() {
<<<<<<< HEAD
var five = ["er ikke til å tro", "er enda mer utrolig enn du kan tenke deg", "vil få deg til å flire", "er blitt sett 2 millioner ganger på Youtube", "vekker avsky", "er himmelsk", "vil få hjertet ditt til å smelte", "er det ekleste du noen gang har sett", "er et nydelig skue", "er hjerteskjærende", "er det villeste du noen gang har sett", "er hysterisk", "vil få hjertet ditt til å smelte", "er sjokkerende", "vil gi deg vann i munnen", "er skikkelig stilig!", "er rørende", "er ubetalelig", "vil gi deg latterkrampe", "vil få deg til å miste fatningen", "er overraskende", "er fantastisk", "vil overraske deg", "er helt briljant", "er helt utrolig", "vil få deg til å gråte", "er magisk", "vil gi deg troen på menneskeheten tilbake", "vil få deg til å le"];
=======
var five = ["er ikke til å tro", "er det ekleste du noen gang har sett", "er et nydelig skue", "er hjerteskjærende", "er det villeste du noen gang har sett", "er hysterisk", "vil få hjertet ditt til å smelte", "er sjokkerende", "vil gi deg vann i munnen", "er skikkelig stilig!", "er rørende", "er ubetalelig", "vil gi deg latterkrampe", "vil få deg til å miste fatningen", "er overraskende", "er fantastisk", "vil overraske deg", "er helt briljant", "er helt utrolig", "vil få deg til å gråte", "er magisk", "vil gi deg troen på menneskeheten tilbake", "vil få deg til å le"];
>>>>>>> 7dd206039b806b6d21bfcca2dd223858796cbf35

var randomNum = random_number(five.length);

return five[randomNum];
}

<<<<<<< HEAD
=======



>>>>>>> 7dd206039b806b6d21bfcca2dd223858796cbf35
//LIST-TITLES
//Functions for list titles
function lists_one_choice() {
var lists_one =["Genialt:", "Viktig:", "Morsomt:", "", ""];

var randomNum = random_number(lists_one.length);
return lists_one[randomNum];
}


function lists_two_choice() {
<<<<<<< HEAD
var lists_two = ["9", "18", "19", "20", "21", "23", "25", "26", "27", "52", "33", "35", "36", "39", "40", "43", "44", "46", "49", "50", "65", "69", "72"];
=======
var lists_two = ["5", "7", "9", "10", "18", "19", "20", "21", "23", "25", "26", "27", "52", "33", "35", "36", "39", "40", "43", "44", "46", "49", "50"];
>>>>>>> 7dd206039b806b6d21bfcca2dd223858796cbf35

var randomNum = random_number(lists_two.length);
return lists_two[randomNum];
}

function lists_three_choice() {
<<<<<<< HEAD
var lists_three = ["ting", "upassende ting", "utrolige ting", "rare ting", "ting", "overraskende ting"];
=======
var lists_three = ["ting", "teite ting", "upassende ting", "utrolige ting", "rare ting", "ting", "overraskende ting", "flaue ting", "dumme ting"];
>>>>>>> 7dd206039b806b6d21bfcca2dd223858796cbf35

var randomNum = random_number(lists_three.length);
return lists_three[randomNum];
}

function lists_four_choice() {
<<<<<<< HEAD
var lists_four = ["kvinner", "menn", "folk med dårlig syn", "folk i Midt-Norge", "bare tidligere emo-kids", "menn med høyt hårfeste", "menn med skostørrelse 46", "turister", "ungdommelige bestemødre", "kvinner i 20-årene", "menn mellom 35 og 40", "gangstere", "norske skuespillere", "katteeiere", "bare hipstere", "rosabloggere", "hundeeiere", "bare kvinner med naturlig hårfarge", "Beyonces mamma", "alle", "en såret kvinne", "en såret mann", "bare kvinner", "kommuneansatte", "damer med kommunegrått hår", "bare menn", "arkitekter", "nyforelskede par", "finansmenn", "moren din"];
=======
var lists_four = ["kvinner", "menn", "folk i Midt-Norge", "bare tidligere emo-kids", "din dumme venn", "menn med høyt hårfeste", "menn med skostørrelse 46", "turister", "ungdommelige bestemødre", "kvinner i 20-årene", "linsebrukere", "menn mellom 35 og 40", "gangstere", "norske skuespillere", "katteeiere", "bare hipstere", "rosabloggere", "hundeeiere", "bare kvinner med naturlig hårfarge", "Beyonces mamma", "alle", "en såret kvinne", "en såret mann", "bare kvinner", "kommuneansatte", "damer med kommunegrått hår", "bare menn", "arkitekter", "nyforelskede par", "finansmenn", "moren din"];
>>>>>>> 7dd206039b806b6d21bfcca2dd223858796cbf35

var randomNum = random_number(lists_four.length);
return lists_four[randomNum];
}

function lists_five_choice() {
var lists_five = ["lyver om i familieselskap", "gjør som du ikke burde gjøre", "har lært på den harde måten", "gjør som du skulle ønske du torde å gjøre", "gjør som inspirerer", "innså lenge før deg", "innså lenge før deg", "gjør på Syden-ferie", "har i vokabularet", "gjør etter en natt med lite søvn", "gjør etter en fuktig natt på byen", "har lært i livet", "sier hver gang anledningen byr seg", "eier", "snakker om", "har hjemme", "ler av", "har i garasjen", "drømmer om å gjøre", "synes er morsomt", "sier høyt, men burde holdt for seg selv", "skriver feil", "er redd for", "gjør i jula", "sladrer om", "gjør som irriterer kjæresten", "snakker om bak ryggen din", "liker å krangle om", "skjønner", "forstår", "forstår", "ikke visste om vennene", "gjør på vei til jobb", "gjør feil på kjøkkenet", "gjør på bussen", "hater å tenke på", "må slite med i hverdagen", "skjuler for vennene", "kan fortelle deg", "sier", "vet", "holder hemmelig for de nærmeste"];

var randomNum = random_number(lists_five.length);
return lists_five[randomNum];
}
//

<<<<<<< HEAD
//WOMEN-TITLES
//Functions for women-titles
function w_one_choice() {
var w_one =["Hun", "Hun", "Kone", "Tenåringsjenta", "Kona", "Hun", "Kvinne i 20-årene", "Kvinnen i 30-årene", "Kvinne i 50-årene", "Kvinne i 40-årene"];

var randomNum = random_number(w_one.length);
return w_one[randomNum];
}

function w_two_choice() {
var w_two =["oppdaget at mannen var utro.", "ble ertet for de små puppene sine.", "var en grå mus.", "ble sett på som den stygge søsteren.", "hadde blitt ledd av hele livet.", "var misunnelig på søsteren.", "møtte på låst dør.", "hadde høylytt sex og ble kastet ut av leiligheten.", "ble kastet ut fra utestedet.", "ble seksuelt trakassert på jobb.", "ble baksnakket av venninnene.", "mistet jobben.", "oppdaget at mannen var spillavhengig.", "oppdaget hva folk hadde skrevet om henne i årboken.", "ble hetset på internett.", "fikk skjellsord slengt etter seg daglig."];

var randomNum = random_number(w_two.length);
return w_two[randomNum];
}

function w_three_choice() {
var w_three =["Så"];

var randomNum = random_number(w_three.length);
return w_three[randomNum];
}

function w_four_choice() {
var w_four =["klatret hun opp på taket og tok av seg klærne", "gjorde hun en stor tabbe", "gjorde hun det ingen forventet", "gjorde hun noe som rører en hel verden", "endret plutselig alt seg", "fikk hun livet snudd på hodet", "skrev hun en fantastisk Facebook-status", "skrev hun denne utrolige Facebook-statusen", "la hun ut en video på nettet", "gjorde hun noe som sjokkerte alle", "overrasket hun alle", "klikket hun fullstendig", "gjorde hun noe som overrasket alle", "klikket hun", "gjorde hun noe uforståelig", "slo hun tilbake", "fikk hun tidenes comeback", "gjorde hun noe som forandret alt", "gjorde hun noe helt utrolig", "gjorde hun noe fantastisk", "bestemte hun seg for å ta hevn", "fikk hun den perfekte hevn", "tok hun hevn", "gjorde hun noe helt vilt", "gjorde hun noe som er sett av over 5 millioner på 2 dager", "gjorde hun noe som er blitt sett 9 millioner ganger på Youtube", "skjedde det noe vilt"];

var randomNum = random_number(w_four.length);
return w_four[randomNum];
}




=======
>>>>>>> 7dd206039b806b6d21bfcca2dd223858796cbf35
function fill_in_answers(answers) {
    // Find the spans that need filled
    var part1 = document.getElementById('part1');  // Make a new variable and find the HTML tag that has the ID of "part1" 
    var part2 = document.getElementById('part2');
    var part3 = document.getElementById('part3');
    var part4 = document.getElementById('part4');
    var part5 = document.getElementById('part5');
    // Fill them with the provided answers
    part1.innerText = '';
    part1.innerText = answers['one'];
    part2.innerText = '';
    part2.innerText = answers['two'];
    part3.innerText = '';
    part3.innerText = answers['three'];
    part4.innerText = '';
    part4.innerText = answers['four'];
    part5.innerText = '';
    part5.innerText = answers['five'];
}

function lists_fill_in_answers(lists_answers) {
      // Find the spans that need filled
    var part1 = document.getElementById('part1');  // Make a new variable and find the HTML tag that has the ID of "part1" 
    var part2 = document.getElementById('part2');
    var part3 = document.getElementById('part3');
    var part4 = document.getElementById('part4');
    var part5 = document.getElementById('part5');
    // Fill them with the provided answers
    part1.innerText = '';
    part1.innerText = lists_answers['lists_one'];
    part2.innerText = '';
    part2.innerText = lists_answers['lists_two'];
    part3.innerText = '';
    part3.innerText = lists_answers['lists_three'];
    part4.innerText = '';
    part4.innerText = lists_answers['lists_four'];
    part5.innerText = '';
    part5.innerText = lists_answers['lists_five'];
   //  // Find the spans that need filled
   //  var listspart1 = document.getElementById('listspart1');  // Make a new variable and find the HTML tag that has the ID of "listspart1" 
   //  var listspart2 = document.getElementById('listspart2');


   //  // Fill them with the titles
   //  listspart1.innerText = answers['lists_one'];
   //  listspart2.innerText = answers['lists_two'];

    // listspart1.innerHTML = answers.lists_one;  // Change the content of the element in the HTML doc with the id "listspart1" to the value in answers 
   //  listspart2.innerHTML = answers.lists_two;

}


<<<<<<< HEAD
function w_fill_in_answers(w_answers) {
    // Find the spans that need filled
    var part1 = document.getElementById('part1');  // Make a new variable and find the HTML tag that has the ID of "part1" 
    var part2 = document.getElementById('part2');
    var part3 = document.getElementById('part3');
    var part4 = document.getElementById('part4');
    var part5 = document.getElementById('part5');
    // Fill them with the provided answers
    part1.innerText = '';
    part1.innerText = w_answers['w_one'];
    part2.innerText = '';
    part2.innerText = w_answers['w_two'];
    part3.innerText = '';
    part3.innerText = w_answers['w_three'];
    part4.innerText = '';
    part4.innerText = w_answers['w_four'];
    part5.innerText = '';
}


=======
>>>>>>> 7dd206039b806b6d21bfcca2dd223858796cbf35

function showtitle() {

    //Choose randomly one of two title types to display
<<<<<<< HEAD
    var titleType = Math.floor((Math.random() * 3) + 1);
=======
    var titleType = Math.floor((Math.random() * 2) + 1);
>>>>>>> 7dd206039b806b6d21bfcca2dd223858796cbf35

    // Build up the answers object
    if(titleType == 1) {
      var answers = {
          'one': one_choice(),
          'two': two_choice(),
          'three': three_choice(),
          'four': four_choice(),
          'five': five_choice(),
          }
          fill_in_answers(answers);
          var answer_div = document.querySelector('#answers');
          answer_div.classList.add('show');
<<<<<<< HEAD

    } else if(titleType == 2) {
=======
    } else {
>>>>>>> 7dd206039b806b6d21bfcca2dd223858796cbf35

    var lists_answers = {
      'lists_one': lists_one_choice(),
      'lists_two': lists_two_choice(),
      'lists_three': lists_three_choice(),
      'lists_four': lists_four_choice(),
      'lists_five': lists_five_choice(),
      }
      lists_fill_in_answers(lists_answers);
      var answer_div = document.querySelector('#answers');
      answer_div.classList.add('show');  

      
<<<<<<< HEAD
    } else {
      var w_answers = {
      'w_one': w_one_choice(),
      'w_two': w_two_choice(),
      'w_three': w_three_choice(),
      'w_four': w_four_choice(),
    }
      w_fill_in_answers(w_answers);
      var answer_div = document.querySelector('#answers');
      answer_div.classList.add('show');  
=======
>>>>>>> 7dd206039b806b6d21bfcca2dd223858796cbf35
    };// Make button visible by changing class

    button.classList.add('button');  
    

};
// Show title
var button = document.querySelector('.hiddenButton');
window.onload=showtitle;  
button.addEventListener('click', showtitle);  // When buzzit button is clicked, call the function showtitle.
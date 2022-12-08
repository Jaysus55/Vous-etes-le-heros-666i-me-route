let chapterObj = {

Reveil: {
subtitle:"Réveil",
text:"Vous vous réveiller dans le monde souterrain pour la 666ième route.",
img:"assets/reveil.jpg",
options:[{text: "suivant",action:"goToChapter(`Ou_Aller`)"},]},


Ou_Aller: {
subtitle:"Où Aller",
text:"Il y a 3 pièces, où voulez-vous aller?",
img:"assets/chemins.jpg",  
options:[{text: "Tuer des monstres",action:"goToChapter(`Poussière`)"},
         {text: "Aller à la sortie de la caverne",action:"goToChapter(`Labo_alphys`)"},
         {text: "Éteindre la console",action:"goToChapter(`pause`)"},]},



Labo_alphys: {
    subtitle:"Labo d'alphys",
    text:"Vous arriver devant le labo d'alphys,c'est étrange parce que son labo est plua loin dans le souterrain, Que voulez-vous faire?",
    img:"assets/labo.jpg",
    options:[{text: "Vous décidez de faire demi-tour",action:"goToChapter(`Sans`)"},
             {text: "Vous pénétrer dans le labo d'Alphys",action:"goToChapter(`Creature`)"},]},


pause:{
subtitle:"Vous decidez de prendre un pause",
text:"Prendre une pause des écrans est parfois un excellente chose à faire.",
img:"assets/console.jpg",
options:[{text: "Retourner au début",action:"goToChapter(`Reveil`)"},]},


Sans:{
subtitle:"Sans?",
text:"Vous vous retrouver face à Sans mais quelque chose cloche avec lui...",
img:"assets/yeux.jpg",
options:[{text: "Vous approcher",action:"goToChapter(`mort1`)"},
         {text: "Ne pas s'approcher",action:"goToChapter(`Creature`)"},]},


Creature:{
subtitle:"La créature",
text:"Vous vous retrouver face à face avec une créature immense en pénétrant dans le labo d'Alphys.",
img:"assets/monstre.jpg",
options:[{text: "Ne pas bouger",action:"goToChapter(`sorti`)"},
         {text: "Courir",action:"goToChapter(`mort2`)"},]},


mort1:{
subtitle:"Sans vous tue",
text:"Sans se met à rire et ces yeux s'illumine d'une couleur comme vous ne les aviez jamais vu apparavant et disparait. Quelques secondes plus tard vous sentez un liquide chaud soritr de votre bouche, avant même que vous puissiez le réaliser, vous vous effondrer.",
img:"assets/mort.jpg",  
video:"assets/mort.mp4",
options:[{text: "Retourner au début",action:"goToChapter(`Reveil`)"},]},


Poussière:{
subtitle:"Poussière?",
text:"Vous décider d'aller tuer des monstres. Lorsque vous arriver dans la pièce où il y a généralement plein de monstres, vous êtes accueilli par un silence total. La seule chose que vous trouver dans la salle sont des tas de poussière. Étrange...",
img:"assets/poussiere.jpg", 
options:[{text: "Vous faite demi-tour",action:"goToChapter(`Porte`)"},]},




mort2:{
subtitle:"La créature vous attrape",
text:"La créature vous a attraper et vous dévore vivant.",
img:"assets/mort.jpg",
video:"assets/mort.mp4",
options:[{text: "Retourner au début",action:"goToChapter(`Reveil`)"},]},


Porte:{
subtitle:"Porte vérouiller",
text:"Vous arriver devant une immense porte vérouiller que vous n'aviez jamais vu auparavant. Que faire?",
img:"assets/porte.jpg", 
options:[{text: "Avez-vous le code?",action:"condition1()"},]},



codeNon:{
subtitle:"Vous n'avez pas le code",
text:"Vous n'avez pas le code pour ouvrir la porte.",
img:"assets/porte.jpg", 
options:[{text: "Retourner sur vos pas",action:"goToChapter(`Creature`)"},]},


codeOui:{
subtitle:"Vous dévérouiller la porte",
text:"Vous Entrer le code et la porte s'ouvre vous menant vers une salle étrange.",
img:"assets/deverouiller.jpg",  
options:[{text: "Vous dirigez vers l'homme mystérieux",action:"goToChapter(`Homme`)"},]},


Homme:{
subtitle:"?/%?$*",
text:"Vous vous retrouver devant un homme qui semble fondre. L'homme mystérieux ne bouge pas et vous fixe. Que voulez-vous faire?",
img:"assets/figure.jpg",    
options:[{text: "Attaquer l'homme",action:"goToChapter(`mort3`)"},
         {text: "Tenter de communiquer avec l'homme",action:"goToChapter(`Parler`)"},]},

          
Parler:{
subtitle:"Le continum espace temps",
text:"L'homme mystérieux vous montre qu'est-ce qui à causer les changements dans le continum espace temps.",
img:"assets/virus.jpg",
options:[{text: "réinitialiser votre sauvegarde",action:"goToChapter(`fin1`)"},]},


fin1:{
subtitle:"Vous sauver le monde",
text:"Vous trouver un remède à la maladie qui s'attaquait au monstre et sauver le monde des montres. Vous obtenez une clé rouge",
img:"assets/reset.jpg",  
options:[{text: "Retourner au début",action:"clef(`Reveil`)"},]},


mort3:{
subtitle:"Retour à l'envoyeur",
text:"L'homme ne bouge toujours pas et ne semble pas avoir été blesser par votre attaque. Vous sentez votre corps devenir faible et réaliser qu'il vous à renvoyer votre attaque. Vous succomber à votre blessure.",
img:"assets/mort.jpg", 
video:"assets/jumpscare.mp4",  
options:[{text: "Retourner au début",action:"goToChapter(`Reveil`)"},]},


sorti:{
subtitle:"Shhhhh",
text:"La créature se dirige vers la sortie du labo. Vous regarder les environ et voyer que la seule sortie possible pour ne pas vous faire attraper par la créature est par le sous-sol du laboratoire.",
img:"assets/exit.jpg",  
options:[{text: "Prendre l'ascenseur",action:"goToChapter(`trappe`)"},]},


trappe:{
subtitle:"La trappe",
text:"Vous arrivez devant une sorte de trappe vérouiller. Que voulez-vous faire?",
img:"assets/trap.jpg",
options:[{text: "Avez-vous la clé?",action:"condition2()"},]},


fin2:{
subtitle:"La sortie",
text:"Après avoir descendu dans la trappe vous arriver devant la porte de sortie du monde souterrain. Vous trouver un papier avec un code gribouiller dessus. Vous obtenez le code secret.",
img:"assets/fin.jpg",    
options:[{text: "Retourner au début",action:"goToChapter(`Reveil`)"},]},


courir:{
subtitle:"Cours",
text:"En tentant d'ouvrir la trappe la créature vous entends et vous chasse. Que faire?",
img:"assets/courir.jpg", 
options:[{text: "Courir",action:"goToChapter(`mort4`)"},
         {text: "Tentez de combattre",action:"cle(`murmure`)"},
         {text: "Continuer d'essayer d'ouvrir la trappe",action:"goToChapter(`mort7`)"},]},


mort4:{
subtitle:"Griffes",
text:"La créature vous attrape et vous tranche la tête...",
img:"assets/mort.jpg", 
video:"assets/mort.mp4",
options:[{text: "Retourner au début",action:"goToChapter(`Reveil`)"},]},


murmure:{
subtitle:"Codeeeeeeeee",
text:"La créature murmure des chiffres. Vous obtenez un code. Que voulez-vous faire?",
img:"assets/code.jpg",  
options:[{text: "Fuir",action:"goToChapter(`mort5`)"},
         {text: "Continuer à attaquer",action:"goToChapter(`enfin`)"},]},


mort5:{
subtitle:"Téléportation?",
text:"Vous ne voyez plus la créature. Elle apparait soudainement devant vous et vous brise la nuque...",
img:"assets/mort.jpg", 
video:"assets/mort.mp4",
options:[{text: "Retourner au début",action:"goToChapter(`Reveil`)"},]},


enfin:{
subtitle:"La mort de la créature",
text:"Vous finissez par réussir à tuer la créature.",
img:"assets/monstre.jpg", 
options:[{text: "?",action:"goToChapter(`mort6`)"},]},


mort6:{
subtitle:"Illusion",
text:"La créature n'étais pas réellement morte. Elle vous attrape et vous déchire en deux...",
img:"assets/mort.jpg",
video:"assets/mort.mp4",
options:[{text: "Retourner au début",action:"goToChapter(`Reveil`)"},]},

mort7:{
subtitle:"Une tête volante",
text:"La créature vous arrache la tête et la lance violement...",
img:"assets/mort.jpg",  
video:"assets/mort.mp4", 
options:[{text: "Retourner au début",action:"goToChapter(`Reveil`)"}]},
}

let body = document.querySelector("body")

function goToChapter(chapterName){
console.log(body.classList)
body.classList.remove(body.classList[0])
body.classList.add(chapterName)
document.querySelector("h2").innerHTML=chapterObj[chapterName]["subtitle"];    
document.querySelector("p").innerHTML=chapterObj[chapterName]["text"];
document.querySelector(".images").innerHTML=`<img src="${chapterObj[chapterName]["img"]}"class="image">`;   

if(chapterObj[chapterName]["video"]){
    document.querySelector(".images").innerHTML= `<video src="${chapterObj[chapterName]["video"]}" class="video_gif"  autoplay muted loop>`;
}
else{
       document.querySelector(".images").innerHTML= `<img src="${chapterObj[chapterName]["img"]}" class="image">`;
}


let barre = document.querySelector(".barre")
barre.innerHTML = ""
for(element of chapterObj[chapterName]['options']){
let bouton = document.createElement("button")
let text = document.createTextNode(element["text"])
bouton.appendChild(text)
bouton.setAttribute("onclick",element["action"])
bouton.setAttribute("type","button")
barre.appendChild(bouton)
let sonCheckbox = document.querySelector(".boiteSon")
bouton.addEventListener("click",function(){
    const sono = new Audio("assets/bruit_pas.mp3");
    if(sonCheckbox.checked == true){sono.play();}
   
    });

    localStorage.setItem("chapterObj", chapterName);   
    chapterName = localStorage.getItem("chapterObj");
    

};
}


/*clé 1*/
let keyFounded = false;
function cle(chapitre){
keyFounded = true;    
goToChapter(chapitre)
localStorage.setItem("keyFounded",true)
}


/*condition de la clé 1*/
function condition1 (){
if(keyFounded == true){
goToChapter("codeOui")    
}    
if(keyFounded == false){
goToChapter("codeNon")
}
}

/*clé 2 */
let keyFound = false;
function clef(chapitre){
keyFound = true;    
goToChapter(chapitre)
localStorage.setItem("KeyFound",true)
}


/*condition de la clé 2*/
function condition2 (){
if(keyFound == true){
goToChapter("fin2")    
}    
if(keyFound == false){
goToChapter("courir")
}    
}

/*sauvegarde de la clé 1*/
if(localStorage.getItem("keyFounded") == "true"){
keyFounded = true    
}

/*sauvegarde de la clé 2*/
if(localStorage.getItem("keyFound") == "true"){
    keyFound = true    
    }


if(localStorage.getItem("chapterObj")){
    goToChapter(localStorage.getItem("chapterObj"))
    }else{
    goToChapter("Reveil")}


function reset(){
localStorage.clear(); 
goToChapter("Reveil");   
}

let btnReset = document.querySelector(".reset")

btnReset.addEventListener("click",function(){
reset()    
})





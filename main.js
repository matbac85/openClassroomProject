const friends=[
    {id:1,name:"Mathilde",adresse:"rue du tour",n:245,cp:7698,ville:"Mons",pays:"belgique",passions:[1,3,5],photo:"Images/profile_01.svg", cover:"Images/cover_01.jpg",adress:"mathilde@gmail.com"},
    {id:2,name:"Pierre",adresse:"voie du cours ",n:567,cp:1050,ville:"Overijse",pays:"belgique",passions:[1,2,4],photo:"Images/profile_02.svg", cover:"Images/cover_02.jpg",adress:"pierre@gmail.com"},
    {id:3,name:"Christopher",adresse:"voie Berthe ",n:199,cp:7020,ville:"Jemappes",pays:"belgique",passions:[8,7,5],photo:"Images/profile_03.svg", cover:"Images/cover_03.jpg",adress:"christopher@gmail.com"},
    {id:4,name:"Kevyn",adresse:"sous l'eau",n:19,cp:8520,ville:"Mons",pays:"belgique",passions:[1,2,4],photo:"Images/profile_04.svg", cover:"Images/cover_04.jpg",adress:"kevyn@gmail.com"},
    {id:5,name:"Tessa",adresse:"faille de l'invocateur",n:87,cp:185,ville:"Caire",pays:"Egypte",passions:[4,2,8],photo:"Images/profile_05.svg", cover:"Images/cover_05.jpg",adress:"tessa@gmail.com"},
    {id:6,name:"Faustine",adresse:"sous la terre",n:45,cp:1236,ville:"Bruges",pays:"belgique",passions:[7,6,9],photo:"Images/profile_06.svg", cover:"Images/cover_06.jpg",adress:"faustine@gmail.com"},
    {id:7,name:"Audrey",adresse:"manoir de luigi",n:852,cp:174,ville:"Jemappes",pays:"Nitendoland",passions:[9,2,4],photo:"Images/profile_07.svg", cover:"Images/cover_07.jpg",adress:"audrey@gmail.com"},
    {id:8,name:"Raphaël",adresse:"avenue marchand",n:199,cp:7020,ville:"Sanctum",pays:"Elysea",passions:[8,2,4],photo:"Images/profile_08.svg", cover:"Images/cover_08.jpg",adress:"raphael@gmail.com"},
    {id:9,name:"Veasna",adresse:"tardis",n:199,cp:7020,ville:"Trenzalore",pays:"Galifrey",passions:[9,4,8],photo:"Images/profile_09.svg", cover:"Images/cover_09.jpg",adress:"veasna@gmail.com"},
    {id:10,name:"Sandrine",adresse:"rue du seigneur ",n:1,cp:1000,ville:"Jemappes",pays:"belgique",passions:[8,6,5],photo:"Images/profile_10.svg", cover:"Images/cover_10.jpg",adress:"sandrine@gmail.com"},
    {id:11,name:"Donovan",adresse:"rue du seigneur ",n:1,cp:1000,ville:"Jemappes",pays:"belgique",passions:[8,6,5],photo:"Images/profile_11.svg", cover:"Images/cover_11.jpg",adress:"donovan@gmail.com"},
    {id:12,name:"Reda",adresse:"rue du creuset ",n:1,cp:1000,ville:"veuillez inserer un nom",pays:"belgique",passions:[8,6,5],photo:"Images/profile_12.svg", cover:"Images/cover_12.jpg",adress:"reda@gmail.com"},
];

const passions = [
    {id:1,title:"Football", description:"Je suis un garçon très sérieux. Je suis une personne très responsable dans la vie. J'aime le sport, surtout le football et le basketball."},
    {id:2,title:"Cinema", description:"Le cinéma me fait vibrer, fait briller mes yeux et m’apporte tant de choses, d’émotions. Il rend ma vie plus douce, et je m’endors souvent en me remémorant certaines scènes des films que je viens de visionner, ou de mes films préférés."},
    {id:3,title:"Lecture", description:"Je pourrai passer tout mon temps à lire, j'ai appris il n'y a pas très longtemps qu'il y a plusieurs sorte de lecteurs, ceux qui lisent pour s'instruire, ceux qui lisent de temps en temps par plaisir et ceux qui lisent parce qu'ils en ont besoin, un peu comme une drogue eh bien je crois que je suis dans cette dernière catégorie "},
    {id:4,title:"Restaurants", description:"Les truites élevées dans les eaux cristallines des ruisseaux ardennais sont un des classiques de la gastronomie locale. En automne, c’est la saison du gibier: faisan, chevreuil et sanglier sont alors au menu. Le jambon d’Ardenne se fait aussi dans la région et une visite des salaisons est quasi incontournable.   "},
    {id:5,title:"City trips", description:"C'est évidemment nettement plus long, je vous le concède. Mais vous continuez ainsi à parler français et non anglais. Concrètement il s'agit d'un séjour de courte durée à teneur touristique, organisé pour découvrir un maximum de hauts lieux d'une ville."},
    {id:6,title:"La drogue", description:"La cocaïnomanie est la dépendance à la cocaïne. Quels sont les symptômes d'un cocaïnomane ? Comment aider une personne atteinte de cette addiction ? Toutes les réponses à vos questions se trouvent dans la fiche complète ci-dessous."},
    {id:7,title:"Gaming", description:"Le phénomène est généralement décrit comme une perte de contrôle temporaire du comportement de jeu, lié à de la colère et à de la frustration - « C’est la perte de contrôle, sous le coup d’une colère démesurée, qui emmène une perte de contrôle sur soi, liée à certains événements du jeu, à un manque de maîtrise, etc. »"},
    {id:8,title:"La prostitution", description:"En Belgique, bien que la prostitution ne soit pas une activité illégale en soi,elle s'exerce souvent dans un contexte d'illégalité et de clandestinité.  Dans la pratique, la limite entre prostitution légale et illégale est parfois floue."},
    {id:9,title:"manger du pain", description:"Le pain au levain est un pain fait à base de levain, c'est-à-dire d'un mélange d'eau et de farine où se développe une culture de levure et de bactérie lactique. La farine est fermentée par cette culture. Cette fermentation, en dégageant du dioxyde de carbone, permet à la pâte de lever."},
]

let sideBarListName = document.getElementById("sideBarListName");
let profileContainer = document.getElementById("profileContainer");
let firstTitle = document.getElementById("firstTitle");
let wrapper = document.getElementById("wrapper");
let selectedFriend = null;

for(let elem of friends){
    let listName = document.createElement("li");
    listName.innerText = elem.name;
    document.getElementById("sideBarListName").appendChild(listName);

    listName.addEventListener("click", profileShow);
}

function profileShow(event){
    firstTitle.innerText = "";
    firstTitle.style.padding = "0";

    profileContainer.innerText = "";

    let divProfile = document.createElement("div");
    let divPassion = document.createElement("div")

    profileContainer.style.width = "70vw";
    profileContainer.style.padding = "10px";
    profileContainer.style.border = "1px solid #65c9ff";
    profileContainer.style.borderRadius = "10px";
    profileContainer.style.backgroundColor = "#3f8cb6";

    divProfile.setAttribute("class", "divProfile");
    divPassion.setAttribute("class", "divPassion");

    for(let elem of friends){
        if(event.target.innerText == elem.name){
            selectedFriend = elem;

            let imgCover = document.createElement("img");
            let divInfo = document.createElement("div");
            let divPicName = document.createElement("div");
            let imgProfile = document.createElement("img");
            let divNameMail = document.createElement("div");
            let pName = document.createElement("p");
            let aMail = document.createElement("a");
            let divAdress = document.createElement("div");
            let pAdressLine1 = document.createElement("p");
            let pAdressLine2 = document.createElement("p");
            let pAdressLine3 = document.createElement("p");
            let passionsTitre = document.createElement("h2");
            let divPassionDescription = document.createElement("div");
            let divPassionButton = document.createElement("div");
            let addPassionButton = document.createElement("button");
            let divListPassionButton = document.createElement("div");
            let divAddPassionButton = document.createElement("div");

            imgCover.setAttribute("class", "imgCover");
            imgCover.src = elem.cover;
            divInfo.setAttribute("class","divInfo");
            divPicName.setAttribute("class","divPicName");
            imgProfile.setAttribute("class","imgProfile");
            imgProfile.src = elem.photo; 
            divNameMail.setAttribute("class","divNameMail");
            pName.setAttribute("class","pName");
            pName.innerText = elem.name;
            aMail.setAttribute("class","aMail");
            aMail.innerText = elem.adress;
            divAdress.setAttribute("class","divAdress");
            pAdressLine1.setAttribute("class","pAdressLine1");
            pAdressLine1.innerText = elem.adresse + ", " + elem.n;
            pAdressLine2.setAttribute("class","pAdressLine2");
            pAdressLine2.innerText = elem.cp + " " + elem.ville;
            pAdressLine3.setAttribute("class","pAdressLine3");
            pAdressLine3.innerText = elem.pays.charAt(0).toUpperCase() + elem.pays.slice(1);
            passionsTitre.innerText = "Ses passions";
            divPassionButton.setAttribute("class","divPassionButton");
            divListPassionButton.setAttribute("class","divListPassionButton");
            addPassionButton.innerText = "Ajouter une passion";
            addPassionButton.setAttribute("class","addPassionButton");

            divProfile.appendChild(imgCover);
            divProfile.appendChild(divInfo);
            divInfo.appendChild(divPicName);
            divInfo.appendChild(divAdress);
            divPicName.appendChild(imgProfile);
            divPicName.appendChild(divNameMail);
            divNameMail.appendChild(pName);
            divNameMail.appendChild(aMail);
            divAdress.appendChild(pAdressLine1);
            divAdress.appendChild(pAdressLine2);
            divAdress.appendChild(pAdressLine3);
            divPassion.appendChild(passionsTitre);
            divPassionButton.appendChild(divListPassionButton);
            divPassionButton.appendChild(divAddPassionButton);

            for(let elemi of elem.passions){
                let passionButton = document.createElement("button");

                passionButton.setAttribute("class","passionButton");                
                passionButton.innerText = passions[elemi-1].title;
                divListPassionButton.appendChild(passionButton);
                passionButton.addEventListener("click", function(){   
                    divPassionDescription.innerHTML = "";
                    let passionDescription = document.createElement("p");
                    passionDescription.innerText = passions[elemi-1].description;
                    divPassionDescription.appendChild(passionDescription);
                })
            }
            divPassion.appendChild(divPassionButton);
            divAddPassionButton.appendChild(addPassionButton);
            divPassion.appendChild(divPassionDescription);

            addPassionButton.addEventListener("click", function(){
                let divDarkEffect = document.createElement("div");
                let divForm = document.createElement("div");
                let pTitle = document.createElement("p");
                let inputTitle = document.createElement("input");
                let pDescritpion = document.createElement("p");
                let textareaDescription = document.createElement("textarea");
                let divFormButtons = document.createElement("div");
                let buttonConfirm = document.createElement("button");
                let buttonCancel = document.createElement("button");

                divDarkEffect.setAttribute("class", "divDarkEffect");
                divForm.setAttribute("class","divForm");
                pTitle.innerText = "Titre";
                pDescritpion.innerText = "Description";
                inputTitle.setAttribute("class", "inputTitle");
                textareaDescription.setAttribute("class", "textareaDescription")
                divFormButtons.setAttribute("class","divFormButtons");
                buttonConfirm.setAttribute("class","buttonConfirm");
                
                buttonConfirm.setAttribute("disabled",true);

                buttonConfirm.innerText = "Confirmer";
                buttonCancel.setAttribute("class","buttonCancel");
                buttonCancel.innerText = "Annuler";

                wrapper.appendChild(divDarkEffect);
                divDarkEffect.appendChild(divForm);
                divForm.appendChild(pTitle);
                divForm.appendChild(inputTitle);
                divForm.appendChild(pDescritpion);
                divForm.appendChild(textareaDescription);
                divForm.appendChild(divFormButtons);
                divFormButtons.appendChild(buttonConfirm);
                divFormButtons.appendChild(buttonCancel);
                
                inputTitle.addEventListener("keyup",checkInput);
                textareaDescription.addEventListener("keyup",checkInput)
                
                function checkInput(){
                    if(inputTitle.value.trim() != "" && textareaDescription.value.trim() != ""){
                        buttonConfirm.removeAttribute("disabled");
                    }else{
                        buttonConfirm.setAttribute("disabled",true);
                    }
                }
                
                buttonConfirm.addEventListener("click", confirmPush);
                function confirmPush(event){
                    divDarkEffect.innerHTML = "";
                    divDarkEffect.removeAttribute("class");

                    const newPassion = {id:passions.length+1,title:inputTitle.value,description:textareaDescription.value}
                    
                    selectedFriend.passions.push(newPassion.id);
                    
                    passions.push(newPassion);
                    
                    let newPassionButton = document.createElement("button");
                    newPassionButton.setAttribute("class","passionButton");                 
                    newPassionButton.innerText = newPassion.title;
                    divListPassionButton.appendChild(newPassionButton);
                    newPassionButton.addEventListener("click", function(){   
                        divPassionDescription.innerHTML = "";
                        let passionDescription = document.createElement("p");    
                        passionDescription.innerText = newPassion.description;
                        divPassionDescription.appendChild(passionDescription);
                    })
                }

                buttonCancel.addEventListener("click", function(){
                    divDarkEffect.removeChild(divForm);
                    wrapper.removeChild(divDarkEffect);
                })
            })
        }
    }
    document.getElementById("profileContainer").appendChild(divProfile);
    document.getElementById("profileContainer").appendChild(divPassion);
}

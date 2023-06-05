//west 팀 div 생성 및 id 부여
const westernTeamDiv = document.getElementById("western_team");
westernTeamDiv.style.width = "600px";
westernTeamDiv.style.height = "1000px";
westernTeamDiv.style.display = "none";
westernTeamDiv.style.flexWrap = "wrap";
westernTeamDiv.style.justifyContent = "space-between";
westernTeamDiv.style.alignContent = "space-between";

const imagePaths_w = [
    "./TeamInfo/DenverNuggets.png", "./TeamInfo/SacramentoKings.png", "./TeamInfo/DallasMavericks.png", 
    "./TeamInfo/MinnesotaTimberwolves.png", "./TeamInfo/LAClippers.png", "./TeamInfo/HoustonRockets.png",
    "./TeamInfo/OklahomaCityThunder.png", "./TeamInfo/LosAngelesLakers.png", "./TeamInfo/MemphisGrizzlies.png",
    "./TeamInfo/PortlandTrailBlazers.png", "./TeamInfo/PhoenixSuns.png", "./TeamInfo/NewOrleansPelicans.png",
    "./TeamInfo/UtahJazz.png", "./TeamInfo/GoldenStateWarriors.png", "./TeamInfo/SanAntonioSpurs.png"
];

const western_team_id = [
    "DenverNuggets", "SacramentoKings", "DallasMavericks", 
    "MinnesotaTimberwolves", "LAClippers", "HoustonRockets",
    "OklahomaCityThunder", "LosAngelesLakers", "MemphisGrizzlies",
    "PortlandTrailBlazers", "PhoenixSuns", "NewOrleansPelicans",
    "UtahJazz", "GoldenStateWarriors", "SanAntonioSpurs"
];

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        const div_w = document.createElement("div");
        const west_id = western_team_id[i * 5 + j];

        div_w.classList.add("start");
        div_w.style.width = "200px";
        div_w.style.height = "200px";
        div_w.id = west_id;

        const image_w = document.createElement("img");
        image_w.src = imagePaths_w[i * 5 + j];
        image_w.classList.add("start_img");

        div_w.appendChild(image_w);
        westernTeamDiv.appendChild(div_w);
    }
}

//east 팀 div 생성 및 id 부여
const easternTeamDiv = document.getElementById("eastern_team");
easternTeamDiv.style.width = "600px";
easternTeamDiv.style.height = "1000px";
easternTeamDiv.style.display = "none";
easternTeamDiv.style.flexWrap = "wrap";
easternTeamDiv.style.justifyContent = "space-between";
easternTeamDiv.style.alignContent = "space-between";

const imagePaths_e = [
    "./TeamInfo/BostonCeltics.png", "./TeamInfo/ChicagoBulls.png", "./TeamInfo/AtlantaHawks.png", 
    "./TeamInfo/BrooklynNets.png", "./TeamInfo/ClevelandCavaliers.png", "./TeamInfo/CharlotteHornets.png",
    "./TeamInfo/NewYorkKnicks.png", "./TeamInfo/MilwaukeeBucks.png", "./TeamInfo/MiamiHeat.png",
    "./TeamInfo/Philadelphia76ers.png", "./TeamInfo/IndianaPacers.png", "./TeamInfo/OrlandoMagic.png",
    "./TeamInfo/TorontoRaptors.png", "./TeamInfo/DetroitPistons.png", "./TeamInfo/WashingtonWizards.png"
];

const eastern_team_id = [
    "BostonCeltics", "ChicagoBulls", "AtlantaHawks", 
    "BrooklynNets", "ClevelandCavaliers", "CharlotteHornets",
    "NewYorkKnicks", "MilwaukeeBucks", "MiamiHeat",
    "Philadelphia76ers", "IndianaPacers", "OrlandoMagic",
    "TorontoRaptors", "DetroitPistons", "WashingtonWizards"
];

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        const div_e = document.createElement("div");
        const east_id = eastern_team_id[i * 5 + j];

        div_e.classList.add("start");
        div_e.style.width = "200px";
        div_e.style.height = "200px";
        div_e.id = east_id;

        const image_e = document.createElement("img");
        image_e.src = imagePaths_e[i * 5 + j];
        image_e.classList.add("start_img");

        div_e.appendChild(image_e);
        easternTeamDiv.appendChild(div_e);
    }
}

//gif 이미지 실행
const curryPNG = "./TeamInfo/stephen_curry.PNG";
const curryGIF = "./TeamInfo/stephen_curry.gif";

const lebronPNG = "./TeamInfo/lebron_james.PNG";
const lebronGIF = "./TeamInfo/lebron_james.gif";

const west_img = document.querySelector("#west_img");
west_img.src = curryPNG;

const east_img = document.querySelector("#east_img");
east_img.src = lebronPNG;

west_img.addEventListener("mouseenter", function()
{
    west_img.src = curryGIF;
});

west_img.addEventListener("mouseleave", function()
{
    west_img.src = curryPNG;
});

east_img.addEventListener("mouseenter", function()
{
    east_img.src = lebronGIF;
});

east_img.addEventListener("mouseleave", function()
{
    east_img.src = lebronPNG;
});

//클릭 시 이미지 슬라이드
$(document).ready(function() {
    $("#west_img").click(function() {
        $(this).animate({left: "-200%"}, 500, function() {
            $(this).fadeOut(500, function() {
                $(this).hide(); 
                westernTeamDiv.style.display = "flex";
            });
        });
    });

    $("#east_img").click(function() {
        $(this).animate({left: "200%"}, 500, function() {
            $(this).fadeOut(500, function() {
                $(this).hide(); 
                easternTeamDiv.style.display = "flex";
            });
        });
    });
});
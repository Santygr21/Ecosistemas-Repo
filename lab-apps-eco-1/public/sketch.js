let canvas;

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');
}

function draw() {
    background(0, 50);
    newCursor();
}

function mouseClicked(){

    async function getRandomUser(){
    const URL = "https://randomuser.me/api/"; 
    try{
        const queryRU = await fetch(URL);
        const dataRU = await queryRU.json();
        myRandomUser = dataRU;
        console.log(myRandomUser);
    }catch(e){
        console.log(e);
    }
    
}
getRandomUser();

async function getCP(){
    const URLCP = "https://api.coindesk.com/v1/bpi/currentprice.json"; 
    try{
        const queryCP = await fetch(URLCP);
        const dataCP = await queryCP.json();
        myCurrentPrice = dataCP;
        console.log(myCurrentPrice);
    }catch(e){
        console.log(e);
    }
    
}
getCP()

async function getUsaPopulation(){
    const URLUsaPopulation = "https://datausa.io/api/data?drilldowns=Nation&measures=Population"; 
    try{
        const queryUsaPopulation = await fetch(URLUsaPopulation);
        const dataUsaPopulation = await queryUsaPopulation.json();
        myUsaPopulation = dataUsaPopulation;
        console.log(myUsaPopulation);
    }catch(e){
        console.log(e);
    }
    
}
getUsaPopulation();

async function getDog(){
    const URLDog = "https://dog.ceo/api/breeds/image/random"; 
    try{
        const queryDog = await fetch(URLDog);
        const dataDog = await queryDog.json();
        myDog = dataDog;
        console.log(myDog);
    }catch(e){
        console.log(e);
    }
    
}
getDog();

async function getCat(){
    const URLCat = "https://catfact.ninja/fact"; 
    try{
        const queryCat = await fetch(URLCat);
        const dataCat = await queryCat.json();
        myCat = dataCat;
        console.log(myCat);
    }catch(e){
        console.log(e);
    }
    
}
getCat();

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}
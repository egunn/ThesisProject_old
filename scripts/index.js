//setup resize event listener on window
window.addEventListener('resize', resizeView, false);


var width = document.getElementById('nav-div').clientWidth;
var height = document.getElementById('nav-div').clientHeight;


pageNames = [
    {
        name:'Soil and Food',
        priority:3,
        photo:'link',
        text:'short description'
    },
    {
        name:'What people eat',
        priority:3,
        photo:'link',
        text:'short description'
    },
    {
        name:'How much people eat',
        priority:3,
        photo:'link',
        text:'short description'
    },
    {
        name:'Food flow',
        priority:1,
        photo:'link',
        text:'short description'
    },
    {
        name:'Food demands',
        priority:3,
        photo:'link',
        text:'short description'
    },
    {
        name:'Agricultural Practices',
        priority:1,
        photo:'link',
        text:'short description'
    },
    {
        name:'World food production',
        priority:1,
        photo:'link',
        text:'short description'
    },
    {
        name:'Soil degradation',
        priority:2,
        photo:'link',
        text:'short description'
    },
    {
        name:'Soil pressures',
        priority:2,
        photo:'link',
        text:'short description'
    },
    {
        name:'Responses',
        priority:2,
        photo:'link',
        text:'short description'
    }
];



function foodClicked() {

    console.log('food clicked');
}

function populationClicked() {

    console.log('population clicked');
}

function ecosystemClicked() {

    console.log('ecosystem clicked');
}





//runs on window resize, calls scale update and draw functions
function resizeView(){

    width = document.getElementById('nav-div').clientWidth;
    height = document.getElementById('nav-div').clientHeight;

    /*
    //width = window.innerWidth;
    //height = window.innerHeight;

    width = document.getElementById('map-div').clientWidth;//canvas.clientWidth;
    height = document.getElementById('map-div').clientHeight;//canvas.clientHeight;


    timelineWidth = document.getElementById('timeline').clientWidth;

    console.log(width, height);

    //canvas.clientWidth = width;
    //canvas.clientHeight = height;

    canvas.width = width;
    canvas.height = height;
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    d3.select('#fpsvgbkgrd').attr('width',width).attr('height',height);
    d3.select('#fpbkgrd').attr('width',width).attr('height',height);
    //svg.clientWidth = width;
    //svg.clientHeight = height;*/

    resetScales();

}

function resetScales(){

//    update(selectedCountry, 'Exports', selectedYear);

}
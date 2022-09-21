function szamol(){
    let magassag = parseFloat(document.getElementById('magassag').value);
    let suly = parseFloat(document.getElementById('suly').value);
    document.getElementById('bmi').innerHTML = (suly / (magassag / 100) **2).toFixed(2); 
}


function range(){
    let magassag = parseFloat(document.getElementById('magassag').value);
    let suly = parseFloat(document.getElementById('suly').value);
    let bmi = (suly / (magassag / 100) **2).toFixed(2);
    if(bmi <=  18.5){
        
        document.getElementById('elso').style.backgroundColor = 'orange';
    }
    else if(bmi <= 24.9){
        document.getElementById('masodik').style.backgroundColor = 'orange';
    }
    else if(bmi <= 29.9){
        document.getElementById('harmadik').style.backgroundColor = 'orange';
    }
    else if(bmi <= 34.9){
        document.getElementById('negyedik').style.backgroundColor = 'orange';
    }
    else if(bmi <= 39.9){
        document.getElementById('otodik').style.backgroundColor = 'orange';
    }
    else{
        document.getElementById('hatodik').style.backgroundColor = 'orange';
    }
}

function idealis(){
    
}

function init(){
    document.getElementById('szamit').addEventListener('click', szamol);
    document.getElementById('szamit').addEventListener('click', range)
    
}


document.addEventListener('DOMContentLoaded', init);


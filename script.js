const arabic = document.getElementById('arabic'); 
const source = document.querySelector('.ayah-source'); 
const translation= document.querySelector('.ayah-translation'); 
const button = document.getElementById('btn'); 

function getAyahNumber() {
    return Math.floor(Math.random() * (6236- 1) + 1);
}

async function getAyah() {
    const response = await fetch (`http://api.alquran.cloud/v1/ayah/${getAyahNumber()}/editions/quran-uthmani,en.pickthall`); 
    const ayah = await response.json(); 
    return ayah.data
}

function newAyah(){
    getAyah().then(ayah => makeText(ayah)); 
}

function makeText(ayah) {
    console.log(ayah); 
    arabic.innerHTML = ayah[0].text; 
    source.innerHTML = `Surah ${ayah[1].surah.englishName} | Verse ${ayah[1].numberInSurah}`; 
    translation.innerHTML = ayah[1].text; 
 }

newAyah(); 

button.addEventListener('click', newAyah ); 


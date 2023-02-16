//declare an empty object

let musicData = {}; 

function fetchData(note) {
    if (!note){
        return null; 
    }

    const options = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-RapidAPI-Key': '9b1616d866msh35df5ed3e5b0c18p15a0c2jsnec262f5d1537',
            'X-RapidAPI-Host': 'piano-chords.p.rapidapi.com'
        }
    };
    
    fetch('https://piano-chords.p.rapidapi.com/chords/csharp', options)
        .then(response => response.json())
        .then((response) => {
            musicData = response
            updateDom(musicData)
            // console.log(musicData); 
            // console.log(musicData.C[5].midiKeys[1]);
        })
        .catch(err => console.error(err));
}

//search
function search(){
    ;
}


//event listener to button: 
const getChord = document.querySelector("#search-btn"); 
getChord.addEventListener("click", function () {
    let searchChord = document.querySelector("#chord-search").value;
    fetchData(searchChord);
    console.log(searchChord);
    
}); 



//variables for chord object properties: 
const chordName = document.getElementById("name"); 
const notes = document.getElementById("notes");
const intervals = document.getElementById("intervals");

//update DOM: 
function updateDom(data) {
    console.log(data); 
    chordName.textContent = `Name: ${data.name}`; 
    notes.textContent = `Notes: ${data.notes[0]}`; 
    intervals.textContent = `Intervals: ${data.intervals[0]}`; 
    
}


// fetchData(); 


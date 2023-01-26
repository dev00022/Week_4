let speakWord = "Good Bye";
function byespeak(name){
    console.log(speakWord + " " + name);
}

let speakWord2 = "Hello";
function hellospeak(name){
    console.log(speakWord2 + " " + name);
}

let names = ["Yaakov","John","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
for(let i=0; i<names.length; i++){
    let first = names[i].charAt(0).toLocaleLowerCase();
    if(first === "j"){
        byespeak(names[i]);
    }
    else{
        hellospeak(names[i]);
    }
}  
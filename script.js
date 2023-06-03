const getDadJoke = async () => {
    try{
    const config = {headers: {Accept: 'application/json'}};
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
    }
    catch(err){
        console.log("Error!", err);
    }
}

const btn = document.querySelector("#btn");
const jokeBox = document.querySelector("#joke");

const addNewJoke = async () => {
    try{
        const jokeText = await getDadJoke();
        jokeBox.innerHTML = `<h1>${jokeText}</h1>`;
    }
    catch(e){
        console.log('Error!' , e);
    }
}

btn.addEventListener("click" , addNewJoke);
const joke = document.querySelector('.joke');
const button = document.getElementById('joke-btn');

function getJoke() {
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random')
    xhr.onreadystatechange = function() {
        if(this.readyState === 4) {
            if(this.status === 200) {
                const data = JSON.parse(this.responseText);
                joke.innerHTML = data.value;
                
            } else {
                joke.innerHTML = 'Something went wrong (Not funny stuff)'
            }
        }
    }

    xhr.send()
}

button.addEventListener('click', getJoke)
document.addEventListener('DOMContentLoaded', getJoke)

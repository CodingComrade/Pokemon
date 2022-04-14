const url = `https://pokeapi.co/api/v2/pokemon?limit=151`
const correctAnswer = getPokemon()//number of pokemon
const wrong1 = getPokemon()
const wrong2 = getPokemon()
const wrong3 = getPokemon()

const choices = [correctAnswer - 1, wrong1, wrong2, wrong3]
const test = randomAnswers(choices)



function randomAnswers(choices) {
  return choices.sort(() => Math.random() - 0.5)
}

document.querySelector('.main').addEventListener('click', playAudio)

function playAudio() {
  const audio = document.querySelector('#audio')
  audio.play()
}




function getFetch() {

  function refresh() {
  //console.log(playerChoice, playerChoice2, playerChoice3, playerChoice4)
  document.querySelector('.pokemonSprite').style.filter = 'brightness(1)'
  setTimeout(location.reload.bind(location), 2000)
}

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('.pokemonSprite').src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${correctAnswer}.png`

        document.querySelector('#choice1').innerText = data.results[test[0]].name
        document.querySelector('#choice1').value = data.results[test[0]].name
        const playerChoice = document.querySelector('#choice1').value
        document.querySelector('#choice2').innerText = data.results[test[1]].name
        document.querySelector('#choice2').value = data.results[test[1]].name
        const playerChoice2 = document.querySelector('#choice2').value
        document.querySelector('#choice3').innerText = data.results[test[2]].name
        document.querySelector('#choice3').value = data.results[test[2]].name
        const playerChoice3 = document.querySelector('#choice3').value
        document.querySelector('#choice4').innerText = data.results[test[3]].name
        document.querySelector('#choice4').value = data.results[test[3]].name
        const playerChoice4 = document.querySelector('#choice4').value

        document.querySelector('#choice1').addEventListener('click', firstTry)
        document.querySelector('#choice2').addEventListener('click', secondTry)
        document.querySelector('#choice3').addEventListener('click', thirdTry)
        document.querySelector('#choice4').addEventListener('click', fourthTry)
        
        function firstTry() {
          if (playerChoice === data.results[correctAnswer - 1].name) {
            document.querySelector('#choice1').style.color = 'green';
           refresh()
          } else {
            document.querySelector('#choice1').style.color = 'red';
          }
        }

        function secondTry() {
          if (playerChoice2 === data.results[correctAnswer - 1].name) {
            document.querySelector('#choice2').style.color = 'green';
           refresh()
          } else {
            document.querySelector('#choice2').style.color = 'red';
          }
        }

        function thirdTry() {
          if (playerChoice3 === data.results[correctAnswer - 1].name) {
            document.querySelector('#choice3').style.color = 'green';
           refresh()
          } else {
            document.querySelector('#choice3').style.color = 'red';
          }
        }

        function fourthTry() {
          if (playerChoice4 === data.results[correctAnswer - 1].name) {
            document.querySelector('#choice4').style.color = 'green';
           refresh()
          } else {
            document.querySelector('#choice4').style.color = 'red';
          }
        }
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

    }
getFetch()

function getPokemon(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (151 - 1) + 1)
}



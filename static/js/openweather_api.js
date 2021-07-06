const url = `http://api.openweathermap.org/data/2.5/weather?q=Durham&appid=${API_KEY}`

const rebeccasUrl = `https://api.openweathermap.org/data/2.5/weather?q=Durham,North%20Carolina&appid=27f7ac7950d6b41f650c9d0e32b7afc7`

fetch(rebeccasUrl)
  .then(res => res.json())
  .then(data => console.log(data))

// fetch(url)
//   .then(res => res.json())
//   .then(data => console.log(data))

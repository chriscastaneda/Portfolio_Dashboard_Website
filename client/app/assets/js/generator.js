var title = [
    'Backend developer', 'Frontend developer', 'Fullstack developer'
]

//Math.floor(Math.random() * string positon)
var randomNumber = Math.floor(Math.random() * (title.length));
document.getElementById('jobGenerator').innerHTML = qoutes[randomNumber];
    
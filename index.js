function sayHello() {
    const messages = [
        "Hallo en welkom!",
        "Fijn dat je er bent!",
        "Bedankt voor je bezoek!",
        "Veel plezier op mijn site!"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('output').textContent = randomMessage;
}

document.getElementById('greetButton').addEventListener('click', sayHello);

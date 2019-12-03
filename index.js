/*
 * WORLD MAP VISUALIZER
 * Author: <your name here>
 * ---------------------------
 *
 * Visualizing the world!
 *
 * A list of ressources you used, for example links:
 * [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).
 */

/*
 *  Aufgabe 2.0: Das Script soll eine Weltkarte auf der Konsole als ASCII-Art zeichnen.
 *  Dafür muss jeder Pixel eines Bild einer Weltkarte gelesen und geprüft werden (world.jpg).
 *  Ist der Pixel schwarz, soll ein Zeichen (z.B. "#") an die richtige Stelle der Konsole 
 *  gesetzt werden. Dafür braucht ihr zwei Funktionen:
 *
 *  getPixelColor(x,y) - kann mit map_image-Objekt benutzt werden (also map_image.getPixelColor(x,y))
 *  writeCharacterToConsole(char, x, y) - Schreibt ein Zeichen an eine Position x/y auf die Konsole
 *
 *  Aufgabe 2.1: Farbe! Schaut euch das npm-Modul "chalk" an, und versucht die Zeichen in Farbe auszugeben
 *
 */

const rl = require('readline')
/*const jimp = require('jimp')*/

clearConsole()

/*jimp.read('world.jpg', (err, map_image) => {
  if (err) throw err;
  map_image.resize(100,50);
  console.log(map_image.getPixelColor(20,20)); //gibt die Farbe des Pixels links oben zurück
  writeCharacterToConsole('#',20,0); //schreibt ein # links oben in die Konsole*/

/*jimp.read('farbigesHaus.jpg', (err, Haus) => {
  if (err) throw err;
  Haus.resize(100,50);
  console.log(Haus.getPixelColor(20,20)); //gibt die Farbe des Pixels links oben zurück
  writeCharacterToConsole('#',20,0);

  //----- Hier kommt euer Code hin -----

  
  /*const chalk = require('chalk');
  for (let x = 0; x < 101; x++) {
    for (let y = 0; y < 51; y++) {
      let pixelColor = map_image.getPixelColor(x,y)
      if (pixelColor === 255) {
        (writeCharacterToConsole(chalk.blue('#'),x,y));
      }
    }
  }
});*/

const chalk = require('chalk');
  /*for (let x = 0; x < 101; x++) {
    for (let y = 0; y < 51; y++) {
      let pixelColor = Haus.getPixelColor(x,y)
      if (pixelColor > 255 && pixelColor < 5000000) {
        (writeCharacterToConsole(chalk.blue('#'),x,y));
      }
    }
  }
});*/

function generateInvader (width, height, xPosition, yPosition) { 

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if (Math.random() <= 0.5) {
        let h = 350;
        let s = Math.floor(Math.random() * 100);
        let v = Math.floor(Math.random() * 100);
        //writeCharacterToConsole('◼️',x,y)
        writeCharacterToConsole(chalk.hsv(h,s,v)('■'), x + xPosition, y + yPosition);
        //writeCharacterToConsole('◼️',2 * width - x,y)
        writeCharacterToConsole(chalk.hsv(h,s,v)('■'), 2 * width - x + xPosition, y + yPosition);

      }
    }
  }
  rl.cursorTo(process.stdout, 100, 100)
  
}

//Vorerst nur ein Platzhalter
setInterval(function () {
  const xPosition = Math.floor(Math.random() * 200);
  const yPosition = Math.floor(Math.random() * 40);
  clearConsole();
  generateInvader(7, 9, xPosition, yPosition);
},1000);


/*
 * HELPER FUNCTIONS - DO NOT CHANGE
 */
function clearConsole () {
  const blank = '\n'.repeat(process.stdout.rows)
  console.log(blank)

  rl.cursorTo(process.stdout, 0, 0)
  rl.clearScreenDown(process.stdout)
}

function writeCharacterToConsole (char, x, y) {
  rl.cursorTo(process.stdout,x,y)
  process.stdout.write(char)
}
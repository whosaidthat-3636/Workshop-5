let table;

function preload() {
  table = loadTable('weekplayed.csv', 'csv', 'header');
}

function setup() {
  createCanvas(500, 450);
  background(220);
}

// function allMyHours(){
//   noStroke(0);
//   fill(249, 56, 39);
//   let xPos = 30;
//   for(x = 0; x < table.getRowCount(); x++){
//     let row = table.getRow(x);
//     let countWeek = row.get("Week");
//     if (countWeek > 0){
//       for (y = 0; y < countWeek; y++){
//         ellipse(xPos, 50, 20, 20);
//         xPos += 20;
//       }
//     }
//     let countHours = row.get("Hours");
//     if (countHours> 0){
//       for ( y=0; y < countHours; y++){
//         ellipse(xPos, 50, 20, 20);
//         xPose += 20;
//       }
//     }
  // }
  // }

function weekLabel() {
  for(x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let week = row.get("Week");
    fill(0);
    text(week, 145 + x * 80, 350);
    image
  }
}

// function hoursLabel() {
//   for(y = 0; y < table.getRowCount(); y++){
//     let row = table.getRow(y);
//     let hours = row.get("Hours");
//     fill(0);
//     text(hours, 145 + y * 80, 350);
//   }
// }

function showChart(){
  //array
  let colors = [
    color(249, 56, 39), // week 1: red
    color(255, 257, 35), // week 2: orange
    color(255, 214, 90), // week 3: yellow
    color(22, 196, 127), // week 4: green
  ];

  for(x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let barChart = row.get("Hours");
    fill(colors[x]);
    noStroke();
    rect(135 + x * 80, 320, 30, -barChart * 10); 
  }
}

function draw() {
  fill(0);
  text('Week', 260, 380);
  text('Hours Played', 25, height/2);
  text('Hours of Music Played in a Month', 160, 420);
  text('30', 110, 31);
  text('15', 110, 181)
  //  allMyHours();
  weekLabel();
  showChart();


}
# Workshop-5
Link: [https://whosaidthat-3636.github.io/Workshop-5/]

## Tasks
- Produce a 'data self-portrait' in a p5.js sketch by making a visualisation that shows something about yourself from a dataset. Use a csv file to store the dataset.
- Experiment with different ways to present the data, e.g. using text, images, shapes, or colours.

## Documentation
- I had a really hard time for this workshop and I acknowledge the outcome is definitely incomplete but I don't know how else to go about it
- I also have a feeling it is due to the CSV file being different so it was difficult to adapt

### 1) Attempts notes
1. tried doing a horizontal barchart but I just couldn't work out the coordinates
2. following the tutorial and trying to adjust base on what my CSV but the text was constantly out of frame
<img width="443" alt="image" src="https://github.com/user-attachments/assets/e011202b-0e3f-4067-9ef2-b5cc18276aa5" />

### 2) Bar Chart
- I followed the tutorial again on the third attempt and altered my CSV
- Attempt turned out okay, had a lot of trial and error in guessing the values
<img width="385" alt="image" src="https://github.com/user-attachments/assets/a3e4803f-0b63-4136-9b8c-dae533e9525e" />

<img width="382" alt="image" src="https://github.com/user-attachments/assets/5f50eda6-9939-44a5-aea8-d9f91e920961" />

- 




## Notes
### 1) Getting table
```
let table;

function preload(){
table = loadTable('filename.csv', 'csv', 'header');}
	// header demonstrates that there is a headrow

in DRAW
// drawing a table
let rows = table.getRowCount();
text("string", +rows, x, y);
let rows = table.getRow(row number);
	// first row starts at 0
	// set row variable so variable be called and access different data
let variable = row.get("header row name");
text(variable, x, y);
	// this allows the data value to be displayed based on
		// row number
		// header row name

### 2) Using loop to go through all the rows
```
function preload(){
table = loadTable}

function weekLabels(){
for (x = 0; x<table.getRowCount(); x++){
let rows = table.getRow(x);
let variable = row.get("header title");
text(variable, starting position on the x-axis + x * pixels further, y position )}
in DRAW
// call to function
weekLabels();
```

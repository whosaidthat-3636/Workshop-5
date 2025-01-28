# Workshop-5
Link: []

## Tasks
- Produce a 'data self-portrait' in a p5.js sketch by making a visualisation that shows something about yourself from a dataset. Use a csv file to store the dataset.
- Experiment with different ways to present the data, e.g. using text, images, shapes, or colours.

## Documentation


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

function makeGrid() {
    var table = document.getElementById('pixel_canvas');
    var rows = document.getElementById('input_height').value;
    var columns = document.getElementById('input_width').value;

    var i, j, row, column;
    for (i = 0; i < rows; i++) {
        row = table.insertRow();
        for (j = 0; j < columns; j++) {
            column = row.insertCell();
            column.addEventListener('click', toggleBgcolor, false);
        }
    }
    console.log(rows, columns, table);
}

function toggleBgcolor(e){
    var bgcolor = document.getElementById('colorPicker').value;
    var activeBg = this.style.backgroundColor;
    this.style.backgroundColor = activeBg ? "" : bgcolor;
}

document.getElementById('sizePicker').onsubmit= function(e){
    e.preventDefault();
};

document.getElementById('submit').addEventListener('click', makeGrid, false);

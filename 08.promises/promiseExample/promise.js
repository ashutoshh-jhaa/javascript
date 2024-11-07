let fetchUrl = "https://fakestoreapi.com/products";
let tableDiv = document.getElementById("tableDiv");
let loadButton = document.getElementById("loadData");

// Load data and build table on button click
loadButton.addEventListener("click", () => {
  getData(fetchUrl)
    .then(
      (res) => {
        const data = JSON.parse(res);

        // Check if data is empty
        if (data.length === 0) {
          tableDiv.innerHTML = "No data available.";
          return;
        }

        // Build the table
        const table = buildTable(data);
        tableDiv.appendChild(table);
      },
      (error) => console.log("Failed to load data:", error),
    )
    .catch((error) => console.error("Error:", error));
});

// Helper function to fetch data
function getData(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(this.response);
      } else {
        reject(this.status);
      }
    };
    xhr.send();
  });
}

// Helper function to build the table
function buildTable(data) {
  const table = document.createElement("table");

  // Create table header
  const headings = Object.keys(data[0]);
  const headerRow = createTableHeader(headings);
  table.appendChild(headerRow);

  // Create table rows
  const rows = createTableRows(data, headings);
  rows.forEach((row) => table.appendChild(row));

  return table;
}

// Helper function to create the table header
function createTableHeader(headings) {
  const headerRow = document.createElement("tr");
  headings.forEach((heading) => {
    const th = document.createElement("th");
    th.textContent = heading;
    headerRow.appendChild(th);
  });
  return headerRow;
}

// Helper function to create table rows
function createTableRows(data, headings) {
  return data.map((item) => {
    const row = document.createElement("tr");
    headings.forEach((heading) => {
      const cell = document.createElement("td");
      cell.textContent = item[heading];
      row.appendChild(cell);
    });
    return row;
  });
}

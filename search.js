let data = [
  "Fullstack Java Programming",
  "Analysis of Algorithms",
  "HTML and CSS",
  "Machine Learning Introduction",
  "Discrete Structures and Graph Theory",
  "Mathematics 3"
];

function search() {
  let query = document.getElementById("searchBox").value.toLowerCase();
  let resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  let found = false;
  data.forEach(item => {
    if (item.toLowerCase().includes(query)) {
      let p = document.createElement("p");
      p.textContent = item;
      resultsDiv.appendChild(p);
      found = true;
    }
  });

  if (!found) {
    resultsDiv.innerHTML = "<p>No results found.</p>";
  }
}

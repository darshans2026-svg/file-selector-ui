let multi = false;

document.getElementById("singleBtn").onclick = () => toggleMode(false);
document.getElementById("multiBtn").onclick = () => toggleMode(true);

function toggleMode(isMulti) {
  multi = isMulti;
  document.getElementById("singleBtn").classList.toggle("active", !isMulti);
  document.getElementById("multiBtn").classList.toggle("active", isMulti);
}

document.querySelectorAll(".tree span").forEach(item => {
  item.onclick = () => {
    if (!multi) {
      document.querySelectorAll(".selected").forEach(s => s.classList.remove("selected"));
    }
    item.classList.toggle("selected");
  };
});

// Search
document.getElementById("search").addEventListener("input", e => {
  const val = e.target.value.toLowerCase();
  document.querySelectorAll(".tree span").forEach(node => {
    node.style.display = node.textContent.toLowerCase().includes(val) ? "block" : "none";
  });
});
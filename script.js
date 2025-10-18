const textarea =
document.getElementById("note");
const saveBtn =
document.getElementById("save");
const clearbtn = 
document.getElementById("clear");
const aibtn = document.getElementById("ai");
const themeToggle = 
document.getElementById("theme-toggle");
window.onload = () => {
    const savednote = localStorage.getItem("note");
    if(savedNote) textarea.value = savedNote;
};

saveBtn.addEventListener("click",() => {
    localStorage.setItem("note",textarea.value);
    alert("Note saved succesfully");
});

clearbtn.addEventListener("click",() => {
    textarea.value ="";
    localStorage.removeItem("note");
});

aibtn.addEventListener("click",() => {
    const text = textarea.value.trim();

    if(text.length === 0){
        textarea.value = "💡 start by writing your thoughts -- I'll help you organize them!";
        return;
    }
    textarea.value +=
    "\n\n ✨ AI tip: Try structuring you thoughts with bullet points or small sections.";
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  themeToggle.textContent = isLight ? "🌙" : "☀️";
});

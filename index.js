const paraEl = document.querySelectorAll("demo");
const btnEl = document.getElementById("btn");

btnEl.addEventListener("click", () => {
  paraEl.textContent = "🎉 Am a git guru for my projects.";
  let name = prompt("Please enter your name?")
  alert(`🎉🎉🎉! Thank you ${name} for coming here. Please this site is for demonstrative purpose and the button is inactive for now.`);
  paraEl.textContent = `You will see new post ${name} every two weeks. Thank you 👋👋👋`;
});

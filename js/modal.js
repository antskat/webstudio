function showPopup() {
  document.querySelector(".popup").classList.add("popup_active");
  document.querySelector(".popup-overlay").style.display = "block";
  document.body.style.overflow = "hidden";
}
function hidePopup() {
  document.querySelector(".popup").classList.remove("popup_active");
  document.querySelector(".popup-overlay").style.display = "none";
  document.body.style.overflow = "scroll";
}
document.getElementById("open-btn").addEventListener("click", showPopup);
document.querySelector(".close-btn").addEventListener("click", hidePopup);
document.querySelector(".popup-overlay").addEventListener("click", hidePopup);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    hidePopup();
  }
});
const inputs = [document.getElementById('input1'), document.getElementById('input2'), document.getElementById('input3')];
const svgs = [document.getElementById('svg1'), document.getElementById('svg2'), document.getElementById('svg3')];

inputs.forEach((input, index) => {
  input.addEventListener('focus', () => {
    changeSvgColor(svgs[index]);
  });

  input.addEventListener('blur', () => {
    resetSvgColor(svgs[index]);
  });
});

function changeSvgColor(svgElement) {
  svgElement.style.fill = 'var(--accent-color)';
}

function resetSvgColor(svgElement) {
  svgElement.style.fill = '#000';
}

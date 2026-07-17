const selectContainer = document.querySelector(".selectionFonts");
const selectTrigger = document.getElementById("selectionTrigger");
const selectedText = document.getElementById("selectionText");
const optionItems = document.querySelectorAll(".option-item");

selectTrigger.addEventListener("click", function (e) {
  e.stopPropagation();
  selectContainer.classList.toggle("open");
});

optionItems.forEach(item => {
  item.addEventListener('click', function(e) {
      e.stopPropagation();
      selectedText.innerHTML = this.innerHTML;
      const currentFont = window.getComputedStyle(this).fontFamily;
      selectedText.style.family = currentFont;
      selectedText.style.fontFamily = currentFont;
      selectedText.style.color = '#333333';
      selectContainer.classList.remove('open');
  });
});

document.addEventListener("click", function () {
  selectContainer.classList.remove("open");
});

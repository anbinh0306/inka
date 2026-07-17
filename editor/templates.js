const selectContainerTemplates = document.querySelector(".select-templates");
const selectTriggerTemplates = document.getElementById("selectTrigger");
const selectedTextTemplates = document.getElementById("defaultText");
const optionCards = document.querySelectorAll(".option-card");

selectTriggerTemplates.addEventListener("click", function (e) {
  e.stopPropagation();
  selectContainerTemplates.classList.toggle("open");
});

optionCards.forEach((card) => {
  card.addEventListener("click", function (e) {
    e.stopPropagation();
    selectedTextTemplates.innerHTML = this.innerHTML;
    const styles = window.getComputedStyle(this);
    selectTriggerTemplates.style.backgroundColor = styles.backgroundColor;
    selectTriggerTemplates.style.color = styles.color;
    selectTriggerTemplates.style.borderColor = styles.borderColor || styles.color;
    selectTriggerTemplates.style.fontFamily = styles.fontFamily;
    selectContainerTemplates.classList.remove("open");
  });
});

document.addEventListener("click", function () {
  selectContainerTemplates.classList.remove("open");
});

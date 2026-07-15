const selectContainer = document.querySelector(".selectionFonts");
const selectTrigger = document.getElementById("selectionTrigger");
const selectedText = document.getElementById("selectionText");
const optionItems = document.querySelectorAll(".option-item");

// 1. Bấm vào thanh hiển thị để Bật/Tắt menu thả xuống
selectTrigger.addEventListener("click", function (e) {
  e.stopPropagation(); // Ngăn sự kiện click bị lan ra ngoài body
  selectContainer.classList.toggle("open");
});

// 2. Bấm chọn một dòng (Item) trong danh sách
optionItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.stopPropagation();

    // Lấy nội dung chữ và icon của dòng vừa bấm (giữ nguyên cấu trúc HTML)
    selectedText.innerHTML = this.innerHTML;

    // Đổi màu chữ thanh trigger thành màu đậm hơn sau khi đã chọn
    selectedText.style.color = "#333333";

    // Lấy giá trị ẩn (Value) để xử lý logic lập trình nếu cần
    const value = this.getAttribute("data-value");
    console.log("Giá trị đã chọn:", value);

    // Đóng menu lại
    selectContainer.classList.remove("open");
  });
});

// 3. Click ra ngoài vùng chọn thì tự động đóng menu lại cho giống trải nghiệm thật
document.addEventListener("click", function () {
  selectContainer.classList.remove("open");
});

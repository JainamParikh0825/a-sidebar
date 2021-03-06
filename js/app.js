const sidebar = document.querySelector(".sidebar");
const burger = document.querySelector(".burger");
const closeSidebarBtn = document.querySelector(".close-sidebar-btn");

burger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  sidebar.classList.toggle("close");
});

closeSidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

const accordionItems = document.querySelectorAll(".accordion");
const icon = document.querySelectorAll(".icon");

const plusSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
`;

const minusSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
</svg>
`;

accordionItems.forEach((item, index) =>
  item.addEventListener("click", () => {
    const isItemOpen = item.classList.contains("bg-gray-700");

    accordionItems.forEach((item, index) => {
      return (
        item.classList.remove("bg-gray-700"),
        (item.nextElementSibling.style.display = "none"),
        (icon[index].innerHTML = plusSvg)
      );
    });

    if (!isItemOpen) {
      item.classList.toggle("bg-gray-700");
      item.nextElementSibling.style.display = "block";
      item.nextElementSibling.style.backgroundColor = "#4B5563";
      icon[index].innerHTML = minusSvg;
    }
  })
);

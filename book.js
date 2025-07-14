let browse = document.querySelector(".dropdown_menu");
let browseList = document.querySelector(".click_menu");

// browse.addEventListener("click",()=>{
//     browseList.classList.toggle("janani");
// })

browse.addEventListener("click", () => {
  if (browseList.style.display === "inline") {
    browseList.style.display = "none";
  } else {
    browseList.style.display = "inline";
  }
});

let menubar = document.querySelector(".menu_bar");
let menulist = document.querySelector(".menu_barevent");

menubar.addEventListener("click", ()=>{

  // menulist.classList.remove(''hidden);

  if(menulist.style.display === "none" || menulist.style.display === ""){
    menulist.style.display = "block";
  } else {
    menulist.style.display = "none"; 
  }
});


// Wait until everything is loaded
document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".category li");
  const bookSections = document.querySelectorAll(".book_section > div");

  // Mapping li class names to book section classes
  const sectionMap = {
    displayBooks_all: "b1",
    displayBooks_trending: "b2",
    displayBooks_classic: "b3",
    displayBooks_book: "b4",
    displayBooks_thriller: "b5",
    displayBooks_romance: "b6",
    displayBooks_textbooks: "b7",
  };

  categories.forEach((li) => {
    li.addEventListener("click", () => {
      // Hide all book sections
      bookSections.forEach((section) => {
        section.style.display = "none";
      });

      // Show the selected one
      const sectionClass = sectionMap[li.classList[0]];
      const sectionToShow = document.querySelector(`.${sectionClass}`);
      if (sectionToShow) {
        sectionToShow.style.display = "flex"; // or "block" based on your layout
        sectionToShow.style.justifyContent = " space-evenly ";
        sectionToShow.style.flexWrap = "wrap";
        sectionToShow.style.gap = "50px";
      }
    });
  });
});

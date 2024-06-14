function openForms() {
    document.getElementById("myform").style.display = "block";
    document.getElementById("img_option").style.display = "none";
}
function closeForm() {
    document.getElementById("myform").style.display = "none";
    document.getElementById("img_option").style.display = "block";
}



const threshold = 100; // Adjust this threshold as needed
        
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    
    // Check if the scroll position is greater than the threshold
    if (scrollPosition > threshold) {
        document.getElementById('navbar').style.boxShadow = "0 1px 20px 2px rgb(80, 80, 80)";
    } else {
        console.log('Scrolled back to the top!');
        document.getElementById('navbar').style.boxShadow = "none";
    }
});


// 
var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = `<i class="far fa-eye"></i> ${visitCount}`;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = `<i class="far fa-eye"></i> ${visitCount}`;
});

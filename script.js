/* ================= FREE COURSES ================= */

let selectedBranch = "all";

function filterBranch(branch, button) {
  selectedBranch = branch;

  // Update active button
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");

  filterCourses();
}


function filterCourses() {
  const searchInput = document
    .getElementById("courseSearch")
    .value
    .toLowerCase()
    .trim();

  const cards = document.querySelectorAll(".course-card");
  const noCourses = document.getElementById("noCourses");

  let visibleCourses = 0;

  cards.forEach(card => {

    const branch = card.dataset.branch;
    const text = card.innerText.toLowerCase();

    const matchesBranch =
      selectedBranch === "all" ||
      branch === selectedBranch;

    const matchesSearch =
      text.includes(searchInput);

    if (matchesBranch && matchesSearch) {
      card.style.display = "block";
      visibleCourses++;
    } else {
      card.style.display = "none";
    }
  });

  // Show "No courses found"
  if (visibleCourses === 0) {
    noCourses.style.display = "block";
  } else {
    noCourses.style.display = "none";
  }
}

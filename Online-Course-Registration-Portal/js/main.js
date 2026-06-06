document.querySelectorAll(".needs-validation").forEach((form) => {
  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else if (form.id === "registrationForm") {
      event.preventDefault();
      document.getElementById("registrationAlert").classList.remove("d-none");
      form.reset();
      form.classList.remove("was-validated");
      return;
    }
    form.classList.add("was-validated");
  });
});

const courseModal = document.getElementById("courseModal");
if (courseModal) {
  courseModal.addEventListener("show.bs.modal", (event) => {
    const courseName = event.relatedTarget.getAttribute("data-course");
    document.getElementById("courseModalTitle").textContent = courseName;
  });
}

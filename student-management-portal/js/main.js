document.querySelectorAll(".needs-validation").forEach((form) => {
  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else if (form.dataset.successAlert) {
      event.preventDefault();
      const alert = document.querySelector(form.dataset.successAlert);
      if (alert) {
        alert.classList.remove("d-none");
      }
      form.reset();
    }

    form.classList.add("was-validated");
  });
});

const searchInput = document.querySelector("#studentSearch");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    document.querySelectorAll("#studentTable tbody tr").forEach((row) => {
      row.classList.toggle("d-none", !row.textContent.toLowerCase().includes(query));
    });
  });
}

const learnModal = document.querySelector("#learnMoreModal");
if (learnModal) {
  learnModal.addEventListener("show.bs.modal", (event) => {
    const trigger = event.relatedTarget;
    const title = trigger?.dataset.title || "Portal Feature";
    const description = trigger?.dataset.description || "Explore student services through this responsive Bootstrap portal.";
    learnModal.querySelector(".modal-title").textContent = title;
    learnModal.querySelector(".modal-body").textContent = description;
  });
}

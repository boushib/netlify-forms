window.onload = () => {
  const form = document.getElementById("form");
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => console.log(error));
  });
};

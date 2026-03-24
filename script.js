// your code here
    const button = document.getElementById("button");
    const nameInput = document.getElementById("name");
    const yearInput = document.getElementById("year");
    const urlText = document.getElementById("url");

    button.addEventListener("click", function () {
      const name = nameInput.value.trim();
      const year = yearInput.value.trim();

      let baseUrl = "https://localhost:8080/";
      let params = [];

      if (name) {
        params.push(`name=${encodeURIComponent(name)}`);
      }

      if (year) {
        params.push(`year=${encodeURIComponent(year)}`);
      }

      if (params.length > 0) {
        baseUrl += "?" + params.join("&");
      }

      urlText.textContent = baseUrl;
    });
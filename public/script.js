
async function generateDocs() {
  const code = document.getElementById("code").value;
  const analysis = document.getElementById("analysis").value;
  const output = document.getElementById("output");
  output.textContent = "⏳ Generating...";

  try {
    const response = await fetch("/api/generate-docs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, analysis }),
    });

    const data = await response.json();
    output.textContent = data.documented_code || "❌ Error: " + (data.error || "Unknown issue");
  } catch (err) {
    output.textContent = "❌ Failed to connect to backend.";
    console.error(err);
  }
}

function copyOutput() {
  const outputText = document.getElementById("output").textContent;
  navigator.clipboard.writeText(outputText).then(() => {
    alert("📋 Copied to clipboard!");
  });
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  const toggle = document.getElementById("theme-toggle");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

document.getElementById("fileInput").addEventListener("change", function () {
  const file = this.files[0];
  if (file && file.name.endsWith(".py")) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("code").value = e.target.result;
    };
    reader.readAsText(file);
  } else {
    alert("Please upload a valid .py file.");
  }
});

  

async function generateDoc() {
    const code = document.getElementById("code").value;
    const analysis = document.getElementById("analysis").value;
    const output = document.getElementById("output");
  
    output.textContent = "⏳ Generating docstrings...";
  
    try {
      const res = await fetch("/generate-docs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, analysis })
      });
  
      const data = await res.json();
      output.textContent = data.documented_code || "❌ Failed to generate.";
    } catch (error) {
      output.textContent = "❌ Error contacting server.";
      console.error(error);
    }
  }
  
  function handleFileUpload() {
    const fileInput = document.getElementById("fileInput");
    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById("code").value = reader.result;
    };
    if (fileInput.files.length > 0) {
      reader.readAsText(fileInput.files[0]);
    }
  }
  
  function copyToClipboard() {
    const output = document.getElementById("output").textContent;
    navigator.clipboard.writeText(output).then(() => {
      alert("📋 Copied to clipboard!");
    });
  }
  
  function toggleDarkMode() {
    document.body.classList.toggle("dark");
  }
  
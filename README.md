# 🧠 AutoDoc Pro

**AutoDoc Pro** is an intelligent code documentation generator built for developers who want clean, structured, and consistent Python docstrings — fast.

Built solo during the **Code Craft AI x Dev Hackathon**, this tool combines the power of FastAPI, GPT agents (via Trae IDE), and a minimal frontend to transform raw Python code into beautifully documented functions.

---

## 🚀 Live Demo

🔗 https://auto-doc-pro.vercel.app/

  
📁 [View Source on GitHub](https://github.com/Umer2000/Auto_Doc_pro)

---



---

## 🔍 Features

- 🧠 **AI-Powered**: Uses GPT agents via Trae IDE for code comprehension.
- 📄 **Automatic Docstrings**: Adds docstrings directly to raw Python functions.
- 🌐 **Web Interface**: Upload or paste code and generate docs instantly.
- 🌙 **Dark Mode Toggle**: Developer-friendly interface.
- 📋 **One-Click Copy**: Easily copy generated code.

---

## ⚙️ Tech Stack

### Backend:
- `Python`, `FastAPI`, `Uvicorn`
- `Trae IDE` + GPT-4 Agent (`code_analyzer`)

### Frontend:
- `HTML`, `CSS`, `JavaScript`

### Deployment:
- `Vercel` (with `vercel.json` for routing)

## 🗂 Project Structure
autodoc-pro/
├── api/
│ └── main.py # FastAPI backend
├── public/
│ ├── index.html # UI
│ ├── style.css
│ └── script.js
├── agent_config/
│ └── code_analyzer.agent.json
├── output_docs/
│ └── sample_with_docstrings.py
├── requirements.txt
└── vercel.json

---




---

## 🧠 How It Works

1. Paste raw Python code in the UI.
2. The Trae `code_analyzer` agent generates summaries.
3. Backend formats code + summaries into proper docstrings.
4. User can copy or download updated code.

---

## 📦 Installation (Local)

```bash
git clone https://github.com/Umer2000/autodoc-pro.git
cd autodoc-pro
pip install -r requirements.txt
uvicorn api.main:app --reload

vercel --prod
👨‍💻 Author
Team: Code Craftors



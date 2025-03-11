# AI-Powered Search & Recommendation System

## 📌 Project Overview
This project is an **AI-powered search and recommendation system** that enables users to search for technical documentation efficiently. It leverages **Elasticsearch** for indexing and searching, **AI models** for ranking results, and a **React frontend** for an interactive user experience.

## 🚀 Features
- **Full-Text Search**: Uses Elasticsearch for fast document retrieval.
- **AI-Powered Ranking**: Enhances search relevance with NLP models.
- **Metadata Filtering**: Allows filtering by topic, programming language, and difficulty.
- **User Bookmarks**: Save frequently accessed documents.
- **Auto-Tagging**: Uses NLP to categorize documentation.

## 🏗 Tech Stack
### **Backend**
- **Node.js** + **Express.js** (API & server logic)
- **Elasticsearch** (Search Engine)
- **PostgreSQL** (Metadata storage)

### **Frontend**
- **React.js** (UI Framework)
- **Axios** (API communication)

### **Cloud & DevOps**
- **Docker** (Containerization)
- **GCP/AWS** (Optional deployment)

## 🔧 Installation & Setup
### **1️⃣ Install Dependencies**
#### **Backend**
```bash
cd backend
npm install
```
#### **Frontend**
```bash
cd frontend
npm install
```

### **2️⃣ Start Elasticsearch**
Ensure you have Docker installed, then run:
```bash
docker run -p 9200:9200 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.10.1
```

### **3️⃣ Ingest Sample Data**
```bash
cd backend
node ingest.js
```

### **4️⃣ Start the Backend Server**
```bash
node index.js
```

### **5️⃣ Start the Frontend UI**
```bash
cd frontend
npm start
```

## 📌 API Endpoints
### **Search API**
```
GET /search?query=your_search_term
```
Response Example:
```json
{
  "results": [
    {
      "title": "JavaScript Guide",
      "content": "JavaScript is a versatile language used for web development.",
      "score": 1.2
    }
  ]
}
```

## 🛠 Future Improvements
- ✅ AI-based ranking using OpenAI API (GPT/BERT models)
- ✅ Deploy backend on **Cloud Run (GCP) or AWS Lambda**
- ✅ Enhance UI with **Tailwind CSS**
- ✅ Add **voice-based search** feature

## 📜 License
This project is open-source and available under the **MIT License**.

---
**🔗 Connect with Me**
- [GitHub](https://github.com/SanjayGorurUT)
- [Portfolio](https://www.sanjaygorur.com)

# Internet-Speed-Testing-App-MERN
MERN PROJECT: Showing Internet speed , IP addrees and current location

# 🌐 Internet Speed Testing App (MERN)

A full-stack **MERN** (MongoDB, Express.js, React.js, Node.js) application that allows users to test their internet download/upload speed, view their **public IP address**, and detect their **current location** using browser and network APIs.

---

## 📌 Features

- ⚡ Real-time internet speed testing (download & upload)
- 🌍 Get user's public **IP address**
- 📍 Get user's **current geographic location**
- 📊 Sleek and responsive UI built with React
- 🌐 Backend API to fetch network data
- 🧾 Optional logging to database (MongoDB)

---

## 🛠️ Tech Stack

- **Frontend**: React.js, JavaScript, Axios, HTML/CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (Optional – for logging results)  
- **Other Tools**: 
  - `ipify` API or `ipapi` for public IP  
  - `navigator.geolocation` for location  
  - `speedtest-net` or custom speed test logic using `fetch` or sockets

---

## 🎯 How It Works

1. The frontend React app fetches:
   - Current IP address using external API
   - Location using HTML5 Geolocation
   - Measures download/upload speed via data packet transfer

2. Backend Express API optionally stores the data in MongoDB for analysis.

---

## 📦 Installation & Usage

# 1. Clone the repository
https://github.com/noormalik33/Internet-Speed-Testing-App-MERN.git
cd Internet-Speed-Testing-App-MERN

# 2. Setup backend
cd backend
npm install
npm start

# 3. Setup frontend
cd ../frontend
npm install
npm start



## 👩‍💻 Team Members

**Noor Malik**  
📍 Islamabad, Pakistan  
📧 noormalik56500@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/noormalik56500/)

 **Ghulam Qadir**  
  📍 Rawalpindi, Pakistan  
  📧 [LinkedIn](https://www.linkedin.com/in/ghulam-qadir-07a982365/)



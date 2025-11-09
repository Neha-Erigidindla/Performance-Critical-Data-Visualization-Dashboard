## 🌐 Performance-Critical Data Visualization Dashboard

**Flam Company Assignment**

---

### 📖 Overview

This project is developed as part of the **Flam Company Frontend Assignment**.
It is a **performance-focused, interactive data visualization dashboard** built using **Next.js**, **React**, and **Tailwind CSS**.
The goal was to create a visually appealing and technically optimized dashboard that demonstrates strong frontend engineering and data visualization skills.

---

### 🚀 Key Highlights

* **Performance-Critical Visualization:**
  Designed for handling and rendering high-frequency data points efficiently.

* **Interactive Charts:**
  Includes multiple visualization types like **scatter plots**, **line charts**, and **heatmaps** for deeper insights.

* **Custom Performance Monitor:**
  Built-in FPS and memory tracking to reflect system performance during data rendering.

* **Minimal & Elegant UI:**
  A futuristic **lavender-accented** dark theme with clean typography for a professional visual experience.

* **Highly Modular Architecture:**
  Each chart, UI control, and visualization is developed as a reusable and independent React component.

---

### 🧠 Core Technologies

| Stack            | Technology Used               |
| ---------------- | ----------------------------- |
| Framework        | **Next.js (App Router)**      |
| Library          | **React.js**                  |
| Styling          | **Tailwind CSS**              |
| Charting         | **Recharts / D3.js (custom)** |
| State Management | **Context API / Zustand**     |
| Language         | **TypeScript**                |

---

### 🧩 Project Structure

```
/flam-dashboard
├── app/
│   ├── page.tsx
│   ├── layout.tsx
├── components/
│   ├── charts/
│   │   ├── ScatterPlot.tsx
│   │   ├── LineChart.tsx
│   │   ├── Heatmap.tsx
│   │   └── BarChart.tsx
│   ├── controls/
│   │   ├── FilterPanel.tsx
│   │   └── TimeRangeSelector.tsx
│   └── ui/
│       ├── PerformanceMonitor.tsx
│       └── ThemeToggle.tsx
├── hooks/
│   └── usePerformanceMonitor.ts
├── styles/
│   └── globals.css
└── package.json
```

---

### ⚙️ Getting Started

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/flam-dashboard.git
```

#### 2️⃣ Navigate & Install

```bash
cd flam-dashboard
npm install
```

#### 3️⃣ Run Locally

```bash
npm run dev
```

Then open the dashboard at:
👉 **[http://localhost:3000/dashboard](http://localhost:3000/dashboard)**

---

### 🎨 Customization

* Modify colors in `globals.css` or Tailwind config for new themes.
* Connect real APIs or datasets to charts for live visualization.
* Update performance thresholds in `usePerformanceMonitor.ts`.

---

### 💡 Future Enhancements

* Real-time WebSocket data integration
* Role-based dashboard views
* Export analytics (CSV/PDF)
* AI-based anomaly detection system

---

### 👩‍💻 Developed By

**NEHA ERIGIDINDLA**
🎯 **Frontend Developer — Flam Assignment**
💻 Passionate about building interactive, data-driven dashboards with smooth UX and performance-focused design.

---

### 🧾 License

This project is developed for **Flam’s Frontend Assignment** and is not intended for commercial use outside this scope.


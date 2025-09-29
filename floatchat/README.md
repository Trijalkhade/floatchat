# FloatChat – Next.js 14 + Gemini AI + Plotly

This repo is a **ready-to-deploy** ocean-data chatbot dashboard.

## Quickstart (local)
```bash
pnpm i        # or npm install
pm run dev   # http://localhost:3000
```

## 1-click Deploy on Vercel
1. Push this code to GitHub.
2. Go to https://vercel.com/new and **Import Project**.
3. Framework preset: **Next.js** (auto-detected).
4. Add an environment variable:
   • `GEMINI_API_KEY` → *your key from Google AI Studio*
5. Hit **Deploy** – build succeeds, URL appears e.g. `https://floatchat.vercel.app`.

### Production links
After deploy, you’ll have:
* **Landing**   `https://<your-domain>.vercel.app/`
* **Dashboard** `https://<your-domain>.vercel.app/dashboard`
* **Chat API**  `https://<your-domain>.vercel.app/api/chat`

## Updating Plotly maps
Replace `/public/visualization.html` and `/public/Real_time_map.html` with new exports from your notebooks, then commit & push – Vercel auto-deploys.

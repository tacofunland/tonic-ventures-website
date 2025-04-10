# General Instructions
Design a visually stunning and professional landing page for a parent company called Tonic Ventures. The design should reflect a modern, sustainable, and clean aesthetic. Tonic Ventures is a non-operational umbrella company that owns two sister companies:

Fenyx – helps companies easily get rid of used office furniture.

Tonic Spaces – enables companies to buy sustainable secondhand office furniture.

The landing page should:

Prominently display the Tonic Ventures logo at the top (use placeholder if necessary).

Feature a clear, central headline:
"Building the leading platform for sustainable office transformations in Europe."

Include two distinct and elegant buttons or call-to-action cards that guide visitors to:

Fenyx

Tonic Spaces

Maintain visual harmony with minimalist layout, plenty of white space, soft natural colors, and subtle animations or transitions (if applicable).

The page should look like a well-crafted intro to the ecosystem, giving the sense of vision and cohesion between the two brands without overwhelming the user with content.

Ensure responsiveness and visual appeal across devices.

Please generate a full-page mockup (or code structure if applicable) that matches this vision.

# 1. Project Setup ✅
## 1.1 Create a GitHub repo called `tonic-ventures` ✅
## 1.2 Enable GitHub Pages (source: `main` branch, root folder) ✅

# 2. Domain Setup
## 2.1 In Squarespace DNS settings, point your domain (`tonic-ventures.com`) to GitHub Pages using these IPs:
A @ 185.199.108.153
A @ 185.199.109.153
A @ 185.199.110.153
A @ 185.199.111.153
CNAME www <your-github-username>.github.io

## 2.2 Add a `CNAME` file in the repo with: ✅
www.tonic-ventures.com

# 3. Design & Content ✅
## 3.1 Style ✅
* Clean, modern, sustainable vibe
* Soft natural colors, white space, minimal layout
* TailwindCSS for all styling
* Optional: fade-in or subtle hover effects

## 3.2 Layout (one full-page scroll) ✅
* **Top:** Tonic Ventures logo (placeholder okay)
* **Headline:**
"Building the leading platform for sustainable office transformations in Europe."
* **Two CTA cards/buttons:**
   * **Fenyx** – "Make used office furniture disappear."
   * **Tonic Spaces** – "Buy beautiful, sustainable secondhand furniture."
* Each card links to a placeholder or future page

## 3.3 Responsiveness ✅
* Mobile-first, clean on tablet and desktop too

# 4. Tech ✅
## 4.1 Stack ✅
* HTML + TailwindCSS
* No backend needed
* Optional: a touch of JS for transitions

## 4.2 File structure ✅
/tonic-ventures/
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── src/
│   └── styles.css
├── vite.config.js
└── CNAME

# 5. Launch
## 5.1 Push code to GitHub
## 5.2 Confirm GitHub Pages deployment
## 5.3 Test domain `tonic-ventures.com` is live
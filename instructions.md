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

# 1. Project Setup ✅
## 1.1 Repository Structure
- `main` branch: Contains source code and configuration files
- `gh-pages` branch: Contains built files, automatically managed by gh-pages package

## 1.2 Development Setup
```bash
# Clone the repository
git clone https://github.com/tacofunland/tonic-ventures-website.git
cd tonic-ventures-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build and deploy
npm run deploy
```

# 2. Domain Setup
## 2.1 DNS Configuration
In Squarespace DNS settings, add these records:

A Records (for apex domain):
```
@ -> 185.199.108.153
@ -> 185.199.109.153
@ -> 185.199.110.153
@ -> 185.199.111.153
```

CNAME Record:
```
www -> tacofunland.github.io
```

## 2.2 GitHub Pages Configuration
1. Go to repository Settings > Pages
2. Set source to `gh-pages` branch
3. Enter `www.tonic-ventures.com` as custom domain
4. Enable "Enforce HTTPS"

# 3. Design & Content ✅
## 3.1 Style ✅
* Clean, modern, sustainable vibe
* Soft natural colors, white space, minimal layout
* TailwindCSS for all styling
* Hover effects and transitions for interactivity

## 3.2 Layout ✅
* **Top:** Tonic Ventures logo
* **Headline:** "Building the leading platform for sustainable office transformations in Europe."
* **Two CTA cards:**
   * **Fenyx** – "Make used office furniture disappear."
   * **Tonic Spaces** – "Buy beautiful, sustainable secondhand furniture."

## 3.3 Responsiveness ✅
* Mobile-first design
* Responsive on all devices
* Smooth transitions

# 4. Tech Stack ✅
## 4.1 Technologies
* Vite for build tool
* TailwindCSS for styling
* GitHub Pages for hosting

## 4.2 File Structure
```
/tonic-ventures-website/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── public/
│   └── CNAME
└── src/
    └── styles.css
```

# 5. Deployment
## 5.1 Development Workflow
1. Make changes to files
2. Test locally with `npm run dev`
3. Commit and push to `main` branch
4. Deploy with `npm run deploy`

## 5.2 Verify Deployment
1. Check GitHub Pages settings
2. Verify DNS propagation
3. Test site at https://www.tonic-ventures.com
4. Ensure HTTPS is working

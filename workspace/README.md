# Developer Portfolio - Quick Start Guide

## 🚀 Running the Projects

### Sanity Studio (CMS)

```bash
cd workspace/studio
npm run dev
```

Access: http://localhost:3333

### Next.js Frontend  

```bash
cd workspace/web
npm run dev
```

Access: http://localhost:3000

---

## 📝 Adding Content

### 1. Profile (Hero Section)
- Go to "Profile" in Sanity Studio
- Add your name, professional title, and bio
- Upload a profile image
- Set CTA button text (e.g., "Contact me") and link (e.g., "#contact")

### 2. About Section
- Go to "About" in Sanity Studio
- Add section title (e.g., "About Me")
- Write your extended bio using the rich text editor
- Add years of experience

### 3. Projects
**Projects work like blog posts** - easy to create and edit!

- Click "+" to create a new Project
- Fill in basic info:
  - Title and summary
  - Upload thumbnail image
  - Add technology tags
- **Write detailed content** using the rich text editor:
  - Add headings, paragraphs, lists
  - Insert images throughout the content
  - Embed code snippets
  - Add links
- Add project URL and/or GitHub URL
- Toggle "Featured" to show on homepage
- Set display order

### 4. Skills
- Click "+" to create a new Skill
- Enter skill name
- Upload icon/logo (e.g., download from [DevIcons](https://devicons.github.io/devicon/))
- Select category
- Rate proficiency (1-5)

### 5. Social Links
- Click "+" to create a new Social Link
- Select platform (GitHub, LinkedIn, etc.)
- Enter your profile URL

### 6. Site Settings
- Configure site title and description
- Add your contact email
- Upload logo (optional)

---

## 🎨 Customizing Styles

All styles are in `/workspace/web/src/styles/`:

### Change Colors

Edit `_variables.scss`:
```scss
$primary: #6366f1;  // Change this to your brand color
```

### Adjust Breakpoints

Edit `_variables.scss`:
```scss
$breakpoint-tablet: 768px;
$breakpoint-desktop: 1024px;
$breakpoint-desktop-wide: 1440px;
```

### Modify Typography

Edit `_variables.scss`:
```scss
$font-family-base: /* Your preferred font stack */
```

---

## 🔧 Troubleshooting

### Images not loading
Make sure you've added content in Sanity Studio first!

### PresentationTool not working
1. Ensure Next.js dev server is running on port 3000
2. Ensure Sanity Studio is running on port 3333
3. Check that both services are accessible

### Build errors
Run `npm run build` in the web directory to check for TypeScript errors.

---

## 📦 Deployment  

### Deploy Sanity Studio

```bash
cd workspace/studio
npm run deploy
```

### Deploy Next.js (Vercel)

```bash
cd workspace/web
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

**Environment Variables for Production:**
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

---

## 🎯 Key Features

- ✅ Mobile-first responsive design
- ✅ Blog-style project content editing
- ✅ Live preview with PresentationTool
- ✅ SEO-optimized
- ✅ TypeScript type safety
- ✅ SCSS modular styling
- ✅ ISR (60s revalidation)

---

## 📚 Learn More

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [SCSS Guide](https://sass-lang.com/guide)

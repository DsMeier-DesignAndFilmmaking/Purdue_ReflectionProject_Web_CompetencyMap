# Interactive Competency Map — CMS Embed Version

## Description
A self-contained, accessible, and responsive web infographic designed for embedding in WordPress or Cascade CMS environments. The experience highlights core learning competencies as interactive nodes with motion-enhanced details.

## Usage
- Edit competencies in `src/data/competencies.ts` to tailor messages and positioning.
- Run `npm install` followed by `npm run dev` for local development.
- Build distributable assets with `npm run build`.
- Upload the contents of the `/dist` folder to your web host or CMS assets directory.
- Embed the experience via an `<iframe>` pointing to `embed.html`, or include the compiled JS/CSS inline.

### WordPress Embed
```
<iframe src="https://yourdomain.edu/competency-map/embed.html" width="100%" height="650" style="border:none;border-radius:12px;overflow:hidden;"></iframe>
```

### Cascade CMS Embed
```
<iframe src="https://assets.university.edu/competency-map/embed.html" width="100%" height="650" style="border:none;"></iframe>
```

## Visual Goals
- Modern academic aesthetic with gold, warm gray, deep black, and accent blue color palette.
- Smooth Framer Motion animations for hover, focus, and panel transitions.
- Mobile-responsive layout that preserves readability and interaction cues.
- Accessible interactions with keyboard focus states, aria attributes, and high-contrast typography.

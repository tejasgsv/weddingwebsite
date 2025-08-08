# Wedding Invitation Website - Chimay & Priyanka

A beautiful, responsive wedding invitation website with Indian wedding theme colors and modern design.

## 🎨 Features

- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Indian Wedding Theme**: Elegant gold, cream, pastel pink, and soft green colors
- **Interactive Elements**: 
  - Countdown timer to wedding date
  - Auto-playing photo gallery with manual controls
  - Background music with toggle
  - Smooth scroll animations
  - RSVP form
- **Bilingual Support**: English and Gujarati text toggle
- **Modern Design**: Clean typography, smooth animations, and professional layout

## 📁 File Structure

```
wedding/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── config.js           # Editable content configuration
├── README.md           # This file
├── images/
│   ├── hero-couple.jpg # Main hero background image
│   └── gallery/        # Pre-wedding photo gallery
│       ├── photo1.jpg
│       ├── photo2.jpg
│       └── ... (up to photo15.jpg)
└── audio/
    └── wedding-music.mp3 # Background music file
```

## ✏️ How to Customize

### 1. Edit Content (config.js)
All text content, dates, and file paths are stored in `config.js`. Simply edit this file to update:
- Couple names
- Love story text
- Event dates and times
- Venue information
- Contact details
- Image file paths

### 2. Replace Images
- **Hero Image**: Replace `images/hero-couple.jpg` with your couple photo
- **Gallery Photos**: Add 10-15 high-quality photos in `images/gallery/` folder
- **Naming**: Use `photo1.jpg`, `photo2.jpg`, etc., or update paths in `config.js`

### 3. Add Background Music
- Place your wedding music file in `audio/wedding-music.mp3`
- Supported formats: MP3, WAV, OGG
- Recommended: Instrumental romantic music, 3-5 minutes

### 4. Update Colors (Optional)
Edit CSS variables in `styles.css`:
```css
:root {
    --gold: #D4AF37;
    --cream: #FFF8DC;
    --pastel-pink: #F8BBD9;
    --soft-green: #90EE90;
}
```

## 🚀 Deployment

### Option 1: Simple Hosting
1. Upload all files to any web hosting service
2. Ensure folder structure is maintained
3. Access via your domain

### Option 2: GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Access via `https://yourusername.github.io/repository-name`

### Option 3: Netlify (Recommended)
1. Drag and drop the entire folder to Netlify
2. Get instant HTTPS domain
3. Easy updates by dragging new files

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Tips

1. **Optimize Images**: Compress photos to 800px width for web
2. **Audio File**: Keep music file under 5MB for faster loading
3. **Hosting**: Use CDN-enabled hosting for better global performance

## 🔧 Technical Details

- **No Framework Dependencies**: Pure HTML, CSS, and JavaScript
- **Font Loading**: Google Fonts (Dancing Script, Playfair Display, Open Sans)
- **Icons**: Font Awesome 6.0
- **Responsive Breakpoints**: 768px (tablet), 480px (mobile)
- **SEO Optimized**: Meta tags, semantic HTML structure

## 📞 Support

For customization help or technical issues:
1. Check browser console for error messages
2. Ensure all file paths in `config.js` are correct
3. Verify image and audio files are properly uploaded

## 🎉 Launch Checklist

- [ ] Update couple names in `config.js`
- [ ] Add hero couple photo (`images/hero-couple.jpg`)
- [ ] Upload 10-15 gallery photos
- [ ] Add background music file
- [ ] Update all event details and dates
- [ ] Test on mobile device
- [ ] Test RSVP form
- [ ] Verify countdown timer
- [ ] Check music toggle functionality
- [ ] Test language toggle
- [ ] Deploy to hosting platform

---

**Made with ❤️ for Chimay & Priyanka's Special Day**
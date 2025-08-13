# EyeKhel - Blue Light Blocking Glasses E-commerce Website

A fast, conversion-focused e-commerce website for blue-light-blocking glasses, designed specifically for Cambodia's digital professionals. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation & Development

1. **Clone and install dependencies:**
```bash
git clone <repository-url>
cd eyekhel-website
pnpm install
```

2. **Set up environment variables (optional for email functionality):**
```bash
cp .env.example .env.local
```
Edit `.env.local` with your SMTP settings (see Environment Variables section below).

3. **Start development server:**
```bash
pnpm dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 🌍 Deployment

### Vercel (Recommended)
1. Push your code to a Git repository
2. Connect your repo to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

### Manual Deployment
1. Run `pnpm build`
2. Upload the `.next` folder and other necessary files to your server
3. Set environment variables
4. Run `pnpm start`

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory:

```bash
# SMTP Email Configuration (Optional)
# Without these, the site works but emails won't be sent
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Analytics (Optional)
PLAUSIBLE_DOMAIN=yourdomain.com

# Site URL (for sitemap and SEO)
NEXT_PUBLIC_SITE_URL=https://eyekhel.com
```

### Email Setup Notes:
- **Gmail**: Use an App Password, not your regular password
- **Outlook**: Use regular credentials with smtp.office365.com
- **Custom SMTP**: Use your provider's settings
- **No Email**: Site works perfectly without email - orders are logged and displayed to user

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── (main)/            # Main site pages
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # Basic UI components
│   ├── layout/           # Header, footer, navigation
│   ├── sections/         # Homepage sections
│   ├── shop/             # Shop-specific components
│   └── product/          # Product page components
├── config/               # Configuration files
│   └── products.json     # Product catalog
├── i18n/                 # Internationalization
│   ├── en.json           # English translations
│   └── km.json           # Khmer translations
├── lib/                  # Utilities and helpers
│   ├── cart-store.ts     # Shopping cart state management
│   ├── i18n.ts           # Internationalization setup
│   ├── products.ts       # Product data management
│   ├── validation.ts     # Form validation schemas
│   └── utils.ts          # General utilities
└── public/               # Static assets
    └── images/           # Product images and assets
```

## 🛍️ Features

### Core Functionality
- ✅ Responsive design (360px to 1440px+)
- ✅ English/Khmer language toggle
- ✅ Product catalog with filtering
- ✅ Shopping cart with persistence
- ✅ Order processing (no payment gateway)
- ✅ Email notifications (optional)
- ✅ SEO optimization

### Pages
- **Homepage**: Hero, benefits, products, reviews, FAQ preview
- **Shop**: Product grid with color/shape filtering
- **Product Detail**: Gallery, specifications, add to cart
- **Cart**: Edit items, quantity, proceed to checkout
- **Checkout**: Contact info, shipping address, order placement
- **Thank You**: Order confirmation and next steps
- **Benefits**: Detailed benefits explanation
- **Science**: Research and studies behind blue light
- **Reviews**: Customer testimonials and ratings
- **FAQ**: Comprehensive question/answer sections
- **Contact**: Contact form and business information

## 🛒 How Orders Work

1. **Customer places order** → Order data saved (logged to console in development)
2. **Email sent** (if SMTP configured) → Customer and internal notification
3. **Thank you page** → Order confirmation with order number
4. **Manual follow-up** → Business contacts customer within 24 hours

## 🎨 Customization Guide

### 1. Brand Name & Logo
- **Logo**: Replace logo elements in `components/layout/header.tsx` and `components/layout/footer.tsx`
- **Brand Name**: Search and replace "EyeKhel" throughout the codebase
- **Colors**: Update primary colors in `tailwind.config.js`

### 2. Product Catalog
Edit `config/products.json`:

```json
{
  "lens": {
    "name": "Your Lens Name",
    "features": ["Feature 1", "Feature 2"]
  },
  "frames": [
    {
      "id": "unique-id",
      "name": "Frame Name", 
      "price": 49,
      "originalPrice": 79,
      "description": "Frame description",
      "colors": ["Black"],
      "images": ["/images/frame-1.jpg"],
      "inStock": true,
      "featured": true
    }
  ]
}
```

### 3. Product Images
Place images in `public/images/frames/`:
- Use high-quality JPG/PNG images
- Recommended size: 800x800px minimum
- Use descriptive filenames
- Update image paths in `products.json`

### 4. Language Content
- **English**: Edit `i18n/en.json`
- **Khmer**: Edit `i18n/km.json`
- Add new languages by creating new JSON files and updating `lib/i18n.ts`

### 5. Pricing & Currency
- **Format**: Update `formatPrice` function in `lib/utils.ts`
- **Prices**: Edit product prices in `config/products.json`
- **Currency symbol**: Currently set to USD ($)

### 6. Contact Information
Update contact details in:
- `i18n/en.json` and `i18n/km.json` (footer, contact page)
- `app/contact/page.tsx` (contact methods)
- `app/thank-you/page.tsx` (support info)

### 7. Cambodia-Specific Features
- **Provinces**: Update `cambodianProvinces` in `lib/validation.ts`
- **Shipping zones**: Modify shipping messages in translations
- **Local testimonials**: Update reviews in `app/reviews/page.tsx`

## 🔧 Technical Details

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: Zustand (cart)
- **Forms**: React Hook Form + Zod validation
- **Email**: Nodemailer
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

### Key Libraries
```json
{
  "next": "14.2.4",
  "react": "^18",
  "typescript": "^5",
  "tailwindcss": "^3.4.0",
  "zustand": "^4.5.2",
  "react-hook-form": "^7.52.0",
  "zod": "^3.23.8",
  "nodemailer": "^6.9.13"
}
```

### Performance Features
- Next.js Image Optimization
- Static site generation for product pages
- Client-side cart persistence
- Lazy loading and prefetching
- Optimized fonts and icons

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Common Issues

**1. Email not sending**
- Check SMTP environment variables
- Verify SMTP credentials
- Check firewall/hosting provider restrictions
- Orders still work without email

**2. Images not loading**
- Ensure images are in `public/images/` directory
- Check image paths in `products.json`
- Verify image file formats (jpg, png, webp)

**3. Build errors**
- Run `pnpm install` to ensure all dependencies
- Check TypeScript errors with `pnpm type-check`
- Clear `.next` folder and rebuild

**4. Language switching not working**
- Check localStorage is enabled in browser
- Verify translation files exist
- Ensure i18n provider wraps the app

## 📈 Analytics & Monitoring

### Plausible Analytics (Optional)
Add to `.env.local`:
```bash
PLAUSIBLE_DOMAIN=yourdomain.com
```

The script will only load if this environment variable is set.

### Performance Monitoring
- Use Vercel Analytics (built-in for Vercel deployments)
- Monitor Core Web Vitals
- Check Lighthouse scores regularly

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Run tests: `pnpm type-check`
5. Commit changes: `git commit -m 'Add feature'`
6. Push to branch: `git push origin feature-name`
7. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For technical support or questions:
- Create an issue in the GitHub repository
- Check the troubleshooting section above
- Review the Next.js and Tailwind CSS documentation

---

**Built with ❤️ for Cambodia's digital professionals**
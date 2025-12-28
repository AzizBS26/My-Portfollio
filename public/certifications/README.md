# Certifications Folder

Store all certification images here. They will be referenced in the certifications section.

## How to Add Certifications:

1. **Upload Images**: Place your certification images (PNG, JPG, WebP) in this folder
   - Example: `google-cloud.jpg`, `aws-certified.png`, etc.

2. **Update `src/app/page.tsx`**: Add entries to the `CERTIFICATIONS` array
   ```tsx
   const CERTIFICATIONS = [
     {
       name: 'AWS Certified Cloud Practitioner',
       issuer: 'Amazon Web Services',
       date: '2024',
       image: '/certifications/aws-certified.jpg',
       link: 'https://credential-url.com'  // Optional
     },
     {
       name: 'Google Cloud Engineer',
       issuer: 'Google Cloud',
       date: '2024',
       image: '/certifications/google-cloud.jpg'
     }
   ]
   ```

3. **Refresh the Site**: The certifications section will auto-appear once CERTIFICATIONS array has items

## Image Guidelines:
- Format: PNG, JPG, or WebP
- Size: ~500x700px (portrait) for certificates
- Quality: 72-150 DPI sufficient
- File size: Keep under 500KB for best performance

## From Your CV:
Based on your CV PDF, I'm ready to add these certifications once you provide the images:
- Any certifications listed in your Mohamed_Aziz_BenSlima_cert+cv+pdf file

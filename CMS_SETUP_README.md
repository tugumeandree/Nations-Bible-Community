# Netlify CMS Setup for Nations Bible Community

## What's Been Set Up

✅ **Netlify CMS Configuration** - A user-friendly admin interface for managing blog posts
✅ **First Blog Post** - "BOLDNESS FOR NOTABLE MIRACLES AND CONVERSIONS" by Andrew Tugume
✅ **Blog Page** - A beautiful listing page to display all your blog posts
✅ **Blog Navigation** - Added to all pages in your site
✅ **Responsive Blog Styling** - Mobile-first design matching your site aesthetic

## File Structure

```
/admin
  ├── config.yml          # CMS configuration
  └── index.html          # CMS admin interface

/blog
  ├── posts/              # Markdown blog posts
  │   └── 2026-01-11-boldness-for-notable-miracles-and-conversions.md
  └── boldness-for-notable-miracles-and-conversions.html

/blog.html                # Blog listing page
```

## How to Access the CMS (After Deploying to Netlify)

1. **Deploy your site to Netlify** (push to GitHub and connect to Netlify)

2. **Enable Netlify Identity**
   - Go to your Netlify dashboard
   - Click on "Identity" in the top navigation
   - Click "Enable Identity"

3. **Enable Git Gateway**
   - In Identity settings, scroll to "Services"
   - Click "Enable Git Gateway"

4. **Invite yourself as a user**
   - Click "Invite users"
   - Enter your email address
   - You'll receive an invitation email

5. **Access the CMS**
   - Visit: `https://your-site-name.netlify.app/admin`
   - Log in with your credentials
   - Start creating blog posts!

## How to Create New Blog Posts

### Option 1: Using the CMS (Recommended for weekly updates)

1. Go to `https://your-site-name.netlify.app/admin`
2. Click "New Blog" 
3. Fill in:
   - **Title**: Your blog post title
   - **Publish Date**: When you want it published
   - **Author**: Andrew Tugume (default)
   - **Excerpt**: A short summary (optional)
   - **Body**: Your full blog content (supports Markdown formatting)
4. Click "Publish"
5. Your blog post will automatically appear on the blog page!

### Option 2: Manual Creation (For developers)

1. Create a new Markdown file in `/blog/posts/`
2. Name it: `YYYY-MM-DD-your-post-slug.md`
3. Add front matter:
   ```markdown
   ---
   title: "Your Post Title"
   date: 2026-01-11T09:00:00.000Z
   author: Andrew Tugume
   excerpt: "Short summary"
   ---
   
   Your blog content here...
   ```
4. Create a matching HTML file in `/blog/` folder
5. Update `/blog.html` to add a link to your new post

## Markdown Formatting Tips

- **Bold text**: `**bold**` or `__bold__`
- **Italic text**: `*italic*` or `_italic_`
- **Headings**: `## Heading 2`, `### Heading 3`
- **Lists**: Use `-` or `*` for bullet points
- **Links**: `[Link text](https://url.com)`
- **Scripture quotes**: Wrap in `> ` for blockquotes

## Current Blog Post

Your first blog post "BOLDNESS FOR NOTABLE MIRACLES AND CONVERSIONS" is live! 
- View it at: `/blog/boldness-for-notable-miracles-and-conversions.html`
- Listed on: `/blog.html`

## Next Steps

1. **Push to GitHub**: Commit all these changes
2. **Deploy to Netlify**: Connect your repo to Netlify
3. **Enable Identity**: Follow steps above
4. **Start Blogging**: Create your weekly devotionals!

## Support

For any questions about using the CMS, refer to:
- [Netlify CMS Documentation](https://www.netlifycms.org/docs/)
- [Netlify Identity Documentation](https://docs.netlify.com/visitor-access/identity/)

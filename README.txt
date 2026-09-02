DMI ST JOSEPH GLOBAL SCHOOL — MEDIA CLUB WEBSITE
================================================

Files
-----
index.html       Home page
writings.html    Student writings library with search and category filters
article.html     Individual reading page with sharing
css/style.css    Light/charcoal/red modern responsive design
logo-transparent.png Supplied Media Club logo with transparent outer background
logo-mark.png      Cropped transparent logo mark used in the header
js/articles.js   Sample article data
js/main.js       Shared UI/card logic
js/writings.js   Writing library filters/search
js/article.js    Individual article rendering/sharing

HOW TO RUN
----------
1. Keep the folder structure exactly as supplied.
2. Open index.html in a browser.
3. For best results, use a simple local server when testing:
   - VS Code + Live Server, or
   - Python: python -m http.server
4. Replace the sample articles in js/articles.js with approved student submissions.

ADDING A NEW ARTICLE
--------------------
Copy an object inside the `articles` array in js/articles.js and change:
- id: unique URL-friendly value
- title
- category: Poetry / Article / Story / Opinion
- author
- grade
- date
- excerpt
- content: array of paragraphs/poem lines

IMPORTANT
---------
The supplied Media Club logo is used throughout the design, with its red/white/charcoal palette carried into the UI.

This is a front-end-only website. The article list is currently stored in
JavaScript, so adding/editing articles requires changing articles.js.

For a production website where students/admins can submit and manage articles
without editing code, add a backend/database and an admin dashboard later.


ADDING PICTURES TO ARTICLES
---------------------------
1. Put the image file inside the `images` folder.
   Example:
   images/the-last-bus.jpg

2. Open `js/articles.js`.

3. For the matching article, set:
   image: "images/the-last-bus.jpg",

4. The same image will automatically appear:
   - on the writing card
   - at the top of the full article page

Recommended image:
- JPG, PNG or WebP
- Landscape 16:9 or 3:2 works best
- Around 1600px wide is more than enough
- Keep filenames simple: no spaces or special characters

Example:
{
  id: "the-last-bus",
  title: "The Last Bus Home",
  category: "Story",
  image: "images/the-last-bus.jpg",
  ...
}

You can use photographs, student artwork, illustrations or a designed
cover image for each submission.

# Personal website!

This repo contains the source for my Jekyll-based [personal website][Home].

## Front-matter variables

Below is a list of the YAML variables that I am using within posts and pages:

- `bitlink: http://cridge.co/bL4h81A` to display a short permalink beside post
  metadata
- `category: category name (by Eden)` where the category will be displayed as
  "Category name (by Eden)" and will link to the custom index page
  `/category-name-by-eden`
- `comments: true` to create and display a Disqus thread for that post (it
  really is that simple!)
- `description: A summary string that will be folded and truncated to 160
  chars.` This is used for the page meta description visible in search engines,
  as well as for structured data. When omitted, an excerpt will be used (if
  available), or failing that the site description.
- `<!-- fold -->`  Not strictly front-matter, but used within the post body to
  delimit the excerpt. *When omitted, the whole post will be excerpted.*
- `navbar: true` to list a page in the navigation menu
- `tags: ["apples", "bananas", "GREEN_STAIRS", "who’s Tim?"]` where the tags
  will be displayed as "Apples, bananas, GREEN_STAIRS, who’s Tim?" and link to
  (respectively) `/tags/#apples`, `/tags/#bananas`, `/tags/#green-stairs`, and
  `/tags/#who-s-tim`
- `thumbnail: /content/jpg/my-cool-thumbnail.jpg` to set the post thumbnail for
  structured data / rich site snippets (and conceivably easy addition of
  thumbnails to index pages in the future)

## Data collection

The following is a list of data collection services used on the site which
should probably be mentioned in the privacy policy.

### Definitely should be in policy
- Adobe TypeKit
- CloudFlare
- DigitalOcean
- Disqus
- Google Analytics

### Probably should be in policy
- Bitly links

### Probably don’t need to be in policy
- Contact link

[Home]: https://ecridge.com

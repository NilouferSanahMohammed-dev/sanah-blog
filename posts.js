/**
 * Add, edit, or remove journal entries here. Each post needs:
 *   title    - shows in the list and at the top of the entry
 *   date     - any format you like, it's just displayed as text
 *   excerpt  - the one-line preview shown in the list
 *   body     - an array of paragraphs (each string becomes its own <p>)
 *
 * New posts can go anywhere in the array, the list keeps whatever
 * order you put them in, most recent first is the usual convention.
 */

const POSTS = [
  {
    title: "starting this little page",
    date: "today",
    excerpt: "why I finally made a corner of the internet that's just mine.",
    body: [
      "I've wanted a personal site for a while, somewhere that isn't an algorithm-fed feed, just a page that's entirely mine to shape.",
      "This is the first entry. Replace this whole post with something real, or leave it as a little marker of when this site started, up to you.",
      "To add a new entry, open posts.js and copy this object, then fill it in with your own title, date, and paragraphs.",
    ],
  },
  {
    title: "a good day recently",
    date: "a little while ago",
    excerpt: "nothing special happened, and that was kind of the point.",
    body: [
      "Some of the best entries are about ordinary days. Swap this in for something that actually happened to you, a walk, a meal, a conversation that stuck with you.",
      "Keep it short if you want. Not every post needs to be an essay.",
    ],
  },
];

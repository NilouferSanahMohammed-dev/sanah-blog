const postList = document.getElementById("postList");
const overlay = document.getElementById("postOverlay");
const closeBtn = document.getElementById("postClose");
const modalDate = document.getElementById("modalDate");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

function renderPosts() {
  postList.innerHTML = "";
  POSTS.forEach((post, index) => {
    const card = document.createElement("div");
    card.className = "post-card";
    card.innerHTML = `
      <div class="post-card-main">
        <p class="post-title">${post.title}</p>
        <p class="post-excerpt">${post.excerpt}</p>
      </div>
      <span class="post-date">${post.date}</span>
    `;
    card.addEventListener("click", () => openPost(index));
    postList.appendChild(card);
  });
}

function openPost(index) {
  const post = POSTS[index];
  modalDate.textContent = post.date;
  modalTitle.textContent = post.title;
  modalBody.innerHTML = post.body.map((para) => `<p>${para}</p>`).join("");
  overlay.classList.add("open");
}

function closePost() {
  overlay.classList.remove("open");
}

closeBtn.addEventListener("click", closePost);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closePost();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closePost();
});

renderPosts();

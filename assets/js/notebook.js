(() => {
  const list = document.getElementById("all-notes");
  if (!list) return;
  const notes = Array.from(list.querySelectorAll("[data-note]"));
  const search = document.getElementById("note-search");
  const sort = document.getElementById("note-sort");
  const buttons = Array.from(document.querySelectorAll("[data-topic]"));
  const parameters = new URLSearchParams(location.search);
  let topic = parameters.get("topic") || "";
  if (!buttons.some((button) => button.dataset.topic === topic)) topic = "";
  search.value = parameters.get("q") || "";
  sort.value = parameters.get("order") === "oldest" ? "oldest" : "newest";
  document.querySelector(".notebook-controls").hidden = false;
  document.querySelector(".topic-filters").hidden = false;

  function update() {
    const terms = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    let count = 0;
    notes.sort((a, b) => (Number(a.dataset.date) - Number(b.dataset.date)) * (sort.value === "oldest" ? 1 : -1));
    notes.forEach((note) => {
      const matchesTopic = !topic || JSON.parse(note.dataset.topics).includes(topic);
      const haystack = note.dataset.search.toLocaleLowerCase();
      note.hidden = !(matchesTopic && terms.every((term) => haystack.includes(term)));
      if (!note.hidden) count += 1;
      list.appendChild(note);
    });
    buttons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.topic === topic)));
    document.getElementById("note-count").textContent = `${count} ${count === 1 ? "note" : "notes"}`;
    document.getElementById("no-notes").hidden = count !== 0;
    const url = new URL(location.href);
    for (const [key, value] of [
      ["q", search.value.trim()],
      ["topic", topic],
      ["order", sort.value === "oldest" ? "oldest" : ""],
    ]) {
      if (value) url.searchParams.set(key, value);
      else url.searchParams.delete(key);
    }
    history.replaceState(null, "", url);
  }
  search.addEventListener("input", update);
  sort.addEventListener("change", update);
  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      topic = button.dataset.topic;
      update();
    })
  );
  document.getElementById("reset-notes").addEventListener("click", () => {
    topic = "";
    search.value = "";
    update();
    search.focus();
  });
  update();
})();

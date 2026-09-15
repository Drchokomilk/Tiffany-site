const landing = document.getElementById("landing");
const universe = document.getElementById("universe");
const enterBtn = document.getElementById("enterBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalNumber = document.getElementById("modalNumber");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const nextBtn = document.getElementById("nextBtn");
const finalScreen = document.getElementById("finalScreen");
const lastThing = document.getElementById("lastThing");

const content = {
  beginning: {
    number: "01",
    title: "THE BEGINNING",
    body: `Maybe this was never supposed to become anything.<br><br>
    A random conversation. A little curiosity. Two people discovering that they have more in common than expected.<br><br>
    <span style="color:#ffe45e">And somehow, here we are.</span>`
  },
  noticed: {
    number: "02",
    title: "THINGS I NOTICED",
    body: `There are little things you notice when you actually pay attention to someone.<br><br>
    The things you like. The things you say without thinking. The weird coincidences. The moments that make a conversation last longer than it was supposed to.<br><br>
    <span style="color:#ff58bf">Some of them stayed in my head.</span>`
  },
  frequency: {
    number: "03",
    title: "FREQUENCY",
    body: `Some people just have a strange way of matching your frequency.<br><br>
    Same jokes. Similar tastes. Conversations that don't feel forced. That feeling of realizing, "wait... you like that too?"<br><br>
    This section is intentionally unfinished. Maybe we'll add songs to it later.`
  },
  unknown: {
    number: "04",
    title: "THE UNKNOWN",
    body: `You weren't supposed to find this yet.<br><br>
    Honestly, I don't know where this story goes either.<br><br>
    And maybe that's the whole point.<br><br>
    <span style="color:#57e8ff">Some things are better discovered instead of planned.</span>`
  }
};

const order = ["beginning", "noticed", "frequency", "unknown"];
let currentIndex = 0;

enterBtn.addEventListener("click", () => {
  landing.classList.remove("active");
  universe.classList.add("active");
  window.scrollTo(0, 0);
});

document.querySelectorAll(".floating-object").forEach(obj => {
  obj.addEventListener("click", () => openModal(obj.dataset.modal));
});

document.getElementById("planetBtn").addEventListener("click", () => {
  openModal("unknown");
});

function openModal(key) {
  const item = content[key];
  currentIndex = order.indexOf(key);
  modalNumber.textContent = item.number;
  modalTitle.textContent = item.title;
  modalBody.innerHTML = item.body;
  nextBtn.textContent = currentIndex === order.length - 1 ? "THE END →" : "CONTINUE →";
  modal.classList.add("open");
}

function hideModal() {
  modal.classList.remove("open");
}

closeModal.addEventListener("click", hideModal);
document.querySelector(".modal-backdrop").addEventListener("click", hideModal);

nextBtn.addEventListener("click", () => {
  if (currentIndex < order.length - 1) {
    openModal(order[currentIndex + 1]);
  } else {
    hideModal();
    setTimeout(() => finalScreen.classList.add("show"), 450);
  }
});

lastThing.addEventListener("click", () => {
  finalScreen.innerHTML = `
    <div class="final-content">
      <div class="final-small">MESSAGE // T</div>
      <h2 style="font-size:clamp(32px,7vw,78px);line-height:1.05;max-width:800px;">
        I MADE THIS<br>
        <span>JUST FOR YOU.</span>
      </h2>
      <p style="max-width:550px;margin:0 auto 30px;color:rgba(255,255,255,.65);line-height:1.8;">
        This is only the first version.<br>
        The rest of the story is still being written.
      </p>
      <button id="restart">START AGAIN</button>
    </div>
  `;

  document.getElementById("restart").addEventListener("click", () => {
    finalScreen.classList.remove("show");
    universe.classList.remove("active");
    landing.classList.add("active");
  });
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    hideModal();
    finalScreen.classList.remove("show");
  }
});

// Subtle mouse parallax on desktop
window.addEventListener("pointermove", e => {
  if (window.innerWidth < 800) return;
  const x = (e.clientX / window.innerWidth - .5);
  const y = (e.clientY / window.innerHeight - .5);

  document.querySelector(".sky-copy")?.style.setProperty(
    "transform", `translate(${x * -10}px, ${y * -8}px)`
  );
  document.querySelector(".planet-wrap")?.style.setProperty(
    "transform", `translate(${x * 14}px, ${y * 12}px)`
  );
});

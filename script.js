const introScreen = document.getElementById('introScreen');
const enterButton = document.getElementById('enterButton');
if(enterButton && introScreen){
  enterButton.addEventListener('click',()=>{
    introScreen.classList.add('hide');
    setTimeout(()=>introScreen.remove(),950);
  });
}

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalEyebrow = document.getElementById('modalEyebrow');
const modalBody = document.getElementById('modalBody');

const content = {
  about: {
    eyebrow: '01 / THE BEGINNING',
    title: 'Supongo que todo empezó <i>sin que lo planeáramos.</i>',
    body: `<p>Al principio parecía una conversación cualquiera. Hablar, descubrir gustos, reírnos de cualquier cosa y dejar que el tiempo pasara.</p><p>Pero poco a poco empecé a notar que esperaba esas conversaciones. Que una notificación tuya podía cambiar completamente cómo se sentía el día.</p><p>Y eso me parece bonito porque no fue algo que tuve que forzar. Simplemente apareció. Una conexión inesperada que se fue sintiendo cada vez más natural.</p><p>Quizá por eso este universo empieza aquí: porque algunas de las mejores cosas comienzan sin avisar.</p>`
  },
  noticed: {
    eyebrow: '02 / THINGS I NOTICED',
    title: 'Son pequeñas cosas, <i>pero me quedo con ellas.</i>',
    body: `<p>Me gusta cómo una conversación contigo puede saltar de un tema a otro sin sentirse rara. Me gusta descubrir coincidencias y encontrar cosas que tenemos en común.</p><p>También me gusta tu manera de ser. No porque piense que tienes que ser perfecta, sino porque siento que puedes ser tú misma y eso ya hace que hablar contigo sea especial.</p><p>Y hay algo que quizá sea lo más importante: contigo no siento que tenga que convertir cada momento en algo enorme. A veces basta con estar hablando y ya.</p><p>Supongo que son esas cosas pequeñas las que terminan haciendo que alguien se vuelva importante.</p>`
  },
  frequency: {
    eyebrow: '03 / FREQUENCY',
    title: 'Algunas canciones <i>terminaron sonando diferente.</i>',
    body: `<p>Hay canciones que uno escucha una vez y ya. Y hay otras que, por alguna razón, empiezan a quedar asociadas con una persona.</p><p>Por eso está la sección de Frequency. No porque cada canción tenga una explicación exacta, sino porque cuando aparecen, inevitablemente pienso en ti.</p><p>Abajo puedes encontrar las canciones y abrirlas directamente en Spotify. Hay unas que ya me recuerdan a momentos concretos y otras que simplemente tienen esa sensación que me hace pensar en ti.</p><p>Y sí: <strong>Marco</strong> tenía que estar aquí. Algunas canciones no necesitan explicación; simplemente aparecen y se quedan.</p>`
  },
  unknown: {
    eyebrow: '04 / THE UNKNOWN',
    title: 'No sé qué viene después. <i>Y está bien.</i>',
    body: `<p>Ya no es exactamente lo desconocido de antes. Ahora existe un capítulo que sí conocemos: elegimos estar juntos. Y aun así queda muchísimo por descubrir.</p><p>Prefiero pensar que queda mucho por descubrir: más conversaciones, más canciones, más momentos inesperados y más recuerdos que todavía no existen.</p><p>Lo único que sí sé es que me alegra muchísimo haberte conocido. Ahora este pequeño universo no solo guarda el principio de todo; también guarda el momento en que nos convertimos oficialmente en nosotros.</p>`
  },
  final: {
    eyebrow: 'ONE LAST THING',
    title: 'Gracias por existir <i>en este pequeño universo.</i>',
    body: `<p>Hice todo esto porque quería darte algo que no fuera simplemente un mensaje más. Algo que pudieras recorrer, descubrir y volver a visitar cuando quisieras.</p><p>No hace falta que encuentres una respuesta perfecta después de verlo. Solo quería que supieras que alguien se tomó el tiempo de construir un pequeño lugar del internet pensando en ti.</p><p>Así que gracias por las conversaciones, por las risas, por las coincidencias y por haber aparecido de una forma tan inesperada.</p><p><strong>Me alegra haberte conocido.</strong> ♡</p>`
  }
};

function openModal(key){
  const item = content[key];
  if(!item) return;
  modalEyebrow.textContent = item.eyebrow;
  modalTitle.innerHTML = item.title;
  modalBody.innerHTML = item.body;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}
function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}

document.querySelectorAll('[data-open]').forEach(el=>el.addEventListener('click',()=>openModal(el.dataset.open)));

document.querySelectorAll('.memory-bubble[data-vessel]').forEach(el=>{
  el.addEventListener('click',()=>{
    const key=el.dataset.vessel;
    document.querySelectorAll('.memory-bubble').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.vessel-flow').forEach(v=>v.classList.remove('active'));
    el.classList.add('active');
    document.querySelectorAll(`.vessel-flow[data-vessel="${key}"]`).forEach(v=>v.classList.add('active'));
  });
});
document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape') closeModal()});

// Tiny parallax: the universe subtly reacts to pointer movement without moving the clickable moons too far.
const system = document.getElementById('orbitSystem');
if(system){
  system.addEventListener('pointermove', e=>{
    const r = system.getBoundingClientRect();
    const x = (e.clientX-r.left)/r.width-.5;
    const y = (e.clientY-r.top)/r.height-.5;
    system.style.transform = `translate(${x*8}px,${y*8}px)`;
  });
  system.addEventListener('pointerleave',()=>system.style.transform='');
}

// Highlight Frequency when it is opened from the orbit.
document.querySelector('[data-open="frequency"]')?.addEventListener('click',()=>{
  setTimeout(()=>document.getElementById('frequency')?.scrollIntoView({behavior:'smooth'}),180);
});

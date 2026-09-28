const content = {
  signal: {
    kicker: '01 / THE SIGNAL',
    title: 'Somewhere, something changed.',
    body: `
      <p>There are people you meet and then there are people who quietly change the atmosphere around you. I don't think either of us planned for this to become what it is. It just happened, one conversation at a time.</p>
      <p>At first it was little things: finding another reason to keep talking, realizing how easily the conversation flowed, remembering details without trying. None of them looked important on their own. Together, they became a signal.</p>
      <p class="quote">“Maybe the universe doesn't announce the important moments. Maybe it just makes you want to stay a little longer.”</p>
      <p>That's what this place is for. Not to explain everything, but to keep a few of those moments somewhere outside of time.</p>`
  },
  between: {
    kicker: '02 / BETWEEN US',
    title: 'The things that exist between words.',
    body: `
      <p>Some of my favorite parts aren't the huge moments. They're the pauses, the jokes that make no sense to anyone else, the way a simple conversation can suddenly turn into something I don't want to end.</p>
      <p>There is a strange kind of comfort in finding someone you can be completely normal around and still feel like the moment matters. I like that we don't have to make everything dramatic for it to be special.</p>
      <div class="timeline">
        <div class="timeline-item"><b>THE SMALL THINGS</b> Remembering details, sending something because it made you think of the other person, staying a little longer.</div>
        <div class="timeline-item"><b>THE UNEXPECTED</b> Plans changing, random conversations becoming memories, and ordinary days suddenly becoming the ones you remember.</div>
        <div class="timeline-item"><b>THE NOW</b> The part where we stopped wondering what this could be and started living it.</div>
      </div>`
  },
  little: {
    kicker: '03 / THE LITTLE THINGS',
    title: 'A collection of things I never want to forget.',
    body: `
      <p>This isn't a list of grand declarations. It's the opposite. It's the little things that would be easy to overlook if you weren't paying attention.</p>
      <p>The way a message can change the mood of an entire day. A look that lasts half a second longer than usual. Laughing at something completely stupid. Walking somewhere without really caring where you're going because the company is enough.</p>
      <p>Maybe that's what makes memories feel real: they don't arrive with a soundtrack or a warning. You only realize later that you were living one.</p>
      <p class="final-line">So I'm keeping this little corner of the universe for them. The moments that don't need to be huge to mean everything.</p>`
  },
  frequency: {
    kicker: '04 / FREQUENCY',
    title: 'Songs that remind me of you.',
    body: `
      <p>Not because every song has a hidden meaning. Some just carry a feeling, a color, a memory, or a version of a day that I want to keep.</p>
      <div class="songs">
        <div class="song"><div class="cover">B2</div><div class="song-info"><strong>Bound 2</strong><small>Kanye West</small></div><a class="spotify" target="_blank" rel="noopener" href="https://open.spotify.com/search/Bound%202%20Kanye%20West">SPOTIFY ↗</a></div>
        <div class="song"><div class="cover">IW</div><div class="song-info"><strong>I Wonder</strong><small>Kanye West</small></div><a class="spotify" target="_blank" rel="noopener" href="https://open.spotify.com/search/I%20Wonder%20Kanye%20West">SPOTIFY ↗</a></div>
        <div class="song"><div class="cover">M</div><div class="song-info"><strong>Marco</strong><small>binki</small></div><a class="spotify" target="_blank" rel="noopener" href="https://open.spotify.com/search/Marco%20binki">SPOTIFY ↗</a></div>
        <div class="song"><div class="cover">SM</div><div class="song-info"><strong>Si Me Voy</strong><small>Cuco</small></div><a class="spotify" target="_blank" rel="noopener" href="https://open.spotify.com/search/Si%20Me%20Voy%20Cuco">SPOTIFY ↗</a></div>
        <div class="song"><div class="cover">TM</div><div class="song-info"><strong>Cariño</strong><small>The Marías</small></div><a class="spotify" target="_blank" rel="noopener" href="https://open.spotify.com/search/Carino%20The%20Marias">SPOTIFY ↗</a></div>
      </div>
      <div class="frequency-note"><em>Y si algún día escuchas alguna de estas canciones y piensas en nosotros, entonces ya hicieron exactamente lo que tenían que hacer.</em><br><br>Hay canciones que no se explican. Solo se quedan asociadas a una persona, a una época, a una sensación. Estas son algunas de las que, por alguna razón, terminaron teniendo un poco de ti.</div>`
  }
};

const landing = document.getElementById('landing');
const universe = document.getElementById('universe');
const modal = document.getElementById('modal');
const modalKicker = document.getElementById('modalKicker');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

document.querySelector('[data-enter]').addEventListener('click', () => {
  landing.classList.add('hidden');
  universe.classList.remove('hidden');
  window.scrollTo({top:0,behavior:'instant'});
});

document.querySelectorAll('.node').forEach(node => {
  node.addEventListener('click', () => openModal(node.dataset.section));
});

document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));

document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

function openModal(key){
  const item = content[key];
  if(!item) return;
  modalKicker.textContent = item.kicker;
  modalTitle.textContent = item.title;
  modalBody.innerHTML = item.body;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}
function closeModal(){
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}

const introScreen=document.getElementById('introScreen');
const enterButton=document.getElementById('enterButton');
if(enterButton&&introScreen){enterButton.addEventListener('click',()=>{introScreen.classList.add('hide');setTimeout(()=>introScreen.remove(),850);});}

const modal=document.getElementById('modal');
const modalTitle=document.getElementById('modalTitle');
const modalEyebrow=document.getElementById('modalEyebrow');
const modalBody=document.getElementById('modalBody');
const heartCore=document.getElementById('heartCore');
const heartStage=document.getElementById('heartStage');

const content={
 beginning:{eyebrow:'01 / THE BEGINNING',title:'Supongo que todo empezó <i>sin que lo planeáramos.</i>',body:`<p>Al principio parecía una conversación cualquiera. Hablar, descubrir gustos, reírnos de cualquier cosa y dejar que el tiempo pasara.</p><p>Pero poco a poco empecé a notar que esperaba esas conversaciones. Que una notificación tuya podía cambiar completamente cómo se sentía el día.</p><p>Y eso me parece bonito porque no fue algo que tuve que forzar. Simplemente apareció. Una conexión inesperada que se fue sintiendo cada vez más natural.</p><p>Quizá por eso este universo empieza aquí: porque algunas de las mejores cosas comienzan sin avisar.</p>`},
 noticed:{eyebrow:'02 / THINGS I NOTICED',title:'Son pequeñas cosas, <i>pero me quedo con ellas.</i>',body:`<p>Me gusta cómo una conversación contigo puede saltar de un tema a otro sin sentirse rara. Me gusta descubrir coincidencias y encontrar cosas que tenemos en común.</p><p>También me gusta tu manera de ser. No porque piense que tengas que ser perfecta, sino porque siento que puedes ser tú misma y eso ya hace que hablar contigo sea especial.</p><p>Y hay algo que quizá sea lo más importante: contigo no siento que tenga que convertir cada momento en algo enorme. A veces basta con estar hablando y ya.</p><p>Supongo que son esas cosas pequeñas las que terminan haciendo que alguien se vuelva importante.</p>`},
 frequency:{eyebrow:'03 / FREQUENCY',title:'Algunas canciones <i>terminaron sonando diferente.</i>',body:`<p>Hay canciones que uno escucha una vez y ya. Y hay otras que, por alguna razón, empiezan a quedar asociadas con una persona.</p><p>Por eso está la sección de Frequency. No porque cada canción tenga una explicación exacta, sino porque cuando aparecen, inevitablemente pienso en ti.</p><p>Abajo puedes encontrar las canciones y abrirlas directamente en Spotify. Quizá algún día escuches alguna y entiendas exactamente por qué terminó aquí.</p>`},
 unknown:{eyebrow:'04 / THE UNKNOWN',title:'Ahora hay algo que <i>antes no existía.</i>',body:`<p>Antes este lugar terminaba con una pregunta. Ahora ya existe una respuesta que no estaba cuando lo construí por primera vez.</p><p>Pero eso no significa que la historia esté terminada. Al contrario. Ahora quedan más recuerdos por guardar, más canciones por descubrir y más días que todavía no sabemos cómo van a sentirse.</p><p>Así que dejo esta parte abierta. Para todo lo que venga después.</p>`},
 final:{eyebrow:'ONE LAST THING',title:'Gracias por existir <i>en mi pequeño universo.</i>',body:`<p>Hice todo esto porque quería darte algo que no fuera simplemente un mensaje más. Algo que pudieras recorrer, descubrir y volver a visitar cuando quisieras.</p><p>Ahora este lugar tiene más sentido que cuando empezó, porque la historia que estaba imaginando ya se convirtió en algo que estamos viviendo.</p><p>Así que gracias por las conversaciones, por las risas, por las coincidencias y por haber aparecido de una forma tan inesperada.</p><p><strong>Me alegra haberte conocido.</strong> ♡</p>`}
};

function setActive(key){
  document.querySelectorAll('.memory-node').forEach(n=>n.classList.toggle('active',n.dataset.vessel===key));
  document.querySelectorAll('.vessel').forEach(v=>v.classList.toggle('active',v.dataset.vessel===key));
  if(heartCore) heartCore.classList.toggle('active',Boolean(key));
}
function clearActive(){
  document.querySelectorAll('.memory-node,.vessel').forEach(n=>n.classList.remove('active'));
  if(heartCore) heartCore.classList.remove('active');
}
function openModal(key){
  const item=content[key]; if(!item)return;
  modalEyebrow.textContent=item.eyebrow;modalTitle.innerHTML=item.title;modalBody.innerHTML=item.body;
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
  if(key!=='final') setActive(key);
}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';clearActive();}

document.querySelectorAll('[data-open]').forEach(el=>el.addEventListener('click',()=>openModal(el.dataset.open)));
document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});

if(heartStage){
  heartStage.addEventListener('pointermove',e=>{
    if(window.innerWidth<800)return;
    const r=heartStage.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    heartStage.style.transform=`translate(${x*7}px,${y*5}px)`;
  });
  heartStage.addEventListener('pointerleave',()=>heartStage.style.transform='');
}

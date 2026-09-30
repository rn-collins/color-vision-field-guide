const testButtons=[...document.querySelectorAll('[data-test]')];
function openTest(id,scroll=true){const panel=document.querySelector(`[data-panel="${id}"]`);if(!panel)return;testButtons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.test===id)));document.querySelectorAll('[data-panel]').forEach(p=>p.hidden=p!==panel);if(scroll)panel.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'start'})}
testButtons.forEach(b=>b.addEventListener('click',()=>openTest(b.dataset.test)));
document.getElementById('copy-note')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(document.getElementById('teacher-note').textContent);document.getElementById('copy-status').textContent='Copied.'}catch{document.getElementById('copy-status').textContent='Select the note to copy it.'}});
const input=document.getElementById('search-input'),results=document.getElementById('search-results');const entries=[...document.querySelectorAll('.atlas-panel,.deep-section')].map(el=>({title:el.querySelector('h3')?.textContent,section:el.closest('[role="tabpanel"]')?.id,test:el.dataset.panel,body:el.textContent.replace(/\s+/g,' ')}));
input?.addEventListener('input',()=>{const q=input.value.toLocaleLowerCase().trim();if(q.length<2)return;results.replaceChildren();for(const hit of entries.filter(e=>e.body.toLocaleLowerCase().includes(q)).slice(0,10)){const b=document.createElement('button');b.type='button';let at=hit.body.toLocaleLowerCase().indexOf(q);b.textContent=`${hit.title} — …${hit.body.slice(Math.max(0,at-35),at+q.length+85)}…`;b.onclick=()=>{document.getElementById('search-dialog').hidden=true;document.querySelector(`[data-target="${hit.section}"]`)?.click();if(hit.test)openTest(hit.test,false);setTimeout(()=>document.querySelector(hit.test?`#test-${hit.test}`:`#${hit.section} .deep-section`)?.scrollIntoView({block:'start'}),150)};results.append(b)}if(!results.children.length)results.textContent='No matching passage. Try a broader term.'});

// Keep each conceptual interaction beside its corresponding method and image.
for(const [slug,selector] of [['plate','.plate-interactive'],['hue','#hue-tray'],['anomaloscope','#mixture'],['acuity','#mirror'],['stereo','#butterfly']]){
 const element=document.querySelector(selector),panel=document.getElementById(`test-${slug}`);
 const demo=element?.closest('.demo')||element?.closest('.card');
 if(panel&&demo)panel.append(demo);
}
document.querySelector('.test-grid')?.remove();
document.getElementById('fundus-toggle')?.addEventListener('click',e=>{
 const on=e.currentTarget.getAttribute('aria-pressed')!=='true';e.currentTarget.setAttribute('aria-pressed',String(on));
 document.querySelector('#test-fundus svg')?.classList.toggle('traced',on);
 document.getElementById('fundus-explain').textContent=on?'The light enables inspection of visible structures; a normal appearance does not measure cone pigment responses.':'Light enters through the pupil so the clinician can view the back of the eye.';
});

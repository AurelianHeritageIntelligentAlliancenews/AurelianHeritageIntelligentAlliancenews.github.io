
const menuBtn=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');
if(menuBtn){menuBtn.addEventListener('click',()=>nav.classList.toggle('open'))}
const faqSearch=document.getElementById('faqSearch');
if(faqSearch){faqSearch.addEventListener('input',()=>{const q=faqSearch.value.toLowerCase();document.querySelectorAll('.faq-list details').forEach(d=>{d.style.display=d.textContent.toLowerCase().includes(q)?'block':'none'})})}

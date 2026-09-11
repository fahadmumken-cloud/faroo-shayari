const IMAGE_BASE='https://vmphlzkejnqnvmhygtyv.supabase.co/storage/v1/object/public/faroo-images/';

const poems=[
{mood:'Deep',language:'Hinglish',image:'faroo-deep.jpg',alt:'A quiet reflective scene for deep thoughts',body:`Kuch baatein lafzon tak aayi hi nahi,
Kuch ehsaas dil se jaaye hi nahi.
Hum muskura kar aage badhte rahe,
Par kuch raaste peeche chhute hi nahi.
Waqt ne har sawaal ka jawaab nahi diya,
Dil ne har dard ka hisaab nahi liya.
Kuch khamoshiyan humne khud chun li,
Kuch dooriyan zindagi ne likh di.
Jo apne the, woh yaadon mein reh gaye,
Jo sapne the, woh aankhon mein reh gaye.
Humne har mod par khud ko samjhaya,
Phir bhi dil ne kuch naam nahi bhulaya.
Zindagi aage chalti rahi chup-chaap,
Aur hum andar se badalte rahe behisaab.
Shayad gehraai ka matlab yahi hai,
Jo keh na sakein, woh bhi andar zinda rehta hai.`},
{mood:'Heartbreak',language:'Hinglish',image:'faroo-heartbreak.jpg',alt:'A cinematic scene of heartbreak and reflection',body:`Kabhi hum bhi kisi ki jaan hua karte the,
Aaj usi ke liye anjaan ho gaye.
Mohabbat toh aaj bhi wahi hai,
Bas hum uski zindagi se nikal gaye.
Jis naam se chehra khil jaata tha,
Aaj wahi naam aankhen nam kar jaata hai.
Humne rishta bachane mein khud ko khona seekha,
Usne bina mudkar dekhe jaana seekha.
Kuch vaade ab bhi yaad aate hain,
Kuch lamhe raat bhar jagate hain.
Dil maanta nahi ke sab khatam hua,
Waqt kehta hai woh ab apna nahi raha.
Humne uski khushi ke liye khamoshi chun li,
Apne hisse mein tanhaai rakh li.
Mohabbat haar nahi gayi thi,
Bas hum ek kahani mein saath nahi reh sake.`},
{mood:'Missing You',language:'Hinglish',image:'faroo-missing-you.jpg',alt:'A quiet cinematic scene about missing someone',body:`Tum yaad nahi aate,
Tum toh yaadon mein rehte ho.
Farq sirf itna hai,
Pehle paas the, ab dil mein ho.
Subah ki pehli khamoshi mein tum ho,
Raat ki aakhri soch mein tum ho.
Kabhi kisi gaane mein mil jaate ho,
Kabhi purani baat mein muskura dete ho.
Main tumhe bhoolne ki koshish nahi karta,
Bas tumhare bina jeena seekh raha hoon.
Kuch jagah ab bhi tumhari lagti hain,
Kuch raaste tum tak jaate lagte hain.
Doori ne tumhe kam nahi kiya,
Tumhari kami ko aur gehra kar diya.
Aaj bhi dil chupke se kehta hai,
Kaash ek baar tum phir paas hote.`},
{mood:'Love',language:'Hinglish',image:'faroo-love.jpg',alt:'A warm cinematic scene about love',body:`Tera naam likhne ki zaroorat nahi,
Meri har baat mein tu nazar aata hai.
Ishq shor nahi karta,
Har khamoshi mein tera zikr lata hai.
Tere saath waqt halka sa lagta hai,
Har mushkil raasta aasaan sa lagta hai.
Teri hansi mein ghar jaisi baat hai,
Teri khamoshi mein bhi mulaqat hai.
Mujhe duniya se zyada kuch nahi chahiye,
Bas tera saath sachcha chahiye.
Na bade vaade, na badi kahani,
Har kal mein teri thodi si nishani.
Jab tu paas ho dil sambhal jaata hai,
Har adhoora ehsaas mukammal ho jaata hai.
Shayad mohabbat isi ko kehte hain,
Ek insaan mein poori duniya mil jaati hai.`},
{mood:'Alone',language:'English',image:'faroo-alone.jpg',alt:'A solitary cinematic scene at night',body:`Some nights are not lonely,
because no one is there.
They are lonely because,
the one you want isn't.
The room can be full of voices,
and still your heart hears silence.
You can smile through every conversation,
then feel the emptiness when it ends.
There are names you stop saying aloud,
but never stop speaking inside your mind.
There are memories that arrive quietly,
and sit beside you without asking.
So you learn to carry your own company,
and make peace with unanswered spaces.
Somewhere between missing and healing,
you learn that alone does not mean lost.`},
{mood:'Memories',language:'Hinglish',image:'faroo-memories.jpg',alt:'A warm nostalgic scene of memories and writing',body:`Waqt guzar gaya,
Par kuch lamhe wahin reh gaye.
Hum aage badh toh gaye,
Dil ke kuch hisse peeche reh gaye.
Purani tasveeron mein ek duniya milti hai,
Har muskurahat ab bhi asli lagti hai.
Kuch awaazein yaadon mein sunai deti hain,
Kuch baatein aaj bhi dil chhoo jaati hain.
Woh din laut kar nahi aayenge,
Par humse poori tarah jaayenge bhi nahi.
Har guzra pal kuch dekar gaya,
Kisi ne khushi, kisi ne sabak diya.
Hum badal gaye, shehar badal gaye,
Kuch ehsaas wahi ke wahi reh gaye.
Yaadein waqt ko rok nahi sakti,
Par humein wapas zaroor le jaati hain.`},
{mood:'Moving On',language:'Hinglish',image:'faroo-moving-on.jpg',alt:'A hopeful cinematic scene about moving forward',body:`Ab tera intezaar nahi karta,
Bas kabhi kabhi yaad aa jaati hai.
Dil ne jaana seekh liya hai,
Har mohabbat manzil nahi hoti.
Kuch log safar ka hissa hote hain,
Zindagi bhar ka pata nahi.
Maine toot kar bhi khud ko sambhala,
Har andheri raat ke baad savera dekha.
Ab purani baaton se shikayat kam hai,
Khud se mohabbat thodi zyada hai.
Jo chala gaya usse rokna chhod diya,
Jo mera hai uske liye darna chhod diya.
Main peeche mudkar sirf seekhta hoon,
Wapas jaane ke liye nahi.
Dil ab bhi narm hai, bas samajhdaar hai,
Aur mera safar phir se mera ho gaya.`}
];

const grid=document.querySelector('#grid');
const lang=document.querySelector('#language');
let mood='All';

function openPoem(index){
  const p=poems[index];
  const overlay=document.createElement('div');
  overlay.className='poem-reader';
  overlay.innerHTML=`<article class="poem-reader-page">
    <button class="reader-close" type="button" aria-label="Close full shayari">×</button>
    <div class="reader-hero">
      <img class="reader-image" src="${IMAGE_BASE}${p.image}" alt="${p.alt}">
      <div class="reader-image-shade"></div>
      <div class="reader-title">
        <span>FAROO</span>
        <div>${p.mood} · ${p.language}</div>
      </div>
    </div>
    <div class="reader-content">
      <div class="reader-poem">${p.body}</div>
      <div class="reader-bottom">
        <span>Words for what the heart can't say.</span>
        <button class="reader-copy" type="button">Copy Shayari</button>
      </div>
    </div>
  </article>`;
  document.body.appendChild(overlay);
  document.body.classList.add('reader-open');

  const close=()=>{
    overlay.remove();
    document.body.classList.remove('reader-open');
  };

  overlay.querySelector('.reader-close').addEventListener('click',close);
  overlay.addEventListener('click',e=>{if(e.target===overlay)close();});

  const esc=e=>{
    if(e.key==='Escape'){
      close();
      document.removeEventListener('keydown',esc);
    }
  };
  document.addEventListener('keydown',esc);

  overlay.querySelector('.reader-copy').addEventListener('click',async e=>{
    await navigator.clipboard.writeText(p.body);
    e.currentTarget.textContent='Copied ✓';
    setTimeout(()=>e.currentTarget.textContent='Copy Shayari',1400);
  });
}

function render(){
  grid.innerHTML='';
  const filtered=poems.map((p,index)=>({...p,index})).filter(p=>
    (mood==='All'||p.mood===mood)&&
    (lang.value==='All languages'||p.language===lang.value)
  );

  filtered.forEach(p=>{
    const card=document.createElement('article');
    card.className='card clickable-card';
    card.tabIndex=0;
    card.setAttribute('role','button');
    card.setAttribute('aria-label',`Read full ${p.mood} shayari`);
    const preview=p.body.split('\n').slice(0,4).join('\n');
    card.innerHTML=`<div class="card-visual">
        <img src="${IMAGE_BASE}${p.image}" alt="${p.alt}" loading="lazy">
      </div>
      <div class="card-copy">
        <div>
          <div class="meta">${p.mood} · ${p.language}</div>
          <div class="poem-preview">${preview}\n…</div>
        </div>
        <div class="actions">
          <span>FAROO</span>
          <span class="read-full">Read Full Shayari →</span>
        </div>
      </div>`;

    card.addEventListener('click',()=>openPoem(p.index));
    card.addEventListener('keydown',e=>{
      if(e.key==='Enter'||e.key===' '){
        e.preventDefault();
        openPoem(p.index);
      }
    });
    grid.appendChild(card);
  });

  if(!filtered.length)grid.innerHTML='<p>No shayari in this filter yet.</p>';
}

document.querySelectorAll('.moods button').forEach(button=>{
  button.addEventListener('click',()=>{
    const active=document.querySelector('.moods .active');
    if(active)active.classList.remove('active');
    button.classList.add('active');
    mood=button.dataset.mood;
    render();
    document.querySelector('#shayari').scrollIntoView({behavior:'smooth'});
  });
});

lang.addEventListener('change',render);
render();

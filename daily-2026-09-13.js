poems.unshift({
  mood:'Moving On',
  image:'https://raw.githubusercontent.com/fahadmumken-cloud/faroo-shayari/main/faroo-moving-on-2026-09-13.svg',
  alt:'A solitary traveler on a cinematic late-night railway platform watching a train disappear into mist',
  text:{
    Hinglish:`Main tumhe bhoola nahi hoon,\nbas tum tak lautna chhod diya hai.\nKuch yaadein ab bhi saath chalti hain,\npar maine unmein rehna chhod diya hai.\nJo tha, woh meri kahani ka hissa rahega,\nmagar meri manzil nahi.\nAaj pehli baar dil ne samjha -\naage badhna bewafai nahi hoti,\nkabhi kabhi khud se wafaa hoti hai.`,
    Hindi:`मैं तुम्हें भूला नहीं हूँ,\nबस तुम तक लौटना छोड़ दिया है।\nकुछ यादें अब भी साथ चलती हैं,\nपर मैंने उनमें रहना छोड़ दिया है।\nजो था, वो मेरी कहानी का हिस्सा रहेगा,\nमगर मेरी मंज़िल नहीं।\nआज पहली बार दिल ने समझा -\nआगे बढ़ना बेवफ़ाई नहीं होती,\nकभी-कभी ख़ुद से वफ़ा होती है।`,
    Urdu:`میں تمہیں بھولا نہیں ہوں،\nبس تم تک لوٹنا چھوڑ دیا ہے۔\nکچھ یادیں اب بھی ساتھ چلتی ہیں،\nپر میں نے ان میں رہنا چھوڑ دیا ہے۔\nجو تھا، وہ میری کہانی کا حصہ رہے گا،\nمگر میری منزل نہیں۔\nآج پہلی بار دل نے سمجھا -\nآگے بڑھنا بے وفائی نہیں ہوتی،\nکبھی کبھی خود سے وفا ہوتی ہے۔`
  }
});

render = function(){
 grid.innerHTML='';
 const l=labels[currentLanguage];
 poems.map((p,index)=>({...p,index}))
 .filter(p=>mood==='All'||p.mood===mood)
 .forEach(p=>{
   const text=p.text[currentLanguage];
   const preview=text.split('\n').slice(0,4).join('\n');
   const src=/^https?:\/\//.test(p.image)?p.image:IMAGE_BASE+p.image;
   const c=document.createElement('article');
   c.className='card clickable-card';
   c.tabIndex=0;
   c.setAttribute('role','button');
   c.innerHTML=`<div class="card-visual"><img src="${src}" alt="${p.alt}" loading="lazy"></div><div class="card-copy ${currentLanguage==='Urdu'?'rtl-copy':''}"><div><div class="meta">${p.mood} · ${currentLanguage==='Hindi'?'हिंदी':currentLanguage==='Urdu'?'اردو':'Hinglish'}</div><div class="poem-preview">${preview}\n…</div></div><div class="actions"><span>FAROO</span><span class="read-full">${l.read}</span></div></div>`;
   c.onclick=()=>openPoem(p.index);
   c.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openPoem(p.index);}};
   grid.appendChild(c);
 });
};
render();
poems.unshift({
  mood:'Moving On',
  date:'13 Sep 2026',
  image:'https://raw.githubusercontent.com/fahadmumken-cloud/faroo-shayari/main/b3c6837f-2fee-4a97-8160-a7e16930722c.png',
  alt:'A solitary man sitting on a railway platform at dusk, watching a train depart under warm station lights',
  text:{
    Hinglish:`Main tumhe bhoola nahi hoon,\nbas tum tak lautna chhod diya hai.\nKuch yaadein ab bhi saath chalti hain,\npar maine unmein rehna chhod diya hai.\nKabhi tum meri har dua ka hissa the,\naaj tum sirf ek khoobsurat yaad ho.\nJo tha, woh meri kahani ka hissa rahega,\nmagar meri manzil nahi.\nDil ne bahut der tak tumhara intezaar kiya,\nphir ek din khud ka haath thaam liya.\nAb peeche mudkar dard nahi ginta,\nbas seekhe hue sabak yaad rakhta hoon.\nAaj pehli baar dil ne samjha -\naage badhna bewafai nahi hoti,\nkabhi kabhi khud se wafaa hoti hai.`,
    Hindi:`मैं तुम्हें भूला नहीं हूँ,\nबस तुम तक लौटना छोड़ दिया है।\nकुछ यादें अब भी साथ चलती हैं,\nपर मैंने उनमें रहना छोड़ दिया है।\nकभी तुम मेरी हर दुआ का हिस्सा थे,\nआज तुम सिर्फ़ एक खूबसूरत याद हो।\nजो था, वो मेरी कहानी का हिस्सा रहेगा,\nमगर मेरी मंज़िल नहीं।\nदिल ने बहुत देर तक तुम्हारा इंतज़ार किया,\nफिर एक दिन खुद का हाथ थाम लिया।\nअब पीछे मुड़कर दर्द नहीं गिनता,\nबस सीखे हुए सबक याद रखता हूँ।\nआज पहली बार दिल ने समझा -\nआगे बढ़ना बेवफ़ाई नहीं होती,\nकभी-कभी ख़ुद से वफ़ा होती है।`,
    Urdu:`میں تمہیں بھولا نہیں ہوں،\nبس تم تک لوٹنا چھوڑ دیا ہے۔\nکچھ یادیں اب بھی ساتھ چلتی ہیں،\nپر میں نے ان میں رہنا چھوڑ دیا ہے۔\nکبھی تم میری ہر دعا کا حصہ تھے،\nآج تم صرف ایک خوبصورت یاد ہو۔\nجو تھا، وہ میری کہانی کا حصہ رہے گا،\nمگر میری منزل نہیں۔\nدل نے بہت دیر تک تمہارا انتظار کیا،\nپھر ایک دن خود کا ہاتھ تھام لیا۔\nاب پیچھے مڑ کر درد نہیں گنتا،\nبس سیکھے ہوئے سبق یاد رکھتا ہوں۔\nآج پہلی بار دل نے سمجھا -\nآگے بڑھنا بے وفائی نہیں ہوتی،\nکبھی کبھی خود سے وفا ہوتی ہے۔`
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
   const postDate=p.date||(p.image&&p.image.includes('2026-09-12')?'12 Sep 2026':'11 Sep 2026');
   const c=document.createElement('article');
   c.className='card clickable-card';
   c.tabIndex=0;
   c.setAttribute('role','button');
   c.innerHTML=`<div class="card-visual"><img src="${src}" alt="${p.alt}" loading="lazy"></div><div class="card-copy ${currentLanguage==='Urdu'?'rtl-copy':''}"><div><div class="meta">${p.mood} · ${currentLanguage==='Hindi'?'हिंदी':currentLanguage==='Urdu'?'اردو':'Hinglish'} · ${postDate}</div><div class="poem-preview">${preview}\n…</div></div><div class="actions"><span>FAROO</span><span class="read-full">${l.read}</span></div></div>`;
   c.onclick=()=>openPoem(p.index);
   c.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openPoem(p.index);}};
   grid.appendChild(c);
 });
};
render();
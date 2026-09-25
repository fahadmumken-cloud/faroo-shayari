// FAROO daily shayari — 24 Sep 2026
poems.unshift({
  mood:'Moving On',
  date:'24 Sep 2026',
  image:'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=max&fm=jpg&q=86&w=1800',
  alt:'Warm sunrise over a quiet open landscape, symbolising a calm new beginning and moving forward for FAROO on 24 September 2026',
  text:{
    Hinglish:`Kal tak jo dard tha, aaj sabaq ban gaya,
Dil ka toota hua hissa bhi mazboot ban gaya.
Humne har yaad ko mitaana zaroori nahi samjha,
Bas uske saath jeena dheere dheere aa gaya.
Jo chala gaya, usse ab shikayat nahi,
Jo reh gaya, uski bhi koi kami nahi.
Raaste naye hain, kadam abhi chhote sahi,
Par dil ko rukne ki ab aadat nahi.
Kabhi aansu bhi meri himmat ban gaye,
Kabhi tanha din mere dost ban gaye.
Ab khud se milne ka safar shuru hua hai,
Andar kahin ek naya savera hua hai.
Har khatam kahani haar nahi hoti,
Kabhi judaai bhi nayi raah dikha deti hai,
Aur kabhi khud ko chunna hi sabse khoobsurat mohabbat hoti hai.`,
    Hindi:`कल तक जो दर्द था, आज सबक बन गया,
दिल का टूटा हुआ हिस्सा भी मज़बूत बन गया।
हमने हर याद को मिटाना ज़रूरी नहीं समझा,
बस उसके साथ जीना धीरे-धीरे आ गया।
जो चला गया, उससे अब शिकायत नहीं,
जो रह गया, उसकी भी कोई कमी नहीं।
रास्ते नए हैं, कदम अभी छोटे सही,
पर दिल को रुकने की अब आदत नहीं।
कभी आँसू भी मेरी हिम्मत बन गए,
कभी तन्हा दिन मेरे दोस्त बन गए।
अब ख़ुद से मिलने का सफ़र शुरू हुआ है,
अंदर कहीं एक नया सवेरा हुआ है।
हर ख़त्म कहानी हार नहीं होती,
कभी जुदाई भी नई राह दिखा देती है,
और कभी ख़ुद को चुनना ही सबसे ख़ूबसूरत मोहब्बत होती है।`,
    Urdu:`کل تک جو درد تھا، آج سبق بن گیا،
دل کا ٹوٹا ہوا حصہ بھی مضبوط بن گیا۔
ہم نے ہر یاد کو مٹانا ضروری نہیں سمجھا،
بس اس کے ساتھ جینا دھیرے دھیرے آ گیا۔
جو چلا گیا، اس سے اب شکایت نہیں،
جو رہ گیا، اس کی بھی کوئی کمی نہیں۔
راستے نئے ہیں، قدم ابھی چھوٹے سہی،
پر دل کو رکنے کی اب عادت نہیں۔
کبھی آنسو بھی میری ہمت بن گئے،
کبھی تنہا دن میرے دوست بن گئے۔
اب خود سے ملنے کا سفر شروع ہوا ہے،
اندر کہیں ایک نیا سویرا ہوا ہے۔
ہر ختم کہانی ہار نہیں ہوتی،
کبھی جدائی بھی نئی راہ دکھا دیتی ہے،
اور کبھی خود کو چننا ہی سب سے خوبصورت محبت ہوتی ہے۔`
  }
});


// Load the next FAROO daily entry after this file, then refresh the grid.
(function(){
  if (document.querySelector('script[data-faroo-daily="2026-09-25"]')) return;
  const s=document.createElement('script');
  s.src='daily-2026-09-25.js?v=1';
  s.dataset.farooDaily='2026-09-25';
  s.onload=()=>render();
  document.body.appendChild(s);
})();

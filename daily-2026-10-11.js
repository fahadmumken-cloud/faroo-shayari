// FAROO daily shayari — 11 Oct 2026
poems.unshift({mood:'Missing You',date:'11 Oct 2026',image:'https://fahadmumken-cloud.github.io/faroo-shayari/covers/faroo-2026-10-11-unsent-letter.svg',alt:'A quiet morning desk with an unfinished letter, a book and a cup of tea',text:{Hinglish:`Mez pe rakha khat adhoora,
Naam tera likha hai poora.
Khidki par subah thehri hai,
Dil mein ek awaaz gehri hai.
Lafz bahut the kehne ko,
Himmat kam thi sehne ko.
Chai se uthti halki bhaap,
Jaise kal ka chhota khwaab.
Kuch sawalon ko chhod diya,
Khud se rishta jod liya.
Teri khairiyat maangta hoon,
Phir apna din thaamta hoon.
Khat kitaab mein so jayega,
Dard dheere kho jayega,
Par pyaar dua ban jayega.`,Hindi:`मेज़ पे रखा ख़त अधूरा,
नाम तेरा लिखा है पूरा।
खिड़की पर सुबह ठहरी है,
दिल में एक आवाज़ गहरी है।
लफ़्ज़ बहुत थे कहने को,
हिम्मत कम थी सहने को।
चाय से उठती हल्की भाप,
जैसे कल का छोटा ख़्वाब।
कुछ सवालों को छोड़ दिया,
ख़ुद से रिश्ता जोड़ लिया।
तेरी ख़ैरियत माँगता हूँ,
फिर अपना दिन थामता हूँ।
ख़त किताब में सो जाएगा,
दर्द धीरे खो जाएगा,
पर प्यार दुआ बन जाएगा।`,Urdu:`میز پہ رکھا خط ادھورا،
نام تیرا لکھا ہے پورا۔
کھڑکی پر صبح ٹھہری ہے،
دل میں ایک آواز گہری ہے۔
لفظ بہت تھے کہنے کو،
ہمت کم تھی سہنے کو۔
چائے سے اٹھتی ہلکی بھاپ،
جیسے کل کا چھوٹا خواب۔
کچھ سوالوں کو چھوڑ دیا،
خود سے رشتہ جوڑ لیا۔
تیری خیریت مانگتا ہوں،
پھر اپنا دن تھامتا ہوں۔
خط کتاب میں سو جائے گا،
درد دھیرے کھو جائے گا،
پر پیار دعا بن جائے گا۔`}});

// Ensure the next dated FAROO poem loads without altering this day's poem.
(function(){
  if (typeof document === 'undefined') return;
  const script=document.createElement('script');
  script.src='daily-2026-10-12.js?v=1';
  script.onload=function(){ if(typeof render==='function') render(); };
  document.head.appendChild(script);
})();

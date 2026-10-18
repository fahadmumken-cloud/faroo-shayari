// FAROO 17 Oct 2026: original 15-line Shayari in three languages.
poems.unshift({"mood":"Alone","date":"17 Oct 2026","image":"https://fahadmumken-cloud.github.io/faroo-shayari/covers/faroo-2026-10-17-rain-window-empty-chair.svg?v=1","alt":"Rainy night window, half-finished tea and an empty chair","text":{"Hinglish":"Baarish ruki toh raat jagi\nKhidki par ek boond lagi\nMez pe aadhi chai padi thi\nSaamne kursi khaali thi\nPhone pe koi paighaam na aaya\nMaine bhi kisi ko na bulaya\nGhar ki ghadi chalti rahi\nDil ki baat dhalti rahi\nSheeshe mein apna aks mila\nPehli dafa woh apna laga\nMaine khamoshi ko suna\nUsmein ek naya sur buna\nJo tanhaai se darrta tha\nAaj usi mein thehra tha\nAur khud ka saath mil gaya","Hindi":"बारिश रुकी तो रात जगी\nखिड़की पर एक बूँद लगी\nमेज़ पे आधी चाय पड़ी थी\nसामने कुर्सी खाली थी\nफ़ोन पे कोई पैग़ाम न आया\nमैंने भी किसी को न बुलाया\nघर की घड़ी चलती रही\nदिल की बात ढलती रही\nशीशे में अपना अक्स मिला\nपहली दफ़ा वो अपना लगा\nमैंने ख़ामोशी को सुना\nउसमें एक नया सुर बुना\nजो तन्हाई से डरता था\nआज उसी में ठहरा था\nऔर ख़ुद का साथ मिल गया","Urdu":"بارش رکی تو رات جاگی\nکھڑکی پر ایک بوند لگی\nمیز پہ آدھی چائے پڑی تھی\nسامنے کرسی خالی تھی\nفون پہ کوئی پیغام نہ آیا\nمیں نے بھی کسی کو نہ بلایا\nگھر کی گھڑی چلتی رہی\nدل کی بات ڈھلتی رہی\nشیشے میں اپنا عکس ملا\nپہلی دفعہ وہ اپنا لگا\nمیں نے خاموشی کو سنا\nاس میں ایک نیا سُر بُنا\nجو تنہائی سے ڈرتا تھا\nآج اسی میں ٹھہرا تھا\nاور خود کا ساتھ مل گیا"}});

// Load 18 October only if the permanent index loader is not yet present.
document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('script[src*="daily-2026-10-18.js"]')) return;
  if (window.__faroo18Loaded) return;
  window.__faroo18Loaded = true;
  const script = document.createElement('script');
  script.src = 'daily-2026-10-18.js?v=1';
  script.onload = function () { if (typeof render === 'function') render(); };
  document.body.appendChild(script);
});

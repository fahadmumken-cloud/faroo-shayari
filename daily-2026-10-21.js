// FAROO 21 Oct 2026 — original 15-line trilingual Shayari
poems.unshift({"mood":"Deep","date":"21 Oct 2026","image":"https://fahadmumken-cloud.github.io/faroo-shayari/covers/faroo-2026-10-21-marigold-stone-steps.svg?v=1","alt":"Yellow marigold emerging from a rain-washed stone stairway in warm morning light, original 21 October cover","text":{"Hinglish":"Patthar ki seedhi bheegi thi,\nSubah abhi kuch dheemi thi.\nEk daraar mein phool khila,\nJaise dil ko raasta mila.\nKal tak aangan soona tha,\nHar khwaab adhoora sa tha.\nPhir dhoop ne dar par dastak di,\nKhamoshi ne ek saans li.\nMaine haar ko naam na diya,\nThak kar bhi khwaab na chhoda.\nWoh peela phool muskaaya,\nBin bole mujhe samjhaaya:\nZameen chahe sakht rahe,\nMausam chahe khafa rahe,\nUmeed phir bhi ugti hai.","Hindi":"पत्थर की सीढ़ी भीगी थी,\nसुबह अभी कुछ धीमी थी।\nएक दरार में फूल खिला,\nजैसे दिल को रास्ता मिला।\nकल तक आँगन सूना था,\nहर ख़्वाब अधूरा-सा था।\nफिर धूप ने दर पर दस्तक दी,\nख़ामोशी ने एक साँस ली।\nमैंने हार को नाम न दिया,\nथककर भी ख़्वाब न छोड़ा।\nवह पीला फूल मुस्काया,\nबिन बोले मुझे समझाया:\nज़मीन चाहे सख़्त रहे,\nमौसम चाहे ख़फ़ा रहे,\nउम्मीद फिर भी उगती है।","Urdu":"پتھر کی سیڑھی بھیگی تھی،\nصبح ابھی کچھ دھیمی تھی۔\nایک دراڑ میں پھول کھلا،\nجیسے دل کو راستہ ملا۔\nکل تک آنگن سونا تھا،\nہر خواب ادھورا سا تھا۔\nپھر دھوپ نے در پر دستک دی،\nخاموشی نے ایک سانس لی۔\nمیں نے ہار کو نام نہ دیا،\nتھک کر بھی خواب نہ چھوڑا۔\nوہ پیلا پھول مسکرایا،\nبن بولے مجھے سمجھایا:\nزمین چاہے سخت رہے،\nموسم چاہے خفا رہے،\nامید پھر بھی اگتی ہے۔"}});

/* Fallback loader: only used if the permanent 22 October index loader is absent.
   DOMContentLoaded guarantees index.html has finished parsing before checking. */
document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('script[src*="daily-2026-10-22.js"]')) return;
  var script = document.createElement('script');
  script.src = 'daily-2026-10-22.js?v=1';
  script.onload = function () { if (typeof render === 'function') render(); };
  document.body.appendChild(script);
});

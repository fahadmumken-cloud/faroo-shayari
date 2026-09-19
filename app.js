const IMAGE_BASE='https://vmphlzkejnqnvmhygtyv.supabase.co/storage/v1/object/public/faroo-images/';
function farooImageSrc(image){ return /^https?:\/\//i.test(image) ? image : IMAGE_BASE+image; }

const poems=[
{
  mood:'Missing You',
  image:'faroo-missing-you-2026-09-12.jpg',
  alt:'A woman quietly remembering someone at golden hour',
  text:{
    Hinglish:`Kuch log zindagi se chale jaate hain,
Par dil se kabhi jaa nahi paate.
Waqt unke bina guzarta rehta hai,
Par kuch lamhe wahi ruk jaate hain.
Tumhari yaad ab shor nahi karti,
Bas khamoshi mein mere paas baith jaati hai.
Kabhi kisi gaane mein tum mil jaate ho,
Kabhi shaam ki roshni mein nazar aate ho.
Maine tumhe wapas maangna chhod diya,
Par tumhe mehsoos karna nahi chhoda.
Kuch rishton ka anjaam saath nahi hota,
Phir bhi woh dil ke sabse kareeb rehte hain.
Hum dono apni raahon par chal diye,
Par yaadon ne raaste alag nahi kiye.
Ab bas itni si dua dil mein rehti hai,
Jahan bhi ho, tum khush raho.`,

    Hindi:`कुछ लोग ज़िंदगी से चले जाते हैं,
पर दिल से कभी जा नहीं पाते।
वक़्त उनके बिना गुज़रता रहता है,
पर कुछ लम्हे वहीं रुक जाते हैं।
तुम्हारी याद अब शोर नहीं करती,
बस ख़ामोशी में मेरे पास बैठ जाती है।
कभी किसी गाने में तुम मिल जाते हो,
कभी शाम की रोशनी में नज़र आते हो।
मैंने तुम्हें वापस माँगना छोड़ दिया,
पर तुम्हें महसूस करना नहीं छोड़ा।
कुछ रिश्तों का अंजाम साथ नहीं होता,
फिर भी वो दिल के सबसे क़रीब रहते हैं।
हम दोनों अपनी राहों पर चल दिए,
पर यादों ने रास्ते अलग नहीं किए।
अब बस इतनी सी दुआ दिल में रहती है,
जहाँ भी हो, तुम ख़ुश रहो।`,

    Urdu:`کچھ لوگ زندگی سے چلے جاتے ہیں،
پر دل سے کبھی جا نہیں پاتے۔
وقت ان کے بغیر گزرتا رہتا ہے،
پر کچھ لمحے وہیں رک جاتے ہیں۔
تمہاری یاد اب شور نہیں کرتی،
بس خاموشی میں میرے پاس بیٹھ جاتی ہے۔
کبھی کسی گانے میں تم مل جاتے ہو،
کبھی شام کی روشنی میں نظر آتے ہو۔
میں نے تمہیں واپس مانگنا چھوڑ دیا،
پر تمہیں محسوس کرنا نہیں چھوڑا۔
کچھ رشتوں کا انجام ساتھ نہیں ہوتا،
پھر بھی وہ دل کے سب سے قریب رہتے ہیں۔
ہم دونوں اپنی راہوں پر چل دیے،
پر یادوں نے راستے الگ نہیں کیے۔
اب بس اتنی سی دعا دل میں رہتی ہے،
جہاں بھی ہو، تم خوش رہو۔`
  }
},

{
 mood:'Deep', image:'faroo-deep.jpg?v=2', alt:'A quiet reflective scene for deep thoughts',
 text:{
  Hinglish:`Kuch baatein lafzon tak aayi hi nahi,
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
Jo keh na sakein, woh andar zinda rehta hai.`,
  Hindi:`कुछ बातें लफ़्ज़ों तक आई ही नहीं,
कुछ एहसास दिल से गए ही नहीं।
हम मुस्कुरा कर आगे बढ़ते रहे,
पर कुछ रास्ते पीछे छूटे ही नहीं।
वक़्त ने हर सवाल का जवाब नहीं दिया,
दिल ने हर दर्द का हिसाब नहीं लिया।
कुछ ख़ामोशियाँ हमने ख़ुद चुन लीं,
कुछ दूरियाँ ज़िंदगी ने लिख दीं।
जो अपने थे, वो यादों में रह गए,
जो सपने थे, वो आँखों में रह गए।
हमने हर मोड़ पर ख़ुद को समझाया,
फिर भी दिल ने कुछ नाम नहीं भुलाया।
ज़िंदगी आगे चलती रही चुपचाप,
और हम अंदर से बदलते रहे बेहिसाब।
शायद गहराई का मतलब यही है,
जो कह न सकें, वो अंदर ज़िंदा रहता है।`,
  Urdu:`کچھ باتیں لفظوں تک آئی ہی نہیں،
کچھ احساس دل سے گئے ہی نہیں۔
ہم مسکرا کر آگے بڑھتے رہے،
پر کچھ راستے پیچھے چھوٹے ہی نہیں۔
وقت نے ہر سوال کا جواب نہیں دیا،
دل نے ہر درد کا حساب نہیں لیا۔
کچھ خاموشیاں ہم نے خود چن لیں،
کچھ دوریاں زندگی نے لکھ دیں۔
جو اپنے تھے، وہ یادوں میں رہ گئے،
جو خواب تھے، وہ آنکھوں میں رہ گئے۔
ہم نے ہر موڑ پر خود کو سمجھایا،
پھر بھی دل نے کچھ نام نہیں بھلائے۔
زندگی آگے چلتی رہی چپ چاپ،
اور ہم اندر سے بدلتے رہے بے حساب۔
شاید گہرائی کا مطلب یہی ہے،
جو کہہ نہ سکیں، وہ اندر زندہ رہتا ہے۔`
 }},

{
 mood:'Heartbreak', image:'faroo-heartbreak.jpg?v=2', alt:'A cinematic scene of heartbreak and reflection',
 text:{
  Hinglish:`Kabhi hum bhi kisi ki jaan hua karte the,
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
Bas hum ek kahani mein saath nahi reh sake.`,
  Hindi:`कभी हम भी किसी की जान हुआ करते थे,
आज उसी के लिए अनजान हो गए।
मोहब्बत तो आज भी वही है,
बस हम उसकी ज़िंदगी से निकल गए।
जिस नाम से चेहरा खिल जाता था,
आज वही नाम आँखें नम कर जाता है।
हमने रिश्ता बचाने में ख़ुद को खोना सीखा,
उसने बिना मुड़कर देखे जाना सीखा।
कुछ वादे अब भी याद आते हैं,
कुछ लम्हे रात भर जगाते हैं।
दिल मानता नहीं कि सब ख़त्म हुआ,
वक़्त कहता है वो अब अपना नहीं रहा।
हमने उसकी ख़ुशी के लिए ख़ामोशी चुन ली,
अपने हिस्से में तन्हाई रख ली।
मोहब्बत हार नहीं गई थी,
बस हम एक कहानी में साथ नहीं रह सके।`,
  Urdu:`کبھی ہم بھی کسی کی جان ہوا کرتے تھے،
آج اسی کے لیے انجان ہو گئے۔
محبت تو آج بھی وہی ہے،
بس ہم اس کی زندگی سے نکل گئے۔
جس نام سے چہرہ کھل جاتا تھا،
آج وہی نام آنکھیں نم کر جاتا ہے۔
ہم نے رشتہ بچانے میں خود کو کھونا سیکھا،
اس نے بنا مڑ کر دیکھے جانا سیکھا۔
کچھ وعدے اب بھی یاد آتے ہیں،
کچھ لمحے رات بھر جگاتے ہیں۔
دل مانتا نہیں کہ سب ختم ہوا،
وقت کہتا ہے وہ اب اپنا نہیں رہا۔
ہم نے اس کی خوشی کے لیے خاموشی چن لی،
اپنے حصے میں تنہائی رکھ لی۔
محبت ہار نہیں گئی تھی،
بس ہم ایک کہانی میں ساتھ نہیں رہ سکے۔`
 }},

{
 mood:'Missing You', image:'faroo-missing-you.jpg?v=2', alt:'A quiet cinematic scene about missing someone',
 text:{
  Hinglish:`Tum yaad nahi aate,
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
Kaash ek baar tum phir paas hote.`,
  Hindi:`तुम याद नहीं आते,
तुम तो यादों में रहते हो।
फ़र्क़ सिर्फ़ इतना है,
पहले पास थे, अब दिल में हो।
सुबह की पहली ख़ामोशी में तुम हो,
रात की आख़िरी सोच में तुम हो।
कभी किसी गाने में मिल जाते हो,
कभी पुरानी बात में मुस्कुरा देते हो।
मैं तुम्हें भूलने की कोशिश नहीं करता,
बस तुम्हारे बिना जीना सीख रहा हूँ।
कुछ जगह अब भी तुम्हारी लगती हैं,
कुछ रास्ते तुम तक जाते लगते हैं।
दूरी ने तुम्हें कम नहीं किया,
तुम्हारी कमी को और गहरा कर दिया।
आज भी दिल चुपके से कहता है,
काश एक बार तुम फिर पास होते।`,
  Urdu:`تم یاد نہیں آتے،
تم تو یادوں میں رہتے ہو۔
فرق صرف اتنا ہے،
پہلے پاس تھے، اب دل میں ہو۔
صبح کی پہلی خاموشی میں تم ہو،
رات کی آخری سوچ میں تم ہو۔
کبھی کسی گانے میں مل جاتے ہو،
کبھی پرانی بات میں مسکرا دیتے ہو۔
میں تمہیں بھولنے کی کوشش نہیں کرتا،
بس تمہارے بغیر جینا سیکھ رہا ہوں۔
کچھ جگہیں اب بھی تمہاری لگتی ہیں،
کچھ راستے تم تک جاتے لگتے ہیں۔
دوری نے تمہیں کم نہیں کیا،
تمہاری کمی کو اور گہرا کر دیا۔
آج بھی دل چپکے سے کہتا ہے،
کاش ایک بار تم پھر پاس ہوتے۔`
 }},

{
 mood:'Love', image:'faroo-love.jpg?v=2', alt:'A warm cinematic scene about love',
 text:{
  Hinglish:`Tera naam likhne ki zaroorat nahi,
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
Ek insaan mein poori duniya mil jaati hai.`,
  Hindi:`तेरा नाम लिखने की ज़रूरत नहीं,
मेरी हर बात में तू नज़र आता है।
इश्क़ शोर नहीं करता,
हर ख़ामोशी में तेरा ज़िक्र लाता है।
तेरे साथ वक़्त हल्का सा लगता है,
हर मुश्किल रास्ता आसान सा लगता है।
तेरी हँसी में घर जैसी बात है,
तेरी ख़ामोशी में भी मुलाक़ात है।
मुझे दुनिया से ज़्यादा कुछ नहीं चाहिए,
बस तेरा साथ सच्चा चाहिए।
न बड़े वादे, न बड़ी कहानी,
हर कल में तेरी थोड़ी सी निशानी।
जब तू पास हो दिल संभल जाता है,
हर अधूरा एहसास मुकम्मल हो जाता है।
शायद मोहब्बत इसी को कहते हैं,
एक इंसान में पूरी दुनिया मिल जाती है।`,
  Urdu:`تیرا نام لکھنے کی ضرورت نہیں،
میری ہر بات میں تو نظر آتا ہے۔
عشق شور نہیں کرتا،
ہر خاموشی میں تیرا ذکر لاتا ہے۔
تیرے ساتھ وقت ہلکا سا لگتا ہے،
ہر مشکل راستہ آسان سا لگتا ہے۔
تیری ہنسی میں گھر جیسی بات ہے،
تیری خاموشی میں بھی ملاقات ہے۔
مجھے دنیا سے زیادہ کچھ نہیں چاہیے،
بس تیرا ساتھ سچا چاہیے۔
نہ بڑے وعدے، نہ بڑی کہانی،
ہر کل میں تیری تھوڑی سی نشانی۔
جب تو پاس ہو دل سنبھل جاتا ہے،
ہر ادھورا احساس مکمل ہو جاتا ہے۔
شاید محبت اسی کو کہتے ہیں،
ایک انسان میں پوری دنیا مل جاتی ہے۔`
 }},

{
 mood:'Alone', image:'faroo-alone.jpg?v=2', alt:'A solitary cinematic scene at night',
 text:{
  Hinglish:`Kuch raatein tanha isliye nahi hoti,
Ke aas-paas koi nahi hota.
Tanhaai tab zyada mehsoos hoti hai,
Jab jise chaho woh paas nahi hota.
Mehfil mein bhi dil chup reh sakta hai,
Hansi ke peeche dard reh sakta hai.
Har baat par hum muskura dete hain,
Phir khamoshi mein khud se milte hain.
Kuch naam zubaan par nahi aate,
Par dil unhe roz pukarta hai.
Kuch yaadein bina dastak aa jaati hain,
Aur der tak paas baithi rehti hain.
Phir khud ka saath seekhna padta hai,
Khali jagahon se sulah karni padti hai.
Yaad aur marham ke beech samajh aata hai,
Akele hona, kho jaana nahi hota.`,
  Hindi:`कुछ रातें तन्हा इसलिए नहीं होतीं,
कि आस-पास कोई नहीं होता।
तन्हाई तब ज़्यादा महसूस होती है,
जब जिसे चाहो वो पास नहीं होता।
महफ़िल में भी दिल चुप रह सकता है,
हँसी के पीछे दर्द रह सकता है।
हर बात पर हम मुस्कुरा देते हैं,
फिर ख़ामोशी में ख़ुद से मिलते हैं।
कुछ नाम ज़ुबान पर नहीं आते,
पर दिल उन्हें रोज़ पुकारता है।
कुछ यादें बिना दस्तक आ जाती हैं,
और देर तक पास बैठी रहती हैं।
फिर ख़ुद का साथ सीखना पड़ता है,
ख़ाली जगहों से सुलह करनी पड़ती है।
याद और मरहम के बीच समझ आता है,
अकेले होना, खो जाना नहीं होता।`,
  Urdu:`کچھ راتیں تنہا اس لیے نہیں ہوتیں،
کہ آس پاس کوئی نہیں ہوتا۔
تنہائی تب زیادہ محسوس ہوتی ہے،
جب جسے چاہو وہ پاس نہیں ہوتا۔
محفل میں بھی دل چپ رہ سکتا ہے،
ہنسی کے پیچھے درد رہ سکتا ہے۔
ہر بات پر ہم مسکرا دیتے ہیں،
پھر خاموشی میں خود سے ملتے ہیں۔
کچھ نام زبان پر نہیں آتے،
پر دل انہیں روز پکارتا ہے۔
کچھ یادیں بنا دستک آ جاتی ہیں،
اور دیر تک پاس بیٹھی رہتی ہیں۔
پھر خود کا ساتھ سیکھنا پڑتا ہے،
خالی جگہوں سے صلح کرنی پڑتی ہے۔
یاد اور مرہم کے بیچ سمجھ آتا ہے،
اکیلے ہونا، کھو جانا نہیں ہوتا۔`
 }},

{
 mood:'Memories', image:'faroo-memories.jpg?v=2', alt:'A warm nostalgic scene of memories and writing',
 text:{
  Hinglish:`Waqt guzar gaya,
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
Par humein wapas zaroor le jaati hain.`,
  Hindi:`वक़्त गुज़र गया,
पर कुछ लम्हे वहीं रह गए।
हम आगे बढ़ तो गए,
दिल के कुछ हिस्से पीछे रह गए।
पुरानी तस्वीरों में एक दुनिया मिलती है,
हर मुस्कुराहट अब भी असली लगती है।
कुछ आवाज़ें यादों में सुनाई देती हैं,
कुछ बातें आज भी दिल छू जाती हैं।
वो दिन लौट कर नहीं आएँगे,
पर हमसे पूरी तरह जाएँगे भी नहीं।
हर गुज़रा पल कुछ देकर गया,
किसी ने ख़ुशी, किसी ने सबक दिया।
हम बदल गए, शहर बदल गए,
कुछ एहसास वहीं के वहीं रह गए।
यादें वक़्त को रोक नहीं सकतीं,
पर हमें वापस ज़रूर ले जाती हैं।`,
  Urdu:`وقت گزر گیا،
پر کچھ لمحے وہیں رہ گئے۔
ہم آگے بڑھ تو گئے،
دل کے کچھ حصے پیچھے رہ گئے۔
پرانی تصویروں میں ایک دنیا ملتی ہے،
ہر مسکراہٹ اب بھی اصلی لگتی ہے۔
کچھ آوازیں یادوں میں سنائی دیتی ہیں،
کچھ باتیں آج بھی دل چھو جاتی ہیں۔
وہ دن لوٹ کر نہیں آئیں گے،
پر ہم سے پوری طرح جائیں گے بھی نہیں۔
ہر گزرا پل کچھ دے کر گیا،
کسی نے خوشی، کسی نے سبق دیا۔
ہم بدل گئے، شہر بدل گئے،
کچھ احساس وہیں کے وہیں رہ گئے۔
یادیں وقت کو روک نہیں سکتیں،
پر ہمیں واپس ضرور لے جاتی ہیں۔`
 }},

{
 mood:'Moving On', image:'faroo-moving-on.jpg?v=2', alt:'A hopeful cinematic scene about moving forward',
 text:{
  Hinglish:`Ab tera intezaar nahi karta,
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
Aur mera safar phir se mera ho gaya.`,
  Hindi:`अब तेरा इंतज़ार नहीं करता,
बस कभी-कभी याद आ जाती है।
दिल ने जाना सीख लिया है,
हर मोहब्बत मंज़िल नहीं होती।
कुछ लोग सफ़र का हिस्सा होते हैं,
ज़िंदगी भर का पता नहीं।
मैंने टूट कर भी ख़ुद को संभाला,
हर अँधेरी रात के बाद सवेरा देखा।
अब पुरानी बातों से शिकायत कम है,
ख़ुद से मोहब्बत थोड़ी ज़्यादा है।
जो चला गया उसे रोकना छोड़ दिया,
जो मेरा है उसके लिए डरना छोड़ दिया।
मैं पीछे मुड़कर सिर्फ़ सीखता हूँ,
वापस जाने के लिए नहीं।
दिल अब भी नर्म है, बस समझदार है,
और मेरा सफ़र फिर से मेरा हो गया।`,
  Urdu:`اب تیرا انتظار نہیں کرتا،
بس کبھی کبھی یاد آ جاتی ہے۔
دل نے جانا سیکھ لیا ہے،
ہر محبت منزل نہیں ہوتی۔
کچھ لوگ سفر کا حصہ ہوتے ہیں،
زندگی بھر کا پتہ نہیں۔
میں نے ٹوٹ کر بھی خود کو سنبھالا،
ہر اندھیری رات کے بعد سویرا دیکھا۔
اب پرانی باتوں سے شکایت کم ہے،
خود سے محبت تھوڑی زیادہ ہے۔
جو چلا گیا اسے روکنا چھوڑ دیا،
جو میرا ہے اس کے لیے ڈرنا چھوڑ دیا۔
میں پیچھے مڑ کر صرف سیکھتا ہوں،
واپس جانے کے لیے نہیں۔
دل اب بھی نرم ہے، بس سمجھدار ہے،
اور میرا سفر پھر سے میرا ہو گیا۔`
 }}
];

const labels={
 Hinglish:{read:'Read Full Shayari →',copy:'Copy Shayari',copied:'Copied ✓',all:'All Shayari'},
 Hindi:{read:'पूरी शायरी पढ़ें →',copy:'शायरी कॉपी करें',copied:'कॉपी हो गई ✓',all:'सभी शायरी'},
 Urdu:{read:'مکمل شاعری پڑھیں ←',copy:'شاعری کاپی کریں',copied:'کاپی ہو گئی ✓',all:'تمام شاعری'}
};

const grid=document.querySelector('#grid');
const languageSelect=document.querySelector('#language');
let mood='All';
let currentLanguage=localStorage.getItem('faroo-language')||'Hinglish';

function setupLanguageSelector(){
 languageSelect.innerHTML=`
   <option value="Hinglish">Hinglish</option>
   <option value="Hindi">हिंदी</option>
   <option value="Urdu">اردو</option>`;
 languageSelect.value=currentLanguage;
 applyDirection();
}

function applyDirection(){
 document.documentElement.lang=currentLanguage==='Hindi'?'hi':currentLanguage==='Urdu'?'ur':'en';
 document.body.classList.toggle('urdu-mode',currentLanguage==='Urdu');
 languageSelect.value=currentLanguage;
}

function openPoem(index){
 const p=poems[index], text=p.text[currentLanguage], l=labels[currentLanguage];
 const overlay=document.createElement('div');
 overlay.className='poem-reader';

 overlay.innerHTML=`<article class="poem-reader-page ${currentLanguage==='Urdu'?'rtl-reader':''}">
 <button class="reader-close" type="button" aria-label="Close">×</button>
 <div class="reader-hero"><img class="reader-image" src="${farooImageSrc(p.image)}" alt="${p.alt}"><div class="reader-image-shade"></div>
 <div class="reader-title"><span>FAROO</span><div>${p.mood} · ${currentLanguage==='Hindi'?'हिंदी':currentLanguage==='Urdu'?'اردو':'Hinglish'}</div></div></div>
 <div class="reader-content"><div class="reader-poem">${text}</div>
 <div class="reader-bottom"><span>Words for what the heart can't say.</span><button class="reader-copy" type="button">${l.copy}</button></div></div>
 </article>`;

 document.body.appendChild(overlay);
 document.body.classList.add('reader-open');

 const close=()=>{
   overlay.remove();
   document.body.classList.remove('reader-open');
 };

 overlay.querySelector('.reader-close').onclick=close;
 overlay.onclick=e=>{if(e.target===overlay)close()};

 const esc=e=>{
   if(e.key==='Escape'){
     close();
     document.removeEventListener('keydown',esc);
   }
 };

 document.addEventListener('keydown',esc);

 overlay.querySelector('.reader-copy').onclick=async e=>{
   await navigator.clipboard.writeText(text);
   e.currentTarget.textContent=l.copied;
   setTimeout(()=>e.currentTarget.textContent=l.copy,1400);
 };
}

function render(){
 grid.innerHTML='';
 const l=labels[currentLanguage];

 poems
 .map((p,index)=>({...p,index}))
 .filter(p=>mood==='All'||p.mood===mood)
 .forEach(p=>{
   const text=p.text[currentLanguage];
   const preview=text.split('\n').slice(0,4).join('\n');

   const c=document.createElement('article');
   c.className='card clickable-card';
   c.tabIndex=0;
   c.setAttribute('role','button');

   c.innerHTML=`<div class="card-visual"><img src="${farooImageSrc(p.image)}" alt="${p.alt}" loading="lazy"></div>
   <div class="card-copy ${currentLanguage==='Urdu'?'rtl-copy':''}"><div><div class="meta">${p.mood} · ${currentLanguage==='Hindi'?'हिंदी':currentLanguage==='Urdu'?'اردو':'Hinglish'}</div><div class="poem-preview">${preview}
…</div></div>
   <div class="actions"><span>FAROO</span><span class="read-full">${l.read}</span></div></div>`;

   c.onclick=()=>openPoem(p.index);

   c.onkeydown=e=>{
     if(e.key==='Enter'||e.key===' '){
       e.preventDefault();
       openPoem(p.index);
     }
   };

   grid.appendChild(c);
 });
}

document.querySelectorAll('.moods button').forEach(b=>b.onclick=()=>{
 const a=document.querySelector('.moods .active');
 if(a)a.classList.remove('active');

 b.classList.add('active');
 mood=b.dataset.mood;
 render();

 document.querySelector('#shayari').scrollIntoView({behavior:'smooth'});
});

languageSelect.onchange=()=>{
 currentLanguage=languageSelect.value;
 localStorage.setItem('faroo-language',currentLanguage);
 applyDirection();
 render();
};

setupLanguageSelector();
render();


/* ==================================================
   FAROO SONGS PLAYER
   ================================================== */

function formatFarooTime(seconds){
  if(!Number.isFinite(seconds)) return "0:00";

  const minutes=Math.floor(seconds/60);
  const secs=Math.floor(seconds%60);

  return `${minutes}:${secs.toString().padStart(2,"0")}`;
}

function getFarooSongTitle(audio){
  const card=audio.closest(".song-card");
  return card?.querySelector(".song-title")?.textContent.trim() || "FAROO song";
}

function toggleFarooSong(audioId,button){
  const audio=document.getElementById(audioId);

  if(!audio)return;

  document.querySelectorAll(".song-card audio").forEach(otherAudio=>{
    if(otherAudio!==audio){
      otherAudio.pause();

      const otherCard=otherAudio.closest(".song-card");
      const otherButton=otherCard?.querySelector(".song-play");

      if(otherButton){
        const otherTitle=getFarooSongTitle(otherAudio);
        otherButton.textContent="▶";
        otherButton.setAttribute("aria-label",`Play ${otherTitle}`);
      }
    }
  });

  const title=getFarooSongTitle(audio);

  if(audio.paused){
    audio.play()
      .then(()=>{
        button.textContent="❚❚";
        button.setAttribute("aria-label",`Pause ${title}`);
      })
      .catch(error=>{
        console.error("FAROO audio playback failed:",error);
      });
  }else{
    audio.pause();
    button.textContent="▶";
    button.setAttribute("aria-label",`Play ${title}`);
  }
}

document.querySelectorAll(".song-card").forEach(card=>{

  const audio=card.querySelector("audio");
  const button=card.querySelector(".song-play");
  const progress=card.querySelector(".song-progress");
  const progressBar=card.querySelector(".song-progress-bar");
  const currentTime=card.querySelector(".song-current");
  const duration=card.querySelector(".song-duration");

  if(!audio)return;

  const title=getFarooSongTitle(audio);

  if(button){
    button.setAttribute("aria-label",`Play ${title}`);
  }

  audio.addEventListener("loadedmetadata",()=>{
    if(duration){
      duration.textContent=formatFarooTime(audio.duration);
    }
  });

  if(audio.readyState>=1 && duration){
    duration.textContent=formatFarooTime(audio.duration);
  }

  audio.addEventListener("timeupdate",()=>{

    if(currentTime){
      currentTime.textContent=formatFarooTime(audio.currentTime);
    }

    if(progressBar && audio.duration){
      const percentage=(audio.currentTime/audio.duration)*100;
      progressBar.style.width=`${percentage}%`;
    }

  });

  audio.addEventListener("play",()=>{
    if(button){
      button.textContent="❚❚";
      button.setAttribute("aria-label",`Pause ${title}`);
    }
  });

  audio.addEventListener("pause",()=>{
    if(button && !audio.ended){
      button.textContent="▶";
      button.setAttribute("aria-label",`Play ${title}`);
    }
  });

  audio.addEventListener("ended",()=>{

    audio.currentTime=0;

    if(button){
      button.textContent="▶";
      button.setAttribute("aria-label",`Play ${title}`);
    }

    if(progressBar){
      progressBar.style.width="0%";
    }

    if(currentTime){
      currentTime.textContent="0:00";
    }

  });

  if(progress){
    progress.style.cursor="pointer";

    progress.addEventListener("click",event=>{

      if(!audio.duration)return;

      const rect=progress.getBoundingClientRect();
      const position=(event.clientX-rect.left)/rect.width;

      audio.currentTime=Math.max(
        0,
        Math.min(audio.duration,position*audio.duration)
      );

    });
  }

});


/* ==================================================
   FAROO FULL-SCREEN SONG COVER VIEWER
   ================================================== */

function openSongCover(cover){
  const img=cover.querySelector("img");

  if(!img)return;

  const viewer=document.createElement("div");
  viewer.className="song-cover-viewer";
  viewer.setAttribute("role","dialog");
  viewer.setAttribute("aria-modal","true");
  viewer.setAttribute("aria-label",img.alt || "FAROO song artwork");

  const closeButton=document.createElement("button");
  closeButton.className="song-cover-close";
  closeButton.type="button";
  closeButton.setAttribute("aria-label","Close artwork");
  closeButton.textContent="×";

  const largeImage=document.createElement("img");
  largeImage.src=img.src;
  largeImage.alt=img.alt;

  viewer.appendChild(closeButton);
  viewer.appendChild(largeImage);

  document.body.appendChild(viewer);
  document.body.classList.add("reader-open");

  const closeViewer=()=>{
    viewer.remove();
    document.body.classList.remove("reader-open");
    document.removeEventListener("keydown",handleEscape);
  };

  const handleEscape=event=>{
    if(event.key==="Escape"){
      closeViewer();
    }
  };

  closeButton.addEventListener("click",closeViewer);

  viewer.addEventListener("click",event=>{
    if(event.target===viewer){
      closeViewer();
    }
  });

  document.addEventListener("keydown",handleEscape);

  closeButton.focus();
}

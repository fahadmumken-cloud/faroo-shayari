// FAROO 15 Oct 2026
poems.unshift({mood:'Moving On',date:'15 Oct 2026',image:'https://fahadmumken-cloud.github.io/faroo-shayari/covers/faroo-2026-10-15-lantern-alley.svg?v=1',alt:'15 October evening alley cover',text:{Hinglish:"Purani gali mein shaam utri\nDeewar par peeli roshni bikhri\nBand darwaaze ke paas khada\nMain apne kal se aaj mila\nHaathon mein kuch khaali panne\nDil mein ab bhi zinda sapne\nTeri yaad ne dastak di\nMaine chup rehkar sun li\nNa gussa tha na sawaal\nBas badla hua tha khayaal\nEk chhota diya jalta raha\nAndhere se kuch kehta raha\nMaine peechhe mudna chhoda\nToote hausle ko phir joda\nSubah ki taraf chal pada",Hindi:"",Urdu:""}});

// Load repository-hosted Hindi and Urdu editions, then refresh the collection.
(function(){
 const entry=poems.find(p=>p.date==='15 Oct 2026');
 if(!entry)return;
 const paths=['daily-2026-10-15-hindi.txt?v=1','daily-2026-10-15-urdu.txt?v=1'];
 Promise.all(paths.map(path=>fetch(path).then(r=>{if(!r.ok)throw Error('FAROO language '+r.status);return r.text();})))
 .then(([hi,ur])=>{entry.text.Hindi=hi.trim();entry.text.Urdu=ur.trim();if(typeof render==='function')render();})
 .catch(e=>console.error('FAROO 15 Oct languages unavailable',e));
})();

const originalOpenPoem=openPoem;
openPoem=function(index){
 const p=poems[index];
 if(!/^https?:\/\//.test(p.image)) return originalOpenPoem(index);
 const savedBase=window.IMAGE_BASE;
 const image=p.image;
 p.image=image.replace(/^https?:\/\/[^/]+\//,'');
 originalOpenPoem(index);
 const img=document.querySelector('.poem-reader .reader-image');
 if(img) img.src=image;
 p.image=image;
};
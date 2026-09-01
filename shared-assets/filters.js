/* ونوس شاپ | Copyright © 2026 | برنامه‌نویس: رضا علی یان */

function catalogInit(){
 const grid=document.querySelector('[data-product-grid]'); if(!grid)return;
 let list=[...STORE.products]; const params=new URLSearchParams(location.search); const q=params.get('q')||'';
 const search=document.querySelector('[data-catalog-search]'); if(search){search.value=q;search.addEventListener('input',apply)}
 document.querySelector('[data-sort]')?.addEventListener('change',apply);
 document.querySelectorAll('[data-category]').forEach(x=>x.addEventListener('change',apply));
 document.querySelector('[data-open-filter]')?.addEventListener('click',()=>document.querySelector('.filters').classList.add('open'));
 document.querySelector('[data-close-filter]')?.addEventListener('click',()=>document.querySelector('.filters').classList.remove('open'));
 function apply(){const term=(search?.value||'').trim();list=STORE.products.filter(p=>(!term||(p.name+p.brand+p.category).includes(term))&&([...document.querySelectorAll('[data-category]:checked')].length===0||[...document.querySelectorAll('[data-category]:checked')].some(x=>p.category===x.value)));const sort=document.querySelector('[data-sort]')?.value;if(sort==='low')list.sort((a,b)=>a.price-b.price);if(sort==='high')list.sort((a,b)=>b.price-a.price);if(sort==='rating')list.sort((a,b)=>b.rating-a.rating);renderCards(list,grid);document.querySelector('[data-count]').textContent=new Intl.NumberFormat('fa-IR').format(list.length)+' محصول'}
 apply();
}
document.addEventListener('DOMContentLoaded',catalogInit);

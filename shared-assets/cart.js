/* ونوس شاپ | Copyright © 2026 | برنامه‌نویس: رضا علی یان */

function renderCart(){
 const box=document.querySelector('[data-cart-list]'), sum=document.querySelector('[data-summary]');if(!box)return;
 const c=cart();
 if(!c.length){box.innerHTML='<div class="empty"><h2>سبد خرید خالی است</h2><p class="muted">هنوز محصولی انتخاب نکرده‌ای.</p><a class="btn primary" href="products.html">مشاهده محصولات</a></div>';sum.innerHTML='';return}
 box.innerHTML=c.map(x=>{const p=productById(x.id);return `<div class="cart-item"><img src="${p.images[0]}" alt="${p.name}"><div><b>${p.name}</b><div class="muted">${p.brand}</div><div class="quantity"><button onclick="changeQty(${p.id},-1)">−</button><span>${x.qty}</span><button onclick="changeQty(${p.id},1)">+</button></div></div><div><b>${money(p.price*(1-p.discount/100)*x.qty)}</b><br><button class="btn ghost" onclick="removeCart(${p.id})">حذف</button></div></div>`}).join('');
 const subtotal=c.reduce((s,x)=>{const p=productById(x.id);return s+p.price*(1-p.discount/100)*x.qty},0), shipping=subtotal>2500000?0:85000, discount=c.reduce((s,x)=>{const p=productById(x.id);return s+p.price*(p.discount/100)*x.qty},0);
 sum.innerHTML=`<h3>خلاصه سفارش</h3><div class="sum-row"><span>جمع کالا</span><b>${money(subtotal+discount)}</b></div><div class="sum-row"><span>تخفیف</span><b>${money(discount)}</b></div><div class="sum-row"><span>ارسال</span><b>${shipping?money(shipping):'رایگان'}</b></div><div class="sum-row sum-total"><span>مبلغ نهایی</span><b>${money(subtotal+shipping)}</b></div><a class="btn primary add" href="checkout.html">ادامه و پرداخت</a>`;
 refreshCounts();
}
function changeQty(id,d){const c=cart(),x=c.find(i=>i.id===id);if(!x)return;x.qty+=d;if(x.qty<1)return removeCart(id);set('cart',c);renderCart()}
function removeCart(id){set('cart',cart().filter(x=>x.id!==id));toast('محصول از سبد حذف شد');renderCart()}
document.addEventListener('DOMContentLoaded',renderCart);

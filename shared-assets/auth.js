/* ونوس شاپ | Copyright © 2026 | برنامه‌نویس: رضا علی یان */

function validate(form){
 let ok=true;form.querySelectorAll('[required]').forEach(i=>{let e=i.parentElement.querySelector('.error');if(!i.value.trim()){ok=false;if(!e){e=document.createElement('div');e.className='error';i.parentElement.append(e)}e.textContent='این فیلد الزامی است';}else if(e)e.textContent=''});return ok
}
document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('[data-auth-form]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();if(!validate(f))return;set('user',{name:f.querySelector('[name=name]')?.value||'کاربر',email:f.querySelector('[name=email]')?.value||''});toast('ورود با موفقیت انجام شد ✓');setTimeout(()=>location.href='account.html',500)}));
});

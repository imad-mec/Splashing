const WA="212690929646";
// n = [عربي, Français, English] · c = beauty|care|kitchen|jewelry · l = رابط الأفلييت
let PRODUCTS=[
{n:["سيروم فيتامين C للإشراق","Sérum Vitamine C éclat","Vitamin C Glow Serum"],c:"beauty",p:189,e:"🧴",k:"#FBE3DC",l:"https://example.com/a1"},
{n:["باليت مكياج فاخر","Palette maquillage luxe","Luxury Makeup Palette"],c:"beauty",p:249,e:"🎨",k:"#F3DDE6",l:"https://example.com/a2"},
{n:["عطر نسائي أنيق","Parfum femme élégant","Elegant Women's Perfume"],c:"beauty",p:329,e:"🌸",k:"#EFE0F5",l:"https://example.com/a3"},
{n:["كريم ترطيب عميق","Crème hydratation intense","Deep Moisture Cream"],c:"care",p:129,e:"🫧",k:"#E3EFEA",l:"https://example.com/a4"},
{n:["زيت الأرغان الخالص","Huile d'argan pure","Pure Argan Oil"],c:"care",p:99,e:"💧",k:"#F7EBCF",l:"https://example.com/a5"},
{n:["مجموعة أواني طهي راقية","Batterie de cuisine raffinée","Fine Cookware Set"],c:"kitchen",p:599,e:"🍳",k:"#EADFD6",l:"https://example.com/a6"},
{n:["طقم فناجين قهوة","Service à café","Coffee Cup Set"],c:"kitchen",p:219,e:"☕",k:"#F3E3E0",l:"https://example.com/a7"},
{n:["عقد ذهبي رقيق","Collier doré délicat","Delicate Gold Necklace"],c:"jewelry",p:459,e:"📿",k:"#F7EBCF",l:"https://example.com/a8"},
{n:["سوار مرصّع","Bracelet serti","Jeweled Bracelet"],c:"jewelry",p:389,e:"💎",k:"#EFE0F5",l:"https://example.com/a9"},
{n:["أقراط لؤلؤ طبيعي","Boucles d'oreilles perles","Natural Pearl Earrings"],c:"jewelry",p:279,e:"✨",k:"#FBE3DC",l:"https://example.com/a10"}
];
PRODUCTS.forEach((p,i)=>p.id=p.id||"p"+(i+1));
const T={
ar:{ti:"Splashing | عالم الأناقة والجمال",tag:"عالم الأناقة والجمال",hs:"مجموعة حصرية",hh:"جمالك يستحق الأفضل",hp:"تجميل، عناية، مطبخ راقٍ ومجوهرات مختارة بعناية.",hb:"اكتشفي المتجر",sc:"أقسامنا",sk:"استشارات خاصة",bt:"استشاراتك عند أهل الاختصاص",bs:"طبية · تجارية · رقمية",nh:"الرئيسية",ns:"المتجر",nj:"مجوهرات",nc:"استشارات",nb:"المدونة",all:"الكل",beauty:"تجميل",care:"عناية",kitchen:"مطبخ",jewelry:"مجوهرات",saved:"المفضلة",warn:"الاستشارة الطبية للتوجيه العام ولا تعوض زيارة الطبيب.",ai:"المقالات تُحدَّث تلقائياً وتُنشأ بمساعدة الذكاء الاصطناعي.",empty:"لا توجد منتجات بعد",buy:"اطلبي الآن",book:"احجزي عبر واتساب",more:"اقرئي المزيد ‹",cur:"د.م",legal:"Splashing منصة وسيطة تجمع الأخصائيين والزبائن، وليست طرفاً في أي اتفاق بينهم. يتحمل كل مهني وكل زائر المسؤولية القانونية الكاملة عن أفعاله وعن مخالفة الأنظمة والقوانين الجاري بها العمل.",c1t:"استشارة طبية",c1d:"توجيه عام في العناية بالبشرة والصحة مع مختصين.",c2t:"استشارة تجارية",c2d:"أفكار مشاريع، تسويق، وبناء علامتك التجارية.",c3t:"استشارة رقمية",c3d:"مواقع، متاجر إلكترونية وحضور قوي على الإنترنت.",m1:"طبية",m2:"تجارية",m3:"رقمية",msg:"مرحبا، أريد استشارة ",ord:"مرحبا، أريد طلب: "},
fr:{ti:"Splashing | L'élégance et la beauté",tag:"L'univers de l'élégance et de la beauté",hs:"Collection exclusive",hh:"Votre beauté mérite le meilleur",hp:"Beauté, soins, cuisine raffinée et bijoux soigneusement sélectionnés.",hb:"Découvrir la boutique",sc:"Nos univers",sk:"Consultations privées",bt:"Vos conseils auprès d'experts",bs:"Médicale · Commerciale · Digitale",nh:"Accueil",ns:"Boutique",nj:"Bijoux",nc:"Conseils",nb:"Journal",all:"Tout",beauty:"Beauté",care:"Soins",kitchen:"Cuisine",jewelry:"Bijoux",saved:"Favoris",warn:"La consultation médicale est une orientation générale et ne remplace pas une visite chez le médecin.",ai:"Les articles sont mis à jour automatiquement avec l'aide de l'IA.",empty:"Aucun produit pour le moment",buy:"Commander",book:"Réserver via WhatsApp",more:"Lire la suite ›",cur:"MAD",legal:"Splashing est une plateforme intermédiaire qui met en relation spécialistes et clients ; elle n'est partie à aucun accord entre eux. Chaque professionnel et chaque visiteur assume l'entière responsabilité juridique de ses actes et de toute infraction aux lois et règlements en vigueur.",c1t:"Consultation médicale",c1d:"Orientation générale sur les soins de la peau et le bien-être avec des spécialistes.",c2t:"Conseil commercial",c2d:"Idées de projets, marketing et construction de votre marque.",c3t:"Conseil digital",c3d:"Sites, boutiques en ligne et présence solide sur internet.",m1:"médicale",m2:"commerciale",m3:"digitale",msg:"Bonjour, je souhaite une consultation ",ord:"Bonjour, je souhaite commander : "},
en:{ti:"Splashing | Elegance & Beauty",tag:"A world of elegance and beauty",hs:"Exclusive collection",hh:"Your beauty deserves the best",hp:"Beauty, skincare, refined kitchen and carefully selected jewelry.",hb:"Explore the shop",sc:"Our collections",sk:"Private consultations",bt:"Expert advice, one tap away",bs:"Medical · Business · Digital",nh:"Home",ns:"Shop",nj:"Jewelry",nc:"Advice",nb:"Journal",all:"All",beauty:"Beauty",care:"Care",kitchen:"Kitchen",jewelry:"Jewelry",saved:"Favorites",warn:"Medical consultation is general guidance and does not replace a visit to your doctor.",ai:"Articles are updated automatically with the help of AI.",empty:"No products yet",buy:"Order now",book:"Book via WhatsApp",more:"Read more ›",cur:"MAD",legal:"Splashing is an intermediary platform connecting specialists and clients and is not a party to any agreement between them. Every professional and every visitor bears full legal responsibility for their actions and for any breach of applicable laws and regulations.",c1t:"Medical consultation",c1d:"General guidance on skincare and wellbeing from specialists.",c2t:"Business consultation",c2d:"Project ideas, marketing and building your brand.",c3t:"Digital consultation",c3d:"Websites, online stores and a strong online presence.",m1:"medical",m2:"business",m3:"digital",msg:"Hello, I would like a consultation: ",ord:"Hello, I would like to order: "}
};
const LI={ar:0,fr:1,en:2},SHOP=["all","beauty","care","kitchen"],ICONS={beauty:"💄",care:"🧴",kitchen:"🍽️",jewelry:"💎"};
const BLOG0=[{id:"0",date:"2026-11-01",ar:{t:"5 عادات يومية لبشرة مشرقة",d:"ترطيب منتظم، واقي شمس كل يوم، تنظيف لطيف ونوم كافٍ. الاستمرارية أهم من كثرة المنتجات."},fr:{t:"5 habitudes pour une peau éclatante",d:"Hydratation régulière, protection solaire quotidienne, nettoyage doux et bon sommeil. La régularité compte plus que le nombre de produits."},en:{t:"5 daily habits for glowing skin",d:"Regular moisturizing, daily sunscreen, gentle cleansing and enough sleep. Consistency matters more than the number of products."}}];
let lang="ar",cat="all",fav=[],posts=BLOG0;
try{fav=JSON.parse(localStorage.getItem("spl_fav")||"[]");lang=localStorage.getItem("spl_lang")||"ar"}catch(e){}
if(!T[lang])lang="ar";
const $=id=>document.getElementById(id),t=k=>T[lang][k],pn=p=>p.n[LI[lang]];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const safe=u=>/^(https:\/\/|img\/)/.test(u||"")?esc(u):"#";
const pic=p=>p.img?`<img src="${safe(p.img)}" alt="" loading="lazy">`:esc(p.e||"✨");
const buyLink=p=>/^https:\/\//.test(p.l||"")?esc(p.l):`https://wa.me/${WA}?text=${encodeURIComponent(t("ord")+pn(p))}`;
const all=()=>PRODUCTS.map((p,i)=>({p,i}));
const card=({p,i})=>`<article class="p"><div class="pic" style="background:${p.k}">${pic(p)}<button class="heart ${fav.includes(p.id)?"on":""}" data-fav="${esc(p.id)}" aria-label="♥">♥</button></div><div class="info"><div class="name">${esc(pn(p))}</div><div class="price">${p.p} ${t("cur")}</div><a class="buy" href="${buyLink(p)}" target="_blank" rel="noopener">${t("buy")}</a></div></article>`;
const fill=(id,a)=>$(id).innerHTML=a.length?a.map(card).join(""):`<div class="empty">${t("empty")}</div>`;
function renderBlog(){
 $("blogList").innerHTML=posts.map(b=>{const x=b[lang]||b.ar;let d="";try{d=new Date(b.date).toLocaleDateString(lang==="ar"?"ar-MA":lang,{year:"numeric",month:"long",day:"numeric"})}catch(e){}
  return `<article class="post" data-post><small>${esc(d)}</small><h3>${esc(x.t)}</h3><p>${esc(x.d)}</p><span>${t("more")}</span></article>`}).join("");
}
function render(){
 fill("shopList",all().filter(x=>x.p.c!=="jewelry"&&(cat==="all"||x.p.c===cat)));
 fill("jewelList",all().filter(x=>x.p.c==="jewelry"));
 fill("savedList",all().filter(x=>fav.includes(x.p.id)));
 $("chips").innerHTML=SHOP.map(c=>`<button class="chip ${c===cat?"on":""}" data-cat="${c}">${t(c)}</button>`).join("");
 $("homeCats").innerHTML=Object.entries(ICONS).map(([c,e])=>`<button class="cat" data-home="${c}"><span>${e}</span>${t(c)}</button>`).join("");
 $("consultList").innerHTML=[["🩺",1],["💼",2],["💻",3]].map(([i,k])=>`<div class="con"><div class="ic">${i}</div><div><h3>${t("c"+k+"t")}</h3><p>${t("c"+k+"d")}</p><a href="https://wa.me/${WA}?text=${encodeURIComponent(t("msg")+t("m"+k))}" target="_blank" rel="noopener">${t("book")}</a></div></div>`).join("");
 renderBlog();
}
function setLang(l){
 lang=l;try{localStorage.setItem("spl_lang",l)}catch(_){}
 const d=document.documentElement;d.lang=l;d.dir=l==="ar"?"rtl":"ltr";document.title=t("ti");
 document.querySelectorAll("[data-i18n]").forEach(e=>e.textContent=t(e.dataset.i18n));
 document.querySelectorAll("[data-lang]").forEach(b=>b.classList.toggle("on",b.dataset.lang===l));
 document.querySelectorAll(".ai small").forEach((s,i)=>s.textContent=pn(PRODUCTS[i]));
 render();
}
function go(x){document.querySelectorAll(".tab").forEach(s=>s.classList.toggle("on",s.id===x));document.querySelectorAll("nav button").forEach(b=>b.classList.toggle("on",b.dataset.go===x));scrollTo({top:0})}
document.addEventListener("click",e=>{
 const q=e.target.closest("[data-go],[data-cat],[data-fav],[data-home],[data-post],[data-lang]");if(!q)return;
 const D=q.dataset;
 if(D.lang)setLang(D.lang);
 else if(D.go)go(D.go);
 else if(D.cat){cat=D.cat;render()}
 else if(D.post!==undefined)q.classList.toggle("open");
 else if(D.home){if(D.home==="jewelry")go("jewel");else{cat=D.home;render();go("shop")}}
 else{const i=D.fav;fav=fav.includes(i)?fav.filter(x=>x!==i):[...fav,i];try{localStorage.setItem("spl_fav",JSON.stringify(fav))}catch(_){}render()}
});
// الشريط السينمائي النصف دائري
let arcTimer;
function buildArc(){
 clearInterval(arcTimer);const box=$("arc"),n=PRODUCTS.length;if(!n){box.innerHTML="";return}let cur=0,sx=0;
 box.innerHTML=PRODUCTS.map(p=>`<div class="ai" data-go="shop" style="background:${p.k}"><span>${pic(p)}</span><small></small></div>`).join("");
 const items=[...box.children];
 items.forEach((el,i)=>el.querySelector("small").textContent=pn(PRODUCTS[i]));
 function pos(){items.forEach((el,i)=>{
  let d=((i-cur)%n+n)%n;if(d>n/2)d-=n;const a=d*.45,ab=Math.abs(d);
  el.style.transform=`translate(${Math.sin(a)*130}px,${(1-Math.cos(a))*120}px) rotate(${a*57.3}deg) scale(${1-Math.min(ab,3)*.1})`;
  el.style.opacity=ab>2.6?0:1-ab*.18;el.style.zIndex=20-Math.round(ab*2)})}
 const next=s=>{cur=((cur+s)%n+n)%n;pos()};
 const play=()=>{clearInterval(arcTimer);if(!matchMedia("(prefers-reduced-motion:reduce)").matches)arcTimer=setInterval(()=>next(1),2600)};
 box.ontouchstart=e=>{sx=e.touches[0].clientX;clearInterval(arcTimer)};
 box.ontouchend=e=>{const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>30)next(dx<0?1:-1);play()};
 pos();play();
}
// المدونة: كتتحدث أوتوماتيكيا (GitHub Actions كل 6 ساعات) وكتتحمل من posts.json
function loadPosts(){fetch("posts.json?v="+Math.floor(Date.now()/216e5)).then(r=>r.json()).then(j=>{if(Array.isArray(j)&&j.length){posts=j;renderBlog()}}).catch(()=>{})}
function loadProducts(){fetch("products.json?v="+Math.floor(Date.now()/6e4)).then(r=>r.json()).then(j=>{if(Array.isArray(j)){PRODUCTS=j;PRODUCTS.forEach((p,i)=>p.id=p.id||"p"+(i+1));render();buildArc()}}).catch(()=>{})}
buildArc();setLang(lang);loadProducts();loadPosts();setInterval(loadPosts,216e5);

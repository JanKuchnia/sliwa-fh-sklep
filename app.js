(function(){
'use strict';

const CATEGORIES = [
  {key:'ogrodnicze', label:'Narzędzia ogrodnicze', accent:'#4c7a3f', icon:'tree-pine'},
  {key:'budowlane', label:'Narzędzia budowlane', accent:'#1c3a5c', icon:'hammer'},
  {key:'kolana', label:'Kolana i złączki', accent:'#b8801f', icon:'wrench'},
  {key:'lancuchy', label:'Łańcuchy', accent:'#5b6270', icon:'link'},
  {key:'malarskie', label:'Pędzle i akcesoria malarskie', accent:'#c0392b', icon:'paint-roller'},
  {key:'drabiny', label:'Drabiny', accent:'#2f5580', icon:'ladder'},
  {key:'metalowe', label:'Artykuły metalowe', accent:'#21242b', icon:'package'},
  {key:'chemia', label:'Chemia budowlana', accent:'#d69a3d', icon:'flask-conical'},
];

const PRODUCTS = [
  {id:'ogr-1', category:'ogrodnicze', name:'Sekator ogrodowy 20cm', price:39.90, unit:'szt', sku:'SL-101', desc:['Ostrza ze stali węglowej','Ergonomiczny uchwyt antypoślizgowy','Blokada bezpieczeństwa']},
  {id:'ogr-2', category:'ogrodnicze', name:'Grabie metalowe 12 zębów', price:45.00, unit:'szt', sku:'SL-102', desc:['Trzon drewniany 150cm','Ocynkowana głowica','Do liści i trawy']},
  {id:'ogr-3', category:'ogrodnicze', name:'Szpadel ostrogłowy', price:62.50, unit:'szt', sku:'SL-103', desc:['Hartowane ostrze','Wzmocniony trzonek','Do prac ziemnych']},
  {id:'ogr-4', category:'ogrodnicze', name:'Taczka budowlana 100L', price:289.00, unit:'szt', sku:'SL-104', desc:['Pojemność 100 litrów','Koło pneumatyczne','Rama stalowa malowana proszkowo']},
  {id:'bud-1', category:'budowlane', name:'Młotek murarski 800g', price:34.90, unit:'szt', sku:'SL-201', desc:['Głowica kuta','Trzonek fiberglass','Do prac murarskich']},
  {id:'bud-2', category:'budowlane', name:'Poziomica aluminiowa 60cm', price:55.00, unit:'szt', sku:'SL-202', desc:['3 libelle','Profil aluminiowy frezowany','Dokładność 0,5mm/m']},
  {id:'bud-3', category:'budowlane', name:'Packa zębata do kleju', price:28.00, unit:'szt', sku:'SL-203', desc:['Ząbki 10mm','Stal nierdzewna','Uchwyt gumowy']},
  {id:'bud-4', category:'budowlane', name:'Wiertarka udarowa 750W', price:219.00, unit:'szt', sku:'SL-204', desc:['Udar i wiercenie zwykłe','Uchwyt zębaty 13mm','Regulacja obrotów']},
  {id:'kol-1', category:'kolana', name:'Kolano PVC 90° fi110', price:12.90, unit:'szt', sku:'SL-301', desc:['Do kanalizacji zewnętrznej','Kielich uszczelniony','Odporne na UV']},
  {id:'kol-2', category:'kolana', name:'Złączka mosiężna 1/2"', price:8.50, unit:'szt', sku:'SL-302', desc:['Gwint calowy','Do instalacji wodnych','Wysoka szczelność']},
  {id:'kol-3', category:'kolana', name:'Kolano stalowe gwintowane 3/4"', price:14.20, unit:'szt', sku:'SL-303', desc:['Ocynkowane','Gwint wewnętrzny obustronny']},
  {id:'kol-4', category:'kolana', name:'Trójnik PVC fi50', price:9.80, unit:'szt', sku:'SL-304', desc:['Do instalacji odpływowych','Kąt 90°']},
  {id:'lan-1', category:'lancuchy', name:'Łańcuch ogniwowy ocynkowany 6mm', price:11.50, unit:'mb', sku:'SL-401', desc:['Ocynkowany ogniowo','Do zastosowań ogólnych','Sprzedaż na metry bieżące']},
  {id:'lan-2', category:'lancuchy', name:'Łańcuch techniczny fi8', price:15.90, unit:'mb', sku:'SL-402', desc:['Wysoka wytrzymałość','Do zawiesi i mocowań']},
  {id:'lan-3', category:'lancuchy', name:'Łańcuch do huśtawki fi5', price:9.20, unit:'mb', sku:'SL-403', desc:['Ogniwa zaokrąglone','Powłoka antykorozyjna']},
  {id:'lan-4', category:'lancuchy', name:'Zawiesie łańcuchowe 2m', price:79.00, unit:'szt', sku:'SL-404', desc:['Z hakami bezpieczeństwa','Udźwig 1000kg']},
  {id:'mal-1', category:'malarskie', name:'Pędzel płaski 50mm', price:9.90, unit:'szt', sku:'SL-501', desc:['Włosie mieszane','Do farb i lakierów']},
  {id:'mal-2', category:'malarskie', name:'Wałek malarski welurowy', price:14.50, unit:'szt', sku:'SL-502', desc:['Do gładkich powierzchni','Rączka z uchwytem druciarskim']},
  {id:'mal-3', category:'malarskie', name:'Taśma malarska 30mm', price:6.00, unit:'szt', sku:'SL-503', desc:['Łatwe usuwanie bez śladów','Długość 50m']},
  {id:'mal-4', category:'malarskie', name:'Folia malarska ochronna 4x5m', price:12.90, unit:'szt', sku:'SL-504', desc:['Grubość 20 mikronów','Do zabezpieczania podłóg i mebli']},
  {id:'dra-1', category:'drabiny', name:'Drabina aluminiowa 3-elementowa', price:349.00, unit:'szt', sku:'SL-601', desc:['Wysokość robocza do 6m','Stopnie profilowane','Blokady rozstawu']},
  {id:'dra-2', category:'drabiny', name:'Drabino-schody 8 stopni', price:259.00, unit:'szt', sku:'SL-602', desc:['Szeroki podest roboczy','Stabilna konstrukcja']},
  {id:'dra-3', category:'drabiny', name:'Podest malarski', price:189.00, unit:'szt', sku:'SL-603', desc:['Antypoślizgowa powierzchnia','Udźwig 150kg']},
  {id:'met-1', category:'metalowe', name:'Blacha ocynkowana 1x2m', price:89.00, unit:'szt', sku:'SL-701', desc:['Grubość 0,5mm','Do prac dekarskich i blacharskich']},
  {id:'met-2', category:'metalowe', name:'Pręt stalowy fi10', price:6.90, unit:'mb', sku:'SL-702', desc:['Stal konstrukcyjna','Sprzedaż na metry bieżące']},
  {id:'met-3', category:'metalowe', name:'Kątownik stalowy 25x25', price:4.50, unit:'mb', sku:'SL-703', desc:['Ocynkowany','Do konstrukcji lekkich']},
  {id:'met-4', category:'metalowe', name:'Śruby ocynkowane M8 (op. 50szt)', price:18.00, unit:'op.', sku:'SL-704', desc:['Z nakrętkami i podkładkami','Klasa wytrzymałości 8.8']},
  {id:'che-1', category:'chemia', name:'Klej do płytek 25kg', price:32.00, unit:'szt', sku:'SL-801', desc:['Do płytek ceramicznych i gresu','Elastyczny, mrozoodporny']},
  {id:'che-2', category:'chemia', name:'Piana montażowa 750ml', price:16.90, unit:'szt', sku:'SL-802', desc:['Niskorozprężna','Do okien i drzwi']},
  {id:'che-3', category:'chemia', name:'Silikon sanitarny biały', price:11.50, unit:'szt', sku:'SL-803', desc:['Odporny na grzyby i pleśń','Do fug i uszczelnień']},
  {id:'che-4', category:'chemia', name:'Grunt głęboko penetrujący 5L', price:42.00, unit:'szt', sku:'SL-804', desc:['Wzmacnia podłoże','Pod tynki i farby']},
];

const FEATURED_IDS = ['ogr-1','bud-4','mal-2','dra-1','met-1','kol-1','lan-1','che-1'];
const STEP_LABELS = ['Dane','Dostawa','Płatność','Podsumowanie'];
const DELIVERY_OPTS = [
  {key:'pickup', label:'Odbiór osobisty', sub:'Rzeszotary 451, gratis', price:'Gratis'},
  {key:'courier', label:'Kurier', sub:'Dostawa 1-2 dni robocze', price:'19,90 zł'},
  {key:'freight', label:'Transport własny (duże zamówienia)', sub:'Wycena indywidualna', price:'Zapytaj'},
];
const PAYMENT_OPTS = [
  {key:'transfer', label:'Przelew tradycyjny', sub:'Dane do przelewu w mailu potwierdzającym'},
  {key:'cod', label:'Płatność przy odbiorze / za pobraniem', sub:'Gotówka lub karta'},
  {key:'online', label:'Płatność online', sub:'Szybkie płatności, wkrótce dostępne'},
];

const catByKey = {}; CATEGORIES.forEach(c=>catByKey[c.key]=c);
const productById = {}; PRODUCTS.forEach(p=>productById[p.id]=p);

function fmt(n){ return n.toFixed(2).replace('.',',')+' zł'; }
function esc(s){ return String(s).replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }

let state = {
  view:'home', activeCategory:null, activeProductId:null, productQty:1,
  cart:{}, searchQuery:'',
  showWholesaleModal:false, toast:null,
  checkoutStep:1, orderNumber:null,
  form:{firstName:'',lastName:'',company:'',phone:'',email:'',nip:'',wantsInvoice:false,delivery:'pickup',payment:'transfer',acceptTerms:false},
};
let toastToken = 0;

function setState(patch){
  Object.assign(state, typeof patch==='function' ? patch(state) : patch);
  render();
}

function goHome(){ setState({view:'home'}); window.scrollTo(0,0); }
function openCategory(key){ setState({view:'category', activeCategory:key}); window.scrollTo(0,0); }
function openProduct(id){ setState({view:'product', activeProductId:id, productQty:1}); window.scrollTo(0,0); }
function goCart(){ setState({view:'cart'}); window.scrollTo(0,0); }
function startCheckout(){ setState({view:'checkout', checkoutStep:1}); window.scrollTo(0,0); }
function nextStep(){ setState(s=>({checkoutStep:Math.min(4,s.checkoutStep+1)})); window.scrollTo(0,0); }
function prevStep(){ setState(s=>({checkoutStep:Math.max(1,s.checkoutStep-1)})); window.scrollTo(0,0); }

function addToCart(id, qty){
  qty = qty||1;
  setState(s=>{ const cart={...s.cart}; cart[id]=(cart[id]||0)+qty; return {cart}; });
  showToast('Dodano do koszyka');
}
function setQty(id, qty){ setState(s=>{ const cart={...s.cart}; if(qty<=0){ delete cart[id]; } else { cart[id]=qty; } return {cart}; }); }
function incProductQty(){ setState(s=>({productQty:s.productQty+1})); }
function decProductQty(){ setState(s=>({productQty:Math.max(1,s.productQty-1)})); }

function showToast(msg){
  const token = ++toastToken;
  setState({toast:msg});
  setTimeout(()=>{ if(toastToken===token) setState({toast:null}); }, 1800);
}

function toggleWholesaleModal(open){ setState({showWholesaleModal:open}); }
function updateForm(field, value){ setState(s=>({form:{...s.form,[field]:value}})); }

function placeOrder(){
  if(!state.form.acceptTerms) return;
  const num = 'SL-'+Math.floor(100000+Math.random()*900000);
  setState({view:'confirmation', orderNumber:num});
  window.scrollTo(0,0);
}
function resetShop(){
  setState({
    view:'home', cart:{}, checkoutStep:1, orderNumber:null,
    form:{firstName:'',lastName:'',company:'',phone:'',email:'',nip:'',wantsInvoice:false,delivery:'pickup',payment:'transfer',acceptTerms:false},
  });
  window.scrollTo(0,0);
}
function setSearch(q){ state.searchQuery = q; }
function submitSearch(){ if(state.searchQuery.trim()){ setState({view:'search'}); window.scrollTo(0,0); } }

function cartCount(){ return Object.values(state.cart).reduce((a,b)=>a+b,0); }

function imgPlaceholder(p, extraClass, height){
  const cat = catByKey[p.category];
  const style = `--accent:${cat?cat.accent:'#1c3a5c'};${height?`height:${height}px`:''}`;
  return `<div class="img-placeholder${extraClass?' '+extraClass:''}" style="${style}"><i data-lucide="${cat?cat.icon:'box'}"></i></div>`;
}

function productCard(p, imgHeight){
  return `
  <div class="p-card" data-open-product="${p.id}">
    ${imgPlaceholder(p, '', imgHeight)}
    <div class="p-body">
      <div class="p-name">${esc(p.name)}</div>
      <div class="p-price">${fmt(p.price)} / ${esc(p.unit)}</div>
      <button class="p-add" data-add-cart="${p.id}">Dodaj do koszyka</button>
    </div>
  </div>`;
}

function headerHtml(){
  const count = cartCount();
  return `
  <div class="topbar"><div class="wrap">
    <div class="topbar-left">
      <span><i data-lucide="map-pin"></i> Rzeszotary 451, 32-040 Świątniki Górne</span>
      <span><i data-lucide="phone"></i> 12 270 43 53</span>
      <span>Pon–pt 07:00–17:00, weekend nieczynne</span>
    </div>
    <div class="topbar-rating"><span class="stars">${'<i data-lucide="star" class="ico-fill"></i>'.repeat(5)}</span><span class="count">4,8 (12 opinii Google)</span></div>
  </div></div>
  <header><div class="wrap">
    <div class="logo" data-nav="home">
      <div class="logo-main">FH ŚLIWA</div>
      <div class="logo-sub">NARZĘDZIA OGRODNICZO-BUDOWLANE</div>
    </div>
    <div class="search">
      <input data-role="search-input" value="${esc(state.searchQuery)}" placeholder="Szukaj produktu, np. drabina, pędzel...">
      <button data-role="search-submit"><i data-lucide="search"></i></button>
    </div>
    <nav class="main-nav">
      <a data-nav="home">Strona główna</a>
      <a data-role="open-wholesale">Hurt</a>
      <div class="cart-btn" data-nav="cart">
        <i data-lucide="shopping-cart" class="icon"></i>
        <span>Koszyk</span>
        ${count ? `<span class="cart-badge">${count}</span>` : ''}
      </div>
    </nav>
  </div></header>`;
}

function homeHtml(){
  const cats = CATEGORIES.map(c=>`
    <div class="cat-card reveal" data-open-category="${c.key}">
      <div class="cat-icon" style="background:${c.accent}"><i data-lucide="${c.icon}"></i></div>
      <div class="cat-label">${esc(c.label)}</div>
      <div class="cat-count">${PRODUCTS.filter(p=>p.category===c.key).length} produktów</div>
    </div>`).join('');

  const featured = FEATURED_IDS.map(id=>productById[id]).filter(Boolean).map(p=>`<div class="reveal">${productCard(p)}</div>`).join('');

  return `
  <section class="hero">
    <img src="./assets/sliwa-facade.png" alt="Siedziba FH Śliwa w Rzeszotarach">
    <div class="hero-overlay"></div>
    <div class="hero-content"><div class="hero-inner hero-enter">
      <div class="hero-badge"><i data-lucide="star" class="ico-fill"></i> 4,8 · 12 opinii Google</div>
      <h1>Narzędzia ogrodniczo-budowlane w Rzeszotarach</h1>
      <p>Od lat zaopatrujemy okolicznych majsterkowiczów, ekipy budowlane i firmy w narzędzia, okucia, chemię i akcesoria malarskie. Odbiór na miejscu w Rzeszotarach.</p>
      <div class="hero-actions">
        <a class="btn-gold" href="#katalog" data-nav="home">Przeglądaj katalog</a>
        <button class="btn-outline-light" data-role="open-wholesale">Zapytaj o ceny hurtowe</button>
      </div>
    </div></div>
  </section>

  <section id="katalog" class="section">
    <h2 class="reveal">Kategorie</h2>
    <p class="lead">Wybierz kategorię, aby zobaczyć pełny asortyment</p>
    <div class="grid-4">${cats}</div>
  </section>

  <section class="featured-section">
    <h2 class="reveal">Polecane produkty</h2>
    <div class="grid-4 products">${featured}</div>
  </section>

  <section class="wholesale-banner"><div class="wrap reveal">
    <div>
      <div class="title">Zamówienia hurtowe dla firm i ekip budowlanych</div>
      <div class="desc">Stałe rabaty ilościowe, faktura VAT, indywidualna wycena zamówienia.</div>
    </div>
    <button data-role="open-wholesale">Zapytaj o ofertę</button>
  </div></section>

  <section class="about">
    <div>
      <h2>O firmie</h2>
      <p>FH Śliwa działa w Rzeszotarach koło Świątnik Górnych, zaopatrując lokalnych klientów indywidualnych oraz firmy w narzędzia ogrodnicze i budowlane, artykuły metalowe, chemię budowlaną, drabiny i akcesoria malarskie.</p>
      <p class="soft">Odbiór osobisty na miejscu, doradztwo przy doborze narzędzi i stałe ceny dla klientów hurtowych.</p>
    </div>
    <div class="hours-card">
      <div class="title">Godziny otwarcia</div>
      <div class="hours-row"><span>Poniedziałek – piątek</span><span style="font-weight:600">07:00–17:00</span></div>
      <div class="hours-row soft"><span>Sobota – niedziela</span><span>Nieczynne</span></div>
      <div class="addr">
        <div><i data-lucide="map-pin"></i> Rzeszotary 451, 32-040 Świątniki Górne</div>
        <div><i data-lucide="phone"></i> 12 270 43 53</div>
      </div>
    </div>
  </section>`;
}

function productGridHtml(list, title, crumbExtra){
  const cards = list.map(p=>productCard(p)).join('');
  return `
  <section class="page-section">
    <div class="breadcrumb"><a data-nav="home">Strona główna</a> / ${crumbExtra}</div>
    <h1>${title}</h1>
    <div class="grid-4 products">${cards || '<p style="color:var(--ink-soft)">Brak produktów.</p>'}</div>
  </section>`;
}

function categoryHtml(){
  const cat = catByKey[state.activeCategory];
  const label = cat ? cat.label : '';
  const list = state.activeCategory ? PRODUCTS.filter(p=>p.category===state.activeCategory) : PRODUCTS;
  return productGridHtml(list, esc(label), esc(label));
}

function searchHtml(){
  const q = state.searchQuery.trim().toLowerCase();
  const list = PRODUCTS.filter(p=>p.name.toLowerCase().includes(q));
  return `
  <section class="page-section">
    <div class="breadcrumb"><a data-nav="home">Strona główna</a> / Wyniki wyszukiwania</div>
    <h1 class="tight">Wyniki dla „${esc(state.searchQuery)}”</h1>
    <p class="count">${list.length} znalezionych produktów</p>
    <div class="grid-4 products">${list.map(p=>productCard(p)).join('') || '<p style="color:var(--ink-soft)">Brak produktów.</p>'}</div>
  </section>`;
}

function productHtml(){
  const p = productById[state.activeProductId];
  if(!p) return productGridHtml(PRODUCTS, 'Produkt nie znaleziony', 'Katalog');
  const cat = catByKey[p.category];
  const qty = state.productQty;
  const related = PRODUCTS.filter(x=>x.category===p.category && x.id!==p.id).slice(0,3);
  return `
  <section class="product-section">
    <div class="breadcrumb"><a data-nav="home">Strona główna</a> / ${esc(cat?cat.label:'')} / ${esc(p.name)}</div>
    <div class="product-grid">
      ${imgPlaceholder(p, 'product-img-lg')}
      <div class="product-info">
        <h1>${esc(p.name)}</h1>
        <div class="product-sku">SKU: ${esc(p.sku)}</div>
        <div class="product-price">${fmt(p.price)} <span class="unit">/ ${esc(p.unit)}</span></div>
        <a class="wholesale-link" data-role="open-wholesale">Klient hurtowy? Zapytaj o cenę →</a>
        <div class="qty-row">
          <div class="qty-box">
            <button data-qty="dec">−</button>
            <div class="val">${qty}</div>
            <button data-qty="inc">+</button>
          </div>
          <button class="add-line" data-role="add-active">Dodaj do koszyka: ${fmt(p.price*qty)}</button>
        </div>
        <div class="desc-block">
          <div class="title">Opis produktu</div>
          <ul>${p.desc.map(d=>`<li>${esc(d)}</li>`).join('')}</ul>
        </div>
        <div class="product-meta">
          <span><i data-lucide="map-pin"></i> Odbiór osobisty w Rzeszotarach</span>
          <span><i data-lucide="truck"></i> Dostawa kurierem</span>
        </div>
      </div>
    </div>
    <div class="related">
      <h2>Powiązane produkty</h2>
      <div class="grid-3">${related.map(r=>`
        <div class="p-card" data-open-product="${r.id}">
          ${imgPlaceholder(r, 'related-img')}
          <div class="related-body">
            <div class="related-name">${esc(r.name)}</div>
            <div class="related-price">${fmt(r.price)} / ${esc(r.unit)}</div>
          </div>
        </div>`).join('')}</div>
    </div>
  </section>`;
}

function cartHtml(){
  const ids = Object.keys(state.cart);
  if(ids.length===0){
    return `
    <section class="cart-section">
      <h1>Koszyk</h1>
      <div class="cart-empty">
        <i data-lucide="shopping-cart" class="icon"></i>
        <div class="msg">Twój koszyk jest pusty</div>
        <a data-nav="home">Przeglądaj katalog</a>
      </div>
    </section>`;
  }
  const entries = ids.map(id=>{
    const p = productById[id]; const qty = state.cart[id];
    return {id, p, qty};
  }).filter(e=>e.p);
  const subtotal = entries.reduce((sum,e)=>sum+e.p.price*e.qty,0);
  const deliveryFee = state.form.delivery==='courier' ? 19.9 : 0;
  const total = subtotal + deliveryFee;

  const items = entries.map(e=>`
    <div class="cart-item">
      ${imgPlaceholder(e.p, 'cart-item-img')}
      <div class="cart-item-info">
        <div class="cart-item-name">${esc(e.p.name)}</div>
        <div class="cart-item-price">${fmt(e.p.price)} / ${esc(e.p.unit)}</div>
      </div>
      <div class="cart-qty-box">
        <button data-cart-dec="${e.id}">−</button>
        <div class="val">${e.qty}</div>
        <button data-cart-inc="${e.id}">+</button>
      </div>
      <div class="cart-item-total">${fmt(e.p.price*e.qty)}</div>
      <button class="cart-item-remove" data-cart-remove="${e.id}"><i data-lucide="x"></i></button>
    </div>`).join('');

  return `
  <section class="cart-section">
    <h1>Koszyk</h1>
    <div class="cart-layout">
      <div class="cart-items">${items}</div>
      <div class="summary-card">
        <div class="title">Podsumowanie</div>
        <div class="summary-row"><span>Suma częściowa</span><span>${fmt(subtotal)}</span></div>
        <div class="summary-row soft"><span>Dostawa</span><span>ustalana w kolejnym kroku</span></div>
        <div class="summary-row total"><span>Razem</span><span>${fmt(subtotal)}</span></div>
        <button class="checkout-btn" data-role="start-checkout">Przejdź do zamówienia</button>
        <a class="wholesale-inline" data-role="open-wholesale">Zamawiasz na firmę? Zapytaj o rabat</a>
      </div>
    </div>
  </section>`;
}

function stepsHtml(){
  const n = state.checkoutStep;
  return `<div class="steps">${STEP_LABELS.map((label,i)=>{
    const num = i+1;
    const cls = num===n ? 'active' : num<n ? 'done' : 'pending';
    const inner = num<n ? '<i data-lucide="check"></i>' : num;
    return `
    <div class="step">
      <div class="step-inner">
        <div class="step-circle ${cls}">${inner}</div>
        <div class="step-label">${esc(label)}</div>
      </div>
      <div class="step-line"></div>
    </div>`;
  }).join('')}</div>`;
}

function step1Html(){
  const f = state.form;
  const valid = !!(f.firstName.trim() && f.lastName.trim() && f.phone.trim());
  return `
  <div class="step-card">
    <div class="title">Dane kontaktowe</div>
    <div class="form-grid">
      <input data-field="firstName" value="${esc(f.firstName)}" placeholder="Imię">
      <input data-field="lastName" value="${esc(f.lastName)}" placeholder="Nazwisko">
      <input data-field="phone" value="${esc(f.phone)}" placeholder="Telefon">
      <input data-field="email" value="${esc(f.email)}" placeholder="E-mail">
    </div>
    <label class="checkbox-row"><input type="checkbox" data-field-check="wantsInvoice" ${f.wantsInvoice?'checked':''}> Chcę fakturę na firmę</label>
    ${f.wantsInvoice ? `
    <div class="form-grid" style="margin-top:12px">
      <input data-field="company" value="${esc(f.company)}" placeholder="Nazwa firmy">
      <input data-field="nip" value="${esc(f.nip)}" placeholder="NIP">
    </div>` : ''}
    <div class="step-actions">
      <button class="btn-navy" data-role="checkout-next" ${valid?'':'disabled'} style="opacity:${valid?1:0.5}">Dalej →</button>
    </div>
  </div>`;
}

function step2Html(){
  const opts = DELIVERY_OPTS.map(o=>{
    const sel = state.form.delivery===o.key;
    return `
    <div class="option-row ${sel?'selected':''}" data-delivery="${o.key}">
      <div><div class="option-label">${esc(o.label)}</div><div class="option-sub">${esc(o.sub)}</div></div>
      <div class="option-price">${esc(o.price)}</div>
    </div>`;
  }).join('');
  return `
  <div class="step-card">
    <div class="title">Sposób dostawy</div>
    ${opts}
    <div class="step-actions between">
      <button class="btn-outline-navy" data-role="checkout-prev">← Wstecz</button>
      <button class="btn-navy" data-role="checkout-next">Dalej →</button>
    </div>
  </div>`;
}

function step3Html(){
  const opts = PAYMENT_OPTS.map(o=>{
    const sel = state.form.payment===o.key;
    return `
    <div class="option-row ${sel?'selected':''}" data-payment="${o.key}">
      <div><div class="option-label">${esc(o.label)}</div><div class="option-sub">${esc(o.sub)}</div></div>
    </div>`;
  }).join('');
  return `
  <div class="step-card">
    <div class="title">Płatność</div>
    ${opts}
    <div class="step-actions between">
      <button class="btn-outline-navy" data-role="checkout-prev">← Wstecz</button>
      <button class="btn-navy" data-role="checkout-next">Dalej →</button>
    </div>
  </div>`;
}

function step4Html(){
  const ids = Object.keys(state.cart);
  const entries = ids.map(id=>({id, p:productById[id], qty:state.cart[id]})).filter(e=>e.p);
  const subtotal = entries.reduce((sum,e)=>sum+e.p.price*e.qty,0);
  const deliveryFee = state.form.delivery==='courier' ? 19.9 : 0;
  const total = subtotal + deliveryFee;
  const f = state.form;
  const lines = entries.map(e=>`
    <div class="summary-line"><span>${esc(e.p.name)} × ${e.qty}</span><span style="font-weight:600">${fmt(e.p.price*e.qty)}</span></div>`).join('');
  return `
  <div class="step-card">
    <div class="title">Podsumowanie zamówienia</div>
    <div style="margin-bottom:18px">${lines}</div>
    <div class="summary-row"><span>Dostawa</span><span>${deliveryFee>0?fmt(deliveryFee):'Gratis'}</span></div>
    <div class="summary-final"><span>Do zapłaty</span><span>${fmt(total)}</span></div>
    <div style="margin-top:18px;font-size:13.5px;color:var(--ink-soft)">
      <div>${esc(f.firstName)} ${esc(f.lastName)} · ${esc(f.phone)}</div>
    </div>
    <label class="checkbox-row"><input type="checkbox" data-field-check="acceptTerms" ${f.acceptTerms?'checked':''}> Akceptuję regulamin sklepu</label>
    <div class="step-actions between">
      <button class="btn-outline-navy" data-role="checkout-prev">← Wstecz</button>
      <button class="btn-gold-solid" data-role="place-order" ${f.acceptTerms?'':'disabled'} style="opacity:${f.acceptTerms?1:0.5}">Złóż zamówienie</button>
    </div>
  </div>`;
}

function checkoutHtml(){
  const stepFns = {1:step1Html, 2:step2Html, 3:step3Html, 4:step4Html};
  return `
  <section class="checkout-section">
    <h1>Zamówienie</h1>
    ${stepsHtml()}
    ${stepFns[state.checkoutStep]()}
  </section>`;
}

function confirmationHtml(){
  return `
  <section class="confirmation-section">
    <div class="confirm-check"><i data-lucide="check" class="ico-fill"></i></div>
    <h1>Dziękujemy za zamówienie!</h1>
    <p>Numer zamówienia: <strong style="color:var(--ink)">${esc(state.orderNumber)}</strong></p>
    <p class="note">Skontaktujemy się telefonicznie w celu potwierdzenia szczegółów odbioru lub dostawy.</p>
    <button class="btn-navy" data-role="reset-shop">Wróć do sklepu</button>
  </section>`;
}

function footerHtml(){
  return `
  <footer>
    <div class="wrap">
      <div>
        <div class="brand">FH ŚLIWA</div>
        <div class="col-text">Narzędzia ogrodniczo-budowlane, artykuły metalowe, chemia, drabiny i akcesoria malarskie w Rzeszotarach.</div>
      </div>
      <div>
        <div class="col-title">Kontakt</div>
        <div class="col-text">Rzeszotary 451, 32-040 Świątniki Górne<br>tel. 12 270 43 53</div>
      </div>
      <div>
        <div class="col-title">Godziny otwarcia</div>
        <div class="col-text">Pon–pt: 07:00–17:00<br>Sob–niedz: nieczynne</div>
      </div>
    </div>
    <div class="footer-bottom">© 2026 FH Śliwa. Wszystkie prawa zastrzeżone.</div>
  </footer>`;
}

function wholesaleModalHtml(){
  if(!state.showWholesaleModal) return '';
  return `
  <div class="modal-overlay" data-role="close-wholesale">
    <div class="modal-box" data-role="stop-click">
      <div class="title">Zamówienia hurtowe</div>
      <p>Obsługujemy sklepy, ekipy budowlane i firmy. Stałe rabaty ilościowe i indywidualna wycena. Zadzwoń lub odwiedź nas osobiście.</p>
      <div class="modal-contact">
        <div><i data-lucide="phone"></i> 12 270 43 53</div>
        <div><i data-lucide="map-pin"></i> Rzeszotary 451, 32-040 Świątniki Górne</div>
        <div><i data-lucide="clock"></i> Pon–pt 07:00–17:00</div>
      </div>
      <button class="modal-close" data-role="close-wholesale">Zamknij</button>
    </div>
  </div>`;
}

function toastHtml(){
  if(!state.toast) return '';
  return `<div class="toast"><i data-lucide="check" class="ico-fill"></i> ${esc(state.toast)}</div>`;
}

const VIEW_RENDERERS = {
  home: homeHtml, category: categoryHtml, search: searchHtml, product: productHtml,
  cart: cartHtml, checkout: checkoutHtml, confirmation: confirmationHtml,
};

function render(){
  const app = document.getElementById('app');
  const active = document.activeElement;
  let focusKey = null, selStart = null, selEnd = null;
  if(active && app.contains(active) && (active.hasAttribute('data-field') || active.matches('[data-role="search-input"]'))){
    focusKey = active.getAttribute('data-field') || 'search';
    selStart = active.selectionStart; selEnd = active.selectionEnd;
  }

  const renderer = VIEW_RENDERERS[state.view] || homeHtml;
  app.innerHTML = `
    ${headerHtml()}
    <main>${renderer()}</main>
    ${footerHtml()}
    ${wholesaleModalHtml()}
    ${toastHtml()}
  `;

  if(focusKey){
    const el = focusKey==='search' ? app.querySelector('[data-role="search-input"]') : app.querySelector(`[data-field="${focusKey}"]`);
    if(el){ el.focus(); if(selStart!=null) el.setSelectionRange(selStart, selEnd); }
  }
  initReveal(app);
  lucide.createIcons();
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function initReveal(app){
  const els = app.querySelectorAll('.reveal');
  if(prefersReducedMotion){ els.forEach(el=>el.classList.add('revealed')); return; }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add('revealed'); io.unobserve(entry.target); }
    });
  }, {threshold:0.15, rootMargin:'0px 0px -40px 0px'});
  els.forEach((el,i)=>{ el.style.transitionDelay = Math.min(i%8,6)*45+'ms'; io.observe(el); });
}

document.addEventListener('DOMContentLoaded', function(){
  const app = document.getElementById('app');

  app.addEventListener('click', function(e){
    const addBtn = e.target.closest('[data-add-cart]');
    if(addBtn){ addToCart(addBtn.getAttribute('data-add-cart'), 1); return; }

    const stopClick = e.target.closest('[data-role="stop-click"]');
    if(stopClick){ return; }

    const nav = e.target.closest('[data-nav]');
    if(nav){ const v = nav.getAttribute('data-nav'); if(v==='home') goHome(); else if(v==='cart') goCart(); return; }

    const openCat = e.target.closest('[data-open-category]');
    if(openCat){ openCategory(openCat.getAttribute('data-open-category')); return; }

    const openProd = e.target.closest('[data-open-product]');
    if(openProd){ openProduct(openProd.getAttribute('data-open-product')); return; }

    const role = e.target.closest('[data-role]');
    if(role){
      const r = role.getAttribute('data-role');
      if(r==='open-wholesale') return toggleWholesaleModal(true);
      if(r==='close-wholesale') return toggleWholesaleModal(false);
      if(r==='search-submit') return submitSearch();
      if(r==='add-active') return addToCart(state.activeProductId, state.productQty);
      if(r==='start-checkout') return startCheckout();
      if(r==='checkout-next') return nextStep();
      if(r==='checkout-prev') return prevStep();
      if(r==='place-order') return placeOrder();
      if(r==='reset-shop') return resetShop();
    }

    const qty = e.target.closest('[data-qty]');
    if(qty){ return qty.getAttribute('data-qty')==='inc' ? incProductQty() : decProductQty(); }

    const cartInc = e.target.closest('[data-cart-inc]');
    if(cartInc){ const id=cartInc.getAttribute('data-cart-inc'); return setQty(id, (state.cart[id]||0)+1); }
    const cartDec = e.target.closest('[data-cart-dec]');
    if(cartDec){ const id=cartDec.getAttribute('data-cart-dec'); return setQty(id, (state.cart[id]||0)-1); }
    const cartRemove = e.target.closest('[data-cart-remove]');
    if(cartRemove){ return setQty(cartRemove.getAttribute('data-cart-remove'), 0); }

    const delivery = e.target.closest('[data-delivery]');
    if(delivery){ return updateForm('delivery', delivery.getAttribute('data-delivery')); }
    const payment = e.target.closest('[data-payment]');
    if(payment){ return updateForm('payment', payment.getAttribute('data-payment')); }
  });

  app.addEventListener('keydown', function(e){
    if(e.target.matches('[data-role="search-input"]') && e.key==='Enter'){ submitSearch(); }
  });

  app.addEventListener('input', function(e){
    if(e.target.matches('[data-role="search-input"]')){ setSearch(e.target.value); searchInputFocused=true; return; }
    const field = e.target.closest('[data-field]');
    if(field){ updateForm(field.getAttribute('data-field'), field.value); }
  });

  app.addEventListener('change', function(e){
    const check = e.target.closest('[data-field-check]');
    if(check){ updateForm(check.getAttribute('data-field-check'), check.checked); }
  });

  render();
});
})();

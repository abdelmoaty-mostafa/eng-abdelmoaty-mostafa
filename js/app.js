const P=[
{t:"Process Safety & Asset Integrity",c:"Safety",y:"2026 – Present",i:"shield-check",m:"ISO 45001",d:"Selected to support building the company’s Process Safety & Asset Integrity function, drawing on engineering, compliance, risk management, data governance and gas infrastructure experience.",pts:["Compliance tracking, audit execution, CAPA follow-up and compliance reporting","Led the ISO 45001 and ISO 14001 transition with zero non-conformities in external audits","Pre-startup safety reviews for newly commissioned pressure reduction stations","Contractor process safety compliance programs and a digital incident reporting and root cause analysis system","Process safety training for engineers and field technicians; job shadowing at Rashpetco (2026)"],tg:["PSSR","CAPA","RCA","ISO 45001"]},
{t:"ISO Certification Project",c:"Safety",y:"2017",i:"badge-check",m:"3 ISO standards",d:"Engineering Key User and representative on the senior ISO certification committee, handling technical discussions with the external audit team.",pts:["Represented the Engineering function during the external audit","Certified from the initial audit: ISO 9001:2015, ISO 14001:2015 and OHSAS 18001:2007"],tg:["ISO 9001","ISO 14001","OHSAS 18001"]},
{t:"GIS Automation for Network Design",c:"Digital",y:"2009 – 2014",i:"workflow",m:">95% faster",d:"Custom ArcGIS Toolbox tools that automate spatial QA/QC, validate ERP customer and appliance data and link datasets by CRN.",pts:["Validated customer and gas-appliance data from ERP automatically","Linked datasets by Client Reference Number (CRN)","Generated Synergi Gas load files for downstream network design","Area-level design processing fell to under 5% of the previous time"],tg:["ArcGIS","Synergi Gas","SQL Server"]},
{t:"Customer & Appliance Data Governance",c:"Digital",y:"2018",i:"database",m:"Paper to digital",d:"Company-wide project to improve field collection of customer and natural-gas-appliance data across all regions.",pts:["Enhanced a SQL Server application for validation, cleansing, quality control, integration and reporting","Established a customer-data governance framework","Enabled the move from paper documentation to a controlled digital workflow"],tg:["SQL Server","Data governance"]},
{t:"SAP Transformation",c:"Digital",y:"2019 – 2022",i:"refresh-cw",m:"Go-Live 2022",d:"Key User for Technical Affairs / Engineering on the senior committee replacing the SQL Server system with SAP.",pts:["Business-process analysis and requirements validation for Engineering","Go-Live in 2022 on schedule despite COVID-19 operating challenges"],tg:["SAP PS","SAP CS","SAP SD"]},
{t:"Hayat Karima, Phase I",c:"Projects",y:"2022 – 2025",i:"map",m:"43 villages",d:"Nominated by the company to oversee Phase I natural gas infrastructure across Sharqia, Qena and Sohag.",pts:["Supported spatial planning and PRS location planning","Coordinated 16 contracting companies and utilities: electricity, water, wastewater and telecom","Final review and approval of ArcGIS Pro as-built geodatabases","5 pressure reduction stations and networks serving 43 villages"],tg:["ArcGIS Pro","PRS","Coordination"]},
{t:"Government District, New Capital",c:"Projects",y:"2017",i:"landmark",m:"36 buildings",d:"Engineering design of external and internal natural gas networks for the Government District.",pts:["Designed networks serving 36 major government buildings","Coordinated multiple stakeholders under demanding schedules"],tg:["Network design","AutoCAD"]},
{t:"Multi-Country Design Governance",c:"Projects",y:"2025 – 2026",i:"globe-2",m:"KSA + UAE",d:"Principal Engineer setting natural gas network design standards inside ArcGIS Pro and Synergi Gas.",pts:["Aligned engineering criteria with international codes and Saudi and UAE regulatory, operational and safety requirements","Controlled design parameters across tools and teams"],tg:["Synergi Gas","API","ASME"]}
];
const S=[
["Process safety",[["alert-triangle","HAZOP, LOPA, FMEA, BowTie, QRA"],["clipboard-check","PSSR, PTW, JSA, RCA, BBS"],["siren","Emergency response and crisis management"],["scale","API, NFPA, ASME, ISO 45001 and 14001, OSHA PSM, CCPS"]]],
["Gas engineering & GIS",[["map","ArcGIS Pro, ArcGIS Enterprise, QGIS"],["flame","Synergi Gas (DNV) hydraulic modeling"],["pencil-ruler","AutoCAD, Revit, land and as-built survey"],["layers","Geodatabases and spatial QA/QC"]]],
["Data & management",[["database","SAP (PS, SD, CS), SQL Server, Oracle, PL/SQL"],["cpu","PLC and SCADA"],["bar-chart-3","Power BI, MS Project"],["code","C#, C++, VB, VBA, HTML5, CSS3"],["users","Audit management and cross-functional leadership"]]]];
const ST=[["18+","Years in energy"],["47","Project management PDUs"],["3","ISO standards certified"],["16","Contractors coordinated"],[">95%","Design time saved"],["5","Pressure reduction stations"],["43","Villages connected"],["36","Government buildings"]];
const CR=[["graduation-cap","B.Sc. Electrical Engineering","Computers, Control and Information Systems, Zagazig University, 2002–2007 (Good)"],["shield-check","Process safety and ISO training","Rashpetco process safety job shadowing, 2026; ISO 9001, 14001 and OHSAS 18001 (upgraded to 45001), 2017"],["flame","Synergi Gas (DNV)","Network Design and Analysis, and Advanced Design and Analysis, 2025"],["briefcase","Project management training","Evoreste, 2018, 47 PDUs (Introduction to PMP 12, PMP 35)"],["map","GIS and database training","Esri ArcGIS Desktop I–III, Geodatabases, ArcObjects (VBA, .NET), 2009–2011; Oracle Database 10g, 2005–2006"],["compass","Leadership and languages","Strategic Planning (2018) and Personality Development (2019), OGS; Arabic native, English excellent"]];
const $=s=>document.querySelector(s);
const track=e=>{document.querySelectorAll('.card').forEach(c=>c.addEventListener('pointermove',ev=>{const r=c.getBoundingClientRect();c.style.setProperty('--x',ev.clientX-r.left+'px');c.style.setProperty('--y',ev.clientY-r.top+'px')}))};
const ic=()=>{};

const cats=["All","Safety","Digital","Projects"];let cur="All";
function renderFilters(){$('#filters').innerHTML=cats.map(c=>`<button class="chip ${c===cur?'on':''}" role="tab" aria-selected="${c===cur}" data-c="${c}">${c==="Digital"?"Digital & GIS":c}</button>`).join('');
 document.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{cur=b.dataset.c;renderFilters();renderGrid()})}
function renderGrid(){const list=P.map((p,i)=>({p,i})).filter(o=>cur==="All"||o.p.c===cur);
 $('#grid').innerHTML=list.map(({p,i},k)=>`<button class="card text-left p-6 cursor-pointer ${k===0&&list.length>4?'md:col-span-2':''}" data-i="${i}" style="animation:pop .4s ease both;animation-delay:${k*40}ms">
  <div class="flex items-start justify-between"><svg class="ic text-[color:var(--flame)]" width="26" height="26" aria-hidden="true"><use href="#i-${p.i}"/></svg><span class="text-xs text-neutral-500">${p.y}</span></div>
  <div class="disp text-2xl sm:text-3xl font-extrabold mt-8 break-words">${p.m}</div>
  <h3 class="text-lg font-semibold mt-1">${p.t}</h3>
  <p class="text-sm text-neutral-400 mt-2 line-clamp-2">${p.d}</p></button>`).join('');
 document.querySelectorAll('#grid .card').forEach(c=>c.onclick=()=>openM(+c.dataset.i));track();ic()}
let last;
function openM(i){const p=P[i];last=document.activeElement;
 $('#sheet').innerHTML=`<div class="p-7" style="background:linear-gradient(160deg,rgba(76,201,240,.18),transparent 60%)">
  <div class="flex justify-between items-start"><svg class="ic text-[color:var(--flame)]" width="34" height="34" aria-hidden="true"><use href="#i-${p.i}"/></svg><button id="mx" class="chip" aria-label="Close">Close</button></div>
  <div class="disp text-4xl sm:text-5xl font-extrabold mt-8">${p.m}</div><p class="text-sm text-neutral-400 mt-1">${p.y}</p></div>
  <div class="p-7 pt-2"><h3 id="mTitle" class="text-2xl font-bold">${p.t}</h3><p class="text-neutral-300 mt-2">${p.d}</p>
  <ul class="mt-5 space-y-3">${p.pts.map(x=>`<li class="flex gap-3 text-sm text-neutral-200"><svg class="ic text-[color:var(--ok)] flex-none mt-0.5" width="16" height="16" aria-hidden="true"><use href="#i-check"/></svg>${x}</li>`).join('')}</ul>
  <div class="flex flex-wrap gap-2 mt-6">${p.tg.map(x=>`<span class="chip" style="cursor:default">${x}</span>`).join('')}</div></div>`;
 $('#modal').classList.add('open');document.body.style.overflow='hidden';ic();$('#mx').focus();$('#mx').onclick=closeM}
function closeM(){$('#modal').classList.remove('open');document.body.style.overflow='';last&&last.focus()}
$('#modal').onclick=e=>{if(e.target.id==='modal')closeM()};
addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#modal').classList.contains('open'))closeM()});

$('#skillGrid').innerHTML=S.map(([h,a])=>`<div class="card rv p-6"><h3 class="text-lg font-bold mb-4">${h}</h3><div class="space-y-3">${a.map(([i,t])=>`<div class="sk"><svg class="ic" width="18" height="18" aria-hidden="true"><use href="#i-${i}"/></svg><span>${t}</span></div>`).join('')}</div></div>`).join('');
$('#stats').innerHTML=ST.map(([n,l])=>`<div class="card rv p-5 sm:p-6"><div class="disp text-3xl sm:text-4xl font-extrabold mono">${n}</div><div class="text-sm text-neutral-400 mt-1">${l}</div></div>`).join('');
$('#credGrid').innerHTML=CR.map(([i,t,d])=>`<div class="card rv p-6"><svg class="ic text-[color:var(--flame)]" width="24" height="24" aria-hidden="true"><use href="#i-${i}"/></svg><h3 class="font-bold mt-4">${t}</h3><p class="text-sm text-neutral-400 mt-1">${d}</p></div>`).join('');

renderFilters();renderGrid();track();ic();
const io=!('IntersectionObserver' in window)?{observe:e=>e.classList.add('in'),unobserve(){}}:new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));

$('#fabBtn').onclick=()=>{const f=$('#fab');f.classList.toggle('open');$('#fabBtn').setAttribute('aria-expanded',f.classList.contains('open'))};

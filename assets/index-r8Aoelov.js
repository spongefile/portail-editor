(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const st="modulepreload",it=function(n,e){return new URL(n,e).href},ln={},Tn=function(e,t,o){let s=Promise.resolve();if(t&&t.length>0){const r=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=c?.nonce||c?.getAttribute("nonce");s=Promise.allSettled(t.map(d=>{if(d=it(d,o),d in ln)return;ln[d]=!0;const h=d.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!o)for(let f=r.length-1;f>=0;f--){const w=r[f];if(w.href===d&&(!h||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${u}`))return;const b=document.createElement("link");if(b.rel=h?"stylesheet":st,h||(b.as="script"),b.crossOrigin="",b.href=d,l&&b.setAttribute("nonce",l),document.head.appendChild(b),h)return new Promise((f,w)=>{b.addEventListener("load",f),b.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(r){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=r,window.dispatchEvent(c),!c.defaultPrevented)throw r}return s.then(r=>{for(const c of r||[])c.status==="rejected"&&a(c.reason);return e().catch(a)})};function i(n,e={},...t){const o=document.createElement(n);for(const[s,a]of Object.entries(e))a==null||a===!1||(s.startsWith("on")&&typeof a=="function"?o.addEventListener(s.slice(2).toLowerCase(),a):s==="class"?o.className=String(a):s==="html"?o.innerHTML=String(a):a===!0?o.setAttribute(s,""):o.setAttribute(s,String(a)));return rt(o,t),o}function rt(n,e){for(const t of e)t==null||t===!1||n.appendChild(typeof t=="string"||typeof t=="number"?document.createTextNode(String(t)):t)}function re(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function Me(n){let e=!1;return()=>{e||(e=!0,queueMicrotask(()=>{e=!1,n()}))}}function lt(n){const e=[];return n.range&&e.push(i("span",{class:"meta-item"},`range ${n.range}`)),n.defaultLabel&&e.push(i("span",{class:"meta-item"},`default ${n.defaultLabel}`)),i("div",{class:"field"},i("label",{class:"field-label",for:n.id},n.label,n.unit?i("span",{class:"unit"},n.unit):null),n.control,e.length?i("div",{class:"field-meta"},...e):null,n.hint?i("p",{class:`field-hint${n.unverified?" is-unverified":""}`},n.unverified?i("span",{class:"tag tag-unverified",title:"Derived by reading the official editor’s source. Not confirmed against the manual or hardware."},"unverified"):null,n.hint):null,n.warning?i("p",{class:"field-warning"},n.warning):null)}function ne(n,e,t,o){const s=i("select",{id:n,class:"control",onchange:a=>o(Number(a.target.value))});for(const a of e)s.appendChild(i("option",{value:a.value,selected:a.value===t},a.label));return s.value=String(t),s}function k(n,e,t={}){return i("button",{type:"button",id:t.id,class:`btn ${t.class??""}`.trim(),title:t.title,"aria-label":t.ariaLabel,disabled:t.disabled,onclick:e},n)}function ie(n){return new Promise(e=>{const t=i("dialog",{class:"confirm"}),o=s=>{t.close(),t.remove(),e(s)};t.appendChild(i("form",{method:"dialog",class:"confirm-inner"},i("h2",{},n.title),i("p",{},n.body),i("div",{class:"confirm-actions"},k("Cancel",()=>o(!1),{class:"btn-ghost"}),k(n.confirmLabel,()=>o(!0),{class:n.danger?"btn-danger":"btn-primary"})))),t.addEventListener("cancel",s=>{s.preventDefault(),o(!1)}),document.body.appendChild(t),t.showModal()})}function ct(n){if(n===null)return"not yet";const e=Math.max(0,Math.round((Date.now()-n)/1e3));return e<5?"just now":e<60?`${e}s ago`:e<3600?`${Math.round(e/60)} min ago`:e<86400?`${Math.round(e/3600)} h ago`:`${Math.round(e/86400)} d ago`}const ee=1,_=24,R=9,P=8,dt="1.0.0",ht={preset_slots:8},ut={swing_menu:{labels:["OFF","55%","60%","75%","80%","90%"],count:6,doc:null,overflows7bit:!1},notenames:{labels:["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],count:12,doc:null,overflows7bit:!1},note_menu:{labels:["C-2","C#-2","D-2","D#-2","E-2","F-2","F#-2","G-2","G#-2","A-2","A#-2","B-2","C-1","C#-1","D-1","D#-1","E-1","F-1","F#-1","G-1","G#-1","A-1","A#-1","B-1","C0","C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8"],count:128,doc:"MIDI note number 0-127, shown by name. Note 60 = C3.",overflows7bit:!1},note_all_menu:{labels:["all","C#-2","D-2","D#-2","E-2","F-2","F#-2","G-2","G#-2","A-2","A#-2","B-2","C-1","C#-1","D-1","D#-1","E-1","F-1","F#-1","G-1","G#-1","A-1","A#-1","B-1","C0","C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8"],count:128,doc:'"all" responds to any note.',overflows7bit:!1},divisions_menu:{labels:["no div","/2","/3","/4","/5","/6","/7","/8","/9"],count:9,doc:null,overflows7bit:!1},fx_dest_menu:{labels:["CV 1","CV 2","CV 3","CV 4","CV 5","CV 6","CV 7","CV 8","GATE 1","GATE 2","GATE 3","GATE 4","GATE 5","GATE 6","GATE 7","GATE 8"],count:16,doc:null,overflows7bit:!1},fx_source_menu:{labels:["CONSTANT","CV 1","CV 2","CV 3","CV 4","CV 5","CV 6","CV 7","CV 8","GATE 1","GATE 2","GATE 3","GATE 4","GATE 5","GATE 6","GATE 7","GATE 8"],count:17,doc:null,overflows7bit:!1},fx_dest_menu_cv:{labels:["CV 1","CV 2","CV 3","CV 4","CV 5","CV 6","CV 7","CV 8"],count:8,doc:null,overflows7bit:!1},fx_dest_menu_gate:{labels:["GATE 1","GATE 2","GATE 3","GATE 4","GATE 5","GATE 6","GATE 7","GATE 8"],count:8,doc:null,overflows7bit:!1},fx_dest_prm:{labels:["prm1","prm2","prm3","prm4","prm5","prm6","prm7"],count:7,doc:null,overflows7bit:!1},group_menu:{labels:["mono last","mono low","mono hi","poly group 1","poly group 2","poly group 3","poly group 4"],count:7,doc:"mono = one voice. poly groups share notes across every output in the same group.",overflows7bit:!1},onoff_menu:{labels:["off","on"],count:2,doc:null,overflows7bit:!1},clock_state_menu:{labels:["stop","start"],count:2,doc:null,overflows7bit:!1},clock_speed_menu:{labels:[30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,256,258,260,262,264,266,268,270,272,274,276,278,280,282,284],count:128,doc:null,overflows7bit:!1},glide_mode_menu:{labels:["legato","glide"],count:2,doc:null,overflows7bit:!1},source_menu:{labels:["note","clock"],count:2,doc:null,overflows7bit:!1},ch_menu:{labels:["ch 1","ch 2","ch 3","ch 4","ch 5","ch 6","ch 7","ch 8","ch 9","ch 10","ch 11","ch 12","ch 13","ch 14","ch 15","ch 16"],count:16,doc:null,overflows7bit:!1},channels:{labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],count:16,doc:null,overflows7bit:!1},tables_menu:{labels:["chromatic","major","minor","harmonic minor","pentatonic major","pentatonic minor","blues","dorian","phrygian","lydian","mixolydian","locrian","whole note","diminished","whole half diminished","quint","octave","major chord","minor chord","major 7th chord","minor 7th chord","major 6th chord","minor 6th chord","minor dim 7 chord"],count:24,doc:null,overflows7bit:!1},sync_menu:{labels:["internal","external"],count:2,doc:null,overflows7bit:!1},dest_menu:{labels:["CV1","CV2","CV3","CV4","CV5","CV6","CV7","CV8"],count:8,doc:null,overflows7bit:!1},dest_note_menu:{labels:["note","CV1","CV2","CV3","CV4","CV5","CV6","CV7","CV8"],count:9,doc:null,overflows7bit:!1},range_gate_menu:{labels:["10 V","9 V","8 V","7 V","6 V","5 V","4 V","3 V","2 V","1 V"],count:10,doc:null,overflows7bit:!1},invert_range_gate_menu:{labels:["0 V","1 V","2 V","3 V","4 V","5 V","6 V","7 V","8 V","9 V"],count:10,doc:null,overflows7bit:!1},range_oct_menu:{labels:["1 OCT","2 OCT","3 OCT ","4 OCT"],count:4,doc:null,overflows7bit:!1},range_cv_note_menu:{labels:["+/- 5V","10 V","5 V","4 V","3 V","2 V","1 V","-1 V","-2 V","-3 V","-4 V","-5 V","note scale"],count:13,doc:null,overflows7bit:!1},range_cv_menu:{labels:["+/- 5V","10 V","5 V","4 V","3 V","2 V","1 V","-1 V","-2 V","-3 V","-4 V","-5 V"],count:12,doc:null,overflows7bit:!1},lfo_mode_menu:{labels:["continious","note reset","gated"],count:3,doc:null,overflows7bit:!1},invert_range_cv_menu:{labels:["- 5V","0 V","1 V","2 V","3 V","4 V","5 V"],count:7,doc:null,overflows7bit:!1},pb_range_menu:{labels:["+/-1","+/-2","+/-3","+/-4","+/-5","+/-6","+/-7","+/-8","+/-9","+/-10","+/-11","+/-12","+/-13","+/-14","+/-15","+/-16","+/-17","+/-18","+/-19","+/-20","+/-21","+/-22","+/-23","+/-24"],count:24,doc:null,overflows7bit:!1},semi_tone_range_menu:{labels:["+/-1","+/-2","+/-3","+/-4","+/-5","+/-6","+/-7","+/-8","+/-9","+/-10","+/-11","+/-12","+/-13","+/-14","+/-15","+/-16","+/-17","+/-18","+/-19","+/-20","+/-21","+/-22","+/-23","+/-24","+/-25","+/-26","+/-27","+/-28","+/-29","+/-30","+/-31","+/-32","+/-33","+/-34","+/-35","+/-36","+/-37","+/-38","+/-39","+/-40","+/-41","+/-42","+/-43","+/-44","+/-45","+/-46","+/-47"],count:47,doc:null,overflows7bit:!1},transpose_menu:{labels:[0,1,2,3,4,5,6,7,8,9,10,11],count:12,doc:null,overflows7bit:!1},lfo_type_menu:{labels:["saw up","saw down","square","triangle","sine","noise","random"],count:7,doc:null,overflows7bit:!1},env_type_menu:{labels:["ar","ad","adsr","loop"],count:4,doc:null,overflows7bit:!1},seq_type_menu:{labels:["notes","cc"],count:2,doc:null,overflows7bit:!1},seq_gate_type_menu:{labels:["gates","cc"],count:2,doc:null,overflows7bit:!1},seq_dir_menu:{labels:["forward","backward","pendulum","random"],count:4,doc:null,overflows7bit:!1},clock_type_menu:{labels:["clock","start/stop","reset"],count:3,doc:null,overflows7bit:!1},math_func_menu:{labels:["invert","divide","multiply","add","substract","maximum","minimum"],count:7,doc:null,overflows7bit:!1},logic_menu:{labels:["AND","OR","NAND","NOR","XOR","XNOR","NOT"],count:7,doc:null,overflows7bit:!1},prm_menu:{labels:["p1","p2","p3","p4","p5","p6","p7"],count:7,doc:null,overflows7bit:!1},vel_dest_menu:{labels:["added","substracted","replaced"],count:3,doc:null,overflows7bit:!1},length_menu:{labels:["latch","1 ms","2 ms","3 ms","4 ms","5 ms","6 ms","7 ms","8 ms","9 ms","10 ms","11 ms","12 ms","13 ms","14 ms","15 ms","16 ms","17 ms","18 ms","19 ms","20 ms","21 ms","22 ms","23 ms","24 ms","25 ms","26 ms","27 ms","28 ms","29 ms","30 ms","31 ms","32 ms","33 ms","34 ms","35 ms","36 ms","37 ms","38 ms","39 ms","40 ms","41 ms","42 ms","43 ms","44 ms","45 ms","46 ms","47 ms","48 ms","49 ms","50 ms","51 ms","52 ms","53 ms","54 ms","55 ms","56 ms","57 ms","58 ms","59 ms","60 ms","61 ms","62 ms","63 ms","64 ms","65 ms","66 ms","67 ms","68 ms","69 ms","70 ms","71 ms","72 ms","73 ms","74 ms","75 ms","76 ms","77 ms","78 ms","79 ms","80 ms","81 ms","82 ms","83 ms","84 ms","85 ms","86 ms","87 ms","88 ms","89 ms","90 ms","91 ms","92 ms","93 ms","94 ms","95 ms","96 ms","97 ms","98 ms","99 ms","100 ms","101 ms","102 ms","103 ms","104 ms","105 ms","106 ms","107 ms","108 ms","109 ms","110 ms","111 ms","112 ms","113 ms","114 ms","115 ms","116 ms","117 ms","118 ms","119 ms","120 ms","121 ms","122 ms","123 ms","124 ms","125 ms","126 ms","127 ms"],count:128,doc:'"latch" makes the output follow the note instead of firing a fixed-length pulse.',overflows7bit:!1},_128_menu:{labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128],count:128,doc:null,overflows7bit:!1},ms_128_menu:{labels:["1 ms","1 ms","2 ms","3 ms","4 ms","5 ms","6 ms","7 ms","8 ms","9 ms","10 ms","11 ms","12 ms","13 ms","14 ms","15 ms","16 ms","17 ms","18 ms","19 ms","20 ms","21 ms","22 ms","23 ms","24 ms","25 ms","26 ms","27 ms","28 ms","29 ms","30 ms","31 ms","32 ms","33 ms","34 ms","35 ms","36 ms","37 ms","38 ms","39 ms","40 ms","41 ms","42 ms","43 ms","44 ms","45 ms","46 ms","47 ms","48 ms","49 ms","50 ms","51 ms","52 ms","53 ms","54 ms","55 ms","56 ms","57 ms","58 ms","59 ms","60 ms","61 ms","62 ms","63 ms","64 ms","65 ms","66 ms","67 ms","68 ms","69 ms","70 ms","71 ms","72 ms","73 ms","74 ms","75 ms","76 ms","77 ms","78 ms","79 ms","80 ms","81 ms","82 ms","83 ms","84 ms","85 ms","86 ms","87 ms","88 ms","89 ms","90 ms","91 ms","92 ms","93 ms","94 ms","95 ms","96 ms","97 ms","98 ms","99 ms","100 ms","101 ms","102 ms","103 ms","104 ms","105 ms","106 ms","107 ms","108 ms","109 ms","110 ms","111 ms","112 ms","113 ms","114 ms","115 ms","116 ms","117 ms","118 ms","119 ms","120 ms","121 ms","122 ms","123 ms","124 ms","125 ms","126 ms","127 ms","128 ms"],count:129,doc:"NOTE: this domain has 129 entries; index 128 cannot be sent in a 7-bit SysEx byte and is clamped to 127.",overflows7bit:!0},_1_8_menu:{labels:["table  1","table  2","table  3","table  4","table  5","table  6","table  7","table  8"],count:8,doc:null,overflows7bit:!1},_64_menu:{labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64],count:64,doc:null,overflows7bit:!1},_0_1_menu:{labels:[0,1],count:2,doc:null,overflows7bit:!1},bipolar_menu:{labels:[-63,-62,-61,-60,-59,-58,-57,-56,-55,-54,-53,-52,-51,-50,-49,-48,-47,-46,-45,-44,-43,-42,-41,-40,-39,-38,-37,-36,-35,-34,-33,-32,-31,-30,-29,-28,-27,-26,-25,-24,-23,-22,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64],count:128,doc:null,overflows7bit:!1},_63_menu:{labels:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],count:64,doc:null,overflows7bit:!1},_127_menu:{labels:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127],count:128,doc:null,overflows7bit:!1},_100_menu:{labels:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],count:101,doc:null,overflows7bit:!1},_int63_menu:{labels:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20,-21,-22,-23,-24,-25,-26,-27,-28,-29,-30,-31,-32,-33,-34,-35,-36,-37,-38,-39,-40,-41,-42,-43,-44,-45,-46,-47,-48,-49,-50,-51,-52,-53,-54,-55,-56,-57,-58,-59,-60,-61,-62,-63],count:128,doc:null,overflows7bit:!1},ocatves_menu:{labels:[-4,-3,-2,-1,0,1,2,3,4],count:9,doc:null,overflows7bit:!1},oct_menu:{labels:["0","1","2","3","4"],count:5,doc:null,overflows7bit:!1},percent_menu:{labels:["0%","1%","2%","3%","4%","5%","6%","7%","8%","9%","10%","11%","12%","13%","14%","15%","16%","17%","18%","19%","20%","21%","22%","23%","24%","25%","26%","27%","28%","29%","30%","31%","32%","33%","34%","35%","36%","37%","38%","39%","40%","41%","42%","43%","44%","45%","46%","47%","48%","49%","50%","51%","52%","53%","54%","55%","56%","57%","58%","59%","60%","61%","62%","63%","64%","65%","66%","67%","68%","69%","70%","71%","72%","73%","74%","75%","76%","77%","78%","79%","80%","81%","82%","83%","84%","85%","86%","87%","88%","89%","90%","91%","92%","93%","94%","95%","96%","97%","98%","99%","100%"],count:101,doc:null,overflows7bit:!1},div_menu:{labels:["4/1","2/1","1/1","1/2","1/4","1/8","1/16","1/32","4/1T","2/1T","1/1T","1/2T","1/4T","1/8T","1/16T","1/32T","4/1.","2/1.","1/1.","1/2.","1/4.","1/8.","1/16."],count:23,doc:"Division of the master clock. T = triplet, . = dotted.",overflows7bit:!1},lfo_div_menu:{labels:["32/1","16/1","4/1","2/1","1/1","1/2","1/4","1/8","1/16","1/32","4/1T","2/1T","1/1T","1/2T","1/4T","1/8T","1/16T","1/32T","4/1.","2/1.","1/1.","1/2.","1/4.","1/8.","1/16."],count:25,doc:null,overflows7bit:!1},delay_ms:{labels:["0 ms","8 ms","16 ms","24 ms","32 ms","41 ms","49 ms","57 ms","65 ms","73 ms","82 ms","90 ms","98 ms","106 ms","114 ms","122 ms","131 ms","139 ms","147 ms","155 ms","164 ms","172 ms","180 ms","188 ms","196 ms","204 ms","213 ms","221 ms","229 ms","237 ms","245 ms","254 ms","262 ms","270 ms","278 ms","287 ms","295 ms","303 ms","311 ms","319 ms","328 ms","336 ms","344 ms","352 ms","360 ms","368 ms","377 ms","385 ms","393 ms","401 ms","409 ms","418 ms","426 ms","434 ms","442 ms","450 ms","459 ms","467 ms","475 ms","483 ms","491 ms","500 ms","508 ms","516 ms","524 ms","533 ms","541 ms","549 ms","557 ms","565 ms","574 ms","582 ms","590 ms","598 ms","606 ms","615 ms","623 ms","631 ms","639 ms","647 ms","656 ms","664 ms","672 ms","680 ms","688 ms","696 ms","705 ms","713 ms","721 ms","729 ms","737 ms","746 ms","754 ms","762 ms","770 ms","778 ms","787 ms","795 ms","803 ms","811 ms","819 ms","828 ms","836 ms","844 ms","852 ms","860 ms","869 ms","877 ms","885 ms","893 ms","901 ms","910 ms","918 ms","926 ms","934 ms","942 ms","951 ms","959 ms","967 ms","975 ms","983 ms","992 ms","1000 ms","1008 ms","1016 ms","1025 ms","1033 ms","1041 ms"],count:128,doc:null,overflows7bit:!1},off_127_menu:{labels:["OFF",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127],count:128,doc:null,overflows7bit:!1},off_100_menu:{labels:["OFF",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],count:101,doc:null,overflows7bit:!1},note_in_rec_menu:{labels:["clear seq","arm record","start record","gate start/stop"],count:4,doc:null,overflows7bit:!1},note_in_dest_menu:{labels:["transpose","randomise 1_oct","randomise 2_oct"],count:3,doc:null,overflows7bit:!1},note_in_dest_gate:{labels:["off","randomise"],count:2,doc:null,overflows7bit:!1},rise_time:{labels:["OFF","13 ms","14 ms","14 ms","15 ms","15 ms","16 ms","16 ms","17 ms","17 ms","18 ms","18 ms","19 ms","20 ms","21 ms","21 ms","22 ms","23 ms","24 ms","25 ms","26 ms","27 ms","28 ms","29 ms","30 ms","31 ms","32 ms","34 ms","35 ms","37 ms","38 ms","40 ms","42 ms","43 ms","45 ms","48 ms","50 ms","52 ms","55 ms","58 ms","60 ms","64 ms","67 ms","70 ms","74 ms","78 ms","83 ms","87 ms","92 ms","98 ms","104 ms","110 ms","117 ms","125 ms","133 ms","142 ms","151 ms","162 ms","173 ms","186 ms","200 ms","216 ms","233 ms","251 ms","272 ms","296 ms","322 ms","352 ms","384 ms","422 ms","464 ms","512 ms","566 ms","630 ms","702 ms","784 ms","883 ms","1.00 s","1.14 s","1.30 s","1.49 s","1.72 s","2.00 s","2.35 s","2.80 s","3.35 s","4.07 s","4.97 s","6.39 s","7.89 s","10.32 s","13.42 s","14.91 s","16.78 s","19.18 s","22.37 s","26.84 s","33.56 s","44.74 s","67.11 s"],count:100,doc:null,overflows7bit:!1},vib_speed:{labels:["OFF","0.06 Hz","0.12 Hz","0.12 Hz","0.12 Hz","0.12 Hz","0.12 Hz","0.18 Hz","0.18 Hz","0.18 Hz","0.18 Hz","0.18 Hz","0.24 Hz","0.24 Hz","0.24 Hz","0.24 Hz","0.30 Hz","0.30 Hz","0.30 Hz","0.36 Hz","0.36 Hz","0.36 Hz","0.42 Hz","0.42 Hz","0.48 Hz","0.48 Hz","0.54 Hz","0.54 Hz","0.60 Hz","0.60 Hz","0.66 Hz","0.72 Hz","0.72 Hz","0.77 Hz","0.83 Hz","0.89 Hz","0.95 Hz","1.01 Hz","1.07 Hz","1.13 Hz","1.19 Hz","1.25 Hz","1.37 Hz","1.43 Hz","1.49 Hz","1.61 Hz","1.73 Hz","1.79 Hz","1.91 Hz","2.03 Hz","2.15 Hz","2.26 Hz","2.44 Hz","2.56 Hz","2.74 Hz","2.86 Hz","3.04 Hz","3.28 Hz","3.46 Hz","3.64 Hz","3.87 Hz","4.11 Hz","4.35 Hz","4.59 Hz","4.89 Hz","5.19 Hz","5.48 Hz","5.78 Hz","6.14 Hz","6.56 Hz","6.91 Hz","7.33 Hz","7.75 Hz","8.22 Hz","8.70 Hz","9.24 Hz","9.77 Hz","10.37 Hz","10.97 Hz","11.62 Hz","12.34 Hz","13.05 Hz","13.89 Hz","14.66 Hz","15.56 Hz","16.51 Hz","17.46 Hz","18.54 Hz","19.61 Hz","20.80 Hz","21.99 Hz","23.30 Hz","24.73 Hz","26.16 Hz","27.77 Hz","29.38 Hz","31.17 Hz","33.02 Hz","34.99 Hz","37.07 Hz"],count:100,doc:null,overflows7bit:!1},env_times:{labels:[" 2.1 ms"," 2.2 ms"," 2.2 ms"," 2.3 ms"," 2.4 ms"," 2.5 ms"," 2.6 ms"," 2.6 ms"," 2.7 ms"," 2.8 ms"," 2.9 ms"," 3.0 ms"," 3.1 ms"," 3.3 ms"," 3.4 ms"," 3.5 ms"," 3.6 ms"," 3.7 ms"," 3.9 ms"," 4.0 ms"," 4.2 ms"," 4.3 ms"," 4.5 ms"," 4.7 ms"," 4.9 ms"," 5.1 ms"," 5.3 ms"," 5.5 ms"," 5.7 ms"," 5.9 ms"," 6.2 ms"," 6.5 ms"," 6.7 ms"," 7.0 ms"," 7.3 ms"," 7.7 ms"," 8.0 ms"," 8.4 ms"," 8.7 ms"," 9.1 ms"," 9.6 ms"," 10.0 ms"," 10.5 ms"," 11.0 ms"," 11.5 ms"," 12.1 ms"," 12.7 ms"," 13.4 ms"," 14.1 ms"," 14.8 ms"," 15.6 ms"," 16.4 ms"," 17.3 ms"," 18.2 ms"," 19.3 ms"," 20.3 ms"," 21.5 ms"," 22.8 ms"," 24.1 ms"," 25.5 ms"," 27.1 ms"," 28.8 ms"," 30.6 ms"," 32.5 ms"," 34.6 ms"," 36.9 ms"," 39.3 ms"," 42.0 ms"," 44.9 ms"," 48.1 ms"," 51.5 ms"," 55.3 ms"," 59.3 ms"," 63.8 ms"," 68.7 ms"," 74.1 ms"," 80.0 ms"," 86.5 ms"," 93.7 ms"," 101.7 ms"," 110.5 ms"," 120.2 ms"," 131.1 ms"," 143.1 ms"," 156.6 ms"," 171.9 ms"," 188.8 ms"," 208.1 ms"," 229.4 ms"," 253.7 ms"," 281.4 ms"," 312.9 ms"," 349.5 ms"," 390.2 ms"," 437.2 ms"," 493.4 ms"," 556.9 ms"," 630.1 ms"," 713.9 ms"," 813.4 ms"," 932.1 ms"," 1073.7 ms"," 1242.8 ms"," 1443.2 ms"," 1677.7 ms"," 1945.2 ms"," 2314.1 ms"," 2684.4 ms"," 3195.7 ms"," 3834.8 ms"," 4628.2 ms"," 5592.4 ms"," 6710.9 ms"," 7895.2 ms"," 9587.0 ms"," 11184.8 ms"," 13421.8 ms"," 16777.2 ms"," 19174.0 ms"," 26843.5 ms"," 26843.5 ms"," 33554.4 ms"," 44739.2 ms"," 44739.2 ms"," 67108.9 ms"," 67108.9 ms"," 134217.7 ms"," 134217.7 ms"],count:128,doc:null,overflows7bit:!1},glide_times:{labels:[" OFF"," 0.1 ms/V"," 0.1 ms/V"," 0.1 ms/V"," 0.1 ms/V"," 0.1 ms/V"," 0.1 ms/V"," 0.1 ms/V"," 0.1 ms/V"," 0.1 ms/V"," 0.1 ms/V"," 0.1 ms/V"," 0.1 ms/V"," 0.1 ms/V"," 0.1 ms/V"," 0.1 ms/V"," 0.2 ms/V"," 0.2 ms/V"," 0.2 ms/V"," 0.2 ms/V"," 0.2 ms/V"," 0.2 ms/V"," 0.2 ms/V"," 0.2 ms/V"," 0.2 ms/V"," 0.2 ms/V"," 0.2 ms/V"," 0.2 ms/V"," 0.2 ms/V"," 0.2 ms/V"," 0.2 ms/V"," 0.2 ms/V"," 0.2 ms/V"," 0.3 ms/V"," 0.3 ms/V"," 0.3 ms/V"," 0.3 ms/V"," 0.3 ms/V"," 0.3 ms/V"," 0.3 ms/V"," 0.3 ms/V"," 0.3 ms/V"," 0.3 ms/V"," 0.4 ms/V"," 0.4 ms/V"," 0.4 ms/V"," 0.4 ms/V"," 0.4 ms/V"," 0.4 ms/V"," 0.4 ms/V"," 0.5 ms/V"," 0.5 ms/V"," 0.5 ms/V"," 0.5 ms/V"," 0.5 ms/V"," 0.6 ms/V"," 0.6 ms/V"," 0.6 ms/V"," 0.6 ms/V"," 0.7 ms/V"," 0.7 ms/V"," 0.7 ms/V"," 0.8 ms/V"," 0.8 ms/V"," 0.8 ms/V"," 0.9 ms/V"," 0.9 ms/V"," 1.0 ms/V"," 1.0 ms/V"," 1.1 ms/V"," 1.1 ms/V"," 1.2 ms/V"," 1.3 ms/V"," 1.3 ms/V"," 1.4 ms/V"," 1.5 ms/V"," 1.6 ms/V"," 1.7 ms/V"," 1.8 ms/V"," 1.9 ms/V"," 2.0 ms/V"," 2.2 ms/V"," 2.3 ms/V"," 2.5 ms/V"," 2.6 ms/V"," 2.8 ms/V"," 3.0 ms/V"," 3.3 ms/V"," 3.5 ms/V"," 3.8 ms/V"," 4.1 ms/V"," 4.5 ms/V"," 4.9 ms/V"," 5.3 ms/V"," 5.8 ms/V"," 6.4 ms/V"," 7.0 ms/V"," 7.8 ms/V"," 8.6 ms/V"," 9.5 ms/V"," 10.5 ms/V"," 11.7 ms/V"," 13.1 ms/V"," 15.0 ms/V"," 16.8 ms/V"," 19.1 ms/V"," 22.1 ms/V"," 26.2 ms/V"," 30.0 ms/V"," 35.0 ms/V"," 41.9 ms/V"," 46.6 ms/V"," 59.9 ms/V"," 69.9 ms/V"," 83.9 ms/V"," 104.9 ms/V"," 139.8 ms/V"," 209.7 ms/V"," 209.7 ms/V"," 209.7 ms/V"," 419.4 ms/V"," 419.4 ms/V"," 419.4 ms/V"," 419.4 ms/V"," 419.4 ms/V"," 419.4 ms/V"," 419.4 ms/V"," 419.4 ms/V"],count:128,doc:null,overflows7bit:!1},glide_times2:{labels:["OFF"," 0.2 ms/V"," 0.2 ms/V"," 0.2 ms/V"," 0.2 ms/V"," 0.2 ms/V"," 0.3 ms/V"," 0.3 ms/V"," 0.3 ms/V"," 0.3 ms/V"," 0.3 ms/V"," 0.3 ms/V"," 0.3 ms/V"," 0.3 ms/V"," 0.3 ms/V"," 0.3 ms/V"," 0.4 ms/V"," 0.4 ms/V"," 0.4 ms/V"," 0.4 ms/V"," 0.4 ms/V"," 0.4 ms/V"," 0.5 ms/V"," 0.5 ms/V"," 0.5 ms/V"," 0.5 ms/V"," 0.5 ms/V"," 0.5 ms/V"," 0.6 ms/V"," 0.6 ms/V"," 0.6 ms/V"," 0.6 ms/V"," 0.7 ms/V"," 0.7 ms/V"," 0.7 ms/V"," 0.8 ms/V"," 0.8 ms/V"," 0.8 ms/V"," 0.9 ms/V"," 0.9 ms/V"," 1.0 ms/V"," 1.0 ms/V"," 1.0 ms/V"," 1.1 ms/V"," 1.2 ms/V"," 1.2 ms/V"," 1.3 ms/V"," 1.3 ms/V"," 1.4 ms/V"," 1.5 ms/V"," 1.6 ms/V"," 1.6 ms/V"," 1.7 ms/V"," 1.8 ms/V"," 1.9 ms/V"," 2.0 ms/V"," 2.2 ms/V"," 2.3 ms/V"," 2.4 ms/V"," 2.6 ms/V"," 2.7 ms/V"," 2.9 ms/V"," 3.1 ms/V"," 3.3 ms/V"," 3.5 ms/V"," 3.7 ms/V"," 3.9 ms/V"," 4.2 ms/V"," 4.5 ms/V"," 4.8 ms/V"," 5.2 ms/V"," 5.5 ms/V"," 5.9 ms/V"," 6.4 ms/V"," 6.9 ms/V"," 7.4 ms/V"," 8.0 ms/V"," 8.7 ms/V"," 9.4 ms/V"," 10.2 ms/V"," 11.0 ms/V"," 12.0 ms/V"," 13.1 ms/V"," 14.3 ms/V"," 15.7 ms/V"," 17.2 ms/V"," 18.9 ms/V"," 20.8 ms/V"," 22.9 ms/V"," 25.4 ms/V"," 28.1 ms/V"," 31.3 ms/V"," 35.0 ms/V"," 39.0 ms/V"," 43.7 ms/V"," 49.3 ms/V"," 55.7 ms/V"," 63.0 ms/V"," 71.4 ms/V"," 81.3 ms/V"," 93.2 ms/V"," 107.4 ms/V"," 124.3 ms/V"," 144.3 ms/V"," 167.8 ms/V"," 194.5 ms/V"," 231.4 ms/V"," 268.4 ms/V"," 319.6 ms/V"," 383.5 ms/V"," 462.8 ms/V"," 559.2 ms/V"," 671.1 ms/V"," 789.5 ms/V"," 958.7 ms/V"," 1118.5 ms/V"," 1342.2 ms/V"," 1677.7 ms/V"," 1917.4 ms/V"," 2684.4 ms/V"," 2684.4 ms/V"," 3355.4 ms/V"," 4473.9 ms/V"," 4473.9 ms/V"," 6710.9 ms/V"," 6710.9 ms/V"," 13421.8 ms/V"," 13421.8 ms/V"],count:128,doc:null,overflows7bit:!1},types_menu:{labels:["OFF","NOTE","TRIG","CC","VEL","AT","POLY AT","PB","CLOCK","LFO","ENV","SEQ","RANDOM","ARP","CC RECORDER"],count:15,doc:null,overflows7bit:!1},gate_menu:{labels:["OFF","GATE","TRIG","CC","VEL","AT","POLY AT","PB","CLOCK","LFO","ENV","SEQ","RANDOM","EUCLIDEAN"],count:14,doc:null,overflows7bit:!1},fx_menu:{labels:["OFF","NOTE FILTER","RANDOM OCT","RANDOM NOTE","CHANCE","ACCUMULATE","TRANSPOSE","SCALE","MICROTONAL","DELAY","HUMANIZE","LOGIC","RANDOM VEL","RANDOM TRIG LENGTH","INVERT","REPEATS"],count:16,doc:null,overflows7bit:!1},global_menu:{labels:["OFF","GLOBAL"],count:2,doc:null,overflows7bit:!1}},mt={cv:[{index:0,wire:0,key:"off",name:"OFF",display:"Off",domain:null,doc:"Slot disabled. The output rests at 0 V.",docSource:"editor-derived",icon:"off",family:"off",params:[]},{index:1,wire:1,key:"note",name:"NOTE",display:"Note",domain:null,doc:"Pitch CV from incoming MIDI notes, with pitch bend, vibrato and glide.",docSource:"editor-derived",icon:"note",family:"pitch",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"voice_mode",label:"Voice mode",legacyLabel:"out type",domain:"group_menu",min:0,max:6,wireMax:6,default:0,unit:null,doc:"How this output picks notes: a mono priority rule, or membership of a polyphonic group.",docSource:"spec"},{index:3,id:"bend_range",label:"Bend range",legacyLabel:"pb range",domain:"pb_range_menu",min:0,max:23,wireMax:23,default:1,unit:"semitones",doc:"How far pitch bend moves the output.",docSource:"spec"},{index:4,id:"vibrato_rate",label:"Vibrato rate",legacyLabel:"vibrato",domain:"vib_speed",min:0,max:99,wireMax:99,default:0,unit:"Hz",doc:"Vibrato speed. Depth is controlled live by the mod wheel (CC 1).",docSource:"spec"},{index:5,id:"glide",label:"Glide",legacyLabel:"glide",domain:"off_127_menu",min:0,max:127,wireMax:127,default:0,unit:null,doc:"Portamento time between notes.",docSource:"spec"},{index:6,id:"legato",label:"Legato",legacyLabel:"legato",domain:"onoff_menu",min:0,max:1,wireMax:1,default:0,unit:null,doc:"When on, glide applies only between overlapping notes.",docSource:"spec"},{index:7,id:"note_low",label:"Note low",legacyLabel:"min",domain:"note_menu",min:0,max:127,wireMax:127,default:0,unit:"note",doc:"Notes below this are ignored.",docSource:"spec"},{index:8,id:"note_high",label:"Note high",legacyLabel:"max",domain:"note_menu",min:0,max:127,wireMax:127,default:127,unit:"note",doc:"Notes above this are ignored.",docSource:"spec"}]},{index:2,wire:2,key:"cvtrigger",name:"TRIG",display:"Trigger",domain:null,doc:"Fixed-length pulse fired by a chosen note, optionally scaled by velocity.",docSource:"editor-derived",icon:"trig",family:"gate_trigger",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"note",label:"Note",legacyLabel:"note",domain:"note_all_menu",min:0,max:127,wireMax:127,default:0,unit:"note",doc:"Which incoming note fires this output.",docSource:"spec"},{index:3,id:"length",label:"Length",legacyLabel:"length",domain:"length_menu",min:0,max:127,wireMax:127,default:0,unit:"ms",doc:"How long the output stays high. Latch holds it for as long as the note is held.",docSource:"spec"},{index:4,id:"velocity_sensitive",label:"Velocity sensitive",legacyLabel:"vel sens",domain:"onoff_menu",min:0,max:1,wireMax:1,default:0,unit:null,doc:"Scale the output voltage by note velocity.",docSource:"spec"},{index:5,id:"level_min",label:"Level min",legacyLabel:"minimum",domain:"invert_range_gate_menu",min:0,max:9,wireMax:9,default:0,unit:"V",doc:"Output voltage at zero velocity, when velocity sensitivity is on.",docSource:"spec"},{index:6,id:"level_range",label:"Level range",legacyLabel:"range",domain:"range_cv_menu",min:0,max:11,wireMax:11,default:0,unit:"V",doc:"Output voltage at full scale.",docSource:"spec"}]},{index:3,wire:3,key:"cc",name:"CC",display:"MIDI CC",domain:null,doc:"CV that tracks a MIDI continuous controller.",docSource:"editor-derived",icon:"cc",family:"expression",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"cc_number",label:"CC number",legacyLabel:"number",domain:"_127_menu",min:0,max:127,wireMax:127,default:1,unit:null,doc:"Which MIDI CC number to follow.",docSource:"spec"},{index:3,id:"level_range",label:"Level range",legacyLabel:"range",domain:"range_cv_note_menu",min:0,max:12,wireMax:12,default:0,unit:"V",doc:"Output voltage at full scale.",docSource:"spec"},{index:4,id:"slew",label:"Slew",legacyLabel:"filter",domain:"off_100_menu",min:0,max:100,wireMax:100,default:0,unit:null,doc:"Smooths the output, so it glides to new values instead of stepping.",docSource:"spec"}]},{index:4,wire:4,key:"vel",name:"VEL",display:"Velocity",domain:null,doc:"CV proportional to note velocity.",docSource:"editor-derived",icon:"velocity",family:"expression",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"trigger_source",label:"Trigger source",legacyLabel:"source",domain:"dest_note_menu",min:0,max:8,wireMax:8,default:1,unit:null,doc:"Take velocity from notes on the MIDI channel, or from the note playing on another CV output.",docSource:"spec"},{index:3,id:"level_range",label:"Level range",legacyLabel:"range",domain:"range_cv_menu",min:0,max:11,wireMax:11,default:1,unit:"V",doc:"Output voltage at full scale.",docSource:"spec"}]},{index:5,wire:5,key:"aftertouch",name:"AT",display:"Aftertouch",domain:null,doc:"CV from channel (monophonic) aftertouch.",docSource:"editor-derived",icon:"aftertouch",family:"expression",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"level_range",label:"Level range",legacyLabel:"range",domain:"range_cv_menu",min:0,max:11,wireMax:11,default:0,unit:"V",doc:"Output voltage at full scale.",docSource:"spec"},{index:3,id:"slew",label:"Slew",legacyLabel:"filter",domain:"off_127_menu",min:0,max:127,wireMax:127,default:0,unit:null,doc:"Smooths the output, so it glides to new values instead of stepping.",docSource:"spec"}]},{index:6,wire:6,key:"poly_after",name:"POLY AT",display:"Poly aftertouch",domain:null,doc:"CV from polyphonic aftertouch on one specific note.",docSource:"editor-derived",icon:"poly-aftertouch",family:"expression",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"trigger_source",label:"Trigger source",legacyLabel:"source",domain:"note_menu",min:0,max:127,wireMax:127,default:36,unit:"note",doc:"Which note’s aftertouch to follow.",docSource:"spec"},{index:3,id:"level_range",label:"Level range",legacyLabel:"range",domain:"range_cv_menu",min:0,max:11,wireMax:11,default:1,unit:"V",doc:"Output voltage at full scale.",docSource:"spec"},{index:4,id:"slew",label:"Slew",legacyLabel:"filter",domain:"off_127_menu",min:0,max:127,wireMax:127,default:0,unit:null,doc:"Smooths the output, so it glides to new values instead of stepping.",docSource:"spec"}]},{index:7,wire:7,key:"pitchbend",name:"PB",display:"Pitch bend",domain:null,doc:"CV from the pitch bend wheel.",docSource:"editor-derived",icon:"pitch-bend",family:"expression",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"level_range",label:"Level range",legacyLabel:"range",domain:"range_cv_menu",min:0,max:11,wireMax:11,default:0,unit:"V",doc:"Output voltage at full scale.",docSource:"spec"},{index:3,id:"slew",label:"Slew",legacyLabel:"filter",domain:"off_127_menu",min:0,max:127,wireMax:127,default:0,unit:null,doc:"Smooths the output, so it glides to new values instead of stepping.",docSource:"spec"}]},{index:8,wire:8,key:"clock",name:"CLOCK",display:"Clock",domain:null,doc:"Clock, start/stop or reset pulses derived from the master clock. Set internal or external sync in Global.",docSource:"editor-derived",icon:"clock",family:"clock",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"clock_event",label:"Clock event",legacyLabel:"source",domain:"clock_type_menu",min:0,max:2,wireMax:2,default:0,unit:null,doc:"Which clock event to output: running clock pulses, start/stop, or reset.",docSource:"spec"},{index:3,id:"division",label:"Clock division",legacyLabel:"div",domain:"div_menu",min:0,max:22,wireMax:22,default:6,unit:"bars/beats",doc:"How often this runs, as a division of the master clock.",docSource:"spec"},{index:4,id:"length",label:"Length",legacyLabel:"length",domain:"ms_128_menu",min:0,max:128,wireMax:127,default:5,unit:"ms",doc:"How long the output stays high. Latch holds it for as long as the note is held.",docSource:"spec"},{index:5,id:"level_range",label:"Level range",legacyLabel:"range",domain:"range_cv_menu",min:0,max:11,wireMax:11,default:2,unit:"V",doc:"Output voltage at full scale.",docSource:"spec"},{index:6,id:"swing",label:"Swing",legacyLabel:"swing",domain:"swing_menu",min:0,max:5,wireMax:5,default:0,unit:null,doc:"Delays every other step to create shuffle.",docSource:"spec"}]},{index:9,wire:9,key:"lfo",name:"LFO",display:"LFO",domain:null,doc:"Clock-synced LFO. A note on the selected channel can reset its phase.",docSource:"editor-derived",icon:"lfo",family:"modulation",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"waveform",label:"Waveform",legacyLabel:"waveform",domain:"lfo_type_menu",min:0,max:6,wireMax:6,default:0,unit:null,doc:"The LFO shape.",docSource:"spec"},{index:3,id:"rate",label:"Rate",legacyLabel:"speed",domain:"lfo_div_menu",min:0,max:24,wireMax:24,default:2,unit:"bars/beats",doc:"LFO speed, as a division of the master clock.",docSource:"spec"},{index:4,id:"lfo_mode",label:"Reset mode",legacyLabel:"mode",domain:"lfo_mode_menu",min:0,max:2,wireMax:2,default:0,unit:null,doc:"Whether the LFO free-runs, restarts on each note, or runs only while a key is held.",docSource:"spec"},{index:5,id:"level_range",label:"Level range",legacyLabel:"range",domain:"range_cv_menu",min:0,max:11,wireMax:11,default:0,unit:"V",doc:"Output voltage at full scale.",docSource:"spec"}]},{index:10,wire:10,key:"env",name:"ENV",display:"Envelope",domain:null,doc:"Envelope generator triggered by MIDI notes or by another output.",docSource:"editor-derived",icon:"envelope",family:"modulation",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"trigger_source",label:"Trigger source",legacyLabel:"source",domain:"dest_note_menu",min:0,max:8,wireMax:8,default:0,unit:null,doc:"What triggers the envelope: notes on the MIDI channel, or the note playing on another CV output.",docSource:"spec"},{index:3,id:"note",label:"Note",legacyLabel:"note",domain:"note_all_menu",min:0,max:127,wireMax:127,default:0,unit:"note",doc:"Which incoming note fires this output.",docSource:"spec"},{index:4,id:"envelope_shape",label:"Shape",legacyLabel:"type",domain:"env_type_menu",min:0,max:3,wireMax:3,default:2,unit:null,doc:"Which envelope stages are used.",docSource:"spec"},{index:5,id:"attack",label:"Attack",legacyLabel:"attack",domain:"env_times",min:0,max:127,wireMax:127,default:1,unit:"ms",doc:"Time to rise from zero to full level.",docSource:"spec"},{index:6,id:"decay",label:"Decay",legacyLabel:"decay",domain:"env_times",min:0,max:127,wireMax:127,default:50,unit:"ms",doc:"Time to fall from full level to the sustain level.",docSource:"spec"},{index:7,id:"sustain",label:"Sustain",legacyLabel:"sustain",domain:"_100_menu",min:0,max:100,wireMax:100,default:100,unit:null,doc:"Level held while the note is held.",docSource:"spec"},{index:8,id:"release",label:"Release",legacyLabel:"release",domain:"env_times",min:0,max:127,wireMax:127,default:50,unit:"ms",doc:"Time to fall to zero after the note is released.",docSource:"spec"}]},{index:11,wire:11,key:"seq",name:"SEQ",display:"Sequencer",domain:null,doc:"Step sequencer clocked from the master clock. Send CC#1 on the selected channel to set step levels while recording.",docSource:"editor-derived",icon:"sequencer",family:"pitch",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"seq_output",label:"Step output",legacyLabel:"out type",domain:"seq_type_menu",min:0,max:1,wireMax:1,default:0,unit:null,doc:"What each step emits.",docSource:"spec"},{index:3,id:"base_note",label:"Base note",legacyLabel:"base note",domain:"note_menu",min:0,max:127,wireMax:127,default:36,unit:"note",doc:"The note a step plays when its value is zero.",docSource:"spec"},{index:4,id:"division",label:"Clock division",legacyLabel:"div",domain:"div_menu",min:0,max:22,wireMax:22,default:6,unit:"bars/beats",doc:"How often this runs, as a division of the master clock.",docSource:"spec"},{index:5,id:"length",label:"Length",legacyLabel:"length",domain:"_64_menu",min:0,max:63,wireMax:63,default:7,unit:"steps",doc:"Number of steps in the sequence.",docSource:"spec"},{index:6,id:"direction",label:"Direction",legacyLabel:"dir",domain:"seq_dir_menu",min:0,max:3,wireMax:3,default:0,unit:null,doc:"The order steps are played in.",docSource:"spec"},{index:7,id:"glide",label:"Glide",legacyLabel:"glide",domain:"off_100_menu",min:0,max:100,wireMax:100,default:0,unit:null,doc:"Portamento time between notes.",docSource:"spec"},{index:8,id:"note_action",label:"Note action",legacyLabel:"note in dest",domain:"note_in_dest_menu",min:0,max:2,wireMax:2,default:0,unit:null,doc:"What an incoming note does to the sequence: transpose it, or randomise it over one or two octaves.",docSource:"spec"}]},{index:12,wire:12,key:"random cv",name:"RANDOM",display:"Random",domain:null,doc:"Random voltage generator, triggered by notes or by the clock.",docSource:"editor-derived",icon:"random",family:"modulation",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"trigger_source",label:"Trigger source",legacyLabel:"source",domain:"source_menu",min:0,max:1,wireMax:1,default:1,unit:null,doc:"What generates a new random value: an incoming note, or the master clock.",docSource:"spec"},{index:3,id:"division",label:"Clock division",legacyLabel:"div",domain:"div_menu",min:0,max:22,wireMax:22,default:6,unit:"bars/beats",doc:"How often this runs, as a division of the master clock.",docSource:"spec"},{index:4,id:"base_note",label:"Base note",legacyLabel:"base note",domain:"note_menu",min:0,max:127,wireMax:127,default:48,unit:"note",doc:"The note the random values are centred on. Ignored when the source is an incoming note.",docSource:"spec"},{index:5,id:"interval_range",label:"Interval range",legacyLabel:"range",domain:"semi_tone_range_menu",min:0,max:46,wireMax:46,default:11,unit:"semitones",doc:"How far, in semitones, a random value can stray from the base note.",docSource:"spec"},{index:6,id:"slew",label:"Slew",legacyLabel:"smooth",domain:"off_100_menu",min:0,max:100,wireMax:100,default:0,unit:null,doc:"Smooths the output, so it glides to new values instead of stepping.",docSource:"spec"}]},{index:13,wire:13,key:"arp",name:"ARP",display:"Arpeggiator",domain:null,doc:"Arpeggiator over the currently held notes.",docSource:"editor-derived",icon:"arpeggiator",family:"pitch",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"direction",label:"Direction",legacyLabel:"dir",domain:"seq_dir_menu",min:0,max:3,wireMax:3,default:0,unit:null,doc:"The order steps are played in.",docSource:"spec"},{index:3,id:"octave_range",label:"Octave range",legacyLabel:"range",domain:"range_oct_menu",min:0,max:3,wireMax:3,default:0,unit:"oct",doc:"How many octaves the arpeggio spans above the held notes.",docSource:"spec"},{index:4,id:"division",label:"Clock division",legacyLabel:"div",domain:"div_menu",min:0,max:22,wireMax:22,default:6,unit:"bars/beats",doc:"How fast the arpeggio steps, as a division of the master clock.",docSource:"spec"},{index:5,id:"hold",label:"Hold",legacyLabel:"hold",domain:"onoff_menu",min:0,max:1,wireMax:1,default:0,unit:null,doc:"Keep arpeggiating after the keys are released.",docSource:"spec"},{index:6,id:"swing",label:"Swing",legacyLabel:"swing",domain:"swing_menu",min:0,max:5,wireMax:5,default:0,unit:null,doc:"Delays every other step to create shuffle.",docSource:"spec"}]},{index:14,wire:14,key:"cc_rec",name:"CC RECORDER",display:"CC recorder",domain:null,doc:"Records an incoming CC into a loop and plays it back.",docSource:"editor-derived",icon:"cc-recorder",family:"expression",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"cc_number",label:"CC number",legacyLabel:"number",domain:"_127_menu",min:0,max:127,wireMax:127,default:1,unit:null,doc:"Which MIDI CC to record.",docSource:"spec"},{index:3,id:"division",label:"Clock division",legacyLabel:"div",domain:"div_menu",min:0,max:22,wireMax:22,default:6,unit:"bars/beats",doc:"How often this runs, as a division of the master clock.",docSource:"spec"},{index:4,id:"length",label:"Length",legacyLabel:"length",domain:"_64_menu",min:0,max:63,wireMax:63,default:15,unit:"steps",doc:"Number of steps in the recording.",docSource:"spec"},{index:5,id:"glide",label:"Glide",legacyLabel:"glide",domain:"off_100_menu",min:0,max:100,wireMax:100,default:0,unit:null,doc:"Smooths the transition between recorded steps.",docSource:"spec"},{index:6,id:"note",label:"Note",legacyLabel:"note",domain:"note_all_menu",min:0,max:127,wireMax:127,default:60,unit:"note",doc:"Which incoming note performs the note action.",docSource:"spec"},{index:7,id:"note_action",label:"Note action",legacyLabel:"note in dest",domain:"note_in_rec_menu",min:0,max:3,wireMax:3,default:0,unit:null,doc:"What the trigger note does: clear, arm recording, start recording, or start/stop playback.",docSource:"spec"},{index:8,id:"level_range",label:"Level range",legacyLabel:"range",domain:"range_cv_note_menu",min:0,max:12,wireMax:12,default:1,unit:"V",doc:"Output voltage at full scale.",docSource:"spec"}]}],gate:[{index:0,wire:0,key:"off",name:"OFF",display:"Off",domain:null,doc:"Slot disabled. The output rests at 0 V.",docSource:"editor-derived",icon:"off",family:"off",params:[]},{index:1,wire:1,key:"gate",name:"GATE",display:"Gate",domain:null,doc:"Gate that follows note on/off, with optional velocity-scaled level and slew.",docSource:"editor-derived",icon:"gate",family:"gate_trigger",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"trigger_source",label:"Trigger source",legacyLabel:"source",domain:"dest_note_menu",min:0,max:8,wireMax:8,default:1,unit:null,doc:"What opens the gate: notes on the MIDI channel, or the note playing on another CV output. Pick a CV output to pair this gate with a voice.",docSource:"spec"},{index:3,id:"level_range",label:"Level range",legacyLabel:"range",domain:"range_gate_menu",min:0,max:9,wireMax:9,default:0,unit:"V",doc:"Output voltage at full scale.",docSource:"spec"},{index:4,id:"velocity_sensitive",label:"Velocity sensitive",legacyLabel:"vel sens",domain:"onoff_menu",min:0,max:1,wireMax:1,default:0,unit:null,doc:"Scale the output voltage by note velocity.",docSource:"spec"},{index:5,id:"rise",label:"Rise",legacyLabel:"rise",domain:"rise_time",min:0,max:99,wireMax:99,default:0,unit:"ms",doc:"A short attack on the gate, to soften its leading edge.",docSource:"spec"},{index:6,id:"fall",label:"Fall",legacyLabel:"fall",domain:"rise_time",min:0,max:99,wireMax:99,default:0,unit:"ms",doc:"A short decay on the gate, to soften its trailing edge.",docSource:"spec"},{index:7,id:"retrigger",label:"Retrigger",legacyLabel:"retrig",domain:"onoff_menu",min:0,max:1,wireMax:1,default:0,unit:null,doc:"Restart the gate on every new note, even if the previous note is still held.",docSource:"spec"}]},{index:2,wire:2,key:"trigger",name:"TRIG",display:"Trigger",domain:null,doc:"Fixed-length pulse fired by a chosen note, optionally scaled by velocity.",docSource:"editor-derived",icon:"trig",family:"gate_trigger",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"trigger_source",label:"Trigger source",legacyLabel:"source",domain:"dest_note_menu",min:0,max:8,wireMax:8,default:0,unit:null,doc:"What fires the trigger: notes on the MIDI channel, or the note playing on another CV output.",docSource:"spec"},{index:3,id:"note",label:"Note",legacyLabel:"note",domain:"note_all_menu",min:0,max:127,wireMax:127,default:0,unit:"note",doc:"Which incoming note fires this output.",docSource:"spec"},{index:4,id:"length",label:"Length",legacyLabel:"length",domain:"length_menu",min:0,max:127,wireMax:127,default:0,unit:"ms",doc:"How long the output stays high. Latch holds it for as long as the note is held.",docSource:"spec"},{index:5,id:"velocity_sensitive",label:"Velocity sensitive",legacyLabel:"vel sens",domain:"onoff_menu",min:0,max:1,wireMax:1,default:0,unit:null,doc:"Scale the output voltage by note velocity.",docSource:"spec"},{index:6,id:"level_min",label:"Level min",legacyLabel:"minimum",domain:"invert_range_gate_menu",min:0,max:9,wireMax:9,default:0,unit:"V",doc:"Output voltage at zero velocity, when velocity sensitivity is on.",docSource:"spec"},{index:7,id:"level_range",label:"Level range",legacyLabel:"range",domain:"range_gate_menu",min:0,max:9,wireMax:9,default:0,unit:"V",doc:"Output voltage at full scale.",docSource:"spec"}]},{index:3,wire:3,key:"cc",name:"CC",display:"MIDI CC",domain:null,doc:"Gate-range output that tracks a MIDI continuous controller.",docSource:"editor-derived",icon:"cc",family:"expression",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"cc_number",label:"CC number",legacyLabel:"number",domain:"_127_menu",min:0,max:127,wireMax:127,default:1,unit:null,doc:"Which MIDI CC number to follow.",docSource:"spec"},{index:3,id:"level_range",label:"Level range",legacyLabel:"range",domain:"range_gate_menu",min:0,max:9,wireMax:9,default:0,unit:"V",doc:"Output voltage at full scale.",docSource:"spec"},{index:4,id:"slew",label:"Slew",legacyLabel:"filter",domain:"off_100_menu",min:0,max:100,wireMax:100,default:0,unit:null,doc:"Smooths the output, so it glides to new values instead of stepping.",docSource:"spec"}]},{index:4,wire:4,key:"vel",name:"VEL",display:"Velocity",domain:null,doc:"Output level proportional to note velocity.",docSource:"editor-derived",icon:"velocity",family:"expression",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"trigger_source",label:"Trigger source",legacyLabel:"source",domain:"dest_note_menu",min:0,max:8,wireMax:8,default:1,unit:null,doc:"Take velocity from notes on the MIDI channel, or from the note playing on another CV output.",docSource:"spec"},{index:3,id:"level_range",label:"Level range",legacyLabel:"range",domain:"range_gate_menu",min:0,max:9,wireMax:9,default:0,unit:"V",doc:"Output voltage at full scale.",docSource:"spec"}]},{index:5,wire:5,key:"aftertouch",name:"AT",display:"Aftertouch",domain:null,doc:"Output from channel (monophonic) aftertouch.",docSource:"editor-derived",icon:"aftertouch",family:"expression",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"level_range",label:"Level range",legacyLabel:"range",domain:"range_gate_menu",min:0,max:9,wireMax:9,default:0,unit:"V",doc:"Output voltage at full scale.",docSource:"spec"},{index:3,id:"slew",label:"Slew",legacyLabel:"filter",domain:"off_100_menu",min:0,max:100,wireMax:100,default:0,unit:null,doc:"Smooths the output, so it glides to new values instead of stepping.",docSource:"spec"}]},{index:6,wire:6,key:"poly_after",name:"POLY AT",display:"Poly aftertouch",domain:null,doc:"Output from polyphonic aftertouch on one specific note.",docSource:"editor-derived",icon:"poly-aftertouch",family:"expression",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"trigger_source",label:"Trigger source",legacyLabel:"source",domain:"note_menu",min:0,max:127,wireMax:127,default:36,unit:"note",doc:"Which note’s aftertouch to follow.",docSource:"spec"},{index:3,id:"level_range",label:"Level range",legacyLabel:"range",domain:"range_gate_menu",min:0,max:9,wireMax:9,default:0,unit:"V",doc:"Output voltage at full scale.",docSource:"spec"},{index:4,id:"slew",label:"Slew",legacyLabel:"filter",domain:"off_100_menu",min:0,max:100,wireMax:100,default:0,unit:null,doc:"Smooths the output, so it glides to new values instead of stepping.",docSource:"spec"}]},{index:7,wire:7,key:"pitchbend",name:"PB",display:"Pitch bend",domain:null,doc:"Output from the pitch bend wheel.",docSource:"editor-derived",icon:"pitch-bend",family:"expression",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"level_range",label:"Level range",legacyLabel:"range",domain:"range_gate_menu",min:0,max:9,wireMax:9,default:0,unit:"V",doc:"Output voltage at full scale.",docSource:"spec"},{index:3,id:"slew",label:"Slew",legacyLabel:"filter",domain:"off_100_menu",min:0,max:100,wireMax:100,default:0,unit:null,doc:"Smooths the output, so it glides to new values instead of stepping.",docSource:"spec"}]},{index:8,wire:8,key:"clock",name:"CLOCK",display:"Clock",domain:null,doc:"Clock, start/stop or reset pulses derived from the master clock.",docSource:"editor-derived",icon:"clock",family:"clock",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"clock_event",label:"Clock event",legacyLabel:"source",domain:"clock_type_menu",min:0,max:2,wireMax:2,default:0,unit:null,doc:"Which clock event to output: running clock pulses, start/stop, or reset.",docSource:"spec"},{index:3,id:"division",label:"Clock division",legacyLabel:"div",domain:"div_menu",min:0,max:22,wireMax:22,default:6,unit:"bars/beats",doc:"How often this runs, as a division of the master clock.",docSource:"spec"},{index:4,id:"length",label:"Length",legacyLabel:"length",domain:"ms_128_menu",min:0,max:128,wireMax:127,default:5,unit:"ms",doc:"How long the output stays high. Latch holds it for as long as the note is held.",docSource:"spec"},{index:5,id:"level_range",label:"Level range",legacyLabel:"range",domain:"range_gate_menu",min:0,max:9,wireMax:9,default:0,unit:"V",doc:"Output voltage at full scale.",docSource:"spec"},{index:6,id:"swing",label:"Swing",legacyLabel:"swing",domain:"swing_menu",min:0,max:5,wireMax:5,default:0,unit:null,doc:"Delays every other step to create shuffle.",docSource:"spec"}]},{index:9,wire:9,key:"lfo",name:"LFO",display:"LFO",domain:null,doc:"Clock-synced LFO on a gate output.",docSource:"editor-derived",icon:"lfo",family:"modulation",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"waveform",label:"Waveform",legacyLabel:"waveform",domain:"lfo_type_menu",min:0,max:6,wireMax:6,default:0,unit:null,doc:"The LFO shape.",docSource:"spec"},{index:3,id:"rate",label:"Rate",legacyLabel:"speed",domain:"lfo_div_menu",min:0,max:24,wireMax:24,default:2,unit:"bars/beats",doc:"LFO speed, as a division of the master clock.",docSource:"spec"},{index:4,id:"lfo_mode",label:"Reset mode",legacyLabel:"mode",domain:"lfo_mode_menu",min:0,max:2,wireMax:2,default:0,unit:null,doc:"Whether the LFO free-runs, restarts on each note, or runs only while a key is held.",docSource:"spec"},{index:5,id:"level_range",label:"Level range",legacyLabel:"range",domain:"range_gate_menu",min:0,max:9,wireMax:9,default:0,unit:"V",doc:"Output voltage at full scale.",docSource:"spec"}]},{index:10,wire:10,key:"env",name:"ENV",display:"Envelope",domain:null,doc:"Envelope generator triggered by MIDI notes or by another output.",docSource:"editor-derived",icon:"envelope",family:"modulation",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"trigger_source",label:"Trigger source",legacyLabel:"source",domain:"dest_note_menu",min:0,max:8,wireMax:8,default:0,unit:null,doc:"What triggers the envelope: notes on the MIDI channel, or the note playing on another CV output.",docSource:"spec"},{index:3,id:"note",label:"Note",legacyLabel:"note",domain:"note_all_menu",min:0,max:127,wireMax:127,default:0,unit:"note",doc:"Which incoming note fires this output.",docSource:"spec"},{index:4,id:"envelope_shape",label:"Shape",legacyLabel:"type",domain:"env_type_menu",min:0,max:3,wireMax:3,default:2,unit:null,doc:"Which envelope stages are used.",docSource:"spec"},{index:5,id:"attack",label:"Attack",legacyLabel:"attack",domain:"env_times",min:0,max:127,wireMax:127,default:1,unit:"ms",doc:"Time to rise from zero to full level.",docSource:"spec"},{index:6,id:"decay",label:"Decay",legacyLabel:"decay",domain:"env_times",min:0,max:127,wireMax:127,default:50,unit:"ms",doc:"Time to fall from full level to the sustain level.",docSource:"spec"},{index:7,id:"sustain",label:"Sustain",legacyLabel:"sustain",domain:"_100_menu",min:0,max:100,wireMax:100,default:100,unit:null,doc:"Level held while the note is held.",docSource:"spec"},{index:8,id:"release",label:"Release",legacyLabel:"release",domain:"env_times",min:0,max:127,wireMax:127,default:50,unit:"ms",doc:"Time to fall to zero after the note is released.",docSource:"spec"}]},{index:11,wire:11,key:"gate_seq",name:"SEQ",display:"Sequencer",domain:null,doc:"Step sequencer producing gates or CC-derived levels.",docSource:"editor-derived",icon:"sequencer",family:"pitch",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"seq_output",label:"Step output",legacyLabel:"type",domain:"seq_gate_type_menu",min:0,max:1,wireMax:1,default:0,unit:null,doc:"What each step emits.",docSource:"spec"},{index:3,id:"division",label:"Clock division",legacyLabel:"div",domain:"div_menu",min:0,max:22,wireMax:22,default:6,unit:"bars/beats",doc:"How often this runs, as a division of the master clock.",docSource:"spec"},{index:4,id:"gate_length",label:"Gate length",legacyLabel:"gate len",domain:"ms_128_menu",min:0,max:128,wireMax:127,default:6,unit:"ms",doc:"How long each emitted gate stays high.",docSource:"spec"},{index:5,id:"length",label:"Length",legacyLabel:"length",domain:"_64_menu",min:0,max:63,wireMax:63,default:7,unit:"steps",doc:"Number of steps in the sequence.",docSource:"spec"},{index:6,id:"direction",label:"Direction",legacyLabel:"dir",domain:"seq_dir_menu",min:0,max:3,wireMax:3,default:0,unit:null,doc:"The order steps are played in.",docSource:"spec"},{index:7,id:"level_range",label:"Level range",legacyLabel:"range",domain:"range_gate_menu",min:0,max:9,wireMax:9,default:0,unit:"V",doc:"Output voltage at full scale.",docSource:"spec"},{index:8,id:"note_action",label:"Note action",legacyLabel:"note in dest",domain:"note_in_dest_gate",min:0,max:1,wireMax:1,default:0,unit:null,doc:"What an incoming note does to the sequence.",docSource:"spec"}]},{index:12,wire:12,key:"random",name:"RANDOM",display:"Random",domain:null,doc:"Random gate generator with independent probability and level variation.",docSource:"editor-derived",icon:"random",family:"modulation",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"trigger_source",label:"Trigger source",legacyLabel:"source",domain:"source_menu",min:0,max:1,wireMax:1,default:1,unit:null,doc:"What generates a new random value: an incoming note, or the master clock.",docSource:"spec"},{index:3,id:"division",label:"Clock division",legacyLabel:"div",domain:"div_menu",min:0,max:22,wireMax:22,default:6,unit:"bars/beats",doc:"How often this runs, as a division of the master clock.",docSource:"spec"},{index:4,id:"length",label:"Length",legacyLabel:"length",domain:"length_menu",min:0,max:127,wireMax:127,default:6,unit:"ms",doc:"How long each output gate stays high.",docSource:"spec"},{index:5,id:"probability",label:"Probability",legacyLabel:"probability",domain:"percent_menu",min:0,max:100,wireMax:100,default:11,unit:"%",doc:"The chance that a new random value is generated on each trigger.",docSource:"spec"},{index:6,id:"random_depth",label:"Random depth",legacyLabel:"rnd level",domain:"percent_menu",min:0,max:100,wireMax:100,default:0,unit:"%",doc:"How far a new random value can move.",docSource:"spec"},{index:7,id:"level_range",label:"Level range",legacyLabel:"range",domain:"range_gate_menu",min:0,max:9,wireMax:9,default:0,unit:"V",doc:"Output voltage at full scale.",docSource:"spec"},{index:8,id:"slew",label:"Slew",legacyLabel:"smooth",domain:"off_127_menu",min:0,max:127,wireMax:127,default:0,unit:null,doc:"Smooths the output, so it glides to new values instead of stepping.",docSource:"spec"}]},{index:13,wire:13,key:"euclid",name:"EUCLIDEAN",display:"Euclidean",domain:null,doc:"Euclidean rhythm generator — spreads N events over M steps as evenly as possible.",docSource:"editor-derived",icon:"euclidean",family:"gate_trigger",params:[{index:1,id:"channel",label:"MIDI channel",legacyLabel:"channel",domain:"ch_menu",min:0,max:15,wireMax:15,default:0,unit:"channel",doc:"Which MIDI channel this output listens to.",docSource:"spec"},{index:2,id:"division",label:"Clock division",legacyLabel:"div",domain:"div_menu",min:0,max:22,wireMax:22,default:6,unit:"bars/beats",doc:"How often this runs, as a division of the master clock.",docSource:"spec"},{index:3,id:"gate_length",label:"Gate length",legacyLabel:"gate len",domain:"ms_128_menu",min:0,max:128,wireMax:127,default:6,unit:"ms",doc:"How long each emitted gate stays high.",docSource:"spec"},{index:4,id:"steps",label:"Steps",legacyLabel:"steps",domain:"_64_menu",min:0,max:63,wireMax:63,default:15,unit:"steps",doc:"Number of steps in the sequence.",docSource:"spec"},{index:5,id:"fills",label:"Fills",legacyLabel:"events",domain:"_64_menu",min:0,max:63,wireMax:63,default:3,unit:"steps",doc:"How many of the steps are active. The Euclidean algorithm spreads them evenly.",docSource:"spec"},{index:6,id:"rotate",label:"Rotate",legacyLabel:"rotate",domain:"_63_menu",min:0,max:63,wireMax:63,default:0,unit:"steps",doc:"Shifts the whole pattern forward or back.",docSource:"spec"},{index:7,id:"level_range",label:"Level range",legacyLabel:"range",domain:"range_gate_menu",min:0,max:9,wireMax:9,default:0,unit:"V",doc:"Output voltage at full scale.",docSource:"spec"}]}],fx:[{index:0,wire:0,key:"off",name:"OFF",display:"Off",domain:"none",doc:"Slot disabled. The output rests at 0 V.",docSource:"editor-derived",icon:"off",family:null,params:[]},{index:1,wire:1,key:"note filter",name:"NOTE FILTER",display:"Note filter",domain:"note",doc:"Drops notes outside a pitch range before they reach the target output.",docSource:"editor-derived",icon:"note-filter",family:null,params:[{index:1,id:"target",label:"Target",legacyLabel:"dest",domain:"fx_dest_menu_cv",min:0,max:7,wireMax:7,default:0,unit:null,doc:"The CV output this filter applies to.",docSource:"spec"},{index:2,id:"note_low",label:"Note low",legacyLabel:"lower",domain:"note_menu",min:0,max:127,wireMax:127,default:0,unit:"note",doc:"Notes below this are ignored.",docSource:"spec"},{index:3,id:"note_high",label:"Note high",legacyLabel:"higher",domain:"note_menu",min:0,max:127,wireMax:127,default:127,unit:"note",doc:"Notes above this are ignored.",docSource:"spec"}]},{index:2,wire:2,key:"random oct",name:"RANDOM OCT",display:"Random octave",domain:"note",doc:"Randomly shifts notes by whole octaves.",docSource:"editor-derived",icon:"random-octave",family:null,params:[{index:1,id:"target",label:"Target",legacyLabel:"dest",domain:"fx_dest_menu_cv",min:0,max:7,wireMax:7,default:0,unit:null,doc:"The output this FX slot processes.",docSource:"spec"},{index:2,id:"octave_range",label:"Octave range",legacyLabel:"range",domain:"oct_menu",min:0,max:4,wireMax:4,default:1,unit:"oct",doc:"How many octaves up or down a note can be moved.",docSource:"spec"},{index:3,id:"probability",label:"Probability",legacyLabel:"distribution",domain:"percent_menu",min:0,max:100,wireMax:100,default:0,unit:"%",doc:"The chance that a note is moved to a different octave.",docSource:"spec"}]},{index:3,wire:3,key:"random fx",name:"RANDOM NOTE",display:"Random note",domain:"note",doc:"Randomly detunes notes by a number of semitones.",docSource:"editor-derived",icon:"random-note",family:null,params:[{index:1,id:"target",label:"Target",legacyLabel:"dest",domain:"fx_dest_menu_cv",min:0,max:7,wireMax:7,default:0,unit:null,doc:"The output this FX slot processes.",docSource:"spec"},{index:2,id:"interval_range",label:"Interval range",legacyLabel:"range",domain:"semi_tone_range_menu",min:0,max:46,wireMax:46,default:11,unit:"semitones",doc:"The largest interval, in semitones, that can be added.",docSource:"spec"},{index:3,id:"probability",label:"Probability",legacyLabel:"distribution",domain:"percent_menu",min:0,max:100,wireMax:100,default:10,unit:"%",doc:"The chance that a random interval is added.",docSource:"spec"}]},{index:4,wire:4,key:"chance",name:"CHANCE",display:"Chance",domain:"note",doc:"Probability gate — randomly drops notes.",docSource:"editor-derived",icon:"chance",family:null,params:[{index:1,id:"target",label:"Target",legacyLabel:"dest",domain:"fx_dest_menu_cv",min:0,max:7,wireMax:7,default:0,unit:null,doc:"The output this FX slot processes.",docSource:"spec"},{index:2,id:"probability",label:"Probability",legacyLabel:"probability",domain:"percent_menu",min:0,max:100,wireMax:100,default:10,unit:"%",doc:"The chance that a note plays at all.",docSource:"spec"},{index:3,id:"velocity_probability",label:"Velocity to probability",legacyLabel:"vel prob",domain:"percent_menu",min:0,max:100,wireMax:100,default:10,unit:"%",doc:"How strongly note velocity influences the probability.",docSource:"spec"}]},{index:5,wire:5,key:"accumulate",name:"ACCUMULATE",display:"Accumulate",domain:"note",doc:"Adds a growing offset to each successive note, then resets.",docSource:"editor-derived",icon:"accumulate",family:null,params:[{index:1,id:"target",label:"Target",legacyLabel:"dest",domain:"fx_dest_menu_cv",min:0,max:7,wireMax:7,default:0,unit:null,doc:"The output this FX slot processes.",docSource:"spec"},{index:2,id:"amount",label:"Amount",legacyLabel:"amout",domain:"_int63_menu",min:0,max:127,wireMax:127,default:3,unit:null,doc:"Interval added to each successive note.",docSource:"spec"},{index:3,id:"reset_after",label:"Reset after",legacyLabel:"reset",domain:"_128_menu",min:0,max:127,wireMax:127,default:3,unit:null,doc:"Number of notes before the accumulated offset resets to zero.",docSource:"spec"}]},{index:6,wire:6,key:"transpose",name:"TRANSPOSE",display:"Transpose",domain:"note",doc:"Fixed pitch offset in semitones and octaves.",docSource:"editor-derived",icon:"transpose",family:null,params:[{index:1,id:"target",label:"Target",legacyLabel:"dest",domain:"fx_dest_menu_cv",min:0,max:7,wireMax:7,default:0,unit:null,doc:"The output this FX slot processes.",docSource:"spec"},{index:2,id:"semitones",label:"Semitones",legacyLabel:"semitone",domain:"bipolar_menu",min:0,max:127,wireMax:127,default:63,unit:"semitones",doc:"Transposition in semitones.",docSource:"spec"},{index:3,id:"octaves",label:"Octaves",legacyLabel:"octave",domain:"ocatves_menu",min:0,max:8,wireMax:8,default:4,unit:"oct",doc:"Transposition in octaves.",docSource:"spec"}]},{index:7,wire:7,key:"scale",name:"SCALE",display:"Scale",domain:"note",doc:"Quantises pitch to a musical scale.",docSource:"editor-derived",icon:"scale",family:null,params:[{index:1,id:"target",label:"Target",legacyLabel:"dest",domain:"fx_dest_menu_cv",min:0,max:7,wireMax:7,default:0,unit:null,doc:"The output this FX slot processes.",docSource:"spec"},{index:2,id:"scale",label:"Scale",legacyLabel:"scale",domain:"tables_menu",min:0,max:23,wireMax:23,default:0,unit:null,doc:"The scale incoming notes are quantised to.",docSource:"spec"},{index:3,id:"root",label:"Root note",legacyLabel:"root note",domain:"notenames",min:0,max:11,wireMax:11,default:0,unit:null,doc:"The root note of the scale.",docSource:"spec"}]},{index:8,wire:8,key:"microtonal",name:"MICROTONAL",display:"Microtonal",domain:"note",doc:"Applies one of the 8 user microtonal tables stored on the module.",docSource:"editor-derived",icon:"microtonal",family:null,params:[{index:1,id:"target",label:"Target",legacyLabel:"dest",domain:"fx_dest_menu_cv",min:0,max:7,wireMax:7,default:0,unit:null,doc:"The output this FX slot processes.",docSource:"spec"},{index:2,id:"table",label:"Table",legacyLabel:"scale tab",domain:"_1_8_menu",min:0,max:7,wireMax:7,default:0,unit:"table",doc:"Which of the 8 microtonal tables to apply. Edit table contents in the editor's Tuning tab (or import a Scala .scl).",docSource:"spec"}]},{index:9,wire:32,key:"delay",name:"DELAY",display:"Delay",domain:"gate",doc:"Delays events by a fixed time.",docSource:"editor-derived",icon:"delay",family:null,params:[{index:1,id:"target",label:"Target",legacyLabel:"dest",domain:"fx_dest_menu_gate",min:0,max:7,wireMax:7,default:0,unit:null,doc:"The output this FX slot processes.",docSource:"spec"},{index:2,id:"amount",label:"Amount",legacyLabel:"amount",domain:"delay_ms",min:0,max:127,wireMax:127,default:10,unit:"ms",doc:"How long each gate is delayed.",docSource:"spec"}]},{index:10,wire:33,key:"humanize",name:"HUMANIZE",display:"Humanize",domain:"gate",doc:"Randomly nudges event timing to loosen the feel.",docSource:"editor-derived",icon:"humanize",family:null,params:[{index:1,id:"target",label:"Target",legacyLabel:"dest",domain:"fx_dest_menu_gate",min:0,max:7,wireMax:7,default:0,unit:null,doc:"The output this FX slot processes.",docSource:"spec"},{index:2,id:"amount",label:"Amount",legacyLabel:"amount",domain:"percent_menu",min:0,max:100,wireMax:100,default:10,unit:"%",doc:"How much random timing jitter to add.",docSource:"spec"}]},{index:11,wire:34,key:"logic",name:"LOGIC",display:"Logic",domain:"gate",doc:"Combines two gate outputs with a boolean operation.",docSource:"editor-derived",icon:"logic",family:null,params:[{index:1,id:"target",label:"Target",legacyLabel:"dest",domain:"fx_dest_menu_gate",min:0,max:7,wireMax:7,default:0,unit:null,doc:"The output this FX slot processes.",docSource:"spec"},{index:2,id:"operation",label:"Operation",legacyLabel:"function",domain:"logic_menu",min:0,max:6,wireMax:6,default:0,unit:null,doc:"The logic operation applied to the two gates.",docSource:"spec"},{index:3,id:"operand",label:"Operand",legacyLabel:"modulator",domain:"fx_dest_menu_gate",min:0,max:7,wireMax:7,default:0,unit:null,doc:"The second gate input to the logic operation.",docSource:"spec"}]},{index:12,wire:35,key:"random vel",name:"RANDOM VEL",display:"Random velocity",domain:"gate",doc:"Randomises velocity.",docSource:"editor-derived",icon:"random-velocity",family:null,params:[{index:1,id:"target",label:"Target",legacyLabel:"dest",domain:"fx_dest_menu_gate",min:0,max:7,wireMax:7,default:0,unit:null,doc:"The output this FX slot processes.",docSource:"spec"},{index:2,id:"amount",label:"Amount",legacyLabel:"range",domain:"_127_menu",min:0,max:127,wireMax:127,default:63,unit:null,doc:"The range of the generated random velocity.",docSource:"spec"},{index:3,id:"blend",label:"Blend",legacyLabel:"type",domain:"vel_dest_menu",min:0,max:2,wireMax:2,default:0,unit:null,doc:"How the generated velocity combines with the incoming note velocity.",docSource:"spec"}]},{index:13,wire:36,key:"random trig",name:"RANDOM TRIG LENGTH",display:"Random trig length",domain:"gate",doc:"Randomises trigger and gate length.",docSource:"editor-derived",icon:"random-trig-length",family:null,params:[{index:1,id:"target",label:"Target",legacyLabel:"dest",domain:"fx_dest_menu_gate",min:0,max:7,wireMax:7,default:0,unit:null,doc:"The output this FX slot processes.",docSource:"spec"},{index:2,id:"amount",label:"Amount",legacyLabel:"range",domain:"_127_menu",min:0,max:127,wireMax:127,default:63,unit:null,doc:"How much the trigger length can vary. Zero leaves it unchanged.",docSource:"spec"},{index:3,id:"velocity_depth",label:"Velocity depth",legacyLabel:"vel control",domain:"_127_menu",min:0,max:127,wireMax:127,default:10,unit:null,doc:"How strongly note velocity influences the result.",docSource:"spec"}]},{index:14,wire:37,key:"invert",name:"INVERT",display:"Invert",domain:"gate",doc:"Inverts the target output.",docSource:"editor-derived",icon:"invert",family:null,params:[{index:1,id:"target",label:"Target",legacyLabel:"dest",domain:"fx_dest_menu_gate",min:0,max:7,wireMax:7,default:0,unit:null,doc:"The output this FX slot processes.",docSource:"spec"}]},{index:15,wire:38,key:"repeats",name:"REPEATS",display:"Repeats",domain:"gate",doc:"Retriggers each event several times — a ratchet.",docSource:"editor-derived",icon:"repeats",family:null,params:[{index:1,id:"target",label:"Target",legacyLabel:"dest",domain:"fx_dest_menu_gate",min:0,max:7,wireMax:7,default:0,unit:null,doc:"The output this FX slot processes.",docSource:"spec"},{index:2,id:"amount",label:"Amount",legacyLabel:"amount",domain:"_127_menu",min:0,max:127,wireMax:127,default:2,unit:null,doc:"How fast the repeats fire, as a division of the clock.",docSource:"spec"},{index:3,id:"repeats",label:"Repeats",legacyLabel:"numbers",domain:"_127_menu",min:0,max:127,wireMax:127,default:1,unit:null,doc:"How many times each gate repeats.",docSource:"spec"}]}]},pt=[{id:"clock_running",label:"Clock run",kind:"enum",index:0,domain:"clock_state_menu",min:0,max:1,default:0,unit:null,doc:"Starts and stops the internal clock.",docSource:"editor-derived"},{id:"clock_source",label:"Clock source",kind:"enum",index:1,domain:"sync_menu",min:0,max:1,default:0,unit:null,doc:"Whether the module runs its own clock or follows incoming MIDI clock.",docSource:"editor-derived"},{id:"tempo",label:"Tempo",kind:"int14",msbIndex:2,lsbIndex:3,min:30,max:250,default:120,unit:"BPM",doc:"Internal clock tempo. Transmitted as two 7-bit bytes (MSB then LSB).",docSource:"editor-derived"},{id:"midi_thru",label:"MIDI out copy",kind:"enum",index:4,domain:"onoff_menu",min:0,max:1,default:0,unit:null,doc:"Echo incoming MIDI to the MIDI output.",docSource:"editor-derived"},{id:"reset_on_continue",label:"Reset on continue",kind:"enum",index:5,domain:"onoff_menu",min:0,max:1,default:0,unit:null,doc:"Restart sequencers from step 1 when MIDI continue is received, instead of resuming where they stopped.",docSource:"editor-derived"},{id:"global_cc_channel",label:"Global CC channel",kind:"int",index:6,domain:null,min:1,max:16,default:16,unit:"channel",doc:"The channel the modulation matrix listens on for its CC assignments.",docSource:"editor-derived"},{id:"disable_default_cc_map",label:"Disable default CC map",kind:"enum",index:7,domain:"onoff_menu",min:0,max:1,default:0,unit:null,doc:"Turns off the factory CC map so only your own modulation matrix rows apply.",docSource:"editor-derived"}],ft={},gt={rows:32,destinations:[{line:0,label:"CV 1",family:"cv"},{line:1,label:"CV 2",family:"cv"},{line:2,label:"CV 3",family:"cv"},{line:3,label:"CV 4",family:"cv"},{line:4,label:"CV 5",family:"cv"},{line:5,label:"CV 6",family:"cv"},{line:6,label:"CV 7",family:"cv"},{line:7,label:"CV 8",family:"cv"},{line:8,label:"GATE 1",family:"gate"},{line:9,label:"GATE 2",family:"gate"},{line:10,label:"GATE 3",family:"gate"},{line:11,label:"GATE 4",family:"gate"},{line:12,label:"GATE 5",family:"gate"},{line:13,label:"GATE 6",family:"gate"},{line:14,label:"GATE 7",family:"gate"},{line:15,label:"GATE 8",family:"gate"},{line:16,label:"FX 1",family:"fx"},{line:17,label:"FX 2",family:"fx"},{line:18,label:"FX 3",family:"fx"},{line:19,label:"FX 4",family:"fx"},{line:20,label:"FX 5",family:"fx"},{line:21,label:"FX 6",family:"fx"},{line:22,label:"FX 7",family:"fx"},{line:23,label:"FX 8",family:"fx"},{line:24,label:"GLOBAL",family:"global"}]},yt={specVersion:dt,device:ht,domains:ut,families:mt,globals:pt,ledColors:ft,modMatrix:gt},Xe={pitch:{id:"pitch",label:"Pitch"},expression:{id:"expression",label:"Expression"},modulation:{id:"modulation",label:"Modulation"},gate:{id:"gate",label:"Gate / Trigger"},clock:{id:"clock",label:"Clock"},off:{id:"off",label:"Off"}},vt=["pitch","expression","modulation","gate","clock","off"],wt={off:"off",note:"pitch",arp:"pitch",seq:"pitch",gate_seq:"pitch",vel:"expression",aftertouch:"expression",poly_after:"expression",pitchbend:"expression",cc:"expression",cc_rec:"expression",lfo:"modulation",env:"modulation","random cv":"modulation",random:"modulation",gate:"gate",cvtrigger:"gate",trigger:"gate",euclid:"gate",clock:"clock"};function kn(n){return wt[n]??"off"}function je(n){return n==="off"?null:`var(--fam-${n})`}const V=yt;function F(n){return n<8?"cv":n<16?"gate":"fx"}function N(n){const e=F(n),t=(n&7)+1;return`${e==="cv"?"CV":e==="gate"?"GATE":"FX"} ${t}`}function bt(n){return V.families[n]}function x(n,e){return V.families[n].find(t=>t.index===e)}function De(n,e){return V.families[n].find(t=>t.wire===e)}function ge(n,e){const o=V.domains[n.domain]?.labels[e];return String(o??e)}function Ct(n){return V.globals.find(e=>e.id===n)}function xn(){return{mode:0,bytes:new Array(R).fill(0)}}function Vn(n,e){const t=xn();t.mode=e,t.bytes[0]=e;const o=x(n,e);if(o)for(const s of o.params)t.bytes[s.index]=s.default;return t}function Tt(){const n=new Array(P).fill(0);for(const e of V.globals)e.kind==="int14"?(n[e.msbIndex]=e.default>>7&127,n[e.lsbIndex]=e.default&127):n[e.index]=e.default;return n}function z(n="Untitled"){return{configVersion:ee,name:n,lines:Array.from({length:_},()=>xn()),globals:Tt(),modMatrix:Array.from({length:V.modMatrix.rows},()=>({statusHigh:0,channel:0,number:0,targetLine:127,targetParam:0,valueMin:0,valueMax:0}))}}function K(n){return structuredClone(n)}function kt(n,e){return JSON.stringify(cn(n))===JSON.stringify(cn(e))}function cn(n){return{lines:n.lines,globals:n.globals,modMatrix:n.modMatrix}}function xt(n,e){return[0,...x(n,e)?.params.map(o=>o.index)??[]]}function X(n,e){const t=[];for(let o=0;o<_;o++){const s=n.lines[o],a=e.lines[o];(s.mode!==a.mode||xt(F(o),a.mode).some(c=>s.bytes[c]!==a.bytes[c]))&&t.push({line:o,label:N(o),from:s,to:a})}return{lines:t,globals:n.globals.some((o,s)=>o!==e.globals[s]),modMatrix:JSON.stringify(n.modMatrix)!==JSON.stringify(e.modMatrix)}}function Vt(n,e){return e.kind==="int14"?(n[e.msbIndex]??0)<<7|(n[e.lsbIndex]??0)&127:n[e.index]??0}function St(n,e,t){const o=n.slice(),s=Math.max(e.min,Math.min(e.max,t));return e.kind==="int14"?(o[e.msbIndex]=s>>7&127,o[e.lsbIndex]=s&127):o[e.index]=s&127,o}function Sn(n,e){const t=x(n,e);return t?t.family&&t.family in Xe?t.family:kn(t.key):"off"}function le(n,e){return je(Sn(n,e))}function At(n,e){const t=x(n,e);return t?.icon??t?.key??"off"}function An(n){return n==="fx"?8:9}function U(n){return(x("fx",n)?.params[0]?.domain??"").includes("cv")}const In=["note","arp","seq","random cv"],Mn=["gate","trigger","env","gate_seq","random","euclid"];function It(n,e){for(let t=0;t<16;t++){const o=x(n,t);if(o&&o.key===e)return o.display}return null}function ze(n){const e=n?"cv":"gate";return(n?In:Mn).map(o=>It(e,o)).filter(o=>!!o)}function Ce(n,e){const t=e<8?"cv":"gate",o=x(t,n.lines[e].mode);return o?(t==="cv"?In:Mn).includes(o.key):!1}function Mt(n,e){const t=n.lines[e],o=x("fx",t.mode);if(!o)return"";const s=o.params.find(a=>a.index>=2);return s?s.label:""}function _t(n){const e=[];for(let t=0;t<16;t++){const o=t<8?"cv":"gate",s=t<8?t:t-8,a=[];for(let r=16;r<24;r++){const c=n.lines[r],l=x("fx",c.mode);if(!l||l.key==="off")continue;const d=c.bytes[1]??0,h=U(c.mode);(h&&o==="cv"&&d===s||!h&&o==="gate"&&d===s)&&a.push({fxLine:r,fxSlot:r-16+1,mode:c.mode,name:l.name,display:l.display,key:l.key,summary:Mt(n,r),inert:!Ce(n,t)})}e.push({line:t,family:o,index:s+1,entries:a})}return e}function ce(n,e){return _t(n).find(t=>t.line===e)?.entries??[]}function _n(n){const e=n<8,t=[];for(const o of Ot()){if(o.index===0)continue;U(o.index)===e&&t.push({index:o.index,name:o.name,display:o.display,key:o.key})}return t}function Ot(){const n=[];for(let e=0;e<16;e++){const t=x("fx",e);t&&n.push({index:t.index,name:t.name,display:t.display,key:t.key})}return n}function Et(n){return n<8?7:9}function On(n){const e=[];for(let t=16;t<24;t++){const o=x("fx",n.lines[t].mode);(!o||o.key==="off")&&e.push(t)}return e}function En(n){return 8-On(n).length}function Lt(n,e,t){const o=On(n);if(o.length===0)return null;const s=ce(n,e),a=s.length?s[s.length-1].fxLine:15,r=o.find(d=>d>a)??o[0],c=t??Et(e),l=Vn("fx",c);return l.bytes[1]=e<8?e:e-8,n.lines[r]=l,r}function Dt(n,e){n.lines[e]={mode:0,bytes:new Array(R).fill(0)}}function Ft(n,e,t){const o=x("fx",n.lines[e].mode);if(!o||o.key==="off")return null;const s=n.lines[e].bytes[1]??0,a=U(n.lines[e].mode)?s:s+8,r=ce(n,a),c=r.map(m=>m.fxLine),l=r.map(m=>n.lines[m.fxLine]),d=r.findIndex(m=>m.fxLine===e);if(d<0)return null;const h=Math.max(0,Math.min(t,l.length-1));if(h===d)return null;const u=l.splice(d,1)[0];return l.splice(h,0,u),c.forEach((m,b)=>{n.lines[m]=l[b]}),c[h]}function Rt(n,e,t){const o=x("fx",n.lines[e].mode);if(!o||o.key==="off")return null;const s=n.lines[e].bytes[1]??0,a=U(n.lines[e].mode)?s:s+8,r=ce(n,a),c=r.findIndex(m=>m.fxLine===e),l=c+t;if(c<0||l<0||l>=r.length)return null;const d=e,h=r[l].fxLine,u=n.lines[d];return n.lines[d]=n.lines[h],n.lines[h]=u,h}const dn="portail-editor:v1",Pt=200;class Gt{state;undoStack=[];redoStack=[];listeners=new Set;toasts=[];toastSeq=0;saveTimer=null;constructor(){this.state=this.load()}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}notify(e="all"){for(const t of[...this.listeners])try{t(e)}catch(o){console.error("store listener threw",o)}}get(){return this.state}getToasts(){return this.toasts}load(){const e={config:z("Untitled"),deviceConfig:null,currentPreset:null,presetMeta:Array.from({length:V.device.preset_slots},(t,o)=>({name:`Preset ${o+1}`,backedUpAt:null})),presetBackups:Array.from({length:V.device.preset_slots},()=>null),selectedLine:0,expandedFx:null,sourceOpen:!0,verifiedAt:null,driftDevice:null};try{const t=localStorage.getItem(dn);if(!t)return e;const o=JSON.parse(t);return o.version!==ee?e:{...e,config:o.config??e.config,presetMeta:o.presetMeta??e.presetMeta,presetBackups:o.presetBackups??e.presetBackups,selectedLine:o.selectedLine??0}}catch(t){return console.warn("could not restore saved state; starting fresh",t),e}}persist(){this.saveTimer&&clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{const e={version:ee,config:this.state.config,presetMeta:this.state.presetMeta,presetBackups:this.state.presetBackups,selectedLine:this.state.selectedLine};try{localStorage.setItem(dn,JSON.stringify(e))}catch(t){this.toast("warn","Could not save your work locally",String(t))}},250)}commit(e,t){const o=K(this.state.config),s=K(this.state.config);t(s),!(kt(o,s)&&o.name===s.name)&&(this.undoStack.push(o),this.undoStack.length>Pt&&this.undoStack.shift(),this.redoStack=[],this.state.config=s,this.lastLabel=e,this.persist(),this.notify())}lastLabel="";get lastChange(){return this.lastLabel}canUndo(){return this.undoStack.length>0}canRedo(){return this.redoStack.length>0}undo(){const e=this.undoStack.pop();e&&(this.redoStack.push(K(this.state.config)),this.state.config=e,this.persist(),this.notify(),this.validateExpandedFx())}redo(){const e=this.redoStack.pop();e&&(this.undoStack.push(K(this.state.config)),this.state.config=e,this.persist(),this.notify(),this.validateExpandedFx())}setLineMode(e,t){const o=F(e),s=Vn(o,t);o==="fx"&&(s.bytes[1]=this.state.config.lines[e]?.bytes[1]??0);const a=this.state.config.modMatrix.filter(d=>d.targetLine===e&&d.targetParam>0).length,r=e<16,c=r?ce(this.state.config,e).length:0,l=r&&Ce(this.state.config,e);if(this.commit(`set ${e} mode`,d=>{d.lines[e]=s;for(const h of d.modMatrix)h.targetLine===e&&(h.targetParam=0,h.valueMin=0,h.valueMax=0)}),a>0&&this.toast("warn",`${a} modulation row${a===1?"":"s"} pointed at this output`,"Their MIDI assignments were kept but their target parameter was cleared, because the new mode has different parameters. Undo restores the previous mode and its rows."),c>0&&l&&!Ce(this.state.config,e)){const d=e<8,h=ze(d),u=h.length<=1?h.join(""):`${h.slice(0,-1).join(", ")} or ${h[h.length-1]}`,m=c!==1;this.toast("warn",`${c} FX on ${N(e)} ${m?"are":"is"} now inert`,`${m?"They process":"It processes"} ${d?"note":"gate"} data, which this mode doesn't produce, so ${m?"they do":"it does"} nothing. Kept in the chain (still using ${m?"their slots":"a slot"}) — set this output to ${u} to reactivate. Undo restores the previous mode.`)}}setLineByte(e,t,o){this.commit(`set line ${e} byte ${t}`,s=>{const a=s.lines[e],r=a.bytes.slice();r[t]=o,s.lines[e]={mode:a.mode,bytes:r}})}setLine(e,t){this.commit(`replace line ${e}`,o=>{o.lines[e]=structuredClone(t)})}setGlobal(e,t){const o=Ct(e);o&&this.commit(`set global ${e}`,s=>{s.globals=St(s.globals,o,t)})}setModRow(e,t){this.commit(`set mod row ${e}`,o=>{o.modMatrix[e]={...o.modMatrix[e],...t}})}clearModRow(e){this.commit(`clear mod row ${e}`,t=>{t.modMatrix[e]={statusHigh:0,channel:0,number:0,targetLine:127,targetParam:0,valueMin:0,valueMax:0}})}insertFx(e,t){let o=null;return this.commit("insert FX",s=>{o=Lt(s,e,t)}),o===null&&this.toast("warn","All 8 FX slots are in use","Remove an effect from a chain to free a slot."),o}removeFxSlot(e){this.commit("remove FX",t=>{Dt(t,e)}),this.validateExpandedFx()}validateExpandedFx(){const e=this.state.expandedFx;if(e===null)return;const t=x("fx",this.state.config.lines[e]?.mode??0);(!t||t.key==="off")&&(this.state.expandedFx=null,this.notify("edit-region"))}moveFx(e,t){let o=null;this.commit("reorder FX",s=>{o=Rt(s,e,t)}),this.followExpanded(e,o)}reorderFx(e,t){let o=null;this.commit("reorder FX",s=>{o=Ft(s,e,t)}),this.followExpanded(e,o)}followExpanded(e,t){t!==null&&t!==e&&this.state.expandedFx===e&&(this.state.expandedFx=t,this.notify("edit-region"))}retargetFx(e,t){const s=U(this.state.config.lines[e]?.mode??0)?t:t+8,a=x("fx",this.state.config.lines[e]?.mode??0)?.display??"FX";this.setLineByte(e,1,t),this.setSelectedLine(s),this.state.expandedFx=e,this.notify("edit-region"),this.toast("info",`Moved ${a} → ${N(s)}`)}setConfigName(e){this.commit("rename config",t=>{t.name=e})}replaceConfig(e,t){this.commit(t,o=>{o.configVersion=ee,o.name=e.name,o.lines=structuredClone(e.lines),o.globals=e.globals.slice(),o.modMatrix=structuredClone(e.modMatrix)})}setDeviceConfig(e){this.state.deviceConfig=e?K(e):null,this.state.verifiedAt=e?Date.now():null,this.state.driftDevice=null,this.notify()}verifiedAt(){return this.state.verifiedAt}observeDeviceDrift(e){const t=this.state.deviceConfig;if(!t)return this.setDeviceConfig(e),this.syncStatus();const o=X(t,e);return o.lines.length===0&&!o.globals&&!o.modMatrix?(this.state.driftDevice=null,this.state.verifiedAt=Date.now()):this.state.driftDevice=K(e),this.notify(),this.syncStatus()}conflictChanges(){const e=this.state.deviceConfig,t=this.state.driftDevice;if(!e)return{editor:[],device:[]};const o=s=>{const a=s.lines.map(r=>r.label);return s.globals&&a.push("globals"),s.modMatrix&&a.push("mod matrix"),a};return{editor:o(X(e,this.state.config)),device:t?o(X(e,t)):[]}}takeModuleVersion(){const e=this.state.driftDevice??this.state.deviceConfig;e&&(this.replaceConfig(e,"take module version"),this.setDeviceConfig(e))}syncStatus(){const{config:e,deviceConfig:t,driftDevice:o}=this.state;if(!t)return{kind:"unknown"};const s=X(t,e),a=s.lines.length>0||s.globals||s.modMatrix;if(o){const r=X(t,o),c=r.lines.length+(r.globals?1:0)+(r.modMatrix?1:0);return a?{kind:"conflict",editorChanges:s.lines.length+(s.globals?1:0)+(s.modMatrix?1:0),deviceChanges:c}:{kind:"device-ahead",changedLines:r.lines.length}}return a?{kind:"modified",changedLines:s.lines.length,globals:s.globals,modMatrix:s.modMatrix}:{kind:"in-sync",verifiedAt:this.state.verifiedAt}}diffAgainstDevice(){const{config:e,deviceConfig:t}=this.state;return t?X(t,e):null}setSelectedLine(e){e!==this.state.selectedLine&&(this.state.expandedFx=null,this.state.sourceOpen=!0),this.state.selectedLine=e,this.persist(),this.notify("edit-region")}setExpandedFx(e){this.state.expandedFx=this.state.expandedFx===e?null:e,this.state.expandedFx!==null&&(this.state.sourceOpen=!1),this.notify("edit-region")}toggleSource(){this.state.sourceOpen=!this.state.sourceOpen,this.state.sourceOpen&&(this.state.expandedFx=null),this.notify("edit-region")}setCurrentPreset(e){this.state.currentPreset=e,this.notify()}setPresetName(e,t){this.state.presetMeta[e]={...this.state.presetMeta[e],name:t},this.persist(),this.notify()}setPresetBackup(e,t){this.state.presetBackups[e]=t?K(t):null,this.state.presetMeta[e]={...this.state.presetMeta[e],backedUpAt:t?Date.now():null},this.persist(),this.notify()}toast(e,t,o){const s={id:++this.toastSeq,level:e,message:t,...o?{detail:o}:{}};this.toasts=[...this.toasts,s],this.notify(),e!=="error"&&setTimeout(()=>this.dismissToast(s.id),e==="warn"?9e3:5e3)}dismissToast(e){this.toasts=this.toasts.filter(t=>t.id!==e),this.notify()}}const y=new Gt;class Ln{listeners=new Map;on(e,t){let o=this.listeners.get(e);return o||(o=new Set,this.listeners.set(e,o)),o.add(t),()=>{o.delete(t)}}emit(e,...t){const o=this.listeners.get(e);if(o)for(const s of[...o])try{s(...t)}catch(a){console.error(`listener for "${String(e)}" threw`,a)}}clearListeners(){this.listeners.clear()}}const Ue=240,Ye=247,Dn=6,Fn=41,p={READ_GATE:0,WRITE_GATE:1,READ_CV:2,WRITE_CV:3,LOAD_PRESET:4,GET_PRESET:5,SAVE_ALL:7,READ_FX:8,WRITE_FX:9,SET_CLOCK:10,READ_CLOCK:11,SET_MIDI_COPY:17,SET_MAPPING:18,READ_MAPPING:19,SET_TEMPO:23,SET_START:24,SET_SYNC:25,SET_RESET:26,SET_MAP_MODE:29,GLOBAL_CC_CH:32,GET_VERSION:34,CHECK_CONNECTION:35,WRITE_MICROTONAL:36},Nt=new Set(Object.values(p)),Wt={cv:p.READ_CV,gate:p.READ_GATE,fx:p.READ_FX},qt={cv:p.WRITE_CV,gate:p.WRITE_GATE,fx:p.WRITE_FX};class j extends Error{}function Ke(n){return Number.isFinite(n)?Math.max(0,Math.min(127,Math.round(n))):0}function M(n,e=[]){if(!Nt.has(n))throw new j(`refused to build SysEx with opcode 0x${n.toString(16)} — not in the allowlist (invariant zero, spec/protocol.md §0.9)`);if(n===p.WRITE_MICROTONAL){const t=e[0];if(!Number.isInteger(t)||t<0||t>7)throw new j(`microtonal table slot ${t} out of range (0-7)`)}return Uint8Array.from([Ue,Dn,Fn,n,...e.map(Ke),Ye])}function $t(n){const e=Math.max(0,Math.min(16383,Math.round(n)));return[e>>7&127,e&127]}const Bt=4383;function Rn(n,e){if(!Number.isInteger(n)||n<0||n>7)throw new j(`microtonal table slot ${n} out of range (0-7)`);if(e.length!==12)throw new j(`a microtonal table needs exactly 12 values, got ${e.length}`);const t=[];for(const o of e){const[s,a]=$t(Math.min(Bt,Math.max(0,o)));t.push(s,a)}return M(p.WRITE_MICROTONAL,[n,...t])}function we(n){const e=n;return e.length>=5&&e[0]===Ue&&e[1]===Dn&&e[2]===Fn&&e[e.length-1]===Ye}function Ht(n,e){const t=x(n,e);if(!t)throw new j(`unknown ${n} mode index ${e}`);return t.wire}function Pn(n,e){if(n==="gate"){const o=e&15,s=De("gate",o);if(!s)throw new j(`unknown gate wire type 0x${e.toString(16)}`);return s.index}if(n==="fx"&&e>=32){const o=De("fx",e);if(o)return o.index;const s=(e&31)+9,a=x("fx",s);if(a)return a.index;throw new j(`unknown fx wire type 0x${e.toString(16)}`)}const t=De(n,e);if(!t)throw new j(`unknown ${n} wire type 0x${e.toString(16)}`);return t.index}function ye(n,e){const t=F(n),o=An(t),s=new Array(o).fill(0);s[0]=Ht(t,e.mode);for(let a=1;a<o;a++)s[a]=Ke(e.bytes[a]??0);return t==="fx"&&o>1&&(s[1]=s[1]&7),M(qt[t],[n&7,...s])}function be(n,e){const t=An(n),o=e[0]??0,s=e.slice(1),a=new Array(R).fill(0);for(let l=0;l<t;l++)a[l]=s[l]??0;const r=Pn(n,a[0]);return a[0]=r,n==="fx"&&t>1&&(a[1]=a[1]&7),{kind:"line",line:(n==="cv"?0:n==="gate"?8:16)+(o&7),family:n,data:{mode:r,bytes:a},short:s.length<t}}const A={readLine(n){return M(Wt[F(n)],[n&7])},readGlobals:()=>M(p.READ_CLOCK),readMapping:n=>M(p.READ_MAPPING,[n]),version:()=>M(p.GET_VERSION),currentPreset:()=>M(p.GET_PRESET),ping:()=>M(p.CHECK_CONNECTION,[0]),saveAll:()=>M(p.SAVE_ALL),loadPreset:n=>M(p.LOAD_PRESET,[n]),mapMode:n=>M(p.SET_MAP_MODE,[n?1:0]),globals(n){const e=new Array(P).fill(0);for(let t=0;t<P;t++)e[t]=Ke(n[t]??0);return M(p.SET_CLOCK,e)},tempo:n=>M(p.SET_TEMPO,[n>>7&127,n&127]),start:n=>M(p.SET_START,[n?1:0]),sync:n=>M(p.SET_SYNC,[n]),midiCopy:n=>M(p.SET_MIDI_COPY,[n?1:0]),resetOnContinue:n=>M(p.SET_RESET,[n?1:0]),globalCcChannel:n=>M(p.GLOBAL_CC_CH,[n]),mapping(n,e){return M(p.SET_MAPPING,[n,0,e.statusHigh,e.channel,e.number,e.targetLine,e.targetParam,e.valueMin,e.valueMax])}};function Z(n){const e=Array.from(n);if(!we(e))return null;const t=e[3],o=e.slice(4,-1);switch(t){case p.READ_CV:return o.length>1?be("cv",o):null;case p.READ_GATE:return o.length>1?be("gate",o):null;case p.READ_FX:return o.length>1?be("fx",o):null;case p.READ_CLOCK:return o.length<P?null:{kind:"globals",globals:o.slice(0,P)};case p.READ_MAPPING:return o.length<8?null:{kind:"mapping",row:o[0],data:{statusHigh:o[1],channel:o[2],number:o[3],targetLine:o[4],targetParam:o[5],valueMin:o[6],valueMax:o[7]}};case p.GET_VERSION:{if(o.length<3)return null;const s=o[0],a=o[1],r=String.fromCharCode(o[2]);return{kind:"version",major:s,minor:a,revision:r,text:`${s}.${a}${r}`}}case p.GET_PRESET:return o.length<1?null:{kind:"preset",slot:o[0]};case p.CHECK_CONNECTION:return{kind:"pong"};default:return{kind:"unknown",cmd:t,payload:o}}}function Xt(n){const e=[];for(let t=0;t<_;t++)e.push(ye(t,n.lines[t]));e.push(A.globals(n.globals));for(let t=0;t<n.modMatrix.length;t++)e.push(A.mapping(t,n.modMatrix[t]));return e}function jt(n){const e=n.reduce((s,a)=>s+a.length,0),t=new Uint8Array(e);let o=0;for(const s of n)t.set(s,o),o+=s.length;return t}function zt(n){const e=[];let t=-1;for(let o=0;o<n.length;o++)n[o]===Ue?t=o:n[o]===Ye&&t>=0&&(e.push(n.slice(t,o+1)),t=-1);return e}function Ut(n,e){const t=structuredClone(e);let o=0,s=0;for(const a of n){if(!we(a)){s++;continue}const r=a[3],c=Array.from(a.slice(4,-1));try{if(r===p.WRITE_CV||r===p.WRITE_GATE||r===p.WRITE_FX){const l=r===p.WRITE_CV?"cv":r===p.WRITE_GATE?"gate":"fx",d=be(l,c);t.lines[d.line]=d.data,o++}else if(r===p.SET_CLOCK&&c.length>=P)t.globals=c.slice(0,P),o++;else if(r===p.SET_MAPPING&&c.length>=9){const l=c[0];l<t.modMatrix.length?(t.modMatrix[l]={statusHigh:c[2],channel:c[3],number:c[4],targetLine:c[5],targetParam:c[6],valueMin:c[7],valueMax:c[8]},o++):s++}else s++}catch{s++}}return{config:t,applied:o,skipped:s}}const Yt=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function ue(n){return`${Yt[n%12]}${Math.floor(n/12)-2}`}const Kt={1:"mod wheel",7:"volume",10:"pan",11:"expression",64:"sustain",120:"all sound off",121:"reset all",123:"all notes off"};function oe(n,e="in"){const t=Array.from(n),o=performance.now(),s=t[0]??0,a={at:o,direction:e,data:t};if(s===240){if(we(t)){const h=Z(t),u=h?Qt(h):`Portail SysEx cmd ${t[3]}`;return{...a,kind:"sysex",channel:null,summary:u}}return{...a,kind:"sysex",channel:null,summary:`SysEx, ${t.length} bytes`}}switch(s){case 248:return{...a,kind:"clock",channel:null,summary:"clock"};case 250:return{...a,kind:"transport",channel:null,summary:"start"};case 251:return{...a,kind:"transport",channel:null,summary:"continue"};case 252:return{...a,kind:"transport",channel:null,summary:"stop"};case 254:return{...a,kind:"sense",channel:null,summary:"active sensing"};case 255:return{...a,kind:"reset",channel:null,summary:"system reset"}}const r=s&240,c=(s&15)+1,l=t[1]??0,d=t[2]??0;switch(r){case 128:return{...a,kind:"note-off",channel:c,summary:`note off ${ue(l)} vel ${d}`};case 144:return d===0?{...a,kind:"note-off",channel:c,summary:`note off ${ue(l)}`}:{...a,kind:"note-on",channel:c,summary:`note on ${ue(l)} vel ${d}`};case 160:return{...a,kind:"poly-at",channel:c,summary:`poly AT ${ue(l)} ${d}`};case 176:{const h=Kt[l];return{...a,kind:"cc",channel:c,summary:`CC ${l}${h?` (${h})`:""} = ${d}`}}case 192:return{...a,kind:"program",channel:c,summary:`program change ${l}`};case 208:return{...a,kind:"aftertouch",channel:c,summary:`aftertouch ${l}`};case 224:{const h=(d<<7|l)-8192;return{...a,kind:"pitchbend",channel:c,summary:`pitch bend ${h>0?"+":""}${h}`}}default:return{...a,kind:"other",channel:null,summary:t.map(h=>h.toString(16).padStart(2,"0")).join(" ")}}}function Qt(n){switch(n.kind){case"line":return`${n.family.toUpperCase()} line ${(n.line&7)+1} config${n.short?" (short)":""}`;case"globals":return"global parameters";case"mapping":return`mod matrix row ${n.row+1}`;case"version":return`firmware ${n.text}`;case"preset":return`preset slot ${n.slot}`;case"pong":return"connection check";case"unknown":return`Portail SysEx cmd ${n.cmd} (${n.payload.length} bytes)`}}const te={id:"simulator",name:"Portail Simulator",manufacturer:"portail-editor (no hardware)",confirmed:!0};class Gn extends Ln{kind="simulator";state={status:"searching",ports:[te]};working=Jt();tables=Array.from({length:8},()=>[0,100,200,300,400,500,600,700,800,900,1e3,1100]);presets;currentPreset=0;learnArmed=!1;running=!1;dropRate;latency;firmware;constructor(e={}){super(),this.dropRate=e.dropRate??0,this.latency=e.latency??4,this.firmware=e.firmware??{major:0,minor:9,revision:"s"},this.presets=Array.from({length:V.device.preset_slots},(t,o)=>o===0?structuredClone(this.working):z(`Preset ${o+1}`))}async start(){this.running=!0,this.setState({status:"searching",ports:[te]}),await this.wait(this.latency),this.setState({status:"connected",port:te,firmware:`${this.firmware.major}.${this.firmware.minor}${this.firmware.revision}`})}stop(){this.running=!1,this.clearListeners()}getState(){return this.state}listPorts(){return[te]}async selectPort(){await this.probe()}async probe(){const e=await this.roundtrip(A.version());if(!e){this.setState({status:"lost",port:te,since:Date.now()});return}const t=Z(e);this.setState({status:"connected",port:te,firmware:t?.kind==="version"?t.text:null})}async readConfig(){const e=z(this.working.name),t=[],o=_+1+V.modMatrix.rows;let s=0;const a=l=>{this.emit("progress",{phase:"reading",done:++s,total:o,label:l})};for(let l=0;l<_;l++){const d=await this.roundtrip(A.readLine(l)),h=d?Z(d):null;h?.kind==="line"?e.lines[h.line]=h.data:t.push(N(l)),a(N(l))}const r=await this.roundtrip(A.readGlobals()),c=r?Z(r):null;c?.kind==="globals"?e.globals=c.globals:t.push("globals"),a("globals");for(let l=0;l<V.modMatrix.rows;l++){const d=await this.roundtrip(A.readMapping(l)),h=d?Z(d):null;h?.kind==="mapping"?e.modMatrix[h.row]=h.data:t.push(`mod row ${l+1}`),a(`mod row ${l+1}`)}return this.emit("progress",{phase:"idle",done:o,total:o,label:""}),{config:e,partial:t.length>0,missing:t}}async writeConfig(e){const t=_+1+e.modMatrix.length;let o=0;const s=a=>this.emit("progress",{phase:"sending",done:++o,total:t,label:a});for(let a=0;a<_;a++)await this.send(ye(a,e.lines[a])),s(N(a));await this.send(A.globals(e.globals)),s("globals");for(let a=0;a<e.modMatrix.length;a++)await this.send(A.mapping(a,e.modMatrix[a])),s(`mod row ${a+1}`);this.emit("progress",{phase:"idle",done:t,total:t,label:""})}async writeLine(e,t){await this.send(ye(e,t.lines[e]))}async savePreset(e,t){await this.send(A.loadPreset(e)),await this.writeConfig(t),await this.send(A.saveAll());const o=await this.readConfig(),s=X(t,o.config),a=[...s.lines.map(r=>r.label),...s.globals?["globals"]:[],...s.modMatrix?["mod matrix"]:[]];return{ok:a.length===0&&!o.partial,slot:e,mismatches:a,partial:o.partial}}async writeMicrotonalTable(e,t){const o=Rn(e,t);await this.send(o),this.tables[e]=t.slice(0,12).map(s=>Math.max(0,Math.min(4383,Math.round(s))))}getTable(e){return[...this.tables[e]??[]]}async loadPreset(e){await this.send(A.loadPreset(e))}async getCurrentPreset(){const e=await this.roundtrip(A.currentPreset()),t=e?Z(e):null;return t?.kind==="preset"?t.slot:null}async setLearnMode(e){await this.send(A.mapMode(e))}async sendRaw(e){for(const t of e)await this.send(t)}injectMidi(e){this.emit("activity",oe(e,"in"));const t=e[0]??0,o=t&240;this.learnArmed&&(o===144||o===176)&&(e[2]??0)>0&&(this.learnArmed=!1,this.emit("learn",{statusHigh:t>>4,channel:t&15,number:e[1]??0}))}setWorkingMemory(e){this.working=structuredClone(e)}simulatePanelPresetChange(){const e=(this.currentPreset+1)%this.presets.length;this.currentPreset=e,this.working=structuredClone(this.presets[e]),this.emit("preset",e)}getWorkingMemory(){return structuredClone(this.working)}setState(e){this.state=e,this.emit("connection",e)}wait(e){return new Promise(t=>setTimeout(t,e))}async send(e){if(!this.running)throw new Error("simulator is not started");this.emit("activity",oe(e,"out")),await this.wait(this.latency),!(Math.random()<this.dropRate)&&this.apply(e)}async roundtrip(e){if(!this.running)throw new Error("simulator is not started");if(this.emit("activity",oe(e,"out")),await this.wait(this.latency),Math.random()<this.dropRate)return null;const t=this.apply(e);return t?(await this.wait(this.latency),this.emit("activity",oe(t,"in")),t):null}apply(e){if(!we(e))return null;const t=e[3],o=Array.from(e.slice(4,-1)),s=(a,r)=>Uint8Array.from([240,6,41,a,...r,247]);switch(t){case p.READ_CV:return this.replyLine("cv",o[0]??0,p.READ_CV);case p.READ_GATE:return this.replyLine("gate",o[0]??0,p.READ_GATE);case p.READ_FX:return this.replyLine("fx",o[0]??0,p.READ_FX);case p.WRITE_CV:return this.storeLine("cv",o),null;case p.WRITE_GATE:return this.storeLine("gate",o),null;case p.WRITE_FX:return this.storeLine("fx",o),null;case p.READ_CLOCK:return s(p.READ_CLOCK,this.working.globals.slice(0,P));case p.SET_CLOCK:return this.working.globals=o.slice(0,P),null;case p.SET_TEMPO:return this.working.globals[2]=o[0]??0,this.working.globals[3]=o[1]??0,null;case p.SET_START:return this.working.globals[0]=o[0]??0,null;case p.SET_SYNC:return this.working.globals[1]=o[0]??0,null;case p.SET_MIDI_COPY:return this.working.globals[4]=o[0]??0,null;case p.SET_RESET:return this.working.globals[5]=o[0]??0,null;case p.GLOBAL_CC_CH:return this.working.globals[6]=o[0]??0,null;case p.READ_MAPPING:{const a=o[0]??0,r=this.working.modMatrix[a];return r?s(p.READ_MAPPING,[a,r.statusHigh,r.channel,r.number,r.targetLine,r.targetParam,r.valueMin,r.valueMax]):null}case p.SET_MAPPING:{const a=o[0]??0;return a<this.working.modMatrix.length&&(this.working.modMatrix[a]={statusHigh:o[2]??0,channel:o[3]??0,number:o[4]??0,targetLine:o[5]??127,targetParam:o[6]??0,valueMin:o[7]??0,valueMax:o[8]??0}),null}case p.LOAD_PRESET:{const a=o[0]??0;return a<this.presets.length&&(this.currentPreset=a,this.working=structuredClone(this.presets[a])),null}case p.SAVE_ALL:return this.presets[this.currentPreset]=structuredClone(this.working),null;case p.GET_PRESET:return s(p.GET_PRESET,[this.currentPreset]);case p.SET_MAP_MODE:return this.learnArmed=(o[0]??0)===1,null;case p.GET_VERSION:return s(p.GET_VERSION,[this.firmware.major,this.firmware.minor,this.firmware.revision.charCodeAt(0)]);case p.CHECK_CONNECTION:return s(p.CHECK_CONNECTION,[1]);default:return null}}replyLine(e,t,o){const s=e==="cv"?0:e==="gate"?8:16,a=this.working.lines[s+(t&7)],r=new Array(R).fill(0);for(let l=0;l<R;l++)r[l]=a.bytes[l]??0;const c=V.families[e].find(l=>l.index===a.mode);return r[0]=c?.wire??a.mode,Uint8Array.from([240,6,41,o,t&7,...r,247])}storeLine(e,t){const o=(t[0]??0)&7,s=e==="cv"?0:e==="gate"?8:16,a=t.slice(1),r=new Array(R).fill(0);for(let l=0;l<R;l++)r[l]=a[l]??0;let c=0;try{c=Pn(e,r[0])}catch{c=0}r[0]=c,this.working.lines[s+o]={mode:c,bytes:r}}}function Jt(){const n=z("Simulator working memory"),e=(t,o,s)=>{const a=new Array(R).fill(0);a[0]=o,s.forEach((r,c)=>{a[c+1]=r}),n.lines[t]={mode:o,bytes:a}};return e(0,1,[0,3,1,0,0,0,0,127]),e(1,1,[0,3,1,0,0,0,0,127]),e(2,4,[0,1,1]),e(3,9,[0,4,6,0,0]),e(8,1,[0,1,0,0,0,0,0]),e(9,1,[0,2,0,0,0,0,0]),e(10,8,[0,0,6,5,0,0]),e(16,7,[0,2,0]),n.globals=[0,0,0,120,0,0,16,0],n}const Zt=400,Q=8,eo=3e3;class no extends Ln{kind="webmidi";access=null;state={status:"requesting"};outputId=null;pending=[];heartbeat=null;learnArmed=!1;stopped=!1;async start(){if(this.stopped=!1,typeof navigator>"u"||typeof navigator.requestMIDIAccess!="function"){this.setState({status:"unsupported",reason:"This browser does not implement the Web MIDI API. Safari and Firefox do not support it. Use Chrome, Edge, or another Chromium-based browser to talk to the module. Everything else in this editor — editing, import/export, the simulator — still works here."});return}this.setState({status:"requesting"});try{this.access=await navigator.requestMIDIAccess({sysex:!0})}catch(e){const t=e instanceof Error?e.message:String(e);this.setState({status:"denied",reason:`The browser refused MIDI access (${t}). SysEx access needs your explicit permission — reload and choose Allow, or check the site permissions for this page.`});return}this.access.onstatechange=()=>{this.stopped||this.refreshPorts()},this.attachInputs(),this.setState({status:"searching",ports:this.listPorts()}),await this.autoDetect()}stop(){this.stopped=!0,this.heartbeat&&(clearInterval(this.heartbeat),this.heartbeat=null);for(const e of this.pending)clearTimeout(e.timer);if(this.pending=[],this.access){for(const e of this.access.inputs.values())e.onmidimessage=null;this.access.onstatechange=null}this.clearListeners()}getState(){return this.state}listPorts(){return this.access?[...this.access.outputs.values()].map(e=>({id:e.id,name:e.name??"(unnamed)",manufacturer:e.manufacturer||null,confirmed:e.id===this.outputId&&this.state.status==="connected"})):[]}async selectPort(e){this.outputId=e,await this.probe()}async autoDetect(){if(!this.access)return;const e=[...this.access.outputs.values()];if(e.length===0){this.setState({status:"searching",ports:[]});return}const t=o=>/portail|eowave/i.test(o);e.sort((o,s)=>Number(t(s.name??""))-Number(t(o.name??"")));for(const o of e){if(this.stopped)return;this.outputId=o.id;const s=await this.request(A.version(),a=>a.kind==="version");if(s?.kind==="version"){this.setState({status:"connected",port:this.portInfo(o.id),firmware:s.text}),this.startHeartbeat(),this.getCurrentPreset().then(a=>{a!==null&&this.emit("preset",a)});return}}this.outputId=null,this.setState({status:"searching",ports:this.listPorts()})}async probe(){const e=await this.request(A.version(),o=>o.kind==="version"),t=this.outputId?this.portInfo(this.outputId):null;if(!t){this.setState({status:"searching",ports:this.listPorts()});return}e?.kind==="version"?(this.setState({status:"connected",port:t,firmware:e.text}),this.startHeartbeat()):this.setState({status:"lost",port:t,since:Date.now()})}startHeartbeat(){this.heartbeat&&clearInterval(this.heartbeat),this.heartbeat=setInterval(()=>{this.stopped||this.state.status!=="connected"||this.request(A.ping(),e=>e.kind==="pong").then(e=>{this.stopped||!e&&this.state.status==="connected"&&this.setState({status:"lost",port:this.state.port,since:Date.now()})})},eo)}refreshPorts(){if(this.attachInputs(),this.state.status==="connected"&&this.outputId&&!this.portInfo(this.outputId)){this.setState({status:"searching",ports:this.listPorts()}),this.outputId=null,this.autoDetect();return}this.state.status==="searching"&&(this.setState({status:"searching",ports:this.listPorts()}),this.outputId||this.autoDetect())}attachInputs(){if(this.access)for(const e of this.access.inputs.values())e.onmidimessage=t=>this.onMidi(t)}portInfo(e){if(!this.access)return null;const t=this.access.outputs.get(e);return t?{id:t.id,name:t.name??"(unnamed)",manufacturer:t.manufacturer||null,confirmed:!0}:null}onMidi(e){const t=e.data;if(!t)return;this.emit("activity",oe(t,"in"));const o=t[0]??0,s=o&240;if(this.learnArmed&&(s===144||s===176)&&(t[2]??0)>0&&(this.learnArmed=!1,this.emit("learn",{statusHigh:o>>4,channel:o&15,number:t[1]??0})),!we(t))return;const a=Z(t);if(a){a.kind==="preset"&&this.emit("preset",a.slot);for(let r=this.pending.length-1;r>=0;r--){const c=this.pending[r];c.match(a)&&(clearTimeout(c.timer),this.pending.splice(r,1),c.resolve(a))}}}output(){return!this.access||!this.outputId?null:this.access.outputs.get(this.outputId)??null}post(e){const t=this.output();if(!t)return!1;try{return t.send(e),this.emit("activity",oe(e,"out")),!0}catch(o){return this.setState({status:"error",reason:`Sending MIDI failed: ${o instanceof Error?o.message:String(o)}`}),!1}}request(e,t,o=Zt){return new Promise(s=>{if(!this.post(e)){s(null);return}const a={match:t,resolve:s,timer:setTimeout(()=>{const r=this.pending.indexOf(a);r>=0&&this.pending.splice(r,1),s(null)},o)};this.pending.push(a)})}wait(e){return new Promise(t=>setTimeout(t,e))}requireConnection(){if(this.state.status!=="connected")throw new Error(`No Portail is connected (state: ${this.state.status}). Connect the module and press "Reconnect", or switch to the simulator.`)}async readConfig(){this.requireConnection();const e=z("Read from module"),t=[],o=_+1+V.modMatrix.rows;let s=0;const a=c=>this.emit("progress",{phase:"reading",done:++s,total:o,label:c});for(let c=0;c<_;c++){const l=c&7,d=await this.request(A.readLine(c),h=>h.kind==="line"&&h.line===c&&(h.line&7)===l);d?.kind==="line"?e.lines[d.line]=d.data:t.push(N(c)),a(N(c))}const r=await this.request(A.readGlobals(),c=>c.kind==="globals");r?.kind==="globals"?e.globals=r.globals.slice(0,P):t.push("globals"),a("globals");for(let c=0;c<V.modMatrix.rows;c++){const l=await this.request(A.readMapping(c),d=>d.kind==="mapping"&&d.row===c);l?.kind==="mapping"?e.modMatrix[l.row]=l.data:t.push(`mod row ${c+1}`),a(`mod row ${c+1}`)}return this.emit("progress",{phase:"idle",done:o,total:o,label:""}),{config:e,partial:t.length>0,missing:t}}async writeMicrotonalTable(e,t){this.post(Rn(e,t))}async writeConfig(e){this.requireConnection();const t=_+1+e.modMatrix.length;let o=0;const s=a=>this.emit("progress",{phase:"sending",done:++o,total:t,label:a});for(let a=0;a<_;a++)this.post(ye(a,e.lines[a])),s(N(a)),await this.wait(Q);this.post(A.globals(e.globals)),s("globals"),await this.wait(Q);for(let a=0;a<e.modMatrix.length;a++)this.post(A.mapping(a,e.modMatrix[a])),s(`mod row ${a+1}`),await this.wait(Q);this.emit("progress",{phase:"idle",done:t,total:t,label:""})}async writeLine(e,t){this.requireConnection(),this.post(ye(e,t.lines[e]))}async savePreset(e,t){this.requireConnection(),this.post(A.loadPreset(this.recallWire(e))),await this.wait(Q),await this.writeConfig(t),this.post(A.saveAll()),await this.wait(Q);const o=await this.readConfig(),s=X(t,o.config),a=[...s.lines.map(r=>r.label),...s.globals?["globals"]:[],...s.modMatrix?["mod matrix"]:[]];return{ok:a.length===0&&!o.partial,slot:e,mismatches:a,partial:o.partial}}async loadPreset(e){this.requireConnection(),this.post(A.loadPreset(this.recallWire(e))),await this.wait(Q)}recallWire(e){return e+1}async getCurrentPreset(){const e=await this.request(A.currentPreset(),t=>t.kind==="preset");return e?.kind==="preset"?e.slot:null}async setLearnMode(e){this.learnArmed=e,this.state.status==="connected"&&this.post(A.mapMode(e))}async sendRaw(e){this.requireConnection();for(const t of e)this.post(t),await this.wait(Q)}setState(e){this.state=e,this.emit("connection",e)}}function to(){return typeof navigator<"u"&&typeof navigator.requestMIDIAccess=="function"}function oo(n){switch(n.status){case"unsupported":return{dot:"bad",cls:"state-unsupported",text:"Web MIDI not available",detail:n.reason};case"requesting":return{dot:"warn",cls:"state-searching",text:"Asking for MIDI access…",detail:"Choose “Allow” in the browser prompt."};case"denied":return{dot:"bad",cls:"state-denied",text:"MIDI access refused",detail:n.reason};case"searching":return{dot:"warn",cls:"state-searching",text:"No Portail found",detail:n.ports.length?`${n.ports.length} MIDI port${n.ports.length===1?"":"s"} available, none answered. Pick one manually if you know which it is.`:"No MIDI ports at all. Check the USB cable and that the module is powered."};case"connected":return{dot:"ok",cls:"state-connected",text:"Portail connected",detail:i("span",{},n.port.name,n.firmware?i("span",{}," · firmware ",i("code",{},n.firmware)):" · firmware unknown")};case"lost":return{dot:"bad",cls:"state-lost",text:"Connection lost",detail:`${n.port.name} stopped answering. The module may have been unplugged or power-cycled.`};case"error":return{dot:"bad",cls:"state-error",text:"MIDI error",detail:n.reason}}}function ao(n){switch(n.kind){case"unknown":return i("span",{class:"sync-pill sync-unknown",title:"Read from the module to find out whether it matches the editor."},"Module contents unknown");case"in-sync":return i("span",{class:"sync-pill sync-in-sync",title:"Verified by the last read; the module could have changed since."},`Matched module · verified ${ct(n.verifiedAt)}`);case"modified":{const e=[];return n.changedLines&&e.push(`${n.changedLines} slot${n.changedLines===1?"":"s"}`),n.globals&&e.push("globals"),n.modMatrix&&e.push("mod matrix"),i("span",{class:"sync-pill sync-modified",title:"These differences are only in the editor until you send them."},`Not sent: ${e.join(", ")}`)}case"device-ahead":return i("span",{class:"sync-pill sync-device-ahead",title:"The module changed since we last read it — perhaps a preset was recalled on the panel. Read to catch up."},`Module changed — ${n.changedLines} slot${n.changedLines===1?"":"s"} differ`);case"conflict":return i("span",{class:"sync-pill sync-conflict",title:"Both the editor and the module changed. Resolve before sending or reading."},"Conflict — both changed")}}function Qe(n,e,t,o){const s=e.getState(),a=oo(s),r=n.syncStatus(),c=s.status==="connected",l=o.phase!=="idle",d=e.listPorts(),h=s.status==="searching"&&d.length>0?i("label",{class:"toggle"},i("span",{class:"visually-hidden"},"MIDI port"),(()=>{const u=i("select",{id:"port-picker",class:"control",style:"width:auto",onchange:m=>void t.selectPort(m.target.value)});u.appendChild(i("option",{value:""},"Choose a MIDI port…"));for(const m of d)u.appendChild(i("option",{value:m.id},m.name));return u})()):null;return i("div",{class:`connbar ${a.cls}`,role:"status","aria-live":"polite"},i("span",{class:`status-dot ${a.dot}`}),i("span",{class:"conn-text"},a.text),i("span",{class:"conn-detail"},a.detail),h,i("span",{class:"masthead-spacer"}),l?i("span",{class:"progress"},i("span",{},o.phase==="sending"?"Sending":"Reading"," ",o.label),i("span",{class:"progress-bar"},i("span",{class:"progress-fill",style:`width:${Math.round(o.done/Math.max(1,o.total)*100)}%`})),i("span",{class:"mono"},`${o.done}/${o.total}`)):ao(r),...r.kind==="conflict"?[k("Resolve…",()=>void t.resolveConflict(),{class:"btn-sm btn-danger",disabled:l,title:"Both the editor and the module changed. Choose which side wins."})]:[k("Check module",()=>void t.checkModule(),{class:"btn-sm",disabled:!c||l,title:c?"Re-read the module and report whether it still matches — catches changes made on the panel.":"Needs a connected module"}),k("Read from module",()=>void t.readFromModule(),{class:`btn-sm${r.kind==="device-ahead"?" btn-nudge":""}`,disabled:!c||l,title:c?r.kind==="device-ahead"?"The module changed — read to catch up.":"Read the module’s current configuration into the editor, replacing what is here.":"Needs a connected module"}),k("Send to module",()=>void t.sendToModule(),{class:`btn-sm${c?" btn-primary":""}`,disabled:!c||l,title:c?"Write the editor’s configuration to the module’s working memory. Does not save it to a preset.":"Needs a connected module"})],s.status==="lost"||s.status==="searching"||s.status==="error"?k("Reconnect",()=>void t.reconnect(),{class:"btn-sm btn-primary"}):null,e.kind==="simulator"?k("Use real hardware",t.useHardware,{class:"btn-sm btn-ghost",title:"Switch back to the Web MIDI transport"}):k("Use simulator",t.useSimulator,{class:`btn-sm${s.status==="denied"||s.status==="unsupported"?" btn-primary":" btn-ghost"}`,title:"Work against a simulated Portail — useful with no module attached, or to try something risky"}))}function so(n,e){const t=n.getState();return t.status!=="unsupported"&&t.status!=="denied"?null:i("div",{class:"notice notice-danger"},i("h3",{},t.status==="unsupported"?"This browser cannot talk to the module":"MIDI access was refused"),i("p",{},t.reason),i("p",{},"Editing, import and export all work normally here. You can build a patch, export it as JSON, and send it to the module later from a browser that supports Web MIDI."),i("div",{class:"row"},k("Work against the simulator",e,{class:"btn-sm"})))}function io(n,e){return n.kind!=="simulator"?null:i("div",{class:"notice notice-info"},i("h3",{},"Simulator — no hardware attached"),i("p",{},"You are working against a simulated Portail with its own working memory and 8 preset slots. Reads, writes, preset saves and MIDI learn all behave as they would with a module, but nothing reaches real hardware."),e?i("div",{class:"row"},k("Simulate a panel preset change",e,{class:"btn-sm btn-ghost",title:"Mimic someone pressing the module’s ▲ button — changes the module under the editor so you can see the device-ahead / conflict flow. Then press “Check module”."})):null)}const Te={off:'<circle cx="8" cy="8" r="2.5"/>',note:'<circle cx="5" cy="12" r="2.1" fill="currentColor" stroke="none"/><path d="M7 12V3l6-1.5V9.5"/><circle cx="11.5" cy="9.7" r="2.1" fill="currentColor" stroke="none"/>',arp:'<path d="M2 12l3-4 3 3 3-6 3 4"/>',seq:'<path d="M2 10h3V6h3v6h3V4h3"/>',gate_seq:'<path d="M2 10h3V6h3v6h3V4h3"/>',vel:'<path d="M3 13V11M8 13V7.5M13 13V4"/>',aftertouch:'<path d="M8 3v6"/><circle cx="8" cy="12" r="1.5"/><path d="M4 6q4 4 8 0"/>',poly_after:'<circle cx="5" cy="11" r="1.4"/><circle cx="11" cy="11" r="1.4"/><path d="M3 6q5 4 10 0"/>',pitchbend:'<path d="M2 8q6-8 12 0"/>',cc:'<circle cx="8" cy="8" r="5"/><path d="M8 3v3M8 10v3"/>',cc_rec:'<circle cx="8" cy="8" r="5"/><circle cx="8" cy="8" r="1.6"/>',lfo:'<path d="M1 8C2.5 3 5 3 6.5 8S11 13 12.5 8"/>',env:'<path d="M2 13L6 4l3 5v4"/><path d="M9 9h5"/>',"random cv":'<rect x="3" y="3" width="10" height="10" rx="1.5"/><circle cx="6" cy="6" r="1"/><circle cx="10" cy="10" r="1"/><circle cx="10" cy="6" r="1"/>',random:'<rect x="3" y="3" width="10" height="10" rx="1.5"/><circle cx="6" cy="6" r="1"/><circle cx="10" cy="10" r="1"/><circle cx="6" cy="10" r="1"/>',gate:'<path d="M1 11h3V5h5v6h5"/>',cvtrigger:'<path d="M4 12V5h2v7M4 8h-2"/>',trigger:'<path d="M6 12V5h2v7M6 8H3"/>',euclid:'<circle cx="8" cy="8" r="6"/><circle cx="8" cy="2" r="1.3" fill="currentColor" stroke="none"/><circle cx="13.2" cy="11" r="1.3" fill="currentColor" stroke="none"/><circle cx="2.8" cy="11" r="1.3" fill="currentColor" stroke="none"/>',clock:'<circle cx="8" cy="8" r="6"/><path d="M8 4.5V8l2.5 1.5"/>',"note filter":'<path d="M2 4h12l-4 5v4l-4-2V9z"/>',"random oct":'<path d="M2 11l3-6 3 6M8 5v6"/><path d="M11 5v6M11 5l2 2M11 5l-2 2"/>',"random fx":'<rect x="2.5" y="2.5" width="11" height="11" rx="2.5"/><circle cx="5.6" cy="5.6" r="1" fill="currentColor" stroke="none"/><circle cx="10.4" cy="10.4" r="1" fill="currentColor" stroke="none"/><circle cx="8" cy="8" r="1" fill="currentColor" stroke="none"/>',chance:'<circle cx="4.6" cy="4.6" r="2"/><circle cx="11.4" cy="11.4" r="2"/><path d="M13 3L3 13"/>',accumulate:'<path d="M2 13l4-3 4-4 4-3"/><path d="M2 10v3h3"/>',transpose:'<path d="M4 11V4M4 4L2 6M4 4l2 2"/><path d="M12 5v7M12 12l-2-2M12 12l2-2"/>',scale:'<path d="M2 13h3V9.5h3V6h3V2.5h2"/>',microtonal:'<path d="M3 3v10M6 5v8M9 3v10M12 6v7"/>',delay:'<path d="M3 4v8M8 6v6M13 8v4"/>',humanize:'<path d="M2 9q3-3 6 0t6 0"/><circle cx="5" cy="6" r=".8"/>',logic:'<path d="M3 4h4a5 5 0 0 1 0 8H3z"/><path d="M3 8H1M13 8h2"/>',"random vel":'<path d="M2 13L12 4"/><circle cx="6" cy="6" r="1"/><circle cx="10" cy="10" r="1"/>',"random trig":'<path d="M5 12V5h2v7"/><circle cx="11" cy="6" r="1"/>',invert:'<path d="M2 8h12"/><path d="M5 5l-3 3 3 3M11 11l3-3-3-3"/>',repeats:'<path d="M4 12V5h1.5v7M8 12V5h1.5v7M12 12V5h1.5v7"/>'},ro={"pitch-bend":"pitchbend","cc-recorder":"cc_rec","note-filter":"note filter","poly-aftertouch":"poly_after","random-note":"random fx","random-octave":"random oct","random-trig-length":"random trig","random-velocity":"random vel",sequencer:"seq",trig:"trigger",envelope:"env",arpeggiator:"arp",euclidean:"euclid"};for(const[n,e]of Object.entries(ro)){const t=Te[e];t&&(Te[n]=t)}Te.velocity='<path d="M8 1.5 8.5 6.6 8 8 6.6 8.5z" fill="currentColor" stroke="none"/><path d="M8 1.6L9.3 6.7 14.4 8 9.3 9.3 8 14.4 6.7 9.3 1.6 8 6.7 6.7Z" stroke-linejoin="round"/>';const lo='<circle cx="8" cy="8" r="2.5"/>';function Ge(n,e=16){const t=Te[n]??lo;return`<svg class="mode-icon" width="${e}" height="${e}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${t}</svg>`}function Nn(n){const e=n.color?`--jack: ${n.color}`:"--jack: var(--border-strong)",t=i("span",{class:"jack-ring","aria-hidden":"true"},i("span",{class:"jack-socket"}));return i("button",{type:"button",id:n.id,class:`output-jack${n.off?" is-off":""}${n.changed?" is-changed":""}${n.selected?" is-selected":""}`,"aria-current":n.selected?"true":"false",title:n.changed?`${n.name} — differs from the module`:n.name,style:e,onclick:n.onClick},t,i("span",{class:"jack-body"},i("span",{class:"jack-name"},n.name,n.fx&&n.fx.length?i("span",{class:"jack-fx",title:`${n.fx.length} FX on this output`},...n.fx.map(o=>i("span",{class:"jack-fx-icon",html:Ge(o,13)}))):null),i("span",{class:"jack-mode"},n.off?null:i("span",{class:"jmode-icon",html:Ge(n.icon,15)}),n.mode),n.summary?i("span",{class:"jack-summary"},n.summary):null),n.changed?i("span",{class:"visually-hidden"}," — differs from the module"):null)}function Wn(n){const e=[n.icon?i("span",{class:"chip-icon",html:Ge(n.icon,14)}):null,n.slot?i("span",{class:"chip-slot"},String(n.slot)):null,i("span",{class:"chip-label"},n.label),n.sub?i("span",{class:"chip-sub"},n.sub):null],t=`fx-chip${n.selected?" is-selected":""}`;return n.static?i("span",{class:`${t} is-static`,id:n.id,title:n.title},...e):i("button",{type:"button",class:t,id:n.id,title:n.title,onclick:n.onClick},...e)}function co(n,e,t){return n<=e?[n,e]:t==="lo"?[e,e]:[n,n]}function ho(n){const e=n.options.length,t=Math.max(0,e-1),o=g=>Math.max(0,n.options.findIndex(C=>C.value===g));let s=o(n.min),a=o(n.max);s>a&&([s,a]=[a,s]);const r=n.fill||"var(--accent)",c=i("div",{class:"span-slider",style:`--fill: ${r}`}),l=i("div",{class:"span-track"}),d=i("div",{class:"span-fill"});l.appendChild(d);const h=(g,C)=>i("input",{type:"range",class:`span-thumb span-${g}`,min:"0",max:String(t),step:"1",value:String(C),id:`${n.id}-${g}`,"aria-label":g==="lo"?"Minimum":"Maximum"}),u=h("lo",s),m=h("hi",a),b=i("span",{class:"span-val span-val-lo"},n.options[s]?.label??""),f=i("span",{class:"span-val span-val-hi"},n.options[a]?.label??""),w=()=>{const g=t?s/t*100:0,C=t?a/t*100:100;d.style.left=`${g}%`,d.style.right=`${100-C}%`,b.textContent=n.options[s]?.label??"",f.textContent=n.options[a]?.label??"";const S=s===a;c.classList.toggle("is-eq",S),f.style.display=S?"none":""},v=g=>{const C=Number(u.value),S=Number(m.value),[O,L]=co(C,S,g);s=O,a=L,u.value=String(O),m.value=String(L),w(),n.onChange(n.options[O]?.value??0,n.options[L]?.value??0)};return u.addEventListener("input",()=>v("lo")),m.addEventListener("input",()=>v("hi")),w(),c.append(i("div",{class:"span-rail"},l,u,m),i("div",{class:"span-vals"},b,f)),c}function Je(n){const e=n.options.length,t=Math.max(0,e-1),o=u=>{const m=n.options.findIndex(b=>b.value===u);return m<0?0:m};let s=o(n.value);const a=i("div",{class:"pslider",style:n.tint?`--fill: ${n.tint}`:""}),r=i("input",{type:"range",id:n.id,class:"pslider-input",min:"0",max:String(t),step:"1",value:String(s),"aria-label":n.ariaLabel});r.setAttribute("aria-valuetext",n.options[s]?.label??"");const c=i("div",{class:"pslider-track"},r);if(n.value!==n.defaultValue){const u=t?o(n.defaultValue)/t*100:0;c.appendChild(i("div",{class:"pslider-notch","aria-hidden":"true",style:`left: ${u}%`}))}const l=n.landmarks??(e>1?[0,t]:[0]),d=i("div",{class:"pslider-marks"},...l.map(u=>{const m=t?u/t*100:0;return i("span",{class:"pslider-mark","data-idx":String(u),style:`left: ${m}%`},n.options[u]?.label??"")})),h=()=>{d.querySelectorAll(".pslider-mark").forEach(u=>{u.style.visibility=Number(u.dataset.idx)===s?"hidden":"visible"})};return r.addEventListener("input",()=>{s=Number(r.value);const u=n.options[s]?.label??"";r.setAttribute("aria-valuetext",u),n.onLiveValue(u),h()}),r.addEventListener("change",()=>n.onCommit(n.options[s]?.value??0)),h(),a.append(c,d),a}function uo(n){const e=n.length,t=new Set([0,e-1]),o=n.findIndex(s=>s.label.trim()==="1/1");return o>=0&&t.add(o),[...t].sort((s,a)=>s-a)}function Ze(n){const e=n.options.length,o=(l=>{const d=n.options.findIndex(h=>h.value===l);return d<0?0:d})(n.value),s=l=>`${n.id}-cell-${n.options[l].value}`,a=i("div",{class:"radio-grid",role:"radiogroup","aria-label":n.ariaLabel,style:`--fill: ${n.tint||"var(--accent)"}; --cols: ${n.cols}`}),r=(l,d)=>{d&&typeof requestAnimationFrame=="function"&&requestAnimationFrame(()=>document.getElementById(s(l))?.focus()),n.onCommit(n.options[l].value)},c=(l,d)=>{const h=n.cols;switch(d){case"ArrowRight":return Math.min(e-1,l+1);case"ArrowLeft":return Math.max(0,l-1);case"ArrowDown":return Math.min(e-1,l+h);case"ArrowUp":return Math.max(0,l-h);case"Home":return 0;case"End":return e-1;default:return l}};return n.options.forEach((l,d)=>{const h=d===o,u=i("button",{type:"button",id:s(d),class:`radio-cell${h?" is-on":""}`,role:"radio","aria-checked":h?"true":"false","aria-label":l.label,tabindex:h?"0":"-1",onclick:()=>r(d,!1),onkeydown:m=>{const b=m,f=c(d,b.key);f!==d?(b.preventDefault(),r(f,!0)):(b.key===" "||b.key==="Enter")&&(b.preventDefault(),r(d,!1))}},n.format?n.format(l.label,l.value):l.label);h&&n.tint&&(u.style.color=n.tint),a.appendChild(u)}),a}function pe(n){const e=n.options.length,o=(c=>{const l=n.options.findIndex(d=>d.value===c);return l<0?0:l})(n.value),s=c=>`${n.id}-seg-${n.options[c].value}`,a=i("div",{class:`segmented is-${n.variant??"segment"}${n.rows===2?" is-wrap":""}`,role:"radiogroup","aria-label":n.ariaLabel,style:`--fill: ${n.tint||"var(--accent)"}`}),r=(c,l)=>{l&&typeof requestAnimationFrame=="function"&&requestAnimationFrame(()=>document.getElementById(s(c))?.focus()),n.onCommit(n.options[c].value)};return n.options.forEach((c,l)=>{const d=l===o,h=n.chipColor?n.chipColor(c):null,u=i("button",{type:"button",id:s(l),class:`seg-item${d?" is-on":""}`,role:"radio","aria-checked":d?"true":"false","aria-label":c.label,tabindex:d?"0":"-1",style:h?`--chip: ${h}`:"",onclick:()=>r(l,!1),onkeydown:m=>{const b=m;let f=l;b.key==="ArrowRight"||b.key==="ArrowDown"?f=Math.min(e-1,l+1):b.key==="ArrowLeft"||b.key==="ArrowUp"?f=Math.max(0,l-1):b.key==="Home"?f=0:b.key==="End"&&(f=e-1),f!==l?(b.preventDefault(),r(f,!0)):(b.key===" "||b.key==="Enter")&&(b.preventDefault(),r(l,!1))}},c.label);a.appendChild(u)}),a}function Ne(n){const e=n.value===n.options[1]?.value,t=()=>n.onCommit((e?n.options[0]:n.options[1]).value);return i("button",{type:"button",id:n.id,class:`toggle-switch${e?" is-on":""}`,role:"switch","aria-checked":e?"true":"false","aria-label":n.ariaLabel,style:n.tint?`--fill: ${n.tint}`:"",onclick:t,onkeydown:s=>{const a=s.key;(a===" "||a==="Enter")&&(s.preventDefault(),t())}},i("span",{class:"toggle-track"},i("span",{class:"toggle-knob"})),i("span",{class:"toggle-label"},n.options[e?1:0]?.label??""))}const mo=new Set([0,2,4,5,7,9,11]);function po(n){const e=d=>{const h=n.options.findIndex(u=>u.value===d);return h<0?0:h},t=d=>/^[A-G]#?-?\d/.test(d.trim()),o=i("div",{class:"note-picker",style:n.tint?`--fill: ${n.tint}`:""}),s=i("button",{type:"button",id:n.id,class:"note-trigger","aria-haspopup":"dialog","aria-expanded":"false","aria-label":n.ariaLabel},n.options[e(n.value)]?.label??"");o.appendChild(s);let a=null;const r=()=>{a&&(a.remove(),a=null,s.setAttribute("aria-expanded","false"),s.focus())},c=d=>{n.onCommit(d),r()},l=()=>{if(a)return;const d=e(n.value);a=i("div",{class:"note-dialog",role:"dialog","aria-modal":"true","aria-label":n.ariaLabel});const h=n.options[0]&&!t(n.options[0].label)?n.options[0]:null;h&&a.appendChild(i("button",{type:"button",class:`note-lead${n.value===h.value?" is-on":""}`,onclick:()=>c(h.value)},h.label));const u=i("div",{class:"piano"}),m=new Map;n.options.forEach(g=>{if(!t(g.label))return;const C=(g.value%12+12)%12,S=mo.has(C),O=i("button",{type:"button",id:`${n.id}-k-${g.value}`,class:`piano-key ${S?"is-white":"is-black"}${g.value===n.value?" is-on":""}`,role:"radio","aria-checked":g.value===n.value?"true":"false","aria-label":g.label,tabindex:g.value===n.value?"0":"-1",onclick:()=>c(g.value)},g.label.replace(/-?\d+$/,""));m.set(g.value,O),u.appendChild(O)}),a.appendChild(u);let b=n.options[d].value,f="";const w=g=>{const C=m.get(g);C&&(b=g,m.forEach((S,O)=>S.setAttribute("tabindex",O===g?"0":"-1")),C.focus(),C.scrollIntoView({block:"nearest",inline:"center"}))},v=g=>{const C=n.options.filter(L=>t(L.label)).map(L=>L.value),S=C.indexOf(b),O=Math.max(0,Math.min(C.length-1,S+g));C[O]!==void 0&&w(C[O])};a.addEventListener("keydown",g=>{const C=g;switch(C.key){case"Escape":C.preventDefault(),C.stopPropagation(),r();return;case"ArrowRight":case"ArrowUp":C.preventDefault(),C.stopPropagation(),v(1);return;case"ArrowLeft":case"ArrowDown":C.preventDefault(),C.stopPropagation(),v(-1);return;case"PageUp":C.preventDefault(),C.stopPropagation(),v(12);return;case"PageDown":C.preventDefault(),C.stopPropagation(),v(-12);return;case"Enter":case" ":C.preventDefault(),C.stopPropagation(),c(b);return;case"Tab":C.preventDefault(),C.stopPropagation();return}if(/^[a-gA-G#\d-]$/.test(C.key)){f=(f+C.key).slice(-4);const S=L=>L.replace(/\s+/g,"").toUpperCase(),O=n.options.find(L=>t(L.label)&&S(L.label).startsWith(S(f)));O&&w(O.value)}}),o.appendChild(a),s.setAttribute("aria-expanded","true"),w(b)};return s.addEventListener("click",()=>a?r():l()),o}function fo(n){const t=n.value===0,o=n.options.filter(a=>a.value!==0),s=i("div",{class:"gated-slider"});return s.appendChild(pe({id:`${n.id}-mode`,ariaLabel:`${n.ariaLabel} mode`,tint:n.tint,variant:"segment",options:[{value:0,label:n.headLabel??"Latch"},{value:1,label:"Timed"}],value:t?0:1,onCommit:a=>n.onCommit(a===0?0:n.value>0?n.value:10)})),t||s.appendChild(Je({id:`${n.id}-ms`,options:o,value:n.value,defaultValue:n.defaultValue>0?n.defaultValue:10,ariaLabel:`${n.ariaLabel} duration`,tint:n.tint,onLiveValue:n.onLiveValue,onCommit:n.onCommit})),s}const go={_100_menu:"slider",_127_menu:"slider",_128_menu:"slider",_63_menu:"slider",_64_menu:"slider",_int63_menu:"slider",bipolar_menu:"slider",clock_speed_menu:"slider",delay_ms:"slider",env_times:"slider",glide_times:"slider",glide_times2:"slider",ms_128_menu:"slider",ocatves_menu:"slider",off_100_menu:"slider",off_127_menu:"slider",pb_range_menu:"slider",percent_menu:"slider",rise_time:"slider",semi_tone_range_menu:"slider",transpose_menu:"slider",vib_speed:"slider",div_menu:"detented",lfo_div_menu:"detented",swing_menu:"detented",divisions_menu:"detented",length_menu:"gated-slider",clock_type_menu:"segmented",env_type_menu:"segmented",group_menu:"segmented",lfo_mode_menu:"segmented",lfo_type_menu:"segmented",logic_menu:"segmented",math_func_menu:"segmented",note_in_dest_menu:"segmented",note_in_rec_menu:"segmented",oct_menu:"segmented",range_oct_menu:"segmented",seq_dir_menu:"segmented",source_menu:"segmented",vel_dest_menu:"segmented",fx_dest_prm:"segmented",prm_menu:"segmented",sync_menu:"segmented",_1_8_menu:"segmented",ch_menu:"channel-grid",channels:"channel-grid",range_cv_menu:"voltage-chips",range_cv_note_menu:"voltage-chips",range_gate_menu:"voltage-chips",invert_range_cv_menu:"voltage-chips",invert_range_gate_menu:"voltage-chips",fx_dest_menu_cv:"jack-chips",fx_dest_menu_gate:"jack-chips",dest_note_menu:"jack-chips",dest_menu:"jack-chips",note_menu:"keyboard",note_all_menu:"keyboard",notenames:"keyboard",_0_1_menu:"toggle",onoff_menu:"toggle",clock_state_menu:"toggle",glide_mode_menu:"toggle",global_menu:"toggle",seq_gate_type_menu:"toggle",seq_type_menu:"toggle",note_in_dest_gate:"toggle",tables_menu:"dropdown"},yo=new Set(["voltage-chips","jack-chips"]);function qn(n){const e=go[n]??"dropdown";return{kind:e,span:yo.has(e)?2:1}}function vo(n,e){const t=F(e),o=n.get().config.lines[e],s=ne(`mode-${e}`,bt(t).map(c=>({value:c.index,label:c.display})),o.mode,c=>n.setLineMode(e,c));s.classList.add("mode-tag-select"),s.setAttribute("aria-label",`${N(e)} mode`);const a=Xe[Sn(t,o.mode)],r=je(a.id);return i("span",{class:`mode-tag${r?"":" is-off"}`,style:r?`--fam:${r}`:""},r?i("span",{class:"mode-tag-family"},a.label):null,s)}function wo(n,e){const t=F(e),o=x(t,n.get().config.lines[e].mode);return!o||o.key==="off"?null:i("p",{class:"field-hint mode-doc"},o.docSource!=="spec"?i("span",{class:"tag tag-unverified",title:"Not yet confirmed against hardware."},"Unverified"):null,o.doc??"")}function bo(n,e,t,o){const s=`g-${e.id}`,a=c=>n.setGlobal(e.id,c);if(e.id==="disable_default_cc_map")return Ne({id:s,ariaLabel:"Factory CC map",options:[{value:1,label:"off"},{value:0,label:"on"}],value:t,tint:null,onCommit:a});if(e.kind==="enum"&&e.domain){const c=(V.domains[e.domain]?.labels??[]).map((d,h)=>({value:h,label:String(d)})),l=qn(e.domain).kind;return l==="toggle"?Ne({id:s,options:c,value:t,ariaLabel:e.label,tint:null,onCommit:a}):l==="segmented"?pe({id:s,options:c,value:t,ariaLabel:e.label,tint:null,variant:"segment",onCommit:a}):ne(s,c,t,a)}if(e.id==="global_cc_channel"){const c=Array.from({length:16},(l,d)=>({value:d+1,label:String(d+1)}));return Ze({id:s,options:c,value:t,ariaLabel:e.label,cols:4,tint:null,onCommit:a})}const r=Array.from({length:e.max-e.min+1},(c,l)=>({value:e.min+l,label:String(e.min+l)}));return Je({id:s,options:r,value:t,defaultValue:e.default,ariaLabel:e.label,tint:null,onLiveValue:o,onCommit:a})}function Co(n,e){const t=Vt(n.get().config.globals,e),o=e.id==="disable_default_cc_map",s=o?"Factory CC map":e.label,a=e.kind==="enum"&&e.domain?V.domains[e.domain]:void 0,r=o?t===0?"on":"off":a?String(a.labels[t]??t):`${t}${e.unit?` ${e.unit}`:""}`,c=i("span",{class:"pfield-value"},r),l=bo(n,e,t,m=>{c.textContent=e.unit?`${m} ${e.unit}`:m});l.classList.add("pfield-control");const d=e.id==="global_cc_channel",u=[o?"When on, the module’s built-in CC map applies alongside your modulation-matrix rows. Turn it off so only your own rows apply.":e.doc,a?`Range ${a.labels[0]} … ${a.labels[a.count-1]}`:`Range ${e.min} … ${e.max}`].filter(Boolean).join(`
`);return i("div",{class:`field pfield${d?" is-rowspan2":""}`,title:u},i("div",{class:"pfield-head"},i("span",{class:"pfield-name"},s),i("span",{class:"spacer"}),e.docSource!=="spec"?i("span",{class:"tag tag-unverified",title:"Not confirmed against the manual or hardware."},"unverified"):null,c),l)}function To(n){const e=V.globals.map(t=>Co(n,t));return i("section",{class:"panel"},i("div",{class:"panel-head"},i("h2",{},"Global parameters")),i("div",{class:"panel-body"},i("div",{class:"inspector-grid"},...e),i("p",{class:"field-hint"},"The clock source labels come from the original editor’s source, which contradicts its own on-screen label. Worth confirming against your module before relying on it.")))}function ko(n){const e=V.domains[n.domain];if(!e)return`${n.min}–${n.max}`;const t=String(e.labels[n.min]??n.min),o=String(e.labels[Math.min(n.max,n.wireMax)]??n.max);return t===o?t:`${t} … ${o}`}function H(n){const e=V.domains[n.domain],t=Math.min(n.max,n.wireMax);return e?e.labels.slice(n.min,t+1).map((o,s)=>({value:n.min+s,label:String(o)})):Array.from({length:t-n.min+1},(o,s)=>({value:n.min+s,label:String(n.min+s)}))}function xo(n,e,t,o){return ne(`p-${e}-${t.index}`,H(t),o,s=>n.setLineByte(e,t.index,s))}function hn(n,e){const t=/^(CV|GATE)\s?([1-8])$/i.exec(e.trim());if(!t)return null;const o=t[1].toUpperCase()==="CV",s=Number(t[2])-1+(o?0:8);return le(o?"cv":"gate",n.get().config.lines[s]?.mode??0)}function $n(n,e){const t=F(e),o=n.get().config.lines[e],s=x(t,o.mode);if(!s||s.params.length===0)return i("p",{class:"muted small"},"This mode has no parameters.");const a=t==="fx",r=a?null:le(t,o.mode),c=s.params.map(l=>Vo(n,e,l,r,a));return i("div",{class:"inspector-grid"},...c)}function Vo(n,e,t,o,s){const a=n.get().config.lines[e].bytes[t.index]??0,r=V.domains[t.domain],c=t.wireMax<t.max,l=`p-${e}-${t.index}`,d=ge(t,a),h=String(r?.labels[t.default]??t.default),m=hn(n,d)??o,b=i("span",{class:"pfield-value"},d);m&&(b.style.color=m);const f=qn(t.domain),w=I=>n.setLineByte(e,t.index,I);let v,g=null,C=!1;if(f.kind==="channel-grid")v=Ze({id:l,options:H(t),value:a,ariaLabel:t.label,cols:4,tint:m,format:I=>I.replace(/^ch\s*/i,""),onCommit:w});else if(f.kind==="segmented"){const I=H(t),Y=I.reduce((Ee,Le)=>Math.max(Ee,Le.label.length),0),de=I.length*(Y*6.5+14)>240?2:1;v=pe({id:l,options:I,value:a,ariaLabel:t.label,tint:m,variant:"segment",rows:de,onCommit:w}),de===2&&(C=!0)}else if(f.kind==="voltage-chips")v=pe({id:l,options:H(t),value:a,ariaLabel:t.label,tint:m,variant:"chip",onCommit:w}),v.classList.add("is-voltage");else if(f.kind==="jack-chips")v=pe({id:l,options:H(t),value:a,ariaLabel:t.label,tint:m,variant:"chip",chipColor:I=>hn(n,I.label),onCommit:w}),v.classList.add("is-jack");else if(f.kind==="toggle")v=Ne({id:l,options:H(t),value:a,ariaLabel:t.label,tint:m,onCommit:w});else if(f.kind==="keyboard")v=po({id:l,options:H(t),value:a,ariaLabel:t.label,tint:m,onCommit:w});else if(f.kind==="gated-slider")v=fo({id:l,options:H(t),value:a,defaultValue:t.default,ariaLabel:t.label,headLabel:"Latch",tint:m,onLiveValue:I=>{b.textContent=I,m&&(b.style.color=m)},onCommit:w});else if(f.kind==="slider"||f.kind==="detented"){const I=H(t);v=Je({id:l,options:I,value:a,defaultValue:t.default,ariaLabel:t.label,tint:m,landmarks:f.kind==="detented"?uo(I):void 0,onLiveValue:Y=>{b.textContent=Y,m&&(b.style.color=m)},onCommit:Y=>n.setLineByte(e,t.index,Y)}),a!==t.default&&(g=i("button",{type:"button",class:"pfield-reset","aria-label":`Reset ${t.label} to default, ${h}`,title:`Reset to default (${h})`,onclick:()=>n.setLineByte(e,t.index,t.default)},"↺"))}else v=xo(n,e,t,a),m&&(v.style.color=m),s&&t.id==="target"&&(v.style.borderColor="var(--border-strong)",v.onchange=I=>n.retargetFx(e,Number(I.target.value)));v.classList.add("pfield-control");const S=[t.doc,`Range ${ko(t)} · default ${h}`,c?`This list has ${r?.count??"?"} entries but a SysEx byte only carries 0–127, so values above ${t.wireMax} aren't offered.`:null].filter(Boolean).join(`
`),O=!!t.unit&&!t.label.toLowerCase().includes(t.unit.toLowerCase()),L=`${l}-hint`,B=S?i("div",{class:"pfield-hint",role:"tooltip",id:L},S):null;B&&(v.setAttribute("aria-describedby",L),v.querySelector("input, select, .note-trigger")?.setAttribute("aria-describedby",L));const sn=()=>{if(!B)return;const I=W.getBoundingClientRect(),Y=B.offsetHeight||50,de=W.closest(".rack-band, .panel-body"),Ee=de?de.getBoundingClientRect().bottom:1/0,Le=Math.min(Ee,window.innerHeight);W.classList.toggle("hint-above",I.bottom+3+Y>Le)},Oe=()=>{sn(),typeof requestAnimationFrame=="function"&&requestAnimationFrame(sn)},rn=i("span",{class:"pfield-name",...B?{tabindex:"-1","aria-describedby":L}:{},...B?{onclick:()=>{W.classList.toggle("hint-shown"),Oe()}}:{}},t.label,O?i("span",{class:"unit"},t.unit):null);o&&(rn.style.color=o),B&&B.addEventListener("click",()=>W.classList.remove("hint-shown"));const W=i("div",{class:`field pfield${c?" is-clamped":""}${f.span===2?" is-span2":""}${f.kind==="channel-grid"||f.kind==="gated-slider"||C?" is-rowspan2":""}`,onkeydown:I=>{I.key==="Escape"&&B&&(W.classList.remove("hint-shown"),W.classList.add("hint-suppressed"))},onpointerenter:()=>{W.classList.remove("hint-suppressed"),Oe()},onfocusin:()=>{W.classList.remove("hint-suppressed"),Oe()}},i("div",{class:"pfield-head"},rn,i("span",{class:"spacer"}),t.docSource!=="spec"?i("span",{class:"tag tag-unverified",title:"Derived by reading the official editor’s source. Not confirmed against the manual or hardware."},"unverified"):null,b),g?i("div",{class:"pfield-controlrow"},v,g):v,B);return W}const Bn=8;function un(n=!1){return i("span",{class:`flow-arrow${n?" is-dim":""}`,"aria-hidden":"true"},n?"⇢":"→")}function So(n,e,t){const o=F(e),s=n.get().config.lines[e],r=x(o,s.mode)?.params.find(m=>m.id==="channel"),c=r?ge(r,s.bytes[r.index]??0):null,l=c&&c!=="MIDI"?`MIDI ${c}`:"MIDI",d=n.get().sourceOpen,h=Wn({label:l,icon:"note",onClick:()=>n.toggleSource(),title:d?"Close this output’s settings":"MIDI in — tap to edit this output’s settings"}),u=le(o,s.mode);return h.classList.add("is-source"),d&&h.classList.add("is-open"),u&&h.style.setProperty("--src",u),h}function Hn(n){return n.length<=1?n.join(""):`${n.slice(0,-1).join(", ")} or ${n[n.length-1]}`}function Ao(n,e){const t=n.get().expandedFx===e.fxLine,o=Wn({label:e.display,icon:e.key,sub:_o(n,e.fxLine),selected:t,onClick:()=>n.setExpandedFx(e.fxLine),title:t?"Close this FX’s settings":`${e.display} — tap to edit, drag to reorder or to the trash to remove`});o.addEventListener("keydown",a=>{a.key==="Delete"||a.key==="Backspace"?(a.preventDefault(),n.removeFxSlot(e.fxLine)):a.key==="ArrowLeft"?(a.preventDefault(),n.moveFx(e.fxLine,-1)):a.key==="ArrowRight"&&(a.preventDefault(),n.moveFx(e.fxLine,1))});const s=i("span",{class:`chain-chip-group${e.inert?" is-inert":""}`},o);if(e.inert){const a=Hn(ze(U(e.mode)));o.classList.add("is-inert"),o.title=`${e.display} is inert — this output's mode doesn't produce the ${U(e.mode)?"note":"gate"} data it processes, so it does nothing. It still uses one of the 8 FX slots. Set this output to ${a} to reactivate; drag to the trash to remove.`,s.appendChild(i("span",{class:"chain-inert-note small","aria-hidden":"true"},`inert · needs ${a}`))}return s}const Io='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 4h11M6 4V2.5h4V4M4 4l.7 9a1 1 0 0 0 1 .9h4.6a1 1 0 0 0 1-.9L12 4M6.5 7v4M9.5 7v4"/></svg>';function Mo(){return i("span",{class:"chain-trash",title:"Drag an effect here to remove it",html:Io})}function _o(n,e){const t=n.get().config.lines[e],s=x("fx",t.mode)?.params.find(a=>a.index>=2);return s?ge(s,t.bytes[s.index]??0):""}function Oo(n,e){const t=n.get().config.lines[e],o=x("fx",t.mode),s=(U(t.mode)?0:8)+(t.bytes[1]??0),a=ne(`fx-mode-${e}`,_n(s).map(r=>({value:r.index,label:r.display})),t.mode,r=>n.setLineMode(e,r));return i("div",{class:"fx-inline-editor"},i("div",{class:"fx-inline-head"},i("span",{class:"small muted"},"Editing"),a,i("span",{class:"spacer"}),o?.key==="microtonal"?k("Edit tables…",()=>document.dispatchEvent(new CustomEvent("portail:navigate",{detail:"tuning"})),{class:"btn-sm",title:"Open the Tuning tab to author the 8 microtonal tables"}):null,k("Done",()=>n.setExpandedFx(null),{class:"btn-sm btn-ghost",title:"Close this FX’s settings"})),o&&o.doc?i("p",{class:"field-hint"},o.doc):null,$n(n,e))}function Eo(n,e){const t=n.get().config,o=ce(t,e),s=n.get().expandedFx,a=s!==null&&o.some(h=>h.fxLine===s),r=[So(n,e)];o.forEach(h=>{r.push(un(h.inert)),r.push(Ao(n,h))}),r.push(un()),r.push(Fo(n,e));const c=o.length>0?Mo():null;c&&r.push(c);const l=En(t),d=i("div",{class:"flow-row"},...r);return o.length>0&&Do(d,n,o.map(h=>h.fxLine),c),i("div",{class:"signal-flow"},i("div",{class:"flow-head"},i("span",{class:"flow-label small muted"},"Signal flow into this output"),l>=Bn?i("span",{class:"small warn"},"all 8 FX slots used"):null),d,o.length===0?i("span",{class:"small muted"},"No FX on this output yet. Add one with “+ insert FX”; add more to build a chain (they process left to right)."):null,a?Oo(n,s):null,n.get().sourceOpen?Lo(n,e):null)}function Lo(n,e){return i("div",{class:"fx-inline-editor source-inline"},i("div",{class:"fx-inline-head"},i("span",{class:"small muted"},"Output settings"),i("span",{class:"spacer"}),k("Done",()=>n.toggleSource(),{class:"btn-sm btn-ghost",title:"Close this output’s settings"})),$n(n,e))}function Do(n,e,t,o){const s=Array.from(n.querySelectorAll(".chain-chip-group")),a=r=>{if(!o)return!1;const c=o.getBoundingClientRect();return r.clientX>=c.left&&r.clientX<=c.right&&r.clientY>=c.top&&r.clientY<=c.bottom};s.forEach((r,c)=>{const l=r.querySelector(".fx-chip");l&&l.addEventListener("pointerdown",d=>{if(d.button!==0||d.target.closest("select"))return;const h=d.clientX,u=d.clientY,m=s.map(v=>{const g=v.getBoundingClientRect();return g.left+g.width/2});let b=!1;const f=v=>{const g=v.clientX-h,C=v.clientY-u;!b&&Math.hypot(g,C)>4&&(b=!0,l.setPointerCapture(v.pointerId),r.classList.add("is-dragging")),b&&(r.style.transform=`translate(${g}px, ${C}px)`,o?.classList.toggle("is-target",a(v)))},w=v=>{if(l.removeEventListener("pointermove",f),l.removeEventListener("pointerup",w),l.removeEventListener("pointercancel",w),r.style.transform="",r.classList.remove("is-dragging"),o?.classList.remove("is-target"),!b)return;const g=S=>{S.preventDefault(),S.stopPropagation()};if(l.addEventListener("click",g,{once:!0,capture:!0}),setTimeout(()=>l.removeEventListener("click",g,!0),0),a(v)){e.removeFxSlot(t[c]);return}let C=0;for(let S=0;S<m.length;S++)S!==c&&v.clientX>m[S]&&C++;C!==c&&e.reorderFx(t[c],C)};l.addEventListener("pointermove",f),l.addEventListener("pointerup",w),l.addEventListener("pointercancel",w)})})}function Fo(n,e){if(En(n.get().config)>=Bn)return i("span",{class:"chain-insert-full small muted"},"8 / 8 FX slots used");const o=_n(e),a=Ce(n.get().config,e)?o:[],r=o.length-a.length,c=i("span",{class:"chain-insert-wrap"});if(a.length){const l=ne(`insert-fx-${e}`,[{value:-1,label:"+ insert FX"},...a.map(d=>({value:d.index,label:d.display}))],-1,d=>{if(d>=0){const h=n.insertFx(e,d);h!==null&&n.setExpandedFx(h);const u=document.getElementById(`insert-fx-${e}`);u&&(u.value="-1")}});l.classList.add("chain-insert"),c.appendChild(l)}return r>0&&c.appendChild(i("span",{class:"chain-insert-full chain-insert-hint small muted"},`${r} FX need this output in ${Hn(ze(e<8))} mode`)),c}function mn(n,e){const t=F(e),o=n.lines[e],s=x(t,o.mode);if(!s||s.key==="off")return"";const a=[];for(const c of s.params)c.id==="channel"&&a.push(`ch ${ge(c,o.bytes[c.index]??0).replace(/^ch /,"")}`);const r=s.params.find(c=>["note","cc_number","division","rate","waveform","scale","envelope_shape","steps","base_note"].includes(c.id));return r&&a.push(`${ge(r,o.bytes[r.index]??0)}`),a.slice(0,2).join(" · ")}function Ro(n,e){const t=n.lines[e],s=x("gate",t.mode)?.params.find(r=>r.id==="trigger_source");if(!s)return;const a=t.bytes[s.index]??0;if(a>=1&&a<=8)return`← CV ${a}`}function Xn(n,e,t){const o=n.get(),s=F(e),a=o.config.lines[e],r=x(s,a.mode),c=!r||r.key==="off",l=ce(o.config,e).map(h=>h.key),d=s==="gate"?Ro(o.config,e)??mn(o.config,e):mn(o.config,e);return{id:`jack-${e}`,name:N(e),mode:r?r.display:`? (${a.mode})`,icon:At(s,a.mode),color:le(s,a.mode),summary:d,off:c,changed:t.has(e),fx:l}}function Po(n){typeof requestAnimationFrame=="function"&&requestAnimationFrame(()=>{const e=document.getElementById(`jack-${n}`);if(!e)return;const t=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;e.scrollIntoView({block:"center",behavior:t?"auto":"smooth"})})}function pn(n,e,t){return Nn({...Xn(n,e,t),selected:!1,onClick:()=>{n.setSelectedLine(e),Po(e)}})}function fn(n,e,t){const o=Nn({...Xn(n,e,t),selected:!0,onClick:()=>n.setSelectedLine(null)});return o.classList.add("is-tab"),o.title="Tap to close this output’s editor",o}function Go(n,e,t,o){const s=F(t),a=n.get().config.lines[t],r=x(s,a.mode),c=le(s,a.mode),l=t>=8,d=r&&r.key!=="off"?k("?",()=>e.onHelp?.(s,r.key),{class:"btn-sm btn-ghost",title:`What does ${r.name} do? Open the manual.`}):null;return i("div",{class:`rack-band ${l?"is-gate-tab":"is-cv-tab"}${o.has(t)?" is-changed":""}`,style:c?`--jack: ${c}`:"--jack: var(--border-strong)",role:"region","aria-label":`${N(t)} settings`},i("div",{class:"rack-band-notch","aria-hidden":"true"}),i("div",{class:"band-head"},vo(n,t),i("span",{class:"spacer"}),d),wo(n,t),Eo(n,t))}function jn(n,e={}){const t=n.diffAgainstDevice(),o=new Set(t?.lines.map(d=>d.line)??[]),s=n.get(),a=s.selectedLine,r=s.config.lines.slice(0,16).filter((d,h)=>{const u=x(F(h),d.mode);return u&&u.key!=="off"}).length,c=d=>Array.from({length:8},(h,u)=>`jack-${d+u}`).join(" "),l=[i("div",{class:"rack-head-cell",role:"group","aria-label":"CV outputs","aria-owns":c(0)},"CV · 16-bit"),i("div",{class:"rack-head-cell",role:"group","aria-label":"D-GATE outputs","aria-owns":c(8)},"D-GATE · 12-bit")];for(let d=0;d<8;d++){const h=d,u=8+d;l.push(a===h?fn(n,h,o):pn(n,h,o)),l.push(a===u?fn(n,u,o):pn(n,u,o)),(a===h||a===u)&&l.push(Go(n,e,a,o))}return i("section",{class:"panel",id:"rack-panel"},i("div",{class:"panel-head"},i("h2",{},"Module overview"),i("span",{class:"small muted"},`${r} of 16 outputs in use`),i("span",{class:"spacer"}),k("Clear all",()=>void No(n),{class:"btn-sm btn-ghost",title:"Set every output and FX slot to OFF. Editor only — nothing is sent to the module."})),i("div",{class:"panel-body"},i("div",{class:"rack-grid"},...l)))}async function No(n){await ie({title:"Set all outputs and FX to OFF?",body:"This clears the configuration in the editor. Nothing is sent to the module, and you can undo it with Ctrl/Cmd+Z.",confirmLabel:"Clear all",danger:!0})&&(n.commit("clear all",t=>{for(let o=0;o<_;o++)t.lines[o]={mode:0,bytes:new Array(R).fill(0)}}),n.toast("info","All slots cleared","Undo with Ctrl/Cmd+Z. Nothing was sent to the module."))}const Fe=127,We=n=>n.statusHigh===0&&n.targetParam===0;function Wo(n){if(n.statusHigh===0)return"not assigned";const e=n.statusHigh===9?"NOTE":n.statusHigh===11?"CC":`status ${n.statusHigh}`,t=n.statusHigh===9?ue(n.number):String(n.number);return`CH ${n.channel+1} · ${e} ${t}`}function qo(n,e,t,o,s){const a=n.get(),r=e.targetLine,c=r!==Fe&&r<=24,l=c&&r<24?F(r):null,d=c&&r<24?a.config.lines[r]:null,u=(l&&d?x(l,d.mode):null)?.params??[],m=u.find(g=>g.index===e.targetParam),b=m?V.domains[m.domain]:void 0,f=b?b.labels.slice(0,Math.min(m.wireMax,b.count-1)+1).map((g,C)=>({value:C,label:String(g)})):[],w=l&&d?le(l,d.mode):null,v=ne(`mod-dest-${t}`,[{value:Fe,label:"— none —"},...V.modMatrix.destinations.map(g=>({value:g.line,label:g.label}))],c?r:Fe,g=>n.setModRow(t,{targetLine:g,targetParam:0,valueMin:0,valueMax:0}));return w&&(v.style.color=w),i("div",{class:`modrow${o===t?" is-armed":""}`,role:"group","aria-label":`Modulation row ${t+1}`},i("span",{class:"modrow-index"},String(t+1)),i("div",{class:"field"},i("label",{class:"field-label",for:`mod-learn-${t}`},"MIDI source"),k(o===t?"Move a control…":Wo(e),()=>s(o===t?null:t),{id:`mod-learn-${t}`,class:`learn-btn ${o===t?"is-armed":""}`,title:"Click, then move a knob or play a note to assign it."})),i("div",{class:"field"},i("label",{class:"field-label",for:`mod-dest-${t}`},"Target"),v),i("div",{class:"field"},i("label",{class:"field-label",for:`mod-param-${t}`},"Parameter"),ne(`mod-param-${t}`,[{value:0,label:u.length?"— choose —":"— target is OFF —"},...u.map(g=>({value:g.index,label:g.label}))],e.targetParam,g=>{const C=u.find(O=>O.index===g),S=C?Math.min(C.wireMax,C.max):0;n.setModRow(t,{targetParam:g,valueMin:0,valueMax:S})})),i("div",{class:"field field-span"},i("label",{class:"field-label"},"Range"),f.length?ho({id:`mod-span-${t}`,options:f,min:e.valueMin,max:e.valueMax,fill:w,onChange:(g,C)=>n.setModRow(t,{valueMin:g,valueMax:C})}):i("span",{class:"small muted"},"—")),k("Clear",()=>{n.clearModRow(t),o===t&&s(null)},{class:"btn-sm btn-ghost",title:`Clear modulation row ${t+1}`,disabled:We(e)}))}function $o(n,e,t){const s=n.get().config.modMatrix,a=s.filter(h=>h.statusHigh>0||h.targetParam>0).length,r=s.map((h,u)=>({m:h,i:u})).filter(({m:h,i:u})=>!We(h)||u===e),c=s.findIndex(h=>We(h)),l=k("+ Add assignment",()=>{c>=0&&t(c)},{class:"btn-sm",disabled:c<0,title:c<0?"All 32 modulation slots are in use.":"Reveal the next free slot and listen for a control."}),d=r.length?r.map(({m:h,i:u})=>qo(n,h,u,e,t)):[i("p",{class:"field-hint",style:"margin: .2rem 0"},"No modulation assignments yet. “+ Add assignment”, then move a knob or play a note.")];return i("section",{class:"panel"},i("div",{class:"panel-head"},i("h2",{},"Modulation matrix"),i("span",{class:"small muted"},`${a} of ${s.length} rows assigned`),i("span",{class:"spacer"}),e!==null?i("span",{class:"small",style:"color: var(--pending); font-weight: 600"},`Listening for row ${e+1} — move a control on your controller`):l),i("div",{class:"panel-body tight scroll-x"},...d),i("div",{class:"panel-body"},i("p",{class:"field-hint"},"Each row maps one incoming MIDI note or CC onto one parameter of one slot. The parameter list and the min/max values follow whatever mode the target slot is currently in, so changing a slot’s mode clears its rows’ parameter (the MIDI assignment is kept).")))}const gn=400,Bo={notes:!0,cc:!0,clock:!1,sysex:!0,other:!0};class Ho{events=[];paused=!1;filters={...Bo};counts={in:0,out:0};lastActivityAt=0;push(e){this.counts[e.direction]++,this.lastActivityAt=e.at,!this.paused&&(this.events.push(e),this.events.length>gn&&this.events.splice(0,this.events.length-gn))}clear(){this.events=[]}setPaused(e){this.paused=e}isPaused(){return this.paused}getCounts(){return{...this.counts}}isLit(e){return e-this.lastActivityAt<150}visible(){return this.events.filter(e=>this.matches(e))}matches(e){switch(e.kind){case"note-on":case"note-off":case"poly-at":return this.filters.notes;case"cc":return this.filters.cc;case"clock":case"transport":case"sense":return this.filters.clock;case"sysex":return this.filters.sysex;default:return this.filters.other}}}function zn(n,e){const t=n.visible().slice().reverse(),o=n.getCounts(),s=(a,r)=>i("label",{class:"toggle"},i("input",{type:"checkbox",checked:n.filters[a],onchange:c=>{n.filters[a]=c.target.checked,e()}}),r);return i("section",{class:"panel"},i("div",{class:"panel-head"},i("h2",{},"MIDI activity"),i("span",{class:`activity-led${n.isLit(performance.now())?" lit":""}`,id:"activity-led"}),i("span",{class:"spacer"}),i("span",{class:"small muted mono"},`in ${o.in} · out ${o.out}`),k(n.isPaused()?"Resume":"Pause",()=>{n.setPaused(!n.isPaused()),e()},{class:"btn-sm"}),k("Clear",()=>{n.clear(),e()},{class:"btn-sm btn-ghost"})),i("div",{class:"panel-body"},i("div",{class:"monitor-filters"},s("notes","Notes"),s("cc","CC"),s("clock","Clock"),s("sysex","SysEx"),s("other","Other")),i("div",{class:"monitor-list",role:"log","aria-label":"MIDI activity log","aria-live":"off"},t.length===0?i("p",{class:"monitor-empty"},o.in+o.out===0?"No MIDI seen yet. Play a note on your controller — if nothing appears here, the module is not receiving it either.":"Nothing matches the current filters."):i("div",{},...t.map(a=>i("div",{class:"monitor-row"},i("span",{class:`mon-dir mon-${a.direction}`},a.direction==="in"?"←":"→"),i("span",{class:"mon-ch"},a.channel?`ch${a.channel}`:""),i("span",{class:"mon-summary"},a.summary)))))))}const ke="eowave-portail-config";function en(n){return{kind:ke,configVersion:ee,specVersion:V.specVersion,name:n.name,savedAt:new Date().toISOString(),generator:"portail-editor (unofficial)",lines:n.lines.map((e,t)=>{const o=F(t),s=x(o,e.mode),a={};if(s)for(const r of s.params)a[r.id]=e.bytes[r.index]??0;return{line:t,label:`${o.toUpperCase()} ${(t&7)+1}`,mode:s?.name??`unknown(${e.mode})`,modeIndex:e.mode,params:a,bytes:e.bytes.slice(0,R)}}),globals:n.globals.slice(0,P),modMatrix:n.modMatrix}}class D extends Error{}function E(n,e,t=127){const o=Number(n);if(!Number.isInteger(o)||o<0||o>t)throw new D(`${e} must be an integer 0-${t}, got ${JSON.stringify(n)}`);return o}function Un(n){let e;try{e=JSON.parse(n)}catch(s){throw new D(`That file is not valid JSON (${s instanceof Error?s.message:String(s)}).`)}if(typeof e!="object"||e===null)throw new D("That file does not contain a JSON object.");const t=e;if(t.kind!==ke)throw new D(`That is not a Portail config file (expected "kind": "${ke}", found ${JSON.stringify(t.kind??null)}).`);if(t.configVersion!==ee)throw new D(`This file uses config version ${t.configVersion}, but this editor understands version ${ee}. Update the editor, or export the patch again from the version that wrote it.`);if(!Array.isArray(t.lines)||t.lines.length!==_)throw new D(`Expected exactly ${_} lines, found ${Array.isArray(t.lines)?t.lines.length:"none"}.`);const o=z(typeof t.name=="string"?t.name:"Imported");if(t.lines.forEach((s,a)=>{if(!s||!Array.isArray(s.bytes))throw new D(`Line ${a} has no byte array.`);if(s.bytes.length!==R)throw new D(`Line ${a} has ${s.bytes.length} bytes, expected ${R}.`);const r=s.bytes.map((d,h)=>E(d,`Line ${a} byte ${h}`)),c=F(a),l=E(s.modeIndex??r[0],`Line ${a} mode`);if(!x(c,l))throw new D(`Line ${a} (${c.toUpperCase()} ${(a&7)+1}) uses mode ${l}, which this editor does not know. The file may come from newer firmware.`);r[0]=l,o.lines[a]={mode:l,bytes:r}}),!Array.isArray(t.globals)||t.globals.length!==P)throw new D(`Expected ${P} global bytes, found ${Array.isArray(t.globals)?t.globals.length:"none"}.`);if(o.globals=t.globals.map((s,a)=>E(s,`Global byte ${a}`)),Array.isArray(t.modMatrix)){if(t.modMatrix.length>V.modMatrix.rows)throw new D(`File has ${t.modMatrix.length} modulation rows; the module has ${V.modMatrix.rows}.`);t.modMatrix.forEach((s,a)=>{o.modMatrix[a]={statusHigh:E(s?.statusHigh,`Mod row ${a} status`,15),channel:E(s?.channel,`Mod row ${a} channel`,15),number:E(s?.number,`Mod row ${a} number`),targetLine:E(s?.targetLine,`Mod row ${a} target line`),targetParam:E(s?.targetParam,`Mod row ${a} target parameter`),valueMin:E(s?.valueMin,`Mod row ${a} min`),valueMax:E(s?.valueMax,`Mod row ${a} max`)}})}return o}function Yn(n){const e=n.split(`
`).map(a=>a.trim()).filter(a=>a.length>0);if(e.length<_+1)throw new D(`That does not look like an official editor export: expected at least ${_+1} rows, found ${e.length}.`);const t=e.map(a=>a.split(";").map(r=>r.trim())),o=z("Imported from official editor");for(let a=0;a<_;a++){const r=t[a];if(r.length<R)throw new D(`Row ${a+1} has ${r.length} values, expected ${R}.`);const c=r.slice(0,R).map((h,u)=>E(h,`Row ${a+1} value ${u+1}`,255)),l=F(a);let d=c[0];if(l==="fx"&&d>31&&(d=(d&31)+9),l==="gate"&&(d&=15),!x(l,d))throw new D(`Row ${a+1} has mode ${c[0]}, which is not valid for ${l.toUpperCase()}.`);c[0]=d,o.lines[a]={mode:d,bytes:c}}const s=t[_];s&&s.length>=P&&(o.globals=s.slice(0,P).map((a,r)=>E(a,`Global value ${r+1}`)));for(let a=0;a<V.modMatrix.rows;a++){const r=t[_+1+a];if(!r||r.length<6)break;const c=E(r[0],`Mod row ${a+1} status`,255);o.modMatrix[a]={statusHigh:c>>4,channel:c&15,number:E(r[1],`Mod row ${a+1} number`),targetLine:Number(r[2])<0?127:E(r[2],`Mod row ${a+1} destination`),targetParam:E(r[3],`Mod row ${a+1} parameter`),valueMin:E(r[4],`Mod row ${a+1} min`),valueMax:Number(r[5])<0?0:E(r[5],`Mod row ${a+1} max`)}}return o}function xe(n,e,t){const o=e instanceof Uint8Array?new Blob([e],{type:t}):new Blob([e],{type:`${t};charset=utf-8`}),s=URL.createObjectURL(o),a=document.createElement("a");a.href=s,a.download=n,document.body.appendChild(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function Ve(n){const e=n.trim().replace(/[^a-zA-Z0-9._-]+/g,"-").replace(/^-+|-+$/g,"");return e.length>0?e:"portail-patch"}const Xo=Object.freeze(Object.defineProperty({__proto__:null,FILE_KIND:ke,ImportError:D,download:xe,fromFile:Un,fromLegacyText:Yn,safeFilename:Ve,toFile:en},Symbol.toStringTag,{value:"Module"}));function jo(n){const e=Math.round((Date.now()-n)/1e3);return e<60?"just now":e<3600?`${Math.round(e/60)} min ago`:e<86400?`${Math.round(e/3600)} h ago`:`${Math.round(e/86400)} d ago`}function zo(n,e,t){const o=n.get(),s=e.getState().status==="connected",a=o.presetMeta.filter(c=>c.backedUpAt!==null).length,r=Array.from({length:V.device.preset_slots},(c,l)=>{const d=o.presetMeta[l],h=o.presetBackups[l],u=o.currentPreset===l;return i("div",{class:`preset-row${u?" is-current":""}`},i("span",{class:"preset-num"},String(l+1)),i("div",{},i("input",{id:`preset-name-${l}`,class:"control",type:"text",value:d.name,"aria-label":`Name for preset slot ${l+1}`,onchange:m=>n.setPresetName(l,m.target.value)}),i("span",{class:"preset-backup"},u?"loaded on module · ":"",d.backedUpAt?`backed up ${jo(d.backedUpAt)}`:"no local backup")),i("div",{class:"preset-actions"},k("Load",()=>void t.loadSlot(l),{class:"btn-sm",disabled:!s,title:s?`Tell the module to load slot ${l+1}`:"Needs a connected module"}),k("Save",()=>void t.saveSlot(l),{class:"btn-sm",disabled:!s,title:s?`Overwrite slot ${l+1} on the module`:"Needs a connected module"}),k("↓",()=>{h&&xe(`${Ve(d.name)}-slot${l+1}.portail.json`,JSON.stringify(en(h),null,2),"application/json")},{class:"btn-sm btn-ghost",disabled:!h,title:h?`Export the backup of slot ${l+1}`:"No backup of this slot yet"})))});return i("section",{class:"panel"},i("div",{class:"panel-head"},i("h2",{},"Preset slots"),i("span",{class:"small muted"},`${a}/${V.device.preset_slots} backed up`),i("span",{class:"spacer"}),k("Back up all slots",()=>void t.backupAll(),{class:"btn-sm btn-primary",disabled:!s,title:s?"Read all 8 slots from the module and keep a copy locally":"Needs a connected module"})),i("div",{class:"panel-body tight"},...r),i("div",{class:"panel-body"},i("p",{class:"field-hint"},"Slot names are stored in this browser only — the module has no place to keep them. “Back up all slots” loads each slot in turn, so it changes which preset the module has loaded; it restores your original slot when it finishes.")))}async function Uo(n,e){return ie({title:`Load preset ${n+1} from the module?`,body:e?"The editor currently holds changes that are not on the module. Loading this preset replaces what you are editing with the module’s copy. You can undo it afterwards.":"This tells the module to load that preset, then reads it back into the editor.",confirmLabel:`Load preset ${n+1}`,danger:e})}async function Yo(n,e){return ie({title:`Overwrite preset ${n+1} on the module?`,body:`This writes the configuration currently in the editor to slot ${n+1} (“${e}”) on the module, permanently replacing what is stored there. This cannot be undone from the editor.`,confirmLabel:`Overwrite slot ${n+1}`,danger:!0})}const Ko=[{swatch:"ramp",state:"output active",meaning:"Brightness = the output’s live level (VU-style). A swinging LFO glows; a silent output is dark.",confidence:"confirmed"},{swatch:"#101010",state:"idle",meaning:"Output producing nothing.",confidence:"confirmed"},{swatch:"#00007f",state:"MIDI / clock activity",meaning:"Incoming MIDI and clock ticks.",confidence:"inferred"},{swatch:"#7f0000",state:"preset recalled",meaning:"Marks the LED of a just-loaded preset.",confidence:"confirmed"},{swatch:"#7f7f7f",state:"active / selected",meaning:"The output selected on the module’s own menu.",confidence:"confirmed"},{swatch:"#007f00",state:"saved",meaning:"“Saved” confirmation.",confidence:"inferred"},{swatch:"ramp",state:"MIDI-learn armed",meaning:"The target LED cycles through the palette while mapping.",confidence:"confirmed"},{swatch:"#7f7f00",state:"yellow / cyan / warm-white",meaning:"In the palette, but their exact triggers — and the value→brightness curve and animation timing — are not settled statically.",confidence:"pending"}];function Qo(n){return n==="ramp"?i("span",{class:"led-swatch led-ramp","aria-hidden":"true"}):i("span",{class:"led-swatch",style:`background:${n}`,"aria-hidden":"true"})}const yn={confirmed:"confirmed",inferred:"inferred",pending:"pending — OQ-15"},Jo=[{gesture:"▲ short press",action:"Next preset — recalled instantly (wraps 8 → 1)."},{gesture:"▼ short press",action:"Previous preset (wraps 1 → 8)."},{gesture:"▲ + ▼ together",action:"Save the current config to the active preset."},{gesture:"▼ held at power-up",action:"Firmware-update (bootloader) mode."}];function Zo(){const n=V.ledColors!=null;return i("section",{class:"panel"},i("div",{class:"panel-head"},i("h2",{},"Module reference"),i("span",{class:"small muted"},"lights & buttons")),i("div",{class:"panel-body"},i("h3",{class:"ref-subhead"},"The LEDs"),i("p",{class:"field-hint"},"The Portail’s LEDs are a level-and-state display, not a per-mode colour. Brightness is the output’s live level; colour is the module’s current state. (This is the hardware’s own colour language — separate from the editor’s mode-family card colours.)"),i("div",{class:"led-rows"},...Ko.map(e=>i("div",{class:`led-row${e.confidence==="pending"?" is-pending":""}`},Qo(e.swatch),i("div",{},i("div",{class:"led-state"},e.state,e.confidence==="pending"?i("span",{class:"tag tag-unverified",title:"Needs hardware confirmation (open question OQ-15)."},yn[e.confidence]):i("span",{class:"small muted"},` · ${yn[e.confidence]}`)),i("div",{class:"led-meaning small muted"},e.meaning))))),n?null:i("p",{class:"field-hint"},"Showing the documented palette; the firmware colour block was not bundled."),i("h3",{class:"ref-subhead"},"The two buttons"),i("p",{class:"field-hint"},"A preset selector, not an on-module editor — there is no menu or mode-cycling. [confirmed from firmware]"),i("div",{class:"button-rows"},...Jo.map(e=>i("div",{class:"button-row"},i("span",{class:"button-gesture"},e.gesture),i("span",{class:"button-action small muted"},e.action)))),i("p",{class:"field-hint"},i("span",{class:"tag tag-unverified",title:"Needs a physical press-test (open question OQ-3)."},"unverified"),"Hold-to-repeat timing is inferred, pending confirmation.")))}function Re(n){return new Promise(e=>{const t=i("input",{type:"file",accept:n,style:"display:none"});t.addEventListener("change",()=>e(t.files?.[0]??null)),document.body.appendChild(t),t.click(),setTimeout(()=>t.remove(),0)})}function ea(n,e){const t=n.get().config,o=()=>{xe(`${Ve(t.name)}.portail.json`,JSON.stringify(en(t),null,2),"application/json")},s=()=>{const l=jt(Xt(t));xe(`${Ve(t.name)}.syx`,l,"application/octet-stream")},a=async()=>{const l=await Re(".json,application/json");if(l)try{const d=Un(await l.text());n.replaceConfig(d,`import ${l.name}`),n.toast("success","Imported",`Loaded “${d.name}” into the editor. Nothing sent to the module.`)}catch(d){n.toast("error","Import failed",d instanceof D?d.message:String(d))}},r=async()=>{const l=await Re(".txt,text/plain");if(l)try{const d=Yn(await l.text());n.replaceConfig(d,`import legacy ${l.name}`),n.toast("success","Imported official-editor file","Converted the .txt into the editor. Nothing sent to the module.")}catch(d){n.toast("error","Import failed",d instanceof D?d.message:String(d))}},c=async()=>{const l=await Re(".syx,application/octet-stream");if(l)try{const d=new Uint8Array(await l.arrayBuffer()),{config:h,applied:u,skipped:m}=Ut(zt(d),z(l.name));n.replaceConfig(h,`import ${l.name}`),n.toast("success","Imported .syx",`Decoded ${u} messages${m?`, skipped ${m}`:""}. Nothing sent to the module.`)}catch(d){n.toast("error","Import failed",String(d instanceof Error?d.message:d))}};return i("section",{class:"panel"},i("div",{class:"panel-head"},i("h2",{},"Files")),i("div",{class:"panel-body"},i("div",{class:"stack"},i("div",{class:"row"},k("Export JSON",o,{class:"btn-sm",title:"Save the current config as portable, diffable JSON"}),k("Import JSON",()=>void a(),{class:"btn-sm"})),i("div",{class:"row"},k("Export .syx",s,{class:"btn-sm",title:"Raw SysEx a full send would transmit"}),k("Import .syx",()=>void c(),{class:"btn-sm"})),i("div",{class:"row"},k("Import official-editor .txt",()=>void r(),{class:"btn-sm btn-ghost",title:"Load an output.txt exported by the original editor"})),i("p",{class:"field-hint"},"Importing only changes the editor. Use “Send to module” to write it to hardware."))))}const Kn="portail-editor:disclaimer-ack",qe="Unofficial — use at your own risk. Not made by, affiliated with, or endorsed by eowave. Reverse-engineered; provided as-is with no warranty. You are responsible for your module and your patches. This tool does not flash firmware.";function na(){try{return localStorage.getItem(Kn)==="1"}catch{return!1}}function ta(){try{localStorage.setItem(Kn,"1")}catch{}}function oa(){return na()?Promise.resolve(!0):new Promise(n=>{const e=i("dialog",{class:"confirm disclaimer-modal"}),t=o=>{o&&ta(),e.close(),e.remove(),n(o)};e.appendChild(i("form",{method:"dialog",class:"confirm-inner"},i("h2",{},"Before you connect a module"),i("p",{},qe),i("p",{class:"small muted"},"Firmware updates stay with eowave’s official editor. “eowave” and “Portail” are their owner’s trademarks, used here only to describe compatibility."),i("div",{class:"confirm-actions"},i("button",{type:"button",class:"btn btn-ghost",onclick:()=>t(!1)},"Not now"),i("button",{type:"button",class:"btn btn-primary",onclick:()=>t(!0)},"I understand")))),e.addEventListener("cancel",o=>{o.preventDefault(),t(!1)}),document.body.appendChild(e),e.showModal()})}function aa(n,e){const t=(a,r)=>{const c=e.getView()===a;return i("button",{type:"button",class:`nav-link${c?" is-current":""}`,"data-view-btn":a,...c?{"aria-current":"page"}:{},onclick:()=>e.onView(a)},i("span",{class:"nav-link-text"},r))},o=i("button",{type:"button",class:"unofficial-badge",title:qe,"aria-expanded":"false",onclick:a=>{const r=a.currentTarget,c=r.getAttribute("aria-expanded")==="true";r.setAttribute("aria-expanded",String(!c));const l=document.getElementById("disclaimer-pop");l&&(l.hidden=c)}},"Unofficial · use at your own risk"),s=i("div",{id:"disclaimer-pop",class:"disclaimer-pop notice notice-pending",hidden:!0,role:"note"},i("p",{},qe));n.appendChild(i("header",{class:"masthead"},i("h1",{},"Portail Editor",i("span",{class:"sub"},"unofficial")),o,i("nav",{class:"masthead-nav","aria-label":"View"},t("editor","Editor"),t("tuning","Tuning"),t("hardware","Hardware"),t("manual","Manual")),i("span",{class:"masthead-spacer"}))),n.appendChild(s)}const sa=`# Appendix: the default CC map

Portail has two separate ways for an incoming CC to change a parameter. They are
easy to confuse, and the official manual describes one of them and promises the
other without delivering it.

---

## Two mechanisms

### 1. The CC map — 32 slots you build yourself

Explicit mappings. Each binds one CC on one channel to one parameter of one row,
with **Low note** and **High note** scaling. You create them by MIDI learn in the editor.

This is fully documented: see
[Concepts §7](concepts.md#7-the-cc-map-controls-parameters-from-cc) and
[the editor](editor.md#the-cc-map).

### 2. The default CC map — built into the firmware

A pre-assigned CC for most parameters, active without you configuring anything.
The official manual describes it as:

> "By default, each parameter except the channel is assigned to a cc mapping who
> will be specified next to it."

and then writes the placeholder \`(CC##)\` next to six parameters and nothing at
all next to the rest. **The map itself is never given.** It is the most
frequently promised and never-delivered item in the document — see
[audit §1](audit.md).

---

## What is confirmed about the default map

- **It exists**, and it is stored in firmware rather than in the editor.
- **It is readable over SysEx.** The editor requests it with command 19 and
  displays a CC number next to each parameter once connected.
- **It is indexed by row and parameter.** The editor's storage is a flat array
  addressed as \`(row × 8) + (parameter − 2)\`, covering 24 rows of 8 parameters —
  192 entries. The offset of 2 skips the **Mode** and **Channel** parameters, which
  matches the manual's "each parameter except the channel".
- **It can be switched off**, with the global **Disable default midi mapping**
  setting.
- **The global CC channel** selects which MIDI channel it listens on.

---

## What is not confirmed

\`TODO(verify)\`: **the actual CC number assigned to each parameter.**

The values live in firmware and appear in no primary source. They are not in the
editor's source, because the editor reads them from the module.

### Reading your module's map

This is the reliable way to find out, and it takes a few minutes:

1. Connect the module to the editor and select it.
2. Read the current configuration from the module. The editor requests the
   mapping table as part of this.
3. **Look at the parameter labels.** Once the map has been read, the official
   editor appends the assigned CC number in brackets to each parameter's label —
   the label text becomes the first five characters of the name followed by the
   CC number in parentheses.
4. Work through the rows and write down what you see.

The map is per row *and* per parameter, so a full readout is up to 192 entries.
In practice you only need the rows you are using.

### Recording it

If you produce a full readout, it belongs here. A useful format:

| Row | Parameter | Default CC |
|---|---|---|
| CV 1 | **Voice mode** | \`TODO(verify)\` |
| CV 1 | **Bend range** | \`TODO(verify)\` |
| … | … | |

---

## Why this matters even if you never use it

**The default map is active unless you disable it.** So a CC you send for some
other purpose may be changing a Portail parameter you did not intend to change.

If a parameter drifts while you play, or a patch behaves differently after you
touch a controller, the default map is a strong suspect. Two things to try:

- **Turn on Disable default midi mapping** in the global settings, then save.
  If the problem stops, the default map was the cause.
- **Move the global CC channel** to a channel nothing else uses. That leaves the
  map active but out of the way of your playing.

---

## CC numbers that are spoken for

Regardless of the default map, these CCs already have jobs on Portail:

| MIDI CC | Used by | Notes |
|---|---|---|
| 1 | [Note](modes/note.md) vibrato depth | On every Note output, on its own channel. Not optional and not configurable |
| 1 upward | [Sequencer](modes/seq.md) step values | A Sequencer output with **Steps** \`8\` consumes CC1–CC8 on its channel |
| Whatever you map | CC map | 32 slots, on the global CC channel |
| Unknown | Default map | Until you read it or disable it |

**The safe range is CC 20–31.** Those are conventionally undefined in the MIDI
specification, so most controllers and DAWs leave them alone. Use them for your
own [MIDI CC](modes/cc.md) outputs and CC map slots and you will avoid nearly
all collisions.

**Avoid CC 1** for anything general-purpose. It will make your pitch wobble on
any channel that has a Note output with \`vibrato\` set.

---

## Related

- [Concepts §7](concepts.md#7-the-cc-map-controls-parameters-from-cc)
- [The editor → the CC map](editor.md#the-cc-map)
- [Appendix: SysEx notes](appendix-sysex.md)
- [unverified.md](unverified.md)
`,ia='# Appendix: parameter tables\n\nEvery value list in full, in index order. Index numbers matter because they are\nwhat a [CC map](concepts.md#7-the-cc-map-controls-parameters-from-cc)\nmapping\'s **Low note** and **High note** refer to, and what a saved configuration file contains.\n\nGenerated from `spec/model.json`, which is derived mechanically from the shipped\neditor\'s parameter tables. Where a value here disagrees with the official manual,\nthe official manual is wrong — see [audit §3](audit.md).\n\n---\n\n## Voltage ranges\n\n### CV outputs (`range_cv_menu`)\n\nUsed by every mode on a CV output.\n\n| # | Value | # | Value | # | Value |\n|---|---|---|---|---|---|\n| 0 | `+/-5 V` | 4 | `3 V` | 8 | `-2 V` |\n| 1 | `10 V` | 5 | `2 V` | 9 | `-3 V` |\n| 2 | `5 V` | 6 | `1 V` | 10 | `-4 V` |\n| 3 | `4 V` | 7 | `-1 V` | 11 | `-5 V` |\n\n`+/-5 V` at index 0 is bipolar. Indices 7-11 are inverting: full scale\nproduces a negative voltage.\n\n### CV outputs with note scale (`range_cv_note_menu`)\n\nUsed by CC and CC recorder on CV outputs. Identical to the above plus one\nextra option.\n\n| # | Value | # | Value | # | Value |\n|---|---|---|---|---|---|\n| 0 | `+/-5 V` | 5 | `2 V` | 10 | `-4 V` |\n| 1 | `10 V` | 6 | `1 V` | 11 | `-5 V` |\n| 2 | `5 V` | 7 | `-1 V` | 12 | **Note** `scale` |\n| 3 | `4 V` | 8 | `-2 V` |  |  |\n| 4 | `3 V` | 9 | `-3 V` |  |  |\n\n**Note** `scale` makes the output produce 1 V/oct pitch steps instead of a\ncontinuous voltage.\n\n### Gate outputs (`range_gate_menu`)\n\nUsed by every mode on a Gate output. Positive only.\n\n| # | Value | # | Value | # | Value |\n|---|---|---|---|---|---|\n| 0 | `10 V` | 4 | `6 V` | 8 | `2 V` |\n| 1 | `9 V` | 5 | `5 V` | 9 | `1 V` |\n| 2 | `8 V` | 6 | `4 V` |  |  |\n| 3 | `7 V` | 7 | `3 V` |  |  |\n\n### Trig minimum level (`invert_range_gate_menu`)\n\nThe **Level min** parameter on Trigger, on both banks.\n\n| # | Value | # | Value | # | Value |\n|---|---|---|---|---|---|\n| 0 | `0 V` | 4 | `4 V` | 8 | `8 V` |\n| 1 | `1 V` | 5 | `5 V` | 9 | `9 V` |\n| 2 | `2 V` | 6 | `6 V` |  |  |\n| 3 | `3 V` | 7 | `7 V` |  |  |\n\n---\n\n## Clock divisions\n\n**Clock division** — used by Clock, Sequencer, Euclidean, Arpeggiator, Random and CC recorder.\n23 values.\n\n| # | Value | # | Value | # | Value |\n|---|---|---|---|---|---|\n| 0 | `4/1` | 8 | `4/1T` | 16 | `4/1.` |\n| 1 | `2/1` | 9 | `2/1T` | 17 | `2/1.` |\n| 2 | `1/1` | 10 | `1/1T` | 18 | `1/1.` |\n| 3 | `1/2` | 11 | `1/2T` | 19 | `1/2.` |\n| 4 | `1/4` | 12 | `1/4T` | 20 | `1/4.` |\n| 5 | `1/8` | 13 | `1/8T` | 21 | `1/8.` |\n| 6 | `1/16` | 14 | `1/16T` | 22 | `1/16.` |\n| 7 | `1/32` | 15 | `1/32T` |  |  |\n\n`T` is a triplet, `.` is dotted. `1/1` is one bar of 4/4.\n\n## LFO divisions\n\n**Clock division** — used only by LFO. 25 values. Note the two extra slow\noptions at the top that the clock list does not have.\n\n| # | Value | # | Value | # | Value |\n|---|---|---|---|---|---|\n| 0 | `32/1` | 9 | `1/32` | 18 | `4/1.` |\n| 1 | `16/1` | 10 | `4/1T` | 19 | `2/1.` |\n| 2 | `4/1` | 11 | `2/1T` | 20 | `1/1.` |\n| 3 | `2/1` | 12 | `1/1T` | 21 | `1/2.` |\n| 4 | `1/1` | 13 | `1/2T` | 22 | `1/4.` |\n| 5 | `1/2` | 14 | `1/4T` | 23 | `1/8.` |\n| 6 | `1/4` | 15 | `1/8T` | 24 | `1/16.` |\n| 7 | `1/8` | 16 | `1/16T` |  |  |\n| 8 | `1/16` | 17 | `1/32T` |  |  |\n\n---\n\n## Envelope times\n\n**Attack**, **Decay** and **Release** on [Envelope](modes/env.md) share one 128-entry\nexponential table. Selected points:\n\n| Index | Time | Index | Time |\n|---|---|---|---|\n| 0 | `2.1 ms` | 76 | `80.0 ms` |\n| 1 | `2.2 ms` | 85 | `171.9 ms` |\n| 10 | `2.9 ms` | 95 | `493.4 ms` |\n| 20 | `4.2 ms` | 101 | `1073.7 ms` |\n| 30 | `6.2 ms` | 110 | `4628.2 ms` |\n| 41 | `10.0 ms` | 115 | `11184.8 ms` |\n| 50 | `15.6 ms` | 120 | `26843.5 ms` |\n| 60 | `27.1 ms` | 124 | `67108.9 ms` |\n| 70 | `51.5 ms` | 127 | `134217.7 ms` |\n\nFull range: `2.1 ms` to `134217.7 ms`. The official manual claims\n"between 0 ms and 13 secondes", which is wrong at both ends.\n\n## Rise and fall times\n\n**Rise** and **Fall** on [Gate](modes/gate.md) share a 100-entry exponential table\n(`OFF` plus 99 steps). Computed from the editor\'s source:\n\n| Index | Time | Index | Time |\n|---|---|---|---|\n| 0 | `OFF` | 80 | `1.49 s` |\n| 1 | `13 ms` | 85 | `3.35 s` |\n| 10 | `18 ms` | 90 | `10.32 s` |\n| 20 | `26 ms` | 93 | `16.78 s` |\n| 30 | `38 ms` | 95 | `22.37 s` |\n| 40 | `60 ms` | 97 | `33.56 s` |\n| 50 | `104 ms` | 98 | `44.74 s` |\n| 60 | `200 ms` | 99 | `67.11 s` |\n| 70 | `464 ms` |  |  |\n\nFull range: `OFF`, then `13 ms` to `67.11 s`. The official manual calls\nthis "a small attack envelope".\n\n## Vibrato rates\n\n`vibrato` on [Note](modes/note.md) — `OFF` plus 99 steps. Depth comes from\nCC#1, not from this control.\n\n| Index | Rate | Index | Rate |\n|---|---|---|---|\n| 0 | `OFF` | 60 | `3.87 Hz` |\n| 1 | `0.06 Hz` | 70 | `6.91 Hz` |\n| 10 | `0.18 Hz` | 80 | `12.34 Hz` |\n| 20 | `0.36 Hz` | 90 | `21.99 Hz` |\n| 30 | `0.66 Hz` | 95 | `29.38 Hz` |\n| 40 | `1.19 Hz` | 99 | `37.07 Hz` |\n| 50 | `2.15 Hz` |  |  |\n\nFull range: `OFF`, then `0.06 Hz` to `37.07 Hz`.\n\n## Gate delay times\n\n**Amount** on the [Delay](fx/delay.md) FX slot — 128 steps of about\n8.2 ms.\n\n| Index | Delay | Index | Delay |\n|---|---|---|---|\n| 0 | `0 ms` | 64 | `524 ms` |\n| 1 | `8 ms` | 80 | `656 ms` |\n| 10 | `82 ms` | 96 | `787 ms` |\n| 25 | `204 ms` | 110 | `901 ms` |\n| 50 | `409 ms` | 127 | `1041 ms` |\n\nFull range: `0 ms` to `1041 ms`.\n\n---\n\n## Enumerations\n\n**Note mode voice assignment** — **Voice mode** on Note. 7 values:\n\n`Mono last`, `Mono low`, `Mono high`, `Poly group 1`, `Poly group 2`, `Poly group 3`, `Poly group 4`\n\n**Envelope types** — **Mode** on Envelope. 4 values:\n\n`AR`, `AD`, `ADSR`, `Loop`\n\n**LFO waveforms** — **Waveform** on LFO. 7 values:\n\n`Saw up`, `Saw down`, `Square`, `Triangle`, `Sine`, `Noise`, `random`\n\n**LFO phase modes** — **Phase mode** on LFO. 3 values:\n\n`Continuous`, `Note reset`, `Gated`\n\n**Clock event types** — **Trigger source** on Clock. 3 values:\n\n`Clock`, `Start/stop`, `Reset`\n\n**Sequencer direction** — `dir` on Sequencer and Arpeggiator. 4 values:\n\n`Forward`, `Backward`, `Pendulum`, `random`\n\n**Sequencer output type (CV)** — **Voice mode** on Sequencer, CV bank. 2 values:\n\n`notes`, `cc`\n\n**Sequencer output type (Gate)** — **Mode** on Sequencer, Gate bank. 2 values:\n\n`Gates`, `cc`\n\n**Swing** — **Swing** on Clock and Arpeggiator. 6 values:\n\n`OFF`, `55%`, `60%`, `75%`, `80%`, `90%`\n\n**Arpeggiator range** — **Level range** on Arpeggiator. 4 values:\n\n`1 OCT`, `2 OCT`, `3 OCT `, `4 OCT`\n\n**Random trigger source** — **Trigger source** on Random. 2 values:\n\n`Note`, `Clock`\n\n**Gate/Trig/Vel/Env source** — **Trigger source** where it selects a CV output. 9 values:\n\n`Note`, `CV1`, `CV2`, `CV3`, `CV4`, `CV5`, `CV6`, `CV7`, `CV8`\n\n**Logic functions** — **Function** on Logic. 7 values:\n\n`AND`, `OR`, `NAND`, `NOR`, `XOR`, `XNOR`, `NOT`\n\n**Random velocity mix** — **Mode** on Random velocity. 3 values:\n\n`Added`, `Subtracted`, `Replaced`\n\n**Pitch bend range** — **Bend range** on Note, in semitones. 24 values:\n\n`+/-1`, `+/-2`, `+/-3`, `+/-4`, `+/-5`, `+/-6`, `+/-7`, `+/-8`, `+/-9`, `+/-10`, `+/-11`, `+/-12`, `+/-13`, `+/-14`, `+/-15`, `+/-16`, `+/-17`, `+/-18`, `+/-19`, `+/-20`, `+/-21`, `+/-22`, `+/-23`, `+/-24`\n\n**Semitone ranges** — **Level range** on Random (CV) and Random note. 47 values:\n\n`+/-1`, `+/-2`, `+/-3`, `+/-4`, `+/-5`, `+/-6`, `+/-7`, `+/-8`, `+/-9`, `+/-10`, `+/-11`, `+/-12`, `+/-13`, `+/-14`, `+/-15`, `+/-16`, `+/-17`, `+/-18`, `+/-19`, `+/-20`, `+/-21`, `+/-22`, `+/-23`, `+/-24`, `+/-25`, `+/-26`, `+/-27`, `+/-28`, `+/-29`, `+/-30`, `+/-31`, `+/-32`, `+/-33`, `+/-34`, `+/-35`, `+/-36`, `+/-37`, `+/-38`, `+/-39`, `+/-40`, `+/-41`, `+/-42`, `+/-43`, `+/-44`, `+/-45`, `+/-46`, `+/-47`\n\n**Transpose octaves** — **Octaves** on Transpose. 9 values:\n\n`-4`, `-3`, `-2`, `-1`, `0`, `1`, `2`, `3`, `4`\n\n**Random octave range** — **Level range** on Random octave. 5 values:\n\n`0`, `1`, `2`, `3`, `4`\n\n**Microtonal tables** — **Tuning table** on Microtonal. 8 values:\n\n`table  1`, `table  2`, `table  3`, `table  4`, `table  5`, `table  6`, `table  7`, `table  8`\n\n**FX destinations (note domain)** — **Target** on Note FX. 8 values:\n\n`CV 1`, `CV 2`, `CV 3`, `CV 4`, `CV 5`, `CV 6`, `CV 7`, `CV 8`\n\n**FX destinations (gate domain)** — **Target** on Gate FX. 8 values:\n\n`GATE 1`, `GATE 2`, `GATE 3`, `GATE 4`, `GATE 5`, `GATE 6`, `GATE 7`, `GATE 8`\n\n---\n\n## Numeric ranges\n\n| Parameter | Where | Range |\n|---|---|---|\n| **Channel** | everywhere | `ch 1` - `ch 16` |\n| **CC number** | CC, CC recorder | `0` - `127` |\n| `Note`, **Low note**, **High note**, **Base note** | several | `C-2` - `G8` (MIDI 0-127) |\n| `Note` on Trigger/Envelope | Trigger, Envelope | `all`, then `C#-2` - `G8` |\n| **Length** (steps) | Sequencer, CC recorder | `1` - `64` |\n| **Steps**, **Fills** | Euclidean | `1` - `64` |\n| **Rotate** | Euclidean | `0` - `63` |\n| **Length** (time) | Trigger, Random gate | `Latch`, then `1 ms` - `127 ms` |\n| **Gate length** | Clock, Sequencer gate, Euclidean | `1 ms` - `128 ms` |\n| **Sustain** | Envelope | `0` - `100` |\n| **Glide**, **Slew** | Note, Sequencer, Random | `OFF`, then `1` - `100` or `1` - `127` |\n| **Slew** | MIDI CC, Aftertouch, Poly aftertouch, Pitch bend | `OFF`, then `1` - `100` (Gate) or `1` - `127` (CV) |\n| **Probability**, **Probability**, **Amount** | several FX slots | `0%` - `100%` |\n| **Semitones** | Transpose | `-63` - `+64` |\n| **Amount** | Accumulate | `0` - `63`, then `0` - `-63` |\n| **Reset after** | Accumulate | `1` - `128` |\n| Tempo | global | `30` - `250` BPM from the slider; `30` - `284` in 2 BPM steps via a CC mapping |\n\n## Note numbering\n\nMIDI note 0 is `C-2`. MIDI note 60 — middle C — is **`C3`**. MIDI note 127 is\n`G8`.\n\nIf your keyboard calls middle C `C4`, every note name in this manual is one\noctave below the name your keyboard shows for the same key.\n\n',ra=`# Appendix: scales and microtonal tables

---

## The 24 scales

Available in [Scale](fx/scale.md)'s **Scale** parameter, in menu order.

| # | Name | Notes |
|---|---|---|
| 0 | \`chromatic\` | All twelve. The default, and a no-op |
| 1 | \`major\` | Ionian |
| 2 | \`minor\` | Natural minor / Aeolian |
| 3 | \`harmonic minor\` | Minor with a raised seventh |
| 4 | \`pentatonic major\` | Five notes, no semitone clashes |
| 5 | \`pentatonic minor\` | Five notes, the safest choice for random sources |
| 6 | \`blues\` | Minor pentatonic plus the flat fifth |
| 7 | \`dorian\` | Minor with a raised sixth |
| 8 | \`phrygian\` | Minor with a flattened second |
| 9 | \`lydian\` | Major with a raised fourth |
| 10 | \`mixolydian\` | Major with a flattened seventh |
| 11 | \`locrian\` | Diminished fifth; unstable by design |
| 12 | \`whole note\` | Whole-tone. Six notes, no tonal centre |
| 13 | \`diminished\` | Alternating semitone and tone |
| 14 | \`whole half diminished\` | The other diminished mode |
| 15 | \`quint\` | Fifths |
| 16 | **Octaves** | Root only, in every octave |
| 17 | \`major chord\` | Root, third, fifth |
| 18 | \`minor chord\` | Root, flat third, fifth |
| 19 | \`major 7th chord\` | Root, third, fifth, seventh |
| 20 | \`minor 7th chord\` | Root, flat third, fifth, flat seventh |
| 21 | \`major 6th chord\` | Root, third, fifth, sixth |
| 22 | \`minor 6th chord\` | Root, flat third, fifth, sixth |
| 23 | \`minor dim 7 chord\` | Diminished seventh |

The official manual lists none of them, saying only "Select the scale". See
[audit §13](audit.md).

\`TODO(verify)\`: the exact interval content of each. The names above are standard
and the intervals given are the conventional readings, but the firmware's actual
tables are not published. **Test:** set a CV output to \`Note\`, add Scale with
**Root note** \`C\`, select a scale, and play a chromatic octave from \`C3\` upward while
watching which output pitches appear. Notes that map onto the same output pitch
as their neighbour are not in the scale. That gives you the scale's degrees
directly.

The last seven entries are chords rather than scales, which makes them more
aggressive quantisers — they collapse twelve pitch classes onto three or four.
That is useful: point a [Random](modes/random.md) output at \`major chord\` and you
get broken-chord arpeggios rather than a melody. **Octaves** collapses everything to
the root, turning randomness into octave jumps.

### Root note

**Root note** is a separate parameter with twelve values: \`C\`, \`C#\`, \`D\`, \`D#\`,
\`E\`, \`F\`, \`F#\`, \`G\`, \`G#\`, \`A\`, \`A#\`, \`B\`.

It sets the key, not the starting note of the part. \`pentatonic minor\` with
**Root note** \`A\` is A minor pentatonic wherever in the register you happen to be
playing.

---

## The 8 microtonal tables

[Microtonal](fx/microtonal.md)'s **Tuning table** parameter offers \`table 1\`
through \`table 8\`. This was one of the module's biggest unknowns; the firmware
(version 0.83r) has now settled it.

### What they contain

**All eight ship as identical standard 12-tone equal temperament** — 100 cents
per semitone, zero deviation. Confirmed from the firmware.

| Pitch class | C | C♯ | D | D♯ | E | F | F♯ | G | G♯ | A | A♯ | B |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Factory cents, all 8 tables** | 0 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 | 1100 |
| **Deviation from 12-TET** | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

There are **no exotic factory tunings**. The eight tables are **empty,
user-customisable slots** whose reset default is plain equal temperament — which
is why the editor lists them as bare "table 1 … 8" with no names. Nothing is
pre-loaded, so there is nothing to name.

\`table 1\` is therefore a **confirmed safe standard-tuning default**: you can leave
Microtonal in a chain on \`table 1\` and it will not change your pitch.

### Format

| Property | Value |
|---|---|
| Count | 8 tables |
| Definition | 12 values, one per pitch class (C, C♯ … B) |
| Unit | **cents**, 14-bit |
| Expansion | \`note_cents = (octave × 1200) + table[pitch class]\` |
| Persistent storage | device flash — **not** in the firmware image |
| Wire write | SysEx opcode \`0x24\`, twelve 14-bit cents values |

Because a table lives in the module's own flash rather than in the firmware image,
**a customised table can only be read back off the physical module** — it cannot
be derived from the firmware the way the factory default was.

### Reading a table a module has been given

You only need this if a table has been **customised** away from the default; a
factory table is standard tuning and needs no measuring.

1. Set CV 1 to **Mode** \`Note\`, **Channel** \`ch 1\`, no FX slots.
2. Play \`C3\` through \`C4\` chromatically, measuring the jack at each semitone. This
   is your **12-TET reference**: twelve equal steps of 83.3 mV, C4 exactly 1.000 V
   above C3.
3. Add \`FX 1: Microtonal, Target CV 1, Tuning table\` set to the slot to read.
4. Repeat the measurement. Each step that differs from 83.3 mV is that pitch
   class's tuning. Convert with **cents = millivolts × 1.2** (83.3 mV = 100 cents).

A factory table simply measures as even 83.3 mV steps, confirming it is untouched.

### Recording a customised table

If a module carries custom tunings and you measure them, this is a useful format —
this is per-module data, not a fact about all Portails:

| Table | Reads as | Cents per pitch class (C … B) |
|---|---|---|
| 1 | 12-TET (factory) | 0 100 200 … 1100 |
| 2 | (whatever the owner stored) | |
| … | | |

### Editing a table

Author and send tunings from the editor's
**[Tuning tab](editor.md#the-tuning-tab)**: enter twelve cents values per table
(C is normally 0, but the root is editable — a non-zero root transposes the whole
table; the module adds the octave), or import a Scala \`.scl\` file, then send to
table 1–8. Only 12-note, octave-repeating scales fit the module's tables.

A factory **Quarter-tone (24-TET offset)** tuning ships — every pitch class +50
cents. One table holds only 12 pitch classes, so full 24-TET (24 pitches/octave)
does not fit a single table and a 24-note \`.scl\` is refused on import; instead
pair one output on 12-TET with a second on the quarter-tone table, and together
they cover the full 24-TET set — the approach for quarter-tone music like
**Angine de Poitrine**.

The write format is firmware-derived and not yet hardware-confirmed, so the first
send asks for confirmation and the tuning stays **Unverified** until you check it
plays in tune; and a sent tuning writes to **working memory**, so it may not
survive a power-cycle — re-send after power-on. Reading a table (the procedure
above) is unaffected. Full detail on the
[Tuning tab](editor.md#honesty-what-the-app-can-and-cannot-promise).

---

## Related

- [Scale](fx/scale.md) — quantising to a scale
- [Microtonal](fx/microtonal.md) — retuning
- [Recipes → microtonal and scale playback](recipes/microtonal.md)
- [unverified.md](unverified.md)
`,la=`# Appendix: SysEx notes

Portail is configured entirely over MIDI System Exclusive. The official manual
tells you this is possible — "you can configure it via your phone/tablet/computer
(or SYSEX messages)" — and then documents not one message. See
[audit §13](audit.md).

**The full protocol lives in \`spec/protocol.md\`.** That file is the authority —
it was reverse-engineered from the editor's source, the manual, **and a
disassembly of the official firmware image**, and it tags every claim with how it
was confirmed. This page gives the shape of it, enough to know what is possible
and where to look.

The firmware analysed reports itself as version **0.83r**.

---

## Message format

Every message follows the same frame:

\`\`\`
F0  06  29  <command>  <payload…>  F7
\`\`\`

- \`F0\` — SysEx start
- \`06 29\` — the two address bytes Portail responds to. The editor's source calls
  them \`MSB_ADD\` and \`LSB_ADD\`.

  **This is not a valid MIDI manufacturer ID**, and \`06\` collides with the ID
  registered to Moog Music. A tool pointed at the wrong MIDI port can therefore
  send Portail configuration data to unrelated gear. Any editor should require a
  successful version handshake before enabling writes — \`spec/protocol.md\` §1.2
  covers this.
- \`<command>\` — one byte, see below
- \`<payload>\` — command-dependent, always 7-bit values
- \`F7\` — SysEx end

All data bytes are 7-bit, as SysEx requires. Values above 127 are split into
MSB and LSB pairs — the tempo is the one place this shows up in normal use.

---

## What the commands do

Grouped by purpose. Command numbers are from the editor's source.

### Reading and writing output configuration

| Command | Purpose |
|---|---|
| 0 | Read a Gate output |
| 1 | Write a Gate output |
| 2 | Read a CV output |
| 3 | Write a CV output |
| 8 | Read an FX row |
| 9 | Write an FX row |

A row is **9 bytes**: the mode, then eight parameter values. Which parameters
those eight are depends on the mode — see
[Appendix: parameter tables](appendix-parameter-tables.md) and the mode pages.

Rows are addressed 0–7 within each family. The editor's internal numbering treats
them as one flat list of 24: 0–7 are CV, 8–15 are Gate, 16–23 are FX.

### Presets

| Command | Purpose |
|---|---|
| \`0x04\` | Recall a preset |
| \`0x05\` | Query the active preset |
| \`0x06\` | Initialise everything |
| \`0x07\` | Save live memory to the **active** preset |

Three things about presets that no other source states, all confirmed from the
firmware:

- **Presets have no names.** No opcode reads or writes one, and the storage has
  no room for one. The editor's dropdown strings are hard-coded.
- **There is no "save to preset N".** Save always targets the active preset. To
  write preset 5 you must recall preset 5 first — which discards unsaved edits.
- **The numbering is asymmetric.** Recall takes \`1\`–\`8\`; the query returns \`0\`–\`7\`.
  Recall with \`0\` does not error — it wraps and recalls preset 8.

There is also no way to enumerate presets. Reading all eight means recalling each
in turn and reading it back, which leaves a different preset active than when you
started.

Command \`0x06\` is a full reset. Treat it with care — there is no published way to
restore factory presets afterwards. See
[the editor](editor.md#backing-up).

### Global settings

| Command | Purpose |
|---|---|
| 10 | Set all global parameters |
| 11 | Read global parameters |
| 17 | Set MIDI out copy |
| 23 | Set tempo |
| 24 | Set start/stop |
| 25 | Set clock sync source |
| 26 | Set reset-on-continue |
| 29 | Set default-mapping mode |
| 32 | Set the global CC channel |

The global block is **8 bytes**:

| Byte | Meaning |
|---|---|
| 0 | Clock start/stop |
| 1 | Clock source — internal or external |
| 2 | Tempo MSB |
| 3 | Tempo LSB |
| 4 | MIDI out copy on/off |
| 5 | Reset on continue on/off |
| 6 | Global CC channel, 1–16 |
| 7 | Disable default MIDI mapping |

Tempo is reassembled as \`(MSB << 7) | (LSB & 0x7F)\`, in BPM.

### The CC map

| Command | Purpose |
|---|---|
| \`0x12\` | Write a CC map slot |
| \`0x13\` | Read a CC map slot |

A mapping slot is 7 fields: the MIDI message type, the channel, the CC or note
number, the destination row, the parameter index within that output, and the **Low note**
and **High note** scaling values. There are 32 slots.

### Housekeeping

| Command | Purpose |
|---|---|
| \`0x22\` | Get firmware version |
| \`0x23\` | Check connection |

\`0x23\` is a bare liveness ping. **The reply carries no manufacturer, model or
serial information** — there is no identity exchange in this protocol at all. The
editor sends it periodically and shows "lost connection !!" when no reply
arrives.

There is also **no checksum, no length field and no ACK** on any message in
either direction. The only way to know a write landed is to read the line back
and compare.

### Calibration and file transfer — undocumented

| Command | Name in the editor's source | Status |
|---|---|---|
| \`0x0C\` | \`SYS_SET_CALIB\` | Implemented in firmware. No editor control sends it |
| \`0x0D\` | \`SYS_SET_CALIB2\` | **Declared by the editor, absent from the firmware.** A no-op |
| \`0x0F\` | \`SYS_SET_CALIB_DAC\` | Implemented in firmware. No editor control sends it |
| \`0x0E\` | \`SYS_RECEIVE_FILE\` | Implemented. No editor control sends it |
| \`0x10\` | \`SYS_VIEW_FILE\` | Implemented. No editor control sends it |

Unreachable from any editor's interface. The calibration opcodes are the only
sign that [calibration](specifications.md#calibration) exists at all.

\`TODO(verify)\`: the payload format for all of them. Nothing documents them.

**Opcode \`0x24\` (36) writes a microtonal tuning table** — confirmed from the
firmware. It carries **twelve 14-bit cents values**, one per pitch class. This is
the format the editor's [Tuning tab](editor.md#the-tuning-tab) uses to send a
tuning to table 1–8.

\`TODO(verify)\`: the write format is firmware-derived, not yet hardware-confirmed —
the Tuning tab gates the first send behind a confirmation and marks the tuning
Unverified until it is checked on hardware. A sent table writes to working memory;
there is no confirmed save-to-flash path, so it may not survive a power-cycle.

**Do not experiment with the calibration commands on a working module.** A
mis-formed calibration payload is the one plausible way to leave the outputs
producing wrong voltages with no documented route back. See
[Can I break my module?](troubleshooting.md#can-i-break-my-module).

---

## Firmware update does not use SysEx

There is no SysEx path for firmware. Updates use the RP2040's built-in
bootloader and a drag-and-dropped \`.uf2\` file, so nothing sent over MIDI can
corrupt the firmware — and a failed update is recoverable by repeating the
drag-and-drop. See
[Can I break my module?](troubleshooting.md#can-i-break-my-module) and
[the editor](editor.md#firmware-updates).

---

## Timing

The editor spaces its messages deliberately: 5 ms between row writes, and a
pause before the save command. A full configuration is 24 rows plus globals plus
32 mappings — around 57 messages.

If you write your own tool, do the same. Sending the whole configuration as fast
as your MIDI stack allows risks overrunning the module's input buffer.

---

## Backup file format

The official editor's **save to file** produces plain text:

- 24 lines, one per row, nine semicolon-separated values each
- one line of global parameters
- 32 lines of CC map slots, six values each

Readable, diffable, and reasonable to keep in version control. This is the only
backup of a preset that lives off the module — see
[the editor](editor.md#backing-up).

The companion editor in \`app/\` uses JSON for import and export instead. Both
describe the same underlying 9-byte rows.

---

## Related

- \`spec/protocol.md\` — the authoritative protocol description
- \`spec/model.json\` — the parameter model, mechanically derived
- [Appendix: parameter tables](appendix-parameter-tables.md) — what the values in
  each output byte mean
- [Appendix: default CC map](appendix-cc-map.md)
`,ca=`# Audit of the official Portail manual

**Source audited:** \`portail_manual_v1.pdf\`, 30 pages, title page reads
"Portail MIDI to CV Converter: User Manual V0.9". Retrieved from the Google Drive
link on <https://www.eowave.com/modules/portail> and saved to
\`research/portail_manual_v1.pdf\`. A plain-text extraction is at
\`research/portail_manual_v1.txt\`.

**Cross-checked against:** the shipped web editor's source
(\`research/original-editor/\`), which contains the canonical parameter tables
(\`js/menu.js\`, \`js/notes.js\`), the SysEx command set (\`js/midi.js\`), and the
editor's per-type default values (\`js/about.js\`); plus the product page
(\`research/eowave-portail-page.html\`).

Everything below is a defect in the *document*, not in the module. The hardware
is more capable than its manual manages to convey. That gap is the whole reason
this rewrite exists.

---

## 1. It is an unfinished draft, and it says so

The version string is **V0.9**. More to the point, the placeholder
cross-references were never filled in. The manual ships with them intact:

- \`"start using one of the 8 preset of the Portail ( see p# or connect it to the editor)"\`
- \`"Disable default midi mapping: disable the cc control grid ( see p#)"\`
- \`"See chapter # at the end of the manual for upgrade details."\`
- \`"If you want to reassign the CC, see the chapter#"\`

The output-type index on page 6 is a table of seventeen rows in which **every
single page number is the literal string \`Page#\`**:

\`\`\`
Note    CV   Page#
Gate    D-GATE   Page#
Trig    CV & D-GATE  Page#
...
CC RECORDER (Sequencer) CV              Page#
\`\`\`

The effect index on page 21 does the same thing for all eight entries listed
there. So the two tables whose only job is navigation navigate nowhere.

The same applies to the CC assignments. The manual promises:

> "By default, each parameter except the channel is assigned to a cc mapping who
> will be specified next to it."

and then writes the placeholder \`(CC##)\` next to six parameters — Length,
Velocity sensitive, Minimum, Range, Range, Filter — and nothing at all next to
the rest. **The default CC map is never given.** This is the single most
frequently promised and never-delivered item in the document.

**What the rewrite does:** [Appendix: default CC map](appendix-cc-map.md) explains
what the map actually is, how to read it out of your own module, and marks the
values \`TODO(verify)\` because they live in firmware and are not in any primary
source I could obtain.

---

## 2. It contradicts itself about how many presets exist

Page 2:

> "It can stock up to **16** configuration preset"

Page 3:

> "start using one of the **8** preset of the Portail"

The editor source settles it — \`inline-script.js\` builds the preset menu with
\`for (let i = 1; i <= 8; i++)\` — and the product page's feature list agrees:
"8 preset configurable via the app". The number is 8. A reader who only has the
manual has no way to know which of its two answers to trust.

---

## 3. Mode descriptions do not say what comes out of the jack

This is the deepest structural problem. The manual describes each mode in terms
of the MIDI message going in, and then describes each parameter as a restatement
of the parameter's own name. It almost never states the voltage, the polarity,
the timing, or the shape of the signal that appears at the jack.

The pattern repeats verbatim across nine modes:

> **Range :**
> Set the range of the CV output

> **Filter :**
> Choose the amount of filtering on the cv output (glide time)

"Set the range of the CV output" is not a description of a range. The reader
wants to know: *which* ranges? The editor's \`range_cv_menu\` answers it — the
choices are \`+/-5V, 10V, 5V, 4V, 3V, 2V, 1V, -1V, -2V, -3V, -4V, -5V\`, twelve
options, and a Gate output gets a completely different list
(\`range_gate_menu\`: \`10V\` down to \`1V\`, ten options). **Neither list appears
anywhere in the manual.** Nor does the fact that the two output banks have
different range menus at all.

Likewise:

- **Glide** on a Note output. The manual says "Set the glide time between two
  notes" and stops. It never says the control is 0–127 with no unit shown.
- **Vibrato.** "the vibrato parameter will set the frequency" — but not that the
  range is roughly 0.06 Hz to 37 Hz over 99 steps, nor that the *depth* comes
  from CC#1 and is therefore zero until you move a mod wheel. A reader who sets
  Vibrato and hears nothing has been given no way to work out why.
- **Rise / Fall** on a Gate ("Up" and "Down" in the manual, "rise" and "fall" in
  the editor — see §7). "Set the time of a small attack envelope for the gate."
  The word "small" is doing a lot of work: the actual table runs from 13 ms to
  **67 seconds**.
- **Trig Length.** "set a fixed time between 1 and 127 ms" — this one is
  correct and specific, which shows the document knew how to do it and mostly
  didn't.

**What the rewrite does:** every mode page opens with a section literally titled
"What comes out of the jack", and every parameter is given with its range, its
unit, and its default. See [the mode reference](modes/index.md).

---

## 4. Whole paragraphs are copy-paste of the wrong mode

Several effect descriptions describe a different effect. These are not subtle:

| Effect | What the manual says it does | What it does |
|---|---|---|
| **CHANCE** | "Randomly changes the octave of the note being played." | Sets the probability that a note plays at all |
| **ACCUMULATE** | "Randomly add a note interval to the note being played." | Adds a running transposition each time it fires |
| **DELAY** | "Randomly add a note interval to the note being played." | Delays a gate by 0–1041 ms |
| **LOGIC** | "Randomly add a note interval to the note being played." | Combines two gates with a boolean function |
| **HUMANIZE** | "Randomly add a note delay to the note being played." | (correct, unusually) |

CHANCE is the worst of them, because the error propagates. Its parameter list
correctly names \`Probability\` and \`Vel pro\`, but the body below then documents a
parameter called **\`Range : Select the octave range\`** that CHANCE does not have,
copied wholesale from RANDOM OCTAVE, and defines \`Probability\` as "the
probability of the new note to be played at another randomized octave" — which is
RANDOM OCTAVE's meaning, not CHANCE's. A reader following this text will
configure the wrong thing and have no idea.

---

## 5. Some parameters are documented as a question mark

Page 24, ACCUMULATE, in full:

\`\`\`
Amount :
?

Reset :
?
\`\`\`

Page 26, HUMANIZE, the sentence simply stops:

\`\`\`
Amount :
set the amount of
\`\`\`

Page 15, RANDOM, the heading is present and the body is empty:

\`\`\`
Random level (only for D-Gate) :

Range :
set the range of the CV output
\`\`\`

---

## 6. Direct factual errors

- **Mono modes.** "mono low will prioritize the lowest midi note received on the
  CV output / mono high will prioritize the **lowest** midi note received on the
  CV output". Both say lowest. \`mono hi\` takes the highest.
- **Envelope times.** "set the attack time between 0 ms and 13 secondes". The
  editor's \`env_times\` table is 128 entries running from \`2.1 ms\` to
  \`134217.7 ms\` — that is 134 *seconds*, an order of magnitude past what the
  manual claims, and the floor is 2.1 ms, not 0.
- **RANDOM's Length parameter** is attributed to both banks in the same section.
  The parameter list says "Length (only for **D-Gate**)"; four paragraphs later
  the heading reads "Length (only for **cv**)". The editor puts \`length_menu\` on
  the Gate version only, so the parameter list was right and the body is wrong.
- **RANDOM's Source.** The manual offers three sources: "from a midi channel
  note / from another CV line / from the master clock". The editor's
  \`source_menu\` has exactly two entries: \`note\` and \`clock\`. There is no CV-line
  option.
- **CC RECORDER** is headed "CV & D-GATE". It exists only on CV outputs — it is
  absent from the editor's \`menus["gate"]\` list. The manual's own index on page 6
  gets this right ("CC RECORDER (Sequencer) CV"), so the document disagrees with
  itself two pages apart.
- **EUCLIDEAN is listed as a gate effect.** Page 25's "D-GATE FX" list reads
  \`DELAY / HUMANIZE / LOGIC / RANDOM VELOCITY / RANDOM TRIG LENGTH / EUCLIDEAN /
  INVERT / REPEAT\`. Euclidean is an output *mode*, not an effect; it is not in
  the FX menu. Meanwhile the real gate effect **CHANCE** is filed under "NOTE FX",
  and the FX index omits five effects the editor actually has.
- **XNOT.** The logic table defines "XNOT". The operator is XNOR, and the editor
  labels it \`XNOR\`.

---

## 7. The manual and the editor use different words for the same control

A reader with the manual open beside the editor has to translate. Every one of
these is a mismatch between the manual's heading and the editor's on-screen label:

| Manual says | Editor shows | Mode |
|---|---|---|
| Up / Down | \`rise\` / \`fall\` | Gate |
| Val min / Val max, then Minimum / Range | \`minimum\` / \`range\` | Trig |
| Poly/Mono Group | \`out type\` | Note |
| Type | \`waveform\` | LFO |
| Speed | \`div\` | LFO |
| Steps | \`length\` | Sequencer, Euclidean |
| Note in function | \`note in dest\` | Sequencer |
| Probability | \`distribution\` | Random Octave, Random Note |
| MOD MATRIX / "cc mapping" / "the cc control grid" | \`MOD MATRIX\` | — |

The Trig section is the clearest case: the parameter list calls them "Val min"
and "Val max", the headings below call them "Minimum" and "Range", and the editor
calls them "minimum" and "range". Three names, two controls, one page.

**What the rewrite does:** uses the editor's label as the canonical name
everywhere, because that is the string the reader is actually looking at, and
gives the manual's alternative names in a glossary entry so search still works.

---

## 8. The on-module controls are never documented

The module has two buttons and per-output LEDs. The manual mentions a button
exactly once, in the firmware-update procedure on the last page:

> "press the left button of the portail (▼) and power up your module"

And even that one gesture is under-specified. It does not say how long to hold
the button, whether it must be held until the \`RPI-RP2\` volume mounts, or whether
releasing early aborts the attempt. This is the module's only documented button
press, it is the recovery path from a failed firmware update, and it is described
in a single subordinate clause.

That is the entire coverage. It never says:

- what either button does in normal operation
- how to select one of the 8 presets without a computer, despite page 3
  instructing the reader to "start using one of the 8 preset of the Portail"
- what the LEDs indicate
- that a reduced on-module editor exists at all

The product page and press coverage both describe on-module preset recall and a
simple embedded MIDI-learn. The manual describes neither.

**What the rewrite does:** [On-module controls](on-module.md) documents what is
confirmed and marks the rest \`TODO(verify)\` with an explicit button-press test
the reader can run, rather than guessing at a key combination.

---

## 9. Features are advertised that the editor does not expose

The product page lists **Velocity VCA** ("use an output to modify the amplitude of
another output") and **Math** ("binary operation on midi notes") among the
available effects. The task brief for this rewrite lists them too.

In the shipped editor they are commented out of the menu:

\`\`\`js
menus["fx"]=["OFF","NOTE FILTER","RANDOM OCT","RANDOM NOTE","CHANCE","ACCUMULATE",
  "TRANSPOSE","SCALE","MICROTONAL","DELAY","HUMANIZE","LOGIC","RANDOM VEL",
  "RANDOM TRIG LENGTH","INVERT","REPEATS"];//,"LFO MOD","CC MOD"];//"CONDITIONAL","MODULATE","VCA","MATHS",
\`\`\`

Their parameter definitions still exist in \`menu_labels\` and \`fx_select\`, so the
firmware may well implement them — they are simply unreachable from the editor.
The manual does not mention them at all, in either direction: it neither
documents them nor warns that the advertised features are unavailable.

**What the rewrite does:** [Modifier reference](fx/index.md) documents the
15 reachable modifiers and carries an explicit note about the six that are
defined but not exposed. Listed in [unverified.md](unverified.md).

---

## 10. Ordering assumes what it has not yet given

The document's running order is: Introduction → D-Gate concept → Installation →
Editor connection → Editor UI tour → Global settings → Output types → Effects →
CC mapping → Firmware.

Two problems follow from that.

**The central concept arrives before the reader knows there are jacks.** Page 2,
the second paragraph the reader ever sees, is:

> "But first , we need that small bite of explanation:
> What are D-GATEs outputs and what are the differences between D-GATE and CV
> outputs?"

At this point the manual has not said how many outputs there are, where they are,
what a Eurorack CV output does, or that the module is not yet in a rack. It
explains a distinction before establishing the things being distinguished.

**Global settings come before the reader knows what they affect.** The GLOBAL tab
is documented on page 5. It sets the master clock source and tempo. The modes
that consume the master clock — Clock, LFO, Sequencer, Euclidean, Arpeggiator,
Random — are documented on pages 12 through 19. So the reader is asked to choose
between "Internal" and "External" clock roughly ten pages before encountering
anything that uses a clock.

The same inversion applies to the polyphony instructions on page 7, which tell
the reader to "link D-gates outputs (with the gate, trig, velocity and envelope
types) to these CV voices by selecting one of the CV who is in the polyphonic
group in their source parameter" — a sentence that depends on the Gate mode's
\`source\` parameter, documented on the following page, and on Envelope's \`source\`,
documented seven pages later.

**What the rewrite does:** [Concepts](concepts.md) establishes outputs, banks,
modes, modifiers, the clock, and presets once, before any reference material.
Reference pages then assume only Concepts.

---

## 11. Jargon used before (or without) definition

Terms the manual uses as though they were already understood:

- **D-Gate / "Dynamic Gate"** — expanded once, in the introduction, then used
  throughout with the outputs also called "Gate", "D-GATE", "dynamic gates" and
  "gates rows" interchangeably.
- **latch** — appears in Trig ("Latch will make the trig output act as a gate"),
  in Euclidean's Gate Length, and in Random's Length, where it is described as
  "latch is always random change the time every gate", which is not parsable.
- **note in dest / "Note in function"** — the same parameter under two names,
  defined only as "Choose if an inputted note transpose or randomise the
  sequence", which does not cover the CC Recorder's four options (\`clear seq\`,
  \`arm record\`, \`start record\`, \`gate start/stop\`).
- **poly group** — used before the polyphony mechanism is explained, and the
  explanation never states the obvious limit, that four groups exist and the
  voice count equals the number of CV rows you assign to a group.
- **source** — means three different things depending on mode: a CV row (Gate,
  Trig, Velocity, Envelope), a MIDI note number (Poly AT), or a trigger origin
  (Random). Never disambiguated.
- **post FX** — never mentioned in the manual at all, though the editor's source
  distinguishes note-domain effects from gate-domain "post" effects
  (\`debut_post_fx = 9\`) and this determines what an effect can be applied to.
- **"note scale"** — an option in the CC and CC Recorder Range menus, mentioned
  once in passing ("select note scale if you want v/oct notes"), never explained.
- **PPQN** — never mentioned. The manual gives clock divisions as \`1/16\`, \`1/4\`
  and so on without stating what they divide, so a reader wiring Portail to a
  sequencer that wants 24 PPQN has nothing to go on.

---

## 12. There is not one worked example

The manual contains no patch, no cabling diagram, no "do this, then this, and you
will hear that". The closest it comes are four scattered "Use case" sentences of
one line each, e.g.:

> "Use case : it can avoid clicks when the gate is for example used to control
> VCA"

and one abstract FX-chaining example on page 20 (FX1 → FX2 → FX5 into CV1) that
uses no concrete values.

For a module whose entire premise is that 16 jacks can be *anything*, the absence
of worked configurations is the difference between a feature list and a manual.
The most common things a buyer will want on day one — a polyphonic voice, drum
triggers from a groovebox, a correctly-divided clock, velocity into a VCA —
require assembling information from four to six separate pages, and in the
polyphony case require a parameter documented later than the instruction to use
it (§10).

**What the rewrite does:** [Recipes](recipes/index.md) — eight worked patches,
each with goal, cabling, exact settings, expected result, and what to check when
it fails.

---

## 13. Nothing on specifications, calibration, or the protocol

Absent entirely:

- **A specifications table.** No HP, no depth, no current draw. (The product page
  has them: 5 HP, 110 mA +12 V, 20 mA −12 V, 0 mA 5 V.)
- **Output voltage specs.** One sentence in the introduction gives "−5 and +10V"
  for CV and "0 and 10V" for D-Gate, and it is never restated, tabulated, or
  reconciled with the per-mode range menus, whose most negative option is −5 V and
  most positive is 10 V.
- **Calibration.** The firmware exposes three calibration SysEx commands
  (\`SYS_SET_CALIB\`, \`SYS_SET_CALIB2\`, \`SYS_SET_CALIB_DAC\`). The manual never
  mentions that calibration exists.
- **The SysEx protocol.** Page 2 tells the reader they can configure the module
  "or by sending SYSEX messages" and then never documents a single message. The
  manual is the only document eowave publishes, so there is no other place to
  look.
- **The scale list.** SCALE offers 24 scales; the manual says "Select the scale".
- **The microtonal tables.** MICROTONAL offers 8 tables; the manual says "Select
  the table where the notes will go thru" and never says what is in them, whether
  they are user-loadable, or how.
- **MIDI THRU output.** The global settings describe copying MIDI to "the MIDI
  OUT port on the back of the module". No connector list anywhere mentions a MIDI
  output, and the product page lists inputs only. Either there is an undocumented
  rear connector or the feature description is wrong; the manual gives the reader
  no way to tell.

---

## 14. Troubleshooting is one bullet

The manual's entire troubleshooting section:

> "**Possible Troubleshoot:**
> If you are using the Portail with your phone and the USB cable is disconnected,
> you might need to reload the page to reconnect to the Portail once replugged
> (even if the portail is selected in the interface menu)."

Nothing on: no sound, wrong pitch, notes stuck on, gates too short to trigger
anything, clock running at the wrong speed, settings lost at power-off, editor
not seeing the module. The last of these is especially conspicuous because the
editor has a "lost connection !!" state built into it.

**What the rewrite does:** [Troubleshooting](troubleshooting.md), organised by
symptom — what you observe — rather than by cause, since a reader in trouble
knows the symptom and not the cause.

---

## 15. Smaller things, collected

- **Typos and grammar that impede meaning**, not merely polish: "continious",
  "Higer", "substracted", "secondes", "afilter", "the maser clock", "the envelope
  retire itself at its end", "a high gate when the a midi start message is
  received who stay high until a midi stop message is received", "limits the
  maximum value that a sort will take into account" (product page, describing
  Note Filter).
- **The Sequencer's CC collision is never flagged.** Sequencer steps read CC1,
  CC2, CC3 … on the selected channel. CC1 is also the mod wheel, which the Note
  mode uses for vibrato depth. A reader who has both on the same channel gets
  interference the manual gives no warning about.
- **"Speed: A slider and number box to set the tempo of the internal clock, from
  30 to 250 BPM. ( you can also control the speed with the CC#"** — the sentence
  ends mid-word, and the range is wrong for the mapped parameter: the editor's
  slider is capped at 250, but \`clock_speed_menu\` is 128 steps of 2 BPM starting
  at 30, i.e. 30–284 BPM when reached via a CC mapping.
- **Firmware update section never states what the current version is**, how to
  read the version off the module, or what changed. The editor requests a version
  string over SysEx and displays it, so the information exists.

---

## What this drove in the rewrite

| Audit finding | Response |
|---|---|
| §3 modes don't say what comes out | Every mode page answers the same four questions, in the same order, starting with the jack |
| §1, §13 numbers missing or placeholder | Every range, unit and default stated; anything unconfirmed is \`TODO(verify)\` with a test |
| §7 manual/editor vocabulary mismatch | Editor labels are canonical; alternatives cross-referenced |
| §10 ordering | One Concepts page before all reference |
| §12 no examples | Eight worked recipes |
| §14 one-bullet troubleshooting | Symptom-first troubleshooting |
| §8 on-module UI undocumented | Dedicated page, gaps marked with tests |
| §9 phantom features | Documented as unreachable, listed in \`unverified.md\` |
`,da=`# Concepts

Read this once. Every reference page in this manual assumes it and assumes
nothing else.

The official manual introduces these ideas scattered across thirty pages, mostly
after the point where you need them. Here they are in dependency order.

---

## 1. Sixteen outputs, in two banks

Portail has **16 output jacks**, and every one of them is assignable. There is no
fixed "this jack is pitch, that jack is gate".

The jacks are grouped into two banks, and the banks differ in what voltage they
can produce:

| Bank | Jacks | Resolution | Voltage range |
|---|---|---|---|
| **CV** | CV 1 – CV 8 | 16-bit | −5 V to +10 V, bipolar |
| **Gate** | GATE 1 – GATE 8 | 12-bit | 0 V to +10 V, unipolar |

That is the *only* difference. A Gate output is not restricted to gates — it can
produce an LFO, an envelope, a clock, a control voltage from a CC. eowave calls
them **Gate outputs** ("dynamic gates") to make this point, and the product page
describes the module as having "16 CV" for the same reason.

What follows from the table:

- **Pitch must come from a CV output.** 1 V/oct tracking over a useful range
  needs the bipolar swing and the 16-bit resolution. Gate outputs cannot go
  below 0 V, so they cannot express notes below the reference octave.
- **A Gate output is the better choice for anything unipolar** — gates, triggers,
  clocks, positive-only envelopes — because it leaves your CV outputs free for
  the things that genuinely need them.
- 12-bit is 4096 steps across 10 V, about 2.4 mV per step. Fine for modulation,
  visibly steppy if you try to use it for pitch.

Throughout this manual, **CV output** and **Gate output** mean the physical
jacks. When the distinction does not matter, **output** means either.

---

## 2. A mode is what one output does

Each of the 16 outputs is set to exactly one **mode**. The mode is the first
dropdown for that output in the editor, which the official editor labels \`type\`.

The mode determines three things at once: what MIDI the output listens to, what
appears at the jack, and which further parameters that output has. Choosing
\`LFO\` and choosing \`Note\` give you two completely different sets of controls on
the same row.

The two banks have overlapping but not identical mode lists:

| Mode | CV | Gate |
|---|---|---|
| Off | yes | yes |
| Note | yes | — |
| Gate | — | yes |
| Trigger, MIDI CC, Velocity, Aftertouch, Poly aftertouch, Pitch bend | yes | yes |
| Clock, LFO, Envelope, Sequencer, Random | yes | yes |
| Arpeggiator | yes | — |
| CC recorder | yes | — |
| Euclidean | — | yes |

Note is CV-only because pitch needs the bipolar range. Gate, as a mode, is
Gate-bank-only. Arpeggiator and CC recorder are CV-only; Euclidean is Gate-only.

Modes that appear in both banks behave the same way but offer a different
**Level range** menu, because the banks have different voltage limits. A \`MIDI CC\` on a CV
output can be set to \`−3 V\`; a \`MIDI CC\` on a Gate output cannot.

See [the mode reference](modes/index.md).

---

## 3. Channels are per-output, not global

Almost every mode has a **Channel** parameter, set independently per output. There
is no single "the module's MIDI channel".

This is what makes multitimbral setups work: CV 1 can take channel 1, CV 2 can
take channel 2, and they ignore each other entirely.

There is one **global CC channel** in the global settings, and it does something
different — it selects which channel the [CC map](#7-the-cc-map-controls-parameters-from-cc)
listens on for remote parameter control. It does not affect note routing.

---

## 4. Outputs can listen to each other

Several modes have a **Trigger source** parameter that can point at a **CV output**
instead of at a MIDI channel. On Gate, Trigger, Velocity and Envelope, **Trigger source** offers
\`Note\` (meaning: all notes on this output's MIDI channel) or \`CV 1\` … \`CV 8\`.

Setting **Trigger source** to a CV output means "follow whatever note that output is
playing". This is the mechanism that binds a gate to a pitch:

\`\`\`mermaid
flowchart LR
  MIDI["MIDI note on ch 1"] --> CV1
  CV1["CV 1 — Note mode"] -->|"1V/oct"| J1(["CV 1 jack"])
  CV1 -.->|"source"| G1["GATE 1 — Gate mode"]
  G1 --> J2(["GATE 1 jack"])
\`\`\`

GATE 1 does not need to know the channel — it inherits it from CV 1. The editor
hides the **Channel** parameter when you select a CV source, for exactly this
reason.

This matters most for polyphony, below.

**Beware the two meanings of **Trigger source**.** The word is reused:

- On Gate, Trigger, Velocity, Envelope — **Trigger source** is *where to follow from*: a channel's
  notes, or a CV output.
- On Poly aftertouch — **Trigger source** is *which MIDI note number* to track aftertouch for.
- On Random — **Trigger source** is *what triggers a new value*: \`Note\` or \`Clock\`.
- On Clock — the parameter the editor labels \`source\` is the **Clock event**, and
  selects the *event type*: \`Clock\`,
  \`Start/stop\` or \`Reset\`.

Each mode page states which meaning applies.

---

## 5. Polyphony is several CV outputs sharing a group

There is no "poly mode" switch. You build a polyphonic voice out of outputs.

On a CV output in Note mode, the **Voice mode** parameter chooses the voice
assignment:

- \`Mono last\`, \`Mono low\`, \`Mono high\` — monophonic, with last-note, lowest-note
  or highest-note priority.
- \`Poly group 1\` … \`Poly group 4\` — this output joins a group.

**The polyphony count is however many CV outputs you put in the same group.**
Set CV 1, CV 2 and CV 3 all to \`Poly group 1\` and you have a three-voice
allocator: incoming notes are handed out one per output, round-robin.

Then bind gates to the voices by setting each Gate output's **Trigger source** to the
matching CV output:

\`\`\`mermaid
flowchart LR
  M["MIDI notes, ch 1"] --> A{"poly group 1<br/>round-robin"}
  A --> C1["CV 1 Note"] --> J1(["CV 1"])
  A --> C2["CV 2 Note"] --> J2(["CV 2"])
  A --> C3["CV 3 Note"] --> J3(["CV 3"])
  C1 -.->|source| G1["GATE 1 Gate"] --> K1(["GATE 1"])
  C2 -.->|source| G2["GATE 2 Gate"] --> K2(["GATE 2"])
  C3 -.->|source| G3["GATE 3 Gate"] --> K3(["GATE 3"])
\`\`\`

Four groups exist, so you can run several independent polyphonic parts at once —
for example a three-voice part on channel 1 in group 1 and a two-voice part on
channel 2 in group 2.

Worked example: [Recipes → three-voice poly synth](recipes/poly-synth.md).

---

## 6. FX slots are eight processors that point at an output

An **FX slot** processes MIDI on its way to an output. There are **8 FX slots**, and they are a separate resource from the
16 outputs — using an FX slot does not cost you a jack.

Each slot has:

- an **FX type** — which effect this is, or \`OFF\`
- a **Target** — which output it applies to
- its own parameters

A slot affects **one destination output**. It is not global, and it is not
per-channel. If you want the same effect on two outputs, you spend two slots.

### How they stack

Point several slots at the same destination and they chain, **in slot order**:

\`\`\`mermaid
flowchart LR
  MIDI["Incoming notes"] --> F1["FX 1 — Random note<br/>target CV 1"]
  F1 --> F2["FX 2 — Scale<br/>target CV 1"]
  F2 --> F5["FX 5 — Transpose<br/>target CV 1"]
  F5 --> OUT["CV 1 — Note mode"] --> J(["CV 1 jack"])
\`\`\`

Slots 3 and 4 are skipped here because they point somewhere else, or are \`OFF\`.
The chain is FX 1 → FX 2 → FX 5, then the output.

**Order changes the result**, and the order is the slot order, not the order you
configured them in. Quantising and then randomising gives you off-scale notes;
randomising and then quantising keeps you in scale. If a chain is doing the wrong
thing, check which slot number each effect is in.

### Two domains

FX split into two families by what they can process:

| Domain | Operates on | Can target | FX |
|---|---|---|---|
| **Note** | note numbers, before pitch is produced | CV outputs | Note filter, Random octave, Random note, Chance, Accumulate, Transpose, Scale, Microtonal |
| **Gate** | gate events, timing and level | Gate outputs | Delay, Humanize, Logic, Random velocity, Random trig length, Invert, Repeats |

The **Target** menu enforces this: a Note FX slot only offers CV 1–8, a
Gate FX slot only offers GATE 1–8. You cannot put Scale on a gate.

A Note FX slot only does something if the destination CV output is in a
mode that handles notes — \`Note\`, \`Arpeggiator\`, \`Sequencer\` or \`Random\`. Pointing Scale at a
CV output running \`LFO\` has no effect.

**Microtonal is always applied last**, whatever slot it is in, because it
replaces the pitch table rather than editing note numbers. See
[Microtonal](fx/microtonal.md).

See [the FX reference](fx/index.md).

---

## 7. The CC map controls parameters from CC

Separately from modes and FX slots, Portail can expose its own parameters to
incoming MIDI CC, so an external controller can change them live.

- **32 mapping slots.**
- Each slot binds one incoming **CC number on one channel** to one **parameter of
  one row** — a CV output, a Gate output, an FX slot, or the global
  settings.
- Each slot has a **min** and a **max**, so you can scale the CC's 0–127 into
  just the part of the parameter's range you want, or invert it by setting min
  above max.
- Assignment is by MIDI learn: arm the slot, send the CC, it captures the number
  and channel.

This is how you get a knob on the ADSR times, or on a random generator's range,
without touching the editor.

There is also a **default CC map** built into the firmware, which pre-assigns a
CC to most parameters. It can be switched off with the global **Disable default
midi mapping** setting. See [Appendix: default CC map](appendix-cc-map.md).

**A mapping is bound to the output's current mode.** If you change a output's **Mode**,
any mapping pointing into that output is deleted, because the parameter it pointed
at no longer exists.

---

## 8. One master clock feeds everything time-based

Clock, LFO, Sequencer, Euclidean, Arpeggiator, Random (when its source is \`Clock\`) and Repeats
all run from a single **master clock**. You do not set a rate on each of them —
you set a **division** of the master clock.

The master clock is either:

- **internal** — Portail generates it, at a tempo you set (30–250 BPM from the
  editor's slider), or
- **external** — Portail follows MIDI clock arriving on USB or TRS.

This is a global setting, not per-output. It is the reason the global settings
matter before any of the time-based modes make sense.

\`\`\`mermaid
flowchart LR
  subgraph Sources
    INT["Internal clock<br/>30–250 BPM"]
    EXT["MIDI clock in<br/>USB or TRS"]
  end
  INT --> SEL{"Clock source<br/>global setting"}
  EXT --> SEL
  SEL --> MC(("Master clock"))
  MC --> D1["÷ Clock"]
  MC --> D2["÷ LFO"]
  MC --> D3["÷ Sequencer"]
  MC --> D4["÷ Euclidean"]
  MC --> D5["÷ Arpeggiator"]
  MC --> D6["÷ Random"]
\`\`\`

Divisions are written musically — \`1/4\` is a quarter note, \`1/16\` a sixteenth,
\`1/8T\` an eighth triplet, \`1/8.\` a dotted eighth. \`1/1\` is a bar of 4/4 and the
list runs up to \`4/1\`, four bars.

\`TODO(verify)\`: the master clock's internal resolution in PPQN is not stated in
any primary source. It matters if you want a \`1/4\` division to line up exactly
with a 24-PPQN external clock. **Test:** set clock source to external, feed
Portail a known MIDI clock, set a Gate output to \`Clock\` mode with **Clock division** \`= 1/4\`,
and compare its pulses against your sequencer's quarter-note output on a scope
or by ear over 32 bars, listening for drift.

For getting a sequencer clocked correctly, see
[Recipes → clocking a sequencer](recipes/clocking.md).

---

## 9. Presets, and the difference between sending and saving

A **preset** is a complete snapshot of the module's configuration: all 8 CV outputs,
all 8 Gate outputs, all 8 FX slots, the global settings, and all 32 CC map
mappings. **There are 8 preset slots.**

There are three places your configuration can be, and they are not the same
place:

\`\`\`mermaid
flowchart LR
  ED["Editor<br/>in the browser"]
  WM["Working memory<br/>on the module<br/>(volatile)"]
  NV["Preset slot<br/>on the module<br/>(non-volatile)"]
  ED -->|"update all parameters"| WM
  WM -->|"save parameters"| NV
  NV -->|"select a preset"| WM
  WM -->|"request from portail"| ED
  ED -->|"save to file"| FILE["Text file<br/>on your computer"]
  FILE -->|"load file"| ED
\`\`\`

The distinction that catches people:

- **update all parameters** sends the editor's settings to the module's working
  memory. They take effect immediately. **They are lost at power-off.**
- **save parameters** writes working memory into the currently selected preset
  slot, overwriting it. This survives power-off.

So the sequence "it sounded right, I powered down, it's gone" means you sent but
never saved.

**save to file** is the only backup that is not on the module. Use it before
overwriting a factory preset — see [the editor](editor.md#backing-up).

---

## 10. What is on the module and what is in the editor

| | On the module | In the editor |
|---|---|---|
| Runs the modes and FX slots | yes | no |
| Holds the 8 presets | yes | no |
| Deep configuration of every parameter | no | yes |
| Preset recall | yes | yes |
| MIDI learn for the CC map | limited | yes |
| Firmware update | via bootloader | provides the file |

The editor is a web page that talks to the module over USB using SysEx. It holds
no state of its own beyond what is on screen. Closing it changes nothing on the
module; the module keeps running whatever is in its working memory.

The module has **two buttons and per-output LEDs** — no screen. It can recall
presets and do simple assignments without a computer. See
[On-module controls](on-module.md).

Nothing about the editor is required at run time. Once configured and saved, the
module works standalone with USB unplugged.

---

## Terms, briefly

| Term | Means |
|---|---|
| **Output** | One of the 16 physical jacks |
| **CV output** | One of CV 1–8. 16-bit, −5 V to +10 V |
| **Gate output** / **Gate output** | One of GATE 1–8. 12-bit, 0 V to +10 V |
| **Bank** | The CV group or the Gate group |
| **Mode** | What one output does. The **Mode** dropdown |
| **FX** / **FX** | One of 8 slots that processes MIDI toward one output |
| **Slot** | An FX slot position, 1–8. Determines chain order |
| Target | The output an FX slot applies to |
| Trigger source | Context-dependent — see [§4](#4-outputs-can-listen-to-each-other) |
| **Poly group** | One of 4 round-robin voice pools |
| **CC map** | The 32 CC-to-parameter mappings |
| **Master clock** | The single internal or external clock all timed modes divide |
| **Div** | A musical division of the master clock |
| **Working memory** | Volatile live configuration on the module |
| **Preset** | One of 8 non-volatile configuration slots |
| **Latch** | A length setting meaning "hold for as long as the note is held" |

The canonical glossary lives in \`spec/glossary.md\`. Where that file and this
table differ, \`spec/glossary.md\` wins and this table is the thing to fix.
`,ha=`# The editor

Portail has no screen. Deep configuration happens in a web editor that talks to
the module over USB using SysEx.

There are two editors:

- **The official eowave editor**, at <https://www.eowave.app/portail/>. This is
  what ships with the module and what the official manual documents. It is also
  where firmware updates come from.
- **The companion editor in this project**, in \`app/\`. An alternative for
  day-to-day configuration.

This page describes the concepts, which apply to both, and then the differences.
It deliberately avoids describing button positions and screen layouts, because
those change.

---

## What an editor can and cannot do

An editor is a remote control for the module's memory. It holds no state of its
own beyond what is on screen. Closing it changes nothing; the module keeps
running whatever you last sent.

Nothing about an editor is required at run time. Once configured and saved, the
module works standalone with USB unplugged.

---

## Connecting

1. **Power the module from your case.** USB alone is not enough — the module
   needs rack power to run. \`TODO(verify)\`: whether the module enumerates over
   USB with no rack power connected. **Test:** with the case off, connect USB and
   see whether the editor's device list offers \`Portail\`.
2. **Connect USB-C** from the module to your computer.
3. **Open the editor in a browser that supports Web MIDI.** Chrome and
   Chromium-based browsers work. Firefox and Safari historically do not — check
   <https://caniuse.com/midi> for the current state.
4. **Accept the MIDI permission prompt** when the browser asks. Web MIDI requires
   explicit permission, and SysEx access is a separate, stricter permission that
   some browsers prompt for individually.
5. **Select \`Portail\`** from the editor's device list.
6. **Read the current configuration from the module** before changing anything.

Step 6 matters more than it looks. An editor starts empty or with defaults. If
you change one parameter and send everything, you overwrite the module's other 23
rows with whatever the editor happened to be showing. Always read first.

### iOS does not work

Apple's browsers do not implement the Web MIDI API, so the editor cannot connect
from an iPhone or iPad through Safari or Chrome for iOS. The official manual
suggests the third-party **Web MIDI Browser** app as a workaround.

Android with Chrome works.

---

## The three places a configuration can live

This is the concept that causes the most lost work.

\`\`\`mermaid
flowchart LR
  ED["Editor"]
  WM["Working memory<br/>volatile"]
  NV["Preset slot<br/>non-volatile"]
  FILE["File on your computer"]
  ED -->|send| WM
  WM -->|save| NV
  NV -->|recall| WM
  WM -->|read| ED
  ED -->|export| FILE
  FILE -->|import| ED
\`\`\`

- **Editor** — what is on your screen. Not on the module at all.
- **Working memory** — what the module is running right now. Volatile. Lost at
  power-off.
- **Preset slot** — one of 8 non-volatile slots. Survives power-off.

The two operations people confuse:

| Operation | Official editor | What it does |
|---|---|---|
| Send | **update all parameters** | Editor → working memory. Takes effect immediately. **Lost at power-off** |
| Save | **save parameters** | Working memory → the currently selected preset slot. Permanent |

**"It worked, then I powered down, and it's gone"** means you sent but never
saved. Sending and saving are two separate actions and you need both.

Reading goes the other way: **request from portail** copies working memory back
into the editor.

---

## Presets

There are **8 preset slots**. A preset holds everything: all 8 CV outputs, all 8
Gate outputs, all 8 FX slots, the global settings, and all 32 CC map
mappings.

Selecting a preset loads it into working memory, replacing what was there. Any
unsaved changes are lost at that moment, without warning.

Saving writes working memory into **the currently selected slot**, overwriting
it. There is no "save as" — to put a configuration in a different slot, select
that slot first, then send, then save.

The official manual contradicts itself about how many presets exist, saying 16 in
one place and 8 in another. It is 8. See [audit §2](audit.md).

---

## Backing up

**Do this before you overwrite anything.**

The factory presets are not published. Once you save over preset 1, its original
contents are gone and there is no way to recover them. Nothing on eowave's site
or in the manual provides a restore file.

The procedure, using the official editor:

1. Select preset 1.
2. **request from portail** — pulls it into the editor.
3. **save to file** — writes a text file to your computer. Name it clearly:
   \`portail-factory-preset-1.txt\`.
4. Repeat for presets 2 through 8.

Keep those eight files somewhere safe. They are the only backup of the factory
configuration that will exist.

The official editor's file format is plain text: one line per row, values
separated by semicolons, 24 rows, then the global parameters, then 32 CC map
lines. It is readable and diffable, which makes it reasonable for version
control.

---

## Global settings

Eight settings that affect the whole module rather than one output. They are part
of the preset, so they are saved and recalled with everything else.

| Setting | Values | What it does |
|---|---|---|
| Clock state | \`stop\`, \`start\` | Runs or halts the master clock. With it stopped, every clocked mode is silent |
| Clock source | \`Internal\`, \`External\` | Whether the master clock is generated here or follows incoming MIDI clock |
| Speed | 30–250 BPM | Internal clock tempo. Ignored when the source is external |
| Active midi out copy | \`Off\`, \`On\` | Passes incoming MIDI to a MIDI output — see the caveat below |
| Reset on continue | \`Off\`, \`On\` | Whether a MIDI Continue resets to the start or resumes in place |
| Global CC channel | \`ch 1\` – \`ch 16\` | Which channel the CC map and default CC map listen on |
| Disable default midi mapping | \`Off\`, \`On\` | Switches off the firmware's built-in CC assignments |

Three of these are worth expanding.

**Clock source** is the setting that makes [Clock](modes/clock.md),
[LFO](modes/lfo.md), [Sequencer](modes/seq.md), [Euclidean](modes/euclidean.md),
[Arpeggiator](modes/arp.md) and [Random](modes/random.md) work or not work. If a clocked
mode does nothing, check this and Clock state first. See
[Concepts §8](concepts.md#8-one-master-clock-feeds-everything-time-based).

**Reset on continue** has a name that does not explain it. It controls what
happens on MIDI Continue — the message a sequencer sends when resuming from a
paused position rather than from the start. \`On\` treats Continue as a Start and
resets everything; \`Off\` resumes in place. \`On\` is the safer default. See
[Recipes → clocking](recipes/clocking.md#reset-on-continue).

**Disable default midi mapping** turns off the firmware's built-in CC map. That
map is active unless you disable it, and its assignments are unpublished — so if
a parameter changes when you touch a controller and you did not map it, this is
the first thing to try. See [Appendix: default CC map](appendix-cc-map.md).

**Active midi out copy** refers to a MIDI output whose existence is not
confirmed. The setting works in the editor and the official manual describes it,
but no connector list mentions a MIDI output on the module. See
[Specifications](specifications.md#the-midi-output-question).

The editor's tempo slider stops at 250 BPM. The underlying tempo parameter covers
30–284 BPM in 2 BPM steps, so a [CC map](#the-cc-map) mapping can reach
tempos the slider cannot.

---

## The CC map

Setting up CC control of parameters, in either editor:

1. **Add a mapping slot.** There are 32.
2. **Learn a CC.** Arm the slot, then send the CC from your controller. The slot
   captures the CC number and its channel.
3. **Choose a destination.** First the output — a CV output, a Gate output, a
   FX slot, or the global settings — then the parameter within it.
4. **Set **Low note** and **High note**.** These scale the CC's 0–127 into just the part of the
   parameter's range you want. Setting **Low note** above **High note** inverts the control.
5. **Send, then save.** Mappings live in working memory like everything else, so
   they vanish at power-off unless you save.

**A mapping is bound to the output's current mode.** Change a output's **Mode** and any
mapping into that output is deleted, because the parameter it referenced no longer
exists. Configure your modes first, then your mappings.

See [Concepts §7](concepts.md#7-the-cc-map-controls-parameters-from-cc) and
[Appendix: default CC map](appendix-cc-map.md).

---

## The Tuning tab

The companion editor has a **Tuning tab** for authoring the module's eight
microtonal tables and sending them to the module. This is what makes the
[Microtonal](fx/microtonal.md) mode useful: the tables all ship as standard
tuning, and the Tuning tab is how you replace one with a scale of your own.

### What it does

- **A local library of tunings.** Each tuning is **12 cents values, one per pitch
  class** (C, C♯, D … B). The module adds the octave (1200 cents) itself, so you
  only enter the twelve pitch classes — not every note. **C is normally 0; a
  non-zero root transposes the whole table** (the quarter-tone preset below uses
  C = 50). You build up a library of named tunings that lives in the editor, not
  on the module.
- **Import and export Scala \`.scl\` files**, the standard interchange format for
  tunings, so you can bring in scales from anywhere and share your own.
- **Send to module → table 1–8.** Pick one of the eight table slots and send the
  selected tuning to it. From then on, any [Microtonal](fx/microtonal.md) FX slot
  pointed at that table plays your scale.

### The \`.scl\` import rules

Portail's tables are exactly **12 pitch classes** and the module **always repeats
at the octave**. So the Tuning tab accepts only Scala scales that fit that shape:

- **Must be 12-note.** A scale with any other number of degrees is refused, with a
  message naming the count — a 7-note or 19-note scale cannot map onto twelve
  fixed pitch classes, and a **24-note 24-TET file is refused** for the same
  reason (use the paired-output approach
  [below](#quarter-tones-and-why-24-tet-needs-two-outputs) instead).
- **Must repeat at the octave (1200 cents).** A scale whose period is not the
  octave — Bohlen–Pierce, for instance — is refused, because the module has no way
  to represent a non-octave period.
- **Both pitch formats parse.** Scala degrees written as **ratios** (\`3/2\`, \`5/4\`,
  a bare integer like \`2\` meaning \`2/1\`) and as **cents** (\`701.955\`) are both
  accepted; ratios are converted to cents on import.

Refusals are explained in the message, so you always know why a file did not
load rather than getting a silent failure.

### Quarter-tones, and why 24-TET needs two outputs

The Tuning tab ships with a factory preset, **Quarter-tone (24-TET offset)** —
every pitch class raised a quarter-tone: cents \`[50, 150, 250, … 1150]\`.

It exists because of a hard limit worth understanding. A single Portail table
holds **only 12 pitch classes and always repeats at the octave**. True 24-TET has
**24 pitches per octave**, so it cannot fit one table — and a 24-note Scala \`.scl\`
file is correctly **refused on import**, because it has 24 notes where a table
holds 12.

The way to play 24-TET is to **pair two outputs**:

- one output on a plain **12-TET** table — the normal semitone grid, and
- a second output on the **Quarter-tone (24-TET offset)** table — the same grid
  shifted up 50 cents.

Together the two outputs cover the full 24-TET set: the standard twelve pitches
from the first, the twelve quarter-tone-sharp pitches from the second. Split your
MIDI across the two outputs (by channel, or by [Note filter](fx/note-filter.md))
and you have quarter-tones across your rack.

This is the technique used for quarter-tone material in the vein of **Angine de
Poitrine**, the Québécois microtonal band whose tuning sits around 24-TET — the
motivating case the preset was built for.

### Honesty: what the app can and cannot promise

Three limits are worth understanding before you rely on a custom tuning. Each is
also a \`TODO(verify)\` — see [unverified.md](unverified.md).

- **The write format is firmware-derived, not yet hardware-confirmed.** The way
  the editor writes a table was recovered from the firmware, not proven on a real
  module. So the **first send is gated behind a one-time confirmation**, and the
  tuning is flagged **Unverified** until you confirm it. After sending, play a
  chromatic run: if it plays in tune, mark it confirmed and the warning stops.
  \`TODO(verify)\`: that the table-write format is correct on hardware. **Test:**
  send a table with an obvious offset — say C♯ at 150 cents instead of 100 — and
  check that C♯ plays noticeably sharp.
- **The module cannot report a table back.** There is no read path for tunings, so
  the editor only tracks **what it last sent**. If a table was set some other way,
  or on another computer, the editor has no way to know — it shows its own history,
  not the module's true state. \`TODO(verify)\`: whether any read-back path exists.
  **Test:** send a table, reload the editor, and see whether it can recover the
  table's contents from the module (it should not be able to).
- **A sent table may not survive a power-cycle.** Sending writes to the module's
  **working memory**, and there is no confirmed save-to-flash path for tunings. So
  treat a custom tuning as **live**, like a patch you have sent but not saved:
  after powering the module on, re-send the table. \`TODO(verify)\`: whether a sent
  tuning persists across power-off. **Test:** send a distinctive table, power the
  case off and on, and play the same notes — if they revert to standard tuning,
  tunings are working-memory only.

None of this can harm the module: a tuning write goes to RAM, cannot brick it,
and is undone by a power cycle.

---

## Firmware updates

**Firmware updates are done with the official eowave editor, not the companion
editor in this project.**

The companion editor is configuration and presets only, by design. Flashing
firmware means writing to a device in bootloader mode where a failure leaves the
module unusable, and that is not a risk worth taking on an unofficial tool. The
official editor is also the authoritative source for the firmware file itself —
a third-party tool distributing firmware images would be a way for the wrong
image to reach a module.

So the split is: use the companion editor for everyday configuration, and go to
<https://www.eowave.app/portail/> when you need to update firmware.

### The update procedure

Summarised from the official manual. Follow eowave's own instructions in
preference to these.

1. In the official editor's global settings, download the latest firmware. It is
   a \`.uf2\` file.
2. Connect the module to your computer over USB.
3. **Power the module down.**
4. **Hold the left button (▼) and power the module up** while still holding it.
5. The module appears as a USB drive named **\`RPI-RP2\`**. Accept any permission
   prompt.
6. Drag the \`.uf2\` file onto that drive.
7. The drive disconnects on its own and the module reboots, updated.

This is the standard RP2040 bootloader flow — Portail is built on an RP2040 — so
if you have flashed a Raspberry Pi Pico, it is the same procedure.

**Back up your presets before updating.** \`TODO(verify)\`: whether a firmware
update preserves the 8 stored presets. **Test:** back up all 8 to files, update,
then read each preset back and compare against the files.

The official manual does not say how to check which firmware version you are
running. The editor requests a version string over SysEx and displays it, so the
information is available — look for a version readout once connected.

---

## The companion editor in this project

\`app/\` holds an alternative editor. Its scope is deliberately narrow:

| Included | Not included |
|---|---|
| Connection state, clearly shown | Firmware flashing |
| Offline editing with explicit send/read sync | Patch librarian |
| Overview of all 16 outputs at once | Live-tweak mode |
| JSON config import and export | |
| MIDI monitor | |
| Preset backup | |
| Microtonal tuning tables (the Tuning tab) | |
| Undo | |

Two of those are worth explaining.

**Explicit send/read sync.** The editor does not push changes as you make them.
You edit offline, see what has changed, and send deliberately. This makes the
distinction between the editor, working memory and the preset slot visible rather
than something you have to remember.

**MIDI monitor.** Shows what is arriving at the module. This is the fastest way
to answer "is my controller actually sending anything?", which is the first
question in most troubleshooting.

For what the companion editor does today, see \`app/\`'s own documentation. This
manual describes the module, not the tool.

---

## If the editor cannot see the module

**No devices in the list at all.** The browser does not support Web MIDI, or
permission was denied. Try Chrome. Check the site permissions for MIDI and reset
them if a previous denial is cached.

**\`Portail\` is listed but nothing connects.** Another application may have the
port open — a DAW, or another browser tab with an editor in it. On some systems a
USB MIDI device can only be opened once. Close everything else and reload.

**It connected, then stopped.** Unplugging and replugging the USB cable does not
always re-establish the browser's connection. Reload the page. The official
manual notes this specifically for phones.

**It connects but reads back nothing.** The module may be powered from USB but
not from the rack. Confirm the case is on.

More in [Troubleshooting](troubleshooting.md).
`,ua=`# Accumulate

**Domain:** note. Target**:** \`CV 1\` … \`CV 8\`.

Adds a growing transposition, resetting after a set number of notes.

The official manual documents this FX slot's two parameters as literally
\`?\` and \`?\`. See [audit §5](../audit.md). What follows is derived from the
editor's parameter tables and is marked accordingly.

---

## What it does to the signal

Each note reaching the destination is transposed by an amount that **increases
with every note**. The step size is **Amount**. After **Reset after** notes, the
accumulated transposition returns to zero and the climb begins again.

With **Amount** \`3\` and **Reset after** \`4\`, successive notes are transposed by 0, +3, +6, +9,
then back to 0, +3, +6, +9, and so on — a rising figure superimposed on whatever
you are playing.

**Amount** can be negative, giving a descending figure.

\`TODO(verify)\`: whether the accumulation starts at zero or at **Amount** for the
first note, and whether **Reset after** counts notes or clock divisions. **Test:** set
**Amount** \`12\` and **Reset after** \`4\`, play a single repeated \`C3\`, and write down the four
pitches before it wraps. If you hear C3, C4, C5, C6 the count starts at zero and
counts notes; if you hear C4, C5, C6, C7 it starts at **Amount**.

\`TODO(verify)\`: whether anything other than reaching **Reset after** clears the
accumulator — a note-off, a transport stop, or a MIDI reset. **Test:** let it
climb two steps, stop your sequencer's transport, restart, and see whether the
next note is transposed or back at zero.

---

## What it needs to work

The destination CV output must be in \`Note\`, \`Arpeggiator\`, \`Sequencer\` or \`Random\` mode.

---

## Parameters

> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in \`spec/glossary.md\`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:
>
> - **Reset after** — the editor says \`reset\`
> - **Target** — the editor says \`dest\`


| Parameter | Values | Default | Notes |
|---|---|---|---|
| **Target** | \`CV 1\` … \`CV 8\` | \`CV 1\` | |
| **Amount** | \`0\` … \`63\`, then \`0\` … \`-63\` | \`3\` | Semitones added per note |
| **Reset after** | \`1\` … \`128\` | \`4\` | Notes before the accumulator clears |

The **Amount** list is unusual: it runs \`0, 1, 2 … 63\` and then continues
\`0, -1, -2 … -63\`. So there are two entries that mean zero, at positions 0 and
64, and the negative half is in the upper half of the list rather than below zero.

---

## Where to put it in a chain

Accumulate will take notes out of key, because a fixed semitone step repeated
does not respect scale degrees. Put [Scale](scale.md) in a **higher** slot to
pull the results back in.

With **Amount** \`12\` — a whole octave — the pitch class never changes, so no
quantiser is needed.

---

## What it's for

**Turning a one-note pulse into a rising figure.**

- CV 1: **Mode** \`Sequencer\` or \`Arpeggiator\` on channel 1
- FX 5: **FX type** \`Accumulate\`, **Target** \`CV 1\`, **Amount** \`5\`, **Reset after** \`4\`
- FX 6: **FX type** \`Scale\`, **Target** \`CV 1\`, **Scale** \`minor\`, **Root note** \`D\`

Each note climbs a fourth above the last, four times, then drops back — and
Scale, in the higher slot, keeps every step in D minor. A single repeated note
becomes a four-note ascending phrase that restarts forever.

Set **Amount** to a negative value for the descending version, or map **Reset after** to a
CC through the [CC map](../concepts.md#7-the-cc-map-controls-parameters-from-cc)
to change the phrase length while it runs.
`,ma=`# Chance

**Domain:** note. Target**:** \`CV 1\` … \`CV 8\`.

Decides whether a note plays at all.

The official manual's description of Chance is copied from
[Random octave](random-oct.md) and describes the wrong effect entirely — "Randomly
changes the octave of the note being played" — and then documents a \`Range\`
parameter that Chance does not have. See [audit §4](../audit.md). What follows is
derived from the editor's parameter tables.

---

## What it does to the signal

For each note reaching the destination, **Probability** decides whether it plays.
Notes that lose the roll are dropped entirely — no pitch change, no gate.

**Velocity influence** links the decision to velocity: with it raised, harder notes are more
likely to survive and softer notes more likely to be dropped.

This is the FX slot that thins a part out. Everything else on the note side
alters notes; Chance removes them.

---

## What it needs to work

The destination CV output must be in \`Note\`, \`Arpeggiator\`, \`Sequencer\` or \`Random\` mode.

Because dropped notes produce no gate, any Gate output whose **Trigger source** points at
this CV output goes quiet on the dropped notes too — which is what makes Chance
useful rhythmically rather than just melodically.

---

## Parameters

> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in \`spec/glossary.md\`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:
>
> - **Probability** — the editor says \`distribution\`
> - **Target** — the editor says \`dest\`
> - **Velocity influence** — the editor says **Velocity influence** \`/ vel control\`


| Parameter | Values | Default | Notes |
|---|---|---|---|
| **Target** | \`CV 1\` … \`CV 8\` | \`CV 1\` | |
| **Probability** | \`0%\` … \`100%\` | \`10%\` | Chance the note plays |
| **Velocity influence** | \`0%\` … \`100%\` | \`10%\` | How much velocity influences the decision |

\`TODO(verify)\`: the polarity of **Probability** — whether it is the chance a note
**plays** or the chance it is **dropped**. The default of \`10%\` is
suspiciously low for "chance it plays", which would silence nine notes in ten on
a freshly added FX slot. **Test:** add Chance with **Probability** \`10%\`,
**Velocity influence** \`0%\`, and play a steady stream of notes. If almost all of them sound,
the parameter is the chance of being dropped; if almost none do, it is the chance
of playing.

\`TODO(verify)\`: how **Velocity influence** combines with **Probability** — whether it scales
it, offsets it, or replaces it above a threshold. **Test:** set
**Probability** \`50%\`, **Velocity influence** \`100%\`, and play the same pitch at velocity 1 and
then at velocity 127, twenty times each. Compare how many sound.

---

## What it's for

**Thinning a busy pattern so it breathes.**

- CV 1: **Mode** \`Sequencer\`, **Channel** \`ch 3\`, **Clock division** \`1/16\`, **Steps** \`16\`
- GATE 1: **Mode** \`Gate\`, **Trigger source** \`CV 1\`
- FX 4: **FX type** \`Chance\`, **Target** \`CV 1\`, **Probability** \`70%\`, **Velocity influence** \`0%\`

A sixteenth-note sequence now drops roughly three notes in ten, differently each
bar. The gate follows, so the rests are real rests rather than held notes.

Raise **Velocity influence** and the pattern's own dynamics decide what survives — accented
steps stay, ghost notes come and go. That is a more musical thinning than a flat
probability, because it preserves the part's shape.
`,pa=`# Delay

**Domain:** gate. Target**:** \`GATE 1\` … \`GATE 8\`.

Delays a gate by a fixed time.

The official manual's description of Delay is copied from another FX slot —
"Randomly add a note interval to the note being played" — and describes the wrong
effect. Its \`Amount\` parameter is documented correctly. See
[audit §4](../audit.md).

---

## What it does to the signal

Every gate event reaching the destination is held back by **Amount**
milliseconds. The gate's width is unchanged; only its start moves.

The delay is fixed, not random. For a random delay, use
[Humanize](humanize.md).

\`TODO(verify)\`: whether the note-off is delayed by the same amount, preserving
gate width, or only the note-on is delayed, shortening the gate. **Test:** set a
Gate output to \`Gate\` mode with **Trigger source** \`note\`, add Delay with **Amount** around
500 ms, hold a key for exactly two seconds, and measure the gate width on a
scope. If it is two seconds, both edges are delayed; if it is 1.5 seconds, only
the start is.

---

## What it needs to work

The destination Gate output must be producing gates — \`Gate\`, \`Trigger\`, \`Envelope\`,
\`Sequencer\`, \`Random\` or \`Euclidean\` mode.

The official manual notes it applies to "Gate, Trig, env".

---

## Parameters

> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in \`spec/glossary.md\`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:
>
> - **Target** — the editor says \`dest\`


| Parameter | Values | Default | Notes |
|---|---|---|---|
| **Target** | \`GATE 1\` … \`GATE 8\` | \`GATE 1\` | |
| **Amount** | \`0 ms\` … \`1041 ms\`, in steps of about 8.2 ms | \`82 ms\` | Delay time |

The list has 128 entries covering 0 to 1041 ms, so the resolution is roughly
8 ms per step. Fine for feel, too coarse for sample-accurate work.

---

## What it's for

**Making a layered drum sound flam instead of hitting flat.**

- GATE 1: **Mode** \`Trigger\`, **Channel** \`ch 10\`, **Note** \`C1\`, **Length** \`5 ms\` → main drum
- GATE 2: **Mode** \`Trigger\`, **Channel** \`ch 10\`, **Note** \`C1\`, **Length** \`5 ms\` → layer
- FX 1: **FX type** \`Delay\`, **Target** \`GATE 2\`, **Amount** \`25 ms\`

Both outputs fire from the same MIDI note, but GATE 2 lands 25 ms later. Patch
them to two different drum modules and you get a flam that no amount of MIDI
editing gives you as easily.

**A second use:** delay an entire sequenced part by a fixed amount to sit it
behind the beat. 20–60 ms is the range where a part starts to feel laid back
without sounding wrong.
`,fa=`# Humanize

**Domain:** gate. Target**:** \`GATE 1\` … \`GATE 8\`.

Delays each gate by a small random amount, so a machine-timed part stops sounding
machine-timed.

The official manual's definition of the \`Amount\` parameter is the incomplete
sentence "set the amount of". See [audit §5](../audit.md).

---

## What it does to the signal

Each gate event reaching the destination is delayed by a randomly chosen amount,
scaled by **Amount**. Every gate gets a different offset, which is the difference
from [Delay](delay.md), where every gate is offset by the same fixed time.

At **Amount** \`0%\` there is no displacement. Raising it widens the spread of possible
delays.

\`TODO(verify)\`: the maximum delay in milliseconds at **Amount** \`100%\`, and whether
the displacement is late-only or spread either side of the beat. Early
displacement would require Portail to know about a gate before it happens, which
is impossible for live MIDI, so late-only is likely — but a clocked source such
as [Euclidean](../modes/euclidean.md) is predictable in advance, so it could go
either way there. **Test:** set **Amount** \`100%\` on a Euclidean output at
**Clock division** \`1/4\` and record its output against an undelayed clock. Measure the earliest
and latest offsets over fifty hits.

---

## What it needs to work

The destination Gate output must be producing gates.

Most valuable on outputs driven by the master clock —
[Euclidean](../modes/euclidean.md), [Sequencer](../modes/seq.md),
[Clock](../modes/clock.md) — because those are perfectly quantised and therefore
the most obviously mechanical.

---

## Parameters

> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in \`spec/glossary.md\`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:
>
> - **Target** — the editor says \`dest\`


| Parameter | Values | Default | Notes |
|---|---|---|---|
| **Target** | \`GATE 1\` … \`GATE 8\` | \`GATE 1\` | |
| **Amount** | \`0%\` … \`100%\` | \`10%\` | Spread of random delay |

---

## What it's for

**Loosening a Euclidean hat pattern.**

- GATE 6: **Mode** \`Euclidean\`, **Clock division** \`1/16\`, **Steps** \`16\`, **Fills** \`7\`, **Gate length** \`5 ms\`
- FX 2: **FX type** \`Humanize\`, **Target** \`GATE 6\`, **Amount** \`15%\`

The pattern keeps its shape but stops landing exactly on the grid, which is the
difference between a hat part that sits in a track and one that fights it.

Keep **Amount** low. Above about 30% the displacement becomes large enough to read
as sloppy rather than human, and at fast divisions it can push a gate past the
next step.

**Do not humanize the clock output** that drives your other modules — a
sequencer fed a jittering clock will drift against everything else. Humanize the
parts, not the timebase.
`,ga=`# FX reference

An **FX slot** processes MIDI on its way to an output. The editor's tab calls
them \`FX\`. See
[Concepts §6](../concepts.md#6-fx-slots-are-eight-processors-that-point-at-an-output)
for how slots and chaining work.

The essentials, restated:

- **8 slots.** They are a separate resource from the 16 outputs — an FX slot
  costs you no jacks.
- Each slot has an **FX type**, a **Target** (one output), and its own parameters.
- Several slots pointing at the same **Target** **chain in slot order**, lowest slot
  first. The order you configured them in is irrelevant; the slot number is what
  counts.
- Changing a slot's **FX type** deletes any CC map slot that pointed into it.

Every page below answers the same four questions in the same order:

1. **What it does to the signal**
2. **What it needs to work** — which destinations and modes it applies to
3. **Parameters** — range, unit, default
4. **What it's for** — one concrete patch

---

## The two domains

| | Note FX | Gate FX |
|---|---|---|
| Operates on | Note numbers, before pitch is produced | Gate events: timing, length, level, logic |
| **Target** offers | \`CV 1\` … \`CV 8\` | \`GATE 1\` … \`GATE 8\` |
| Destination must be in mode | \`Note\`, \`Arpeggiator\`, \`Sequencer\` or \`Random\` | \`Gate\`, \`Trigger\`, \`Envelope\`, \`Sequencer\`, \`Random\` or \`Euclidean\` |

The **Target** menu enforces the split — a Note FX will not offer a Gate
output. You cannot quantise a gate, and you cannot invert a pitch.

A Note FX pointed at a CV output that is running \`LFO\`, \`MIDI CC\`, \`Clock\`
or similar does nothing at all. This is the most common reason an FX slot appears
to be ignored.

---

## Note FX

| FX | One line |
|---|---|
| [Note filter](note-filter.md) | Ignore notes outside a range |
| [Random octave](random-oct.md) | Jump notes to another octave, sometimes |
| [Random note](random-note.md) | Add a random interval, sometimes |
| [Chance](chance.md) | Decide whether a note plays at all |
| [Accumulate](accumulate.md) | Transpose a running amount further each time |
| [Transpose](transpose.md) | Shift by a fixed number of semitones and octaves |
| [Scale](scale.md) | Quantise to one of 24 scales |
| [Microtonal](microtonal.md) | Retune using one of 8 tables. Always applied last |

## Gate FX

| FX | One line |
|---|---|
| [Delay](delay.md) | Delay a gate by a fixed time |
| [Humanize](humanize.md) | Delay a gate by a random time |
| [Logic](logic.md) | Combine two gates with a boolean function |
| [Random velocity](random-vel.md) | Vary gate level |
| [Random trig length](random-trig-length.md) | Vary gate width |
| [Invert](invert.md) | Flip a gate's state |
| [Repeats](repeats.md) | Ratchet — repeat a gate within its step |

---

## Ordering, with a worked case

Order changes results. The clearest example:

| Slots | Chain | Result |
|---|---|---|
| FX 1 = Random note, FX 2 = Scale, both **Target** \`CV 1\` | randomise → quantise | Random notes, all in key |
| FX 1 = Scale, FX 2 = Random note, both **Target** \`CV 1\` | quantise → randomise | In-key notes, then knocked off key again |

The second is almost never what anyone wants, and it is easy to arrive at by
accident because the editor lists slots in numeric order regardless of when you
filled them in.

**Rule of thumb:** put the things that create or scatter notes in low slots, and
the things that constrain them — Scale, Note filter, Transpose — in high slots.

[Microtonal](microtonal.md) is the exception: it is applied at the end of the
chain whatever slot it occupies, because it replaces the tuning table rather than
editing note numbers.

---

## FX that are advertised but not available

The eowave product page lists **Velocity VCA** ("use an output to modify the
amplitude of another output") and **Math** ("binary operation on midi notes")
among the module's effects.

**Neither is reachable.** In the shipped web editor they are commented out of the
menu, along with \`CONDITIONAL\`, \`MODULATE\`, \`LFO MOD\` and \`CC MOD\`. Their
parameter definitions are still present in the editor's source, so the firmware
may implement them and a future editor release may expose them — but as of the
editor captured in \`research/\`, you cannot select them.

The official manual mentions none of the six, in either direction. Recorded in
[unverified.md](../unverified.md).

If you need velocity to control amplitude today, use [Gate](../modes/gate.md)
with **Velocity sensitive** \`on\`, or a [Velocity](../modes/vel.md) output — see
[Recipes → velocity to VCA](../recipes/velocity-vca.md). If you need boolean
combination, [Logic](logic.md) covers the gate-domain case.
`,ya=`# Invert

**Domain:** gate. Target**:** \`GATE 1\` … \`GATE 8\`.

Flips a gate: high becomes low, low becomes high.

The simplest FX slot on the module. It has one parameter.

---

## What it does to the signal

The destination output produces **Level range** volts whenever it would otherwise
produce 0 V, and 0 V whenever it would otherwise be high.

The consequence worth thinking about: an inverted output is **high most of the
time**, because gates are normally low most of the time. A \`1/16\` trigger pattern
with 5 ms pulses becomes a signal that sits at 10 V and dips briefly.

That is useful for anything that responds to a gate going low — a module with an
inverted or normally-high trigger input, a mute input, a hold input, or a VCA
you want to duck rather than open.

---

## What it needs to work

The destination Gate output must be producing gates.

Inverting a [Sequencer](../modes/seq.md) output set to \`cc\` type, or any output
producing a continuous voltage rather than gates, is not what this is for.

\`TODO(verify)\`: what Invert does to a continuous signal such as an
[LFO](../modes/lfo.md) on a Gate output — whether it mirrors the waveform around
the midpoint, or thresholds it into a square first. **Test:** set a Gate output
to \`LFO\`, **Waveform** \`triangle\`, **Level range** \`10 V\`, apply Invert, and watch on a scope.

---

## Parameters

> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in \`spec/glossary.md\`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:
>
> - **Target** — the editor says \`dest\`


| Parameter | Values | Default |
|---|---|---|
| **Target** | \`GATE 1\` … \`GATE 8\` | \`GATE 1\` |

That is all of them.

---

## What it's for

**Ducking.** Sidechain-style level dips, without a sidechain compressor.

- GATE 1: **Mode** \`Trigger\`, **Channel** \`ch 10\`, **Note** \`C1\`, **Length** \`80 ms\`,
  **Level range** \`10 V\` → follows the kick
- FX 1: **FX type** \`Invert\`, **Target** \`GATE 1\`

GATE 1 now sits at 10 V and drops to 0 V for 80 ms on every kick. Patch it to a
VCA carrying a pad or a bassline: the pad plays at full level and ducks out of
the way each time the kick lands.

Add a little **Fall** on the Gate output — or use [Envelope](../modes/env.md) with
**Shape** \`ad\` instead of Trigger — to make the duck a smooth dip rather than a hard
step.

**A second use:** feed an inverted gate to a module with a normally-high input,
such as a mute or a hold, where the module expects a gate to *stop* something.
`,va='# Logic\n\n**Domain:** gate. Target**:** `GATE 1` … `GATE 8`.\n\nCombines two gates with a boolean function.\n\nThe official manual\'s one-line description of Logic is copied from another\nFX slot and describes the wrong effect. Its function table is correct, apart\nfrom naming XNOR "XNOT". See [audit §4](../audit.md).\n\n---\n\n## What it does to the signal\n\nTakes the destination gate and the **Operand** gate, applies **Function**, and\n**replaces the destination\'s output with the result**.\n\nThe destination is both an input and the output. **Operand** is read but not\nchanged — that output continues to produce its own signal normally.\n\n| **Function** | Output is high when |\n|---|---|\n| `AND` | Both dest and modulator are high |\n| `OR` | Either is high |\n| `NAND` | Not both are high |\n| `NOR` | Neither is high |\n| `XOR` | Exactly one is high |\n| `XNOR` | Both are the same — both high or both low |\n| `NOT` | The input is low. Ignores **Operand** |\n\n`NAND`, `NOR` and `XNOR` are high most of the time, because "neither" and "the\nsame" are common states. If you patch one and get a nearly continuous voltage,\nthat is why — they are more useful as a way of generating *gaps* than hits.\n\n---\n\n## What it needs to work\n\nBoth the destination and the modulator must be Gate outputs producing gates.\nSetting either to `OFF` gives you a constant.\n\n---\n\n## Parameters\n\n> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in `spec/glossary.md`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:\n>\n> - **Operand** — the editor says `modulator`\n> - **Target** — the editor says `dest`\n\n\n| Parameter | Values | Default | Notes |\n|---|---|---|---|\n| **Target** | `GATE 1` … `GATE 8` | `GATE 1` | Input **and** output |\n| **Function** | `AND`, `OR`, `NAND`, `NOR`, `XOR`, `XNOR`, `NOT` | `AND` | |\n| **Operand** | `GATE 1` … `GATE 8` | `GATE 1` | The second input |\n\n**The defaults set both **Target** and **Operand** to `GATE 1`.** A gate ANDed with\nitself is itself, so a freshly added Logic does nothing until you point\n**Operand** somewhere else.\n\n`TODO(verify)`: what happens if **Target** and **Operand** are the same output with\na function other than `AND` — `XOR` with itself is always low, `NAND` always the\ninverse. **Test:** set both to `GATE 1` with **Function** `XOR` and measure. If the\noutput is dead, self-reference is evaluated literally.\n\n`TODO(verify)`: the output voltage of a Logic result — whether it uses the\ndestination\'s **Level range** or a fixed level. **Test:** set the destination\'s **Level range**\nto `5 V`, apply Logic, and measure the high level.\n\n---\n\n## What it\'s for\n\n**Deriving a third rhythm from two you already have.**\n\n- GATE 5: **Mode** `Euclidean`, **Clock division** `1/16`, **Steps** `16`, **Fills** `4` → kick\n- GATE 6: **Mode** `Euclidean`, **Clock division** `1/16`, **Steps** `16`, **Fills** `7` → hats\n- GATE 7: **Mode** `Euclidean`, **Clock division** `1/16`, **Steps** `16`, **Fills** `7`, **Rotate** `0`\n- FX 3: **FX type** `Logic`, **Target** `GATE 7`, **Function** `AND`, **Operand** `GATE 5`\n\nGATE 7 now fires only where the hat pattern and the kick pattern coincide — a\nsparse accent line that is rhythmically related to both and identical to neither.\nPatch it to a clap or a snare.\n\nSwap to `XOR` and GATE 7 fires where exactly one of them hits, which gives you\nthe inverse: a part that fills the gaps rather than reinforcing the hits.\n\nChange **Rotate** on GATE 7 while it runs and the derived pattern shifts with it.\n',wa=`# Microtonal

**Domain:** note. **Target:** \`CV 1\` … \`CV 8\`.

Retunes the output using one of eight tuning tables, so notes need not be
twelve-tone equal temperament.

---

## What it does to the signal

Replaces the pitch mapping. Each pitch class — C, C♯, D and so on — is given a
tuning in **cents** by the selected table, and the note's voltage is built from
that instead of from a fixed 1/12 V step.

Concretely, the firmware computes each note as:

\`\`\`
note_cents = (octave × 1200) + table[pitch class]
\`\`\`

so the octave is always exactly 1200 cents and the table only shifts the twelve
pitch classes within it. A semitone is 100 cents; the DAC turns \`cents / 100\`
into a 1 V/oct voltage using your module's calibration.

That makes Microtonal categorically different from the other Note FX.
[Scale](scale.md) and [Transpose](transpose.md) change *which note number* is
played; Microtonal changes *what pitch each note class means*.

**Microtonal is always applied last**, whatever slot it occupies. The official
manual states this — "this effect will always be at the end of the FX chain" —
and it follows from what it does: it is the final note-to-voltage step, so nothing
can come after it.

This means you can combine it freely with the others without worrying about slot
order. Quantise with Scale in any slot, and Microtonal still applies the tuning
afterwards.

---

## What it needs to work

The destination CV output must be in \`Note\`, \`Arpeggiator\`, \`Sequencer\` or \`Random\` mode.

You do **not** need to load anything first. All eight tables ship as standard
tuning, so a freshly added Microtonal changes nothing until you select a table
you have customised — see [The tables](#the-tables). To author a tuning and send
it to a table, use the editor's [Tuning tab](../editor.md#the-tuning-tab).

---

## Parameters

> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in \`spec/glossary.md\`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:
>
> - **Target** — the editor says \`dest\`
> - **Tuning table** — the editor says \`scale tab\`


| Parameter | Values | Default | Notes |
|---|---|---|---|
| **Target** | \`CV 1\` … \`CV 8\` | \`CV 1\` | |
| **Tuning table** | \`table 1\` … \`table 8\` | \`table 1\` | Which of the 8 tuning slots to use |

---

## The tables

**All eight tables ship identical: standard 12-tone equal temperament**, 100
cents per semitone, zero deviation. This is confirmed from the firmware (version
0.83r).

There are **no exotic factory tunings**. The eight "tables" are **empty user
slots**, and their factory and reset default is plain equal temperament — which
is exactly why the editor lists them as bare "table 1 … 8" with no names. There
is nothing pre-loaded to name.

So two things follow, and they replace the caution earlier drafts of this manual
carried:

- **\`table 1\` is a safe standard-tuning default.** Confirmed, not assumed. You can
  leave Microtonal in a chain on \`table 1\` and it will not change your pitch.
- **Any distinctive tuning on a module is something its owner stored**, not
  something eowave shipped.

### Where a table lives

Each table is **12 values, one per pitch class, in cents** (14-bit). Factory
tables decode to \`0, 100, 200 … 1100\` — even semitones.

A module's tables live in its own **flash memory**, separately
from the presets and **not** inside the firmware image. That has one practical
consequence: **a customised table can only be read back off the physical module**,
never derived from the firmware. If you want to know what a friend loaded onto
their Portail, you have to measure their hardware.

### Reading a table you have customised

You only need this if you (or a previous owner) have changed a table from the
default — a factory table is standard tuning and needs no measuring.

With a multimeter, or a tuner and an oscillator you trust:

1. Set a CV output to \`Note\`, \`channel ch 1\`, no other FX.
2. Play \`C3\` through \`C4\` chromatically, measuring the jack at each semitone. This
   is your **12-TET reference**: twelve equal steps of 83.3 mV, with C4 exactly
   1.000 V above C3.
3. Add \`FX 1: Microtonal, Target the same output, Tuning table\` set to the slot
   you want to read.
4. Repeat the measurement. Each step that differs from 83.3 mV is that pitch
   class's tuning. Convert to cents with **cents = millivolts × 1.2** (83.3 mV =
   100 cents).

That reads back a customised table without any documentation. A factory table
will simply measure as even 83.3 mV steps, confirming it is untouched.

### Editing a table

Use the editor's **[Tuning tab](../editor.md#the-tuning-tab)** to author a scale
and send it to one of the eight tables. You enter twelve cents values, one per
pitch class (C is normally 0, but the root is editable — a non-zero root
transposes the whole table; the module adds the octave), or import a Scala
\`.scl\` file. Only 12-note, octave-repeating scales fit the module's tables — the
Tuning tab explains the rest.

A factory tuning, **Quarter-tone (24-TET offset)**, ships in the Tuning tab —
every pitch class raised 50 cents. Because one table holds only 12 pitch classes,
full 24-TET does not fit a single table: put this tuning on one output and a
plain 12-TET tuning on another, and the two outputs together give the full
24-TET set (the technique behind quarter-tone music like **Angine de Poitrine**).
A 24-note \`.scl\` file is refused on import for the same reason — the paired
outputs are the way.

Two things to keep in mind, both covered in full on the
[Tuning tab](../editor.md#honesty-what-the-app-can-and-cannot-promise): the
table-write format is **not yet confirmed on hardware** (the first send asks you
to confirm, and the tuning is marked Unverified until you check it plays in tune),
and a sent tuning writes to **working memory** — it may not survive a
power-cycle, so re-send it after powering the module on.

See [Appendix: scales and microtonal tables](../appendix-scales.md).

---

## What it's for

**Playing a scale that twelve-tone equal temperament cannot express** — just
intonation, quarter tones, a historical temperament, or a stretched tuning — once
you have loaded one into a slot.

- CV 1: **Mode** \`Note\`, **Channel** \`ch 1\`
- FX 1: **FX type** \`Microtonal\`, **Target** \`CV 1\`, **Tuning table** \`table 2\`

With \`table 2\` still at its factory default this plays in standard tuning, because
every slot ships as 12-TET. Load a custom tuning into \`table 2\` first — from the
editor's [Tuning tab](../editor.md#the-tuning-tab) — and the same patch retunes
the keyboard: the layout is unchanged, every key still sounds, but the intervals
follow the table rather than the piano.

Full walkthrough: [Recipes → microtonal and scale playback](../recipes/microtonal.md).
`,ba=`# Note filter

**Domain:** note. Target**:** \`CV 1\` … \`CV 8\`.

Ignores notes outside a pitch range.

---

## What it does to the signal

Notes below **Lowest note** or above **Highest note** are dropped before they reach the
destination output. Notes inside the range pass through unchanged.

Because it drops notes rather than clamping them, a filtered note produces no
pitch change and no gate on outputs following that destination — it is as though
the note was never played.

---

## What it needs to work

The destination CV output must be in a note-handling mode: \`Note\`, \`Arpeggiator\`, \`Sequencer\`
or \`Random\`.

Note that [Note](../modes/note.md) mode already has **Low note** and **High note** parameters
that do the same job. Use those when you just want a keyboard split; use this
FX slot when you need the filtering to happen at a specific point in a chain —
for example *after* [Random octave](random-oct.md), to catch notes that randomisation
has thrown out of range.

---

## Parameters

> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in \`spec/glossary.md\`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:
>
> - **Highest note** — the editor says \`higher\`
> - **Lowest note** — the editor says \`lower\`
> - **Target** — the editor says \`dest\`


| Parameter | Values | Default | Notes |
|---|---|---|---|
| **Target** | \`CV 1\` … \`CV 8\` | \`CV 1\` | |
| **Lowest note** | \`C-2\` … \`G8\` | \`C-2\` | Lowest note that passes |
| **Highest note** | \`C-2\` … \`G8\` | \`G8\` | Highest note that passes |

Defaults pass everything, so a freshly added Note filter does nothing until you
move one of the two.

\`TODO(verify)\`: what happens if **Lowest note** is set above **Highest note**. **Test:** set
**Lowest note** \`G8\` and **Highest note** \`C-2\` and play across the keyboard. Either nothing passes,
or the filter inverts into a band-reject.

---

## What it's for

**Catching strays after randomisation.**

- FX 1: **FX type** \`Random octave\`, **Target** \`CV 1\`, **Level range** \`2\`, **Probability** \`40%\`
- FX 2: **FX type** \`Note filter\`, **Target** \`CV 1\`, **Lowest note** \`C1\`, **Highest note** \`C5\`

Random octave can throw notes two octaves in either direction, which on a bassline
means occasional notes far below what your oscillator tracks usefully. Note
FILTER in the later slot removes them, so the part stays in a sensible register
and the strays become rests rather than rumbles.

**The simpler use:** a keyboard split without spending a mode parameter — set
**Lowest note** \`C3\` on the FX slot for a lead zone, leaving [Note](../modes/note.md)'s
own **Low note**/**High note** free for something else.
`,Ca=`# Random note

**Domain:** note. Target**:** \`CV 1\` … \`CV 8\`.

Sometimes adds a random interval to a note.

The editor's menu calls this \`Random note\`. Internally it is the same FX slot
the editor's source calls \`random fx\`.

---

## What it does to the signal

For each note reaching the destination, **Probability** decides whether to alter
it. If it fires, a random interval of up to **Interval range** semitones — in either
direction — is added.

Unlike [Random octave](random-oct.md), this changes the pitch class, so the result
will often be out of key. That is why it is usually paired with
[Scale](scale.md) in a **higher** slot.

Nothing is dropped, so the rhythm is unaffected.

---

## What it needs to work

The destination CV output must be in \`Note\`, \`Arpeggiator\`, \`Sequencer\` or \`Random\` mode.

---

## Parameters

> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in \`spec/glossary.md\`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:
>
> - **Interval range** — the editor says \`range\`
> - **Probability** — the editor says \`distribution\`
> - **Target** — the editor says \`dest\`


| Parameter | Values | Default | Notes |
|---|---|---|---|
| **Target** | \`CV 1\` … \`CV 8\` | \`CV 1\` | |
| **Interval range** | \`+/-1\` … \`+/-47\` semitones | \`+/-12\` | Maximum interval added |
| **Probability** | \`0%\` … \`100%\` | \`10%\` | How often a note is altered |

The official manual calls **Probability** "Probability" and describes it as
"0% = play the original note all the time, 100% = play the original note with the
random note all the time", which reads as though both notes sound. Only one note
plays; the parameter is the chance that it is the altered one.

---

## What it's for

**Controlled variation in a melodic line, kept in key.**

- FX 1: **FX type** \`Random note\`, **Target** \`CV 1\`, **Interval range** \`+/-7\`, **Probability** \`30%\`
- FX 2: **FX type** \`Scale\`, **Target** \`CV 1\`, **Scale** \`minor\`, **Root note** \`A\`

About a third of the notes get shifted by up to a fifth in either direction, and
Scale — in the higher slot, so it runs afterwards — pulls every result back onto
A minor. The line varies without ever going wrong.

**Slot order is the whole trick here.** Put Scale in the lower slot and you
quantise first, then scatter, and the output is out of key. See
[the ordering section](index.md#ordering-with-a-worked-case).

Keep **Interval range** small — \`+/-2\` to \`+/-7\` — for variation that still sounds like the
original part. Larger values produce a different part.
`,Ta=`# Random octave

**Domain:** note. Target**:** \`CV 1\` … \`CV 8\`.

Sometimes moves a note to a different octave.

---

## What it does to the signal

For each note reaching the destination, **Probability** decides whether to
displace it. If it fires, the note jumps up or down by a random number of
octaves, up to **Octave range**. The pitch class is unchanged — a C stays a C.

Notes that are not displaced pass through untouched. Nothing is dropped, so the
rhythm is unaffected.

Because the pitch class never changes, Random octave is safe to use with
[Scale](scale.md) in either order — an octave displacement cannot take a note out
of a scale.

---

## What it needs to work

The destination CV output must be in \`Note\`, \`Arpeggiator\`, \`Sequencer\` or \`Random\` mode.

---

## Parameters

> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in \`spec/glossary.md\`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:
>
> - **Octave range** — the editor says \`range\`
> - **Probability** — the editor says \`distribution\`
> - **Target** — the editor says \`dest\`


| Parameter | Values | Default | Notes |
|---|---|---|---|
| **Target** | \`CV 1\` … \`CV 8\` | \`CV 1\` | |
| **Octave range** | \`0\`, \`1\`, \`2\`, \`3\`, \`4\` | \`1\` | Maximum octaves of displacement |
| **Probability** | \`0%\` … \`100%\` | \`0%\` | How often a note is displaced |

The editor labels the second parameter **Probability**; the official manual calls
it "Probability", which is clearer. It is a percentage chance per note.

**The default **Probability** is \`0%\`,** so a freshly added Random octave does
nothing until you raise it.

**Octave range** \`0\` also does nothing regardless of **Probability**.

\`TODO(verify)\`: whether displacement is symmetric — up and down with equal
likelihood — or upward only. **Test:** set **Octave range** \`1\`, **Probability** \`100%\`, play
a single repeated note, and watch the output pitch over twenty notes. If it only
ever goes up, it is asymmetric.

---

## What it's for

**Stopping a repetitive sequence from sounding mechanical.**

- FX 2: **FX type** \`Random octave\`, **Target** \`CV 2\`, **Octave range** \`1\`, **Probability** \`25%\`

A one-bar bassline now throws about one note in four an octave away. The line is
recognisably the same but stops being a loop you can predict. At **Octave range** \`1\` the
displacement stays musical; at \`3\` or \`4\` it becomes a texture rather than a
part.

Pair with [Note filter](note-filter.md) in a later slot to catch notes thrown
below your oscillator's useful range — see that page for the chain.
`,ka=`# Random trig length

**Domain:** gate. Target**:** \`GATE 1\` … \`GATE 8\`.

Varies how long each trigger lasts.

---

## What it does to the signal

Each gate reaching the destination is given a randomly extended width. **Length range**
sets how much longer it can get:

- **Length range** \`0\` — every gate keeps its original length. No effect.
- **Length range** \`127\` — gates can be substantially longer than the original.

The extension is one-directional: gates get longer, never shorter than the
destination's own **Length** setting. That length is the floor.

**Velocity influence** links the amount of extension to the note's velocity, so harder
hits produce longer gates — or the reverse, depending on how it is applied.

\`TODO(verify)\`: the maximum extension in milliseconds at **Length range** \`127\`, and the
direction of **Velocity influence** — whether higher velocity means longer or shorter.
**Test:** set a Gate output to \`Trigger\` with **Length** \`5 ms\`, apply this FX slot
with **Length range** \`127\` and **Velocity influence** \`0\`, and measure the widest gate over fifty
hits on a scope. Then set **Velocity influence** \`127\` and compare gates at velocity 1
against velocity 127.

---

## What it needs to work

The official manual notes this works "only on trig in gates rows" — the
destination should be a Gate output in [Trigger](../modes/trig.md) mode.

For the variation to be audible, the thing you are patching into must care about
gate length. A drum module with a fixed decay will not notice; a VCA, an
envelope in sustain, or a module with a gate-length-dependent behaviour will.

If the destination's **Length** is set to \`Latch\`, gate width is determined by how
long the note is held and there is nothing fixed to extend.

---

## Parameters

> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in \`spec/glossary.md\`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:
>
> - **Length range** — the editor says \`range\`
> - **Target** — the editor says \`dest\`
> - **Velocity influence** — the editor says **Velocity influence** \`/ vel control\`


| Parameter | Values | Default | Notes |
|---|---|---|---|
| **Target** | \`GATE 1\` … \`GATE 8\` | \`GATE 1\` | |
| **Length range** | \`0\` … \`127\` | \`63\` | Maximum extension. \`0\` = no change |
| **Velocity influence** | \`0\` … \`127\` | \`10\` | How much velocity influences the length |

---

## What it's for

**Varying note lengths in a sequenced part, so it phrases instead of stuttering.**

- GATE 2: **Mode** \`Trigger\`, **Trigger source** \`CV 2\`, **Length** \`20 ms\`, **Level range** \`10 V\`
- FX 5: **FX type** \`Random trig length\`, **Target** \`GATE 2\`, **Length range** \`60\`, **Velocity influence** \`90\`

CV 2 plays a bassline and GATE 2 opens an envelope. Every note now holds for a
different length — and with **Velocity influence** high, the accented notes hold longest.
The part gains articulation that neither the sequencer nor the envelope was
providing.

Keep **Length range** moderate at fast tempos. A gate extended past the next step will
either merge with it or retrigger unpredictably, depending on the envelope you
are driving.
`,xa="# Random velocity\n\n**Domain:** gate. Target**:** `GATE 1` … `GATE 8`.\n\nVaries the level of a gate, so repeated hits are not all identical.\n\n---\n\n## What it does to the signal\n\nGenerates a random velocity value up to **Velocity range**, and combines it with the gate's\nexisting velocity according to **Blend**:\n\n| **Blend** | Result |\n|---|---|\n| `Added` | Random value is added to the original velocity |\n| `Subtracted` | Random value is subtracted from the original velocity |\n| `Replaced` | Original velocity is discarded; the random value is used |\n\n`Added` and `Subtracted` preserve the part's dynamics and vary around them.\n`Replaced` throws the dynamics away, which is what you want when the source has\nno meaningful velocity — a [Euclidean](../modes/euclidean.md) or\n[Clock](../modes/clock.md) output, where every hit is otherwise identical.\n\nThe editor spells the second option `Subtracted`. That is the on-screen string.\n\n**This only produces an audible result if the destination is velocity-sensitive.**\nOn a [Gate](../modes/gate.md) or [Trigger](../modes/trig.md) output, that means\n**Velocity sensitive** must be `On`. Otherwise the gate has a fixed height and varying its\nvelocity changes nothing at the jack.\n\n---\n\n## What it needs to work\n\n- The destination Gate output must be producing gates.\n- For the variation to reach the jack, the destination needs **Velocity sensitive** `on`\n  ([Gate](../modes/gate.md), [Trigger](../modes/trig.md)) or must otherwise respond\n  to velocity.\n\n---\n\n## Parameters\n\n> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in `spec/glossary.md`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:\n>\n> - **Blend** — the editor says `type`\n> - **Target** — the editor says `dest`\n> - **Velocity range** — the editor says `range`\n\n\n| Parameter | Values | Default | Notes |\n|---|---|---|---|\n| **Target** | `GATE 1` … `GATE 8` | `GATE 1` | |\n| **Velocity range** | `0` … `127` | `63` | Maximum random velocity generated |\n| **Blend** | `Added`, `Subtracted`, `Replaced` | `Added` | How it combines |\n\n`TODO(verify)`: whether `Added` clips at 127 or wraps. **Test:** play notes at\nvelocity 120 with **Blend** `added` and **Velocity range** `127`, and listen for hits that come out\nquiet — wrapping would produce occasional very soft hits among loud ones.\n\n---\n\n## What it's for\n\n**Giving a Euclidean hat pattern accents it does not have.**\n\n- GATE 6: **Mode** `Euclidean`, **Clock division** `1/16`, **Steps** `16`, **Fills** `7`,\n  **Gate length** `5 ms`, **Level range** `10 V`\n- FX 4: **FX type** `Random velocity`, **Target** `GATE 6`, **Velocity range** `90`, **Blend** `replaced`\n\nEvery hat hit now has a different level. Patch GATE 6 into a hat module's\nvelocity or accent input, or into a VCA in the hat's signal path, and the pattern\ngains a dynamic shape that changes bar to bar.\n\n`Replaced` is the right choice here because a Euclidean output has no dynamics of\nits own to preserve.\n\n**On a played part**, use `Added` or `Subtracted` with a small **Velocity range** — 20 to\n40 — so your own playing still comes through and the randomness only softens the\nedges. Combine with [Humanize](humanize.md) for variation in both time and level.\n",Va=`# Repeats

**Domain:** gate. Target**:** \`GATE 1\` … \`GATE 8\`.

A ratchet engine: repeats a gate several times inside the space of one step.

---

## What it does to the signal

When a gate fires at the destination, Repeats retriggers it **Repeats** times, at
a rate set by **Amount** — a division of the master clock.

One hit becomes a burst. This is the roll or ratchet effect: a snare that fires
four times inside one sixteenth, a hat that doubles up.

The official manual describes **Amount** as "division of the clock" and **Repeats**
as "number of repeats", which is correct and is the clearest thing it says about
any gate FX slot.

\`TODO(verify)\`: whether every gate is ratcheted or only some, and whether the
repeats are squeezed into the original step's duration or simply run at
**Amount** until **Repeats** is exhausted — which at a slow **Amount** would overrun
into the next step. **Test:** set a Gate output to \`Euclidean\` at **Clock division** \`1/4\`,
apply Repeats with **Amount** set to a \`1/8\` equivalent and **Repeats** \`4\`, and watch
on a scope. If the four repeats span half a bar, they overrun; if they compress
into the quarter note, they are scaled to the step.

\`TODO(verify)\`: the unit of **Amount**. It is a \`0\`–\`127\` control rather than a
division menu, so the mapping from number to clock division is not visible.
**Test:** set **Repeats** \`2\` and step **Amount** through \`0\`, \`32\`, \`64\`, \`96\`, \`127\`,
measuring the gap between the two repeats each time.

---

## What it needs to work

The destination Gate output must be producing gates.

The downstream module must be able to retrigger fast enough. A drum module with a
long decay and no retrigger will merge the repeats into one sound.

---

## Parameters

> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in \`spec/glossary.md\`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:
>
> - **Repeats** — the editor says \`numbers\`
> - **Target** — the editor says \`dest\`


| Parameter | Values | Default | Notes |
|---|---|---|---|
| **Target** | \`GATE 1\` … \`GATE 8\` | \`GATE 1\` | |
| **Amount** | \`0\` … \`127\` | \`2\` | Rate of the repeats. Unit unverified |
| **Repeats** | \`0\` … \`127\` | \`1\` | How many repeats |

**The default **Repeats** is \`1\`,** which for most readings means no additional
hits. A freshly added Repeats may do nothing until you raise it.

---

## What it's for

**Snare rolls at the end of a phrase.**

- GATE 4: **Mode** \`Trigger\`, **Channel** \`ch 10\`, **Note** \`D1\`, **Length** \`5 ms\`,
  **Level range** \`10 V\` → snare
- FX 6: **FX type** \`Repeats\`, **Target** \`GATE 4\`, **Amount** \`2\`, **Repeats** \`4\`

Every snare hit becomes a four-stroke roll. Patch GATE 4 to a snare module.

The interesting version is dynamic: map **Repeats** to a CC through the
[CC map](../concepts.md#7-the-cc-map-controls-parameters-from-cc) with
**Low note** \`1\` and **High note** \`8\`. A knob on your controller now goes from single hits to dense
rolls while the pattern runs, which is a performance control you cannot easily get
any other way.

Combine with [Random velocity](random-vel.md) so the repeats within each burst vary in
level, which makes a roll sound played rather than machine-generated.
`,Sa='# Scale\n\n**Domain:** note. Target**:** `CV 1` … `CV 8`.\n\nQuantises notes to a musical scale.\n\n---\n\n## What it does to the signal\n\nEvery note reaching the destination is moved to the nearest note of the selected\nscale, in the selected key. Notes already in the scale pass through unchanged.\n\n`TODO(verify)`: what happens to a note exactly between two scale degrees —\nwhether it rounds up or down. **Test:** select **Scale** `major`, **Root note** `C`, and\nplay F♯, which is equidistant from F and G. Measure the output and see which one\nyou get. Repeat with C♯ (between C and D) to check the rule is consistent.\n\nScale does not drop notes. Every input note produces an output note, so gates and\nenvelopes fire as normal.\n\n---\n\n## What it needs to work\n\nThe destination CV output must be in `Note`, `Arpeggiator`, `Sequencer` or `Random` mode.\n\nIt is most valuable on `Random` and `Sequencer`, where the incoming pitches are not\nsomething you played and may be anywhere.\n\n---\n\n## Parameters\n\n> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in `spec/glossary.md`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:\n>\n> - **Target** — the editor says `dest`\n\n\n| Parameter | Values | Default | Notes |\n|---|---|---|---|\n| **Target** | `CV 1` … `CV 8` | `CV 1` | |\n| **Scale** | 24 scales — see below | `chromatic` | |\n| **Root note** | `C`, `C#`, `D`, `D#`, `E`, `F`, `F#`, `G`, `G#`, `A`, `A#`, `B` | `C` | The key |\n\n**The default **Scale** is `chromatic`, which passes every note.** A freshly added\nScale does nothing until you change it. This catches people.\n\n### The 24 scales\n\n| | | |\n|---|---|---|\n| `chromatic` | `major` | `minor` |\n| `harmonic minor` | `pentatonic major` | `pentatonic minor` |\n| `blues` | `dorian` | `phrygian` |\n| `lydian` | `mixolydian` | `locrian` |\n| `whole note` | `diminished` | `whole half diminished` |\n| `quint` | **Octaves** | `major chord` |\n| `minor chord` | `major 7th chord` | `minor 7th chord` |\n| `major 6th chord` | `minor 6th chord` | `minor dim 7 chord` |\n\nThe last seven are chords rather than scales — quantising to `major chord`\nrestricts the output to root, third and fifth, which turns a random source into\nbroken-chord arpeggios. **Octaves** restricts to the root note only, in every\noctave, which is a useful way to make a random source produce octave jumps and\nnothing else.\n\nThe official manual says only "Select the scale" and lists none of them. See\n[audit §13](../audit.md). Interval contents in\n[Appendix: scales](../appendix-scales.md).\n\n---\n\n## What it\'s for\n\n**Making a random source musical.** This is the standard pairing.\n\n- CV 5: **Mode** `Random`, **Trigger source** `clock`, **Clock division** `1/8`, **Base note** `C2`, **Interval range** `+/-12`\n- FX 1: **FX type** `Scale`, **Target** `CV 5`, **Scale** `pentatonic minor`, **Root note** `A`\n\nEvery eighth note CV 5 produces a random pitch within an octave of C2, and Scale\npulls it onto A minor pentatonic. The result is generative and never wrong,\nbecause a pentatonic scale has no notes that clash.\n\n**Put Scale in a higher slot than whatever is scattering the notes.** With\nRandom note in FX 1 and Scale in FX 2, the order is randomise-then-quantise and\nthe output is in key. Reverse the slots and it is not. See\n[the ordering section](index.md#ordering-with-a-worked-case).\n\nFull walkthrough: [Recipes → microtonal and scale playback](../recipes/microtonal.md).\n',Aa=`# Transpose

**Domain:** note. Target**:** \`CV 1\` … \`CV 8\`.

Shifts notes by a fixed amount.

---

## What it does to the signal

Adds **Semitones** semitones and **Octaves** octaves to every note reaching the
destination. Both can be negative, and they add together — \`semitone -5\` with
\`octave 1\` shifts up seven semitones.

Nothing is dropped and nothing is quantised. A transposed note is just a
different note.

---

## What it needs to work

The destination CV output must be in \`Note\`, \`Arpeggiator\`, \`Sequencer\` or \`Random\` mode.

---

## Parameters

> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in \`spec/glossary.md\`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:
>
> - **Target** — the editor says \`dest\`


| Parameter | Values | Default | Notes |
|---|---|---|---|
| **Target** | \`CV 1\` … \`CV 8\` | \`CV 1\` | |
| **Semitones** | \`-63\` … \`+64\` | \`0\` | Semitone offset |
| **Octaves** | \`-4\` … \`+4\` | \`0\` | Octave offset, added to the above |

The defaults are both zero, so a freshly added Transpose does nothing.

The **Semitones** range is wider than it looks useful — ±63 semitones is over five
octaves — and it overlaps **Octaves** completely. Use **Octaves** for octaves and
**Semitones** for the remainder; it is easier to read back later.

---

## Where to put it in a chain

**After [Scale](scale.md)** and Transpose moves the quantised result, which can
land you outside the scale. Transposing a C-major-quantised line up 1 semitone
gives you C♯ major, which may be exactly what you want, or may be a mistake.

**Before Scale** and the transposition happens first, then everything is pulled
back into the scale. The result stays in key.

Neither is wrong. Decide which you mean, then check the slot numbers.

---

## What it's for

**Getting a bassline into the register your oscillator likes.**

- FX 3: **FX type** \`Transpose\`, **Target** \`CV 2\`, \`semitone 0\`, \`octave -2\`

Your sequencer writes the part in a comfortable middle register and CV 2 plays it
two octaves down, without you having to rewrite the part or retune the
oscillator.

**A live use:** map **Semitones** to a CC through the
[CC map](../concepts.md#7-the-cc-map-controls-parameters-from-cc) with
**Low note** and **High note** set to a narrow window — say −12 to +12 — and you have a
transpose knob for a running sequence.
`,Ia=`# Portail — a clearer manual

> **Unofficial. Not affiliated with or endorsed by eowave.**
>
> This is a community-written replacement manual for the eowave Portail. It is
> not the manufacturer's documentation and eowave has not reviewed it. The
> official manual and editor are at
> [eowave.com/modules/portail](https://www.eowave.com/modules/portail) and
> [eowave.app/portail](https://www.eowave.app/portail/). For warranty, repairs
> or hardware faults, go to eowave, not here.

The **eowave Portail** is a 5 HP Eurorack MIDI-to-CV interface with 16
assignable outputs.

This manual was written by reading the official V0.9 manual, the web editor's
source, and the product page, and cross-checking the three against each other.
Where they disagree, this manual says so and explains which one the hardware
follows.

**Where none of them answers a question, this manual does not guess.** It says
\`TODO(verify)\` and gives you the test to run on your own module. Every such gap
is collected in one place, with its test, so you can see exactly how much of
this is confirmed and how much is not.

- What was wrong with the original, in detail: [audit.md](audit.md)
- Everything not confirmed against a primary source: [unverified.md](unverified.md)

If you run one of those tests, the result is worth more than anything else you
could contribute. The firmware work has closed most of the big unknowns — the
on-module buttons and the microtonal tables are now confirmed — and the largest
gap still open, the default CC map, is answerable in an afternoon by reading it
off a connected module.

---

## Start here

**[Quick start](quick-start.md)** — module in the rack to a note playing, in one
page. Do this first even if you plan to do something else, because it proves
the module, the cable and your MIDI source all work before you start
configuring.

**[Concepts](concepts.md)** — the mental model, given once. Outputs and banks,
what a mode is, how FX slots stack, what a preset contains, what lives on the
module and what lives in the editor. Read this before any reference page; every
reference page assumes it and nothing else.

---

## Reference

**[Modes](modes/index.md)** — one page per mode. Each answers the same four
questions in the same order:

1. What comes out of the jack?
2. What MIDI drives it?
3. What are the parameters — range, unit, default?
4. What is this actually for? One concrete patch.

| | |
|---|---|
| [Note](modes/note.md) | Pitch CV at 1 V/oct, mono or poly |
| [Gate](modes/gate.md) | A gate that follows note on/off |
| [Trigger](modes/trig.md) | A fixed-length pulse from one note |
| [MIDI CC](modes/cc.md) | A control change as a voltage |
| [Velocity](modes/vel.md) | Note velocity as a voltage |
| [Aftertouch](modes/at.md) | Channel aftertouch as a voltage |
| [Poly aftertouch](modes/poly-at.md) | One note's polyphonic aftertouch |
| [Pitch bend](modes/pb.md) | Pitch bend as a voltage |
| [Clock](modes/clock.md) | Clock, start/stop and reset pulses |
| [LFO](modes/lfo.md) | Clock-synced LFO |
| [Envelope](modes/env.md) | AR, AD, ADSR or looping envelope |
| [Sequencer](modes/seq.md) | Step sequencer driven by CC values |
| [CC recorder](modes/cc-recorder.md) | Record and replay a CC as a sequence |
| [Random](modes/random.md) | Random voltages or random gates |
| [Arpeggiator](modes/arp.md) | Arpeggiator |
| [Euclidean](modes/euclidean.md) | Euclidean gate patterns |

**[FX](fx/index.md)** — one page per FX slot, same four
questions. FX process MIDI on its way to an output.

| Note FX | Gate FX |
|---|---|
| [Note filter](fx/note-filter.md) | [Delay](fx/delay.md) |
| [Random octave](fx/random-oct.md) | [Humanize](fx/humanize.md) |
| [Random note](fx/random-note.md) | [Logic](fx/logic.md) |
| [Chance](fx/chance.md) | [Random velocity](fx/random-vel.md) |
| [Accumulate](fx/accumulate.md) | [Random trig length](fx/random-trig-length.md) |
| [Transpose](fx/transpose.md) | [Invert](fx/invert.md) |
| [Scale](fx/scale.md) | [Repeats](fx/repeats.md) |
| [Microtonal](fx/microtonal.md) | |

---

## Doing things

**[Recipes](recipes/index.md)** — eight worked patches. Goal, cabling, exact
settings, what you should hear, what to check if you don't.

**[The editor](editor.md)** — connecting, configuring, storing, recalling,
backing up.

**[On-module controls](on-module.md)** — everything you can do without a
computer.

**[Troubleshooting](troubleshooting.md)** — organised by symptom.

---

## Appendices

- [Specifications](specifications.md) — power, voltages, connectors, calibration
- [Parameter tables](appendix-parameter-tables.md) — every value list in full
- [Default CC map](appendix-cc-map.md) — how parameters are CC-addressable
- [Scales and microtonal tables](appendix-scales.md)
- [SysEx notes](appendix-sysex.md) — see \`spec/protocol.md\` for the full protocol

---

## Conventions used here

- **Middle C is C3.** Portail numbers MIDI note 60 as \`C3\`, and note 0 as \`C-2\`.
  If your keyboard calls middle C \`C4\`, everything here is one octave lower than
  its label. This is the module's own numbering and it is used throughout.
- **Parameter names follow one canonical vocabulary**, defined in
  \`spec/glossary.md\`. The official editor reuses the same word for unrelated
  controls — it labels five different parameters "range" and four different
  things "type" — so this manual gives each concept one name and keeps it.
  Every reference page carries a short note mapping its names back to the
  editor's on-screen labels, so you can work with either open.
- **Modes and effects are named in full**, the same words the editor shows —
  Pitch bend, not "PB"; Velocity, not "VEL"; Random octave, not "RANDOM OCT". The
  terse codes are internal identifiers you will not see on screen (Portail has no
  display), so this manual uses the full names everywhere.
- \`TODO(verify)\` marks a value or behaviour not confirmed against a primary
  source, and is always followed by the test that would confirm it. Nothing in
  this manual is invented to fill a gap.
- Voltages are stated for a nominal, calibrated module. See
  [Specifications](specifications.md#calibration).
- Parameter values are derived from the shipped editor's own tables, via
  \`spec/model.json\`. Those are the values the editor sends to the module, so
  they are as authoritative as anything short of the firmware source.

---

*Corrections and test results are welcome. Firmware behaviour may change between
versions — note which version you tested against.*
`,Ma="# Arpeggiator\n\n**Available on:** CV outputs only.\n\nArpeggiator plays the notes you are holding, one at a time, in time with the master\nclock.\n\n---\n\n## What comes out of the jack\n\nA **1 V/oct pitch** that steps through the held notes, one per **Clock division**, in the\norder set by **Direction**, extended upward by **Octave range** octaves.\n\nThe output holds each note's pitch until the next step. Arpeggiator produces pitch only —\nfor a gate per arpeggiated note, set a Gate output to [Gate](gate.md) or\n[Trigger](trig.md) with **Trigger source** pointing at this CV output.\n\nWith **Hold** `off` and no keys held, the output stops changing and holds its last\npitch. With **Hold** `on`, the arpeggio keeps running on the last chord until you\nplay a new one.\n\n---\n\n## What MIDI drives it\n\n**Note-on and note-off** on the selected **Channel** build the note pool. The\n**master clock**, divided by **Clock division**, advances through it.\n\nBecause Arpeggiator produces note data, Note FX work on it —\n[Scale](../fx/scale.md), [Transpose](../fx/transpose.md) and\n[Random octave](../fx/random-oct.md) all apply if you point them at this CV\noutput.\n\n---\n\n## Parameters\n\n> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in `spec/glossary.md`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:\n>\n> - **Clock division** — the editor says `div`\n> - **Direction** — the editor says `dir`\n> - **Octave range** — the editor says `range`\n\n\n\n| Parameter | Values | Default | Notes |\n|---|---|---|---|\n| **Channel** | `ch 1` … `ch 16` | `ch 1` | |\n| **Direction** | `Forward`, `Backward`, `Pendulum`, `random` | `Forward` | Order through the held notes |\n| **Octave range** | `1 OCT`, `2 OCT`, `3 OCT`, `4 OCT` | `1 OCT` | Octave span |\n| **Clock division** | `4/1` … `1/32`, triplets, dotted | `1/16` | One step per division |\n| **Hold** | `Off`, `On` | `Off` | Keep playing after keys are released |\n| **Swing** | `OFF`, `55%`, `60%`, `75%`, `80%`, `90%` | `OFF` | Delays every second step |\n\n### Octave range\n\n`1 OCT` plays only the notes you are holding. `2 OCT` plays them, then repeats\nthem an octave up, then returns. `3 OCT` and `4 OCT` extend further.\n\n### Direction\n\n- `Forward` — lowest to highest, then wrap.\n- `Backward` — highest to lowest, then wrap.\n- `Pendulum` — up then down without repeating the turnaround notes.\n- `random` — a random held note each step; notes can repeat.\n\n### Hold\n\nWith **Hold** `on`, releasing the keys does not stop the arpeggio. Playing a new\nchord replaces the pool. This is what you want for hands-free arpeggios you then\npatch around.\n\n`TODO(verify)`: whether, with **Hold** `on`, playing a single new note replaces the\nwhole held chord or adds to it. **Test:** hold a triad with **Hold** `on`, release,\nthen play one note. If the arpeggio becomes a single repeating note, it replaces;\nif it becomes four notes, it accumulates.\n\n---\n\n## What it's for\n\n**A classic arpeggiated line with a gate to match.**\n\n- CV 1: **Mode** `Arpeggiator`, **Channel** `ch 1`, **Direction** `forward`, **Octave range** `2 OCT`, **Clock division** `1/16`,\n  **Hold** `on`, **Swing** `OFF`.\n- GATE 1: **Mode** `Trigger`, **Trigger source** `CV 1`, **Length** `10 ms`, **Level range** `10 V`.\n\nPatch CV 1 to pitch and GATE 1 to an envelope. Hold a chord and it arpeggiates\nover two octaves in sixteenths. Because **Hold** is on, you can let go and patch\nelsewhere while it runs.\n\nSet **Swing** `60%` for shuffle, or **Direction** `pendulum` with **Octave range** `3 OCT` for the long\nrolling figure that suits slow tempos.\n",_a=`# Aftertouch

**Available on:** CV outputs and Gate outputs.

AT converts channel (monophonic) aftertouch into a voltage. Aftertouch is the
pressure you apply *after* a key is down, and channel aftertouch reports a single
pressure value for the whole keyboard.

For per-note pressure, see [Poly aftertouch](poly-at.md).

---

## What comes out of the jack

A **continuous voltage proportional to channel pressure**.

- Pressure 0 → 0 V.
- Pressure 127 → **Level range**.
- The voltage follows pressure continuously while you press, and returns to 0 V
  when you release, because most keyboards send pressure 0 on release.

With **Slew** above \`OFF\`, the output slews, which smooths the sometimes-jumpy
pressure data most keybeds produce.

---

## What MIDI drives it

**Channel pressure messages** on the selected **Channel**. Nothing else.

Many controllers do not send aftertouch at all, and many that do have it disabled
by default. If this output never moves, check your keyboard first — see
[Troubleshooting](../troubleshooting.md#an-aftertouch-output-never-moves).

---

## Parameters

> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in \`spec/glossary.md\`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:
>
> - **Level range** — the editor says \`range\`
> - **Slew** — the editor says **Slew** \`/ smooth\`



| Parameter | Values | Default | Notes |
|---|---|---|---|
| **Channel** | \`ch 1\` … \`ch 16\` | \`ch 1\` | |
| **Level range** | CV: \`+/-5 V\`, \`10 V\` … \`1 V\`, \`-1 V\` … \`-5 V\`<br/>Gate: \`10 V\` … \`1 V\` | CV: \`+/-5 V\`<br/>Gate: \`10 V\` | Voltage at full pressure |
| **Slew** | CV: \`OFF\`, \`1\` … \`127\`<br/>Gate: \`OFF\`, \`1\` … \`100\` | \`OFF\` | Slew. Higher is slower |

The **Slew** range genuinely differs between banks — \`1\`–\`127\` on a CV output and
\`1\`–\`100\` on a Gate output. This is an inconsistency in the firmware's parameter
tables, not a documentation error, and it is harmless; the extra range simply
allows slightly more slew on CV.

---

## What it's for

**Pressure into filter cutoff or vibrato depth**, the classic expressive
mapping.

- CV 4: **Mode** \`Aftertouch\`, **Channel** \`ch 1\`, **Level range** \`5 V\`, **Slew** \`15\`.

Patch CV 4 to your filter's cutoff CV input, attenuated to taste. Press harder
into held notes and the sound opens up. The **Slew** setting stops the pressure
sensor's noise from making the cutoff jitter.

A second use: patch AT to a VCA controlling an LFO's output level, and you get
pressure-controlled vibrato without using CC#1.
`,Oa='# CC recorder\n\n**Available on:** CV outputs only.\n\nCC recorder records the movement of one CC into a step grid and plays it back in\ntime. Where [Sequencer](seq.md) reads one CC per step live, CC recorder captures a\nsingle CC over time and loops what it captured.\n\nThe official manual heads this section "CV & D-Gate". It is CV-only — it does not\nappear in the Gate mode list. See [audit §6](../audit.md).\n\n---\n\n## What comes out of the jack\n\nA **stepped voltage**, one value per step, looping at **Steps** steps and\nadvancing one step per **Clock division**.\n\nWith **Level range** `= note scale` the steps are 1 V/oct pitches instead of a continuous\nvoltage, which turns the recorder into a note sequencer.\n\nWith **Glide** above `OFF` the output slides between steps.\n\nBefore anything is recorded the output sits at 0 V.\n\n---\n\n## What MIDI drives it\n\n- **The master clock** advances the steps.\n- **The CC set by **CC number, on the selected **Channel**, is what gets recorded.\n- **The note set by `Note`**, on the selected **Channel**, triggers the transport\n  action chosen by **Note action**.\n\n### Recording\n\nRecording is armed and started by playing the `Note` you have assigned, with\n**Note action** set appropriately. The four transport actions are:\n\n| **Note action** | What playing `Note` does |\n|---|---|\n| `clear seq` | Erases the recorded sequence |\n| `arm record` | Arms recording; capture begins at the next loop start |\n| `start record` | Begins recording immediately |\n| `gate start/stop` | Starts and stops playback |\n\nOnly one action can be assigned at a time, so a full workflow means changing\n**Note action** between takes — or mapping the parameter to a CC through the\n[CC map](../concepts.md#7-the-cc-map-controls-parameters-from-cc) so you\ncan switch actions from a controller.\n\n`TODO(verify)`: whether recording overwrites the whole loop or only the steps\nthat pass while you are moving the CC, and whether `arm record` stops\nautomatically after one pass. **Test:** record a sequence, then set\n**Note action** `start record`, trigger it, and move the CC for only the first half\nof the loop. If the second half retains its old values, recording is\npunch-in style; if it is zeroed, each take replaces the whole loop.\n\n---\n\n## Parameters\n\n> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in `spec/glossary.md`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:\n>\n> - **CC number** — the editor says `number`\n> - **Clock division** — the editor says `div`\n> - **Level range** — the editor says `range`\n> - **Note action** — the editor says **Note** `in dest`\n> - **Steps** — the editor says `length`\n\n\n\n| Parameter | Values | Default | Notes |\n|---|---|---|---|\n| **Channel** | `ch 1` … `ch 16` | `ch 1` | |\n| **CC number** | `0` … `127` | `1` | Which CC to record |\n| **Clock division** | `4/1` … `1/32`, triplets, dotted | `1/16` | Clock division per step |\n| **Steps** | `1` … `64` | `16` | Steps in the loop |\n| **Glide** | `OFF`, `1` … `100` | `OFF` | Slide between steps |\n| `Note` | `all`, then `C#-2` … `G8` | `C3` | Note that triggers the transport action |\n| **Note action** | `clear seq`, `arm record`, `start record`, `gate start/stop` | `clear seq` | Transport action |\n| **Level range** | `+/-5 V`, `10 V` … `1 V`, `-1 V` … `-5 V`, **Note** `scale` | `10 V` | Output scaling |\n\nLeaving `Note` at `all` means every note on the channel triggers the transport\naction, which is rarely what you want. Set a specific note — ideally one outside\nyour playing range, like `C-1`.\n\n---\n\n## What it\'s for\n\n**Capturing a filter sweep you performed, and looping it.**\n\n- CV 4: **Mode** `CC recorder`, **Channel** `ch 1`, **CC number** `74`, **Clock division** `1/16`,\n  **Steps** `32`, **Glide** `10`, **Note** `C-1`, **Note action** `start record`,\n  **Level range** `5 V`.\n\nPatch CV 4 to a filter cutoff. Play C-1 to start recording, sweep the CC 74 knob\nfor two bars, and the movement loops from then on — quantised to sixteenths, with\na little glide to smooth the steps.\n\nChange **Note action** to `clear seq` and play C-1 again to wipe it and start\nover.\n',Ea=`# MIDI CC

**Available on:** CV outputs and Gate outputs.

CC turns one MIDI control change into a voltage. It is how a knob, fader, mod
wheel, expression pedal or DAW automation lane becomes modulation in your rack.

---

## What comes out of the jack

A **continuous voltage proportional to the last received value of one CC**.

- CC value 0 → 0 V.
- CC value 127 → **Level range**.
- Values in between scale linearly.

The voltage holds until the next message. It does not decay and it does not reset
at power-on — a CV output in MIDI CC mode sits at 0 V until the first message arrives.

With **Slew** above \`OFF\`, the output slews toward each new value instead of
stepping to it, which smooths the 128-step staircase into something usable for
audio-rate-adjacent duties like filter cutoff.

On a CV output with a negative **Level range**, the voltage runs the other way: CC 127
produces −5 V.

### **Note** \`scale\`

CV outputs get one extra **Level range** option that Gate outputs do not: ****Note** \`scale\`**.

With **Note** \`scale\` selected, the output produces **1 V/oct pitch steps** rather
than a continuous voltage — the CC value is treated as a note number. Use it when
you want a CC to drive pitch, or when you want to feed the output through a
Note FX slot such as [Scale](../fx/scale.md), which only makes
sense on pitch data.

The official manual mentions this option once, in passing, in a different mode's
section, and never explains it. See [audit §11](../audit.md).

---

## What MIDI drives it

**Control change messages** matching **CC number**, on the selected **Channel**.
Nothing else. Notes on the same channel are ignored by this output.

---

## Parameters

> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in \`spec/glossary.md\`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:
>
> - **CC number** — the editor says \`number\`
> - **Level range** — the editor says \`range\`
> - **Slew** — the editor says **Slew** \`/ smooth\`



| Parameter | Values | Default | Notes |
|---|---|---|---|
| **Channel** | \`ch 1\` … \`ch 16\` | \`ch 1\` | |
| **CC number** | \`0\` … \`127\` | \`1\` | Which CC to follow. \`1\` is the mod wheel |
| **Level range** | CV: \`+/-5 V\`, \`10 V\` … \`1 V\`, \`-1 V\` … \`-5 V\`, **Note** \`scale\`<br/>Gate: \`10 V\` … \`1 V\` | CV: \`+/-5 V\`<br/>Gate: \`10 V\` | Full-scale output |
| **Slew** | CV: \`OFF\`, \`1\` … \`100\`<br/>Gate: \`OFF\`, \`1\` … \`100\` | \`OFF\` | Slew amount. Higher is slower |

### Slew

A one-pole slew on the output. The editor shows a bare number with no unit;
higher is slower.

Two reasons to use it:

- **Removing steps.** 128 CC values across 10 V is 78 mV per step, which is
  audible as zipper noise on a filter cutoff. A small amount of **Slew** removes
  it.
- **Making a lag generator.** Larger values turn abrupt automation into slow
  sweeps.

\`TODO(verify)\`: the slew time in ms for a given **Slew** value. **Test:** set
**Slew** to \`100\` and **Level range** to \`10 V\`, send CC 0 then CC 127, and time how long
the output takes to reach 10 V. Repeat at \`50\` to see whether the scale is linear.

### Conflicts to watch

- **CC#1** is also the vibrato depth control for every [Note](note.md) output on
  the same channel. If you use CC#1 here and have a Note output on the same
  channel with \`vibrato\` set, they interact.
- **CC#1 upward** is also what [Sequencer](seq.md) reads for its step values. A Sequencer
  output with **Steps** \`8\` consumes CC1–CC8 on its channel.
- The **default CC map** and the **CC map** also consume CCs, on the global
  CC channel. See [Appendix: default CC map](../appendix-cc-map.md).

If a CC seems to do two things at once, this is why. Putting your modulation CCs
on a channel with no Note or Sequencer outputs avoids all of it.

---

## What it's for

**A mod wheel controlling filter cutoff.**

- CV 3: **Mode** \`MIDI CC\`, **Channel** \`ch 1\`, **CC number** \`1\`, **Level range** \`5 V\`, **Slew** \`20\`.

Patch CV 3 to your filter's cutoff CV input. The mod wheel now sweeps the filter
over 5 V, smoothly rather than in steps.

For an expression pedal, use **CC number** \`11\`. For DAW automation, pick any CC your
DAW is not already using — 20 through 31 are conventionally free.
`,La="# Clock\n\n**Available on:** CV outputs and Gate outputs.\n\nClock produces timing pulses derived from the master clock: a steady clock, a\nstart/stop signal, or a reset pulse. It is how you drive a Eurorack sequencer\nfrom your DAW or from Portail's own internal clock.\n\n---\n\n## What comes out of the jack\n\nDepends on **Clock event**, which despite its name selects the **event type**:\n\n| **Clock event** | What comes out |\n|---|---|\n| `Clock` | A pulse every **Clock division**, **Length** milliseconds long, at **Level range** volts |\n| `Start/stop` | A single pulse when MIDI Start arrives |\n| `Reset` | A single pulse when a reset occurs |\n\n`TODO(verify)`: the official manual describes a third behaviour — \"a high gate\nwhen a midi start message is received who stay high until a midi stop message is\nreceived\" — that does not correspond to any of the three menu options by name.\nIt may be that `Start/stop` produces a sustained gate rather than a pulse.\n**Test:** set a Gate output to `Clock` with **Clock event** `start/stop`, send MIDI Start\nfrom your DAW, and measure the jack while the transport runs. If it reads\n**Level range** volts continuously, it is a gate; if it pulses once, it is a trigger.\n\nBetween pulses the output is at 0 V.\n\n---\n\n## What MIDI drives it\n\n**Not the **Channel** parameter.** Clock ignores it — the parameter is present on\nthe output but has no effect. The official manual states this correctly in a tooltip\nand nowhere in the manual body.\n\nWhat drives it is the **master clock**, which is a global setting:\n\n- **Clock source = internal** — Portail's own generator, at the tempo set in\n  global settings.\n- **Clock source = external** — MIDI clock arriving on USB or TRS.\n\nSee [Concepts §8](../concepts.md#8-one-master-clock-feeds-everything-time-based)\nand [the editor's global settings](../editor.md#global-settings).\n\nWith `clock source = external`, MIDI Start, Stop and Continue from the same\nsource drive the `Start/stop` and `Reset` event types.\n\n---\n\n## Parameters\n\n> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in `spec/glossary.md`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:\n>\n> - **Clock division** — the editor says `div`\n> - **Clock event** — the editor says `source`\n> - **Level range** — the editor says `range`\n\n\n\n| Parameter | Values | Default | Notes |\n|---|---|---|---|\n| **Channel** | `ch 1` … `ch 16` | `ch 1` | **No effect** |\n| **Clock event** | `Clock`, `Start/stop`, `Reset` | `Clock` | Event type, not a signal source |\n| **Clock division** | `4/1` … `1/32`, triplets, dotted — 23 options | `1/16` | Division of the master clock |\n| **Length** | `1 ms` … `128 ms` | `5 ms` | Pulse width |\n| **Level range** | CV: `+/-5 V`, `10 V` … `1 V`, `-1 V` … `-5 V`<br/>Gate: `10 V` … `1 V` | CV: `5 V`<br/>Gate: `10 V` | Pulse height |\n| **Swing** | `OFF`, `55%`, `60%`, `75%`, `80%`, `90%` | `OFF` | Delays every second pulse |\n\n### Clock division\n\n`1/1` is one bar of 4/4. `1/4` is a quarter note. `1/16` is a sixteenth. The\nlist also has triplets (`1/8T`) and dotted values (`1/8.`). Full list in\n[Appendix: parameter tables](../appendix-parameter-tables.md#clock-divisions).\n\n**Getting this right matters more than anything else on this page.** Most\nEurorack sequencers advance one step per pulse, so if your sequencer has 16 steps\nand you want it to cover one bar, you want **Clock division** `= 1/16`. If it is running at four\ntimes the speed you expected, you are sending `1/64`-equivalent pulses to a\nstep-per-pulse sequencer, or your sequencer expects 24 PPQN rather than one pulse\nper step. See [Recipes → clocking a sequencer](../recipes/clocking.md), which\nworks through the PPQN question specifically.\n\n### Length\n\nPulse width in milliseconds. The default of 5 ms fires almost everything.\n\nTwo constraints:\n\n- **Too short** and some modules miss it. If a sequencer skips steps, raise this\n  to 10 ms.\n- **Too long** and consecutive pulses run together. At 180 BPM a `1/32` division\n  is about 42 ms apart, so a 50 ms pulse never goes low. Keep **Length** below\n  about a third of the interval.\n\nNote an off-by-one in the value list: the first two entries both read `1 ms`.\nHarmless, but it means the list has 129 entries for 128 distinct values.\n\n### Swing\n\nDelays every second pulse by the given percentage, producing shuffle. `OFF` is\nstraight. There is no 50% entry because 50% *is* straight; the list starts at\n`55%`.\n\nSwing applies to the division you have set, so **Clock division** `1/16` with **Swing** `60%`\nswings sixteenths.\n\n---\n\n## What it's for\n\n**Clocking a Eurorack sequencer from your DAW, with a reset so it stays in\nphase.**\n\n- Global: `clock source = external`.\n- GATE 7: **Mode** `Clock`, **Clock event** `clock`, **Clock division** `1/16`, **Length** `5 ms`, **Level range** `10 V`,\n  **Swing** `OFF`.\n- GATE 8: **Mode** `Clock`, **Clock event** `reset`, **Length** `5 ms`, **Level range** `10 V`.\n\nPatch GATE 7 to the sequencer's clock input and GATE 8 to its reset input. Press\nplay in the DAW: the sequencer starts from step 1 and advances a step per\nsixteenth. Stop and restart and it returns to step 1 rather than drifting.\n\nWithout the reset cable, the sequencer keeps its position across transport stops\nand will eventually be out of phase with the DAW.\n",Da='# Envelope\n\n**Available on:** CV outputs and Gate outputs.\n\nEnvelope generates a full envelope inside Portail. In a small system this is the mode\nthat saves the most space — every output can be an envelope, so 5 HP can supply\neight of them.\n\n---\n\n## What comes out of the jack\n\nAn **envelope voltage** that rises and falls in the shape set by **Shape**, peaking\nat **Level range**.\n\n| **Shape** | What it does |\n|---|---|\n| `AR` | Attack to peak, then release. **Decay** and **Sustain** are unused |\n| `AD` | Attack to peak, then decay to zero. Ignores note-off entirely |\n| `ADSR` | Attack, decay to **Sustain**, hold while the note is held, then release |\n| `Loop` | The envelope restarts as soon as it finishes, running as an LFO |\n\n`AD` is the drum envelope: it completes regardless of how long the key is held,\nso a short trigger gives the same shape as a long one.\n\n`Loop` turns Envelope into a shape-adjustable LFO whose rate is set by the time\nparameters rather than by a clock division — the one modulation source on\nPortail that is *not* locked to the master clock.\n\nThe output rests at 0 V when idle.\n\n---\n\n## What MIDI drives it\n\nDepends on **Trigger source**:\n\n- ****Trigger source** `= note`** — note-ons on the selected **Channel**, filtered by `Note`.\n- ****Trigger source** `= CV 1` … `CV 8`** — the envelope fires with whatever note is\n  assigned to that CV output. This is how each voice in a polyphonic group gets\n  its own envelope.\n\nThe `Note` parameter filters further: `all` means any note, or set a specific\npitch so only that note fires the envelope. That makes an Envelope output work as a\nper-drum-voice envelope from a single channel.\n\n---\n\n## Parameters\n\n> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in `spec/glossary.md`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:\n>\n> - **Level range** — the editor says `range`\n> - **Trigger source** — the editor says `source`\n> - **Shape** — the editor says `type` (its second one, on the same output)\n\n\n\n| Parameter | Values | Default | Notes |\n|---|---|---|---|\n| **Channel** | `ch 1` … `ch 16` | `ch 1` | Hidden when **Trigger source** is a CV output |\n| **Trigger source** | `Note`, `CV 1` … `CV 8` | `Note` | What triggers the envelope |\n| `Note` | `all`, then `C#-2` … `G8` | `all` | Which note triggers it |\n| **Shape** | `AR`, `AD`, `ADSR`, `Loop` | `ADSR` | Envelope shape |\n| **Attack** | 128 steps, `2.1 ms` … `134217.7 ms` | `2.2 ms` | Exponential scale |\n| **Decay** | 128 steps, `2.1 ms` … `134217.7 ms` | `15.6 ms` | Exponential scale |\n| **Sustain** | `0` … `100` | `100` | Level, as a percentage of **Level range** |\n| **Release** | 128 steps, `2.1 ms` … `134217.7 ms` | `15.6 ms` | Exponential scale |\n| **Level range** | CV: `+/-5 V`, `10 V` … `1 V`, `-1 V` … `-5 V`<br/>Gate: `10 V` … `1 V` | CV: `+/-5 V`<br/>Gate: `10 V` | Peak level |\n\n### The time scale\n\n**Attack**, **Decay** and **Release** share one 128-entry exponential table. The\nextremes are worth knowing:\n\n| Step | Time |\n|---|---|\n| 0 | 2.1 ms |\n| 41 | 10.0 ms |\n| 50 | 15.6 ms |\n| 76 | 80.0 ms |\n| 101 | 1.07 s |\n| 110 | 5.59 s |\n| 120 | 26.8 s |\n| 127 | 134.2 s |\n\nThe official manual says the range is "between 0 ms and 13 secondes". Both ends\nare wrong: the floor is 2.1 ms and the ceiling is over two minutes. See\n[audit §6](../audit.md). Full table in\n[Appendix: parameter tables](../appendix-parameter-tables.md#envelope-times).\n\nBecause the scale is exponential, the low steps are closely spaced — steps 0 to\n20 cover only 2.1 ms to 4.2 ms — and the top steps jump enormously. Fine control\nlives in the lower two-thirds.\n\n### Sustain\n\nA percentage of **Level range**, not an absolute voltage. With **Level range** `5 V` and\n**Sustain** `50`, the sustain level is 2.5 V.\n\nOnly used by `ADSR`. In `AR` and `AD` it is ignored.\n\n---\n\n## What it\'s for\n\n**A drum envelope from a single trigger.**\n\n- GATE 3: **Mode** `Envelope`, **Channel** `ch 10`, **Trigger source** `note`, **Note** `C1`, **Shape** `ad`,\n  **Attack** `2.1 ms`, **Decay** around step 76 (`80 ms`), **Level range** `10 V`.\n\nPatch GATE 3 to a VCA controlling a noise source. Every C1 on channel 10 gives a\npercussive click whose length you set with **Decay**, independent of how long the\nMIDI note lasts.\n\n**A polyphonic use:** with CV 1–3 in a poly group, set three Envelope outputs with\n**Trigger source** `CV 1`, `CV 2`, `CV 3` and **Shape** `adsr`. Each voice gets its own envelope\nthat starts and releases with its own note.\n',Fa=`# Euclidean

**Available on:** Gate outputs only.

Euclidean generates a rhythm from two numbers: how many steps are in the pattern,
and how many of them should fire. The hits are distributed as evenly as possible
across the steps, which is what produces the familiar patterns found in music
worldwide.

---

## What comes out of the jack

A **gate on each step that fires**, **Gate length** milliseconds long, at **Level range**
volts. Steps that do not fire produce nothing. The pattern advances one step per
**Clock division** and loops at **Steps**.

With **Steps** \`16\` and **Fills** \`4\`, the hits land on steps 1, 5, 9 and 13 — four on
the floor. With **Steps** \`16\` and **Fills** \`5\` they spread unevenly, because five does
not divide sixteen, and that unevenness is the point.

Useful pairs:

| **Steps** | **Fills** | Result |
|---|---|---|
| 16 | 4 | Four on the floor |
| 8 | 3 | Tresillo |
| 8 | 5 | Cinquillo |
| 16 | 7 | Busy, syncopated |
| 16 | 9 | Denser, off-kilter |
| 12 | 5 | Rolling 12/8 feel |

---

## What MIDI drives it

**The master clock**, divided by **Clock division**. Nothing else.

The **Channel** parameter exists on the output but Euclidean does not respond to
notes.

\`TODO(verify)\`: whether **Channel** has any effect at all on a Euclidean output —
the official manual documents it as "Select the midi channel" without saying what
it does, and no mechanism is apparent. **Test:** set a Euclidean output, then send
notes, CCs and aftertouch on the selected channel and watch for any change in the
pattern.

---

## Parameters

> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in \`spec/glossary.md\`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:
>
> - **Clock division** — the editor says \`div\`
> - **Fills** — the editor says \`events\`
> - **Gate length** — the editor says \`gate len\`
> - **Level range** — the editor says \`range\`
> - **Steps** — the editor says \`length\`



| Parameter | Values | Default | Notes |
|---|---|---|---|
| **Channel** | \`ch 1\` … \`ch 16\` | \`ch 1\` | No apparent effect |
| **Clock division** | \`4/1\` … \`1/32\`, triplets, dotted | \`1/16\` | One step per division |
| **Gate length** | \`1 ms\` … \`128 ms\` | \`6 ms\` | Gate width |
| **Steps** | \`1\` … \`64\` | \`16\` | Pattern length |
| **Fills** | \`1\` … \`64\` | \`4\` | How many steps fire |
| **Rotate** | \`0\` … \`63\` | \`0\` | Shifts the pattern's start point |
| **Level range** | \`10 V\` … \`1 V\` | \`10 V\` | Gate height |

The official manual calls **Steps** "Steps" but describes it as "the length of
euclidean sequence", and calls **Fills** "Fill the sequencer buffer with notes",
which does not say that it is a count.

### Fills above Steps

Nothing stops you setting **Fills** \`20\` with **Steps** \`16\`.

\`TODO(verify)\`: what happens. **Test:** set **Steps** \`8\`, raise **Fills** from 8 to
16 one at a time, and watch the output. Either it saturates at every step firing,
or it wraps.

### Rotate

Shifts which step the pattern starts on, without changing which steps fire
relative to each other. A \`16/4\` pattern rotated by 1 moves the hits from steps
1, 5, 9, 13 to 2, 6, 10, 14 — the same rhythm, displaced.

This is how you get two Euclidean outputs to interlock rather than collide: give
them the same **Steps** and **Fills** and different **Rotate** values.

---

## What it's for

**Two interlocking percussion patterns from one clock.**

- GATE 5: **Mode** \`Euclidean\`, **Clock division** \`1/16\`, **Gate length** \`5 ms\`, **Steps** \`16\`,
  **Fills** \`4\`, **Rotate** \`0\`, **Level range** \`10 V\` → kick
- GATE 6: **Mode** \`Euclidean\`, **Clock division** \`1/16\`, **Gate length** \`5 ms\`, **Steps** \`16\`,
  **Fills** \`7\`, **Rotate** \`2\`, **Level range** \`10 V\` → hats

Patch GATE 5 to a kick module and GATE 6 to a hat. The kick lands square; the
hats weave around it and never quite repeat where you expect. Nudge **Rotate** on
either while it runs to shift the relationship.

Full walkthrough: [Recipes → Euclidean rhythms](../recipes/euclidean.md).
`,Ra=`# Gate

**Available on:** Gate outputs only.

Gate produces a sustained voltage for as long as a note is held. It is the
companion to [Note](note.md): Note gives pitch, Gate says when.

---

## What comes out of the jack

A **positive voltage that goes high on note-on and low on note-off**.

- High level = **Level range**, default 10 V.
- Low level = 0 V.
- With **Velocity sensitive** on, the high level scales with velocity: at **Level range** \`10 V\`, a
  velocity of 127 gives 10 V and a velocity of 64 gives about 5 V. This is the
  "dynamic gate" the module is named for.
- With **Rise** or **Fall** set, the edges are ramps rather than steps, which makes
  the output a crude envelope in its own right.

Between notes the output sits at 0 V.

---

## What MIDI drives it

Depends on **Trigger source**:

- ****Trigger source** \`= note\`** — any note-on on the selected **Channel** opens the gate; the
  gate closes when the last held note is released.
- ****Trigger source** \`= CV 1\` … \`CV 8\`** — the gate follows whichever note that CV output
  is currently playing. The **Channel** parameter disappears from the output, because
  the channel is inherited from the CV output.

The second form is what you want almost always, and it is essential for
polyphony: each voice's gate must follow its own voice, not the channel as a
whole. See [Concepts §5](../concepts.md#5-polyphony-is-several-cv-outputs-sharing-a-group).

---

## Parameters

> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in \`spec/glossary.md\`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:
>
> - **Level range** — the editor says \`range\`
> - **Retrigger** — the editor says \`retrig\`
> - **Trigger source** — the editor says \`source\`
> - **Velocity sensitive** — the editor says \`vel sens\`



| Parameter | Values | Default | Notes |
|---|---|---|---|
| **Channel** | \`ch 1\` … \`ch 16\` | \`ch 1\` | Hidden when **Trigger source** is a CV output |
| **Trigger source** | \`Note\`, \`CV 1\` … \`CV 8\` | \`CV 1\` | Where the gate follows from |
| **Level range** | \`10 V\` … \`1 V\`, in 1 V steps | \`10 V\` | Gate high level |
| **Velocity sensitive** | \`Off\`, \`On\` | \`Off\` | Scale the high level by velocity |
| **Rise** | \`OFF\`, then 99 steps from \`13 ms\` to \`67.11 s\` | \`OFF\` | Attack ramp on the rising edge |
| **Fall** | \`OFF\`, then 99 steps from \`13 ms\` to \`67.11 s\` | \`OFF\` | Decay ramp on the falling edge |
| **Retrigger** | \`Off\`, \`On\` | \`Off\` | Re-fire on a new note while one is held |

The official manual calls **Rise** and **Fall** "Up" and "Down".

### Level range

Set this to match what you are driving. A module expecting a 5 V gate may behave
unpredictably at 10 V; one with a high trigger threshold may not fire at 3 V.
Being able to set it here saves an attenuator.

### Velocity sensitive

With this on, the gate becomes a velocity signal that happens to be shaped like a
gate. Two uses:

- **Straight into a VCA** — a single cable gives you note timing *and* dynamics.
  See [Recipes → velocity to VCA](../recipes/velocity-vca.md).
- **Into an envelope with a level-sensitive trigger input** — many analogue
  envelopes respond to trigger amplitude, so the envelope inherits the dynamics.

Note the interaction with **Level range**: **Velocity sensitive** scales *between 0 V and the Level range*.
Gate mode has no separate minimum-level control. [Trigger](trig.md) does, via its
**Level min** parameter, so use Trigger if you need velocity to scale between two
non-zero voltages.

### Rise and Fall

Ramps on the edges. The official manual describes them as "a small attack
envelope", but the range is not small: it runs from 13 ms up to 67 seconds in 99
exponential steps.

- A few milliseconds of **Fall** removes the click when a gate drives a VCA
  directly.
- Long values turn Gate into a usable slow envelope with a sustain.

**Rise** and **Fall** share the same table, listed in
[Appendix: parameter tables](../appendix-parameter-tables.md#rise-and-fall-times).

### Retrigger

With **Retrigger** \`off\`, playing a second note while the first is held does not
re-fire the gate — the gate stays high and only the pitch changes. That is
legato playing.

With **Retrigger** \`on\`, every note-on drops the gate briefly and raises it again, so
downstream envelopes restart.

\`TODO(verify)\`: how long the gate drops for when **Retrigger** is on. **Test:** set
**Retrigger** \`on\`, play overlapping notes, and watch the gate on a scope; measure the
low period between the two high sections.

---

## What it's for

**The gate half of a synth voice.** GATE 1 to your envelope's gate input, with
CV 1 in [Note](note.md) mode driving the pitch.

- CV 1: **Mode** \`Note\`, **Channel** \`ch 1\`.
- GATE 1: **Mode** \`Gate\`, **Trigger source** \`CV 1\`, **Level range** \`10 V\`, **Velocity sensitive** \`off\`,
  **Rise** \`OFF\`, **Fall** \`OFF\`, **Retrigger** \`off\`.

Hold a key and the envelope sustains. Play legato and it does not retrigger.
Turn **Retrigger** on if you want every note articulated.
`,Pa=`# Mode reference

A **mode** is what a single output does. It is the first dropdown for that
output in the editor, which the official editor labels \`type\`. See
[Concepts §2](../concepts.md#2-a-mode-is-what-one-output-does).

Every page below answers the same four questions in the same order:

1. **What comes out of the jack** — the actual signal: voltage, polarity, shape,
   timing.
2. **What MIDI drives it** — which messages the mode listens to.
3. **Parameters** — every one, with its range, unit and default.
4. **What it's for** — one concrete patch.

---

## Which modes are available on which bank

| Mode | CV 1–8 | GATE 1–8 | Page |
|---|:---:|:---:|---|
| Off | ● | ● | Output sits at 0 V and ignores everything |
| Note | ● | — | [note.md](note.md) |
| Gate | — | ● | [gate.md](gate.md) |
| Trigger | ● | ● | [trig.md](trig.md) |
| MIDI CC | ● | ● | [cc.md](cc.md) |
| Velocity | ● | ● | [vel.md](vel.md) |
| Aftertouch | ● | ● | [at.md](at.md) |
| Poly aftertouch | ● | ● | [poly-at.md](poly-at.md) |
| Pitch bend | ● | ● | [pb.md](pb.md) |
| Clock | ● | ● | [clock.md](clock.md) |
| LFO | ● | ● | [lfo.md](lfo.md) |
| Envelope | ● | ● | [env.md](env.md) |
| Sequencer | ● | ● | [seq.md](seq.md) |
| CC recorder | ● | — | [cc-recorder.md](cc-recorder.md) |
| Random | ● | ● | [random.md](random.md) |
| Arpeggiator | ● | — | [arp.md](arp.md) |
| Euclidean | — | ● | [euclidean.md](euclidean.md) |

The official manual treats CC and Pitch bend as one entry ("CC/Pitch bend"). They are two
separate modes in the editor and they have separate pages here.

---

## Things that are true of every mode

Channel — every mode except OFF has one. It is \`ch 1\` … \`ch 16\`, set
independently per output. There is no global note channel.

Level range — the voltage the mode's full-scale output produces. The available
list depends on the bank, because the banks have different limits:

| On a CV output (\`range_cv_menu\`) | On a Gate output (\`range_gate_menu\`) |
|---|---|
| \`+/-5 V\`, \`10 V\`, \`5 V\`, \`4 V\`, \`3 V\`, \`2 V\`, \`1 V\`, \`-1 V\`, \`-2 V\`, \`-3 V\`, \`-4 V\`, \`-5 V\` | \`10 V\`, \`9 V\`, \`8 V\`, \`7 V\`, \`6 V\`, \`5 V\`, \`4 V\`, \`3 V\`, \`2 V\`, \`1 V\` |
| 12 options, bipolar available | 10 options, positive only |

A negative range on a CV output inverts the signal: \`-5 V\` means full scale
produces −5 V and zero produces 0 V.

CC and CC recorder on a CV output get a thirteenth option, ****Note** \`scale\`**,
which makes the output produce 1 V/oct pitch steps instead of a continuous
voltage. See [cc.md](cc.md#note-scale).

Clock division — a division of the master clock, on every time-based mode. The list is
\`4/1, 2/1, 1/1, 1/2, 1/4, 1/8, 1/16, 1/32\`, then triplets \`4/1T … 1/32T\`, then
dotted \`4/1. … 1/16.\` — 23 entries. LFO uses a slightly different list with two
extra slow values at the top (\`32/1\`, \`16/1\`) and no \`1/1\` triplet gap — 25
entries. Full lists in
[Appendix: parameter tables](../appendix-parameter-tables.md#clock-divisions).

\`1/1\` is one bar of 4/4. Larger numerator, slower.

**Defaults** quoted on these pages are the values the **editor** fills in when you
select that mode on a row. They are not necessarily the values in the module's
factory presets, which are not published — see
[unverified.md](../unverified.md).

**Note numbering:** MIDI note 60 is \`C3\`, note 0 is \`C-2\`, note 127 is \`G8\`.

---

## Choosing a mode

| You want | Use |
|---|---|
| Pitch that tracks a keyboard | [Note](note.md) on a CV output |
| A gate that follows the key | [Gate](gate.md), **Trigger source** = the CV output |
| A drum trigger from one specific key | [Trigger](trig.md) with \`Note\` set |
| A knob or fader to become a voltage | [MIDI CC](cc.md) |
| Dynamics into a VCA | [Velocity](vel.md), or [Gate](gate.md) with **Velocity sensitive** on |
| A clock for a sequencer | [Clock](clock.md) on a Gate output |
| Modulation locked to tempo | [LFO](lfo.md) |
| An envelope without spending a module | [Envelope](env.md) |
| A pattern you play in with faders | [Sequencer](seq.md) |
| A pattern from held notes | [Arpeggiator](arp.md) |
| A rhythm from two numbers | [Euclidean](euclidean.md) |
| Controlled unpredictability | [Random](random.md) |
`,Ga="# LFO\n\n**Available on:** CV outputs and Gate outputs.\n\nLFO produces a repeating modulation waveform locked to the master clock. There is\nno free-running rate control — the speed is always a division of the clock, so\nan LFO is always in time.\n\n---\n\n## What comes out of the jack\n\nA **repeating waveform** of the shape set by **Waveform**, at a rate set by\n**Clock division**, with amplitude set by **Level range**.\n\nOn a CV output with **Level range** `= +/-5 V` the waveform is bipolar, swinging through\n0 V. With a unipolar range like `5 V` it runs from 0 V to 5 V. On a Gate output\nonly unipolar ranges exist.\n\nThe waveforms:\n\n| **Waveform** | Shape |\n|---|---|\n| `Saw up` | Ramps up, resets down |\n| `Saw down` | Ramps down, resets up |\n| `Square` | Alternates between the extremes |\n| `Triangle` | Linear up then linear down |\n| `Sine` | Smooth |\n| `Noise` | Continuously random, changing every clock division |\n| `random` | Sample-and-hold: a new random level held for each division |\n\n`Noise` and `random` are both random, and the difference between them is not\ndocumented. `TODO(verify)`: **test:** set both in turn with **Clock division** `1/4` and watch\non a scope. If one steps once per beat and the other changes continuously, the\nstepping one is `random` and the other is `Noise`.\n\n`Square` on a Gate output makes a usable clock divider — a square wave at `1/4`\nis a quarter-note gate.\n\n---\n\n## What MIDI drives it\n\nTwo things:\n\n- **The master clock** sets the rate, via **Clock division**. Internal or external — see\n  [Concepts §8](../concepts.md#8-one-master-clock-feeds-everything-time-based).\n- **Note-on messages** on the selected **Channel** affect the phase, if **Phase mode** is\n  not `Continuous`.\n\n---\n\n## Parameters\n\n> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in `spec/glossary.md`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:\n>\n> - **Clock division** — the editor says `div`\n> - **Level range** — the editor says `range`\n\n\n\n| Parameter | Values | Default | Notes |\n|---|---|---|---|\n| **Channel** | `ch 1` … `ch 16` | `ch 1` | Only used by `Note reset` and `Gated` modes |\n| **Waveform** | `Saw up`, `Saw down`, `Square`, `Triangle`, `Sine`, `Noise`, `random` | `Saw up` | |\n| **Clock division** | `32/1`, `16/1`, `4/1` … `1/32`, triplets, dotted — 25 options | `4/1` | Division of the master clock |\n| **Phase mode** | `Continuous`, `Note reset`, `Gated` | `Continuous` | Phase behaviour |\n| **Level range** | CV: `+/-5 V`, `10 V` … `1 V`, `-1 V` … `-5 V`<br/>Gate: `10 V` … `1 V` | CV: `+/-5 V`<br/>Gate: `10 V` | Amplitude |\n\nThe editor spells the first mode `Continuous`. That is the on-screen string.\n\n### Clock division\n\nThe LFO's division list is not the same as [Clock](clock.md)'s. It starts two\nsteps slower, with `32/1` (thirty-two bars) and `16/1` (sixteen bars) at the top,\nfor very slow evolving modulation. The default `4/1` is one cycle every four\nbars.\n\nFull list in\n[Appendix: parameter tables](../appendix-parameter-tables.md#lfo-divisions).\n\n### Phase mode\n\n- **`Continuous`** — the LFO free-runs, locked to the clock but never restarted.\n  Two LFOs at the same division stay in a fixed phase relationship with each\n  other. Use this for background movement.\n- **`Note reset`** — every note-on on **Channel** restarts the waveform from its\n  beginning. This makes the LFO behave like a repeating envelope, and it is what\n  you want when the modulation should feel attached to each note.\n- **`Gated`** — the LFO runs only while a key is held, and stops when released.\n\n`TODO(verify)`: what the output does in `Gated` mode between notes — whether it\nholds its last value or falls to 0 V. **Test:** set `Gated` with a slow **Clock division**\nlike `1/1`, hold a note until the waveform is partway up, release, and measure\nthe jack.\n\n---\n\n## What it's for\n\n**Tempo-locked filter movement that resets with each phrase.**\n\n- CV 7: **Mode** `LFO`, **Channel** `ch 1`, **Waveform** `triangle`, **Clock division** `1/2`,\n  **Phase mode** `note reset`, **Level range** `5 V`.\n\nPatch CV 7 to a filter cutoff. The filter sweeps up and down over a half-note,\nin time, and restarts cleanly every time you play a new note rather than\nwandering out of phase with the music.\n\n**A second one, free:** set a Gate output to `LFO`, **Waveform** `square`,\n**Clock division** `1/4`, **Level range** `10 V`. That is a quarter-note clock, produced without\nspending a [Clock](clock.md) output — useful when you have run out of jacks and\nneed one more steady pulse.\n",Na='# Note\n\n**Available on:** CV outputs only.\n\nNote is the mode that turns MIDI notes into pitch. It is CV-only because pitch\nneeds the bipolar range and 16-bit resolution that Gate outputs do not have.\n\n---\n\n## What comes out of the jack\n\nA **pitch control voltage at 1 volt per octave**, 16-bit, updated when a new note\nis assigned to this output.\n\nThe voltage holds at the last note\'s value between notes. It does not return to\nzero on note-off, and it does not gate — Note produces pitch and nothing else.\nTo also get a gate, set a Gate output to [Gate mode](gate.md) with its **Trigger source**\npointing at this CV output.\n\nTwelve semitones is exactly 1.000 V. The usable span is the CV bank\'s\n−5 V to +10 V, so about fifteen octaves of theoretical range — far more than any\noscillator will track.\n\n`TODO(verify)`: which MIDI note corresponds to 0 V. **Test:** set a CV output to\nNote, play `C3` (MIDI 60), and measure the jack with a multimeter. Then play\n`C4` and confirm the reading is exactly 1.000 V higher.\n\nIf **Vibrato rate** is set and CC#1 is above zero, a sine modulation is added to the\npitch. If **Glide** is set, the voltage ramps to each new note instead of\nstepping.\n\n---\n\n## What MIDI drives it\n\n- **Note on / note off** on the selected **Channel**. Which of several simultaneous\n  notes this output takes is decided by **Voice mode**.\n- **Pitch bend** on the same channel, scaled by **Bend range**.\n- **CC#1 (mod wheel)** sets vibrato *depth*. This is not optional — with CC#1 at\n  0, the **Vibrato rate** parameter produces no audible effect at all.\n\nNotes outside **Low note** … **High note** are ignored by this output entirely.\n\n---\n\n## Parameters\n\n> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in `spec/glossary.md`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:\n>\n> - **Bend range** — the editor says `pb range`\n> - **High note** — the editor says `max`\n> - **Low note** — the editor says `min`\n> - **Vibrato rate** — the editor says `vibrato`\n> - **Voice mode** — the editor says `out type`\n\n\n\n| Parameter | Values | Default | Notes |\n|---|---|---|---|\n| **Channel** | `ch 1` … `ch 16` | `ch 1` | |\n| **Voice mode** | `Mono last`, `Mono low`, `Mono high`, `Poly group 1` … `Poly group 4` | `Mono last` | Voice assignment. See below |\n| **Bend range** | `+/-1` … `+/-24` semitones | `+/-2` | How far full pitch bend moves the pitch |\n| **Vibrato rate** | `OFF`, then 99 steps from `0.06 Hz` to `37.07 Hz` | `OFF` | Vibrato **rate**. Depth comes from CC#1 |\n| **Glide** | `OFF`, then `1` … `127` | `OFF` | Portamento amount. **Unitless** — see below |\n| **Legato** | `Off`, `On` | `Off` | Whether glide applies always or only to overlapping notes |\n| **Low note** | `C-2` … `G8` | `C-2` | Lowest note this output accepts |\n| **High note** | `C-2` … `G8` | `G8` | Highest note this output accepts |\n\n### Voice mode — voice assignment\n\nThe three `mono` settings decide which note wins when several are held:\n\n- **`Mono last`** — the most recently pressed note. The usual choice.\n- **`Mono low`** — the lowest held note. Good for basslines under chords.\n- **`Mono high`** — the highest held note. Good for lead lines over chords.\n\nThe four `poly group` settings put this output into a shared round-robin pool.\n**The number of voices equals the number of CV outputs you assign to the same\ngroup.** Three outputs in `Poly group 1` is three-note polyphony. Four groups\nexist, so you can run four independent polyphonic parts.\n\nThe official manual\'s description of `Mono high` says it takes "the lowest midi\nnote", which is a copy-paste error — see [audit §6](../audit.md).\n\n### Glide has no unit\n\nThe control is `OFF` then `1`–`127`, and the editor shows a bare number. Higher\nis slower. The official manual calls it "glide time" but no time is displayed.\n\n`TODO(verify)`: the actual glide time in ms per volt. The editor\'s source\ncontains an unused lookup table (`glide_times`) suggesting a range of roughly\n0.1 ms/V to 419 ms/V, but that table is not wired to this control in the shipped\neditor, so the real mapping is unconfirmed. **Test:** set **Glide** to `127`, play\n`C2` then `C5` (three octaves, 3 V), and time how long the pitch takes to\narrive. Divide by 3 for ms per volt. Repeat at `64` to see whether the curve is\nlinear or exponential.\n\n### Legato\n\nControls whether glide applies to every note or only to overlapping ones.\n\n`TODO(verify)`: which way round. The editor labels the values only `Off` and\n`On`, the official manual says the parameter selects "if the glide will be\napplied between all the notes or only when two notes are played without being\nreleased", and a comment in the editor\'s source says "by default glide is only\nlegato notes" — which contradicts the default being `Off`. **Test:** set **Glide**\nto `100`, **Legato** to `Off`, and play two separated notes. If the pitch slides,\n`Off` means "glide always". Then set **Legato** to `On` and repeat.\n\n### Low note and High note\n\nA note filter local to this output. Notes below **Low note** or above **High note** are ignored\nhere but still reach other outputs on the same channel.\n\nThis is how you split a keyboard without an FX slot: set CV 1 to\n**Low note** `C-2, max B2` and CV 2 to **Low note** `C3, max G8`, both on channel 1, and you have\na bass zone and a lead zone. For a filter you can also place mid-chain, use the\n[Note filter](../fx/note-filter.md) FX slot instead.\n\n---\n\n## What it\'s for\n\n**A monosynth voice.** CV 1 to your oscillator\'s 1 V/oct input, GATE 1 to your\nenvelope\'s gate input.\n\n- CV 1: **Mode** `Note`, **Channel** `ch 1`, **Voice mode** `mono last`, **Bend range** `+/-2`,\n  everything else default.\n- GATE 1: **Mode** `Gate`, **Trigger source** `CV 1`, **Level range** `10 V`.\n\nPlay the keyboard: the oscillator tracks it and the envelope fires on each key\npress. Bend the wheel and the pitch moves two semitones. Push the mod wheel with\n**Vibrato rate** set to about `2 Hz` and you get vibrato.\n\nExtended into three voices: [Recipes → poly synth](../recipes/poly-synth.md).\n',Wa=`# Pitch bend

**Available on:** CV outputs and Gate outputs.

Pitch bend converts the pitch bend wheel into a voltage you can patch anywhere. This is
separate from the **Bend range** parameter on [Note](note.md), which applies bend to
that output's pitch directly.

Use Note's **Bend range** when you want the wheel to bend the pitch. Use Pitch bend mode when
you want the wheel as a general-purpose bipolar controller.

---

## What comes out of the jack

A **bipolar voltage following the pitch bend wheel**.

- Wheel fully down → the negative extreme.
- Wheel centred → 0 V.
- Wheel fully up → **Level range**.

Pitch bend is a 14-bit message, so this output is smooth — far smoother than a
7-bit [MIDI CC](cc.md). That makes Pitch bend the best choice on Portail for anything where
stepping would be audible.

On a CV output with **Level range** \`= +/-5 V\`, the wheel gives you −5 V to +5 V through
zero. On a Gate output the negative half cannot be produced, so the useful travel
is centre-to-up only.

\`TODO(verify)\`: what a Gate output does with the downward half of the wheel —
whether it clamps at 0 V or rescales the full wheel travel into 0 V…**Level range**.
**Test:** set a Gate output to Pitch bend with **Level range** \`10 V\`, measure the jack with the
wheel centred, then fully down. If centre reads 5 V, the travel is rescaled; if
it reads 0 V, the negative half is clamped.

---

## What MIDI drives it

**Pitch bend messages** on the selected **Channel**.

---

## Parameters

> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in \`spec/glossary.md\`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:
>
> - **Level range** — the editor says \`range\`
> - **Slew** — the editor says **Slew** \`/ smooth\`



| Parameter | Values | Default | Notes |
|---|---|---|---|
| **Channel** | \`ch 1\` … \`ch 16\` | \`ch 1\` | |
| **Level range** | CV: \`+/-5 V\`, \`10 V\` … \`1 V\`, \`-1 V\` … \`-5 V\`<br/>Gate: \`10 V\` … \`1 V\` | CV: \`+/-5 V\`<br/>Gate: \`10 V\` | Voltage at full up-bend |
| **Slew** | CV: \`OFF\`, \`1\` … \`127\`<br/>Gate: \`OFF\`, \`1\` … \`100\` | \`OFF\` | Slew. Usually leave \`OFF\` |

Leave **Slew** at \`OFF\` unless you specifically want lag. Pitch bend is already
high resolution and filtering it only adds latency.

---

## What it's for

**A bipolar hand controller for something that is not pitch.**

- CV 6: **Mode** \`Pitch bend\`, **Channel** \`ch 1\`, **Level range** \`+/-5 V\`, **Slew** \`OFF\`.

Patch CV 6 into a stereo panner's CV input, or an oscillator's FM index, or a
wavefolder. The wheel springs back to centre, so you get a control that returns
to a known neutral when you let go — something no CC-based control gives you
without extra work.

The other use: keep Note's **Bend range** at \`+/-2\` for conventional bending, and
*also* run a Pitch bend output into a filter, so the wheel bends the pitch and opens the
filter together.
`,qa=`# Poly aftertouch

**Available on:** CV outputs and Gate outputs.

Poly aftertouch converts the pressure applied to **one specific key** into a voltage.
Unlike [Aftertouch](at.md), which reports one pressure for the whole keyboard,
polyphonic aftertouch reports a separate pressure per note.

---

## What comes out of the jack

A **continuous voltage proportional to the pressure on one chosen note**.

- Pressure 0 → 0 V.
- Pressure 127 → **Level range**.
- Pressure messages for any other note are ignored by this output.

With **Slew** above \`OFF\`, the output slews.

---

## What MIDI drives it

**Polyphonic key pressure messages** on the selected **Channel**, whose note
number matches **Note**.

Polyphonic aftertouch is rare. Most keyboards do not send it; a handful of
modern controllers and MPE instruments do. If you are not sure whether yours
does, [Aftertouch](at.md) is the one that is far more likely to work.

---

## Parameters

> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in \`spec/glossary.md\`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:
>
> - **Level range** — the editor says \`range\`
> - **Slew** — the editor says **Slew** \`/ smooth\`



| Parameter | Values | Default | Notes |
|---|---|---|---|
| **Channel** | \`ch 1\` … \`ch 16\` | \`ch 1\` | |
| **Note** | \`C-2\` … \`G8\` | \`C1\` | **Which note number to track** |
| **Level range** | CV: \`+/-5 V\`, \`10 V\` … \`1 V\`, \`-1 V\` … \`-5 V\`<br/>Gate: \`10 V\` … \`1 V\` | \`10 V\` | Voltage at full pressure |
| **Slew** | CV: \`OFF\`, \`1\` … \`127\`<br/>Gate: \`OFF\`, \`1\` … \`100\` | \`OFF\` | Slew. Higher is slower |

### Note means something different here

On [Gate](gate.md), [Trigger](trig.md), [Velocity](vel.md) and [Envelope](env.md), **Note**
selects a CV output to follow. On Poly aftertouch it selects **a MIDI note number**.
There is no option to follow a CV output.

That means Poly aftertouch is tied to a fixed pitch, not to a voice. In a polyphonic
patch, a Poly aftertouch output tracks whichever voice happens to be playing that note,
not a particular voice. See [unverified.md](../unverified.md).

---

## What it's for

**Per-key pressure on a drone or pad note.** Set **Note** to the note you hold
down as a drone, and its pressure becomes a modulation source that the other
notes you play do not disturb.

- CV 5: **Mode** \`Poly aftertouch\`, **Channel** \`ch 1\`, **Trigger source** \`C2\`, **Level range** \`5 V\`, **Slew** \`20\`.

Hold C2, play a melody above it, and press into the C2 key: only C2's pressure
moves CV 5. Patch it to a wavefolder or a resonance input for a hand-controlled
swell that plays independently of the melody.
`,$a="# Random\n\n**Available on:** CV outputs and Gate outputs, with substantially different\nparameters on each.\n\nRandom generates new values on demand — either random voltages around a centre\npitch (CV), or random gates with a probability (Gate).\n\nThe two versions are different enough to be worth reading as separate modes.\n\n---\n\n## What comes out of the jack\n\n**On a CV output:** a **new random pitch** each time it is triggered, centred on\n**Base note** and spanning **Level range** semitones either side. The output holds between\ntriggers. With **Slew** above `OFF`, it glides to each new value instead of\njumping.\n\nBecause the output is pitch-shaped, Note FX work on it — putting\n[Scale](../fx/scale.md) after a Random CV output is the standard way to\nget random notes that are in key.\n\n**On a Gate output:** a **random gate**. Each trigger, **Probability** decides\nwhether a gate fires at all, and **Random level** decides how much its height varies.\nGate width is set by **Length**.\n\n---\n\n## What MIDI drives it\n\nSet by **Trigger source**, which here means *what causes a new value*:\n\n- ****Trigger source** `= note`** — a note-on on the selected **Channel** generates a new\n  value.\n- ****Trigger source** `= clock`** — the master clock generates a new value every **Clock division**.\n\nThere are only these two. The official manual claims a third option, \"from\nanother CV line\", which does not exist in the editor. See\n[audit §6](../audit.md).\n\nWith **Trigger source** `= note` on a CV output, the incoming note replaces **Base note** as\nthe centre — so the randomness follows what you play rather than sitting around a\nfixed pitch.\n\n---\n\n## Parameters — CV output\n\n> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in `spec/glossary.md`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:\n>\n> - **Clock division** — the editor says `div`\n> - **Level range** — the editor says `range`\n> - **Probability** — the editor says `distribution`\n> - **Random level** — the editor says `rnd level`\n> - **Slew** — the editor says **Slew** `/ smooth`\n> - **Trigger source** — the editor says `source`\n\n\n| Parameter | Values | Default | Notes |\n|---|---|---|---|\n| **Channel** | `ch 1` … `ch 16` | `ch 1` | |\n| **Trigger source** | `Note`, `Clock` | `Clock` | What triggers a new value |\n| **Clock division** | `4/1` … `1/32`, triplets, dotted | `1/16` | Rate, when **Trigger source** `= clock` |\n| **Base note** | `C-2` … `G8` | `C2` | Centre pitch. Ignored when **Trigger source** `= note` |\n| **Level range** | `+/-1` … `+/-47` semitones | `+/-12` | Spread either side of centre |\n| **Slew** | `OFF`, `1` … `100` | `OFF` | Glide between values |\n\n## Parameters — Gate output\n\n| Parameter | Values | Default | Notes |\n|---|---|---|---|\n| **Channel** | `ch 1` … `ch 16` | `ch 1` | |\n| **Trigger source** | `Note`, `Clock` | `Clock` | What triggers a new value |\n| **Clock division** | `4/1` … `1/32`, triplets, dotted | `1/16` | Rate, when **Trigger source** `= clock` |\n| **Length** | `Latch`, `1 ms` … `127 ms` | `6 ms` | Gate width |\n| **Probability** | `0%` … `100%` | `11%` | Chance a gate fires |\n| **Random level** | `0%` … `100%` | `0%` | How much gate height varies |\n| **Level range** | `10 V` … `1 V` | `10 V` | Maximum gate height |\n| **Slew** | `OFF`, `1` … `127` | `OFF` | Slew on the output |\n\n**Probability** at `0%` produces nothing; at `100%` every trigger fires a gate,\nwhich makes it a plain clock. The interesting territory is 20–70%.\n\n**Random level** at `0%` gives every gate the full **Level range** height. Raise it and the\ngates vary in amplitude, which — into a velocity-sensitive envelope or straight\ninto a VCA — reads as accents.\n\n`TODO(verify)`: the editor's stored defaults for Gate Random cover only five of\nits seven parameters, so **Level range** and **Slew** may initialise to something other\nthan the first menu entry. **Test:** set a Gate output to Random in the editor,\nthen click **request from portail** and read back what the module actually\nholds.\n\n---\n\n## What it's for\n\n**Random notes that stay in key.**\n\n- CV 5: **Mode** `Random`, **Trigger source** `clock`, **Clock division** `1/8`, **Base note** `C2`,\n  **Interval range** `+/-12`, **Slew** `OFF`.\n- FX 1: **FX type** `Scale`, **Target** `CV 5`, **Scale** `pentatonic minor`, **Root note** `A`.\n\nPatch CV 5 to pitch and a [Euclidean](euclidean.md) or Random gate to the\nenvelope. You get a generative line that never leaves A minor pentatonic. Raise\n**Slew** for a slurred, portamento version.\n\n**The gate version:** GATE 5 as `Random`, **Trigger source** `clock`, **Clock division** `1/16`,\n**Probability** `35%`, `rnd level 40%`, **Length** `5 ms` gives sparse, accented hits —\na good ghost-note layer under a fixed drum pattern.\n",Ba="# Sequencer\n\n**Available on:** CV outputs and Gate outputs, with different parameters on each.\n\nSequencer is a step sequencer whose **step values come from MIDI CC messages**, not\nfrom notes. Step 1 takes the value of CC1, step 2 takes CC2, step 3 takes CC3,\nand so on up to the sequence length.\n\nThe idea is a controller with a row of faders: each fader is a step, and you draw\nthe sequence with your hands. It is Portail's take on a Voltage Block or a Klee.\n\n---\n\n## What comes out of the jack\n\n**On a CV output** (**Voice mode** `= notes`): a **1 V/oct pitch** per step. The CC\nvalue of that step is added to **Base note**, so a CC of 0 plays **Base note** and\nhigher CC values play higher pitches.\n\n**On a CV output** (**Voice mode** `= cc`): a **continuous voltage** per step, scaled\nby the CC value directly rather than treated as a pitch.\n\n**On a Gate output** (**Mode** `= gates`): a **gate per step**, **Gate length**\nmilliseconds long, at **Level range** volts. Whether a step fires is determined by its\nCC value.\n\n**On a Gate output** (**Mode** `= cc`): a stepped voltage, as with CV's `cc` mode but\nunipolar.\n\nWith **Glide** above `OFF` (CV only), the output slides between steps instead of\nstepping.\n\nThe sequence advances one step per **Clock division** of the master clock, in the order set by\n**Direction**.\n\n---\n\n## What MIDI drives it\n\nThree separate things:\n\n- **The master clock** advances the steps, divided by **Clock division**.\n- **CC1 upward on the selected **Channel set the step values. A sequence with\n  **Steps** `8` reads CC1 through CC8. Sending CC5 = 100 changes step 5 and nothing\n  else.\n- **Note-ons on the selected **Channel do whatever **Note action** says —\n  transpose the sequence, or randomise it.\n\n### The CC collision\n\nThis is the thing to watch, and the official manual never mentions it. A Sequencer\noutput with **Steps** `16` consumes **CC1 through CC16 on its channel**. CC1 is the\nmod wheel, which is also [Note](note.md) mode's vibrato depth control, and CCs in\nthat region are what most controllers send by default.\n\nPut the Sequencer output on a channel of its own if you can. If you cannot, keep\n**Steps** short and make sure nothing else on that channel is in Note mode with\n`vibrato` set.\n\n---\n\n## Parameters — CV output\n\n> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in `spec/glossary.md`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:\n>\n> - **Clock division** — the editor says `div`\n> - **Direction** — the editor says `dir`\n> - **Gate length** — the editor says `gate len`\n> - **Level range** — the editor says `range`\n> - **Note action** — the editor says **Note** `in dest`\n> - **Steps** — the editor says `length`\n> - **Voice mode** — the editor says `out type`\n\n\n| Parameter | Values | Default | Notes |\n|---|---|---|---|\n| **Channel** | `ch 1` … `ch 16` | `ch 1` | Both the MIDI CC source and the note input |\n| **Voice mode** | `notes`, `cc` | `notes` | Pitch steps or voltage steps |\n| **Base note** | `C-2` … `G8` | `C1` | Pitch when a step's CC is 0 |\n| **Clock division** | `4/1` … `1/32`, triplets, dotted | `1/16` | Clock division per step |\n| **Steps** | `1` … `64` | `8` | Number of steps. Also how many CCs are consumed |\n| **Direction** | `Forward`, `Backward`, `Pendulum`, `random` | `Forward` | Play order |\n| **Glide** | `OFF`, `1` … `100` | `OFF` | Slide between steps |\n| **Note action** | `Transpose`, `randomise 1_oct`, `randomise 2_oct` | `Transpose` | What an incoming note does |\n\n## Parameters — Gate output\n\n| Parameter | Values | Default | Notes |\n|---|---|---|---|\n| **Channel** | `ch 1` … `ch 16` | `ch 1` | |\n| **Mode** | `Gates`, `cc` | `Gates` | Gates or stepped voltage |\n| **Clock division** | `4/1` … `1/32`, triplets, dotted | `1/16` | Clock division per step |\n| **Gate length** | `1 ms` … `128 ms` | `6 ms` | Gate width per step |\n| **Steps** | `1` … `64` | `8` | Number of steps |\n| **Direction** | `Forward`, `Backward`, `Pendulum`, `random` | `Forward` | Play order |\n| **Level range** | `10 V` … `1 V` | `10 V` | Gate height |\n| **Note action** | `Off`, `randomise` | `Off` | What an incoming note does |\n\nThe official manual calls **Steps** \"Steps\" and **Note action** \"Note in function\".\n\n### Direction\n\n- `Forward` — 1, 2, 3, … n, 1, 2, …\n- `Backward` — n, … 3, 2, 1, n, …\n- `Pendulum` — 1, 2, … n, … 2, 1, 2, …\n- `random` — a random step each division. Not a shuffled permutation; steps can\n  repeat.\n\n### Note action\n\nIncoming notes on the channel do not become sequence steps — they act on the\nsequence as a whole:\n\n- **`Transpose`** — the played note transposes the whole sequence.\n  `TODO(verify)`: which note is the zero point for transposition. **Test:** set\n  **Note action** `transpose`, run a sequence, and play notes chromatically upward\n  while watching the output pitch. The note at which the sequence plays\n  untransposed is the zero point.\n- **`randomise 1_oct` / `randomise 2_oct`** — the played note scrambles the\n  sequence within one or two octaves.\n- On Gate outputs the choice is just `Off` or `randomise`.\n\n---\n\n## What it's for\n\n**A fader-drawn bassline.** With a controller whose eight faders send CC1–CC8:\n\n- CV 2: **Mode** `Sequencer`, **Channel** `ch 3`, **Voice mode** `notes`, **Base note** `C1`,\n  **Clock division** `1/8`, **Steps** `8`, **Direction** `forward`, **Glide** `OFF`.\n- GATE 2: **Mode** `Sequencer`, **Channel** `ch 3`, **Step output** `gates`, **Clock division** `1/8`, **Gate length** `10 ms`,\n  **Steps** `8`, **Level range** `10 V`.\n\nPatch CV 2 to pitch and GATE 2 to an envelope. Start the clock. Move the faders\nand the bassline changes under your hands, in time, without stopping.\n\nAdd [Scale](../fx/scale.md) pointed at CV 2 and every fader position lands\nin key, which turns an awkward instrument into a playable one.\n",Ha='# Trigger\n\n**Available on:** CV outputs and Gate outputs.\n\nTrigger produces a short pulse of a fixed length, optionally from one specific MIDI\nnote. It is the drum-trigger mode.\n\nThe difference from [Gate](gate.md): a gate lasts as long as the key is held; a\ntrig lasts as long as **Length** says, regardless. And Trigger can filter to a single\nnote, so one MIDI channel of drums can be split across eight outputs.\n\n---\n\n## What comes out of the jack\n\nA **pulse** that rises when a matching note arrives and falls after **Length**.\n\n- High level = **Level range**.\n- Low level = **Level min**, default 0 V. This is not necessarily 0 V — see below.\n- With **Length** `= latch`, it stops being a pulse and behaves like a gate: high\n  while the note is held.\n- With **Velocity sensitive** on, the high level is scaled by velocity between **Level min**\n  and **Level range**, not between 0 V and **Level range**.\n\nOn a CV output, **Level range** can be negative, so a Trigger can be a downward pulse.\n\n### The velocity scaling, precisely\n\nWith **Velocity sensitive** `on`, **Level min** `= 2 V`, **Level range** `= 5 V`:\n\n| Velocity | Output |\n|---|---|\n| 127 | 5 V |\n| 64 | about 3.5 V |\n| 1 | just above 2 V |\n\nThe pulse never falls below **Level min** during its high phase. This two-point\nscaling is what Trigger has and Gate does not.\n\n---\n\n## What MIDI drives it\n\n- **Note-on** on the selected **Channel**, filtered by `Note`.\n- If **Note** `= all`, every note-on fires the trig.\n- If `Note` is set to a specific pitch, only that pitch fires it.\n- On a Gate output, **Trigger source** can instead point at a CV output, in which case the\n  trig fires whenever that CV output takes a new note.\n\n---\n\n## Parameters\n\n> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in `spec/glossary.md`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:\n>\n> - **Level min** — the editor says `minimum`\n> - **Level range** — the editor says `range`\n> - **Trigger source** — the editor says `source`\n> - **Velocity sensitive** — the editor says `vel sens`\n\n\n| Parameter | Values | Default | Bank |\n|---|---|---|---|\n| **Channel** | `ch 1` … `ch 16` | `ch 1` | both |\n| **Trigger source** | `Note`, `CV 1` … `CV 8` | `Note` | **Gate only** |\n| `Note` | `all`, then `C#-2` … `G8` | `all` | both |\n| **Length** | `Latch`, then `1 ms` … `127 ms` | `Latch` | both |\n| **Velocity sensitive** | `Off`, `On` | `Off` | both |\n| **Level min** | `0 V` … `9 V`, in 1 V steps | `0 V` | both |\n| **Level range** | CV: `+/-5 V`, `10 V` … `1 V`, `-1 V` … `-5 V`<br/>Gate: `10 V` … `1 V` | CV: `+/-5 V`<br/>Gate: `10 V` | both |\n\nThe official manual names **Level min** and **Level range** inconsistently — its parameter\nlist calls them "Val min" and "Val max", its headings call them "Minimum" and\n"Range". They are one pair of controls. See [audit §7](../audit.md).\n\n### `Note`\n\n`all` is index 0 in the list; the pitch options start at `C#-2`. There is no way\nto select `C-2` as a specific trigger note, because that slot is taken by `all`.\nIf you need `C-2` specifically, transpose your source or use **Low note**/**High note** on a\n[Note](note.md) output instead.\n\n### Length\n\n- **`Latch`** — behaves as a gate, high while the note is held.\n- **`1 ms` … `127 ms`** — a fixed pulse.\n\nMost Eurorack trigger inputs want somewhere between 1 ms and 10 ms. If a module\nis not firing, the pulse is probably too short for it; try 5 ms, then 10 ms.\nAnything above about 20 ms starts to matter musically at fast tempos, because a\n50 ms trig at 1/32 notes will still be high when the next one arrives.\n\n---\n\n## What it\'s for\n\n**Drum triggers from a groovebox or DAW.** One MIDI channel carrying General\nMIDI drums, split across four Gate outputs.\n\n- GATE 1: **Mode** `Trigger`, **Channel** `ch 10`, **Trigger source** `note`, **Note** `C1`, **Length** `5 ms`,\n  **Level range** `10 V` → kick\n- GATE 2: same but **Note** `D1` → snare\n- GATE 3: same but **Note** `F#1` → closed hat\n- GATE 4: same but **Note** `A#1` → open hat\n\nPatch each to a drum module\'s trigger input. Every output ignores the notes meant\nfor the others.\n\nTurn **Velocity sensitive** `on` with **Level min** `2 V` on the hats and the accents come through as\nlevel differences, which most analogue drum modules respond to.\n\nFull walkthrough: [Recipes → drum triggers](../recipes/drum-triggers.md).\n',Xa=`# Velocity

**Available on:** CV outputs and Gate outputs.

Velocity turns note velocity into a voltage that holds between notes. It is how you
get dynamics as a separate, patchable signal.

---

## What comes out of the jack

A **stepped voltage proportional to the velocity of the most recent note**.

- Velocity 0 → 0 V.
- Velocity 127 → **Level range**.
- The voltage is set at note-on and **holds** until the next note. It does not
  fall at note-off.

That holding behaviour is the difference between Velocity and a velocity-sensitive
[Gate](gate.md). A velocity-sensitive gate gives you a signal that is high only
while the note sounds; Velocity gives you a level that persists, suitable for
modulating something that should stay changed until the next note.

---

## What MIDI drives it

Depends on **Trigger source**:

- ****Trigger source** \`= note\`** — the velocity of any note-on on the selected **Channel**.
- ****Trigger source** \`= CV 1\` … \`CV 8\`** — the velocity of the note currently assigned to
  that CV output. In a polyphonic group, this is what gives each voice its own
  velocity.

---

## Parameters

> **If you are using the official editor**, some of these controls have different names on screen. This manual uses the vocabulary in \`spec/glossary.md\`, which gives one name to each concept; the official editor reuses several names for unrelated things. On this page:
>
> - **Level range** — the editor says \`range\`
> - **Trigger source** — the editor says \`source\`


| Parameter | Values | Default | Notes |
|---|---|---|---|
| **Channel** | \`ch 1\` … \`ch 16\` | \`ch 1\` | Hidden when **Trigger source** is a CV output |
| **Trigger source** | \`Note\`, \`CV 1\` … \`CV 8\` | \`CV 1\` | Whose velocity to follow |
| **Level range** | CV: \`+/-5 V\`, \`10 V\` … \`1 V\`, \`-1 V\` … \`-5 V\`<br/>Gate: \`10 V\` … \`1 V\` | \`10 V\` | Voltage at velocity 127 |

Note the default **Trigger source** is \`CV 1\`, not \`Note\`. If you set a Velocity output and
nothing happens, check whether it is waiting on a CV output that is set to \`OFF\`.

There is no **Slew** on Velocity, so the output steps. If you need it smoothed, that
is what [MIDI CC](cc.md) mode's filter is for, or slew it externally.

---

## What it's for

**Per-voice dynamics in a polyphonic patch.** With CV 1–3 in a poly group:

- GATE 4: **Mode** \`Velocity\`, **Trigger source** \`CV 1\`, **Level range** \`10 V\`
- GATE 5: **Mode** \`Velocity\`, **Trigger source** \`CV 2\`, **Level range** \`10 V\`
- GATE 6: **Mode** \`Velocity\`, **Trigger source** \`CV 3\`, **Level range** \`10 V\`

Each output carries the velocity of its own voice. Patch each into the CV input
of that voice's VCA, or into a filter's cutoff CV for velocity-to-brightness.

**The simpler one-cable alternative:** if all you want is dynamics into a VCA and
you do not need the level to hold between notes, use [Gate](gate.md) with
**Velocity sensitive** \`on\` instead — one cable does gate and dynamics together. See
[Recipes → velocity to VCA](../recipes/velocity-vca.md).
`,ja=`# On-module controls

Everything you can do without a computer.

**This is the least documented part of the module.** The official manual mentions
a button exactly once, in the firmware update procedure on its final page, and
never says what either button does in normal use — despite instructing you on
page 3 to "start using one of the 8 preset of the Portail". See
[audit §8](audit.md).

Both the **buttons** and the **LEDs** were read out of the firmware, so most of
this chapter is now confirmed rather than guessed — a reversal of the vendor
documentation, which describes neither. What the buttons do is settled; a couple
of timing details, and what the LED colours mean in the less-common states, are
the only things left for a hardware press-test, and each is marked and pointed at
[unverified.md](unverified.md).

---

## The hardware

| Element | Count | Confirmed by |
|---|---|---|
| Buttons | 2 | Firmware disassembly — a preset selector (up / down) plus a two-button save |
| RGB LEDs | 16, one per output | Firmware disassembly — WS2812 addressable RGB, one per CV and Gate output |
| Screen | None | Official manual: "we opted for a system that utilizes an external editor … rather than including an on-board screen" |

The LEDs are the module's whole visual display. They are **not** a per-mode
colour legend — there is no "Note is green, LFO is blue" mapping, and looking for
one is the reason the panel seems obscure. What they actually show is described in
[What the LEDs mean](#what-the-leds-mean) below, which is confirmed from the
firmware rather than guessed.

---

## The two buttons

The module has two buttons, and the firmware makes them a **preset selector plus a
save** — nothing more. This is the single most useful correction to the vendor
documentation, which calls them "menu and mode" and implies an on-module editing
menu. **There is no edit menu and no mode-cycling.** The firmware's button handler
does exactly three things: next preset, previous preset, and save.

The button behaviour below is **confirmed from the firmware** (version 0.83r).
The one thing that is *not* firmware-certain is the **▲/▼ silkscreen labels**: the
firmware only knows the two buttons as GPIO 23 and GPIO 22. The mapping to ▲
(up / GPIO 23) and ▼ (down / GPIO 22) is inferred from press direction and from
the official manual naming the bootloader button ▼. If your panel's arrows seem
reversed, swap ▲ and ▼ in the table — the *actions* are certain, only which
physical button is which is inferred.

### Gesture reference

| Gesture | What it does | Status |
|---|---|---|
| **▲ short press** (right / GPIO 23) | **Active preset + 1.** Recalled immediately. Wraps from 8 back to 1. | **Confirmed** (firmware 0.83r) |
| **▼ short press** (left / GPIO 22) | **Active preset − 1.** Recalled immediately. Wraps from 1 back to 8. | **Confirmed** (firmware 0.83r) |
| **▲ + ▼ together, then release** | **Saves the active preset to flash**, overwriting it. Identical to the editor's **save parameters**. | **Confirmed** (firmware 0.83r) |
| **▼ hold, then power up** | Enters the RP2040 bootloader — the module mounts as the USB drive \`RPI-RP2\` for a firmware update. See [the editor](editor.md#firmware-updates). | **Confirmed** (official manual + firmware) |
| **▲ or ▼ held** (~2 s+) | Auto-repeats the preset step, so you can scroll through presets without repeated presses. | Inferred — repeat rate needs a press-test (OQ-3) |

Three things follow from this table, all confirmed from the firmware:

- **Recall is immediate.** A short press changes the active preset *and loads it*
  right away — there is no "select then confirm" step. The output configuration
  changes the moment you press. The **red** LED marker moves to the new preset's
  position (see [What the LEDs mean](#what-the-leds-mean)); the button-to-preset
  link and the LED-to-preset link independently agree in the firmware.
- **A panel save is exactly an editor save.** Both buttons together call the same
  flash routine as the SysEx save. It writes only the preset region, so like the
  editor's save it **cannot touch the firmware** — see
  [Can I break my module?](troubleshooting.md#can-i-break-my-module).
- **There is nothing else.** No long-press menu, no mode editor, no hidden
  two-button combos beyond save. If you were looking for a way to edit parameters
  on the module, there isn't one — that is what the editor is for.

---

## Selecting and saving presets on the module

Because the buttons are a preset selector plus a save, a complete workflow is
available with no computer at all:

1. **Step to the preset you want** with ▲ (up) and ▼ (down). Each press recalls
   immediately — you hear the change as you scroll. Hold a button to auto-repeat
   through the eight slots.
2. **Watch the red LED marker** to see where you are — recalling a preset lights
   one LED red. (Which LED corresponds to which of the 8 presets is confirmed to
   happen but not yet mapped; see [What the LEDs mean](#what-the-leds-mean) and
   [unverified.md](unverified.md).)
3. **To keep edits made in the editor**, press **both buttons together** and
   release. This saves the live configuration into the active preset, overwriting
   it — the same operation as the editor's **save parameters**, and it survives
   power-off.

The vendor's product page describes "a simple embedded editor" with "simple midi
learn assignations" on the module. **The firmware exposes no such thing.** The
only on-module actions are preset up, preset down, and save; all deeper
configuration — modes, parameters, CC map learning — is done in the editor. If a
future firmware adds an on-module editor, this section will need revisiting, but
version 0.83r has none.

---

## Running standalone

Once a preset is saved, the module runs it with no computer attached. USB is for
configuration only. Power the case on and the saved preset is active.

\`TODO(verify)\`: **which preset loads at power-on** — always slot 1, or whichever
was last selected. **Test:** select preset 3, power the case off and on, then
connect the editor and check which preset is reported as current.

---

## The two things still worth a press-test

The button *actions* are settled. Two timing details are inferred from the
firmware and would be confirmed by a minute with the hardware. Both are folded
into **OQ-3** in \`spec/open-questions.md\`; record anything you find in
[unverified.md](unverified.md).

- **Does a single press show the current preset before the next press moves it?**
  The firmware has a ~5-second gate that suggests the first tap after a pause
  might just *display* where you are. **Test:** leave the module untouched for ten
  seconds, then press ▲ once. If the preset does **not** change on that first
  press but the red marker lights, the first press is a "show". If it steps
  straight to the next preset, there is no show step.

- **How fast does hold-to-repeat scroll, and is there a second threshold?** The
  firmware has both a 2-second and a 5-second timer on the buttons. **Test:** hold
  ▲ and count how many presets pass per second, and whether the rate changes after
  a few seconds. Note the two rates if it does.

## What the LEDs mean

There is one RGB LED per output — 8 for the CV outputs, 8 for the Gate outputs.
Each one carries **two pieces of information at once**:

- **How bright it is** shows the output's **live level**. The LED glows in
  proportion to the voltage or gate the output is producing right now, like a VU
  meter. A silent output sits at a dim idle glow; a rising LFO, an open gate or a
  high note lights it up.
- **What colour it is** shows the module's current **state** — idle, activity, a
  recalled preset, and so on — laid over the brightness.

The colour is **not** tied to the output's mode. Two outputs both running LFO
look the same if they carry the same signal; two outputs in different modes look
the same if their levels match. So you cannot read an output's mode off its LED —
but you can read, at a glance, which outputs are doing something and what the
module as a whole is up to.

### The colour reference

| What you see | What it means |
|---|---|
| **Dim grey glow**, brightness barely above black | The output is **idle** — powered, configured, but producing no signal right now |
| **Brightness rising and falling** | The output's **live level**. Brighter is a higher voltage or an open gate. This is the VU-meter behaviour, layered under whatever colour is showing |
| **Blue** | **MIDI or clock activity** — the module is receiving MIDI, or a clock tick just arrived |
| **Red** on one LED | A **preset was just recalled**; red marks the preset's position |
| **White** | **Active / selected** — the output or item the panel is currently acting on |
| **Cycling through colours** | **MIDI-learn is armed** — each mapped slot lights its target as you assign CCs |
| **Green** | A **save or confirmation** just completed |

Brightness (live level), the blue/red/white/green/cycling palette, and the
addressable-RGB hardware are all confirmed from the firmware. The exact moment
each state colour appears, and the precise curve mapping voltage to brightness,
are not yet pinned down.

\`TODO(verify)\`: **the exact triggers for the yellow, cyan and warm-white palette
entries, and the value-to-brightness curve.** These colours exist in the
firmware's palette but the events that show them are not traced. This is tracked
as **OQ-15** in \`spec/open-questions.md\`, which gives a filming recipe: in a dim
room, record the LED column while powering up, recalling each preset, playing
sustained notes and a rising LFO, sending clock and start/stop, arming MIDI-learn,
and pressing each button — then read any unfamiliar colour off a single frame.
See [unverified.md](unverified.md).

### Using the LEDs to diagnose

Because brightness tracks the live level and blue tracks MIDI, the panel answers
two questions without a computer or a scope:

- **Is MIDI arriving?** If nothing goes blue while you play, the problem is
  upstream of Portail — a cable, a port, or a Type B TRS adapter. Several
  [troubleshooting](troubleshooting.md) entries start here.
- **Is an output actually producing anything?** A configured output that stays at
  the dim idle glow while you play is not receiving what it expects — wrong
  channel, wrong note filter, or a **Trigger source** pointing at an unused output.

The companion editor shows this same colour legend on screen, so the panel and
the app share one vocabulary.

---

## What you cannot do without a computer

The buttons do preset selection and save, and nothing else, so everything below
requires the editor:

- Setting a mode on an output, and its parameters
- Configuring FX slots
- Setting the tempo numerically, or the clock source
- Building CC map slots with specific **Low note**/**High note** scaling
- Backing up or restoring presets
- Reading the firmware version

The design intent is stated plainly in the official manual: the editor exists
because eowave chose to leave out a screen to keep the module at 5 HP and avoid
adding noise. The on-module controls are for recall and quick adjustments, not
for building patches.

---

## Contributing what you find

The button actions and the LED colour language are settled. What is left is small
and physical: the button auto-repeat rate, whether a first press shows before it
moves, the exact preset-to-LED mapping, and the triggers for the less-common LED
colours. If you run those press-tests, record what you see in
[unverified.md](unverified.md) and the last \`TODO(verify)\` markers on this page
can be retired.
`,za=`# Quick start

Goal: a MIDI keyboard plays a note, and an oscillator in your rack tracks it.

This takes about five minutes. Do it before you configure anything, because it
proves the module, the cable, the power and your MIDI source all work while
there is still only one thing that can be wrong.

---

## 1. Power the module down and install it

Portail is 5 HP and draws **110 mA on +12 V, 20 mA on −12 V, 0 mA on 5 V**.

1. Turn your case off.
2. Plug the 10-pin end of the ribbon cable into the header on the back of
   Portail. **The red stripe goes to −12 V.** The header is keyed on most cases
   but check the silkscreen.
3. Plug the 16-pin end into your bus board, red stripe to −12 V.
4. Screw the module into the rails.
5. Turn the case on.

Portail has reverse-polarity protection, so a backwards cable will not destroy
it. It will simply not start.

**You should see:** the output LEDs light. If nothing lights at all, go to
[Troubleshooting → the module shows no sign of life](troubleshooting.md#the-module-shows-no-sign-of-life).

---

## 2. Connect a MIDI source

Two inputs, either one works:

- **USB-C** — to a computer, phone or tablet. Portail appears as a class-compliant
  USB MIDI device named \`Portail\`. No driver needed.
- **TRS MIDI** — 3.5 mm, **Type A** wiring. If your controller has a 5-pin DIN
  socket, you need a DIN-to-TRS-A adapter. A Type B cable will not work; this is
  the single most common cause of "no MIDI at all" on the TRS input.

For this first test, use whichever is quicker. A USB keyboard plugged into a
computer running a DAW, with the DAW's output set to \`Portail\`, is fine.

---

## 3. Patch two cables

You need one oscillator with a 1 V/oct input and one envelope or VCA with a gate
input. Any voice will do.

\`\`\`mermaid
flowchart LR
  KB["MIDI keyboard"] -->|USB-C or TRS| P["Portail"]
  P -->|"CV 1"| VCO["VCO — 1V/oct in"]
  P -->|"GATE 1"| EG["Envelope — gate in"]
  VCO -->|audio| VCA["VCA"]
  EG -->|CV| VCA
  VCA --> OUT["Output"]
\`\`\`

- **CV 1** → your oscillator's 1 V/oct input.
- **GATE 1** → your envelope's gate or trigger input.

Turn your monitors down before the next step.

---

## 4. Play

Play a note on the keyboard, on **MIDI channel 1**.

**You should hear** a pitched note that starts when you press the key and stops
when you release it, and that tracks the keyboard an octave per twelve
semitones.

That is the whole test. If it worked, the module is fine and everything from here
is configuration.

---

## Why that worked without configuring anything

Portail ships with a factory preset in which **CV 1 is set to Note mode on
channel 1** and **GATE 1 is set to Gate mode with its source set to CV 1**.
That pairing — a pitch output and a gate output that follows it — is the default
in preset 1.

\`TODO(verify)\`: the exact contents of factory presets 1–8 are not published, and
the editor's source contains only its own per-mode defaults, not the module's
factory presets. **Test:** connect the editor, select each preset in turn from
the preset menu, click **request from portail**, and use **save to file** to dump
each one. Compare the eight files. That gives you the real factory contents, and
it is worth doing before you overwrite anything.

---

## If you heard nothing

Work down this list in order. Each step rules out one thing.

1. **Is MIDI arriving at all?** The module's LED activity should respond to
   incoming MIDI. If the LEDs are static while you play, the problem is upstream
   of Portail — wrong port selected in your DAW, or a TRS Type B cable.
2. **Are you on channel 1?** The factory preset listens on channel 1. Many
   controllers default elsewhere.
3. **Is the gate reaching the envelope?** Patch GATE 1 into anything with an LED
   and confirm it blinks when you play.
4. **Is the pitch moving but wrong?** If notes play but the intervals are wrong,
   the oscillator's 1 V/oct input may be attenuated, or you may be listening to a
   quantised output. Portail's Note mode is unquantised by default.
5. Anything else: [Troubleshooting](troubleshooting.md).

---

## Next

- [Concepts](concepts.md) — read this before configuring anything. It is short
  and it will save you from the two mistakes everyone makes (assuming a gate
  output can only make gates, and assuming an FX slot applies to everything).
- [Recipes → Two-voice mono setup](recipes/index.md) — the natural next patch.
`,Ua=`# Clocking a sequencer correctly

**Goal:** a Eurorack sequencer runs in time with your groovebox or DAW, starts
from step 1 when you press play, and stays in phase for as long as you leave it
running.

This is the thing people get wrong most often, and the failure is not obvious —
everything appears to work, then drifts out over a few minutes, or runs at four
times the speed you expected.

---

## The two questions you have to answer first

**1. What does your sequencer want?** There are two conventions and they are not
compatible:

| Convention | What the sequencer expects | Typical of |
|---|---|---|
| **Step-per-pulse** | One pulse advances one step | Most Eurorack sequencers |
| **PPQN** | A fixed number of pulses per quarter note, usually 24 | Modules designed around MIDI or DIN sync |

If your sequencer is step-per-pulse and you want 16 steps per bar, you want a
pulse every sixteenth — **Clock division** \`1/16\`.

If your sequencer wants 24 PPQN, you need 24 pulses per quarter note, and
Portail's division menu is musical rather than PPQN-based. See
[the PPQN problem](#the-ppqn-problem) below.

**2. Where is the clock coming from?** Portail's master clock is either internal
or external, globally. With a groovebox as your master, you want **external**.

---

## Cabling

\`\`\`mermaid
flowchart LR
  GB["Groovebox<br/>MIDI out"] -->|"TRS Type A"| P["Portail"]
  P -->|"GATE 7 — clock"| SQ["Eurorack sequencer<br/>clock in"]
  P -->|"GATE 8 — reset"| SQR["same sequencer<br/>reset in"]
\`\`\`

**The reset cable is not optional.** Without it the sequencer keeps its position
across transport stops, and after a few starts and stops it will be on step 7
when your groovebox is on step 1. Everything will sound almost right, which is
worse than sounding wrong.

---

## Settings

**Global settings** — in the editor's GLOBAL tab:

| Setting | Value |
|---|---|
| Clock source | \`External\` |
| Clock state | \`start\` |
| Reset on continue | \`On\` — see below |

**Outputs:**

| Output | **Mode** | **Clock event** | **Clock division** | **Length** | **Level range** | **Swing** |
|---|---|---|---|---|---|---|
| GATE 7 | \`Clock\` | \`Clock\` | \`1/16\` | \`5 ms\` | \`10 V\` | \`OFF\` |
| GATE 8 | \`Clock\` | \`Reset\` | — | \`5 ms\` | \`10 V\` | — |

The **Channel** parameter on a Clock output has no effect. Leave it at whatever it
is.

Press **update all parameters**, then **save parameters**.

---

## What you should hear

Press play on the groovebox. The Eurorack sequencer starts from step 1 and
advances one step per sixteenth note. Stop and press play again: it returns to
step 1.

Let it run for several minutes alongside the groovebox. Nothing should drift.

---

## The PPQN problem

MIDI clock is defined as **24 pulses per quarter note**. Portail receives that
and divides it down into the musical divisions in its **Clock division** menu. So for a
step-per-pulse sequencer, **Clock division** does exactly what you want and there is nothing
to think about.

The trouble is a sequencer that wants raw 24 PPQN on its clock input. Portail's
menu has no \`1/24\` entry, and there is no \`PPQN\` setting.

\`TODO(verify)\`: **whether any clock division setting produces 24 pulses per quarter
note.** The division list is \`4/1, 2/1, 1/1, 1/2, 1/4, 1/8, 1/16, 1/32\` plus
triplets and dotted values. \`1/32\` gives 8 pulses per quarter note; a \`1/16T\`
triplet gives 6 per quarter. None is obviously 24.

**Test:** set **Clock division** \`1/4\` and count Portail's pulses against your groovebox's
quarter notes over 16 bars — they should be 1:1. Then set **Clock division** \`1/32\` and count
again; you should get 8 per quarter note. If those hold, the divisions are
musical as documented and 24 PPQN is not directly available, and you will need a
clock multiplier module between Portail and a PPQN-hungry sequencer.

Most Eurorack sequencers are step-per-pulse, so this affects a minority of
setups — but if your sequencer is running far too slowly and no **Clock division** setting
fixes it, this is why.

---

## Reset on continue

A global setting whose name does not explain it. It controls what Portail does
when it receives MIDI **Continue** — the message a sequencer sends when resuming
from a paused position rather than from the start.

- **\`On\`** — a Continue is treated like a Start, and everything resets to the
  beginning.
- **\`Off\`** — a Continue resumes where things left off.

The official manual calls it "A specialized function for compatibility with
certain sequencers or Ableton live" and says no more. \`On\` is the safer default
because it makes stop-and-start behaviour predictable; turn it \`Off\` only if you
specifically want pause-and-resume.

---

## Using Portail's own clock instead

If you have no external master, Portail can be the clock:

| Setting | Value |
|---|---|
| Clock source | \`Internal\` |
| Clock state | \`start\` |
| Speed | 30–250 BPM |

Everything else stays the same. Note that the editor's tempo slider stops at
250 BPM, but the tempo parameter reached through a
[CC map](../concepts.md#7-the-cc-map-controls-parameters-from-cc) mapping
covers 30–284 BPM in 2 BPM steps — so a mapped CC can push the tempo past what
the slider allows.

---

## If it doesn't work

**The sequencer runs at the wrong speed.** Your **Clock division** does not match what the
sequencer expects per step. If it is four times too fast, you are on \`1/16\` and
it wants \`1/4\`. Work it out by setting **Clock division** \`1/4\` and confirming one pulse per
beat, then divide from there.

**The sequencer doesn't start.** Check \`clock state\` is \`start\` in the global
settings — with it at \`stop\`, the internal clock is halted and nothing is
generated. With \`clock source external\`, also confirm your groovebox is actually
transmitting MIDI clock; many devices have it switched off by default.

**It starts but skips steps.** **Length** is too short for the sequencer's input.
Raise it from 5 ms to 10 ms.

**It runs but ignores the reset.** Confirm GATE 8 is set to **Clock event** \`reset\`, not
\`Start/stop\`. Also check whether your sequencer's reset input expects a trigger
or a gate — see the \`TODO(verify)\` on [Clock](../modes/clock.md).

**It drifts slowly out of phase.** You have no reset cable, or the reset input
is not connected to anything. Drift over minutes is almost always this.

**Everything is in time but feels wrong.** Check **Swing** is \`OFF\` on the clock
output. Swing on a master clock swings everything downstream, which is rarely
what you want — swing the parts instead.
`,Ya=`# A DAW-driven mono voice

**Goal:** one track in your DAW drives a monophonic voice in the rack, with
pitch, gate and two automation lanes.

This is the same voice as [multitrack CV/gate pairs](multitrack.md), configured
for a computer rather than a hardware sequencer. The difference is not the
module — it is that a DAW gives you automation lanes, and those map onto
[MIDI CC](../modes/cc.md) outputs.

---

## Cabling

\`\`\`mermaid
flowchart LR
  DAW["DAW<br/>USB-C"] --> P["Portail"]
  P -->|"CV 1 — pitch"| VCO["VCO"]
  P -->|"GATE 1 — gate"| EG["Envelope"]
  P -->|"CV 2 — automation"| FLT["Filter cutoff"]
  P -->|"CV 3 — automation"| FX["Effect send / anything"]
\`\`\`

One USB cable in, four cables out.

---

## DAW setup

1. Connect Portail with USB-C. It appears as a class-compliant MIDI device named
   \`Portail\`. There is no driver to install.
2. Create a MIDI track and set its **output** to \`Portail\`, channel 1.
3. Create two automation lanes on that track sending **CC 74** and **CC 21**.

CC 74 is the conventional filter-cutoff controller, so many DAWs and controllers
already have it mapped. CC 21 is in the 20–31 range that almost nothing uses by
default, which makes it safe for anything.

**Avoid CC 1.** It is the mod wheel, and it also sets vibrato depth on every
[Note](../modes/note.md) output on the same channel. Automating it will make your
pitch wobble.

---

## Settings

| Output | **Mode** | **Channel** | **Voice mode** | **Bend range** | **Vibrato rate** | **Glide** | **Legato** |
|---|---|---|---|---|---|---|---|
| CV 1 | \`Note\` | \`ch 1\` | \`Mono last\` | \`+/-2\` | \`OFF\` | \`OFF\` | \`Off\` |

| Output | **Mode** | **Trigger source** | **Level range** | **Velocity sensitive** | **Rise** | **Fall** | **Retrigger** |
|---|---|---|---|---|---|---|---|
| GATE 1 | \`Gate\` | \`CV 1\` | \`10 V\` | \`On\` | \`OFF\` | \`5 ms\` | \`On\` |

| Output | **Mode** | **Channel** | **CC number** | **Level range** | **Slew** |
|---|---|---|---|---|---|
| CV 2 | \`MIDI CC\` | \`ch 1\` | \`74\` | \`5 V\` | \`20\` |
| CV 3 | \`MIDI CC\` | \`ch 1\` | \`21\` | \`5 V\` | \`10\` |

Press **update all parameters**, then **save parameters**.

---

## What you should hear

Press play. The track's notes drive the oscillator's pitch, the envelope fires on
each note, and the two automation lanes move the filter and whatever CV 3 is
patched to.

**Velocity sensitive** \`on\` means the DAW's note velocities become gate height, so your
programmed dynamics carry through — see [velocity to VCA](velocity-vca.md).

---

## Why Slew is set on the MIDI CC outputs

A CC is 7-bit: 128 values across 5 V is 39 mV per step. On a filter cutoff that
is audible as zipper noise, especially on slow sweeps where the DAW sends a
stream of adjacent values.

**Slew** \`20\` on CV 2 slews between values and removes it. CV 3 gets less because
its destination is unspecified and lag may not be wanted.

\`TODO(verify)\`: the slew time in milliseconds for a given **Slew** value.
**Test:** set **Slew** \`100\`, **Level range** \`10 V\`, send CC 0 then CC 127, and time how
long the output takes to arrive. Halve the setting and check whether the time
halves.

---

## Latency

USB MIDI adds a small, generally consistent delay. It is usually not worth
worrying about, but two things help if it is:

- **Set your DAW's track delay** to compensate, once you have measured it.
- **Do not compensate with [Delay](../fx/delay.md)** on Portail — it only
  adds more, in steps of about 8 ms.

If timing accuracy matters more than convenience, drive Portail from hardware
over TRS instead. See [clocking a sequencer](clocking.md).

---

## Adding a second track

You have seven CV outputs and seven Gate outputs left. A second voice is a second
DAW track on channel 2:

| Output | **Mode** | **Channel** | **Voice mode** |
|---|---|---|---|
| CV 4 | \`Note\` | \`ch 2\` | \`Mono last\` |

| Output | **Mode** | **Trigger source** | **Level range** | **Retrigger** |
|---|---|---|---|---|
| GATE 2 | \`Gate\` | \`CV 4\` | \`10 V\` | \`On\` |

Repeat up to eight voices. See [multitrack CV/gate pairs](multitrack.md) for the
full layout.

---

## If it doesn't work

**The DAW doesn't see Portail.** Some DAWs enumerate MIDI devices only at
startup. Quit and reopen with the module already connected.

**Notes play but automation does nothing.** Check the CC number matches on both
sides, and that your automation lane is actually sending — many DAWs need the
lane armed or the track in a specific automation mode.

**The pitch wobbles when a lane moves.** You are automating CC 1. Move it to
another number, or set **Vibrato rate** to \`OFF\` on the Note row.

**Notes stick on when you stop the transport.** The DAW stopped without sending
note-offs. See
[Troubleshooting → a note is stuck on](../troubleshooting.md#a-note-is-stuck-on).

**The editor won't connect while the DAW is running.** On some systems a USB MIDI
device can only be opened by one application at a time. Close the DAW, configure
in the editor, save, then reopen the DAW. See
[the editor](../editor.md#if-the-editor-cannot-see-the-module).
`,Ka='# Drum triggers from a groovebox\n\n**Goal:** a hardware groovebox or drum machine, connected over TRS MIDI, fires\nfour separate drum modules in your rack — each on its own trigger output, each\nresponding only to its own part.\n\n---\n\n## What you need\n\n- A groovebox or hardware sequencer with a MIDI output.\n- A DIN-to-TRS **Type A** adapter, unless your device already has a 3.5 mm TRS\n  MIDI out wired Type A.\n- Four Eurorack modules with trigger inputs: kick, snare, hat, whatever you have.\n\n---\n\n## Cabling\n\n```mermaid\nflowchart LR\n  GB["Groovebox<br/>MIDI out"] -->|"TRS Type A"| P["Portail<br/>TRS MIDI in"]\n  P -->|GATE 1| K["Kick"]\n  P -->|GATE 2| S["Snare"]\n  P -->|GATE 3| H["Closed hat"]\n  P -->|GATE 4| O["Open hat"]\n```\n\nNothing goes into a CV output. Drums need timing, not pitch, so all four live on\nthe Gate bank and your CV outputs stay free.\n\n---\n\n## Two ways to split the parts\n\nYour groovebox does one of two things. Check which before you configure anything.\n\n**A. Each drum track sends on its own MIDI channel.** Common on Elektron boxes\nand most modern grooveboxes. Split by **Channel**.\n\n**B. All drums send on one channel, as different notes.** Common on drum\nmachines that follow the General MIDI convention, usually on channel 10. Split by\n`Note`.\n\nYou can tell which by watching Portail\'s LEDs while you play a pattern, or by\nchecking your groovebox\'s MIDI settings page.\n\n---\n\n## Settings — option A, split by channel\n\nEach output listens to a different channel and accepts any note on it.\n\n| Output | **Mode** | **Channel** | **Trigger source** | `Note` | **Length** | **Velocity sensitive** | **Level min** | **Level range** |\n|---|---|---|---|---|---|---|---|---|\n| GATE 1 | `Trigger` | `ch 1` | `Note` | `all` | `5 ms` | `Off` | `0 V` | `10 V` |\n| GATE 2 | `Trigger` | `ch 2` | `Note` | `all` | `5 ms` | `Off` | `0 V` | `10 V` |\n| GATE 3 | `Trigger` | `ch 3` | `Note` | `all` | `5 ms` | `Off` | `0 V` | `10 V` |\n| GATE 4 | `Trigger` | `ch 4` | `Note` | `all` | `5 ms` | `Off` | `0 V` | `10 V` |\n\nSet your groovebox\'s four drum tracks to channels 1, 2, 3 and 4.\n\n## Settings — option B, split by note\n\nAll four listen to the same channel and each accepts one note.\n\n| Output | **Mode** | **Channel** | **Trigger source** | `Note` | **Length** | **Velocity sensitive** | **Level min** | **Level range** |\n|---|---|---|---|---|---|---|---|---|\n| GATE 1 | `Trigger` | `ch 10` | `Note` | `C1` | `5 ms` | `Off` | `0 V` | `10 V` |\n| GATE 2 | `Trigger` | `ch 10` | `Note` | `D1` | `5 ms` | `Off` | `0 V` | `10 V` |\n| GATE 3 | `Trigger` | `ch 10` | `Note` | `F#1` | `5 ms` | `Off` | `0 V` | `10 V` |\n| GATE 4 | `Trigger` | `ch 10` | `Note` | `A#1` | `5 ms` | `Off` | `0 V` | `10 V` |\n\nThose four notes are the General MIDI kick, snare, closed hat and open hat. If\nyour device uses different ones, read the note it sends for each pad and use\nthat.\n\n**Remember Portail calls middle C `C3`.** If your groovebox calls the kick `C2`,\nit is using C4-as-middle-C numbering and Portail will call the same note `C1`.\nWhen in doubt, set `Note` to `all` on one output, play a single pad, and check\nwhich note fires — then work from there.\n\nPress **update all parameters**, then **save parameters**.\n\n---\n\n## What you should hear\n\nPlay a pattern. Each drum module fires on its own part and ignores the others.\nMuting a track on the groovebox silences exactly one module.\n\n---\n\n## Adding dynamics\n\nTurn **Velocity sensitive** to `On` and set **Level min** to `2 V` on the hats:\n\n| Output | **Velocity sensitive** | **Level min** | **Level range** |\n|---|---|---|---|\n| GATE 3 | `On` | `2 V` | `10 V` |\n| GATE 4 | `On` | `2 V` | `10 V` |\n\nNow an accented hat produces close to 10 V and a ghost note produces just over\n2 V. Most analogue drum modules respond to trigger amplitude, so the accents come\nthrough as level and often as timbre.\n\n**Level min** matters: without it, a soft hit produces a voltage too low to trigger\nthe module at all, and the ghost notes vanish rather than getting quieter. Set it\njust above your module\'s trigger threshold.\n\n---\n\n## Making it less rigid\n\nTwo additions, once the basics work:\n\n- **FX 1:** **FX type** `Humanize`, **Target** `GATE 3`, **Amount** `12%` — the hats stop landing\n  exactly on the grid.\n- **FX 2:** **FX type** `Random velocity`, **Target** `GATE 3`, **Level range** `60`, **Blend** `added` — and\n  their level varies too. Requires **Velocity sensitive** `on`, which you have set above.\n\nKeep both small. See [Humanize](../fx/humanize.md) and\n[Random velocity](../fx/random-vel.md).\n\n---\n\n## If it doesn\'t work\n\n**Nothing fires at all.** Almost always the TRS adapter. Portail\'s TRS input is\n**Type A**; a Type B cable passes nothing. Test by connecting the groovebox over\nUSB instead — if it works on USB, the problem is the adapter, not the\nconfiguration.\n\n**One module fires on every drum.** That output has **Note** `all` when it should\nhave a specific note, or all your groovebox tracks are on the same channel and\nyou configured option A.\n\n**Nothing fires but the LEDs respond.** MIDI is arriving and Portail is\ntriggering, so the problem is downstream: check **Level range** against what your drum\nmodule expects, and raise **Length** from 5 ms to 10 ms in case the pulse is too\nshort.\n\n**Some hits are missed at fast tempos.** **Length** is too long — a 50 ms trigger\nat 1/32 notes is still high when the next one arrives. Drop it to 3 ms.\n\n**Accents don\'t come through.** **Velocity sensitive** is `Off`, or your groovebox is sending\na fixed velocity. Check the groovebox\'s accent or velocity settings first.\n\nMore in [Troubleshooting](../troubleshooting.md).\n',Qa=`# Euclidean rhythms

**Goal:** a full percussion pattern generated inside Portail from a handful of
numbers, with parts that interlock rather than collide.

No sequencer needed — only a clock.

---

## Cabling

\`\`\`mermaid
flowchart LR
  CLK["Clock source"] --> P["Portail"]
  P -->|GATE 1| K["Kick"]
  P -->|GATE 2| S["Snare"]
  P -->|GATE 3| H["Hat"]
  P -->|GATE 4| C["Clap — derived"]
\`\`\`

The clock is either Portail's internal generator or MIDI clock from a groovebox.
Both work; see [clocking a sequencer](clocking.md) for the external case.

---

## Global settings

For a self-contained patch:

| Setting | Value |
|---|---|
| Clock source | \`Internal\` |
| Clock state | \`start\` |
| Speed | \`120\` BPM |

For following a groovebox, set clock source to \`External\` instead and leave the
tempo alone.

---

## Settings

| Output | **Mode** | **Clock division** | **Gate length** | **Steps** | **Fills** | **Rotate** | **Level range** |
|---|---|---|---|---|---|---|---|
| GATE 1 | \`Euclidean\` | \`1/16\` | \`5 ms\` | \`16\` | \`4\` | \`0\` | \`10 V\` |
| GATE 2 | \`Euclidean\` | \`1/16\` | \`5 ms\` | \`16\` | \`2\` | \`4\` | \`10 V\` |
| GATE 3 | \`Euclidean\` | \`1/16\` | \`5 ms\` | \`16\` | \`7\` | \`2\` | \`10 V\` |

Press **update all parameters**, then **save parameters**.

---

## What you should hear

**GATE 1** — four hits per bar, evenly spaced. Four on the floor.

**GATE 2** — two hits per bar, displaced by four steps, so they land on the
backbeat.

**GATE 3** — seven hits spread across sixteen steps. Seven does not divide
sixteen, so the spacing is uneven and the pattern has a lopsided pull to it. That
unevenness is the entire point of Euclidean rhythm.

Together they lock into a groove that none of them contains individually.

---

## Why Rotate is the parameter that matters

**Steps** and **Fills** decide the *shape* of a rhythm. **Rotate** decides where it
starts, without changing the shape.

Two outputs with the same **Steps** and **Fills** and different **Rotate** values
produce the same rhythm, displaced — so they interlock instead of doubling.

Try it: set GATE 3's **Rotate** to \`0\` and it lands on top of the kick. Set it to
\`2\` and it weaves around it. Nothing else changed.

This is the parameter to move while the pattern is playing. Map it to a CC —
see below — and you have a live control that reshapes the relationship between
parts without changing any of them.

---

## Deriving a fourth part from the first three

The fourth output produces nothing of its own. It takes an existing pattern and
combines it with another using [Logic](../fx/logic.md):

| Output | **Mode** | **Clock division** | **Gate length** | **Steps** | **Fills** | **Rotate** | **Level range** |
|---|---|---|---|---|---|---|---|
| GATE 4 | \`Euclidean\` | \`1/16\` | \`5 ms\` | \`16\` | \`7\` | \`2\` | \`10 V\` |

| Slot | **Mode** | **Target** | **Function** | **Operand** |
|---|---|---|---|---|
| FX 1 | \`Logic\` | \`GATE 4\` | \`AND\` | \`GATE 1\` |

GATE 4 now fires only where the hat pattern and the kick pattern coincide — a
sparse accent that is rhythmically related to both and identical to neither.
Patch it to a clap.

Change **Function** to \`XOR\` and GATE 4 fires where exactly one of them hits,
filling the gaps instead of reinforcing the hits. Same two patterns, opposite
result.

---

## Making it breathe

Three additions, in order of how much difference they make:

**Loosen the timing.**

| Slot | **Mode** | **Target** | **Amount** |
|---|---|---|---|
| FX 2 | \`Humanize\` | \`GATE 3\` | \`12%\` |

The hats stop landing exactly on the grid. Keep it low — above about 30% it reads
as sloppy rather than human. Do not humanize the kick; the kick is what everyone
else is hearing the grid through.

**Vary the accents.**

| Slot | **Mode** | **Target** | **Level range** | **Mode** |
|---|---|---|---|---|
| FX 3 | \`Random velocity\` | \`GATE 3\` | \`90\` | \`Replaced\` |

This only reaches the jack if the destination is velocity-sensitive, which
Euclidean outputs are not by default — see
[Random velocity](../fx/random-vel.md). Patch GATE 3 into a module that
responds to trigger amplitude to hear it.

**Add ratchets.**

| Slot | **Mode** | **Target** | **Amount** | **Repeats** |
|---|---|---|---|---|
| FX 4 | \`Repeats\` | \`GATE 2\` | \`2\` | \`3\` |

Each snare hit becomes a three-stroke roll. See
[Repeats](../fx/repeats.md) — several of its details are unverified, so
expect to experiment.

---

## Playing it live

Map **Rotate** and **Fills** to CCs through the
[CC map](../concepts.md#7-the-cc-map-controls-parameters-from-cc):

| MIDI CC | Destination | Parameter | **Low note** | **High note** |
|---|---|---|---|---|
| 20 | GATE 3 | **Rotate** | \`0\` | \`15\` |
| 21 | GATE 3 | **Fills** | \`1\` | \`12\` |
| 22 | GATE 1 | **Fills** | \`1\` | \`8\` |

Three knobs now reshape the whole pattern while it runs. **Fills** on the kick is
the most dramatic — sweeping it from 1 to 8 takes you from a single downbeat to
eighth notes throughout.

Remember to **update all parameters** and then **save parameters** after setting
up mappings, or they vanish at power-off.

---

## Patterns worth knowing

| **Steps** | **Fills** | Name / feel |
|---|---|---|
| 16 | 4 | Four on the floor |
| 8 | 3 | Tresillo — the Latin 3+3+2 |
| 8 | 5 | Cinquillo |
| 16 | 5 | Sparse, syncopated |
| 16 | 7 | Busy, pulls against the beat |
| 16 | 9 | Denser, distinctly off-kilter |
| 12 | 5 | Rolling 12/8 |
| 5 | 2 | Odd-metre, repeats every 5 steps |

Any **Steps** value that is not a power of two makes the pattern cycle against a
4/4 grid, which is a good way to get long-evolving rhythms from one output.

---

## If it doesn't work

**Nothing fires.** The clock is not running. Check \`clock state\` is \`start\` in
the global settings, and if you are on \`External\`, that your source is actually
sending MIDI clock.

**Everything fires on every step.** **Fills** is equal to or greater than **Steps**.

**The patterns are all identical.** They have the same **Steps**, **Fills** and
**Rotate**. Change **Rotate** on one of them.

**The pattern runs at the wrong speed.** Check **Clock division**. \`1/16\` is sixteenths;
\`1/4\` is quarter notes and will sound four times slower.

**Hits are missed by the drum module.** Raise **Gate length** from 5 ms to 10 ms.

**Two outputs sound like one.** Their patterns coincide. Give one a different
**Rotate**, or use Logic with \`XOR\` to force them apart.
`,Ja=`# Aftertouch and pitch bend as modulation

**Goal:** the expressive controls on your keyboard — pressure, the bend wheel,
the mod wheel — become patchable voltages that shape the sound while you play.

---

## Cabling

\`\`\`mermaid
flowchart LR
  KB["Keyboard<br/>USB-C"] --> P["Portail"]
  P -->|"CV 1 — pitch"| VCO["VCO"]
  P -->|"GATE 1 — gate"| EG["Envelope"]
  P -->|"CV 4 — aftertouch"| FLT["Filter cutoff"]
  P -->|"CV 5 — pitch bend"| FM["VCO FM index"]
  P -->|"CV 6 — mod wheel"| LFO["LFO amount VCA"]
\`\`\`

The voice is the standard pitch-and-gate pair. The three expression outputs are
extra, and each goes wherever you want it.

---

## Settings

**The voice:**

| Output | **Mode** | **Channel** | **Voice mode** | **Bend range** | **Vibrato rate** |
|---|---|---|---|---|---|
| CV 1 | \`Note\` | \`ch 1\` | \`Mono last\` | \`+/-2\` | \`2.15 Hz\` |

| Output | **Mode** | **Trigger source** | **Level range** | **Retrigger** |
|---|---|---|---|---|
| GATE 1 | \`Gate\` | \`CV 1\` | \`10 V\` | \`On\` |

**The expression outputs:**

| Output | **Mode** | **Channel** | **Level range** | **Slew** | Notes |
|---|---|---|---|---|---|
| CV 4 | \`Aftertouch\` | \`ch 1\` | \`5 V\` | \`15\` | Channel pressure |
| CV 5 | \`Pitch bend\` | \`ch 1\` | \`+/-5 V\` | \`OFF\` | Bend wheel, bipolar |
| CV 6 | \`MIDI CC\` | \`ch 1\` | \`5 V\` | \`10\` | **CC number** \`1\` — mod wheel |

Press **update all parameters**, then **save parameters**.

---

## Why each is set the way it is

**Aftertouch gets a **Slew** of 15.** Keybed pressure sensors are noisy — the raw
data jitters even when your hand is still. Without slew, a filter cutoff driven
by pressure buzzes. 15 is enough to smooth it without making the response feel
laggy.

**Pitch bend gets no **Slew**.** Bend is a 14-bit message and already smooth.
Filtering it only adds lag to a control that needs to feel immediate. And
\`+/-5 V\` is the point of using Pitch bend mode at all: the wheel springs back to centre,
so you get a bipolar control with a real zero — patch it to an FM index and the
wheel pushes the timbre in both directions from a known neutral.

**The mod wheel gets a moderate **Slew** of 10.** CC is 7-bit, so 128 steps
across 5 V is 39 mV per step — audible as stepping on a filter. A little slew
removes it.

Level range** is 5 V, not 10 V, on the two unipolar outputs.** A full 10 V swing into
a filter cutoff is usually more than the whole usable range of the filter, which
means all your control happens in the first third of the travel. 5 V gives finer
control where you actually play.

---

## What you should hear

Play and hold a note. Press harder into the key: the filter opens. Release the
pressure: it closes again.

Move the bend wheel up and down from centre: the FM index moves either side of
neutral. Let go and it springs back to no modulation.

Push the mod wheel: two things happen at once. CV 6 opens the LFO amount VCA
*and* — because **Vibrato rate** is set on CV 1 — the pitch starts to wobble. CC#1
controls vibrato depth on every Note output on the same channel, whether you
patch it or not.

---

## The vibrato interaction, which catches people

[Note](../modes/note.md) mode's **Vibrato rate** parameter sets the vibrato **rate**.
The **depth** always comes from CC#1, the mod wheel. There is no depth parameter.

Two consequences:

- Set **Vibrato rate** and hear nothing? The mod wheel is at zero. Push it up.
- Using CC#1 for something else, as CV 6 does here? Then it also modulates the
  pitch of every Note output on that channel. If you do not want that, set
  **Vibrato rate** to \`OFF\` on the Note rows, or move your general-purpose modulation to
  a different CC — 11, or anything in the 20–31 range that controllers rarely
  use by default.

---

## If your keyboard has no aftertouch

Most do not. Check before assuming the module is at fault: play a note, hold it,
press hard, and see whether CV 4 moves at all.

Substitutes, in order of usefulness:

- **An expression pedal**, usually CC 11. Set CV 4 to **Mode** \`MIDI CC\`, **CC number** \`11\`.
  Pedals are smoother than keybed pressure and need less **Slew**.
- **A second CC from a knob.** Any CC works.
- **A [Velocity](../modes/vel.md) output** — not continuous, but it gives you
  per-note dynamics that hold, which covers some of the same ground.

If your keyboard sends **polyphonic** aftertouch, use
[Poly aftertouch](../modes/poly-at.md) instead and set its **Trigger source** to a specific note —
that gives you pressure on one key that the rest of your playing does not
disturb.

---

## Going further: pressure controlling vibrato depth

Instead of using the mod wheel for vibrato, drive it from pressure. Patch CV 4
(aftertouch) into a VCA that controls an LFO's output level, and patch that LFO
into your oscillator's FM input.

You now have pressure-controlled vibrato that leaves the mod wheel free, and the
vibrato depth responds continuously to your hand rather than to a wheel you have
to reach for.

---

## If it doesn't work

**The aftertouch output never moves.** Your keyboard probably does not send it,
or has it switched off. See
[Troubleshooting](../troubleshooting.md#an-aftertouch-output-never-moves).

**The pitch bend output sits at one end instead of centring.** Check **Level range** is
\`+/-5 V\` and not a unipolar option. On a Gate output the negative half cannot be
produced at all — pitch bend belongs on a CV output.

**The filter jitters when I press.** Raise **Slew** on the Aftertouch output. 15 to 30 is
the usual range.

**The mod wheel makes the pitch wobble and I don't want it to.** Set **Vibrato rate** to
\`OFF\` on the Note row, or move your modulation off CC#1.

**Bend affects the pitch as well as the FM index.** That is **Bend range** on the
Note output doing its job. Set it to \`+/-1\` for minimal effect, and note there is
no "off" — the smallest setting still bends a semitone.
`,Za=`# Recipes

Worked patches. Each one gives you the goal, the cabling, the exact settings,
what you should hear, and what to check when you don't.

They are ordered by how likely you are to need them, starting with a hardware
sequencer or groovebox over TRS MIDI and a keyboard over USB.

---

## Hardware-first

| Recipe | What you get |
|---|---|
| [Drum triggers from a groovebox](drum-triggers.md) | Per-track MIDI channels driving separate trigger outputs |
| [Clocking a sequencer correctly](clocking.md) | Clock, reset and start/stop, with the PPQN question settled |
| [Multitrack CV/gate pairs](multitrack.md) | Four sequencer tracks becoming four modular voices |
| [Poly voice allocation](poly-synth.md) | A three-voice keyboard patch, and what voice stealing sounds like |
| [Velocity to VCA](velocity-vca.md) | Dynamics from one cable |
| [Aftertouch and pitch bend as modulation](expression.md) | Hand control over the patch |

## Generative and tuning

| Recipe | What you get |
|---|---|
| [Euclidean rhythms](euclidean.md) | Two interlocking patterns and a derived third |
| [Microtonal and scale playback](microtonal.md) | Quantised and retuned pitch |

## From a DAW over USB

| Recipe | What you get |
|---|---|
| [A DAW-driven mono voice](daw-mono.md) | Pitch, gate and automation from a track |

---

## Before you start any of these

**Check your MIDI is arriving.** Everything here fails the same way if it is not.
Run the [quick start](../quick-start.md) once, confirm a note plays, and you have
eliminated the cable, the power and the port.

**TRS MIDI is Type A.** If your groovebox has a 5-pin DIN out, you need a
DIN-to-TRS-Type-A adapter. A Type B cable is wired backwards and passes nothing.
This is the most common single failure with hardware sources.

**Send, then save.** Every recipe assumes you press **update all parameters** to
hear the change, and **save parameters** to keep it. Sending without saving means
the patch disappears at power-off. See
[Concepts §9](../concepts.md#9-presets-and-the-difference-between-sending-and-saving).

**Back up before you overwrite.** The factory presets are not published anywhere,
so once you overwrite preset 1 it is gone. Use **save to file** on all eight
presets first — [the editor](../editor.md#backing-up) has the procedure.
`,es=`# Microtonal and scale playback

**Goal:** pitch that is constrained to a scale, or retuned away from twelve-tone
equal temperament altogether.

Two different jobs, easily confused:

- **[Scale](../fx/scale.md)** changes *which notes* play. It moves note
  numbers onto scale degrees. The tuning stays standard.
- **[Microtonal](../fx/microtonal.md)** changes *what the notes mean*. It
  replaces the note-number-to-voltage mapping, so the intervals themselves
  change.

Start with the first. The second has an important caveat.

---

## Part 1 — random notes that stay in key

The most useful thing Scale does is make a random source musical.

### Cabling

\`\`\`mermaid
flowchart LR
  CLK["Clock"] --> P["Portail"]
  P -->|"CV 5 — pitch"| VCO["VCO"]
  P -->|"GATE 5 — gate"| EG["Envelope"]
\`\`\`

### Settings

| Output | **Mode** | **Trigger source** | **Clock division** | **Base note** | **Level range** | **Slew** |
|---|---|---|---|---|---|---|
| CV 5 | \`Random\` | \`Clock\` | \`1/8\` | \`C2\` | \`+/-12\` | \`OFF\` |

| Output | **Mode** | **Clock division** | **Gate length** | **Steps** | **Fills** | **Level range** |
|---|---|---|---|---|---|---|
| GATE 5 | \`Euclidean\` | \`1/8\` | \`10 ms\` | \`8\` | \`5\` | \`10 V\` |

| Slot | **Mode** | **Target** | **Scale** | **Root note** |
|---|---|---|---|---|
| FX 1 | \`Scale\` | \`CV 5\` | \`pentatonic minor\` | \`A\` |

Press **update all parameters**, then **save parameters**.

### What you should hear

A generative line: five notes per eight steps, each a random pitch within an
octave of C2, every one of them in A minor pentatonic. It never repeats and it
never plays a wrong note, because a pentatonic scale contains no notes that
clash.

Raise **Slew** on CV 5 to about \`30\` for a slurred version where the pitch slides
between notes.

### Changing the character

Swap **Scale** and hear the whole piece change:

| **Scale** | Character |
|---|---|
| \`pentatonic minor\` | Safe, never wrong |
| \`pentatonic major\` | Brighter, still safe |
| \`minor\` | More notes, more tension |
| \`dorian\` | Minor with a lifted sixth |
| \`phrygian\` | Dark, Spanish |
| \`whole note\` | Floating, no tonal centre |
| \`major chord\` | Broken-chord arpeggios, not a scale |
| **Octaves** | Only the root, in different octaves |

The last two are worth knowing about. \`major chord\` restricts the output to root,
third and fifth, so a random source becomes arpeggios. **Octaves** restricts it to
the root alone, which turns randomness into octave jumps — a good bass part.

### Order matters

If you add [Random note](../fx/random-note.md) or
[Accumulate](../fx/accumulate.md) as well, put **Scale in a higher slot
number**. Slots chain in numeric order, so Scale in FX 2 runs after Random note
in FX 1 and cleans up after it. Reverse them and you quantise first, then scatter
the result out of key.

[Random octave](../fx/random-oct.md) is the exception — it only changes
octaves, never pitch classes, so it is safe in either slot.

---

## Part 2 — microtonal tuning

### What ships on the module

**All eight microtonal tables ship as standard 12-tone equal temperament.**
Confirmed from the firmware. They are empty, user-customisable slots, not a menu
of exotic tunings — so out of the box, Microtonal on any table plays in standard
tuning and changes nothing.

That means using Microtonal musically is a two-step job: **put a tuning into a
slot**, then select it. Author the tuning in the editor's
**[Tuning tab](../editor.md#the-tuning-tab)** — enter twelve cents values, or
import a Scala \`.scl\` file — and send it to table 1–8. The write format is not
yet hardware-confirmed (the first send asks you to confirm) and a sent tuning
writes to working memory, so re-send it after powering the module on.

### Reading a table that has been customised

You only need this if a slot has been changed from the default. A factory slot is
standard tuning; measuring it just confirms even 83.3 mV steps.

1. Set CV 1 to **Mode** \`Note\`, **Channel** \`ch 1\`, everything else default.
2. Play \`C3\`, then \`C#3\`, \`D3\`, and so on up to \`C4\`, measuring the jack at each
   step. This is your **reference**: standard tuning gives twelve equal steps of
   83.3 mV, so C4 should read exactly 1.000 V above C3.
3. Add \`FX 1: Microtonal, Target CV 1, Tuning table\` set to the slot to read.
4. Repeat the measurement. Any step that differs from 83.3 mV is that pitch
   class's tuning. Convert with cents = millivolts × 1.2.
5. Repeat for the other slots you want to check.

A custom table lives in the module's own flash and cannot be read any other way —
so if a module carries interesting tunings, these measurements are worth writing
into [Appendix: scales and microtonal tables](../appendix-scales.md).

### Using a tuning, once a slot holds one

| Output | **Mode** | **Channel** | **Voice mode** |
|---|---|---|---|
| CV 1 | \`Note\` | \`ch 1\` | \`Mono last\` |

| Slot | **Mode** | **Target** | **Tuning table** |
|---|---|---|---|
| FX 1 | \`Microtonal\` | \`CV 1\` | \`table 2\` |

With \`table 2\` at its factory default this plays in standard tuning. Once the slot
holds a custom tuning, patch CV 1 to your oscillator and play normally: the
keyboard layout is unchanged — every key still produces a note — but the intervals
follow the table rather than the piano.

### Microtonal is always last

Whatever slot it occupies, Microtonal is applied at the end of the chain. That
follows from what it does: it is the final note-to-voltage step, so nothing can
run after it.

The practical consequence is convenient. You can combine Scale and Microtonal
without thinking about slot order — Scale picks the scale degrees, Microtonal
decides what pitch each degree produces:

| Slot | **Mode** | **Target** | Settings |
|---|---|---|---|
| FX 1 | \`Scale\` | \`CV 1\` | **Scale** \`major\`, **Root note** \`C\` |
| FX 2 | \`Microtonal\` | \`CV 1\` | **Tuning table** \`table 3\` |

A major scale, retuned by whatever \`table 3\` holds. If that slot were loaded with
a just-intonation tuning, the thirds would sound noticeably sweeter than the
equal-tempered version; at the factory default, the two FX combine to a plain
C-major quantiser.

---

## If it doesn't work

**Scale does nothing.** Its default **Scale** is \`chromatic\`, which passes every
note. Change it.

**Scale does nothing even after changing it.** The destination CV output is not
in a note-handling mode. Scale only works on \`Note\`, \`Arpeggiator\`, \`Sequencer\` and \`Random\` —
pointing it at an \`LFO\` or \`MIDI CC\` output has no effect.

**Notes are in key but the wrong key.** Check **Root note**. It is the key, not the
starting note of your part.

**Microtonal seems to do nothing.** Expected on a factory module — all eight
tables ship as standard tuning, so Microtonal only changes the pitch once a slot
has been loaded with a custom tuning. It is not broken; there is just nothing
non-standard in the slot yet.

**Everything is out of tune after adding Microtonal.** Then the slot you selected
has been customised away from 12-TET. Switch to a table still at the factory
default (any untouched slot), or remove the FX slot.

**The pitch is right but a fifth off.** Check nothing else in the chain is
transposing. [Transpose](../fx/transpose.md) and
[Accumulate](../fx/accumulate.md) both shift pitch and are easy to leave
pointed at the wrong destination.
`,ns='# Multitrack CV/gate pairs\n\n**Goal:** four tracks on your hardware sequencer become four independent\nmonophonic voices in the rack, each with its own pitch and gate.\n\nThis is the patch that justifies a 16-output module in 5 HP.\n\n---\n\n## Cabling\n\n```mermaid\nflowchart LR\n  SQ["Hardware sequencer<br/>4 tracks, ch 1-4"] -->|"TRS Type A"| P["Portail"]\n  P -->|CV 1| V1["Voice 1 — 1V/oct"]\n  P -->|GATE 1| E1["Voice 1 — envelope"]\n  P -->|CV 2| V2["Voice 2 — 1V/oct"]\n  P -->|GATE 2| E2["Voice 2 — envelope"]\n  P -->|CV 3| V3["Voice 3 — 1V/oct"]\n  P -->|GATE 3| E3["Voice 3 — envelope"]\n  P -->|CV 4| V4["Voice 4 — 1V/oct"]\n  P -->|GATE 4| E4["Voice 4 — envelope"]\n```\n\nEight cables, four voices, and you still have CV 5–8 and GATE 5–8 free for\nclock, modulation and drums.\n\n---\n\n## Settings\n\nSet your sequencer\'s four tracks to MIDI channels 1, 2, 3 and 4.\n\n**CV outputs** — one per track:\n\n| Output | **Mode** | **Channel** | **Voice mode** | **Bend range** | `vibrato` | **Glide** | **Legato** | **Low note** | **High note** |\n|---|---|---|---|---|---|---|---|---|---|\n| CV 1 | `Note` | `ch 1` | `Mono last` | `+/-2` | `OFF` | `OFF` | `Off` | `C-2` | `G8` |\n| CV 2 | `Note` | `ch 2` | `Mono last` | `+/-2` | `OFF` | `OFF` | `Off` | `C-2` | `G8` |\n| CV 3 | `Note` | `ch 3` | `Mono last` | `+/-2` | `OFF` | `OFF` | `Off` | `C-2` | `G8` |\n| CV 4 | `Note` | `ch 4` | `Mono last` | `+/-2` | `OFF` | `OFF` | `Off` | `C-2` | `G8` |\n\n**Gate outputs** — each bound to its CV output, not to a channel:\n\n| Output | **Mode** | **Trigger source** | **Level range** | **Velocity sensitive** | **Rise** | **Fall** | **Retrigger** |\n|---|---|---|---|---|---|---|---|\n| GATE 1 | `Gate` | `CV 1` | `10 V` | `Off` | `OFF` | `OFF` | `On` |\n| GATE 2 | `Gate` | `CV 2` | `10 V` | `Off` | `OFF` | `OFF` | `On` |\n| GATE 3 | `Gate` | `CV 3` | `10 V` | `Off` | `OFF` | `OFF` | `On` |\n| GATE 4 | `Gate` | `CV 4` | `10 V` | `Off` | `OFF` | `OFF` | `On` |\n\n**Setting Trigger source to the CV output rather than to a channel is the important\npart.** When you do, the **Channel** parameter disappears from the Gate output,\nbecause the channel is inherited. It means you only ever set the channel in one\nplace per voice — change CV 2 to channel 7 and GATE 2 follows automatically.\n\n**Retrigger** `on` gives you a fresh gate on every note, which is what you want for\nsequenced parts. Set it `Off` on any track where you want legato lines.\n\nPress **update all parameters**, then **save parameters**.\n\n---\n\n## What you should hear\n\nFour independent monophonic lines. Muting track 3 on the sequencer silences voice\n3 and nothing else. Transposing track 1 moves only voice 1.\n\n---\n\n## Per-track character\n\nOnce it works, the per-voice parameters are where this gets interesting. All of\nthese are set on the CV output and cost nothing extra:\n\n- **A bassline that slides.** CV 1: **Glide** `60`, **Legato** `on`. Overlapping notes\n  slide, separated notes step.\n- **A lead that bends further.** CV 2: **Bend range** `+/-12`. A full pitch bend moves\n  an octave.\n- **A part confined to a register.** CV 3: **Low note** `C2`, **High note** `C5`. Notes outside are\n  ignored, which stops a stray octave in your sequence from sending an oscillator\n  somewhere unusable.\n\nAnd on the gate side:\n\n- **A softer attack.** GATE 4: **Fall** `30 ms` removes the click when the gate\n  drives a VCA directly.\n- **Dynamics.** GATE 1: **Velocity sensitive** `on` — see\n  [velocity to VCA](velocity-vca.md).\n\n---\n\n## Adding a fifth part without a fifth voice\n\nYou have four spare Gate outputs. Give one of them a drum:\n\n- GATE 5: **Mode** `Trigger`, **Channel** `ch 5`, **Note** `all`, **Length** `5 ms`, **Level range** `10 V`\n\nAnd a clock, from [clocking a sequencer](clocking.md):\n\n- GATE 7: **Mode** `Clock`, **Trigger source** `clock`, **Clock division** `1/16`, **Length** `5 ms`\n- GATE 8: **Mode** `Clock`, **Trigger source** `reset`, **Length** `5 ms`\n\nThat is four voices, a drum trigger, a clock and a reset from one 5 HP module,\nwith CV 5–8 still untouched.\n\n---\n\n## If it doesn\'t work\n\n**All four voices play the same notes.** Your sequencer is sending every track on\none channel. Check its MIDI output settings — many devices default to a single\nchannel until you set them per track.\n\n**A voice has pitch but no gate.** That Gate output\'s **Trigger source** is pointing at the\nwrong CV output, or at `Note`. With **Trigger source** `note` and no channel set correctly,\nit will not follow the voice.\n\n**A gate fires but the pitch never changes.** The CV output is on a different\nchannel from the Gate output\'s source CV. Confirm the CV output\'s **Channel** matches\nthe sequencer track.\n\n**Notes stick on.** Almost always a note-off that never arrived — see\n[Troubleshooting → a note is stuck on](../troubleshooting.md#a-note-is-stuck-on).\n\n**Two voices interfere.** Check that no two CV outputs are set to the same\n`poly group`. In this patch every row should be `Mono last`; a stray poly group\nsetting makes two rows share notes.\n',ts=`# Poly voice allocation from a keyboard

**Goal:** a MIDI keyboard plays three-note chords across three oscillators, each
with its own pitch, gate and envelope.

---

## Cabling

\`\`\`mermaid
flowchart LR
  KB["MIDI keyboard<br/>USB-C"] --> P["Portail"]
  P -->|CV 1| O1["VCO 1"]
  P -->|CV 2| O2["VCO 2"]
  P -->|CV 3| O3["VCO 3"]
  P -->|GATE 1| A1["Env / VCA 1"]
  P -->|GATE 2| A2["Env / VCA 2"]
  P -->|GATE 3| A3["Env / VCA 3"]
  O1 --> MIX["Mixer"]
  O2 --> MIX
  O3 --> MIX
\`\`\`

Three oscillators, three envelopes, three VCAs, one mixer. If you have fewer,
build two voices instead — the configuration is identical, just shorter.

---

## Settings

**The pitch outputs.** All three go into the same poly group. That is what makes
them a polyphonic allocator rather than three copies of the same note:

| Output | **Mode** | **Channel** | **Voice mode** | **Bend range** | **Glide** |
|---|---|---|---|---|---|
| CV 1 | \`Note\` | \`ch 1\` | \`Poly group 1\` | \`+/-2\` | \`OFF\` |
| CV 2 | \`Note\` | \`ch 1\` | \`Poly group 1\` | \`+/-2\` | \`OFF\` |
| CV 3 | \`Note\` | \`ch 1\` | \`Poly group 1\` | \`+/-2\` | \`OFF\` |

**The gates.** Each follows its own voice:

| Output | **Mode** | **Trigger source** | **Level range** | **Velocity sensitive** | **Retrigger** |
|---|---|---|---|---|---|
| GATE 1 | \`Gate\` | \`CV 1\` | \`10 V\` | \`Off\` | \`On\` |
| GATE 2 | \`Gate\` | \`CV 2\` | \`10 V\` | \`Off\` | \`On\` |
| GATE 3 | \`Gate\` | \`CV 3\` | \`10 V\` | \`Off\` | \`On\` |

**Trigger source** \`CV n\` is essential. A gate set to **Trigger source** \`note\` would fire on every note
in the chord, on all three outputs at once, and you would have three voices
playing in unison instead of a chord.

Press **update all parameters**, then **save parameters**.

---

## What you should hear

Play a three-note chord: three oscillators, three different pitches, all three
envelopes open. Release one key and one voice closes while the other two hold.

Play one note at a time and the voices are used in rotation — first note on CV 1,
second on CV 2, third on CV 3, fourth back to CV 1. That round-robin is
deliberate: it lets each voice's release finish before that voice is reused.

---

## Voice stealing

Play a fourth note while three are held. Portail has three voices, so one of the
held notes must give way.

**What it sounds like:** one of your held notes stops and is replaced by the new
one. The oscillator that was playing it jumps to the new pitch, and — with
**Retrigger** \`on\` — its envelope restarts, so you hear the change clearly.

\`TODO(verify)\`: **which voice gets stolen.** The round-robin allocator most
likely takes the oldest, but this is not documented anywhere and the editor's
source only names the groups. **Test:** with **Retrigger** \`on\`, hold C3, then E3, then
G3, then add B3 and listen for which pitch disappears. If C3 goes, it steals
oldest-first. Repeat several times to confirm it is consistent rather than taking
whichever voice was least recently allocated.

Knowing the answer matters for playing: if it steals oldest-first, holding a bass
note under a moving line will lose the bass note first, and you may want to give
the bass its own monophonic output on a separate channel instead of putting it in
the group.

**Reducing the impact:**

- Set **Retrigger** \`off\` on the gates. Stolen voices then change pitch without
  restarting the envelope, which is much less obtrusive — though it also stops
  repeated notes on the same voice from articulating.
- Add a fourth voice. CV 4 in \`Poly group 1\` with GATE 4 following it. Every CV
  output you add to the group is another note of polyphony, up to eight.

---

## Adding per-voice envelopes and dynamics

You have five Gate outputs left. Two ways to spend them:

**Velocity per voice** — each voice's own dynamics as a separate CV:

| Output | **Mode** | **Trigger source** | **Level range** |
|---|---|---|---|
| GATE 4 | \`Velocity\` | \`CV 1\` | \`10 V\` |
| GATE 5 | \`Velocity\` | \`CV 2\` | \`10 V\` |
| GATE 6 | \`Velocity\` | \`CV 3\` | \`10 V\` |

Patch each into that voice's VCA or filter cutoff.

**Or full envelopes**, saving three physical envelope modules:

| Output | **Mode** | **Trigger source** | **Mode** | **Attack** | **Decay** | **Sustain** | **Release** |
|---|---|---|---|---|---|---|---|
| GATE 4 | \`Envelope\` | \`CV 1\` | \`ADSR\` | step 20 | step 60 | \`70\` | step 70 |
| GATE 5 | \`Envelope\` | \`CV 2\` | \`ADSR\` | step 20 | step 60 | \`70\` | step 70 |
| GATE 6 | \`Envelope\` | \`CV 3\` | \`ADSR\` | step 20 | step 60 | \`70\` | step 70 |

Envelope times are an exponential 128-step table — see
[Envelope](../modes/env.md#the-time-scale) for what the step numbers mean in
milliseconds.

---

## A second independent part

There are four poly groups. Put a two-voice pad on channel 2 alongside the
three-voice lead on channel 1:

| Output | **Mode** | **Channel** | **Voice mode** |
|---|---|---|---|
| CV 5 | \`Note\` | \`ch 2\` | \`Poly group 2\` |
| CV 6 | \`Note\` | \`ch 2\` | \`Poly group 2\` |

With gates on GATE 7 and GATE 8 sourced from CV 5 and CV 6. The two parts do not
interact at all.

---

## If it doesn't work

**All three oscillators play the same pitch.** The three CV outputs are not all
in the same poly group — check each output's **Voice mode**. If any is set to a \`mono\`
option it will take every note independently.

**Only one voice ever plays.** The other two rows are probably still \`OFF\`, or
are on a different channel.

**All three gates fire on every note.** The gates are set to **Trigger source** \`note\`
instead of **Trigger source** \`CV 1\`, \`CV 2\`, \`CV 3\`.

**Chords play but single notes jump between oscillators.** That is correct
behaviour — round-robin allocation. If you want repeated notes to stay on one
voice, you want a monophonic output, not a poly group.

**Notes stick on after releasing keys.** See
[Troubleshooting → a note is stuck on](../troubleshooting.md#a-note-is-stuck-on).
`,os=`# Velocity to VCA

**Goal:** how hard you play controls how loud the note is — with one cable, not
three modules.

---

## The short version

Set a Gate output to \`Gate\` mode with **Velocity sensitive** \`on\`, and patch it straight into a
VCA's CV input.

That single cable carries both the timing (the gate is high while the note
sounds) and the dynamics (its height is proportional to velocity). No envelope,
no separate velocity CV, no VCA offset to set up.

---

## Cabling

\`\`\`mermaid
flowchart LR
  KB["Keyboard"] --> P["Portail"]
  P -->|"CV 1 — pitch"| VCO["VCO"]
  P -->|"GATE 1 — gate × velocity"| VCA["VCA CV in"]
  VCO -->|audio| VCA
  VCA --> OUT["Output"]
\`\`\`

---

## Settings

| Output | **Mode** | **Channel** | **Voice mode** |
|---|---|---|---|
| CV 1 | \`Note\` | \`ch 1\` | \`Mono last\` |

| Output | **Mode** | **Trigger source** | **Level range** | **Velocity sensitive** | **Rise** | **Fall** | **Retrigger** |
|---|---|---|---|---|---|---|---|
| GATE 1 | \`Gate\` | \`CV 1\` | \`10 V\` | \`On\` | \`OFF\` | \`5 ms\` | \`On\` |

The **Fall** of 5 ms is the one thing that is not obvious. A gate driving a VCA
directly produces an audible click when it snaps to zero; a few milliseconds of
fall removes it without making the note sound soft.

Add a little **Rise** too — 5 to 15 ms — if the note onset clicks.

Press **update all parameters**, then **save parameters**.

---

## What you should hear

Play softly and the note is quiet. Play hard and it is loud. Hold the key and the
level stays constant until you release.

The scaling is linear between 0 V and **Level range**: velocity 127 gives 10 V, velocity
64 gives about 5 V, velocity 1 gives almost nothing.

---

## When "almost nothing" is a problem

Very soft notes produce very little voltage, and below some level a VCA passes
nothing at all. If your quiet notes are disappearing entirely rather than being
quiet, you want a floor under the velocity scaling.

[Gate](../modes/gate.md) mode has no minimum-level control. [Trigger](../modes/trig.md)
does — its **Level min** parameter:

| Output | **Mode** | **Trigger source** | \`Note\` | **Length** | **Velocity sensitive** | **Level min** | **Level range** |
|---|---|---|---|---|---|---|---|
| GATE 1 | \`Trigger\` | \`CV 1\` | \`all\` | \`Latch\` | \`On\` | \`2 V\` | \`10 V\` |

**Length** \`latch\` makes Trigger behave like a gate — high while the note is held —
while giving you the **Level min** control that Gate lacks. Velocity now scales
between 2 V and 10 V, so the softest note still opens the VCA.

This latch-plus-minimum combination is the most useful thing Trigger does that Gate
cannot, and neither the official manual nor the mode's name suggests it.

---

## The alternative: velocity as its own CV

If you want dynamics to control something *other* than level — filter cutoff,
say — you need velocity as a separate signal:

| Output | **Mode** | **Trigger source** | **Level range** |
|---|---|---|---|
| GATE 2 | \`Velocity\` | \`CV 1\` | \`10 V\` |

[Velocity](../modes/vel.md) outputs a level that is set at note-on and **holds until
the next note**. It does not fall at note-off, so it is not a gate — patch it
into a filter's cutoff CV and the brightness follows your playing while GATE 1
handles the timing.

Two cables instead of one, but the two jobs are now separate and you can scale
them independently.

---

## Velocity to brightness as well as level

Both at once, which is what an acoustic instrument does:

| Output | **Mode** | **Trigger source** | **Level range** | **Velocity sensitive** |
|---|---|---|---|---|
| GATE 1 | \`Gate\` | \`CV 1\` | \`10 V\` | \`On\` |
| GATE 2 | \`Velocity\` | \`CV 1\` | \`5 V\` | — |

GATE 1 into the VCA, GATE 2 into the filter cutoff. Hard notes are louder *and*
brighter. Use a lower **Level range** on the velocity output — 3 V to 5 V — because a
full 10 V swing on a filter cutoff is usually far too much.

---

## If it doesn't work

**Every note is the same volume.** **Velocity sensitive** is \`Off\`, or your keyboard is
sending a fixed velocity. Many controllers have a velocity curve setting with a
"fixed" option — check that before changing anything on Portail.

**Every note is full volume regardless.** The VCA may have its own level offset
turned up, so it is already open before the gate arrives. Turn the VCA's initial
gain to zero.

**Soft notes disappear completely.** Use the Trigger-with-**Level min** version above.

**There is a click at the start or end of each note.** Add **Rise** and **Fall** of
5–15 ms.

**The level jumps around on held notes.** You may be sending aftertouch that the
VCA is also receiving, or **Velocity sensitive** is interacting with a
[Random velocity](../fx/random-vel.md) FX slot you have left pointed at this
output. Check the FX tab.
`,as=`# Specifications

The official manual contains no specifications table. Everything here is sourced
from the eowave product page, the manual's introduction, or the editor's source,
and each figure says where it comes from.

---

## Physical and electrical

| | | Source |
|---|---|---|
| Width | 5 HP | Product page |
| Depth | \`TODO(verify)\` | Not published. **Measure** the module from the back of the panel to the furthest rear component, including the seated power header |
| Current, +12 V | 110 mA | Product page |
| Current, −12 V | 20 mA | Product page |
| Current, +5 V | 0 mA | Product page |
| Power connector | 10-pin Eurorack IDC, red stripe to −12 V | Official manual |
| Reverse polarity protection | Yes | Official manual |
| Processor | RP2040 | Inferred — the bootloader presents as \`RPI-RP2\` |

---

## Outputs

| | CV bank | Gate bank |
|---|---|---|
| Count | 8 | 8 |
| Labelled | CV 1 – CV 8 | GATE 1 – GATE 8 |
| Resolution | 16-bit | 12-bit |
| Voltage range | −5 V to +10 V | 0 V to +10 V |
| Polarity | Bipolar | Unipolar |
| Step size at full range | about 0.23 mV | about 2.4 mV |

Voltage ranges are from the official manual's introduction: "CV outputs provide
16 bit CV allowing for v/oct tracking between −5 and +10V" and "Gate outputs outputs
CV are 12 bits and unipolar between 0 and 10V".

The per-mode **Level range** menus are consistent with this — the CV list runs from
\`10 V\` down to \`-5 V\`, the Gate list from \`10 V\` down to \`1 V\`.

\`TODO(verify)\`: the actual minimum and maximum a CV output can produce, as
opposed to the menu options. The menus offer nothing between \`+/-5 V\` and \`10 V\`,
so whether a single mode can span the full −5 V to +10 V at once is unclear.
**Test:** set a CV output to \`Note\` with no FX slots, and play the lowest and
highest notes your oscillator tracks while measuring the jack.

\`TODO(verify)\`: output impedance and short-circuit protection. Not published.

\`TODO(verify)\`: whether the outputs are DC-coupled across their full range and
what the settling time is. Relevant if you plan to use a CV output at audio
rates. **Test:** set a Gate output to \`LFO\` with **Waveform** \`square\`, **Clock division** \`1/32\`,
raise the tempo to maximum, and look at the edges on a scope.

---

## MIDI

| | |
|---|---|
| USB | USB-C, class compliant, appears as \`Portail\`. No driver needed |
| TRS MIDI in | 3.5 mm, **Type A** |
| MIDI out | See below |
| Channels | 16, assigned per output |
| Clock | Internal 30–250 BPM, or external MIDI clock over USB or TRS |

**A Type B cable will not work.** If your controller has a 5-pin DIN output you
need a DIN-to-TRS-Type-A adapter. This is the most common single failure with
hardware MIDI sources.

### The MIDI output question

\`TODO(verify)\`: **whether the module has a MIDI output at all.**

The official manual's global settings describe an **Active midi out copy**
option: "All MIDI messages received at the USB or MIDI IN port are passed
directly to the MIDI OUT port on the back of the module."

But no connector list anywhere — not the manual, not the product page —
mentions a MIDI output. The product page lists "usb C and midi trs input" only.
The editor does have a working \`midi_copy\` global parameter, so the *feature*
exists in firmware.

Either there is an undocumented rear connector or header, or the feature is
inherited from another design and does nothing.

**Test:** look at the back of the module for a header or connector besides the
power socket. Then enable **Active midi out copy** in the global settings, save,
and probe any candidate connector while sending MIDI in.

---

## Configuration

| | |
|---|---|
| Preset slots | 8, non-volatile |
| Outputs per preset | 16, plus 8 FX slots, plus globals, plus 32 CC mappings |
| Configuration method | Web editor over USB SysEx, plus reduced on-module controls |
| SysEx manufacturer bytes | \`0x06 0x29\` following \`0xF0\` |
| Backup format | Plain text, semicolon-separated |

The official manual says "up to 16 configuration preset" in one place and "8
preset" in another. It is 8 — see [audit §2](audit.md).

See [Appendix: SysEx notes](appendix-sysex.md) and \`spec/protocol.md\`.

---

## Calibration

The module has calibration routines. The official manual never mentions them.

The editor's SysEx command set defines three:

| Command | Value | Name in source |
|---|---|---|
| Calibration | 12 | \`SYS_SET_CALIB\` |
| Calibration 2 | 13 | \`SYS_SET_CALIB2\` |
| DAC calibration | 15 | \`SYS_SET_CALIB_DAC\` |

\`TODO(verify)\`: **what these do, how to invoke them, and whether the shipped
editor exposes them anywhere.** No control in the captured editor sends any of
the three. There is no documented user-facing calibration procedure.

### Whether yours needs calibration

Before worrying about it, measure. An uncalibrated output shows up as a tracking
error that grows with pitch.

1. Set a CV output to \`Note\`, **Channel** \`ch 1\`, no FX slots.
2. Play \`C3\` and measure the jack with a multimeter. Write it down.
3. Play \`C4\`. The reading should be **exactly 1.000 V higher**.
4. Play \`C5\`, \`C6\`. Each should be another 1.000 V.

A consistent offset — every note high or low by the same amount — is harmless
and is corrected by your oscillator's tune control.

A **growing** error — right at C3, 30 mV out at C4, 90 mV out at C6 — is a
scaling error, and that is what calibration fixes. Check the oscillator against
a known-good CV source first, because the error may be its.

If yours does need it, contact eowave. Do not send undocumented SysEx
calibration commands to a working module on guesswork.

---

## Firmware

| | |
|---|---|
| Update file format | \`.uf2\` |
| Bootloader | RP2040, presents as USB drive \`RPI-RP2\` |
| Bootloader entry | Hold the left button (▼) while powering up |
| Source of updates | The official eowave editor |

The version captured in \`research/\` is \`usb-cv_3.uf2\`.

\`TODO(verify)\`: how to read the running firmware version. The editor requests one
over SysEx (command 34) and displays it, so it is available once connected — but
the official manual never says where to look or what the current version is.

See [the editor](editor.md#firmware-updates).

---

## What is not published

Collected here because these are the questions people ask that no source
answers:

- Module depth in mm
- Output impedance, drive capability, short-circuit protection
- Clock resolution in PPQN
- Contents of the 8 microtonal tables
- The default CC map
- Factory preset contents
- Calibration procedure
- Whether a MIDI output connector exists
- The on-module button scheme

Each has a test attached where one is possible. See
[unverified.md](unverified.md).
`,ss=`# Troubleshooting

Organised by **what you observe**, because that is what you know when something
is wrong.

The official manual's troubleshooting section is a single bullet about
reconnecting a phone. See [audit §14](audit.md).

---

## Start here: three checks that solve most problems

**1. Is MIDI arriving?** Watch the module's LEDs while you play — incoming MIDI
drives them **blue**. If nothing responds, the problem is upstream of Portail and
no amount of configuration will fix it. See
[what the LEDs mean](on-module.md#what-the-leds-mean).

**2. Did you save?** Sending a configuration and saving it are two different
actions. If your settings disappeared at power-off, you sent but did not save.
See [Concepts §9](concepts.md#9-presets-and-the-difference-between-sending-and-saving).

**3. Is it the right channel?** Every output has its own **Channel**. There is no
global note channel. A wrong channel produces exactly the symptom of a broken
cable.

---

## Can I break my module?

Short answer: **not by using the editor, and not by a failed firmware update.**
Everything below is recoverable. It is worth reading once, because the fear of
bricking is the main reason people avoid configuring this module at all.

### Editing configuration cannot brick it

When an editor sends configuration, it writes to **volatile memory**. That memory
is cleared at power-off.

So the worst outcome of any configuration mistake — including a value the module
does not expect — is a module that behaves oddly until you **power-cycle your
rack**. Turn the case off and on and it reloads the stored preset. Nothing has
been written permanently.

This is the reason the send/save split exists, and the reason it is worth
keeping: **send** is always reversible by a power cycle.

### Saving a preset cannot brick it either

**save parameters** writes volatile memory into the active preset slot using the
module's own save routine — the same code path the module uses when you save from
the front panel. An editor cannot write to preset storage by any other route;
there is no opcode that writes arbitrary bytes to flash.

What you *can* do is **overwrite a preset you wanted to keep**. That is data loss,
not damage, and it is permanent only because eowave publish no factory preset
file. Back up all 8 presets to files before you start — see
[the editor](editor.md#backing-up). This is the one genuinely irreversible thing
in normal use, and it is entirely preventable.

One behaviour to know: **save always targets the currently active preset.** There
is no "save as". To write preset 5 you must recall preset 5 first, and recalling
discards unsaved edits. So the safe order is: recall the slot you intend to
overwrite, *then* make your edits, then send, then save.

### A failed firmware update cannot brick it

**Firmware is not updated over MIDI.** There is no SysEx command that writes
firmware, so nothing an editor sends can corrupt it.

Updates use the RP2040's **built-in bootloader**, which lives in read-only ROM on
the chip. It cannot be erased or overwritten by anything you do. That means:

- If an update is interrupted — the cable is pulled, the power drops, the file is
  corrupt — the application firmware may be incomplete, but **the bootloader is
  untouched**.
- You recover by entering the bootloader again and repeating the drag-and-drop
  with a good \`.uf2\` file.
- A module that appears dead after a failed update should still enumerate as the
  \`RPI-RP2\` USB volume when you enter the bootloader. If it does, it is fine.

This is the standard property of every RP2040-based module, and it is why UF2
updates are considered safe.

\`TODO(verify)\`: **the exact button and procedure for entering the bootloader.**
The official manual gives it once, in its final section: hold the **left button
(▼)** and power the rack up while holding, then release once the \`RPI-RP2\` volume
appears. That is the only place either button is mentioned in the entire manual,
and it does not say how long to hold, or whether the button must be held until
the volume mounts. **Test:** with the rack off and USB connected, hold the left
button, power up, and note whether the volume appears immediately or only after a
delay, and whether releasing early aborts it. See
[on-module controls](on-module.md).

### What is not covered by any of this

Ordinary hardware care still applies, and none of it is specific to Portail:

- **Patch with the case powered off** when connecting the ribbon cable. The red
  stripe goes to −12 V. Portail has reverse-polarity protection, so a backwards
  cable will not destroy it, but other modules in your case may not be so
  forgiving.
- **Do not feed voltage into an output.** Portail's jacks are outputs, not
  inputs. Patching another module's output into a Portail output is the one
  everyday mistake that could cause real damage.
- **Do not send the undocumented calibration commands.** Three SysEx calibration
  opcodes exist and no editor exposes them. One of the three is not even
  implemented in the firmware. Their payload formats are unknown, and a
  mis-formed calibration write is the one plausible way to leave the outputs
  producing wrong voltages with no documented way back. See
  [Appendix: SysEx notes](appendix-sysex.md). If you think your module needs
  calibration, contact eowave.

### If it is unresponsive right now

1. **Power-cycle the rack.** This clears volatile memory and reloads the stored
   preset. It fixes anything caused by a bad configuration send.
2. **Check the preset.** A preset in which every output is \`OFF\` looks exactly
   like a dead module. Connect an editor and read the configuration back.
3. **Enter the bootloader.** If it mounts as \`RPI-RP2\`, the hardware and the
   bootloader are healthy and you can reflash.
4. If it does not power up at all, that is a power problem, not a configuration
   problem — see
   [the module shows no sign of life](#the-module-shows-no-sign-of-life).

---

## Nothing works

### The module shows no sign of life

No LEDs, no response to anything.

- **Check the ribbon cable.** Red stripe to −12 V at both ends. The module has
  reverse-polarity protection, so a backwards cable will not damage it — it just
  will not start.
- **Check the cable is fully seated** on both the module and the bus board. A
  partly-seated 10-pin header is easy to miss.
- **Check your case has capacity.** Portail draws 110 mA on +12 V. A full case on
  a marginal supply may not start a new module.
- **Try a different bus board slot.**

### The module powers up but nothing responds to MIDI

- **Wrong cable type on TRS.** Portail's TRS input is **Type A**. A Type B
  adapter passes nothing. This is the most common single failure with hardware
  MIDI sources. Test by connecting over USB instead — if USB works, it is the
  adapter.
- **The source is not transmitting.** Many devices have MIDI output switched off
  by default, or send only on a channel you are not listening to.
- **The wrong preset is loaded.** A preset in which everything is \`OFF\` behaves
  exactly like a dead module. Connect the editor and read back what is actually
  configured.

---

## Notes and pitch

### A note plays but the pitch is wrong

- **The oscillator's 1 V/oct input is attenuated.** Many oscillators have an
  attenuator on the pitch input; it must be at maximum for correct tracking.
- **You are on the wrong octave.** Portail numbers middle C as \`C3\`. If your
  keyboard calls it \`C4\`, everything is an octave from where you expect.
- **An FX slot is transposing.** Check the FX slots for
  [Transpose](fx/transpose.md), [Accumulate](fx/accumulate.md) or
  [Microtonal](fx/microtonal.md) pointed at that output.
- **The module needs calibration.** If tracking is close but drifts over several
  octaves — right at C3, noticeably flat at C6 — that is a scaling error rather
  than an offset. See [Specifications → calibration](specifications.md#calibration).

### The pitch tracks but intervals are compressed or stretched

A scaling error. One octave should be exactly 1.000 V. Measure C3 and C4 on the
jack with a multimeter: if the difference is not 1.000 V, the problem is
Portail's calibration or the oscillator's. Test the oscillator with a known-good
CV source first.

### A note is stuck on

A note-off that never arrived. Common when a MIDI cable is unplugged mid-note, or
a DAW is stopped abruptly.

- **Play and release the same note again** on the same channel. That usually
  clears it.
- **Send an All Notes Off** from your DAW or controller if it has the option.
- **Power cycle the module** as a last resort.

To make it less likely: with **Retrigger** \`on\` on the gate, and a sequencer that sends
reliable note-offs, stuck notes are rare. DAWs stopped with the spacebar
mid-phrase are the usual cause.

### Some notes do not play at all

- Low note** and **High note** on the Note output** are filtering them. Check the output.
- **A [Note filter](fx/note-filter.md) FX slot** is pointed at that
  output.
- **[Chance](fx/chance.md) is dropping them.** Its default probability is
  low, so a freshly added Chance can silence most of a part.
- **Polyphony ran out.** With three CV outputs in a group and a four-note chord,
  one note is stolen. See [Recipes → poly synth](recipes/poly-synth.md#voice-stealing).

### All the voices in a poly group play the same note

They are not actually in the same group. Check each CV output's **Voice mode** — any row
set to a \`mono\` option takes every note independently.

---

## Gates and triggers

### A gate output does nothing

- Trigger source** is pointing at an unused CV output.** Gate mode defaults to
  **Trigger source** \`CV 1\`. If CV 1 is \`OFF\`, the gate never fires. Either configure CV 1 or
  set **Trigger source** to \`Note\`.
- **Wrong channel**, if **Trigger source** is \`Note\`.
- **The output is \`OFF\`.**

### A trigger fires but the module downstream ignores it

- **The pulse is too short.** Raise **Length** from 5 ms to 10 ms. Some inputs need
  more.
- **The voltage is too low.** Check **Level range**. A module with a 5 V trigger threshold
  will not reliably fire from a 3 V pulse.
- Velocity sensitive** is on and the velocity is low.** A soft note produces a low
  voltage. Set **Level min** to put a floor under it — see
  [Recipes → velocity to VCA](recipes/velocity-vca.md#when-almost-nothing-is-a-problem).

### Triggers are missed at fast tempos

**Length** is too long. A 50 ms trigger at 1/32 notes is still high when the next
one is due. Keep **Length** below about a third of the interval between pulses.

### Every note is the same volume

- Velocity sensitive** is \`Off\`** on the gate.
- **Your controller sends fixed velocity.** Many have a velocity curve setting
  with a "fixed" option.
- **The VCA has its own gain turned up**, so it is already open before the gate
  arrives.

### There is a click at the start or end of notes

Add **Rise** and **Fall** of 5–15 ms on the Gate output. A gate driving a VCA
directly always clicks without them.

---

## Clock and timing

### A clocked mode does nothing

- **\`clock state\` is \`stop\`** in the global settings. With the clock halted,
  every clocked mode is silent.
- **\`clock source\` is \`External\` and nothing is sending MIDI clock.** Many
  devices have clock output switched off by default.
- **\`clock source\` is \`Internal\` when you wanted to follow something.**

### Everything runs at the wrong speed

Check **Clock division** on the output. If it is four times too fast you are on \`1/16\` where
you want \`1/4\`.

Establish the reference first: set **Clock division** \`1/4\` and confirm one pulse per beat
against your master. Then work outward from there.

If no **Clock division** setting gives the right speed and your sequencer wants 24 PPQN, see
[Recipes → clocking](recipes/clocking.md#the-ppqn-problem).

### A sequencer drifts out of phase over several minutes

You have no reset cable, or its input is not connected. A step sequencer keeps
its position across transport stops and will accumulate offset. Add a
[Clock](modes/clock.md) output with **Trigger source** \`reset\`.

### The sequencer does not return to step 1 when I press play

- **The reset output is set to \`Start/stop\` rather than \`Reset\`.**
- **Reset on continue is \`Off\`** and your device is sending Continue rather
  than Start. Turn it \`On\`. See
  [Recipes → clocking](recipes/clocking.md#reset-on-continue).

### Everything is in time but the feel is wrong

Check **Swing** is \`OFF\` on the clock output. Swinging the master clock swings
everything downstream.

---

## Modulation

### An aftertouch output never moves

- **Your keyboard does not send aftertouch.** Most do not. Check its
  specifications before suspecting the module.
- **It sends it but has it disabled.** Many controllers have an aftertouch
  on/off setting.
- **You configured [Poly aftertouch](modes/poly-at.md) but the keyboard sends channel
  aftertouch**, or the reverse. They are different messages. Try
  [Aftertouch](modes/at.md) first — it is far more common.
- **Poly aftertouch's **Trigger source** is set to a note you are not playing.** It tracks one
  specific note number.

### A MIDI CC output steps audibly

Raise **Slew**. 128 values across 10 V is 78 mV per step, which is audible on a
filter cutoff. See [MIDI CC](modes/cc.md#slew).

### The pitch wobbles when I move the mod wheel

CC#1 sets vibrato depth on every [Note](modes/note.md) output on the same
channel, whether you patched it or not. Set **Vibrato rate** to \`OFF\` on the Note rows,
or move your modulation to another CC.

### An LFO output is not in time with anything

LFO uses a different division list from Clock, starting two steps slower. Check
you have not selected \`32/1\` or \`16/1\` when you meant something faster. See
[LFO](modes/lfo.md#clock-division).

---

## FX

### An FX slot appears to do nothing

In order of likelihood:

1. **The destination output is in the wrong kind of mode.** Note FX
   FX slots only affect CV outputs running \`Note\`, \`Arpeggiator\`, \`Sequencer\` or \`Random\`.
   Pointing [Scale](fx/scale.md) at an output running \`LFO\` does nothing
   at all.
2. **Its default is a no-op.** Several FX slots default to doing nothing:
   [Scale](fx/scale.md) defaults to \`chromatic\`,
   [Transpose](fx/transpose.md) to zero,
   [Random octave](fx/random-oct.md) to \`0%\`,
   [Note filter](fx/note-filter.md) to the full range,
   [Logic](fx/logic.md) to ANDing an output with itself.
3. Target** points at the wrong output.**
4. **The result is not audible.** [Random velocity](fx/random-vel.md) needs the
   destination to be velocity-sensitive; [Random trig length](fx/random-trig-length.md)
   needs something downstream that cares about gate length.

### Two FX slots on the same output give the wrong result

They chain in **slot order**, lowest first — not in the order you configured
them. Quantise-then-randomise and randomise-then-quantise give opposite results.
See [the ordering section](fx/index.md#ordering-with-a-worked-case).

### A CC map slot stopped working

**You changed the destination output's mode.** Mappings are bound to the output's
current mode, and changing **Mode** deletes any mapping into that output, because the
parameter no longer exists. Configure modes first, mappings second.

---

## Editor and presets

### The editor cannot see the module

See [the editor](editor.md#if-the-editor-cannot-see-the-module) for the full
list. In short: use Chrome, grant the MIDI permission, close any DAW that has the
port open, and reload the page after replugging USB.

### My settings disappeared when I powered off

You sent them but did not save them. **update all parameters** writes to volatile
working memory; **save parameters** writes to the preset slot. You need both.

### My settings disappeared when I changed preset

Selecting a preset overwrites working memory immediately, without warning. Any
unsaved changes are gone. Save before switching.

### I overwrote a factory preset

There is no published restore file, so unless you backed it up it is gone. Back
up the remaining presets now, before it happens again — see
[the editor](editor.md#backing-up).

### The editor shows values that do not match what I hear

You edited without reading first. An editor starts with defaults, so sending
overwrites all 24 rows with whatever was on screen. Always read the module's
configuration before changing anything.

---

## Still stuck

Check whether what you are trying to do is one of the things that is not
actually confirmed to work — [unverified.md](unverified.md) lists every claim in
this manual that has not been checked against a primary source, along with the
test that would settle it.
`,is=`# Unverified claims

Every statement in this manual that is **not** confirmed against a primary
source, with the test that would settle it.

This manual is published for other Portail owners. A stranger may patch their
rack based on it. So the rule is absolute: if a voltage, range, default or
behaviour could not be confirmed, it is marked \`TODO(verify)\` in the text and
listed here — never smoothed over into confident prose.

**Primary sources**, for this purpose:

- The official manual PDF (\`research/portail_manual_v1.pdf\`, V0.9)
- The shipped web editor's source (\`research/original-editor/\`)
- The eowave product page (\`research/eowave-portail-page.html\`)

Anything derived from the editor's parameter tables is treated as confirmed,
because those tables are what the editor sends to the module. Anything from the
official manual alone is treated as confirmed **unless** it contradicts the
editor, in which case the editor wins and the conflict is noted in
[audit.md](audit.md).

If you run one of these tests, please record the result. Items are grouped by how
much difference the answer makes; a by-chapter index of every inline marker is at
the [end of this page](#index-by-chapter).

\`research/sweep-todos.py\` sweeps the inline \`TODO(verify)\` markers and fails if
any file carrying one is not referenced here, so this list cannot silently fall
behind the text.

---

## High impact — affects whether a patch works at all

### 1. Factory preset contents

**Claim:** preset 1 has CV 1 in Note mode on channel 1 and GATE 1 following it.

**Status:** inferred from the module working out of the box in that configuration.
The contents of all 8 factory presets are unpublished.

**Test:** connect the editor, select each preset in turn, read it from the
module, and export each to a file. Do this **before overwriting anything** —
there is no published restore file.

Referenced in: [quick start](quick-start.md), [the editor](editor.md#backing-up)

### 2. Which preset loads at power-on

**Claim:** none made.

**Status:** unknown — always slot 1, or whichever was last selected.

**Test:** select preset 3, power the case off and on, then connect the editor and
check which preset is reported as current.

Referenced in: [on-module controls](on-module.md)

### 3. The on-module button scheme (OQ-3) — mostly resolved from firmware

**Status:** **resolved from the firmware** (version 0.83r). The two buttons are a
**preset selector plus a save**, not a menu or mode editor:

- **▲ short press** — active preset + 1 (wraps 8→1), recalled immediately.
- **▼ short press** — active preset − 1 (wraps 1→8), recalled immediately.
- **▲ + ▼ together, release** — saves the active preset to flash.
- **▼ held at power-up** — bootloader.

The ▲/▼ silkscreen labels are **inferred** from press direction (the firmware only
knows GPIO 23 and 22). See [on-module controls](on-module.md#gesture-reference).

**Residual (needs a press-test):** the hold-to-repeat rate and the roles of the
firmware's 2-second and 5-second timers; and whether an isolated first press shows
the current preset before the next press moves it.

**Test:** hold a button and count presets per second; separately, leave the module
idle then press once and watch whether the preset changes on that first press.

Referenced in: [on-module controls](on-module.md#the-two-things-still-worth-a-press-test)

### 4. Clock resolution in PPQN

**Claim:** none made. Divisions are musical (\`1/16\`, \`1/4\`).

**Status:** the internal PPQN is unstated. Matters if your sequencer wants raw
24 PPQN rather than one pulse per step.

**Test:** set **Clock division** \`1/4\` and count pulses against a known master over 16 bars —
should be 1:1. Then **Clock division** \`1/32\`, which should give 8 per quarter note.

Referenced in: [Concepts §8](concepts.md#8-one-master-clock-feeds-everything-time-based),
[clocking recipe](recipes/clocking.md#the-ppqn-problem)

### 5. Which voice gets stolen in a poly group

**Claim:** none made.

**Status:** the allocator is round-robin, so oldest-first is likely, but no source
states it.

**Test:** with **Retrigger** \`on\`, hold C3, E3, G3 in a three-voice group, then add B3
and note which pitch disappears. Repeat several times for consistency.

Referenced in: [poly synth recipe](recipes/poly-synth.md#voice-stealing)

### 6. The 8 microtonal tables — resolved; custom-tuning writes unverified

**Status:** **resolved from the firmware** (version 0.83r). All eight tables ship
identical: **standard 12-tone equal temperament**, zero deviation. They are empty,
user-customisable slots, not exotic factory tunings, which is why the editor lists
them unnamed. \`table 1\` is a **confirmed** safe standard-tuning default.

Format: 12 values per table, one per pitch class, in cents (14-bit). Tables live
in device flash, not in the firmware image. Custom tunings can now be authored and
sent from the editor's [Tuning tab](editor.md#the-tuning-tab).

**Residuals — all firmware-derived, not yet hardware-confirmed:**

- **The table-write format** (opcode \`0x24\`) has not been confirmed on real
  hardware. The Tuning tab sends behind a one-time confirmation and marks the
  tuning Unverified until checked. **Test:** send a table with an obvious offset
  (C♯ at 150 cents) and confirm C♯ plays sharp.
- **No read-back.** The module can't report a table, so the editor only tracks
  what it last sent. **Test:** send a table, reload the editor, confirm it can't
  recover the contents from the module.
- **Persistence.** Sending writes to working memory; there is no confirmed
  save-to-flash path. **Test:** send a distinctive table, power-cycle, and check
  whether it reverts to standard tuning.
- The contents of a table a *particular owner* customised (inherently per-module)
  can only be read off the hardware — see
  [Appendix: scales](appendix-scales.md#reading-a-table-a-module-has-been-given).

Referenced in: [Microtonal](fx/microtonal.md),
[Appendix: scales](appendix-scales.md#the-8-microtonal-tables)

### 7. The default CC map

**Claim:** none made about specific CC numbers.

**Status:** the map exists, is in firmware, is readable over SysEx, and can be
disabled globally. **The assignments themselves are unpublished** — the official
manual promises them and writes \`(CC##)\` placeholders instead.

**Test:** read the configuration from the module with the official editor; it
appends each parameter's assigned CC to the parameter's label.

Referenced in: [Appendix: default CC map](appendix-cc-map.md)

### 8. Whether a MIDI output connector exists

**Claim:** none made.

**Status:** contradictory. The official manual's global settings describe passing
MIDI to "the MIDI OUT port on the back of the module", and the editor has a
working \`midi_copy\` parameter. But no connector list anywhere mentions a MIDI
output, and the product page lists inputs only.

**Test:** inspect the back of the module for a connector or header besides the
power socket. Enable **Active midi out copy**, save, and probe any candidate
while sending MIDI in.

Referenced in: [Specifications](specifications.md#the-midi-output-question)

---

## Medium impact — affects how a parameter behaves

### 9. Glide time in real units

**Status:** the control is \`OFF\` then \`1\`–\`127\` with no unit shown. The editor's
source contains an unused \`glide_times\` table suggesting roughly 0.1 to
419 ms/V, but it is not wired to the control in the shipped editor.

**Test:** set **Glide** \`127\`, play \`C2\` then \`C5\` (3 V), and time the transition.
Divide by 3 for ms/V. Repeat at \`64\` to check linearity.

Referenced in: [Note](modes/note.md#glide-has-no-unit)

### 10. Which way Legato runs

**Status:** the values are only \`Off\` and \`On\`. A comment in the editor's source
says "by default glide is only legato notes", which contradicts the default
being \`Off\`.

**Test:** set **Glide** \`100\`, **Legato** \`off\`, play two separated notes. If the pitch
slides, \`Off\` means "glide always".

Referenced in: [Note](modes/note.md#legato)

### 11. Filter and smooth slew times

**Status:** **Slew** on MIDI CC, Aftertouch, Poly aftertouch, Pitch bend and on Random are bare
numbers with no unit.

**Test:** set **Slew** \`100\`, **Level range** \`10 V\`, send CC 0 then CC 127, and time the
transition. Halve the setting and check whether the time halves.

Referenced in: [MIDI CC](modes/cc.md#slew), [DAW recipe](recipes/daw-mono.md)

### 12. Envelope times — floor and ceiling in practice

**Status:** the table is confirmed from the editor as 2.1 ms to 134217.7 ms. The
official manual claims 0 ms to 13 s, which is wrong at both ends. What is
unconfirmed is whether the firmware honours the full table or clamps it.

**Test:** set **Shape** \`ad\`, **Attack** at index 0 and **Decay** at index 127, trigger
once, and time how long the output takes to return to 0 V. It should be over two
minutes.

Referenced in: [Envelope](modes/env.md#the-time-scale)

### 13. Which MIDI note is 0 V

**Status:** unstated. Note numbering (\`C3\` = MIDI 60) is confirmed from the
editor's naming function, but the voltage reference is not.

**Test:** set a CV output to Note, play \`C3\`, measure the jack. Then play \`C4\`
and confirm the reading is exactly 1.000 V higher.

Referenced in: [Note](modes/note.md#what-comes-out-of-the-jack),
[Specifications](specifications.md#calibration)

### 14. Clock \`Start/stop\` — pulse or sustained gate?

**Status:** the official manual describes "a high gate … until a midi stop
message is received", which does not match any menu option by name.

**Test:** set **Trigger source** \`start/stop\`, send MIDI Start, and measure the jack while
the transport runs. Continuous voltage means gate; a single pulse means trigger.

Referenced in: [Clock](modes/clock.md)

### 15. \`Noise\` versus \`random\` LFO waveforms

**Status:** both are random; the difference is undocumented.

**Test:** set each in turn at **Clock division** \`1/4\` and watch on a scope. One should step
once per division; the other should change continuously.

Referenced in: [LFO](modes/lfo.md)

### 16. LFO \`Gated\` mode between notes

**Status:** unclear whether the output holds its last value or falls to 0 V.

**Test:** set \`Gated\` with **Clock division** \`1/1\`, hold a note until the waveform is partway
up, release, and measure.

Referenced in: [LFO](modes/lfo.md#phase-mode)

### 17. Retrigger gate drop duration

**Status:** unstated.

**Test:** set **Retrigger** \`on\`, play overlapping notes, and measure the low period on
a scope.

Referenced in: [Gate](modes/gate.md#retrigger)

### 18. Pitch bend on a Gate output

**Status:** unclear whether the negative half of the wheel clamps at 0 V or the
full travel is rescaled into 0 V…**Level range**.

**Test:** set a Gate output to Pitch bend, **Level range** \`10 V\`, and measure at wheel centre. 5 V
means rescaled; 0 V means clamped.

Referenced in: [Pitch bend](modes/pb.md)

### 19. Chance Probability polarity

**Status:** unclear whether it is the chance a note **plays** or is **dropped**.
The default of \`10%\` is suspiciously low for "chance it plays".

**Test:** set **Probability** \`10%\`, **Velocity influence** \`0%\`, play a steady stream of notes. If
almost all sound, the parameter is the drop chance.

Referenced in: [Chance](fx/chance.md)

### 20. Chance Velocity influence interaction

**Status:** unclear whether it scales, offsets or overrides **Probability**.

**Test:** set **Probability** \`50%\`, **Velocity influence** \`100%\`, play twenty notes at velocity 1
and twenty at 127, and compare how many sound.

Referenced in: [Chance](fx/chance.md)

### 21. Accumulate start point and reset counting

**Status:** the official manual documents both parameters as \`?\`.

**Test:** set **Amount** \`12\`, **Reset after** \`4\`, play a repeated \`C3\` and note the four
pitches before it wraps. C3-C4-C5-C6 means it starts at zero and counts notes.
Separately, check whether a transport stop clears the accumulator.

Referenced in: [Accumulate](fx/accumulate.md)

### 22. Delay — is the note-off delayed too?

**Status:** unclear whether gate width is preserved.

**Test:** apply Delay with **Amount** around 500 ms to a Gate output, hold a key
for exactly two seconds, and measure the resulting gate width.

Referenced in: [Delay](fx/delay.md)

### 23. Humanize maximum displacement and direction

**Status:** the maximum in ms at **Amount** \`100%\` is unstated, as is whether
displacement is late-only or either side of the beat.

**Test:** set **Amount** \`100%\` on a Euclidean output at **Clock division** \`1/4\`, record against an
undelayed clock, and measure the earliest and latest offsets over fifty hits.

Referenced in: [Humanize](fx/humanize.md)

### 24. Repeats — Amount units and overrun behaviour

**Status:** **Amount** is a \`0\`–\`127\` control described as "division of the clock",
with no visible mapping. Whether repeats compress into the step or overrun into
the next is unknown.

**Test:** set **Repeats** \`2\` and step **Amount** through \`0\`, \`32\`, \`64\`, \`96\`, \`127\`,
measuring the gap each time. Then set **Repeats** \`4\` at a slow **Clock division** and check
whether the burst stays inside one step.

Referenced in: [Repeats](fx/repeats.md)

### 25. Random trig length — maximum extension and Velocity influence direction

**Test:** set **Level range** \`127\`, **Velocity influence** \`0\` on a \`Trigger\` output with **Length** \`5 ms\`
and measure the widest gate over fifty hits. Then set **Velocity influence** \`127\` and
compare velocity 1 against 127.

Referenced in: [Random trig length](fx/random-trig-length.md)

### 26. Logic output level and self-reference

**Status:** unclear whether the result uses the destination's **Level range**, and what
happens when **Target** and **Operand** are the same output.

**Test:** set the destination's **Level range** to \`5 V\`, apply Logic, measure the high
level. Separately set both to \`GATE 1\` with **Function** \`XOR\` and check for a dead
output.

Referenced in: [Logic](fx/logic.md)

### 27. Invert on a continuous signal

**Test:** set a Gate output to \`LFO\`, **Waveform** \`triangle\`, **Level range** \`10 V\`, apply
Invert, and watch on a scope. Mirroring means it handles continuous signals;
a square wave means it thresholds first.

Referenced in: [Invert](fx/invert.md)

### 28. Random velocity — clipping or wrapping

**Test:** play at velocity 120 with **Blend** \`added\`, **Level range** \`127\`. Occasional very
quiet hits among loud ones would mean it wraps.

Referenced in: [Random velocity](fx/random-vel.md)

### 29. Random octave — symmetric or upward only

**Test:** set **Level range** \`1\`, **Probability** \`100%\`, play a repeated note, and watch the
output over twenty notes.

Referenced in: [Random octave](fx/random-oct.md)

### 30. Sequencer \`Transpose\` zero point

**Test:** run a sequence with **Note action** \`transpose\` and play chromatically
upward. The note at which the sequence plays untransposed is the zero point.

Referenced in: [Sequencer](modes/seq.md#note-action)

### 31. CC recorder record semantics

**Status:** unclear whether a take replaces the whole loop or punches in, and
whether \`arm record\` stops after one pass.

**Test:** record a full loop, then re-record while moving the CC for only the
first half. Retained old values in the second half means punch-in.

Referenced in: [CC recorder](modes/cc-recorder.md)

### 32. Euclidean Fills above Steps

**Test:** set **Steps** \`8\` and raise **Fills** from 8 to 16, watching whether the
output saturates or wraps.

Referenced in: [Euclidean](modes/euclidean.md)

### 33. Euclidean Channel — any effect at all?

**Test:** send notes, CCs and aftertouch on the selected channel and watch for
any change in the pattern.

Referenced in: [Euclidean](modes/euclidean.md)

### 34. Arpeggiator Hold — replace or accumulate

**Test:** hold a triad with **Hold** \`on\`, release, then play one note. A single
repeating note means it replaces.

Referenced in: [Arpeggiator](modes/arp.md#hold)

### 35. Note filter with Lowest note above Highest note

**Test:** set **Lowest note** \`G8\`, **Highest note** \`C-2\`, and play across the keyboard.

Referenced in: [Note filter](fx/note-filter.md)

### 36. Scale rounding rule

**Test:** with **Scale** \`major\`, **Root note** \`C\`, play F♯ — equidistant from F and G —
and see which you get. Repeat with C♯.

Referenced in: [Scale](fx/scale.md)

### 37. Scale interval contents

**Status:** the 24 scale **names** are confirmed from the editor. Their interval
contents are the conventional readings, not verified against firmware.

**Test:** play a chromatic octave through each scale and note which input notes
collapse onto the same output pitch.

Referenced in: [Appendix: scales](appendix-scales.md#the-24-scales)

---

## Low impact — mostly specification detail

### 38. Module depth in mm

**Test:** measure from the back of the panel to the furthest rear component,
with the power cable seated.

### 39. Output impedance, drive capability, short-circuit protection

**Status:** unpublished. No safe user test; treat the outputs conservatively.

### 40. Full CV output swing in practice

**Status:** the manual says −5 V to +10 V, but no **Level range** menu option spans it.

**Test:** set a CV output to \`Note\` with no FX slots and measure at the lowest
and highest notes your oscillator tracks.

Referenced in: [Specifications](specifications.md#outputs)

### 41. DC coupling and settling time

**Test:** set a Gate output to \`LFO\`, **Waveform** \`square\`, **Clock division** \`1/32\`, raise the
tempo to maximum, and inspect the edges on a scope.

### 42. Calibration commands

**Status:** three SysEx calibration commands exist in the editor's source and no
editor control sends any of them. No documented procedure.

**Do not experiment with these on a working module.** Contact eowave.

Referenced in: [Specifications](specifications.md#calibration),
[Appendix: SysEx](appendix-sysex.md)

### 43. File-transfer SysEx commands

**Status:** \`SYS_RECEIVE_FILE\` (\`0x0E\`) and \`SYS_VIEW_FILE\` (\`0x10\`) are
implemented in firmware but unused by any editor, and their payload format is
unknown. Note these are **not** the microtonal-table route — that is opcode
\`0x24\`, now known (item 6). What \`0x0E\`/\`0x10\` carry is still open.

Referenced in: [Appendix: SysEx](appendix-sysex.md)

### 44. Firmware update preserves presets

**Test:** back up all 8 presets to files, update the firmware, read each back and
compare.

Referenced in: [the editor](editor.md#firmware-updates)

### 44a. Bootloader entry procedure

**Claim:** hold the left button (▼) and power the rack up while holding, until the
\`RPI-RP2\` volume appears.

**Status:** the button is confirmed from the official manual, which mentions it
exactly once — in the firmware update section, the only place either button
appears in the whole document. It does not say how long to hold, whether the
button must be held until the volume mounts, or whether releasing early aborts.
That omission is itself an audit finding: the module's only documented button
gesture is under-specified.

**Test:** with the rack off and USB connected, hold the left button, power up, and
note whether the volume appears immediately or after a delay, and whether
releasing early aborts it.

**Why it matters:** this is the recovery path from a failed firmware update. See
[Can I break my module?](troubleshooting.md#can-i-break-my-module).

Referenced in: [troubleshooting](troubleshooting.md#can-i-break-my-module),
[on-module controls](on-module.md)

### 45. Reading the running firmware version

**Status:** the editor requests it over SysEx (command 34) and displays it, but no
source says where or what the current version is.

Referenced in: [Specifications](specifications.md#firmware)

### 46. USB enumeration without rack power

**Test:** with the case off, connect USB and see whether the editor's device list
offers \`Portail\`.

Referenced in: [the editor](editor.md#connecting)

### 47. LED state triggers and brightness curve (OQ-15)

**Status:** mostly resolved from the firmware. Confirmed: 16 addressable RGB LEDs,
one per output; **brightness tracks each output's live level** (VU-style); and a
state palette of **blue = MIDI/clock activity, red = preset recalled, white =
active/selected, green = saved, cycling colours = MIDI-learn armed, dim grey =
idle**. See [on-module controls](on-module.md#what-the-leds-mean).

**Still unknown:** the exact triggers for the yellow, cyan and warm-white palette
entries, the precise voltage-to-brightness curve, animation timing, and which of
the 16 LEDs maps to which of the 8 presets for the red recall marker.

**Test:** the OQ-15 filming recipe. In a dim room, record the LED column while
powering up, recalling each preset 1–8, playing sustained notes and a rising LFO,
sending clock and start/stop, arming MIDI-learn, and pressing each button — then
read any unfamiliar colour off a single frame against the palette in
\`spec/model.json → led_colors.palette\`. Record results into
\`spec/model.json → led_colors.states\`.

Referenced in: [on-module controls](on-module.md#what-the-leds-mean)

### 48. Gate Random and Gate Trigger editor defaults

**Status:** the editor's stored default lists for these two modes are shorter than
their parameter counts, so the last one or two parameters may initialise to
something other than the first menu entry.

**Test:** select the mode in the editor, send it, then read back from the module
and compare.

Referenced in: [Random](modes/random.md)

### 49. Poly aftertouch in a polyphonic patch

**Status:** Poly aftertouch's **Trigger source** is a fixed note number, not a CV output, so it tracks
a pitch rather than a voice. Whether that is usable in a poly group depends on
the allocator, which is item 5.

Referenced in: [Poly aftertouch](modes/poly-at.md)

---

## Advertised but not available

**VELOCITY VCA** and **MATHS** are listed on the eowave product page as available
effects. They are **commented out of the shipped editor's menu**, along with
\`CONDITIONAL\`, \`MODULATE\`, \`LFO MOD\` and \`CC MOD\`.

Their parameter definitions remain in the editor's source, so the firmware may
implement them and a future editor may expose them. As of the editor captured in
\`research/\`, they cannot be selected.

The official manual mentions none of the six, in either direction.

Referenced in: [FX reference](fx/index.md#fx-that-are-advertised-but-not-available)

---

## Contributing

If you run any of these tests, the results are worth more than anything else that
could be added to this manual. Record what you observed, what you measured, and
what module and firmware version you used — firmware behaviour may change between
versions.

Items 3 and 6 — the button scheme and the microtonal tables — are now resolved
from the firmware. The largest remaining gap is **item 7, the default CC map**,
which is still answerable in an afternoon by reading it off a connected module.

---

## Index by chapter

Every inline \`TODO(verify)\` marker in the manual, by chapter and line. Generated
by \`research/sweep-todos.py --chapters\`. The numbered entries above are the ones
with full test recipes; this index proves none has been missed.

## Quick start

- \`quick-start.md:88\` — \`TODO(verify)\`: the exact contents of factory presets 1–8 are not published, and

## Concepts

- \`concepts.md:289\` — \`TODO(verify)\`: the master clock's internal resolution in PPQN is not stated in

## Mode reference

- \`modes/arp.md:74\` — \`TODO(verify)\`: whether, with **Hold** \`on\`, playing a single new note replaces the
- \`modes/cc-recorder.md:52\` — \`TODO(verify)\`: whether recording overwrites the whole loop or only the steps
- \`modes/cc.md:80\` — \`TODO(verify)\`: the slew time in ms for a given **Slew** value. **Test:** set
- \`modes/clock.md:21\` — \`TODO(verify)\`: the official manual describes a third behaviour — "a high gate
- \`modes/euclidean.md:42\` — \`TODO(verify)\`: whether **Channel** has any effect at all on a Euclidean output —
- \`modes/euclidean.md:80\` — \`TODO(verify)\`: what happens. **Test:** set **Steps** \`8\`, raise **Fills** from 8 to
- \`modes/gate.md:108\` — \`TODO(verify)\`: how long the gate drops for when **Retrigger** is on. **Test:** set
- \`modes/lfo.md:33\` — documented. \`TODO(verify)\`: **test:** set both in turn with **Clock division** \`1/4\` and watch
- \`modes/lfo.md:92\` — \`TODO(verify)\`: what the output does in \`Gated\` mode between notes — whether it
- \`modes/note.md:24\` — \`TODO(verify)\`: which MIDI note corresponds to 0 V. **Test:** set a CV output to
- \`modes/note.md:90\` — \`TODO(verify)\`: the actual glide time in ms per volt. The editor's source
- \`modes/note.md:102\` — \`TODO(verify)\`: which way round. The editor labels the values only \`Off\` and
- \`modes/pb.md:30\` — \`TODO(verify)\`: what a Gate output does with the downward half of the wheel —
- \`modes/random.md:89\` — \`TODO(verify)\`: the editor's stored defaults for Gate Random cover only five of
- \`modes/seq.md:115\` — \`TODO(verify)\`: which note is the zero point for transposition. **Test:** set

## FX reference

- \`fx/accumulate.md:25\` — \`TODO(verify)\`: whether the accumulation starts at zero or at **Amount** for the
- \`fx/accumulate.md:31\` — \`TODO(verify)\`: whether anything other than reaching **Reset after** clears the
- \`fx/chance.md:53\` — \`TODO(verify)\`: the polarity of **Probability** — whether it is the chance a note
- \`fx/chance.md:61\` — \`TODO(verify)\`: how **Velocity influence** combines with **Probability** — whether it scales
- \`fx/delay.md:22\` — \`TODO(verify)\`: whether the note-off is delayed by the same amount, preserving
- \`fx/humanize.md:22\` — \`TODO(verify)\`: the maximum delay in milliseconds at **Amount** \`100%\`, and whether
- \`fx/invert.md:33\` — \`TODO(verify)\`: what Invert does to a continuous signal such as an
- \`fx/logic.md:62\` — \`TODO(verify)\`: what happens if **Target** and **Operand** are the same output with
- \`fx/logic.md:67\` — \`TODO(verify)\`: the output voltage of a Logic result — whether it uses the
- \`fx/note-filter.md:51\` — \`TODO(verify)\`: what happens if **Lowest note** is set above **Highest note**. **Test:** set
- \`fx/random-oct.md:53\` — \`TODO(verify)\`: whether displacement is symmetric — up and down with equal
- \`fx/random-trig-length.md:23\` — \`TODO(verify)\`: the maximum extension in milliseconds at **Length range** \`127\`, and the
- \`fx/random-vel.md:58\` — \`TODO(verify)\`: whether \`Added\` clips at 127 or wraps. **Test:** play notes at
- \`fx/repeats.md:21\` — \`TODO(verify)\`: whether every gate is ratcheted or only some, and whether the
- \`fx/repeats.md:29\` — \`TODO(verify)\`: the unit of **Amount**. It is a \`0\`–\`127\` control rather than a
- \`fx/scale.md:14\` — \`TODO(verify)\`: what happens to a note exactly between two scale degrees —

## Recipes

- \`recipes/clocking.md:95\` — \`TODO(verify)\`: **whether any clock division setting produces 24 pulses per quarter
- \`recipes/clocking.md:164\` — or a gate — see the \`TODO(verify)\` on Clock.
- \`recipes/daw-mono.md:84\` — \`TODO(verify)\`: the slew time in milliseconds for a given **Slew** value.
- \`recipes/poly-synth.md:76\` — \`TODO(verify)\`: **which voice gets stolen.** The round-robin allocator most

## The editor

- \`editor.md:34\` — needs rack power to run. \`TODO(verify)\`: whether the module enumerates over
- \`editor.md:281\` — also a \`TODO(verify)\` — see unverified.md.
- \`editor.md:288\` — \`TODO(verify)\`: that the table-write format is correct on hardware. **Test:**
- \`editor.md:294\` — not the module's true state. \`TODO(verify)\`: whether any read-back path exists.
- \`editor.md:300\` — after powering the module on, re-send the table. \`TODO(verify)\`: whether a sent
- \`editor.md:343\` — Back up your presets before updating.** \`TODO(verify)\`: whether a firmware

## On-module controls

- \`on-module.md:110\` — \`TODO(verify)\`: **which preset loads at power-on** — always slot 1, or whichever
- \`on-module.md:170\` — \`TODO(verify)\`: **the exact triggers for the yellow, cyan and warm-white palette
- \`on-module.md:221\` — unverified.md and the last \`TODO(verify)\` markers on this page

## Troubleshooting

- \`troubleshooting.md:84\` — \`TODO(verify)\`: **the exact button and procedure for entering the bootloader.**

## Specifications

- \`specifications.md:14\` — Depth | \`TODO(verify)\` | Not published. **Measure** the module from the back of the panel to the furthest rear
- \`specifications.md:42\` — \`TODO(verify)\`: the actual minimum and maximum a CV output can produce, as
- \`specifications.md:48\` — \`TODO(verify)\`: output impedance and short-circuit protection. Not published.
- \`specifications.md:50\` — \`TODO(verify)\`: whether the outputs are DC-coupled across their full range and
- \`specifications.md:73\` — \`TODO(verify)\`: **whether the module has a MIDI output at all.**
- \`specifications.md:122\` — \`TODO(verify)\`: **what these do, how to invoke them, and whether the shipped
- \`specifications.md:159\` — \`TODO(verify)\`: how to read the running firmware version. The editor requests one

## Appendices

- \`appendix-cc-map.md:52\` — \`TODO(verify)\`: **the actual CC number assigned to each parameter.**
- \`appendix-cc-map.md:79\` — CV 1 | **Voice mode** | \`TODO(verify)\` |
- \`appendix-cc-map.md:80\` — CV 1 | **Bend range** | \`TODO(verify)\` |
- \`appendix-scales.md:39\` — \`TODO(verify)\`: the exact interval content of each. The names above are standard
- \`appendix-sysex.md:162\` — \`TODO(verify)\`: the payload format for all of them. Nothing documents them.
- \`appendix-sysex.md:169\` — \`TODO(verify)\`: the write format is firmware-derived, not yet hardware-confirmed —

## Other

- \`audit.md:57\` — values \`TODO(verify)\` because they live in firmware and are not in any primary
- \`audit.md:259\` — confirmed and marks the rest \`TODO(verify)\` with an explicit button-press test
- \`audit.md:462\` — §1, §13 numbers missing or placeholder | Every range, unit and default stated; anything unconfirmed is \`TODO(v
- \`index.md:21\` — \`TODO(verify)\` and gives you the test to run on your own module. Every such gap
- \`index.md:135\` — \`TODO(verify)\` marks a value or behaviour not confirmed against a primary
`,rs=Object.assign({"../../../docs/appendix-cc-map.md":sa,"../../../docs/appendix-parameter-tables.md":ia,"../../../docs/appendix-scales.md":ra,"../../../docs/appendix-sysex.md":la,"../../../docs/audit.md":ca,"../../../docs/concepts.md":da,"../../../docs/editor.md":ha,"../../../docs/fx/accumulate.md":ua,"../../../docs/fx/chance.md":ma,"../../../docs/fx/delay.md":pa,"../../../docs/fx/humanize.md":fa,"../../../docs/fx/index.md":ga,"../../../docs/fx/invert.md":ya,"../../../docs/fx/logic.md":va,"../../../docs/fx/microtonal.md":wa,"../../../docs/fx/note-filter.md":ba,"../../../docs/fx/random-note.md":Ca,"../../../docs/fx/random-oct.md":Ta,"../../../docs/fx/random-trig-length.md":ka,"../../../docs/fx/random-vel.md":xa,"../../../docs/fx/repeats.md":Va,"../../../docs/fx/scale.md":Sa,"../../../docs/fx/transpose.md":Aa,"../../../docs/index.md":Ia,"../../../docs/modes/arp.md":Ma,"../../../docs/modes/at.md":_a,"../../../docs/modes/cc-recorder.md":Oa,"../../../docs/modes/cc.md":Ea,"../../../docs/modes/clock.md":La,"../../../docs/modes/env.md":Da,"../../../docs/modes/euclidean.md":Fa,"../../../docs/modes/gate.md":Ra,"../../../docs/modes/index.md":Pa,"../../../docs/modes/lfo.md":Ga,"../../../docs/modes/note.md":Na,"../../../docs/modes/pb.md":Wa,"../../../docs/modes/poly-at.md":qa,"../../../docs/modes/random.md":$a,"../../../docs/modes/seq.md":Ba,"../../../docs/modes/trig.md":Ha,"../../../docs/modes/vel.md":Xa,"../../../docs/on-module.md":ja,"../../../docs/quick-start.md":za,"../../../docs/recipes/clocking.md":Ua,"../../../docs/recipes/daw-mono.md":Ya,"../../../docs/recipes/drum-triggers.md":Ka,"../../../docs/recipes/euclidean.md":Qa,"../../../docs/recipes/expression.md":Ja,"../../../docs/recipes/index.md":Za,"../../../docs/recipes/microtonal.md":es,"../../../docs/recipes/multitrack.md":ns,"../../../docs/recipes/poly-synth.md":ts,"../../../docs/recipes/velocity-vca.md":os,"../../../docs/specifications.md":as,"../../../docs/troubleshooting.md":ss,"../../../docs/unverified.md":is}),vn=["Start","Guide","Modes","FX","Recipes","Reference","About"];function ls(n){return n==="modes/index"?"Guide":n.startsWith("modes/")?"Modes":n.startsWith("fx/")?"FX":n.startsWith("recipes/")?"Recipes":["quick-start","concepts"].includes(n)?"Start":["editor","on-module","troubleshooting"].includes(n)?"Guide":n.startsWith("appendix-")||["specifications","unverified","audit"].includes(n)?"Reference":n==="index"?"Start":"About"}function cs(n,e){const t=n.match(/^#\s+(.+)$/m);return t?t[1].trim():e}const nn=Object.entries(rs).map(([n,e])=>{const t=n.replace(/^.*\/docs\//,"").replace(/\.md$/,"");return{slug:t,path:n,body:e,title:cs(e,t),group:ls(t),searchText:(t+" "+e).toLowerCase()}}).sort((n,e)=>n.slug.localeCompare(e.slug)),ve=new Map(nn.map(n=>[n.slug,n]));function ds(n){for(const[e,t]of Object.entries(Qn))if(t===n)return kn(e);return null}const Qn={note:"modes/note",cvtrigger:"modes/trig",trigger:"modes/trig",cc:"modes/cc",vel:"modes/vel",aftertouch:"modes/at",poly_after:"modes/poly-at",pitchbend:"modes/pb",clock:"modes/clock",lfo:"modes/lfo",env:"modes/env",seq:"modes/seq",gate_seq:"modes/seq","random cv":"modes/random",random:"modes/random",arp:"modes/arp",cc_rec:"modes/cc-recorder",gate:"modes/gate",euclid:"modes/euclidean"},hs={"note filter":"fx/note-filter","random oct":"fx/random-oct","random fx":"fx/random-note",chance:"fx/chance",accumulate:"fx/accumulate",transpose:"fx/transpose",scale:"fx/scale",microtonal:"fx/microtonal",delay:"fx/delay",humanize:"fx/humanize",logic:"fx/logic","random vel":"fx/random-vel","random trig":"fx/random-trig-length",invert:"fx/invert",repeats:"fx/repeats"};function us(n,e){const t=n==="fx"?hs[e]:Qn[e];return t&&ve.has(t)?t:null}function Jn(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function he(n){let e=Jn(n);return e=e.replace(/TODO\(verify\)([^\n]*)?/g,'<span class="tag tag-unverified" title="Unconfirmed — needs hardware confirmation.">unverified</span>$1'),e=e.replace(/`([^`]+)`/g,"<code>$1</code>"),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/(^|[^*])\*([^*]+)\*/g,"$1<em>$2</em>"),e=e.replace(/\[([^\]]+)\]\(([^)]+)\)/g,(t,o,s)=>/^https?:\/\//.test(s)?`<a href="${s}" target="_blank" rel="noopener noreferrer">${o}</a>`:`<a href="#" data-doc="${s.replace(/\.md$/,"").replace(/^\.\//,"").replace(/#.*$/,"")}">${o}</a>`),e}function Zn(n){const e=n.split(`
`),t=[];let o=0;const s=(a,r)=>{a.length&&t.push(`<${r?"ol":"ul"}>${a.map(c=>`<li>${he(c)}</li>`).join("")}</${r?"ol":"ul"}>`)};for(;o<e.length;){const a=e[o];if(a.startsWith("```")){const h=[];for(o++;o<e.length&&!e[o].startsWith("```");)h.push(e[o]),o++;o++,t.push(`<pre class="doc-code"><code>${Jn(h.join(`
`))}</code></pre>`);continue}const r=a.match(/^(#{1,6})\s+(.+)$/);if(r){const h=r[1].length;t.push(`<h${h}>${he(r[2])}</h${h}>`),o++;continue}if(/^\s*---\s*$/.test(a)){t.push("<hr/>"),o++;continue}if(a.startsWith(">")){const h=[];for(;o<e.length&&e[o].startsWith(">");)h.push(e[o].replace(/^>\s?/,"")),o++;t.push(`<blockquote>${Zn(h.join(`
`))}</blockquote>`);continue}if(a.includes("|")&&e[o+1]&&/^\s*\|?[\s:|-]+\|?\s*$/.test(e[o+1])){const h=[],u=w=>w.replace(/^\||\|$/g,"").split("|").map(v=>v.trim()),m=u(a);for(o+=2;o<e.length&&e[o].includes("|");)h.push(u(e[o])),o++;const b=m.map(w=>`<th>${he(w)}</th>`).join(""),f=h.map(w=>`<tr>${w.map(v=>`<td>${he(v)}</td>`).join("")}</tr>`).join("");t.push(`<div class="doc-table-wrap"><table><thead><tr>${b}</tr></thead><tbody>${f}</tbody></table></div>`);continue}if(a.match(/^\s*[-*]\s+(.+)$/)){const h=[];for(;o<e.length&&/^\s*[-*]\s+(.+)$/.test(e[o]);)h.push(e[o].replace(/^\s*[-*]\s+/,"")),o++;s(h,!1);continue}if(a.match(/^\s*\d+\.\s+(.+)$/)){const h=[];for(;o<e.length&&/^\s*\d+\.\s+(.+)$/.test(e[o]);)h.push(e[o].replace(/^\s*\d+\.\s+/,"")),o++;s(h,!0);continue}if(a.trim()===""){o++;continue}const d=[];for(;o<e.length&&e[o].trim()!==""&&!/^(#{1,6}\s|>|```|\s*[-*]\s|\s*\d+\.\s)/.test(e[o]);)d.push(e[o]),o++;t.push(`<p>${he(d.join(" "))}</p>`)}return t.join(`
`)}let me=null,Se="index",et=()=>{};function ms(n,e){me=n,et=e.onBackToEditor,nt()}function tn(n){if(n?.slug&&ve.has(n.slug))Se=n.slug;else if(n?.mode){const e=us(n.mode.family,n.mode.key);e&&(Se=e)}nt()}function nt(){if(!me)return;re(me);const n=ve.get(Se)??ve.get("index")??nn[0];if(!n){me.appendChild(i("div",{class:"panel-body"},i("p",{class:"muted"},"The manual could not be bundled. Rebuild the app to include docs/.")));return}const e=i("input",{type:"search",class:"control",placeholder:"Search the manual…",id:"manual-search",oninput:s=>gs(s.target.value)}),t=i("nav",{class:"manual-sidebar","aria-label":"Manual contents"},i("div",{class:"row"},i("button",{type:"button",class:"btn btn-sm btn-ghost",onclick:()=>et()},"← Editor")),e,i("div",{id:"manual-toc"},...fs())),o=i("article",{class:"manual-content",id:"manual-content",html:Zn(n.body)});o.addEventListener("click",s=>{const a=s.target.closest("a[data-doc]");a&&(s.preventDefault(),tn({slug:a.dataset.doc}),o.scrollTop=0)}),me.appendChild(i("div",{class:"manual-layout"},t,o))}function $e(n){return i("a",{href:"#",class:`toc-link${n.slug===Se?" is-current":""}`,"data-slug":n.slug,onclick:e=>{e.preventDefault(),tn({slug:n.slug})}},n.title)}function ps(n){const e=new Map,t=[];for(const s of n){const a=ds(s.slug);if(!a){t.push(s);continue}(e.get(a)??e.set(a,[]).get(a)).push(s)}const o=vt.filter(s=>s!=="off"&&e.has(s)).map(s=>{const a=je(s),r=e.get(s).slice().sort((c,l)=>c.title.localeCompare(l.title));return i("div",{class:"toc-fam"},i("div",{class:"toc-fam-title"},i("span",{class:"toc-fam-dot","aria-hidden":"true",style:a?`background: ${a}`:""}),Xe[s].label),...r.map($e))});return t.length&&o.push(i("div",{class:"toc-fam"},...t.map($e))),o}function fs(){const n=new Map;for(const t of nn){const o=n.get(t.group)??[];o.push(t),n.set(t.group,o)}return[...n.entries()].sort((t,o)=>vn.indexOf(t[0])-vn.indexOf(o[0])).map(([t,o])=>i("div",{class:"toc-group","data-group":t},i("div",{class:"toc-group-title"},t),...t==="Modes"?ps(o):o.map($e)))}function gs(n){const e=n.trim().toLowerCase(),t=document.getElementById("manual-toc");t&&(t.querySelectorAll(".toc-link").forEach(o=>{const s=o.dataset.slug,a=ve.get(s),r=!e||(a?a.searchText.includes(e):!1);o.style.display=r?"":"none"}),t.querySelectorAll(".toc-group").forEach(o=>{const s=[...o.querySelectorAll(".toc-link")].some(a=>a.style.display!=="none");o.style.display=s?"":"none"}))}const ys=["C","C♯","D","D♯","E","F","F♯","G","G♯","A","A♯","B"],Ae=[0,100,200,300,400,500,600,700,800,900,1e3,1100],vs=4383,wn=[{id:"factory-12tet",name:"12-TET (standard)",cents:[...Ae]},{id:"factory-24tet-offset",name:"Quarter-tone (24-TET offset)",cents:[50,150,250,350,450,550,650,750,850,950,1050,1150],note:"Every pitch class raised a quarter-tone (50¢) — the upper half of the 24-TET grid. A single table can't hold all 24 quarter-tones, so pair this on one output with a plain 12-TET output: together they cover the full 24-TET set. Handy for quarter-tone material à la Angine de Poitrine."}];function ws(n,e="New tuning"){return{id:n,name:e,cents:[...Ae]}}function Pe(n){const e=new Array(12).fill(0);for(let t=0;t<12;t++){const o=Number(n[t]);e[t]=Number.isFinite(o)?Math.max(0,Math.min(vs,Math.round(o))):0}return e}const Be=1200,bs=.5;function Cs(n){const e=n.trim();if(e.includes(".")){const r=parseFloat(e);if(!Number.isFinite(r))throw new Error(`bad cents value "${n}"`);return r}const[t,o]=e.split("/"),s=parseInt(t,10),a=o===void 0?1:parseInt(o,10);if(!Number.isFinite(s)||!Number.isFinite(a)||s<=0||a<=0)throw new Error(`bad ratio "${n}"`);return 1200*Math.log2(s/a)}function Ts(n){const e=n.split(/\r?\n/),t=[];for(const h of e)h.trimStart().startsWith("!")||t.push(h);if(t.length<2)throw new Error("This does not look like a Scala .scl file.");const o=(t[0]??"").trim()||"Imported scale",s=parseInt((t[1]??"").trim(),10);if(!Number.isInteger(s)||s<=0)throw new Error("Could not read the note count.");const a=t.slice(2).filter(h=>h.trim()!=="").slice(0,s);if(a.length<s)throw new Error(`Expected ${s} pitches but found ${a.length}.`);if(s!==12)throw new Error(`This scale has ${s} notes. The Portail's tables are exactly 12 pitch classes, so only 12-note scales can be imported (a keyboard mapping for other sizes isn't supported).`);const r=a.map(Cs),c=r[11];if(Math.abs(c-Be)>bs)throw new Error(`This scale repeats at ${c.toFixed(1)} cents, not the octave (1200). The Portail always repeats at the octave, so non-octave scales (e.g. Bohlen–Pierce) can't be represented.`);const l=[],d=[0,...r.slice(0,11)];for(let h=1;h<12;h++)if(d[h]<d[h-1]){l.push("Some steps go down (non-ascending) — kept as written.");break}return d.some(h=>h<0||h>Be)&&l.push("Some values fall outside one octave (0–1200 cents); they were kept but may sound unexpected."),{cents:d,name:o,warnings:l}}function ks(n,e){const t=[...e.slice(1,12),Be].map(o=>o.toFixed(5));return[`! ${n.replace(/\s+/g,"_")}.scl`,"!",n," 12","!",...t.map(o=>` ${o}`),""].join(`
`)}const bn="portail-tunings-v1";let xs=0;const Cn=()=>`t${Date.now().toString(36)}-${(xs++).toString(36)}`;class Vs{state;listeners=new Set;constructor(){this.state=this.load()}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){for(const e of[...this.listeners])try{e()}catch(t){console.error(t)}}get tunings(){return this.state.tunings}get assignments(){return this.state.assignments}get hardwareVerified(){return this.state.hardwareVerified}byId(e){return this.state.tunings.find(t=>t.id===e)}slotOf(e){return this.state.assignments.indexOf(e)}add(e="New tuning"){const t=ws(Cn(),e);return this.state.tunings.push(t),this.save(),t}duplicate(e){const t=this.byId(e);if(!t)return null;const o={id:Cn(),name:`${t.name} copy`,cents:[...t.cents]};return this.state.tunings.push(o),this.save(),o}update(e,t){const o=this.byId(e);o&&(t.name!==void 0&&(o.name=t.name),t.cents!==void 0&&(o.cents=Pe(t.cents)),this.save())}setCent(e,t,o){const s=this.byId(e);if(!s||t<0||t>11)return;const a=[...s.cents];a[t]=o,s.cents=Pe(a),this.save()}remove(e){this.state.tunings=this.state.tunings.filter(t=>t.id!==e),this.state.assignments=this.state.assignments.map(t=>t===e?null:t),this.save()}markSent(e,t){e<0||e>7||(this.state.assignments[e]=t,this.save())}markHardwareVerified(){this.state.hardwareVerified=!0,this.save()}reArmHardwareGate(){this.state.hardwareVerified=!1,this.save()}save(){try{localStorage.setItem(bn,JSON.stringify(this.state))}catch{}this.notify()}load(){const e={tunings:wn.map(t=>({...t,cents:[...t.cents]})),assignments:Array(8).fill(null),hardwareVerified:!1};try{const t=localStorage.getItem(bn);if(!t)return e;const o=JSON.parse(t),s=Array.isArray(o.tunings)&&o.tunings.length?o.tunings.map(a=>({...a,cents:Pe(a.cents)})):e.tunings;for(const a of wn)s.some(r=>r.id===a.id)||s.push({...a,cents:[...a.cents]});return{tunings:s,assignments:Array.isArray(o.assignments)&&o.assignments.length===8?o.assignments:e.assignments,hardwareVerified:!!o.hardwareVerified}}catch{return e}}}const ae=new Vs;function Ss(n,e){let t=ae.tunings[0]?.id??null,o=Math.max(0,t?ae.slotOf(t):0);const s=()=>{const a=document.activeElement,r=a?.id??"",c=a&&typeof a.selectionStart=="number"?a.selectionStart:null;if(As(n,e,t,()=>o,l=>{t=l;const d=ae.slotOf(l);d>=0&&(o=d),s()},l=>{o=l,s()}),r){const l=document.getElementById(r);if(l&&(l.focus({preventScroll:!0}),c!=null&&l.setSelectionRange))try{l.setSelectionRange(c,c)}catch{}}};ae.subscribe(s),s()}function As(n,e,t,o,s,a){re(n);const r=ae,c=t?r.byId(t):r.tunings[0],l=i("nav",{class:"tuning-sidebar","aria-label":"Tunings"},i("div",{class:"row"},i("h2",{},"Tunings"),i("span",{class:"spacer"}),k("+ New",()=>{const h=r.add();s(h.id)},{class:"btn-sm"})),i("ul",{class:"tuning-list"},...r.tunings.map(h=>{const u=r.slotOf(h.id);return i("li",{},i("button",{type:"button",class:`tuning-item${h.id===c?.id?" is-current":""}`,onclick:()=>s(h.id)},i("span",{class:"tuning-item-name"},h.name),u>=0?i("span",{class:"tuning-item-slot"},`table ${u+1}`):null))}))),d=c?Is(e,c,o,a):i("div",{class:"panel-body"},i("p",{class:"muted"},"No tuning selected. Create one with “+ New”."));n.appendChild(i("div",{class:"tuning-layout"},l,d))}function Is(n,e,t,o){const s=ae,a=i("input",{class:"control",value:e.name,"aria-label":"Tuning name",style:"max-width: 22rem",onchange:f=>s.update(e.id,{name:f.target.value.trim()||"Untitled"})}),r=ys.map((f,w)=>{const v=e.cents[w]??0,g=Math.round(v-(Ae[w]??0)),C=i("input",{id:`tuning-cent-${w}`,class:"control tuning-cents",type:"number",step:"0.1",value:v.toFixed(2),"aria-label":`${f} cents`,onchange:S=>s.setCent(e.id,w,Number(S.target.value))});return i("div",{class:"tuning-row"},i("span",{class:"tuning-pc"},f),C,i("span",{class:"tuning-delta small muted"},(g===0?"±0":g>0?`+${g}`:`${g}`)+" vs 12-TET"))}),c=i("input",{type:"file",accept:".scl,text/plain",style:"display:none",onchange:async f=>{const w=f.target.files?.[0];if(w){try{const v=Ts(await w.text());s.update(e.id,{name:v.name,cents:v.cents}),v.warnings.length?n.toast("warn","Imported with notes",v.warnings.join(" ")):n.toast("success","Scale imported",`${v.name} loaded into “${e.name}”.`)}catch(v){n.toast("error","Could not import that .scl",String(v instanceof Error?v.message:v))}f.target.value=""}}}),l=()=>{const f=new Blob([ks(e.name,e.cents)],{type:"text/plain"}),w=i("a",{href:URL.createObjectURL(f),download:`${e.name.replace(/\s+/g,"_")}.scl`});document.body.appendChild(w),w.click(),w.remove(),setTimeout(()=>URL.revokeObjectURL(w.href),1e3)},d=k(`Send tuning to table ${t()+1}`,()=>void m(),{class:"btn-sm btn-primary"}),h=f=>{const w=s.assignments[f],v=w?s.byId(w):null;return`table ${f+1} · ${v?v.name:"not sent from here"}`},u=Ze({id:"tuning-slot",options:Array.from({length:8},(f,w)=>({value:w,label:h(w)})),value:t(),ariaLabel:"Destination table",cols:2,format:(f,w)=>{const v=s.assignments[w],g=v?s.byId(v):null;return i("span",{class:"tuning-cell"},i("span",{class:"tuning-cell-n"},String(w+1)),g?i("span",{class:"tuning-cell-name"},g.name):null)},onCommit:f=>o(f)});u.classList.add("tuning-slot-grid");const m=async()=>{const f=t();if(!n.isConnected()){n.toast("warn","No module connected","Connect a Portail (or use the simulator) to send a table.");return}if(!(!s.hardwareVerified&&!await ie({title:"Send an unverified tuning table?",body:"This write format was recovered from the firmware but has not been confirmed on real hardware. It cannot brick the module, and it writes to working memory only (it may revert to standard tuning on power-off). After sending, play a chromatic run and check the tuning matches; if it does, mark it confirmed so this warning stops.",confirmLabel:"Send anyway"})))try{await n.send(f,e.cents),s.markSent(f,e.id),n.toast("success",`Sent to table ${f+1}`,s.hardwareVerified?"Written to the module’s working tuning.":"Written to working memory. Did it play in tune? If yes, mark it confirmed below.")}catch(w){n.toast("error","Send failed",String(w instanceof Error?w.message:w))}},b=s.hardwareVerified?i("div",{class:"tuning-rearm small muted"},"Table writing is confirmed for your module. ",k("Re-arm the warning",()=>{s.reArmHardwareGate(),n.toast("info","Warning re-armed","The unverified confirmation will show again on the next send.")},{class:"btn-sm btn-ghost"})):i("div",{class:"tuning-gate"},i("span",{class:"tag tag-unverified"},"Unverified"),i("span",{class:"small muted"},"The table-write format isn’t confirmed on your hardware yet. This applies to ALL tunings, not just this one. "),k("Confirm the module accepts table writes",()=>{s.markHardwareVerified(),n.toast("success","Table writing confirmed","The unverified warning is now off for every tuning. You can re-arm it later.")},{class:"btn-sm"}));return i("section",{class:"panel tuning-editor"},i("div",{class:"panel-head"},i("h2",{},"Edit tuning"),i("span",{class:"spacer"}),k("Import .scl",()=>c.click(),{class:"btn-sm"}),k("Export .scl",l,{class:"btn-sm"}),k("Reset to 12-TET",()=>s.update(e.id,{cents:[...Ae]}),{class:"btn-sm btn-ghost"}),k("Delete",async()=>{await ie({title:`Delete “${e.name}”?`,body:"This removes it from your library.",confirmLabel:"Delete",danger:!0})&&s.remove(e.id)},{class:"btn-sm btn-ghost"})),i("div",{class:"panel-body"},c,lt({id:"tuning-name",label:"Name",control:a}),e.note?i("p",{class:"field-hint tuning-note"},e.note):null,i("p",{class:"field-hint"},"Cents for each pitch class. The octave (1200) is added by the module. C is normally 0; a non-zero root transposes the whole table."),i("div",{class:"tuning-grid"},...r),i("div",{class:"tuning-send"},i("span",{},"Send to "),u,d,i("span",{class:"small muted"},`· ${n.deviceLabel()}`)),i("p",{class:"field-hint"},"A blank table was not sent from here — the module may still hold something; this app only tracks what IT last sent, since the module can’t report its tables back. Sending replaces one of the 8 tables in working memory; contents may not survive a power-cycle (unconfirmed)."),b))}let T=new Gn({latency:3});const Ie=new Ho;let _e={phase:"idle",done:0,total:0,label:""},fe=null,q="editor",J=[];function on(n){for(const e of J)e();J=[],J.push(n.on("connection",e=>$())),J.push(n.on("activity",e=>{Ie.push(e),an()})),J.push(n.on("progress",e=>{_e=e,Os(),e.phase==="idle"&&$()})),J.push(n.on("preset",e=>y.setCurrentPreset(e))),J.push(n.on("learn",e=>{fe!==null&&(y.setModRow(fe,{statusHigh:e.statusHigh,channel:e.channel,number:e.number}),fe=null,T.setLearnMode(!1),y.toast("success",`Row learned: ${e.statusHigh===9?"note":"CC"} ${e.number} on ch ${e.channel+1}`))}))}async function tt(){T.stop(),T=new Gn({latency:3}),on(T),await T.start(),y.toast("info","Switched to the simulator","A simulated Portail with its own memory and 8 presets. Nothing reaches hardware."),$()}async function Ms(){await oa()&&(T.stop(),T=new no,on(T),await T.start(),$())}const se={async readFromModule(){if(!(y.syncStatus().kind==="modified"&&!await ie({title:"Replace editor contents with the module?",body:"The editor has changes that are not on the module. Reading replaces them with the module’s configuration. You can undo it afterwards.",confirmLabel:"Read anyway",danger:!0})))try{const n=await T.readConfig();if(n.partial){y.toast("warn","Partial read — not all of the module answered",`Missing: ${n.missing.slice(0,6).join(", ")}${n.missing.length>6?"…":""}. Not taken as the baseline; try again.`);return}y.replaceConfig(n.config,"read from module"),y.setDeviceConfig(n.config),y.toast("success","Read from module","The editor now matches the module.")}catch(n){y.toast("error","Read failed",String(n instanceof Error?n.message:n))}},async sendToModule(){try{await T.writeConfig(y.get().config);const n=await T.readConfig();if(n.partial){y.toast("warn","Sent, but read-back was partial","Could not verify every line. Try again.");return}if(y.setDeviceConfig(n.config),y.syncStatus().kind==="in-sync")y.toast("success","Sent and verified","The module now matches the editor.");else{const t=y.diffAgainstDevice()?.lines.map(o=>o.label).join(", ")??"";y.toast("warn","Sent, but the module changed some values",t?`${t} read back different from what was sent — the module may have clamped or rejected a value. Check those outputs.`:"The read-back differs from what was sent. Check the flagged outputs.")}}catch(n){y.toast("error","Send failed",String(n instanceof Error?n.message:n))}},async checkModule(){try{const n=await T.readConfig();if(n.partial){y.toast("warn","Check incomplete","The module did not fully answer. Try again.");return}const e=y.observeDeviceDrift(n.config);e.kind==="conflict"?(y.toast("warn","The module changed, and so did the editor","Both differ from the last sync — resolve before sending or reading."),await se.resolveConflict()):e.kind==="device-ahead"?y.toast("warn","The module changed under us","Someone may have recalled a preset on the panel. Read to catch up."):y.toast("success","Still matches","The module agrees with the editor.")}catch(n){y.toast("error","Check failed",String(n instanceof Error?n.message:n))}},async resolveConflict(){if(y.syncStatus().kind!=="conflict")return;const e=await Ds();if(e==="export"){const{toFile:t,download:o,safeFilename:s}=await Tn(async()=>{const{toFile:r,download:c,safeFilename:l}=await Promise.resolve().then(()=>Xo);return{toFile:r,download:c,safeFilename:l}},void 0,import.meta.url),a=y.get().config;o(`${s(a.name)}.portail.json`,JSON.stringify(t(a),null,2),"application/json"),await se.resolveConflict()}else e==="keep"?await se.sendToModule():e==="take"&&(y.takeModuleVersion(),y.toast("success","Took the module’s version","The editor now matches the module. Undo with Ctrl/Cmd+Z."))},async reconnect(){await T.probe(),$()},async selectPort(n){await T.selectPort(n),$()},useSimulator:()=>void tt(),useHardware:()=>void Ms()},_s={async loadSlot(n){if(await Uo(n,y.syncStatus().kind==="modified"))try{await T.loadPreset(n);const e=await T.readConfig();y.replaceConfig(e.config,`load preset ${n+1}`),y.setDeviceConfig(e.config),y.setCurrentPreset(n),y.toast("success",`Loaded preset ${n+1}`)}catch(e){y.toast("error","Load failed",String(e instanceof Error?e.message:e))}},async saveSlot(n){const{ensurePresetWriteAllowed:e}=await Tn(async()=>{const{ensurePresetWriteAllowed:s}=await import("./preset-gate-NfNx517j.js");return{ensurePresetWriteAllowed:s}},[],import.meta.url);if(!await e(T))return;const o=y.get().presetMeta[n]?.name??`Preset ${n+1}`;if(await Yo(n,o))try{const s=await T.savePreset(n,y.get().config);y.setCurrentPreset(n),s.ok?(y.setDeviceConfig(y.get().config),y.toast("success",`Saved to preset ${n+1}`,"Written and verified against a read-back.")):y.toast("warn",`Saved to preset ${n+1}, but verify found differences`,s.mismatches.slice(0,6).join(", "))}catch(s){y.toast("error","Save failed",String(s instanceof Error?s.message:s))}},async backupAll(){try{const n=await T.getCurrentPreset();for(let e=0;e<8;e++){await T.loadPreset(e);const t=await T.readConfig();y.setPresetBackup(e,t.config)}n!==null&&await T.loadPreset(n),y.toast("success","Backed up all 8 slots","Copies stored in this browser. The module’s original preset was restored.")}catch(n){y.toast("error","Backup failed",String(n instanceof Error?n.message:n))}}},Os=Me(()=>{G("connbar-mount",Qe(y,T,se,_e))}),an=Me(()=>{const n=document.getElementById("monitor-mount");n&&(re(n),n.appendChild(zn(Ie,an)));const e=document.getElementById("activity-led");e&&e.classList.toggle("lit",Ie.isLit(performance.now()))});function Es(n){const e=document.activeElement?.id||"",t=document.querySelector("#view-editor .main-col"),o=t?.scrollTop??0;n(),e&&document.getElementById(e)?.focus({preventScroll:!0}),t&&(t.scrollTop=o)}const $=Me(()=>{q!=="manual"&&(Es(()=>{G("connbar-mount",Qe(y,T,se,_e)),G("notices-mount",Fs()),G("rack-mount",jn(y,{onHelp:ot})),G("presets-mount",zo(y,T,_s)),G("globals-mount",To(y)),G("modmatrix-mount",$o(y,fe,Rs)),G("files-mount",ea(y)),G("monitor-mount",zn(Ie,an)),G("masthead-sync",null)}),Ps())}),Ls=Me(()=>{q!=="manual"&&G("rack-mount",jn(y,{onHelp:ot}))});function G(n,e){const t=document.getElementById(n);t&&(re(t),e&&t.appendChild(e))}function Ds(){const{editor:n,device:e}=y.conflictChanges(),t=(o,s)=>i("div",{class:"conflict-col"},...s.length?s.map(a=>i("div",{class:`conflict-item ${o}`},a)):[i("div",{class:"conflict-item muted"},"(none)")]);return new Promise(o=>{const s=i("dialog",{class:"confirm conflict-dialog"}),a=r=>{s.close(),s.remove(),o(r)};s.appendChild(i("form",{method:"dialog",class:"confirm-inner"},i("h2",{},"Both changed — resolve the conflict"),i("p",{class:"small muted"},"The editor and the module both changed since you last synced. Nothing is merged automatically — choose which side wins."),i("div",{class:"conflict-grid"},i("div",{},i("div",{class:"conflict-head"},"EDITOR CHANGED"),t("editor",n)),i("div",{},i("div",{class:"conflict-head"},"MODULE CHANGED"),t("device",e))),i("div",{class:"row",style:"margin-top:.6rem"},i("button",{type:"button",class:"btn btn-ghost",style:"color:var(--accent);font-weight:600",onclick:()=>a("export")},"Export my version first")),i("div",{class:"conflict-actions"},i("button",{type:"button",class:"btn",onclick:()=>a("cancel")},"Cancel"),i("button",{type:"button",class:"btn",onclick:()=>a("take")},"Take the module’s ",i("span",{class:"mono small muted"},"← read")),i("button",{type:"button",class:"btn btn-danger",onclick:()=>a("keep")},"Keep my edits ",i("span",{class:"mono small"},"send →"))),i("p",{class:"small muted",style:"margin-top:.5rem"},"No default — Enter does nothing here. “Take the module’s” goes through the undo stack."))),s.addEventListener("cancel",r=>{r.preventDefault(),a("cancel")}),document.body.appendChild(s),s.showModal()})}function Fs(){const n=i("div",{class:"stack"}),e=so(T,()=>void tt());e&&n.appendChild(e);const t=io(T,T.kind==="simulator"?()=>{T.simulatePanelPresetChange(),y.toast("info","Module changed on the “panel”","Now press “Check module” to see the editor notice.")}:void 0);return t&&n.appendChild(t),n}function Rs(n){fe=n,T.setLearnMode(n!==null),$()}function ot(n,e){q="manual",at(),tn({mode:{family:n,key:e}})}function Ps(){const n=document.getElementById("toasts-mount");if(n){re(n);for(const e of y.getToasts())n.appendChild(i("div",{class:`toast toast-${e.level}`,role:"status"},i("div",{class:"toast-body"},i("div",{class:"toast-msg"},e.message),e.detail?i("div",{class:"toast-detail"},e.detail):null),i("button",{class:"btn btn-ghost btn-sm","aria-label":"Dismiss",onclick:()=>y.dismissToast(e.id)},"✕")))}}function at(){const n=document.getElementById("view-editor"),e=document.getElementById("view-manual"),t=document.getElementById("view-hardware"),o=document.getElementById("view-tuning");!n||!e||!t||!o||(n.hidden=q!=="editor",e.hidden=q!=="manual",t.hidden=q!=="hardware",o.hidden=q!=="tuning",q==="editor"&&$())}function He(n){q=n,at(),document.getElementById("app")?.querySelectorAll("[data-view-btn]").forEach(t=>{t.setAttribute("aria-selected",t.dataset.viewBtn===n?"true":"false")})}function Gs(n){re(n),n.removeAttribute("aria-busy"),aa(n,{onView:He,getView:()=>q}),n.appendChild(i("div",{id:"connbar-mount"}));const e=i("main",{id:"view-editor"},i("a",{id:"main"}),i("div",{id:"notices-mount",class:"main-col",style:"padding-bottom:0"}),i("div",{class:"workspace"},i("div",{class:"main-col"},i("div",{id:"rack-mount"}),i("div",{id:"modmatrix-mount"})),i("div",{class:"side-col"},i("div",{id:"presets-mount"}),i("div",{id:"monitor-mount"}),i("div",{id:"globals-mount"}),i("div",{id:"files-mount"}))));n.appendChild(e);const t=i("main",{id:"view-hardware",hidden:!0},i("div",{class:"main-col"},Zo()));n.appendChild(t);const o=i("main",{id:"view-tuning",hidden:!0},i("div",{class:"main-col"}));n.appendChild(o),Ss(o.firstElementChild,{send:(a,r)=>T.writeMicrotonalTable(a,r),isConnected:()=>T.getState().status==="connected",deviceLabel:()=>T.getState().status==="connected"?T.kind==="simulator"?"simulator":"module":"not connected",toast:(a,r,c)=>y.toast(a,r,c)});const s=i("main",{id:"view-manual",hidden:!0});n.appendChild(s),ms(s,{onBackToEditor:()=>He("editor")}),n.appendChild(i("div",{id:"toasts-mount",class:"toasts","aria-live":"polite"})),n.appendChild(i("footer",{class:"colophon"},i("span",{},"Unofficial editor for the eowave Portail. Not affiliated with eowave."),i("span",{},"MIT licensed."),i("span",{},"by ",i("a",{href:"https://www.spongefile.com",target:"_blank",rel:"noopener noreferrer"},"spongefile")),i("span",{class:"mono"},`spec ${y.get().config.configVersion}`)))}function Ns(){document.addEventListener("keydown",n=>{const e=n.metaKey||n.ctrlKey;e&&n.key.toLowerCase()==="z"&&!n.shiftKey?(n.preventDefault(),y.undo()):e&&(n.key.toLowerCase()==="y"||n.key.toLowerCase()==="z"&&n.shiftKey)&&(n.preventDefault(),y.redo())})}async function Ws(){const n=document.getElementById("app");n&&(Gs(n),y.subscribe(e=>e==="edit-region"?Ls():$()),document.addEventListener("portail:navigate",e=>He(e.detail)),on(T),Ns(),await T.start(),$(),setInterval(()=>{y.syncStatus().kind==="in-sync"&&G("connbar-mount",Qe(y,T,se,_e))},3e4),to()||y.toast("info","This browser can’t use Web MIDI","Editing, import and export work fully. Use Chrome or Edge to talk to a module. Working against the simulator for now."))}Ws();export{ie as c};

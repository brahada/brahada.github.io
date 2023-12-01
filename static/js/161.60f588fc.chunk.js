(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{161:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>d});n(791);var r=n(87),s=n(842),i=n(892),a=n.n(i),u=n(184);const c=t=>{let{data:e}=t;return(0,u.jsx)("div",{className:"cell-container",children:(0,u.jsxs)("article",{className:"mini-post",children:[(0,u.jsxs)("header",{children:[(0,u.jsx)("h3",{children:(0,u.jsx)("a",{href:e.link,children:e.title})}),(0,u.jsx)("time",{className:"published",children:e.date?a()(e.date).format("MMMM, YYYY"):"Ongoing"})]}),(0,u.jsx)("a",{href:e.link,className:"image",children:(0,u.jsx)("img",{src:"".concat("/brahada.github.io").concat(e.image),alt:e.title})}),(0,u.jsx)("div",{className:"description",children:(0,u.jsx)("p",{children:e.desc})})]})})},o=[{title:"Optimized Disaster Survivors Detection using Infra-Red Imagery",subtitle:"September 2020",image:"/images/projects/project1.jpg",date:"2020-09-01",desc:"Implemented an image recognition system using YOLOv3 and Tensorflow to detect survivors in IR imagery from disaster zones. Trained the model using deep learning techniques for accurate identification and location of individuals in crisis with 88% accuracy. Created a disaster assistant chatbot using DialogFlow deployed on Messenger for real-time support during emergencies which was 99% responsive and close to no downtime.",link:"https://github.com/brahada/Disaster-survivors-detection---Optimized-method"},{title:"Connectzo",subtitle:"Ongoing Project",image:"/images/projects/project2.png",date:"",desc:"Developing a job tracking app using Reactjs and prompt engineering to help individuals set and achieve career goals and visions abroad. Also helps with resume review and cover letter with the help of chatGPT API.",link:"connectzo.com"}],d=()=>(0,u.jsx)(s.Z,{title:"Projects",description:"Learn about Brahada's projects.",children:(0,u.jsxs)("article",{className:"post",id:"projects",children:[(0,u.jsx)("header",{children:(0,u.jsxs)("div",{className:"title",children:[(0,u.jsx)("h2",{children:(0,u.jsx)(r.rU,{to:"/projects",children:"Projects"})}),(0,u.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),o.map((t=>(0,u.jsx)(c,{data:t},t.title)))]})})},892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",s="second",i="minute",a="hour",u="day",c="week",o="month",d="quarter",h="year",l="date",f="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},p=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+p(r,2,"0")+":"+p(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(r,o),i=n-s<0,a=e.clone().add(r+(i?-1:1),o);return+(-(r+(n-s)/(i?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:h,w:c,d:u,D:l,h:a,m:i,s:s,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},M="en",y={};y[M]=g;var D="$isDayjsObject",w=function(t){return t instanceof O||!(!t||!t[D])},j=function t(e,n,r){var s;if(!e)return M;if("string"==typeof e){var i=e.toLowerCase();y[i]&&(s=i),n&&(y[i]=n,s=i);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var u=e.name;y[u]=e,s=u}return!r&&s&&(M=s),s||!r&&M},S=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new O(n)},b=v;b.l=j,b.i=w,b.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function g(t){this.$L=j(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[D]=!0}var p=g.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var s=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return b},p.isValid=function(){return!(this.$d.toString()===f)},p.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return S(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<S(t)},p.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,r=!!b.u(e)||e,d=b.p(t),f=function(t,e){var s=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?s:s.endOf(u)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,g=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case h:return r?f(1,0):f(31,11);case o:return r?f(1,g):f(0,g+1);case c:var M=this.$locale().weekStart||0,y=(m<M?m+7:m)-M;return f(r?p-y:p+(6-y),g);case u:case l:return $(v+"Hours",0);case a:return $(v+"Minutes",1);case i:return $(v+"Seconds",2);case s:return $(v+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var n,c=b.p(t),d="set"+(this.$u?"UTC":""),f=(n={},n[u]=d+"Date",n[l]=d+"Date",n[o]=d+"Month",n[h]=d+"FullYear",n[a]=d+"Hours",n[i]=d+"Minutes",n[s]=d+"Seconds",n[r]=d+"Milliseconds",n)[c],$=c===u?this.$D+(e-this.$W):e;if(c===o||c===h){var m=this.clone().set(l,1);m.$d[f]($),m.init(),this.$d=m.set(l,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f]($);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[b.p(t)]()},p.add=function(r,d){var l,f=this;r=Number(r);var $=b.p(d),m=function(t){var e=S(f);return b.w(e.date(e.date()+Math.round(t*r)),f)};if($===o)return this.set(o,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===u)return m(1);if($===c)return m(7);var g=(l={},l[i]=e,l[a]=n,l[s]=t,l)[$]||1,p=this.$d.getTime()+r*g;return b.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",s=b.z(this),i=this.$H,a=this.$m,u=this.$M,c=n.weekdays,o=n.months,d=n.meridiem,h=function(t,n,s,i){return t&&(t[n]||t(e,r))||s[n].slice(0,i)},l=function(t){return b.s(i%12||12,t,"0")},$=d||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return u+1;case"MM":return b.s(u+1,2,"0");case"MMM":return h(n.monthsShort,u,o,3);case"MMMM":return h(o,u);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,c,2);case"ddd":return h(n.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(i);case"HH":return b.s(i,2,"0");case"h":return l(1);case"hh":return l(2);case"a":return $(i,a,!0);case"A":return $(i,a,!1);case"m":return String(a);case"mm":return b.s(a,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,l,f){var $,m=this,g=b.p(l),p=S(r),v=(p.utcOffset()-this.utcOffset())*e,M=this-p,y=function(){return b.m(m,p)};switch(g){case h:$=y()/12;break;case o:$=y();break;case d:$=y()/3;break;case c:$=(M-v)/6048e5;break;case u:$=(M-v)/864e5;break;case a:$=M/n;break;case i:$=M/e;break;case s:$=M/t;break;default:$=M}return f?$:b.a($)},p.daysInMonth=function(){return this.endOf(o).$D},p.$locale=function(){return y[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=j(t,e,!0);return r&&(n.$L=r),n},p.clone=function(){return b.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},g}(),x=O.prototype;return S.prototype=x,[["$ms",r],["$s",s],["$m",i],["$H",a],["$W",u],["$M",o],["$y",h],["$D",l]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,O,S),t.$i=!0),S},S.locale=j,S.isDayjs=w,S.unix=function(t){return S(1e3*t)},S.en=y[M],S.Ls=y,S.p={},S}()}}]);
//# sourceMappingURL=161.60f588fc.chunk.js.map
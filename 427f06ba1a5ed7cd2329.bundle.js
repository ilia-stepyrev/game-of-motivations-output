(()=>{"use strict";var e,t,r,n={7121:(e,t,r)=>{r.d(t,{Z:()=>n}),e=r.hmd(e);const n=function(e){var t,r=e.Symbol;return"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==r.g?r.g:e)},8388:(e,t,r)=>{var n,o,a=r(7294),i=r(3935),c=r(4500),l=r.n(c),d=r(7196),s=r(4890);!function(e){e.EXPAND_MENU_PANEL="EXPAND_MENU_PANEL",e.GAME_BOARD_SIZE_CHANGED="GAME_BOARD_SIZE_CHANGED",e.GET_CARD="GET_CARD",e.NEXT_CARD="NEXT_CARD",e.PUT_CARD_TO_DECK="PUT_CARD_TO_DECK",e.RESTART_GAME="RESTART_GAME",e.SELECT_CARD="SELECT_CARD",e.SELECT_LANG="SELECT_LANG",e.SWITCH_RESTART_CONFIRMATION_POPUP="SWITCH_RESTARTE_CONFIRMATION_POPUP",e.UPDATE_CARDS_STATE="UPDATE_CARDS_STATE"}(n||(n={})),function(e){e.EN="en",e.RU="ru"}(o||(o={}));var u="GAME_STATE",p="CURRENT_LANG",f={current:localStorage.getItem(p)||o.EN},m=function(e,t){switch(void 0===e&&(e=f),t&&t.type){case n.SELECT_LANG:return localStorage.setItem(p,t.payload.lang),{current:t.payload.lang};default:return e}},h=1.7,E=.03,g=.75,v=function(){return(v=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},y=v(v(v({},A(!1)),T()),{isPanelExpanded:!1}),b=function(e,t){switch(void 0===e&&(e=y),t&&t.type){case n.GAME_BOARD_SIZE_CHANGED:return v(v(v({},e),A(e.isPanelExpanded)),T());case n.EXPAND_MENU_PANEL:return v(v(v({},e),A(t.payload.isPanelExpanded)),{isPanelExpanded:t.payload.isPanelExpanded});default:return e}};function A(e){var t,r,n,o,a=window.innerWidth,i=window.innerHeight-(e?190:80);return v({width:a,height:i},(t=i,12,r=a*h,n=new Array(12).fill(void 0).map((function(e,n){return Math.min(r/Math.ceil(12/(n+1)),t/(n+1))})),o=Math.max.apply(Math,n),{cardsPerRow:12/(n.indexOf(o)+1),cardHeight:o,cardWidth:o/1.7}))}function T(){var e=window.innerWidth-10,t=window.innerHeight-10,r=e*h<t;return{selectedCardWidth:e=r?e:t/h,selectedCardHeight:t=r?e*h:t}}var C,w,I=function(e,t,r){var n=(r?"?":"")+e.map((function(e){return e.substr(0,10)})).join(" "),o=window.gtag;o?o("event","cards_result",{value:t,event_label:n}):console.log("EVENT cards_result ;gameId = "+t+" ;result = "+n)};!function(e){e.CHALLENGE="challenge",e.COMMUNICATION="communication",e.CONTRIBUTION="contribution",e.CREATIVENESS="creativeness",e.EXPERT="expert",e.FEEDBACK="feedback",e.LEADER="leader",e.LIFESTYLE="lifestyle",e.SALARY="salary",e.STATUS="status",e.TEAM="team"}(C||(C={})),function(e){e.ACTIVE="active",e.RESTART_CONFIRMATION="restart_confirmation"}(w||(w={}));var _=null,S=0,O={track:N,isLongGame:function(){return N(),S>6e5},reset:function(){S=0,_=(new Date).getTime()}};function N(){var e=(new Date).getTime(),t=e-_;S+=t<6e4?t:6e4,_=e,console.log("TRACK = "+S/1e3)}var k,D=function(){return(D=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},R=function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e},x=D(D({},M()),(k=localStorage.getItem(u),JSON.parse(k))),P=function(e,t){switch(void 0===e&&(e=x),t&&t.type){case n.UPDATE_CARDS_STATE:return D(D({},e),L(t.payload.deck,t.payload.result,e.gameId));case n.SELECT_CARD:return D(D({},e),{selectedCard:t.payload.selectedCard});case n.NEXT_CARD:return D(D(D({},e),L(t.payload.deck,R(R([],e.result),[t.payload.card]),e.gameId)),{selectedCard:t.payload.card});case n.GET_CARD:return t.payload.cardIndex<0?D({},e):D(D(D({},e),L(t.payload.deck,R(R([],e.result),[t.payload.card]),e.gameId)),{selectedCard:t.payload.card});case n.PUT_CARD_TO_DECK:return t.payload.cardIndex<0?D({},e):D(D(D({},e),L(R(R([],e.deck),[t.payload.card]),t.payload.result,e.gameId)),{selectedCard:null});case n.SWITCH_RESTART_CONFIRMATION_POPUP:return D(D({},e),{gameState:t.payload.popupState?w.RESTART_CONFIRMATION:w.ACTIVE});case n.RESTART_GAME:var r=M(),o=r.deck,a=r.result,i=r.selectedCard,c=r.gameState,l=r.gameId;return D(D(D({},e),L(o,a,l)),{selectedCard:i,gameState:c});default:return e}};function M(){return{deck:Object.values(C).sort((function(){return.5-Math.random()})),result:[],selectedCard:null,gameState:w.ACTIVE,gameId:parseInt((new Date).getTime().toString()+Math.round(100*Math.random()))}}function L(e,t,r){return O.track(),11===t.length&&I(t,r,!O.isLongGame()),localStorage.setItem(u,JSON.stringify({deck:e,result:t,gameId:r})),{deck:e,result:t,gameId:r}}var H=function(e){return function(t){return function(r){if("function"!=typeof r)return t(r);var n=r(e.getState());return t(n)}}};const j=new(function(){function e(){}return e.prototype.create=function(){return this.store=(0,s.MT)((0,s.UY)({lang:m,gameBoardDimension:b,gameBoard:P}),(0,s.md)(H,d.Z,l())),this.store},e.prototype.getStore=function(){return this.store},e}());var U,B,G,Z=((U={})[C.CHALLENGE]="img/challenge.svg",U[C.COMMUNICATION]="img/communication.svg",U[C.CONTRIBUTION]="img/contribution.svg",U[C.CREATIVENESS]="img/creativeness.svg",U[C.EXPERT]="img/expert.svg",U[C.FEEDBACK]="img/feedback.svg",U[C.LEADER]="img/leader.svg",U[C.LIFESTYLE]="img/lifestyle.svg",U[C.SALARY]="img/salary.svg",U[C.STATUS]="img/status.svg",U[C.TEAM]="img/team.svg",U),W=function(e){return{type:n.SELECT_CARD,payload:{selectedCard:e}}},F=r(1120),z={WebkitTouchCallout:"none",WebkitUserSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",MsUserSelect:"none",userSelect:"none"},X=function(){return(X=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},q={title:"English",content:{cardParts:{predescription:"in case if",postdescription:"ready to give away any subsequent card"},restartGame:"restart",putCardBackToDeck:"put back to the deck",confirmation:{yes:"Yes",no:"No"},restartConfirmation:{title:"New game",text:"Are you sure you want to start a new game? The current result will be lost"},cards:(B={},B[C.CHALLENGE]={title:"Challenge",description:"there will be an opportunity to avoid routine tasks and do more the tasks which allow me to constantly develop"},B[C.COMMUNICATION]={title:"Communication",description:"there will be an opportunity to spend part of my working time on communications"},B[C.CONTRIBUTION]={title:"Contribution",description:"I will see the outcomes of my work and know that many people use what I have done"},B[C.CREATIVENESS]={title:"Creativeness",description:"I will be able to come up with something of my own"},B[C.EXPERT]={title:"Expert opinion",description:"I will be able to become an example to follow and people will reach out to me and strive to reach a high level"},B[C.FEEDBACK]={title:"Feedback",description:"I will be able to receive feedback on my work in a convenient way"},B[C.LEADER]={title:"Leadership",description:"I will have a chance to take a leadership role on a project or a team"},B[C.LIFESTYLE]={title:"Lifestyle",description:"I will be able to flexibly customize my work schedule and work from a convenient place for me"},B[C.SALARY]={title:"Salary",description:"my salary will be increased by 20%"},B[C.STATUS]={title:"Status",description:"I will be able to take part in making strategic decisions in the company"},B[C.TEAM]={title:"Team",description:"I will work in a good team"},B)}},K={title:"Русский",content:{cardParts:{predescription:"в случае, если",postdescription:"готов пожертвовать любой последующей картой"},restartGame:"сначала",putCardBackToDeck:"убрать карту в колоду",confirmation:{yes:"Да",no:"Нет"},restartConfirmation:{title:"Новая игра",text:"Вы уверены что хотите начать новую игру? Результаты текущей игры не сохранятся"},cards:(G={},G[C.CHALLENGE]={title:"Вызов",description:"будет возможность избегать рутинных задач и больше заниматься тем, что позволяет постоянно быть в тонусе и развиваться"},G[C.COMMUNICATION]={title:"Общение",description:"у меня будет возможность проводить часть рабочего времени за общением"},G[C.CONTRIBUTION]={title:"Вклад",description:"я буду видеть результаты своей работы и знать, что многие пользуется тем, что я сделал"},G[C.CREATIVENESS]={title:"Творчество",description:"я буду иметь возможность придумать или разработать что-то свое"},G[C.EXPERT]={title:"Экспертное мнение",description:"я смогу стать примером для остальных и люди будут тянуться ко мне и тому уровню, что у меня есть"},G[C.FEEDBACK]={title:"Фидбек",description:"я буду получать отзывы о моей работе на удобной для меня основе"},G[C.LEADER]={title:"Лидерство",description:"я буду занимать лидирующую  или руководящую роль на проекте или в команде"},G[C.LIFESTYLE]={title:"Образ жизни",description:"у меня будет возможность гибко настраивать свой рабочий график и работать из удобного мне места"},G[C.SALARY]={title:"Заработок",description:"мне повысят з/п на 20%"},G[C.STATUS]={title:"Статус",description:"я смогу участвовать в принятии стратегических решений в компании"},G[C.TEAM]={title:"Команда",description:"у меня будет возможность работать в хорошей команде"},G)}},Y=new Map([[o.EN,q],[o.RU,K]]),V=r(906),$=function(){var e=(0,V.v9)((function(e){return e.lang.current}));return Y.get(e).content},J=r(9263);function Q(e){var t=e.card,r=e.zoomable,n=e.cardWidth,o=e.cardHeight,i=e.onClick,c=function(e,t){return(0,F.Z)((function(r){var n=.05*t,o=e-n,a=t-n;return{wrapper:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},container:X(X({},z),{position:"relative",width:o,height:a,background:"#c6e8f0",border:"1px solid"}),button:{position:"absolute",top:0,left:0,opacity:.5,"&:hover":{opacity:1}},title:{color:"#304565",textAlign:"center",textTransform:"uppercase",fontWeight:"bold",fontSize:.1*o,height:.14*a},imageWrapper:{display:"flex",alignItems:"center",justifyContent:"center",height:.56*a,marginLeft:.06*a,marginRight:.06*a,"& > img":X({},z)},predescription:{fontStyle:"italic",position:"absolute",fontSize:.04*o,bottom:.25*a,paddingLeft:o*E},description:{position:"absolute",display:"flex",alignItems:"center",textAlign:"center",justifyContent:"center",background:"#6eccde",left:0,right:0,height:.2*a,top:a*g,fontSize:.05*o,fontWeight:"bold",paddingLeft:o*E,paddingRight:o*E},postdescription:{textAlign:"center",fontStyle:"italic",position:"absolute",width:"100%",fontSize:.04*o,top:.95*a}}}))}(n,o)(),l=$(),d=(0,V.I0)(),s=l.cards[t];return a.createElement("div",{className:c.wrapper,onClick:function(){return i&&i()}},a.createElement("div",{className:c.container},r?a.createElement("div",{className:c.button,onClick:function(){return d(W(t))}},a.createElement(J.Z,null)):null,a.createElement("div",{className:c.title},s.title),a.createElement("div",{className:c.imageWrapper},a.createElement("img",{src:Z[t],id:t,draggable:!1})),a.createElement("div",{className:c.predescription},l.cardParts.predescription),a.createElement("div",{className:c.description},s.description),a.createElement("div",{className:c.postdescription},l.cardParts.postdescription)))}function ee(e){var t=e.card,r=e.zoomable,n=(0,V.v9)((function(e){return e.gameBoardDimension})),o=n.cardWidth,i=n.cardHeight;return a.createElement(Q,{zoomable:r,card:t,cardHeight:i,cardWidth:o})}var te=r(282),re=r(726),ne=function(e){return{type:n.SWITCH_RESTART_CONFIRMATION_POPUP,payload:{popupState:e}}};function oe(){var e,t,r,o=(0,V.v9)((function(e){return e.gameBoardDimension})),i=(e=o.cardWidth,t=o.cardHeight,r=o.cardsPerRow,(0,F.Z)((function(n){var o=.05*t,a=12/r,i=e-o,c=((e=Math.max(window.innerWidth/r,e))-i)/2,l=o/2;return{wrapper:{position:"absolute",top:(a-1)*t,right:0,height:t,width:e},deck:{position:"absolute",content:'""',top:l,bottom:l,right:c,left:c,backgroundImage:'url("img/card-back.svg")',zIndex:20},restartGame:{height:"100%",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}})))(),c=(0,V.v9)((function(e){return e.gameBoard.deck})),l=(0,V.I0)(),d=$();return a.createElement("div",{className:i.wrapper},c.length?a.createElement("div",{className:i.deck,onClick:function(){return l((function(e){var t=function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e}([],e.gameBoard.deck),r=t.pop();return{type:n.NEXT_CARD,payload:{card:r,deck:t}}}))}}):a.createElement("div",{className:i.restartGame},a.createElement(te.Z,{variant:"contained",color:"default",startIcon:a.createElement(re.Z,null),onClick:function(){return l(ne(!0))}},d.restartGame)))}var ae=r(2810),ie=r(3695),ce=r(1913),le=r(2585),de=(0,F.Z)((function(e){return{container:{flex:"1 1 100%",height:0,position:"relative"}}}));function se(){var e=(0,V.v9)((function(e){return e.gameBoardDimension})),t=e.cardHeight,r=e.cardsPerRow,o=de(),i=(0,V.I0)(),c=(0,V.v9)((function(e){return e.gameBoard.result}));return a.createElement(ae.d,{onChange:function(e,t,r,o){i(function(e,t){return function(r){return Promise.resolve({type:n.UPDATE_CARDS_STATE,payload:{deck:r.gameBoard.deck,result:(0,le.L)(r.gameBoard.result,e,t)}})}}(t,r))}},a.createElement(ie.$,{id:"items",boxesPerRow:r,rowHeight:t,className:o.container},c.map((function(e){return a.createElement(ce.P,{key:e},a.createElement(ee,{card:e,zoomable:!0}))})),a.createElement(oe,null)))}var ue=r(4566),pe=r(9609),fe=r(743),me=r(1201),he=r(7812),Ee=(0,F.Z)((function(e){return{container:{flex:"0 0 20px"},cardWrapper:{position:"relative",height:70,width:"100%"},cardContainer:{position:"absolute",top:-40,left:0,right:40,display:"flex"},button:{position:"absolute",right:5,bottom:10,height:30,width:30}}}));function ge(){var e=Ee(),t=(0,V.I0)(),r=$(),o=(0,V.v9)((function(e){return e.gameBoard.deck})).slice().sort((function(e,t){return r.cards[e].title>r.cards[t].title?1:-1}));return a.createElement("div",{className:e.container},a.createElement(pe.Z,{onChange:function(e,r){return t((o=r,{type:n.EXPAND_MENU_PANEL,payload:{isPanelExpanded:o}}));var o}},a.createElement(fe.Z,{expandIcon:a.createElement(ue.Z,null)}),a.createElement(me.Z,null,a.createElement("div",{className:e.cardWrapper},a.createElement("div",{className:e.cardContainer},o.map((function(e){return a.createElement(a.Fragment,{key:e},a.createElement(Q,{zoomable:!1,card:e,cardHeight:100,cardWidth:58.82352941176471,onClick:function(){return t((r=e,function(e){var t=e.gameBoard.deck.indexOf(r),o=function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e}([],e.gameBoard.deck);return t>=0&&o.splice(t,1),{type:n.GET_CARD,payload:{card:r,cardIndex:t,deck:o}}}));var r}}))}))),a.createElement("div",{className:e.button},a.createElement(he.Z,{color:"default",component:"span",title:r.restartGame,onClick:function(){return t(ne(!0))}},a.createElement(re.Z,null)))))))}var ve=r(8623),ye=r(6856),be=r(9525),Ae=r(7212),Te=r(6083);function Ce(e){var t=e.open,r=e.confirmationTitle,n=e.confirmationText,o=e.onClose,i=e.onConfirm,c=$();return a.createElement(ve.Z,{open:t,onClose:o},a.createElement(Te.Z,null,r),a.createElement(be.Z,null,a.createElement(Ae.Z,null,n)),a.createElement(ye.Z,null,a.createElement(te.Z,{onClick:i,color:"primary"},c.confirmation.yes),a.createElement(te.Z,{onClick:o,color:"primary",autoFocus:!0},c.confirmation.no)))}function we(){var e=(0,V.I0)(),t=(0,V.v9)((function(e){return e.gameBoard.gameState})),r=$();return a.createElement(Ce,{open:t===w.RESTART_CONFIRMATION,onClose:function(){return e(ne(!1))},onConfirm:function(){return e({type:n.RESTART_GAME,payload:{}})},confirmationTitle:r.restartConfirmation.title,confirmationText:r.restartConfirmation.text})}var Ie=r(2614),_e=(0,F.Z)((function(e){return{container:{width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:1e3},backdrop:{background:"black",opacity:.7,width:"100%",height:"100%"},wrapper:{position:"absolute",top:0,width:"100%",height:"100%"},button:{position:"absolute",bottom:0,right:0,width:250,height:50}}}));function Se(){var e=(0,V.I0)(),t=_e(),r=$(),o=(0,V.v9)((function(e){return e.gameBoard.selectedCard})),i=(0,V.v9)((function(e){return e.gameBoardDimension})),c=i.selectedCardHeight,l=i.selectedCardWidth;return o?a.createElement("div",{className:t.container,onClick:function(){return e(W(null))}},a.createElement("div",{className:t.backdrop}),a.createElement("div",{className:t.wrapper},a.createElement(Q,{card:o,zoomable:!1,cardHeight:c,cardWidth:l}),a.createElement("div",{className:t.button},a.createElement(te.Z,{variant:"contained",color:"default",startIcon:a.createElement(Ie.Z,null),onClick:function(){return e(function(e){return function(t){var r=t.gameBoard.result.indexOf(e),o=function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e}([],t.gameBoard.result);return r>=0&&o.splice(r,1),{type:n.PUT_CARD_TO_DECK,payload:{card:e,cardIndex:r,result:o}}}}(o))}},r.putCardBackToDeck)))):null}var Oe=(0,F.Z)((function(e){return{container:{height:"100%",display:"flex",flexDirection:"column",background:"linear-gradient(to bottom, #C19A6B 0%, #B28B5C 100%)",position:"relative"}}})),Ne=(0,F.Z)((function(e){return{container:{flex:"0 0 30",height:30},lang:{float:"right"}}}));function ke(){var e=Ne(),t=(0,V.v9)((function(e){return e.lang})).current,r=(0,V.I0)();return a.createElement("div",{className:e.container},Array.from(Y.keys()).map((function(o){return a.createElement(te.Z,{key:o,className:e.lang,color:t===o?"primary":"secondary",onClick:function(){return r(function(e){return{type:n.SELECT_LANG,payload:{lang:e}}}(o))}},Y.get(o).title)})))}function De(){var e=Oe(),t=(0,V.I0)();return(0,a.useEffect)((function(){var e,r,o=(e=function(){return t({type:n.GAME_BOARD_SIZE_CHANGED})},500,function(){clearTimeout(r),r=setTimeout((function(){r=null,e()}),500)});return window.addEventListener("resize",o),function(){return window.removeEventListener("resize",o)}}),[]),a.createElement("div",{className:e.container},a.createElement(ke,null),a.createElement(se,null),a.createElement(ge,null),a.createElement(Se,null),a.createElement(we,null))}var Re=j.create();var xe=document.getElementById("main");xe&&i.render(a.createElement((function(){return a.createElement(V.zt,{store:Re},a.createElement(De,null))})),xe)},655:(e,t,r)=>{r.d(t,{pi:()=>n,_T:()=>o,XA:()=>a,CR:()=>i,fl:()=>c});var n=function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function a(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function i(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}function c(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(i(arguments[t]));return e}}},o={};function a(e){var t=o[e];if(void 0!==t){if(void 0!==t.error)throw t.error;return t.exports}var r=o[e]={id:e,loaded:!1,exports:{}};try{var i={id:e,module:r,factory:n[e],require:a};a.i.forEach((function(e){e(i)})),r=i.module,i.factory.call(r.exports,r,r.exports,i.require)}catch(e){throw r.error=e,e}return r.loaded=!0,r.exports}a.m=n,a.c=o,a.i=[],e=[],a.O=(t,r,n,o)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,n,o]=e[d],c=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](r[l])))?r.splice(l--,1):(c=!1,o<i&&(i=o));c&&(e.splice(d--,1),t=n())}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,n,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.hu=e=>e+"."+a.h()+".hot-update.js",a.hmrF=()=>"main."+a.h()+".hot-update.json",a.h=()=>"4b29e166dfcb0c07af01",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="game-of-motivations:",a.l=(e,n,o,i)=>{if(t[e])t[e].push(n);else{var c,l;if(void 0!==o)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var u=d[s];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+o){c=u;break}}c||(l=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.setAttribute("data-webpack",r+o),c.src=e),t[e]=[n];var p=(r,n)=>{c.onerror=c.onload=null,clearTimeout(f);var o=t[e];if(delete t[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(n))),r)return r(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),l&&document.head.appendChild(c)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e,t,r,n,o={},i=a.c,c=[],l=[],d="idle";function s(e){d=e;for(var t=0;t<l.length;t++)l[t].call(null,e)}function u(e){if(0===t.length)return e();var r=t;return t=[],Promise.all(r).then((function(){return u(e)}))}function p(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return s("check"),a.hmrM().then((function(n){if(!n)return s(h()?"ready":"idle"),null;s("prepare");var o=[];return t=[],r=[],Promise.all(Object.keys(a.hmrC).reduce((function(e,t){return a.hmrC[t](n.c,n.r,n.m,e,r,o),e}),[])).then((function(){return u((function(){return e?m(e):(s("ready"),o)}))}))}))}function f(e){return"ready"!==d?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):m(e)}function m(e){e=e||{},h();var t=r.map((function(t){return t(e)}));r=void 0;var o,a=t.map((function(e){return e.error})).filter(Boolean);if(a.length>0)return s("abort"),Promise.resolve().then((function(){throw a[0]}));s("dispose"),t.forEach((function(e){e.dispose&&e.dispose()})),s("apply");var i=function(e){o||(o=e)},c=[];return t.forEach((function(e){if(e.apply){var t=e.apply(i);if(t)for(var r=0;r<t.length;r++)c.push(t[r])}})),o?(s("fail"),Promise.resolve().then((function(){throw o}))):n?m(e).then((function(e){return c.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e})):(s("idle"),Promise.resolve(c))}function h(){if(n)return r||(r=[]),Object.keys(a.hmrI).forEach((function(e){n.forEach((function(t){a.hmrI[e](t,r)}))})),n=void 0,!0}a.hmrD=o,a.i.push((function(m){var h,E,g,v=m.module,y=function(r,n){var o=i[n];if(!o)return r;var a=function(t){if(o.hot.active){if(i[t]){var a=i[t].parents;-1===a.indexOf(n)&&a.push(n)}else c=[n],e=t;-1===o.children.indexOf(t)&&o.children.push(t)}else console.warn("[HMR] unexpected require("+t+") from disposed module "+n),c=[];return r(t)},l=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(t){r[e]=t}}};for(var p in r)Object.prototype.hasOwnProperty.call(r,p)&&"e"!==p&&Object.defineProperty(a,p,l(p));return a.e=function(e){return function(e){switch(d){case"ready":return s("prepare"),t.push(e),u((function(){s("ready")})),e;case"prepare":return t.push(e),e;default:return e}}(r.e(e))},a}(m.require,m.id);v.hot=(h=m.id,E=v,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:e!==h,_requireSelf:function(){c=E.parents.slice(),e=h,a(h)},active:!0,accept:function(e,t,r){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)g._acceptedDependencies[e[n]]=t||function(){},g._acceptedErrorHandlers[e[n]]=r;else g._acceptedDependencies[e]=t||function(){},g._acceptedErrorHandlers[e]=r},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)g._declinedDependencies[e[t]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=g._disposeHandlers.indexOf(e);t>=0&&g._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,d){case"idle":r=[],Object.keys(a.hmrI).forEach((function(e){a.hmrI[e](h,r)})),s("ready");break;case"ready":Object.keys(a.hmrI).forEach((function(e){a.hmrI[e](h,r)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(h)}},check:p,apply:f,status:function(e){if(!e)return d;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);t>=0&&l.splice(t,1)},data:o[h]},e=void 0,g),v.parents=c,v.children=[],c=[],m.require=y})),a.hmrC={},a.hmrI={}})(),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e,t,r,n,o={545:0},i={};function c(e){return new Promise(((t,r)=>{i[e]=t;var n=a.p+a.hu(e),o=new Error;a.l(n,(t=>{if(i[e]){i[e]=void 0;var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+n+": "+a+")",o.name="ChunkLoadError",o.type=n,o.request=a,r(o)}}))}))}function l(i){function c(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),i=o.id,c=o.chain,d=a.c[i];if(d&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var s=0;s<d.parents.length;s++){var u=d.parents[s],p=a.c[u];if(p){if(p.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([u]),moduleId:i,parentId:u};-1===t.indexOf(u)&&(p.hot._acceptedDependencies[i]?(r[u]||(r[u]=[]),l(r[u],[i])):(delete r[u],t.push(u),n.push({chain:c.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}a.f&&delete a.f.jsonpHmr,e=void 0;var d={},s=[],u={},p=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var f in t)if(a.o(t,f)){var m,h=t[f],E=!1,g=!1,v=!1,y="";switch((m=h?c(f):{type:"disposed",moduleId:f}).chain&&(y="\nUpdate propagation: "+m.chain.join(" -> ")),m.type){case"self-declined":i.onDeclined&&i.onDeclined(m),i.ignoreDeclined||(E=new Error("Aborted because of self decline: "+m.moduleId+y));break;case"declined":i.onDeclined&&i.onDeclined(m),i.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+m.moduleId+" in "+m.parentId+y));break;case"unaccepted":i.onUnaccepted&&i.onUnaccepted(m),i.ignoreUnaccepted||(E=new Error("Aborted because "+f+" is not accepted"+y));break;case"accepted":i.onAccepted&&i.onAccepted(m),g=!0;break;case"disposed":i.onDisposed&&i.onDisposed(m),v=!0;break;default:throw new Error("Unexception type "+m.type)}if(E)return{error:E};if(g)for(f in u[f]=h,l(s,m.outdatedModules),m.outdatedDependencies)a.o(m.outdatedDependencies,f)&&(d[f]||(d[f]=[]),l(d[f],m.outdatedDependencies[f]));v&&(l(s,[m.moduleId]),u[f]=p)}t=void 0;for(var b,A=[],T=0;T<s.length;T++){var C=s[T],w=a.c[C];w&&w.hot._selfAccepted&&u[C]!==p&&!w.hot._selfInvalidated&&A.push({module:C,require:w.hot._requireSelf,errorHandler:w.hot._selfAccepted})}return{dispose:function(){var e;r.forEach((function(e){delete o[e]})),r=void 0;for(var t,n=s.slice();n.length>0;){var i=n.pop(),c=a.c[i];if(c){var l={},u=c.hot._disposeHandlers;for(T=0;T<u.length;T++)u[T].call(null,l);for(a.hmrD[i]=l,c.hot.active=!1,delete a.c[i],delete d[i],T=0;T<c.children.length;T++){var p=a.c[c.children[T]];p&&(e=p.parents.indexOf(i))>=0&&p.parents.splice(e,1)}}}for(var f in d)if(a.o(d,f)&&(c=a.c[f]))for(b=d[f],T=0;T<b.length;T++)t=b[T],(e=c.children.indexOf(t))>=0&&c.children.splice(e,1)},apply:function(e){for(var t in u)a.o(u,t)&&(a.m[t]=u[t]);for(var r=0;r<n.length;r++)n[r](a);for(var o in d)if(a.o(d,o)){var c=a.c[o];if(c){b=d[o];for(var l=[],p=[],f=[],m=0;m<b.length;m++){var h=b[m],E=c.hot._acceptedDependencies[h],g=c.hot._acceptedErrorHandlers[h];if(E){if(-1!==l.indexOf(E))continue;l.push(E),p.push(g),f.push(h)}}for(var v=0;v<l.length;v++)try{l[v].call(null,b)}catch(t){if("function"==typeof p[v])try{p[v](t,{moduleId:o,dependencyId:f[v]})}catch(r){i.onErrored&&i.onErrored({type:"accept-error-handler-errored",moduleId:o,dependencyId:f[v],error:r,originalError:t}),i.ignoreErrored||(e(r),e(t))}else i.onErrored&&i.onErrored({type:"accept-errored",moduleId:o,dependencyId:f[v],error:t}),i.ignoreErrored||e(t)}}}for(var y=0;y<A.length;y++){var T=A[y],C=T.module;try{T.require(C)}catch(t){if("function"==typeof T.errorHandler)try{T.errorHandler(t,{moduleId:C,module:a.c[C]})}catch(r){i.onErrored&&i.onErrored({type:"self-accept-error-handler-errored",moduleId:C,error:r,originalError:t}),i.ignoreErrored||(e(r),e(t))}else i.onErrored&&i.onErrored({type:"self-accept-errored",moduleId:C,error:t}),i.ignoreErrored||e(t)}}return s}}}self.webpackHotUpdategame_of_motivations=(e,r,o)=>{for(var c in r)a.o(r,c)&&(t[c]=r[c]);o&&n.push(o),i[e]&&(i[e](),i[e]=void 0)},a.hmrI.jsonp=function(e,o){t||(t={},n=[],r=[],o.push(l)),a.o(t,e)||(t[e]=a.m[e])},a.hmrC.jsonp=function(i,d,s,u,p,f){p.push(l),e={},r=d,t=s.reduce((function(e,t){return e[t]=!1,e}),{}),n=[],i.forEach((function(t){a.o(o,t)&&void 0!==o[t]&&(u.push(c(t)),e[t]=!0)})),a.f&&(a.f.jsonpHmr=function(t,r){e&&!a.o(e,t)&&a.o(o,t)&&void 0!==o[t]&&(r.push(c(t)),e[t]=!0)})},a.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(a.p+a.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))},a.O.j=e=>0===o[e];var d=(e,t)=>{var r,n,[i,c,l]=t,d=0;for(r in c)a.o(c,r)&&(a.m[r]=c[r]);for(l&&l(a),e&&e(t);d<i.length;d++)n=i[d],a.o(o,n)&&o[n]&&o[n][0](),o[i[d]]=0;a.O()},s=self.webpackChunkgame_of_motivations=self.webpackChunkgame_of_motivations||[];s.forEach(d.bind(null,0)),s.push=d.bind(null,s.push.bind(s))})();var i=a.O(void 0,[240,178,923,907,56,248,895,871,980,832,576],(()=>a(8388)));i=a.O(i)})();
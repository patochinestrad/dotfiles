(self.webpackChunk=self.webpackChunk||[]).push([[3384],{15073:(e,t,n)=>{n.d(t,{u:()=>o});var o,i=n(27378),r=n(40327),u=n(98403),a=n(19751),l=n(2844),d=n(85089),s=n(2834),c=n(9223),f=n(5114),m=n(83078),S=n(90845);!function(e){e.Manager=function(t){var n=t.children,o=t.remSize,r=u.Dx(o).pipe(a.shareReplay({refCount:!0,bufferSize:1}));return S.P.useSingleton("RemSize.Manager"),S.P.useSubscriptionTo(r),i.createElement(e.Context.Provider,{value:r},n)},e.DefaultManager=function(t){var n=t.children;return S.P.useSingleton("RemSize.DefaultManager"),i.createElement(e.Manager,{remSize:e.withRemSizeEffect(e.defaultSizeObserver)},n)},e.defaultSizeObserver=l.aj(d.Lw("(max-width: 1359px)"),d.Lw("(min-width: 1600px)"),(function(e,t){return e?14:t?18:16})),e.withRemSizeEffect=function(t,n){return void 0===n&&(n=e.defaultFontSizeSetter),t.pipe(s.b((function(e){return n(f.some(e))})),c.x(n.bind(null,f.none)),a.shareReplay({refCount:!0,bufferSize:1}))},e.defaultFontSizeSetter=function(t){e.setRootCssVar(document.documentElement,t),e.setRootFontSize(t)},e.Context=i.createContext(e.defaultSizeObserver),e.setRootCssVar=function(e,t){e.style.setProperty("--rem",(0,r.pipe)(t,f.map(String),m.orNull))},e.setRootFontSize=function(e){document.documentElement.style.fontSize=(0,r.pipe)(e,f.map((function(e){return e+"px"})),m.orNull)}}(o||(o={}))},73521:(e,t,n)=>{n.r(t),n.d(t,{SduiCard:()=>z});var o,i=n(27378),r=n(57050),u=n(15073),a=n(42103),l=n(76974),d=n(2834),s=n(5114),c=n(18702),f=n(33194),m=n(66349),S=n(40333);!function(e){e.of=e=>e}(o||(o={}));const p=({children:e})=>i.createElement(u.u.Manager,{remSize:(0,r.zG)(l.of(16),d.b((e=>u.u.setRootCssVar(document.documentElement,s.some(e)))))},i.createElement(a.G.DefaultProvider,null,e)),z=({model:e})=>i.createElement(p,null,i.createElement(c.P,{key:e.sdui.id,sduiRootId:e.sdui.id,content:e.sdui.content,prevContent:s.none,transitions:[],designSystem:{...m.k,inlineCard:(0,S.I)(o.of(13.5),o.of(20.25))},onMount:r.Q1,onAnimationEnd:r.Q1,notify:(t,n,o)=>{const i=n.filter((e=>"positionedClick"!=e.type&&"hoverStateChanged"!=e.type));e.onSduiAction(f.Oe.create(i,e.sdui.id,t,o))}}))}}]);
(self.webpackChunk=self.webpackChunk||[]).push([[9923],{92693:(t,e,i)=>{i.d(e,{D:()=>l,a:()=>s});var s,a=i(59358),n=i(81591),o=i(48015),r=i(14601),h=i(78674),c=i(85985);!function(t){let e,i;!function(t){t.default="default",t.emogenie="emogenie",t.readersAttention="readersAttention",t.readersAttentionHelp="readersAttentionHelp",t.feedback="feedback",t.settings="settings",t.proofitRequest="proofitRequest",t.proofitReview="proofitReview",t.startupPlaceholder="startupPlaceholder"}(e=t.Type||(t.Type={})),function(t){let e;!function(t){let e;!function(t){t.predictionWidget="predictionWidget",t.navigation="navigation",t.readersAttentionItem="readersAttentionItem"}(e=t.Type||(t.Type={}))}(e=t.Caller||(t.Caller={}))}(i=t.ReadersAttention||(t.ReadersAttention={})),t.isDefault=function(e){return e.type===t.Type.default},t.isEmogenie=function(e){return e.type===t.Type.emogenie},t.isReadersAttention=function(e){return e.type===t.Type.readersAttention},t.isReadersAttentionHelp=function(e){return e.type===t.Type.readersAttentionHelp},t.isFeedback=function(e){return e.type===t.Type.feedback},t.isSettings=function(e){return e.type===t.Type.settings},t.isProofitRequest=function(e){return e.type===t.Type.proofitRequest},t.isProofitReview=function(e){return e.type===t.Type.proofitReview}}(s||(s={}));class l extends n.A{constructor(t,e,i,n,l=a.V.defaultLayout){super({type:s.Type.startupPlaceholder},{type:s.Type.default}),this.browser=n,this.layout=l,this._sub=new r.w,this._sub.add(e.subscribe((t=>{if(t.length>0)for(;!this.activeViewHasAlerts();)this.popActiveView()})));const p=new Set([s.Type.readersAttention,s.Type.emogenie]);this._sub.add(i.pipe(h.b(100),c.h(o.fQ)).subscribe((()=>{if(p.has(this._activeView.get().type))for(;this._activeView.get().type!==this._defaultView.type;)this.popActiveView()}))),this._sub.add(this._activeView.subscribe((e=>{switch(e.type){case s.Type.settings:return void t.assistantSettingsShow();case s.Type.proofitRequest:return void t.proofitRequestFormShow();default:return}})))}activeViewHasAlerts(){switch(this._activeView.get().type){case s.Type.default:case s.Type.emogenie:case s.Type.readersAttention:return!0;default:return!1}}popActiveView(){const t=this._viewHistory.pop()||this._defaultView;t.type===s.Type.readersAttention?this._activeView.set({...t,caller:{type:s.ReadersAttention.Caller.Type.navigation}}):this._activeView.set(t)}get isHeaderNavigationEnabled(){return this._activeView.view((t=>t.type!==s.Type.feedback))}dispose(){this._sub.unsubscribe()}}},78634:(t,e,i)=>{i.r(e),i.d(e,{ReadersAttentionFeatureImpl:()=>nt,ReadersAttentionGnarTrackingImpl:()=>tt,ReadersAttentionHeatmap:()=>q,ReadersAttentionHeatmapImpl:()=>et,attentionCardDetails:()=>at,attentionCardTitle:()=>st,attentionScoreDescription:()=>it});var s,a=i(17771),n=i(71249),o=i(40327),r=i(32243),h=i(32426),c=i(27378),l=i(49435),p=i(5114),d=i(38983),g=i(14601),u=i(66310),m=i(76974),f=i(28043),y=i(85985),_=i(93508),w=i(95720),v=i(3819),b=i(7604),C=i(55649),k=i(26820),I=i(89456);!function(t){t.stitchAdjacent=function(t,e=1,i=.5,s=.5){const a=function(t,e=.5){const i=t.length>0?[{rects:[t[0]],top:t[0].rect.top,bottom:t[0].rect.top+t[0].rect.height}]:[];for(let s=1;s<t.length;++s){const a=i[i.length-1],n=t[s].rect;a.bottom-n.top>=e*Math.min(a.bottom-a.top,n.height)?(a.rects.push(t[s]),a.top=n.top<a.top?n.top:a.top,a.bottom=n.top+n.height>a.bottom?n.top+n.height:a.bottom):i.push({rects:[t[s]],top:n.top,bottom:n.top+n.height})}return i}(t,s);for(let t=0;t<a.length;++t){if(t>0){const e=a[t].top-a[t-1].bottom,s=a[t].bottom-a[t].top,n=a[t-1].bottom-a[t-1].top;e<Math.min(s,n)*i&&(a[t].top=a[t-1].bottom)}if(t<a.length-1){const e=a[t+1].top-a[t].bottom,s=a[t].bottom-a[t].top,n=a[t+1].bottom-a[t+1].top,o=.5*e;e<Math.min(s,n)*i&&(a[t].bottom=a[t].bottom+o)}for(let e=0;e<a[t].rects.length;++e)a[t].rects[e].rect={...a[t].rects[e].rect,top:a[t].top,height:a[t].bottom-a[t].top};for(let i=1;i<a[t].rects.length;++i){const s=a[t].rects[i-1].rect.left+a[t].rects[i-1].rect.width,n=a[t].rects[i].rect.left-s,o=.5*n;n>0&&n<Math.min(a[t].rects[i].rect.height,a[t].rects[i-1].rect.height)*e&&(a[t].rects[i-1].rect={...a[t].rects[i-1].rect,width:a[t].rects[i-1].rect.width+o},a[t].rects[i].rect={...a[t].rects[i].rect,left:s+o,width:a[t].rects[i].rect.left+a[t].rects[i].rect.width-s-o})}}return a.flatMap((t=>t.rects))},t.getMinDistanceBetween=function(t,e){if(I.UL.intersects(t,e))return 0;const i=t.left+t.width<e.left,s=t.top>e.top+e.height,a=t.left>e.left+e.width,n=t.top+t.height<e.top;return(i||a)&&(n||s)?1/0:i?e.left-(t.left+t.width):a?t.left-(e.left+e.width):n?e.top-(t.top+t.height):t.top-(e.top+e.height)},t.getBoundingBox=function(t){return t.slice(1).reduce(((t,e)=>{const i=Math.min(e.top,t.top),s=Math.min(e.left,t.left);return{top:i,left:s,width:Math.max(t.left+t.width,e.left+e.width)-s,height:Math.max(t.top+t.height,e.top+e.height)-i}}),t[0])}}(s||(s={}));var S=i(3533),A=i(16047);class T{constructor(t,e,i,s,a,n,o){this._geometryProvider=t,this._geometryLayout=e,this._textFieldRectInvalidated=i,this._formattingChanged=s,this._getTextMap=a,this._felog=o,this._highlightsCollection=new v.C(this._geometryProvider,this._geometryLayout,this._getTextMap,b.qH.everything,this._textFieldRectInvalidated,void 0,void 0,void 0,void 0,C.Y.create((0,k.w)("HeatmapHighlightsCollectionImpl")),this._felog.highlightGeometryUpdateTime),this._sub=new g.w,this.geometry=this._highlightsCollection.geometry.view(x),this._sub.add(n.subscribe((t=>this._onRangeChanges(t)))),this._sub.add(this._formattingChanged.subscribe((t=>{this._highlightsCollection.maintainConsistency([],(t=>t),!0)})))}_onRangeChanges(t){const e=this._felog.highlightUpdateTime.startMeasure();this._highlightsCollection.removeHighlights(t.removed.map(b.y$.Id.createFromMark)),"update"===t.kind&&(t.changed.forEach((t=>{this._highlightsCollection.updateHighlight(b.y$.Id.createFromMark(t.id),t.range,{intensity:t.intensity,range:t.range,isLocal:p.isSome(t.localInfo)})})),this._highlightsCollection.maintainConsistency(t.changed.map((t=>b.y$.Id.createFromMark(t.id))))),e.endMeasure()}dispose(){this._sub.unsubscribe(),this._highlightsCollection.dispose()}}function x(t){const e=function(t){const e=t.map((t=>({...t,boundingBox:s.getBoundingBox(t.rects)}))),i=[...e.slice(0,1).map((t=>({ranges:[t],boundingBox:t.boundingBox})))];for(const t of e.slice(1)){let e=!1;const a=1*S.C.mean(t.rects.map((t=>t.height)));for(let n=i.length-1;n>=0;--n){const o=i[n];if(s.getMinDistanceBetween(o.boundingBox,t.boundingBox)<=a&&o.ranges.some((e=>s.getMinDistanceBetween(e.boundingBox,t.boundingBox)<=a))){e=!0,o.boundingBox=s.getBoundingBox([o.boundingBox,t.boundingBox]),o.ranges.push(t);break}}e||i.push({ranges:[t],boundingBox:t.boundingBox})}return i.map((t=>t.ranges))}([...t.entries()].filter((t=>!!t[1])).map((([t,{rects:e,meta:{range:i,isLocal:s}}])=>({id:A.f.Range.Id.create(t),range:i,rects:e,isLocal:s}))).sort(((t,e)=>t.range.start-e.range.start))).map(((t,e)=>t.flatMap((({id:t,rects:i,isLocal:s})=>i.map((i=>({id:t,rect:i,groupIdx:e,isLocal:s}))))).map(((t,e)=>({...t,rectIdx:e}))))).flatMap((t=>s.stitchAdjacent(t))),i=e.reduce(((t,{id:e,rect:i,rectIdx:s,groupIdx:a,isLocal:n})=>{var o;return t.has(e)?null===(o=t.get(e))||void 0===o||o.rects.push({...i,rectIdx:s}):t.set(e,{id:e,rects:[{...i,rectIdx:s}],intensities:[],groupIdx:a,isLocal:n}),t}),new Map);for(const[e,s]of i.entries()){const i=t.get(b.y$.Id.createFromMark(e));s.intensities=i?M(i.meta.intensity,s.rects):[]}return i}function M(t,e){const[i,s]=t,a=(s-i)/e.reduce(((t,e)=>t+e.width),0),n=[];let o=i;for(const t of e){const e=t.width*a;n.push([o,o+e]),o+=e}return e.length>0&&(n[n.length-1][1]=s),n}class H{constructor(t,e,i,s,a,n,o,r){this._heatmapRangeManager=t,this._textChanges=e,this._geometryInvalidated=i,this._geometryProvider=s,this._geometryLayout=a,this._heatmapVisible=n,this._highlightsCollection=d.h.create(null),this._sub=new g.w,this.heatmapHighlights=this._highlightsCollection.pipe(u.w((t=>{var e;return null!==(e=null==t?void 0:t.geometry)&&void 0!==e?e:m.of(new Map)}))),this._sub.add(this._heatmapVisible.pipe(f.x()).subscribe((t=>{var e;null===(e=this._highlightsCollection.get())||void 0===e||e.dispose(),t&&this._highlightsCollection.set(new T(this._geometryProvider,this._geometryLayout,this._geometryInvalidated,this._textChanges.pipe(y.h((t=>w.x.isFormattingChange(t)||t.deltaChange.isEmpty))),o,this._heatmapRangeManager.heatmapChanges.pipe(_.O({kind:"update",removed:[],changed:this._heatmapRangeManager.heatmapRanges,textMap:o()})),r))})))}dispose(){var t;null===(t=this._highlightsCollection.get())||void 0===t||t.dispose(),this._sub.unsubscribe()}}var R=i(5739),V=i(42455),F=i(2844),O=i(78827);const E=({heatmap:t,size:e,style:i,className:s,felog:a,debug:n=!1})=>{const o=c.useRef(null);return(0,V.A)(F.aj(t,e,((t,{width:e,height:i})=>{const s=null==a?void 0:a.canvasRenderTime.startMeasure(),r=o.current,h=null==r?void 0:r.getContext("2d");if(r&&h){r.width=e,r.height=i,h.clearRect(0,0,e,i);for(const e of t.values())e.rects.forEach(((t,i)=>{L(h,e,t,e.intensities[i],n)}));null==s||s.endMeasure()}else null==s||s.cancelMeasure()}))),c.createElement("canvas",{ref:o,style:i,className:s,"data-grammarly-part":"heatmap"})};function L(t,e,i,s,a){const[n,o]=O.a.toColors(s);if(n!==o){const e=t.createLinearGradient(i.left,0,i.left+i.width,0);e.addColorStop(0,n),e.addColorStop(1,o),t.fillStyle=e}else t.fillStyle=n;if(t.fillRect(i.left,i.top,i.width,i.height),a){t.strokeStyle="black",t.lineWidth=1,t.strokeRect(i.left,i.top,i.width,i.height);const s=`${e.id}-${e.groupIdx}-${i.rectIdx}`,a=12;t.font=`normal normal bold ${a}px Arial`,t.fillStyle="white",t.fillRect(i.left+1,i.top+i.height-1-a,Math.min(i.width,t.measureText(s).width),Math.min(i.height,a)),t.fillStyle="red",t.fillText(s,i.left+1,i.top+i.height-1)}}var B=i(77176);const P=({heatmap:t,className:e,style:i,debug:s})=>c.createElement(R.F.div,{className:e,style:i},t.pipe((0,B.U)((t=>Array.from(t.values()).flatMap((t=>t.rects.map(((e,i)=>({...e,intensity:t.intensities[i],id:`${t.id}-${i}`,highlightId:t.id,groupIdx:t.groupIdx,isLocal:t.isLocal}))))).map((t=>c.createElement("div",{"data-name":"heatmap-range",...s?{"data-highlight-id":t.highlightId,"data-group-idx":t.groupIdx,"data-rect-idx":t.rectIdx}:{},key:t.id,style:{position:"absolute",width:t.width,height:t.height,left:t.left,top:t.top,background:U(t.intensity),...s?{border:"1px solid "+(t.isLocal?"red":"black")}:{}}})))))));function U(t){const[e,i]=O.a.toColors(t);return`linear-gradient(to right, ${e}, ${i})`}var D=i(29242);class ${constructor(t,e,i,s,a){this._useHeatmapCanvas=t,this._heatmapHighlights=e,this._visible=i,this._textFieldLayout=s,this._felog=a,this._debug=!1,this.view=c.createElement(R.F.Fragment,null,this._visible.view((t=>t?this._useHeatmapCanvas?c.createElement(E,{debug:this._debug,felog:this._felog,heatmap:this._heatmapHighlights,size:this._textFieldLayout.scrollSize.behavior,className:D.heatmap}):c.createElement(P,{debug:this._debug,heatmap:this._heatmapHighlights,className:D.heatmap}):null)))}}var W=i(84966);class N{constructor(){this._takeawaysFeedback=new Map,this._log=C.Y.create("TakeawayFeedbackStore")}registerFeedback(t,e){this._takeawaysFeedback.get(t)!==e&&(this._takeawaysFeedback.set(t,e),this._log.debug(`Feedback "${e}" stored for alert #${t}]`))}get addFeedbackToRawAlertTransformer(){return t=>{if(W.wQ.isTakeaway(t)){const e=this._takeawaysFeedback.get(t.id);return e?{...t,extra_properties:{...t.extra_properties,takeawayFeedback:e}}:t}return t}}}var Y,q,K=i(44730),G=i(92693),z=i(10389),j=i(48015),Q=i(15646),X=i(83078);function Z(t){switch(t){case G.a.ReadersAttention.Caller.Type.predictionWidget:return"predictionWidget";case G.a.ReadersAttention.Caller.Type.navigation:return"navigation";case G.a.ReadersAttention.Caller.Type.readersAttentionItem:return"readersAttentionItem";default:(0,j.vE)(t)}}function J(t,e){switch(t.type){case G.a.ReadersAttention.Caller.Type.predictionWidget:return e;case G.a.ReadersAttention.Caller.Type.navigation:return"";case G.a.ReadersAttention.Caller.Type.readersAttentionItem:return t.item.title;default:(0,j.vE)(t)}}!function(t){t.Mock=class{onOpen(){}onClose(){}onHelpScreenShow(){}onTakeawayUserAction(){}onKeyTakeawayCardShow(){}onChecklistItemExpand(){}}}(Y||(Y={}));class tt{constructor(t,e,i,s){this._gnar=t,this._statistics=e,this._getAttentionScore=i,this._getSessionUuid=s,this._statsOnOpen=p.none}_getBasicOpenMetrics(t,e){return{textScore:l.T.prism.reverseGet(this._getAttentionScore()),numWords:this._statistics.wordsCount.get(),alertCounts:this._statistics.alertCounts.get(),launchSource:Z(e.type),launchSourceLabel:J(e,t)}}onOpen(t,e,i,s){(0,o.pipe)(this._statsOnOpen,p.fold((()=>p.some({...this._getBasicOpenMetrics(e,s),numCards:i,checklist:t,time:performance.now(),numParagraphs:this._statistics.paragraphsCount.get(),numFormattingSpans:this._statistics.formattingSpansCount.get()})),(()=>p.none)),X.tap((t=>{const e=t.alertCounts.unmutedCapiAlerts,s=t.alertCounts.filter((t=>K.S.isCapiAlert(t)&&t.outcome===z.TC.clarity)).visibleNotInlineCapiAlerts,a=t.alertCounts.visibleInlineCapiAlerts,n=t.alertCounts.filter((t=>K.S.isCapiAlert(t)&&"priority"===t.assistantView)).unmutedCapiAlerts,r=t.checklist.filter((t=>t.checked)).length;this._gnar.attentionPanelShow(Array.from(t.checklist),t.launchSource,t.launchSourceLabel,e,s,a,r,i.takeaway,n,i.nonTakeaway,t.numWords,(0,o.pipe)(this._getSessionUuid(),p.getOrElse((()=>""))),t.textScore),this._statsOnOpen=p.some(t)})))}onClose(t,e){(0,o.pipe)(this._statsOnOpen,X.tap((i=>{const s=performance.now()-i.time,a=i.checklist.filter((t=>t.checked)).length,n=t.filter((t=>t.checked)).length;this._gnar.attentionPanelHide(Array.from(t),Array.from(i.checklist),this._statistics.wordsCount.get(),l.T.prism.reverseGet(this._getAttentionScore()),i.numWords,i.textScore,i.launchSource,i.launchSourceLabel,this._statistics.formattingSpansCount.get(),i.numFormattingSpans,n,a,e.takeaway,i.numCards.takeaway,this._statistics.paragraphsCount.get(),i.numParagraphs,e.nonTakeaway,i.numCards.nonTakeaway,s,(0,o.pipe)(this._getSessionUuid(),p.getOrElse((()=>"")))),this._statsOnOpen=p.none})))}onHelpScreenShow(){this._gnar.attentionHelpScreenShow((0,o.pipe)(this._getSessionUuid(),p.getOrElse((()=>""))))}onTakeawayUserAction(t,e,i,s){switch(i.type){case Q.lY.Type.takeawayCorrectlyDetected:return this._gnar.attentionKeyTakeawayFeedbackClick((0,o.pipe)(this._getSessionUuid(),p.getOrElse((()=>""))),s.end,s.start,e,"up");case Q.lY.Type.takeawayIncorrectlyDetected:return this._gnar.attentionKeyTakeawayFeedbackClick((0,o.pipe)(this._getSessionUuid(),p.getOrElse((()=>""))),s.end,s.start,e,"down");case Q.lY.Type.takeawayDismiss:return this._gnar.attentionKeyTakeawayIgnored(t,(0,o.pipe)(this._getSessionUuid(),p.getOrElse((()=>""))),s.end,s.start,e);case Q.lY.Type.takeawayResolve:return this._gnar.attentionKeyTakeawayAcknowledged(t,(0,o.pipe)(this._getSessionUuid(),p.getOrElse((()=>""))),s.end,s.start,e);default:(0,j.vE)(i)}}onKeyTakeawayCardShow(t,e){this._gnar.attentionKeyTakeawayCardShow((0,o.pipe)(this._getSessionUuid(),p.getOrElse((()=>""))),e.end,e.start,t)}onChecklistItemExpand(t){this._gnar.attentionChecklistItemExpand(t.checked,t.id,t.numAlerts,(0,o.pipe)(this._getSessionUuid(),p.getOrElse((()=>""))),t.title)}}!function(t){t.Mock=class{constructor(){this.visible=d.h.create(!1),this.view=c.createElement("div")}dispose(){}}}(q||(q={}));class et{constructor(t,e,i,s,a,n,o,r){this._heatmapRangeManager=t,this._useHeatmapCanvas=e,this._textObserver=i,this._geometryInvalidated=s,this._geometryProvider=a,this._geometryLayout=n,this._textFieldLayout=o,this._felog=r,this._heatmapVisible=d.h.create(!1),this._heatmapHighlightsWiring=new H(this._heatmapRangeManager,this._textObserver.contentChanges.async,this._geometryInvalidated,this._geometryProvider,this._geometryLayout,this._heatmapVisible,(()=>this._textObserver.getCurrentTextMap()),this._felog.attentionHeatmap),this._heatmapViewController=new $(this._useHeatmapCanvas,this._heatmapHighlightsWiring.heatmapHighlights,this._heatmapVisible,this._textFieldLayout,this._felog.attentionHeatmap),this.visible=this._heatmapVisible,this.view=this._heatmapViewController.view}dispose(){this._heatmapHighlightsWiring.dispose()}}const it="Highlighted text is more likely to be read",st="Capture your reader's attention",at="Grammarly predicts where readers may lose focus by comparing the complexity of a sentence to the information it contains. The prediction also considers the length and formatting of the email as a whole.";class nt{constructor(t,e,i){this._heatmapFactory=t,this._gnarTrackingFactory=e,this._isReadersAttentionItemSupported=i,this._state=d.h.create({panelInfo:p.none,feedItemInfo:p.none,attentionScore:p.none,feedItemDismissed:!1,featureHidden:!1}),this.tracking=this._gnarTrackingFactory((()=>(0,o.pipe)(this._state.get().attentionScore,p.getOrElse((()=>l.T.unsafeFromNumber(0)))))),this.takeawaysFeedbackStore=new N,this.heatmap=this._heatmapFactory(),this.feedItemInfo=this._state.view((t=>(0,o.pipe)(a.Y(p.option)({panelInfo:t.panelInfo,feedItemInfo:t.feedItemInfo}),p.filter((e=>!t.featureHidden&&!t.feedItemDismissed&&r.dp(e.panelInfo.checklist)>0&&this._isReadersAttentionItemSupported)),p.map((t=>t.feedItemInfo))))),this.panelInfo=this._state.view((t=>(0,o.pipe)(a.Y(p.option)({panelInfo:t.panelInfo,attentionScore:t.attentionScore}),p.filter((e=>r.dp(e.panelInfo.checklist)>0&&!t.featureHidden)),p.map((t=>({headerMessage:t.panelInfo.headerMessage,predictionMessage:t.panelInfo.predictionMessage,checklist:t.panelInfo.checklist,wordsCount:t.panelInfo.wordsCount,attentionScore:t.attentionScore,attentionScoreDescription:it}))))))}onDismissFeedItem(){this._state.modify((t=>({...t,feedItemDismissed:!0})))}onAttentionHeatmapMessage(t){const e={...t,title:st,description:it,details:p.some(at)};this._state.modify((t=>({...t,attentionScore:e.attentionScore,feedItemInfo:(0,o.pipe)(t.feedItemInfo,p.map((()=>({title:e.title,description:e.description,details:e.details}))),p.alt((()=>(0,o.pipe)(e.showAttentionCard,p.filter((t=>!0===t)),p.map((()=>({title:e.title,description:e.description,details:e.details})))))),p.chain((t=>(0,o.pipe)(e.attentionScore,p.map((e=>({...t,attentionScore:e})))))))})))}onAttentionInfoMessage(t){const e=t.checklist.map((t=>[t.id,t]));this._state.modify((i=>({...i,panelInfo:p.some({headerMessage:t.headerMessage,predictionMessage:t.predictionMessage,checklist:(0,o.pipe)(i.panelInfo,p.fold((()=>e),(t=>[...r.AO(t.checklist),...e])),r.sQ((0,h.getLastSemigroup)(),n.IX)),wordsCount:t.wordsCount}),featureHidden:t.hidden})))}dispose(){this.heatmap.dispose()}}},81591:(t,e,i)=>{i.d(e,{A:()=>a});var s=i(38983);class a{constructor(t,e){this._viewHistory=[],this._startupPlaceHolder=t,this._activeView=s.h.create(this._startupPlaceHolder),this._defaultView=e}get activeView(){return this._activeView.view()}get lastView(){return this._viewHistory[this._viewHistory.length-1]||this._defaultView}pushActiveView(t){const e=this._activeView.get();t.type!==e.type&&(e.type!==this._startupPlaceHolder.type&&this._viewHistory.push(e),this._activeView.set(t))}popActiveView(){const t=this._viewHistory.pop()||this._defaultView;this._activeView.set(t)}replaceActiveView(t){t.type!==this._activeView.get().type&&this._activeView.set(t)}}},29242:t=>{t.exports={heatmap:"Zhuz9",fadeIn:"_y9Xf"}}}]);
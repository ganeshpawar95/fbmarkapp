(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{zCGq:function(l,n,u){"use strict";u.r(n);var i=u("8Y7J");class o{}var t=u("pMnS"),a=u("MKJQ"),e=u("sZkV"),r=u("SVse"),c=u("GvfV"),s=u("pUuW");class b{constructor(l,n,u){this.navCtrl=l,this.helperService=n,this.campaignService=u,this.getCampaignList()}ngOnInit(){}back(){this.navCtrl.back()}logOut(){this.campaignService.logOut()}getCampaignDetail(l){this.navCtrl.navigateRoot("/adset/"+l)}getCampaignList(){this.campaignList=[],this.campaignService.getCampaignList().then(l=>{this.campaignList=l},l=>{console.log("error: ",l),this.helperService.errorMessage(l.message)})}}var p=i.nb({encapsulation:0,styles:[[""]],data:{}});function m(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,8,"ion-item",[["class","ion-margin"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.getCampaignDetail(l.context.$implicit.id)&&i),i}),a.L,a.n)),i.ob(1,49152,null,0,e.F,[i.h,i.k,i.x],null,null),(l()(),i.pb(2,0,null,0,2,"ion-label",[],null,null,null,a.M,a.o)),i.ob(3,49152,null,0,e.L,[i.h,i.k,i.x],null,null),(l()(),i.Ib(4,0,["",""])),(l()(),i.pb(5,0,null,0,3,"ion-note",[["slot","end"]],null,null,null,a.P,a.r)),i.ob(6,49152,null,0,e.T,[i.h,i.k,i.x],null,null),(l()(),i.pb(7,0,null,0,1,"ion-icon",[["name","arrow-forward-outline"]],null,null,null,a.J,a.l)),i.ob(8,49152,null,0,e.A,[i.h,i.k,i.x],{name:[0,"name"]},null)],(function(l,n){l(n,8,0,"arrow-forward-outline")}),(function(l,n){l(n,4,0,n.context.$implicit.name)}))}function g(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,16,"ion-content",[],null,null,null,a.G,a.i)),i.ob(1,49152,null,0,e.s,[i.h,i.k,i.x],null,null),(l()(),i.pb(2,0,null,0,6,"div",[["class","background upper"]],null,null,null,null,null)),(l()(),i.pb(3,0,null,null,5,"ion-item",[["color","transparent"],["lines","none"]],null,null,null,a.L,a.n)),i.ob(4,49152,null,0,e.F,[i.h,i.k,i.x],{color:[0,"color"],lines:[1,"lines"]},null),(l()(),i.pb(5,0,null,0,1,"ion-icon",[["name","refresh-outline"],["slot","start"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.getCampaignList()&&i),i}),a.J,a.l)),i.ob(6,49152,null,0,e.A,[i.h,i.k,i.x],{name:[0,"name"]},null),(l()(),i.pb(7,0,null,0,1,"ion-icon",[["name","log-out-outline"],["slot","end"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.logOut()&&i),i}),a.J,a.l)),i.ob(8,49152,null,0,e.A,[i.h,i.k,i.x],{name:[0,"name"]},null),(l()(),i.pb(9,0,null,0,2,"div",[["class","head"]],null,null,null,null,null)),(l()(),i.pb(10,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),i.Ib(-1,null,["Campaign"])),(l()(),i.pb(12,0,null,0,4,"div",[["class","lower"]],null,null,null,null,null)),(l()(),i.pb(13,0,null,null,3,"ion-list",[["class","ion-margin animated zoomIn"]],null,null,null,a.O,a.p)),i.ob(14,49152,null,0,e.M,[i.h,i.k,i.x],null,null),(l()(),i.eb(16777216,null,0,1,null,m)),i.ob(16,278528,null,0,r.i,[i.M,i.J,i.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,4,0,"transparent","none"),l(n,6,0,"refresh-outline"),l(n,8,0,"log-out-outline"),l(n,16,0,u.campaignList)}),null)}function h(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,1,"app-campaign",[],null,null,null,g,p)),i.ob(1,114688,null,0,b,[e.Db,c.a,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}var k=i.lb("app-campaign",b,h,{},{},[]),v=u("s7LF"),f=u("iInd");u.d(n,"CampaignPageModuleNgFactory",(function(){return d}));var d=i.mb(o,[],(function(l){return i.yb([i.zb(512,i.j,i.X,[[8,[t.a,k]],[3,i.j],i.v]),i.zb(4608,r.l,r.k,[i.s,[2,r.r]]),i.zb(4608,v.n,v.n,[]),i.zb(4608,e.a,e.a,[i.x,i.g]),i.zb(4608,e.Cb,e.Cb,[e.a,i.j,i.p]),i.zb(4608,e.Fb,e.Fb,[e.a,i.j,i.p]),i.zb(1073742336,r.b,r.b,[]),i.zb(1073742336,v.m,v.m,[]),i.zb(1073742336,v.c,v.c,[]),i.zb(1073742336,e.zb,e.zb,[]),i.zb(1073742336,f.o,f.o,[[2,f.t],[2,f.m]]),i.zb(1073742336,o,o,[]),i.zb(1024,f.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);
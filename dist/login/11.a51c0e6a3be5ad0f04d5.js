(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"99Un":function(t,e,n){"use strict";n.r(e),n.d(e,"HomeModule",(function(){return h}));var o=n("ofXK"),i=n("vvyD"),r=n("tyNb"),s=n("PQaN"),c=n("fXoL"),a=n("zbnG"),l=n("6Hz5"),p=n("0IaG"),u=n("Wp6s"),b=n("NFeN");function d(t,e){if(1&t&&(c.Rb(0,"h1"),c.sc(1),c.Qb()),2&t){const t=e.ngIf;c.Ab(1),c.uc(" Bienvenido, ",(null==t?null:t.name)||"User",".\n")}}function f(t,e){1&t&&(c.Rb(0,"div",2),c.Rb(1,"mat-card",6),c.Rb(2,"mat-icon"),c.sc(3,"people"),c.Qb(),c.Rb(4,"span",7),c.sc(5,"Usuarios"),c.Qb(),c.Qb(),c.Qb())}const g=[{path:"",component:(()=>{class t{constructor(t,e,n,o){this.authSvc=t,this.router=e,this.userSvc=n,this.dialog=o}ngOnInit(){console.log("authSvc.user$",this.authSvc.userValue),this.userSvc.getActUser().subscribe(t=>{console.log("users",t),this.userData=t,this.isEmpty=Object.values(this.userData).some(t=>""===t),console.log("isEmpty",this.isEmpty),this.isEmpty&&this.onOpenModal()}),this.router.navigate(["/login"])}goToPerfil(){this.router.navigate(["/perfil"])}goToUsers(){this.router.navigate(["/users"])}onOpenModal(){this.dialog.open(s.a,{height:"400px",width:"600px",hasBackdrop:!1,data:{title:"Perfil incompleto",description:"Para que podamos ofrecerte mas encuestas, por favor, completa tu perfil",irPerfil:"Ir a mi perfil",method:"goToPerfil",urlIrPerfil:"/perfil"}}).afterClosed().subscribe(t=>{console.log("Dialog result: "+t,typeof t),"goToPerfil"==t&&(console.log("ir a perfil"),this.router.navigate(["/perfil"]))})}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(a.a),c.Lb(r.b),c.Lb(l.a),c.Lb(p.b))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-home"]],decls:16,vars:4,consts:[[4,"ngIf"],[1,"grid-cols"],[1,"containerGrid"],[1,"disp-flex",3,"click"],[1,"txt-icon"],["class","containerGrid",4,"ngIf"],["routerLink","/admin/users",1,"disp-flex"],[1,"nav-link"]],template:function(t,e){1&t&&(c.qc(0,d,2,1,"h1",0),c.bc(1,"async"),c.Rb(2,"div",1),c.Rb(3,"div",2),c.Rb(4,"mat-card",3),c.Yb("click",(function(){return e.goToPerfil()})),c.Rb(5,"mat-icon"),c.sc(6,"person"),c.Qb(),c.Rb(7,"p",4),c.sc(8,"ir a mi perfil"),c.Qb(),c.Qb(),c.Qb(),c.qc(9,f,6,0,"div",5),c.Rb(10,"div",2),c.Rb(11,"mat-card",3),c.Yb("click",(function(){return e.goToPerfil()})),c.Rb(12,"mat-icon"),c.sc(13,"person"),c.Qb(),c.Rb(14,"p",4),c.sc(15,"ir a mi perfil"),c.Qb(),c.Qb(),c.Qb(),c.Qb()),2&t&&(c.fc("ngIf",c.cc(1,2,e.authSvc.user$)),c.Ab(9),c.fc("ngIf","admin"===e.userData.role))},directives:[o.k,u.a,b.a,r.c],pipes:[o.b],styles:[".txt-icon[_ngcontent-%COMP%]{padding-top:3px;padding-left:8px}.mat-icon[_ngcontent-%COMP%]{color:#2493d4}.flexbox-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-top:1rem}.flexbox-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .grid-cols[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto}.text-content[_ngcontent-%COMP%]{margin:1rem auto;width:80%}mat-card.mat-card.mat-focus-indicator.disp-flex[_ngcontent-%COMP%]{width:75%;margin-bottom:15px;display:flex}"]}),t})()}];let m=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},imports:[[r.e.forChild(g)],r.e]}),t})(),h=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},imports:[[o.c,m,i.a]]}),t})()}}]);
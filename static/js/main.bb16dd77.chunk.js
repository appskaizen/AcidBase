(this.webpackJsonpab=this.webpackJsonpab||[]).push([[0],{13:function(e,c,t){},15:function(e,c,t){"use strict";t.r(c);var s=t(1),l=t.n(s),n=t(4),i=t.n(n),a=(t(13),t(2)),o=t(5),r=t(6),b=t(8),u=t(7),d=t(0),j=function(e){Object(b.a)(t,e);var c=Object(u.a)(t);function t(){return Object(o.a)(this,t),c.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return Object(d.jsx)("p",{className:"col-auto",children:Object(d.jsx)("button",{className:"button is-link",onClick:function(){return e.props.handleSolve(e.props.children)},children:this.props.children})})}}]),t}(s.Component);var p=function(){var e,c,t,l,n,i,o,r,b,u,p,h,O,m,x=Object(s.useState)(""),v=Object(a.a)(x,2),y=v[0],g=v[1],C=Object(s.useState)(""),A=Object(a.a)(C,2),f=A[0],k=A[1],S=Object(s.useState)(""),M=Object(a.a)(S,2),N=M[0],R=M[1],T=Object(s.useState)(""),P=Object(a.a)(T,2),D=P[0],G=P[1],I=Object(s.useState)(""),E=Object(a.a)(I,2),B=E[0],H=E[1],V=Object(s.useState)(""),L=Object(a.a)(V,2),F=L[0],U=L[1],w=Object(s.useState)(""),K=Object(a.a)(w,2),q=K[0],J=K[1],Y=Object(s.useState)(""),z=Object(a.a)(Y,2),Q=z[0],W=z[1],X=Object(s.useState)(""),Z=Object(a.a)(X,2),$=Z[0],_=Z[1],ee=Object(s.useState)(""),ce=Object(a.a)(ee,2),te=ce[0],se=ce[1],le=Object(s.useState)(""),ne=Object(a.a)(le,2),ie=ne[0],ae=ne[1],oe=Object(s.useState)(""),re=Object(a.a)(oe,2),be=re[0],ue=re[1],de=Object(s.useState)(""),je=Object(a.a)(de,2),pe=je[0],he=je[1],Oe=Object(s.useState)(""),me=Object(a.a)(Oe,2),xe=me[0],ve=me[1],ye=Object(s.useState)(""),ge=Object(a.a)(ye,2),Ce=ge[0],Ae=ge[1],fe=Object(s.useState)(""),ke=Object(a.a)(fe,2),Se=ke[0],Me=ke[1],Ne=Object(s.useState)(""),Re=Object(a.a)(Ne,2),Te=Re[0],Pe=Re[1],De=7.3,Ge=7.5,Ie=35,Ee=45;function Be(){console.log("RESP"),l="Respiratory"+l,(f<De||f>Ge)&&(l="Acute"+l,i=28-(40-N)/10*o,D>(n=22-(40-N)/10*o)&&D<i?l="Simple Acute Respiratory "+b:D<n?l="Acute Respiratory "+b+" + Metabolic Acidosis.":D>i&&(l="Acute Respiratory "+b+" + Metabolic Alkalosis.")),f>=De&&f<=Ge&&(l="Chronic "+l,i=28-(40-N)/10*r,D>(n=22-(40-N)/10*r)&&D<i?l="Simple Chronic Respiratory "+b:D<n?l="Chronic Respiratory "+b+" + Metabolic Acidosis.":D>i&&(l="Chronic Respiratory "+b+" + Metabolic Alkalosis.")),He(l)}function He(e){console.log("DISPLAY"),e.includes("Metabolic Acidosis")&&(""!==B&&""!==F&&""!==q||He("Please Complete Input Values for Na, CL & Albumin"),(u=B-(F+D)+.25*(44-q))<=12?e+="\n(Normal Anion Gap Acidosis)":u>12&&(e+=(p=B-F-36)>6?"\n(High Anion Gap Metabolic Acidosis + Metabolic Alkalosis)":p<-6?"\n(High Anion Gap Metabolic Acidosis + Normal Anion Gap Acidosis)":"\n(High Anion Gap Metabolic Acidosis)")),g(e)}return Object(d.jsxs)("div",{class:"container",children:[Object(d.jsx)("br",{}),Object(d.jsx)("div",{class:"container has-text-centered",children:Object(d.jsx)("h1",{className:"title",children:"ACID BASE MEDICAL DIAGNOSIS"})}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"subtitle",children:"Please Check History and Exclude Normal ABG Samples"}),Object(d.jsx)("br",{})]}),Object(d.jsxs)("div",{class:"columns ",children:[Object(d.jsx)("div",{class:"column",children:Object(d.jsx)("div",{class:"control",children:Object(d.jsx)("input",{class:"input",type:"number",keyboardType:"numeric",placeholder:"pH Value",onChange:function(e){return k(Number(e.target.value))}})})}),Object(d.jsx)("div",{class:"column",children:Object(d.jsx)("div",{class:"control",children:Object(d.jsx)("input",{class:"input",type:"number",keyboardType:"numeric",placeholder:"PaCO2 Value (mm Hg)",onChange:function(e){return R(Number(e.target.value))}})})}),Object(d.jsx)("div",{class:"column",children:Object(d.jsx)("div",{class:"control",children:Object(d.jsx)("input",{class:"input",type:"number",keyboardType:"numeric",placeholder:"HCO3 Value (mmol/l)",onChange:function(e){return G(Number(e.target.value))}})})}),Object(d.jsx)("div",{class:"column",children:Object(d.jsx)("div",{class:"control",children:Object(d.jsx)("input",{class:"input",type:"number",keyboardType:"numeric",placeholder:"Ur.Chloride",onChange:function(e){return Me(Number(e.target.value))}})})})]}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{class:"field",children:Object(d.jsx)("h3",{className:"label",children:"Na, Cl, Albumin are required only for Metabolic Acidosis Diagnosis"})}),Object(d.jsxs)("div",{class:"columns",children:[Object(d.jsx)("div",{class:"column",children:Object(d.jsx)("div",{class:"control",children:Object(d.jsx)("input",{class:"input",type:"number",keyboardType:"numeric",placeholder:"Na Value (mmol/l)",onChange:function(e){return H(Number(e.target.value))}})})}),Object(d.jsx)("div",{class:"column",children:Object(d.jsx)("div",{class:"control",children:Object(d.jsx)("input",{class:"input",type:"number",keyboardType:"numeric",placeholder:"Cl Value (mmol/l)",onChange:function(e){return U(Number(e.target.value))}})})}),Object(d.jsx)("div",{class:"column",children:Object(d.jsx)("div",{class:"control",children:Object(d.jsx)("input",{class:"input",type:"number",keyboardType:"numeric",placeholder:"Albomin Value (g/l)",onChange:function(e){return J(Number(e.target.value))}})})})]}),Object(d.jsx)("div",{class:"field",children:Object(d.jsx)("div",{class:"control",children:Object(d.jsxs)("label",{class:"checkbox",children:[Object(d.jsx)("input",{type:"checkbox",onChange:function(e){return ve(e.target.checked)}}),"Chronic CO2 Retention"]})})}),Object(d.jsx)("div",{class:"field",children:Object(d.jsx)("div",{class:"control",children:Object(d.jsxs)("label",{class:"checkbox",children:[Object(d.jsx)("input",{type:"checkbox",onChange:function(e){return Ae(e.target.checked)}}),"Exacebration"]})})}),Object(d.jsxs)("div",{class:"field is-grouped",children:[Object(d.jsx)("div",{class:"control",children:Object(d.jsx)(j,{handleSolve:function(){""===f||""===N||""===D?He("Please Complete Input Values for PH, PaCO2 & HCO3"):(t=6.1+Math.log10(D/(.03*N))/Math.log10(10),t=Number(t.toFixed(2)),!0!==xe?(c=0,console.log(c)):(c=1,console.log(c)),!0!==Ce?(e=0,console.log(e)):(e=1,console.log(e)),function(){if(l="",Math.abs(t-f)>.1)g("Calculated PH = "+t+" Please Review Input Values");else{if(f>=7.35&&f<=7.45?N>=35&&N<=45&&D>=22&&D<=28&&(l="Normal, Check Anion Gap"):f<7.3&&1===c&&N<=57&&D<24&&0===e?He(l="Chronic Respiratory Acidosis + Metabolic Acidosis"):f<7.3&&1===c&&N>2*D-8&&D>=30&&1===e?He(l="Acute on Top of Chronic Respiratory Acidosis"):f<7.3&&1===c&&N>57&&D<24&&1===e&&He(l="Acute on Top of Chronic Respiratory Acidosis + Metabolic Acidosis"),""===l&&f<7.4)l=" Acidosis",N>=Ee?(o=1,r=4,b="Acidosis",Be()):N<Ee&&(l=" - Metabolic"+l,function(){console.log("METACID"),l=" - Metabolic"+l,(f<De||f>Ge)&&(N<=Ee&&N>=Ie?(l="Uncompensated "+l,b="Uncompensated "):(N>Ee||N<Ie)&&(l="Partially Compensated "+l,b="Partially Compensated "));f>=De&&f<=Ge&&(l="Compensated "+l,b="Compensated ");N>=.9*(1.5*D+4)&&N<=1.1*(1.5*D+12)?l=b+"Simple Metabolic Acidosis":N<.9*(1.5*D+4)?l=b+"Metabolic Acidosis + Respiratory Alkalosis":N>1.1*(1.5*D+12)&&(l=b+"Metabolic Acidosis + Respiratory Acidosis");He(l)}());else if(f>=7.4)if(console.log(">=7.4"),0===c)console.log(">=7.4 Alk"),l=" - Alkalosis",N<35?(o=2,r=5,b=" Alkalosis",Be()):function(){console.log("METALK"),l=" - Metabolic"+l,(f<De||f>Ge)&&(N<=Ee&&N>=Ie?(l="Uncompensated "+l,b="Uncompensated "):(N>Ee||N<Ie)&&(l="Partially Compensated "+l,b="Partially Compensated "));f>=De&&f<=Ge&&(l="Compensated "+l,b="Compensated ");N>=.9*(.7*D+15)&&N<=1.1*(.7*D+15)?l=b+"Simple Metabolic Alkalosis":N<.9*(.7*D+15)?l=b+"Metabolic Alkalosis + Respiratory Alkalosis":N>1.1*(.7*D+15)&&(l=b+"Metabolic Alkalosis + Respiratory Acidosis");He(l)}();else if(1===c){if(0===Se)return void He("Value of Ur. Chloride is Required");l="Chronic Respiratory Acidosis + Metabolic Alkalosis (",He(l+=N<=.92*(2*D-8)?Se<20?"Post-Hypercapnic)":"Mixed)":Se>=20?"Independent, Chloride Resistant and/or Diuresis)":"Independent, Chloride Responsive, Extra-Renal Loss of Chloride)")}console.log(l),""===l&&He(l)}}())},class:"button is-link",children:"Submit"})}),Object(d.jsx)("div",{class:"control",children:Object(d.jsx)("button",{class:"button is-link is-light",children:"Reset"})})]}),Object(d.jsxs)("div",{class:"field",children:[Object(d.jsx)("label",{class:"label",children:"Diagnosis"}),Object(d.jsx)("div",{class:"control",children:Object(d.jsx)("textarea",{class:"textarea",value:y,placeholder:"Diagnosis..."})})]}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{class:"field",children:Object(d.jsx)("h3",{className:"label",children:"Calculate SIG and BDE Gap?"})}),Object(d.jsxs)("div",{class:"columns",children:[Object(d.jsx)("div",{class:"column",children:Object(d.jsx)("div",{class:"control",children:Object(d.jsx)("input",{class:"input",type:"number",keyboardType:"numeric",placeholder:"K(mmol/l)",onChange:function(e){return W(Number(e.target.value))}})})}),Object(d.jsx)("div",{class:"column",children:Object(d.jsx)("div",{class:"control",children:Object(d.jsx)("input",{class:"input",type:"number",keyboardType:"numeric",placeholder:"Ca(mmol/l)",onChange:function(e){return _(Number(e.target.value))}})})}),Object(d.jsx)("div",{class:"column",children:Object(d.jsx)("div",{class:"control",children:Object(d.jsx)("input",{class:"input",type:"number",keyboardType:"numeric",placeholder:"Mg(mmol/l)",onChange:function(e){return se(Number(e.target.value))}})})}),Object(d.jsx)("div",{class:"column",children:Object(d.jsx)("div",{class:"control",children:Object(d.jsx)("input",{class:"input",type:"number",keyboardType:"numeric",placeholder:"Lactate(mmol/l)",onChange:function(e){return ae(Number(e.target.value))}})})}),Object(d.jsx)("div",{class:"column",children:Object(d.jsx)("div",{class:"control",children:Object(d.jsx)("input",{class:"input",type:"number",keyboardType:"numeric",placeholder:"PO4(mmol/l)",onChange:function(e){return ue(Number(e.target.value))}})})}),Object(d.jsx)("div",{class:"column",children:Object(d.jsx)("div",{class:"control",children:Object(d.jsx)("input",{class:"input",type:"number",keyboardType:"numeric",placeholder:"+ve STD Base Dificit",onChange:function(e){return he(Number(e.target.value))}})})})]}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{class:"field is-grouped",children:Object(d.jsx)("div",{class:"control",children:Object(d.jsx)(j,{handleSolve:function(){if(Pe("welcome"),""===Q||""===$||""===te||""===ie||""===be||""===pe||pe<=0||""===B||""===F||""===q||""===f)return console.log(q),void Pe("Please provide K, Ca, Mg, Lactate, PO4, Na, Cl, Albumin and (+ve) STD Base Dificit values");console.log("SIG"),O=-1*pe-(B-F-38)+.25*(42-q),m=(h=B+$+te+Q-(F+ie)-(D+q*(.123*f-.631)+be*(.309*f-.469)))>2?" (Abnormal Anion)":" (Normal Value)",Pe("SIG="+Number(h.toFixed(2))+m+"\nBDE Gap="+Number(O.toFixed(2))+"\n")},class:"button is-link",children:"Calculate SIG / EDB Gap"})})}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{class:"field",children:[Object(d.jsx)("label",{class:"label",children:"SIG / EDB Gap"}),Object(d.jsx)("div",{class:"control",children:Object(d.jsx)("textarea",{class:"textarea",value:Te,placeholder:"SIG / EDB Gap..."})})]}),Object(d.jsx)("br",{})]})},h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(c){var t=c.getCLS,s=c.getFID,l=c.getFCP,n=c.getLCP,i=c.getTTFB;t(e),s(e),l(e),n(e),i(e)}))};i.a.render(Object(d.jsx)(l.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.bb16dd77.chunk.js.map
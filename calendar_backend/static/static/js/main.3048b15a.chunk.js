(this.webpackJsonpcalendar_frontends=this.webpackJsonpcalendar_frontends||[]).push([[0],[,,,,,,,,,function(e,c,a){},function(e,c,a){},function(e,c,a){},function(e,c,a){},,function(e,c,a){},function(e,c,a){"use strict";a.r(c);var t=a(1),i=a.n(t),s=a(4),n=a.n(s),l=(a(9),a(10),a(3)),r=(a(11),a(12),a(0));var d=function(){return Object(r.jsxs)("div",{className:"showMeGrp",children:[Object(r.jsxs)("div",{className:"rowGrp",children:[Object(r.jsx)("div",{className:"textGrp",children:Object(r.jsx)("p",{className:"radioBtnText",children:"Show me:"})}),Object(r.jsxs)("div",{className:"rowRadios",children:[Object(r.jsxs)("div",{className:"radioGrp",children:[Object(r.jsx)("input",{type:"radio",name:"showMe",id:"busy",className:"radioBtnItem",value:"busy",defaultChecked:!0}),Object(r.jsx)("label",{htmlFor:"busy",className:"radioBtnLabel",children:"Busy"})]}),Object(r.jsxs)("div",{className:"radioGrp",children:[Object(r.jsx)("input",{type:"radio",name:"showMe",id:"available",className:"radioBtnItem",value:"available"}),Object(r.jsx)("label",{htmlFor:"available",className:"radioBtnLabel",children:"Available"})]})]})]}),Object(r.jsxs)("div",{className:"rowGrp",children:[Object(r.jsx)("div",{className:"textGrp",children:Object(r.jsx)("p",{className:"radioBtnText",children:"Visibility:"})}),Object(r.jsxs)("div",{className:"rowRadios",children:[Object(r.jsxs)("div",{className:"radioGrp",children:[Object(r.jsx)("input",{type:"radio",name:"visibility",id:"default",className:"radioBtnItem",value:"default",defaultChecked:!0}),Object(r.jsx)("label",{htmlFor:"default",className:"radioBtnLabel",children:"Default"})]}),Object(r.jsxs)("div",{className:"radioGrp",children:[Object(r.jsx)("input",{type:"radio",name:"visibility",id:"private",className:"radioBtnItem",value:"private"}),Object(r.jsx)("label",{htmlFor:"private",className:"radioBtnLabel",children:"Private"})]}),Object(r.jsxs)("div",{className:"radioGrp",children:[Object(r.jsx)("input",{type:"radio",name:"visibility",id:"public",className:"radioBtnItem",value:"public"}),Object(r.jsx)("label",{htmlFor:"public",className:"radioBtnLabel",children:"Public"})]})]})]})]})};var j=function(){var e=Object(t.useState)(!1),c=Object(l.a)(e,2),a=c[0],i=c[1],s=Object(t.useState)(!0),n=Object(l.a)(s,2),j=n[0],b=n[1];return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"navbar",children:[Object(r.jsxs)("div",{className:"month",children:[Object(r.jsx)("label",{children:Object(r.jsx)("i",{className:"fal fa-calendar-alt"})}),Object(r.jsxs)("select",{id:"month",children:[Object(r.jsx)("option",{value:"january",children:"January"}),Object(r.jsx)("option",{value:"February",children:"February"}),Object(r.jsx)("option",{value:"March",children:"March"}),Object(r.jsx)("option",{value:"April",children:"April"}),Object(r.jsx)("option",{value:"May",children:"May"}),Object(r.jsx)("option",{value:"June",children:"June"}),Object(r.jsx)("option",{value:"July",children:"July"}),Object(r.jsx)("option",{value:"August",children:"August"}),Object(r.jsx)("option",{value:"September",selected:!0,children:"September"}),Object(r.jsx)("option",{value:"October",children:"October"}),Object(r.jsx)("option",{value:"November",children:"November"}),Object(r.jsx)("option",{value:"December",children:"December"})]})]}),Object(r.jsx)("button",{className:"open-btn",onClick:function(){return i(!0)},children:"Add Event"}),a&&Object(r.jsx)("div",{className:"overlay"}),a&&Object(r.jsxs)("div",{className:"event-form",children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("h2",{children:"Add New Event"}),Object(r.jsx)("i",{class:"far fa-times-circle",onClick:function(){return i(!1)},"aria-hidden":"true"})]}),Object(r.jsxs)("div",{className:"btn__group",children:[Object(r.jsx)("button",{className:"btn ".concat(j&&"active"),onClick:function(){return b(!0)},children:"Event"}),Object(r.jsx)("button",{className:"btn btn__reminder ".concat(!j&&"active"),onClick:function(){return b(!1)},children:"Reminder"})]}),j?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"event page"}),Object(r.jsx)("h1",{children:"event detail go here"})]}),Object(r.jsx)(d,{})]}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"reminder page"}),Object(r.jsx)("h1",{children:"reminder details go here"})]})]})]})})},b=(a(14),[{day:"Wednesday",date:"01",timings:"All Day",description:"Company Break"},{day:"Thursday",date:"02",timings:"All Day",description:"HNGi8 Hangout"},{day:"Friday",date:"03",timings:"All Day",description:"Company Break"},{day:"Saturday",date:"04",timings:"12:00pm - 8:00",description:"Zuri Picnic"}]),o=function(){return Object(r.jsx)("div",{className:"container",children:b.map((function(e){return Object(r.jsx)("div",{className:"card",children:Object(r.jsx)("div",{className:"card-body",children:Object(r.jsxs)("div",{className:"d-flex flex-column",children:[Object(r.jsxs)("div",{className:"d-flex fw-bolder",children:[Object(r.jsx)("div",{className:"card-text",children:e.day}),Object(r.jsx)("div",{className:"card-text ms-3",children:e.date}),"\xa0\xa0\xa0\xa0\xa0",Object(r.jsx)("i",{class:"fas fa-sun"})]}),Object(r.jsx)("div",{className:"timings",children:e.timings}),Object(r.jsx)("div",{className:"description",children:e.description})]})})})}))})};var h=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(j,{}),Object(r.jsx)(o,{})]})};n.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.3048b15a.chunk.js.map
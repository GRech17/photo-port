(this["webpackJsonpphoto-port"]=this["webpackJsonpphoto-port"]||[]).push([[0],{11:function(e,t,i){},13:function(e,t,i){"use strict";i.r(t);var c=i(1),a=i.n(c),r=i(6),n=i.n(r),s=(i(11),i(2));function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}var l=i(0);var u=function(e){var t=e.categories,i=void 0===t?[]:t,c=e.setCurrentCategory,a=e.currentCategory,r=e.contactSelected,n=e.setContactSelected;return Object(l.jsxs)("header",{className:"flex-row px-1",children:[Object(l.jsx)("h2",{children:Object(l.jsxs)("a",{"data-testid":"link",href:"/",children:[Object(l.jsx)("span",{role:"img","aria-label":"camera",children:" \ud83d\udcf8"})," Oh Snap!"]})}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"flex-row",children:[Object(l.jsx)("li",{className:"mx-2",children:Object(l.jsx)("a",{"data-testid":"about",href:"#about",onClick:function(){return n(!1)},children:"About Me"})}),Object(l.jsx)("li",{className:"mx-2 ".concat(r&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){return n(!0)},children:"Contact"})}),i.map((function(e){return Object(l.jsx)("li",{className:"mx-1 ".concat(a.name===e.name&&!r&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){c(e),n(!1)},children:o(e.name)})},e.name)}))]})})]})};var m=function(){return Object(l.jsxs)("section",{className:"my-5",children:[Object(l.jsx)("h1",{id:"about",children:"Who am I?"}),Object(l.jsx)("img",{src:"./assets/cover/cover-image.jpg",className:"my-2",style:{width:"100%"},alt:"cover"}),Object(l.jsx)("div",{className:"my-2",children:Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst."})})]})},d=i(3);var j=function(e){var t=e.onClose,i=e.currentPhoto,c=i.name,a=i.category,r=i.description,n=i.index;return Object(l.jsx)("div",{className:"modalBackdrop",children:Object(l.jsxs)("div",{className:"modalContainer",children:[Object(l.jsx)("h3",{className:"modalTitle",children:c}),Object(l.jsx)("img",{src:"./assets/large/".concat(a,"/").concat(n,".jpg"),alt:"current category"}),Object(l.jsx)("p",{children:r}),Object(l.jsx)("button",{type:"button",onClick:t,children:"Close this modal"})]})})},p=function(e){var t=e.category,i=Object(c.useState)(!1),a=Object(s.a)(i,2),r=a[0],n=a[1],o=Object(c.useState)(),u=Object(s.a)(o,2),m=u[0],p=u[1],b=Object(c.useState)([{name:"Grocery aisle",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Grocery booth",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Building exterior",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Restaurant table",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Cafe interior",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Cat green eyes",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Green parrot",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Yellow macaw",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Pug smile",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Pancakes",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Burrito",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Scallop pasta",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Burger",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Fruit bowl",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Green river",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Docks",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Panoramic village by sea",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Domestic landscape",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Park bench",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"}]),g=Object(s.a)(b,1)[0].filter((function(e){return e.category===t})),h=function(e,t){p(Object(d.a)(Object(d.a)({},e),{},{index:t})),n(!r)};return Object(l.jsxs)("div",{children:[r&&Object(l.jsx)(j,{onClose:h,currentPhoto:m}),Object(l.jsx)("div",{className:"flex-row",children:g.map((function(e,i){return Object(l.jsx)("img",{src:"./assets/small/".concat(t,"/").concat(i,".jpg"),alt:e.name,className:"img-thumbnail mx-1",onClick:function(){return h(e,i)}},e.name)}))})]})};var b=function(e){var t=e.currentCategory;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{"data-testid":"h1tag",children:o(t.name)}),Object(l.jsx)("p",{children:t.description}),Object(l.jsx)(p,{category:t.name})]})},g=i(4);var h=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),i=t[0],a=t[1],r=i.name,n=i.email,o=i.message,u=Object(c.useState)(""),m=Object(s.a)(u,2),j=m[0],p=m[1];function b(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),p(t?"":"your email is invalid.")}else e.target.value.length?p(""):p("".concat(e.target.name," is required."));j||a(Object(d.a)(Object(d.a)({},i),{},Object(g.a)({},e.target.name,e.target.value)))}return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{"data-testid":"h1tag",children:"Contact Me"}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(i)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",defaultValue:r,onBlur:b})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(l.jsx)("input",{type:"email",name:"email",defaultValue:n,onBlur:b})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",rows:"5",defaultValue:o,onBlur:b})]}),j&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:j})}),Object(l.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})};var O=function(){var e=Object(c.useState)([{name:"commercial",description:"Photos of grocery stores, food trucks, and other commercial projects"},{name:"portraits",description:"Portraits of people in my life"},{name:"food",description:"Delicious delicacies"},{name:"landscape",description:"Fields, farmhouses, waterfalls, and the beauty of nature"}]),t=Object(s.a)(e,1)[0],i=Object(c.useState)(t[0]),a=Object(s.a)(i,2),r=a[0],n=a[1],o=Object(c.useState)(!1),d=Object(s.a)(o,2),j=d[0],p=d[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{categories:t,setCurrentCategory:n,currentCategory:r,setContactSelected:p}),Object(l.jsx)("main",{children:j?Object(l.jsx)(h,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{currentCategory:r}),Object(l.jsx)(m,{})]})})]})},x=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,14)).then((function(t){var i=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;i(e),c(e),a(e),r(e),n(e)}))};n.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),x()}},[[13,1,2]]]);
//# sourceMappingURL=main.583e5421.chunk.js.map
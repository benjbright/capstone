(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},20:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(7),l=a(4),o=(a(6),a(0)),i=a(8),u=a(9),m=a(2),s=r.a.createContext();function f(e){var t=e.children,a=Object(n.useState)([]),c=Object(m.a)(a,2),l=c[0],o=c[1],f=Object(n.useState)([]),v=Object(m.a)(f,2),E=v[0],d=v[1];return Object(n.useEffect)(function(){fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json").then(function(e){return e.json()}).then(function(e){o(e)})},[]),console.log(E),r.a.createElement(s.Provider,{value:{allPhotos:l,toggleFavourite:function(e){var t=l.map(function(t){return t.id===e?Object(u.a)({},t,{isFavorite:!t.isFavorite}):t});o(t)},addToCart:function(e){d(function(t){return[].concat(Object(i.a)(t),[e])})},cartItems:E,removeFromCart:function(e){console.log("Removed from the cart!");var t=E.filter(function(t){return t.id!==e.id});d(t)},emptyCart:function(){d([])}}},t)}var v=function(){var e=Object(n.useContext)(s).cartItems.length>0?"ri-shopping-cart-fill ri-fw ri-2x":"ri-shopping-cart-line ri-fw ri-2x";return r.a.createElement("header",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("h2",null,"Pic Some")),r.a.createElement("nav",null,r.a.createElement(l.b,{to:"/favourites"},r.a.createElement("h2",null,"Favourites")),r.a.createElement(l.b,{to:"/cart"},r.a.createElement("i",{className:e}))))};var E=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useRef)(null);function l(){r(!0)}function o(){r(!1)}return Object(n.useEffect)(function(){var e=c.current;return e.addEventListener("mouseenter",l),e.addEventListener("mouseleave",o),function(){e.removeEventListener("mouseenter",l),e.removeEventListener("mouseleave",o)}},[]),[a,c]};var d=function(e){var t=e.item,a=E(),c=Object(m.a)(a,2),l=c[0],o=c[1],i=Object(n.useContext)(s).removeFromCart,u=l?"ri-delete-bin-fill":"ri-delete-bin-line";return r.a.createElement("div",{className:"cart-item"},r.a.createElement("i",{className:u,onClick:function(){return i(t)},ref:o}),r.a.createElement("img",{src:t.url,width:"130px",alt:""}),r.a.createElement("p",null,"$5.99"))};var b=function(){var e=Object(n.useState)("Place Order"),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useContext)(s),o=l.cartItems,i=l.emptyCart,u=o.map(function(e){return r.a.createElement(d,{key:e.id,item:e})}),f=(5.99*o.length).toLocaleString("en-US",{style:"currency",currency:"USD"});return r.a.createElement("main",{className:"cart-page"},r.a.createElement("h1",null,"Check out"),u,r.a.createElement("p",{className:"total-cost"},"Total: ",f),o.length>0?r.a.createElement("div",{className:"order-button"},r.a.createElement("button",{onClick:function(){console.log("Clicked!"),c("Ordering..."),setTimeout(function(){console.log("Order placed!"),i(),c("Place Order")},3e3)}},a)):r.a.createElement("p",null,"You have no items in your cart."))};var g=function(e){var t=e.className,a=e.img,c=E(),l=Object(m.a)(c,2),o=l[0],i=l[1],u=Object(n.useContext)(s),f=u.toggleFavourite,v=u.addToCart,d=u.cartItems,b=u.removeFromCart;return r.a.createElement("div",{className:"".concat(t," image-container"),ref:i},r.a.createElement("img",{src:a.url,className:"image-grid",alt:""}),a.isFavorite?r.a.createElement("i",{className:"ri-heart-fill favorite",onClick:function(){return f(a.id)}}):o?r.a.createElement("i",{className:"ri-heart-line favorite",onClick:function(){return f(a.id)}}):void 0,d.find(function(e){return e.id===a.id})?r.a.createElement("i",{className:"ri-shopping-cart-fill cart",onClick:function(){return b(a)}}):o?r.a.createElement("i",{className:"ri-add-circle-line cart",onClick:function(){return v(a)}}):void 0)};var p=function(){var e=Object(n.useContext)(s).allPhotos.map(function(e,t){return r.a.createElement(g,{key:e.id,img:e,className:(a=t,a%5===0?"big":a%6===0?"wide":void 0)});var a});return r.a.createElement("main",{className:"photos"},e)},h=function(){var e=Object(n.useContext)(s).allPhotos;console.log(e);var t=e.filter(function(e){return e.isFavorite}).map(function(e){return r.a.createElement(g,{key:e.id,img:e})});return console.log(t),r.a.createElement("main",{className:"favourites-page"},r.a.createElement("h1",null,"Favourite Images"),0===t.length&&r.a.createElement("p",null,"Please select your favourite pictures!"),r.a.createElement("div",{className:"favourites-photos"},t))};var O=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",element:r.a.createElement(p,null)}),r.a.createElement(o.a,{path:"/favourites",element:r.a.createElement(h,null)}),r.a.createElement(o.a,{path:"/cart",element:r.a.createElement(b,null)})))};c.createRoot(document.getElementById("root")).render(n.createElement(f,null,n.createElement(l.a,null,n.createElement(O,null))))},6:function(e,t,a){}},[[10,2,1]]]);
//# sourceMappingURL=main.547ec6fb.chunk.js.map
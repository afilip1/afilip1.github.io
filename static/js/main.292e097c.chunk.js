(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{12:function(e,t,n){e.exports=n(18)},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(9),i=n.n(l),c=(n(17),n(20)),o=n(1),u=n(19);Array.prototype.equals=function(e){return this.length===e.length&&this.every((function(t,n){return t===e[n]}))},Array.prototype.shuffle=function(){for(var e=this.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),n=[this[t],this[e]];this[e]=n[0],this[t]=n[1]}return this},Array.prototype.zip=function(e){return this.map((function(t,n){return[t,e[n]]}))},Array.prototype.withIndex=function(){return Array.from(this.entries())},Array.prototype.countBy=function(e){return this.filter(e).length};var s,f=function(e,t){return Array.from({length:t-e},(function(t,n){return n+e}))},m=n(8);function g(e){var t=e.initSize,n=e.initMineCount,r=function(e){var t=Object(a.useState)(e),n=Object(o.a)(t,2),r=n[0],l=n[1],i=Object(a.useCallback)((function(e){var t,n=[(t=e)%r,Math.floor(t/r)],a=Object(o.a)(n,2),l=a[0],i=a[1];return[[l-1,i-1],[l,i-1],[l+1,i-1],[l-1,i],[l+1,i],[l-1,i+1],[l,i+1],[l+1,i+1]].filter((function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1];return n>=0&&n<r&&a>=0&&a<r})).map((function(e){var t=Object(o.a)(e,2),n=t[0];return t[1]*r+n}))}),[r]);return{gridSize:r,setGridSize:l,getNeighbors:i}}(t),l=r.gridSize,i=r.setGridSize,c=r.getNeighbors,u=Object(a.useState)(n),f=Object(o.a)(u,2),g=f[0],h=f[1],v=Object(a.useState)(null),d=Object(o.a)(v,2),p=d[0],b=d[1],C=Object(a.useState)([]),E=Object(o.a)(C,2),y=E[0],j=E[1],k=Object(a.useState)([]),O=Object(o.a)(k,2),S=O[0],z=O[1],w=Object(a.useState)(Array(l*l).fill(!1)),A=Object(o.a)(w,2),R=A[0],I=A[1],M=Object(a.useState)(Array(l*l).fill(!1)),N=Object(o.a)(M,2),L=N[0],x=N[1],B=Object(a.useCallback)((function(e){var t=Array(l*l-1).fill(!0,0,g).fill(!1,g).shuffle();t.splice(e,0,!1);var n=t.withIndex().map((function(e){var n=Object(o.a)(e,2),a=n[0];return n[1]?null:c(a).countBy((function(e){return t[e]}))}));j(t),z(n)}),[l,g,c]),G=Object(a.useCallback)((function(){var e=y.map((function(e){return!e})),t=y.equals(L);return R.equals(e)&&t?s.Won:R.zip(y).some((function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1];return n&&a}))?s.Lost:s.InProgress}),[y,L,R]),P=Object(a.useCallback)((function(e){if(G()===s.InProgress){if(0===y.length)return B(e),void b(e);var t=function(){for(var e=R.slice(),t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];for(n.forEach((function(t){return e[t]=!0}));n.length>0;){var r=n.shift();if(0===S[r]){var l=c(r).filter((function(t){return!e[t]}));l.forEach((function(t){return e[t]=!0})),n.push.apply(n,Object(m.a)(l))}}return e};L[e]||(y[e]?function(){var e=R.zip(y).map((function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1];return n||a}));I(e)}():R[e]?function(e){var n=c(e);if(n.filter((function(e){return L[e]})).length===S[e]){var a=n.filter((function(e){return!(R[e]||L[e])}));I(t.apply(void 0,Object(m.a)(a)))}}(e):function(e){var n=t(e),a=L.slice();a[e]=!1,I(n),x(a)}(e))}}),[y,R,L,S,G,c,B]);p&&(P(p),b(null));var T=function(e){var t=L.slice();t[e]=!t[e],x(t)};return{gridSize:l,mineCount:g,setMineCount:h,board:{mines:y,revealed:R,flagged:L,adjacent:S},resetBoard:function(e,t){i(e),h(t),j([]),z([]),I(Array(e*e).fill(!1)),x(Array(e*e).fill(!1))},handleCellClick:P,handleCellRightClick:function(e,t){e.preventDefault(),G()===s.InProgress&&T(t)},flagCell:T,getGameState:G}}function h(e){var t,n=e.gameState,a=e.minesLeft;switch(n){case s.InProgress:t="Flags left: "+a;break;case s.Won:t="You won!";break;case s.Lost:t="You lost :("}return r.a.createElement("h2",null,t)}function v(e){var t=Object(a.useState)(e.gridSize),n=Object(o.a)(t,2),l=n[0],i=n[1],c=Object(a.useState)(e.mineCount),u=Object(o.a)(c,2),s=u[0],f=u[1],m=Object(a.useState)(!1),g=Object(o.a)(m,2),v=g[0],d=g[1];return r.a.createElement("div",{className:"control-panel"},r.a.createElement("h1",null,"MINEKONG"),r.a.createElement(h,{gameState:e.gameState,minesLeft:e.minesLeft}),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onSettingsUpdate(l,s),d(!1)},autoComplete:"off"},r.a.createElement("label",null,"Grid size",r.a.createElement("input",{name:"gridSize",type:"text",value:l,onChange:function(e){i(+e.currentTarget.value),d(!0)}})),r.a.createElement("label",null,"Mine count",r.a.createElement("input",{name:"mineCount",type:"text",value:s,onChange:function(e){f(+e.currentTarget.value),d(!0)}})),r.a.createElement("button",{type:"submit"},v?"Apply and restart":"Restart")),r.a.createElement("div",{className:"rules"},r.a.createElement("div",null,r.a.createElement("h2",null,"Rules"),r.a.createElement("p",null,"A board contains a number of cells. Each cell can be either empty or a mine."),r.a.createElement("p",null,"The goal of the game is to flag all the mines and reveal all the empty cells."),r.a.createElement("p",null,"If you reveal a mine, it's game over!"),r.a.createElement("p",null,"Empty cells show a number of mines that reside in the 8 adjacent cells.")),r.a.createElement("div",null,r.a.createElement("h2",null,"Controls"),r.a.createElement("p",null,r.a.createElement("strong",null,"Left click")," on an unrevealed cell to reveal it."),r.a.createElement("p",null,r.a.createElement("strong",null,"Right click")," on an unrevealed cell to flag it as a mine."),r.a.createElement("p",null,r.a.createElement("strong",null,"Tip #1:")," If you've placed enough flags near a revealed cell, you can click on it to automatically reveal cells without flags."),r.a.createElement("p",null,r.a.createElement("strong",null,"Tip #2:")," The first cell you click will never be a mine, so don't worry about where to click."))))}!function(e){e[e.InProgress=0]="InProgress",e[e.Won=1]="Won",e[e.Lost=2]="Lost"}(s||(s={}));var d=n(10);function p(e){var t=e.isRevealed,n=e.onClick,a=e.onRightClick,l=e.children,i="cell";return t&&(i+=" cell-revealed"),r.a.createElement("button",{className:i,onClick:n,onContextMenu:a},l)}function b(e){var t=e.isFlagged,n=e.onClick,a=e.onRightClick;return r.a.createElement(p,{isRevealed:!1,onClick:n,onRightClick:a},t&&"\ud83d\udea9")}function C(e){var t=e.isMine,n=e.adjacentCount,a=e.onClick,l=[void 0,"blue","green","red","purple","maroon","turquoise","black","gray"];return r.a.createElement(p,{isRevealed:!0,onClick:a,onRightClick:function(e){return e.preventDefault()}},t&&"\ud83d\udca3",null!==n&&n>0&&r.a.createElement("span",{style:{color:l[n]}},n))}function E(e){var t=e.size,n=Object(d.a)(e,["size"]),a=f(0,t*t),l=f(0,t).map((function(e){return r.a.createElement("div",{className:"board-row",key:e},a.slice(e*t,(e+1)*t).map((function(e){return function(e,t){var n=e.board,a=n.mines,l=n.flagged,i=n.revealed,c=n.adjacent,o=e.onClick,u=e.onRightClick;return i[t]?r.a.createElement(C,{key:t,isMine:a[t],onClick:function(){return o(t)},adjacentCount:c[t]}):r.a.createElement(b,{key:t,isFlagged:l[t],onClick:function(){return o(t)},onRightClick:function(e){return u(e,t)}})}(n,e)})))}));return r.a.createElement("div",{className:"board"},l)}function y(){var e,t,n=Object(u.a)(["minekong"]),a=Object(o.a)(n,2),l=a[0],i=a[1],c=g({initSize:null!==(e=l.size)&&void 0!==e?e:9,initMineCount:null!==(t=l.mineCount)&&void 0!==t?t:10}),s=c.gridSize,f=c.mineCount,m=c.board,h=c.resetBoard,d=c.handleCellClick,p=c.handleCellRightClick,b=c.getGameState;return r.a.createElement("div",{className:"game",onContextMenu:function(e){return e.preventDefault()}},r.a.createElement(v,{gridSize:s,mineCount:f,gameState:b(),minesLeft:f-m.flagged.countBy(Boolean),onSettingsUpdate:function(e,t){i("size",e),i("mineCount",t),h(e,t)}}),r.a.createElement(E,{size:s,board:m,onClick:d,onRightClick:p}))}function j(){return r.a.createElement(c.a,null,r.a.createElement(y,null))}i.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.292e097c.chunk.js.map
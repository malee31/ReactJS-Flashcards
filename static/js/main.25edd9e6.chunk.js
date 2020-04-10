(this["webpackJsonpreactjs-flashcards"]=this["webpackJsonpreactjs-flashcards"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/HomeIcon.5d3b7993.svg"},24:function(e,t,a){e.exports=a(39)},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),c=a.n(i),s=(a(29),a(10)),d=a(17),l=a(18),o=a(4),u=a(22),m=a(23),h=a(7),f=a(6),p=a(19),v=a.n(p),E=(a(30),function(){return r.a.createElement("nav",null,r.a.createElement(h.b,{to:"/"},r.a.createElement("img",{src:v.a,alt:"Home"})))}),b=(a(36),function(){return r.a.createElement("main",null,r.a.createElement("header",null,"Home"),r.a.createElement(h.b,{to:"/create"},"Make Cards"),r.a.createElement(h.b,{to:"/cards"},"Use Cards"))}),g=(a(37),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Create your Flashcard Set"),r.a.createElement("form",{onSubmit:e.addWord},r.a.createElement("div",{id:"wordsets"},e.wordSets.map((function(t,a){return r.a.createElement("div",{className:"setContainer"},r.a.createElement("div",{className:"set",key:"wordsets["+a+"]",onClick:function(){return e.editHandler(a)}},r.a.createElement("input",{className:"word",type:"text",value:t.front,onChange:function(t){return e.editing(t,!0)}}),r.a.createElement("input",{className:"define",type:"text",value:t.back,onChange:function(t){return e.editing(t,!1)}})),r.a.createElement("div",{className:"deleteButton pseudoInput",onClick:function(){return e.del(a,!1)}},"Delete"))}))),r.a.createElement("div",{id:"newCard"},r.a.createElement("input",{className:"word",type:"text",placeholder:"New Word",value:e.pair.front,onChange:function(t){e.change("front",t)}}),r.a.createElement("input",{className:"define",type:"text",placeholder:"New Definition",value:e.pair.back,onChange:function(t){e.change("back",t)}})),r.a.createElement("div",{id:"controlButtons"},r.a.createElement("input",{type:"submit",value:"Add Card"}),r.a.createElement("div",{className:"pseudoInput",onClick:function(){return e.del(0,!0)}},"Delete All"))))}),w=(a(38),function(e){var t=e.card,a=e.flipped,n=e.onNext;return r.a.createElement("div",{id:"Flashcards"},r.a.createElement("header",null,"Flashcards"),r.a.createElement("div",{id:"card",className:a?"flipped":null,onClick:n},r.a.createElement("div",{id:"flipContainer"},r.a.createElement("div",{id:"front"},r.a.createElement("p",{id:"frontText"},t?t.front?t.front:"No Word":"Add some words")),r.a.createElement("div",{id:"back"},r.a.createElement("p",{id:"backText"},t?t.back?a?t.back:"":"No Definition":"Add some definitions")))))}),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={words:JSON.parse(localStorage.getItem("words"))||[],currentPair:{front:"",back:""},currentIndex:0,editing:0,flipped:!1},n.saveData=n.saveData.bind(Object(o.a)(n)),n.setCurrentPair=n.setCurrentPair.bind(Object(o.a)(n)),n.addCurrentPair=n.addCurrentPair.bind(Object(o.a)(n)),n.nextCard=n.nextCard.bind(Object(o.a)(n)),n.deleteIndex=n.deleteIndex.bind(Object(o.a)(n)),n.editIndex=n.editIndex.bind(Object(o.a)(n)),n.editCurrent=n.editCurrent.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"saveData",value:function(){localStorage.setItem("words",JSON.stringify(this.state.words))}},{key:"setCurrentPair",value:function(e,t){t.preventDefault();var a=Object.assign({},this.state.currentPair);a[e]=t.target.value,this.setState({currentPair:a})}},{key:"addCurrentPair",value:function(e){var t=this;if(e.preventDefault(),(""!==this.state.currentPair.front||""!==this.state.currentPair.back)&&!this.state.words.filter((function(e){return e.front===t.state.currentPair.front})).length){var a=Object(s.a)(this.state.words);a.push(this.state.currentPair),this.setState({words:a,currentPair:{front:"",back:""}},this.saveData)}}},{key:"nextCard",value:function(){this.state.flipped?this.setState({flipped:!1,currentIndex:(this.state.currentIndex+1)%this.state.words.length}):this.setState({flipped:!0})}},{key:"deleteIndex",value:function(e,t){var a=Object(s.a)(this.state.words);a.splice(e,t?a.length-e:1),this.setState({words:a},this.saveData)}},{key:"editIndex",value:function(e){this.state.editing!==e&&this.setState({editing:e})}},{key:"editCurrent",value:function(e,t){e.preventDefault();var a=Object(s.a)(this.state.words);a[this.state.editing][t?"front":"back"]=e.target.value,this.setState({words:a},this.saveData)}},{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(E,null),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:["/","/home"]},r.a.createElement(b,null)),r.a.createElement(f.a,{exact:!0,path:"/create"},r.a.createElement(g,{wordSets:this.state.words,addWord:this.addCurrentPair,pair:this.state.currentPair,change:this.setCurrentPair,editHandler:this.editIndex,editing:this.editCurrent,del:this.deleteIndex})),r.a.createElement(f.a,{exact:!0,path:"/cards"},r.a.createElement(w,{card:this.state.words[this.state.currentIndex],flipped:this.state.flipped,onNext:this.nextCard}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.25edd9e6.chunk.js.map
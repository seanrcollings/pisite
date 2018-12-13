(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){e.exports=t(20)},17:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(8),s=t.n(o),l=(t(17),t(11)),c=t(6),i=t(1),u=t(2),m=t(4),d=t(3),p=t(5),g=t(10),b=t.n(g),h=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).dropMargin=200,t.onStart=function(){if(t.props.answer)return!1;t.setState({beingDragged:!0})},t.onStop=function(e){e.preventDefault(),e.stopPropagation();var a=t.colorBox.current.getBoundingClientRect();t.setState({beingDragged:!1}),t.props.sidebar?t.props.onDrop(a.x,a.y,t.props.color):t.props.onDrop(a.x,a.y,t.props.color,t.props.name)},t.colorBox=n.a.createRef(),t.state={beingDragged:!1},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentWillReceiveProps",value:function(e){if(!e.sidebar){var a=this.colorBox.current.getBoundingClientRect(),t=a.x,r=a.y,n=Math.abs(e.activeDraggable.x-t)<this.dropMargin||Math.abs(t-e.activeDraggable.x)<this.dropMargin,o=Math.abs(e.activeDraggable.y-r)<this.dropMargin||Math.abs(r-e.activeDraggable.y)<this.dropMargin;n&&o&&e.activeDraggable.name!==e.name&&e.updateValue(e.name,e.activeDraggable.color)}}},{key:"render",value:function(){var e={backgroundColor:this.props.color,width:this.props.width,height:this.props.width,zIndex:this.state.beingDragged?100:0,position:"relative",borderRadius:"10px",marginBottom:this.props.sidebar?"10px":""};return n.a.createElement(b.a,{position:{x:0,y:0},onStart:this.onStart,onStop:this.onStop},n.a.createElement("div",{ref:this.colorBox,className:"colorbox",style:e}))}}]),a}(r.Component),w=function(e){function a(){var e,t;Object(i.a)(this,a);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(o)))).renderAnswer=function(){return n.a.createElement("div",{className:"results"},n.a.createElement("div",{className:"results__title"},"Answer:"),n.a.createElement("div",{className:"results__colorbox-wrapper"},n.a.createElement("div",{className:"results__colorbox-wrapper-colorbox"},n.a.createElement(h,{color:t.props.answer.answerValue1,width:"30px",activeDraggable:{x:-1e4,y:-1e3,color:null},answer:!0})),n.a.createElement("div",{className:"results__colorbox-wrapper-colorbox"},n.a.createElement(h,{color:t.props.answer.answerValue2,width:"30px",activeDraggable:{x:-1e4,y:-1e3,color:null},answer:!0})),n.a.createElement("div",{className:"results__colorbox-wrapper-colorbox"},n.a.createElement(h,{color:t.props.answer.answerValue3,width:"30px",activeDraggable:{x:-1e4,y:-1e3,color:null},answer:!0})),n.a.createElement("div",{className:"results__colorbox-wrapper-colorbox"},n.a.createElement(h,{color:t.props.answer.answerValue4,width:"30px",activeDraggable:{x:-1e4,y:-1e3,color:null},answer:!0}))))},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.show?"modal display-block":"modal display-none";return n.a.createElement("div",{className:e},n.a.createElement("div",{className:"modal__main"},n.a.createElement("h2",{className:"modal__main-title"},this.props.win?"YOU WON!":"YOU LOST!"),n.a.createElement("div",{className:"modal__main-results"},this.renderAnswer()),n.a.createElement("div",{className:"modal__main-buttons"},n.a.createElement("a",{href:"/"},n.a.createElement("button",{className:"modal__main-buttons-button"},"Main Page")),n.a.createElement("button",{className:"modal__main-buttons-button",onClick:this.props.resetGame},"Play Again?"))))}}]),a}(r.Component),v=function(e){function a(){var e,t;Object(i.a)(this,a);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(o)))).renderColorBoxes=function(){return Object.keys(t.props.selectedValues).map(function(e){return n.a.createElement("div",{className:"gameboard-colorbox-background"},n.a.createElement(h,{name:e,key:e,color:t.props.selectedValues[e],updateValue:t.props.updateValue,activeDraggable:t.props.activeDraggable,width:"150px",onDrop:t.props.onDrop}))})},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"gameboard-colorbox-wrapper"},this.renderColorBoxes())}}]),a}(r.Component),f=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).pegColor=function(){return"whitepeg"===t.props.peg?"white":"blackpeg"===t.props.peg?"black":"empty"},t.state={pegColor:t.pegColor()},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"pegrow__peg ".concat("pegrow__peg-"+this.state.pegColor)})}}]),a}(r.Component),E=function(e){function a(){var e,t;Object(i.a)(this,a);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(o)))).renderBlackPegs=function(){return t.modifiedResults().map(function(e){var a=[];return t.addPegs(a,e.blackPegs,"blackpeg"),t.addPegs(a,4-e.blackPegs,"empty"),a})},t.renderWhitePegs=function(){return t.modifiedResults().map(function(e){var a=[];return t.addPegs(a,e.whitePegs,"whitepeg"),t.addPegs(a,4-e.whitePegs,"empty"),a})},t.addPegs=function(e,a,t){for(var r=0;r<a;r++)e.push(n.a.createElement(f,{key:"".concat(r).concat(t),peg:t}))},t.modifiedResults=function(){return Object(c.a)(t.props.results).concat([{whitePegs:0,blackPegs:0}])},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"pegboard"},n.a.createElement("div",{className:"pegboard__white"},n.a.createElement("h4",{className:"pegboard__title"},"WHITE PEGS"),n.a.createElement("div",{className:"pegboard__white-pegs"},n.a.createElement("div",{className:"pegrow"},this.renderWhitePegs()))),n.a.createElement("div",{className:"pegboard__black"},n.a.createElement("h4",{className:"pegboard__title"},"BLACK PEGS"),n.a.createElement("div",{className:"pegboard__black-pegs"},n.a.createElement("div",{className:"pegrow"},this.renderBlackPegs()))))}}]),a}(r.Component),_=function(e){function a(){var e,t;Object(i.a)(this,a);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(o)))).createBoxes=function(){return[{name:"blue",color:"blue"},{name:"red",color:"red"},{name:"green",color:"green"},{name:"orange",color:"orange"},{name:"pink",color:"pink"},{name:"purple",color:"purple"},{name:"yellow",color:"yellow"}].map(function(e){return n.a.createElement(h,{key:e.name,name:e.name,id:e.name,color:e.color,width:"100px",onDrop:t.props.onDrop,sidebar:!0})})},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"colorbox-wrapper"},this.createBoxes())}}]),a}(r.Component),O=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"header__title"},"MASTER MIND"),n.a.createElement("a",{href:"/",className:"header__subtitle"},"< BACK TO MAIN PAGE"),n.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Mastermind_(board_game)#Gameplay_and_rules",className:"header__subtitle"},"MASTER MIND'S RULES"))}}]),a}(r.Component),j=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).defaultGameBoard={selectedValue1:"white",selectedValue2:"white",selectedValue3:"white",selectedValue4:"white"},t.defaultDraggable={x:-1e5,y:-1e5,color:null},t.nextTurn=function(){t.setState({gameBoards:Object(c.a)(t.state.gameBoards).concat([t.defaultGameBoard]),turn:t.state.turn+1},function(){4===t.state.results[t.state.results.length-1].blackPegs?t.setState({showEndScreen:!0,win:!0}):12===t.state.turn&&t.setState({showEndScreen:!0,win:!1})})},t.resetGame=function(){t.setState({answer:t.genAnswer(),gameBoards:[t.defaultGameBoard],results:[],turn:0,showEndScreen:!1,win:null})},t.updateValue=function(e,a){var r=Object(l.a)({},t.state.gameBoards[t.state.gameBoards.length-1]);r[e]=a,t.state.activeDraggable.name&&t.state.activeDraggable.name!==e&&(r[t.state.activeDraggable.name]="white");var n=Object(c.a)(t.state.gameBoards);n[n.length-1]=r,t.setState({gameBoards:n,activeDraggable:t.defaultDraggable})},t.genAnswer=function(){var e=["red","green","orange","purple","blue","yellow"],a={answerValue1:null,answerValue2:null,answerValue3:null,answerValue4:null};for(var t in a)a[t]=e[Math.floor(6*Math.random())];return console.log(a),a},t.checkAnswer=function(){for(var e=Object.values(t.state.answer),a=Object.values(t.state.gameBoards[t.state.gameBoards.length-1]),r=[null,null,null,null],n=0,o=0,s=0;s<a.length;s++)e[s]===a[s]&&(r[s]="black",n++);for(var l=0;l<a.length;l++)for(var i=0;i<4;i++)if(e[i]===a[l]&&null===r[i]){o++,r[i]="white";break}t.setState({results:Object(c.a)(t.state.results).concat([{blackPegs:n,whitePegs:o}])},function(){t.nextTurn()})},t.onDrop=function(e,a,r,n){t.setState({activeDraggable:{x:e,y:a,color:r,name:n}})},t.renderGameBoards=function(){return t.state.gameBoards.map(function(e,a){return n.a.createElement(v,{key:a,selectedValues:e,active:a===t.state.gameBoards.length-1,updateValue:t.updateValue,activeDraggable:t.state.activeDraggable,onDrop:t.onDrop})})},t.state={answer:t.genAnswer(),gameBoards:[t.defaultGameBoard],results:[],activeDraggable:t.defaultDraggable,turn:0,showEndScreen:!1,win:null},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game__header"},n.a.createElement(O,null)),n.a.createElement("div",{className:"game__sidebar"},n.a.createElement(_,{onDrop:this.onDrop})),n.a.createElement("div",{className:"game__colorboard"},this.renderGameBoards(),n.a.createElement("button",{className:"game__submit",onClick:this.checkAnswer},"Submit"),n.a.createElement("div",{className:"clip-path-mastermind"}),n.a.createElement("div",{className:"clip-path-mastermind-border"})),n.a.createElement("div",{className:"game__pegboard"},n.a.createElement(E,{results:this.state.results})),n.a.createElement(w,{show:this.state.showEndScreen,win:this.state.win,resetGame:this.resetGame,answer:this.state.answer}))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.c69bebf5.chunk.js.map
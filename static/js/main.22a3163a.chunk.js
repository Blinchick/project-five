(this["webpackJsonpproject-five"]=this["webpackJsonpproject-five"]||[]).push([[0],{30:function(e,t,a){e.exports=a(44)},35:function(e,t,a){},36:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(26),o=a.n(r),i=(a(35),a(7)),c=a(8),s=a(10),u=a(9),h=a(11),m=a(5);a(36);function p(){return l.a.createElement("header",null,l.a.createElement("h2",null,"Here is all the links"),l.a.createElement(h.b,{to:""},"Home "),"|",l.a.createElement(h.b,{to:"/allposts"}," Your Postsripts"),"|",l.a.createElement(h.b,{to:"/addbook"}," Add New Book "))}var b=a(29),d=a(13),v=a(19),f=a.n(v);a(41);f.a.initializeApp({apiKey:"AIzaSyBoHnPLHUzd39jlc55yCrI4m1CdRFJCYBU",authDomain:"epilogue-20ebe.firebaseapp.com",databaseURL:"https://epilogue-20ebe.firebaseio.com",projectId:"epilogue-20ebe",storageBucket:"epilogue-20ebe.appspot.com",messagingSenderId:"496723987798",appId:"1:496723987798:web:6b02e225c79ae1cf475af7"});var E=f.a,g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={title:"",writer:"",publisher:"",genre:""},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(e)),e}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log(e),E.database().ref().push({title:this.state.title,writer:this.state.writer,publisher:this.state.publisher,genre:this.state.genre}),this.setState({title:"",writer:"",publisher:"",genre:""})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Here you can create PostScript"),l.a.createElement("form",{action:"",onSubmit:this.handleSubmit},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{id:"title",type:"text",name:"title",onChange:this.handleChange,value:this.state.title,required:!0}),l.a.createElement("label",{htmlFor:"writer"},"Writer"),l.a.createElement("input",{type:"text",name:"writer",onChange:this.handleChange,value:this.state.writer,required:!0}),l.a.createElement("label",{htmlFor:"publisher"},"Publisher"),l.a.createElement("input",{type:"text",name:"publisher",onChange:this.handleChange,value:this.state.publisher}),l.a.createElement("label",{htmlFor:"genre"},"Genre"),l.a.createElement("input",{type:"text",name:"genre",onChange:this.handleChange,value:this.state.genre}),l.a.createElement("input",{type:"Submit"})))}}]),a}(n.Component);var y=function(e){return console.log(e.postId),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(t){t.preventDefault(),E.database().ref(e.postId).remove()}},"DELETE"))},k=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={allPosts:[]},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.database().ref().on("value",(function(t){var a=Object.values(t.val()),n=[];for(var l in a)n.push({i:l,title:a[l].title,writer:a[l].writer,publisher:a[l].publisher,genre:a[l].genre}),e.setState({allPosts:n})}))}},{key:"componentWillUnmount",value:function(){E.database().ref().off()}},{key:"handleDelete",value:function(e){console.log("delete me")}},{key:"handleEdit",value:function(){console.log("edit me")}},{key:"render",value:function(){return console.log(this.state.allPosts),l.a.createElement("div",null,this.state.allPosts.map((function(e){return l.a.createElement("div",null,l.a.createElement("p",null,e.title," by ",e.writer),l.a.createElement(y,{postId:e}))})))}}]),a}(n.Component),w=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container"},l.a.createElement(p,null),l.a.createElement("main",null,l.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return l.a.createElement("section",null,l.a.createElement("h1",null,"Hello hello hello"),l.a.createElement("p",null,"If you like to read, you probably have many things to say about books. Either you have strong opinion about character, story or just want to save your favourite quote - epilogue is here for you! "),l.a.createElement("p",null,"It's online book diary created for book lovers."),l.a.createElement("p",null,'"A reader lives a thousand lives before he dies. The man who never reads lives only one."'))}}),l.a.createElement(m.a,{path:"/addBook",component:g}),l.a.createElement(m.a,{path:"/allposts",component:k})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.22a3163a.chunk.js.map
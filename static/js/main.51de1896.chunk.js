(this["webpackJsonpproject-five"]=this["webpackJsonpproject-five"]||[]).push([[0],{30:function(e,t,a){e.exports=a(45)},35:function(e,t,a){},36:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/header1.08f1750b.jpg"},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),o=a.n(l),i=(a(35),a(7)),c=a(8),s=a(10),u=a(9),m=a(11),p=a(5);a(36);function h(){return r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"links"},r.a.createElement("h1",null,"Epilogue"),r.a.createElement("h2",null,"Book Diary"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/allposts"},"My Postsripts")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/addpost"},"Add Postscript")))),r.a.createElement("img",{src:a(41),alt:"Girl in pink hoodie reading a red book"})))}var d=a(29),b=a(13),E=a(19),f=a.n(E);a(42);f.a.initializeApp({apiKey:"AIzaSyBoHnPLHUzd39jlc55yCrI4m1CdRFJCYBU",authDomain:"epilogue-20ebe.firebaseapp.com",databaseURL:"https://epilogue-20ebe.firebaseio.com",projectId:"epilogue-20ebe",storageBucket:"epilogue-20ebe.appspot.com",messagingSenderId:"496723987798",appId:"1:496723987798:web:6b02e225c79ae1cf475af7"});var v=f.a,g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={title:"",writer:"",postscript:""},e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(e)),e}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log(e),v.database().ref().push({title:this.state.title,writer:this.state.writer,postscript:this.state.postscript}),this.setState({title:"",writer:"",postscript:""})}},{key:"render",value:function(){return r.a.createElement("section",{className:"wrapper addPost"},r.a.createElement("h2",null,"Leave your PostScript"),r.a.createElement("form",{action:"",onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{id:"title",type:"text",name:"title",onChange:this.handleChange,value:this.state.title,required:!0}),r.a.createElement("label",{htmlFor:"writer"},"Writer"),r.a.createElement("input",{type:"text",name:"writer",onChange:this.handleChange,value:this.state.writer,required:!0}),r.a.createElement("label",{htmlFor:"postscript"},"Your Postscript"),r.a.createElement("textarea",{name:"postscript",cols:"50",rows:"20",onChange:this.handleChange,value:this.state.postscript,required:!0}),r.a.createElement("button",{type:"submit"},"Submit")))}}]),a}(n.Component);var y=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(t){t.preventDefault(),v.database().ref(e.post.postId).remove()}},"X"))},w=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={allPosts:[]},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.database().ref().on("value",(function(t){var a=t.val(),n=[];for(var r in a)n.push({postId:r,title:a[r].title,writer:a[r].writer,postscript:a[r].postscript}),e.setState({allPosts:n})}))}},{key:"componentWillUnmount",value:function(){v.database().ref().off()}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.allPosts.map((function(e){return r.a.createElement("div",{className:"post"},r.a.createElement("p",null,r.a.createElement("strong",null,e.title)," by ",r.a.createElement("strong",null,e.writer)),r.a.createElement("p",null,e.postscript),r.a.createElement(y,{post:e}))})))}}]),a}(n.Component),j=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(h,null),r.a.createElement("main",null,r.a.createElement(p.a,{exact:!0,path:"/home",render:function(e){return r.a.createElement("section",{className:"home wrapper"},r.a.createElement("h2",null,"Hello there"),r.a.createElement("p",null,"If you like to read, you probably have many things to say about books. Either you have strong opinion about character, story or just want to save your favourite quote - epilogue is here for you! "),r.a.createElement("p",null,"It's online book diary created for book lovers."))}}),r.a.createElement(p.a,{path:"/addpost",component:g}),r.a.createElement("section",{className:"wrapper allPosts"},r.a.createElement(p.a,{path:"/allposts",component:w}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.51de1896.chunk.js.map
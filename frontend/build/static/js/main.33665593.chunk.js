(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{170:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(34),c=a.n(s),o=(a(87),a(20)),l=a(6),i=(a(88),a(89),a(21)),u=a(22),m=a(24),p=a(23),d=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement(o.b,{className:"navbar-brand",to:"/"},r.a.createElement("h1",null,"Notes")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(o.b,{className:"nav-link",to:"/"},"Notes")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/create"},"Create Note")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/user"},"Create User"))),r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search")))))}}]),a}(n.Component),h=a(8),f=a.n(h),v=a(16),b=a(12),g=a.n(b),E=a(81),N=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={notes:[]},e.getNotes=Object(v.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://cattaneo-mern-notes.herokuapp.com/api/notes");case 2:a=t.sent,e.setState({notes:a.data});case 4:case"end":return t.stop()}}),t)}))),e.deleteNote=function(){var t=Object(v.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.delete("https://cattaneo-mern-notes.herokuapp.com/api/notes/"+a);case 2:e.getNotes();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getNotes()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},this.state.notes.map((function(t){return r.a.createElement("div",{className:"col-md-4 p-2",key:t._id},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header d-flex justify-content-between"},r.a.createElement("h5",null,t.title),r.a.createElement(o.b,{className:"btn btn-secondary",to:"/edit/"+t._id},"Edit")),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,t.content),r.a.createElement("p",null,t.author),r.a.createElement("p",null,Object(E.a)(t.date))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.deleteNote(t._id)}},"Delete"))))})))}}]),a}(n.Component),y=a(77),k=a(37),w=a(78),S=a.n(w),j=(a(112),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={users:[],userSelected:"",title:"",content:"",date:new Date,editing:!1,_id:""},e.onSubmit=function(){var t=Object(v.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n={title:e.state.title,content:e.state.content,author:e.state.userSelected,date:e.state.date},!e.state.editing){t.next=7;break}return t.next=5,g.a.put("https://cattaneo-mern-notes.herokuapp.com/api/notes/"+e.state._id,n);case 5:t.next=9;break;case 7:return t.next=9,g.a.post("https://cattaneo-mern-notes.herokuapp.com/api/notes",n);case 9:console.log(e.state),window.location.href="/";case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onInputChange=function(t){e.setState(Object(y.a)({},t.target.name,t.target.value))},e.onChangeDate=function(t){console.log(e.state.date),console.log(t),e.state.date===t?console.log("son iguales"):(console.log("diferentes!!"),e.setState({date:new Date(t)})),setTimeout(function(){console.log(this.state)}.bind(Object(k.a)(e)),3e3)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://cattaneo-mern-notes.herokuapp.com/api/users");case 2:if(t=e.sent,this.setState({users:t.data.map((function(e){return e.username})),userSelected:t.data[0].username}),!this.props.match.params.id){e.next=9;break}return e.next=7,g.a.get("https://cattaneo-mern-notes.herokuapp.com/api/notes/"+this.props.match.params.id);case 7:a=e.sent,this.setState({title:a.data.title,content:a.data.content,userSelected:a.data.author,date:new Date(a.data.date),editing:!0,_id:this.props.match.params.id});case 9:console.log(this.state);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("h4",null,"Create a note"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{className:"form-control",name:"userSelected",onChange:this.onInputChange,value:this.state.userSelected},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Title",name:"title",onChange:this.onInputChange,value:this.state.title,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{required:!0,className:"form-control",placeholder:"Content",name:"content",onChange:this.onInputChange,value:this.state.content})),r.a.createElement("div",{className:"form-group"},r.a.createElement(S.a,{className:"form-control",name:"date",selected:this.state.date,onChange:this.onChangeDate})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save"))))}}]),a}(n.Component)),x=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={users:[],username:""},e.getUsers=Object(v.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://cattaneo-mern-notes.herokuapp.com/api/users");case 2:a=t.sent,e.setState({users:a.data});case 4:case"end":return t.stop()}}),t)}))),e.onChangeUserName=function(t){e.setState({username:t.target.value})},e.onSubmit=function(){var t=Object(v.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,g.a.post("https://cattaneo-mern-notes.herokuapp.com/api/users",{username:e.state.username});case 3:e.setState({username:""}),e.getUsers();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.deleteUser=function(){var t=Object(v.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.delete("https://cattaneo-mern-notes.herokuapp.com/api/users/"+a);case 2:e.getUsers();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getUsers(),console.log(this.state.users);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("h3",null,"Create new user"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"text",onChange:this.onChangeUserName,value:this.state.username})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save")))),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("ul",{className:"list-group"},this.state.users.map((function(t){return r.a.createElement("li",{className:"list-group-item list-group-item-action",key:t._id,onDoubleClick:function(){return e.deleteUser(t._id)}},t.username)})))))}}]),a}(n.Component);var C=function(){return r.a.createElement(o.a,null,r.a.createElement(d,null),r.a.createElement("div",{className:"container p-4"},r.a.createElement(l.a,{path:"/",exact:!0,component:N}),r.a.createElement(l.a,{path:"/edit/:id",component:j}),r.a.createElement(l.a,{path:"/create",component:j}),r.a.createElement(l.a,{path:"/user",component:x})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))},82:function(e,t,a){e.exports=a(170)},87:function(e,t,a){},89:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.33665593.chunk.js.map
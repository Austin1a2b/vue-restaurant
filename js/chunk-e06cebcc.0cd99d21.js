(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e06cebcc"],{6135:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container py-5"},[s("AdminNav"),s("table",{staticClass:"table"},[t._m(0),s("tbody",t._l(t.users,(function(e){return s("tr",{key:e.id},[s("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),s("td",[t._v(t._s(e.email))]),s("td",[t._v(t._s(t._f("showRole")(e.isAdmin)))]),s("td",[t.currentUser.id===e.id&&e.isAdmin?t._e():s("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),s.stopPropagation(),t.toggleUserRole(e.id)}}},[t._v(" "+t._s(t._f("showAction")(e.isAdmin))+" ")])])])})),0)])],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",{staticClass:"thead-dark"},[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("#")]),s("th",{attrs:{scope:"col"}},[t._v("Email")]),s("th",{attrs:{scope:"col"}},[t._v("Role")]),s("th",{attrs:{scope:"col",width:"140"}},[t._v("Action")])])])}],a=s("5530"),i=(s("d81d"),s("e04c")),o={users:[{id:1,name:"root",email:"root@example.com",password:"$2a$10$5ZuIWPJga1gF67fHHgww/uT1BJLXeHhvndOVI554btHhy.e4iRkWC",isAdmin:!0,image:null,createdAt:"2022-04-21T06:55:38.000Z",updatedAt:"2022-04-21T06:55:38.000Z"},{id:2,name:"user1",email:"user1@example.com",password:"$2a$10$3Kgdc5ZwrYVooBuy.53ePeTBzUCAocqO.TK1OwUoQ.neIiBfZj4.y",isAdmin:!1,image:null,createdAt:"2022-04-21T06:55:38.000Z",updatedAt:"2022-04-21T06:55:38.000Z"},{id:3,name:"user2",email:"user2@example.com",password:"$2a$10$8pGBE8rq2UKJ.InOgUMP1ekkJmR30W13BOuzlcmbwypi6twsBjGcW",isAdmin:!1,image:null,createdAt:"2022-04-21T06:55:38.000Z",updatedAt:"2022-04-21T06:55:38.000Z"}]},c={profile:{id:1,name:"root",email:"root@example.com",password:"$2a$10$5ZuIWPJga1gF67fHHgww/uT1BJLXeHhvndOVI554btHhy.e4iRkWC",isAdmin:!0,image:null}},u={components:{AdminNav:i["a"]},data:function(){return{users:[],currentUser:{id:"",name:"",isAdmin:""}}},methods:{fetchData:function(){this.users=o.users},fetchCurrentUser:function(){this.currentUser=c.profile},toggleUserRole:function(t){this.users=this.users.map((function(e){return e.id===t?Object(a["a"])(Object(a["a"])({},e),{},{isAdmin:!e.isAdmin}):e}))}},created:function(){this.fetchData(),this.fetchCurrentUser()},filters:{showRole:function(t){return t?"admin":"user"},showAction:function(t){return t?"set as user":"set as admin"}}},d=u,l=s("2877"),m=Object(l["a"])(d,r,n,!1,null,null,null);e["default"]=m.exports},d81d:function(t,e,s){"use strict";var r=s("23e7"),n=s("b727").map,a=s("1dde"),i=a("map");r({target:"Array",proto:!0,forced:!i},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e04c:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-3"},[s("h1",[t._v("餐廳後台")]),s("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v(" | "),s("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v(" | "),s("router-link",{attrs:{to:"/admin/users"}},[t._v("Users")])],1)},n=[],a=s("2877"),i={},o=Object(a["a"])(i,r,n,!1,null,null,null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-e06cebcc.0cd99d21.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b72d3d2"],{"25d3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("div",[a("h1",[t._v(t._s(t.restaurant.name))]),a("span",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),a("hr"),a("ul",[a("li",[t._v("評論數： "+t._s(t.restaurant.commentsLength))]),a("li",[t._v("瀏覽次數： "+t._s(t.restaurant.viewCounts))])]),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v(" 回上一頁 ")])])},r=[],s=a("5530"),i=(a("b0c0"),{restaurant:{id:1,name:"Ned Trantow",tel:"670-353-6941 x75169",address:"234 Abernathy Forge",opening_hours:"08:00",description:"quia",image:"https://loremflickr.com/320/240/restaurant,food/?random=42.06157333984635",viewCounts:1,createdAt:"2022-04-21T06:55:38.000Z",updatedAt:"2022-04-23T10:00:06.000Z",CategoryId:1,Category:{id:1,name:"中式料理",createdAt:"2022-04-21T06:55:38.000Z",updatedAt:"2022-04-21T06:55:38.000Z"},Comments:[{id:101,text:"Inventore corporis fugit eveniet ab autem quia eum.",UserId:1,RestaurantId:1,createdAt:"2022-04-21T06:55:38.000Z",updatedAt:"2022-04-21T06:55:38.000Z",User:{id:1,name:"root",email:"root@example.com",password:"$2a$10$5ZuIWPJga1gF67fHHgww/uT1BJLXeHhvndOVI554btHhy.e4iRkWC",isAdmin:!0,image:null,createdAt:"2022-04-21T06:55:38.000Z",updatedAt:"2022-04-21T06:55:38.000Z"}},{id:1,text:"Qui quae et ut nulla.",UserId:3,RestaurantId:1,createdAt:"2022-04-21T06:55:38.000Z",updatedAt:"2022-04-21T06:55:38.000Z",User:{id:3,name:"user2",email:"user2@example.com",password:"$2a$10$8pGBE8rq2UKJ.InOgUMP1ekkJmR30W13BOuzlcmbwypi6twsBjGcW",isAdmin:!1,image:null,createdAt:"2022-04-21T06:55:38.000Z",updatedAt:"2022-04-21T06:55:38.000Z"}},{id:51,text:"Aspernatur cupiditate neque perspiciatis qui sapiente et recusandae.",UserId:3,RestaurantId:1,createdAt:"2022-04-21T06:55:38.000Z",updatedAt:"2022-04-21T06:55:38.000Z",User:{id:3,name:"user2",email:"user2@example.com",password:"$2a$10$8pGBE8rq2UKJ.InOgUMP1ekkJmR30W13BOuzlcmbwypi6twsBjGcW",isAdmin:!1,image:null,createdAt:"2022-04-21T06:55:38.000Z",updatedAt:"2022-04-21T06:55:38.000Z"}}]}}),u={data:function(){return{restaurant:{id:-1,name:"",categoryName:"",commentsLength:0,viewCounts:0}}},methods:{fetchData:function(){var t=i.restaurant,e=t.id,a=t.name,n=t.Category,r=t.Comments,u=t.viewCounts;this.restaurant=Object(s["a"])(Object(s["a"])({},this.restaurant),{},{id:e,name:a,categoryName:n?n.name:"未分類",commentsLength:r.length,viewCounts:u})}},created:function(){var t=this.$route.params.id;this.fetchData(t)}},d=u,o=a("2877"),c=Object(o["a"])(d,n,r,!1,null,null,null);e["default"]=c.exports},b0c0:function(t,e,a){var n=a("83ab"),r=a("5e77").EXISTS,s=a("e330"),i=a("9bf2").f,u=Function.prototype,d=s(u.toString),o=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,c=s(o.exec),m="name";n&&!r&&i(u,m,{configurable:!0,get:function(){try{return c(o,d(this))[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-1b72d3d2.af59200f.js.map
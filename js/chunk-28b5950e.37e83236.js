(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28b5950e"],{5652:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("AdminNav"),a("form",{staticClass:"my-4"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-auto"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCategoryName,expression:"newCategoryName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"新增餐廳類別..."},domProps:{value:t.newCategoryName},on:{input:function(e){e.target.composing||(t.newCategoryName=e.target.value)}}})]),a("div",{staticClass:"col-auto"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.createCategory.apply(null,arguments)}}},[t._v(" 新增 ")])])])]),a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.categories,(function(e){return a("tr",{key:e.id},[a("th",{attrs:{scope:"row"}},[t._v(" "+t._s(e.id)+" ")]),a("td",{staticClass:"position-relative"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isEditing,expression:"!category.isEditing"}],staticClass:"category-name"},[t._v(" "+t._s(e.name)+" ")]),a("input",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"category.isEditing"},{name:"model",rawName:"v-model",value:e.name,expression:"category.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"category.isEditing"}],staticClass:"cancel",on:{click:function(a){return a.preventDefault(),a.stopPropagation(),t.handleCancel(e.id)}}},[t._v(" ✕ ")])]),a("td",{staticClass:"d-flex justify-content-between"},[a("button",{directives:[{name:"show",rawName:"v-show",value:!e.isEditing,expression:"!category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.toggleIsEditing(e.id)}}},[t._v(" Edit ")]),a("button",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),a.stopPropagation(),t.updateCategory({categoryId:e.id,name:e.name})}}},[t._v(" Save ")]),a("button",{staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteCategory(e.id)}}},[t._v(" Delete ")])])])})),0)])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col",width:"60"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("Category Name")]),a("th",{attrs:{scope:"col",width:"210"}},[t._v("Action")])])])}],s=a("5530"),r=(a("d81d"),a("4de4"),a("d3b7"),a("b0c0"),a("e04c")),o=a("ec26"),c={categories:[{id:1,name:"中式料理",createdAt:"2019-06-22T09:00:43.000Z",updatedAt:"2019-06-22T09:00:43.000Z"},{id:2,name:"日本料理",createdAt:"2019-06-22T09:00:43.000Z",updatedAt:"2019-06-22T09:00:43.000Z"},{id:3,name:"義大利料理",createdAt:"2019-06-22T09:00:43.000Z",updatedAt:"2019-06-22T09:00:43.000Z"},{id:4,name:"墨西哥料理",createdAt:"2019-06-22T09:00:43.000Z",updatedAt:"2019-06-22T09:00:43.000Z"}]},u={components:{AdminNav:r["a"]},data:function(){return{categories:[],newCategoryName:""}},created:function(){this.fetchCategories()},methods:{fetchCategories:function(){this.categories=c.categories.map((function(t){return Object(s["a"])(Object(s["a"])({},t),{},{isEditing:!1,nameCached:""})}))},createCategory:function(){this.categories.push({id:Object(o["a"])(),name:this.newCategoryName}),this.newCategoryName=""},deleteCategory:function(t){this.categories=this.categories.filter((function(e){return t!==e.id}))},toggleIsEditing:function(t){this.categories=this.categories.map((function(e){return e.id===t?Object(s["a"])(Object(s["a"])({},e),{},{isEditing:!e.isEditing,nameCached:e.name}):e}))},updateCategory:function(t){var e=t.categoryId,a=t.name;this.toggleIsEditing(e),console.log(a)},handleCancel:function(t){this.categories=this.categories.filter((function(e){return t===e.id?Object(s["a"])(Object(s["a"])({},e),{},{name:e.nameCached}):e})),this.toggleIsEditing(t)}}},d=u,l=(a("9e03"),a("2877")),g=Object(l["a"])(d,n,i,!1,null,"7ec9a286",null);e["default"]=g.exports},"9e03":function(t,e,a){"use strict";a("ae91")},ae91:function(t,e,a){},b0c0:function(t,e,a){var n=a("83ab"),i=a("5e77").EXISTS,s=a("e330"),r=a("9bf2").f,o=Function.prototype,c=s(o.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=s(u.exec),l="name";n&&!i&&r(o,l,{configurable:!0,get:function(){try{return d(u,c(this))[1]}catch(t){return""}}})},d81d:function(t,e,a){"use strict";var n=a("23e7"),i=a("b727").map,s=a("1dde"),r=s("map");n({target:"Array",proto:!0,forced:!r},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},e04c:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-3"},[a("h1",[t._v("餐廳後台")]),a("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v(" | "),a("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v(" | "),a("router-link",{attrs:{to:"/admin/users"}},[t._v("Users")])],1)},i=[],s=a("2877"),r={},o=Object(s["a"])(r,n,i,!1,null,null,null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-28b5950e.37e83236.js.map
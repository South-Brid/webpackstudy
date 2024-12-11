/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/content/index.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/content/index.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html, body{
  height: 100%;
}
.wrap{
  min-height: 100%;
  display: flex;
}

/* 侧边栏 */
.aside {
  width: 200px;
  background-color: #023;
  padding-top: 40px;
}
.aside h2 {
  text-align: center;
  color: #fc6627;
}

/* 侧边栏导航 */
.nav{
  padding-left: 20px;
}
.nav li {
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: white;
  cursor: pointer;
  list-style: none;
}
.nav li a{
  color: white;
  text-decoration: none;
}
.nav li a.active{
  color: #409eff !important;
}

/* 内容区域 */
.main{
  height: 100%;
  flex: 1;
}
.top-nav{
  height: 60px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 40px;
}
.nav-item span{
  cursor: pointer;
}
.nav-item span:last-of-type{
  margin-left: 20px;
}

/* 卡片容器布局 */
.content{
  padding: 30px;
}
.card{
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  border: 1px solid #ebeef5;
  padding: 20px;
}
.card:nth-child(n + 2){
  margin-top: 30px;
}
.card .title{
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ebeef5;
  
}

/* 表单部分 */
.form-check, .form-select{
  display: inline-block;
  margin-left: 10px;
}
.form-select{
  width: auto;
}
.body form>div {
  margin-top: 20px;
}

/* 表格列表部分 */
.table img {
  width: 100px;
  height: 100px;
}
.table .bi{
  cursor: pointer;
}

/* 分页 */
.page-now{
  line-height: 40px;
  padding: 0 20px;
}`, "",{"version":3,"sources":["webpack://./src/content/index.css"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA,QAAQ;AACR;EACE,YAAY;EACZ,sBAAsB;EACtB,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,cAAc;AAChB;;AAEA,UAAU;AACV;EACE,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,qBAAqB;AACvB;AACA;EACE,yBAAyB;AAC3B;;AAEA,SAAS;AACT;EACE,YAAY;EACZ,OAAO;AACT;AACA;EACE,YAAY;EACZ,6BAA6B;EAC7B,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,eAAe;AACjB;AACA;EACE,iBAAiB;AACnB;;AAEA,WAAW;AACX;EACE,aAAa;AACf;AACA;EACE,yCAAyC;EACzC,yBAAyB;EACzB,aAAa;AACf;AACA;EACE,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,gCAAgC;;AAElC;;AAEA,SAAS;AACT;EACE,qBAAqB;EACrB,iBAAiB;AACnB;AACA;EACE,WAAW;AACb;AACA;EACE,gBAAgB;AAClB;;AAEA,WAAW;AACX;EACE,YAAY;EACZ,aAAa;AACf;AACA;EACE,eAAe;AACjB;;AAEA,OAAO;AACP;EACE,iBAAiB;EACjB,eAAe;AACjB","sourcesContent":["html, body{\r\n  height: 100%;\r\n}\r\n.wrap{\r\n  min-height: 100%;\r\n  display: flex;\r\n}\r\n\r\n/* 侧边栏 */\r\n.aside {\r\n  width: 200px;\r\n  background-color: #023;\r\n  padding-top: 40px;\r\n}\r\n.aside h2 {\r\n  text-align: center;\r\n  color: #fc6627;\r\n}\r\n\r\n/* 侧边栏导航 */\r\n.nav{\r\n  padding-left: 20px;\r\n}\r\n.nav li {\r\n  width: 100%;\r\n  height: 60px;\r\n  line-height: 60px;\r\n  color: white;\r\n  cursor: pointer;\r\n  list-style: none;\r\n}\r\n.nav li a{\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n.nav li a.active{\r\n  color: #409eff !important;\r\n}\r\n\r\n/* 内容区域 */\r\n.main{\r\n  height: 100%;\r\n  flex: 1;\r\n}\r\n.top-nav{\r\n  height: 60px;\r\n  border-bottom: 1px solid #ddd;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  padding-right: 40px;\r\n}\r\n.nav-item span{\r\n  cursor: pointer;\r\n}\r\n.nav-item span:last-of-type{\r\n  margin-left: 20px;\r\n}\r\n\r\n/* 卡片容器布局 */\r\n.content{\r\n  padding: 30px;\r\n}\r\n.card{\r\n  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);\r\n  border: 1px solid #ebeef5;\r\n  padding: 20px;\r\n}\r\n.card:nth-child(n + 2){\r\n  margin-top: 30px;\r\n}\r\n.card .title{\r\n  height: 50px;\r\n  display: flex;\r\n  align-items: center;\r\n  border-bottom: 1px solid #ebeef5;\r\n  \r\n}\r\n\r\n/* 表单部分 */\r\n.form-check, .form-select{\r\n  display: inline-block;\r\n  margin-left: 10px;\r\n}\r\n.form-select{\r\n  width: auto;\r\n}\r\n.body form>div {\r\n  margin-top: 20px;\r\n}\r\n\r\n/* 表格列表部分 */\r\n.table img {\r\n  width: 100px;\r\n  height: 100px;\r\n}\r\n.table .bi{\r\n  cursor: pointer;\r\n}\r\n\r\n/* 分页 */\r\n.page-now{\r\n  line-height: 40px;\r\n  padding: 0 20px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/content/index.css":
/*!*******************************!*\
  !*** ./src/content/index.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/content/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/content/index.js":
/*!******************************!*\
  !*** ./src/content/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request.js */ "./src/utils/request.js");
/* harmony import */ var _utils_auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/auth.js */ "./src/utils/auth.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/content/index.css");




/**
 * 目标1：获取文章列表并展示
 *  1.1 准备查询参数对象
 *  1.2 获取文章列表数据
 *  1.3 展示到指定的标签结构中
 */
// 1.1 准备查询参数对象
const queryObj = {
  status: '', // 文章状态（1-待审核，2-审核通过）空字符串-全部
  channel_id: '', // 文章频道 id，空字符串-全部
  page: 1, // 当前页码
  per_page: 2 // 当前页面条数
}
let totalCount = 0 // 保存文章总条数

// 获取并设置文章列表
async function setArtileList() {
  // 1.2 获取文章列表数据
  const res = await (0,_utils_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/v1_0/mp/articles',
    params: queryObj
  })
  // 1.3 展示到指定的标签结构中
  const htmlStr = res.data.results.map(item => `<tr>
  <td>
    <img src="${item.cover.type === 0 ? `https://img2.baidu.com/it/u=2640406343,1419332367&amp;fm=253&amp;fmt=auto&amp;app=138&amp;f=JPEG?w=708&amp;h=500`: item.cover.images[0]}" alt="">
  </td>
  <td>${item.title}</td>
  <td>
    ${item.status === 1 ? `<span class="badge text-bg-primary">待审核</span>` : `<span class="badge text-bg-success">审核通过</span>`}
  </td>
  <td>
    <span>${item.pubdate}</span>
  </td>
  <td>
    <span>${item.read_count}</span>
  </td>
  <td>
    <span>${item.comment_count}</span>
  </td>
  <td>
    <span>${item.like_count}</span>
  </td>
  <td data-id="${item.id}">
    <i class="bi bi-pencil-square edit"></i>
    <i class="bi bi-trash3 del"></i>
  </td>
</tr>`).join('')
  document.querySelector('.art-list').innerHTML = htmlStr

  // 3.1 保存并设置文章总条数
  totalCount = res.data.total_count
  document.querySelector('.total-count').innerHTML = `共 ${totalCount} 条`
}
setArtileList()

/**
 * 目标2：筛选文章列表
 *  2.1 设置频道列表数据
 *  2.2 监听筛选条件改变，保存查询信息到查询参数对象
 *  2.3 点击筛选时，传递查询参数对象到服务器
 *  2.4 获取匹配数据，覆盖到页面展示
 */
// 2.1 设置频道列表数据
async function setChannleList() {
  const res = await (0,_utils_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/v1_0/channels'
  })
  const htmlStr = `<option value="" selected="">请选择文章频道</option>` + res.data.channels.map(item => `<option value="${item.id}">${item.name}</option>`).join('')
  document.querySelector('.form-select').innerHTML = htmlStr
}
setChannleList()
// 2.2 监听筛选条件改变，保存查询信息到查询参数对象
// 筛选状态标记数字->change事件->绑定到查询参数对象上
document.querySelectorAll('.form-check-input').forEach(radio => {
  radio.addEventListener('change', e => {
    queryObj.status = e.target.value
  })
})
// 筛选频道 id -> change事件 -> 绑定到查询参数对象上
document.querySelector('.form-select').addEventListener('change', e => {
  queryObj.channel_id = e.target.value
})
// 2.3 点击筛选时，传递查询参数对象到服务器
document.querySelector('.sel-btn').addEventListener('click', () => {
  // 2.4 获取匹配数据，覆盖到页面展示
  setArtileList()
})

/**
 * 目标3：分页功能
 *  3.1 保存并设置文章总条数
 *  3.2 点击下一页，做临界值判断，并切换页码参数并请求最新数据
 *  3.3 点击上一页，做临界值判断，并切换页码参数并请求最新数据
 */
// 3.2 点击下一页，做临界值判断，并切换页码参数并请求最新数据
document.querySelector('.next').addEventListener('click', e => {
  // 当前页码小于最大页码数
  if (queryObj.page < Math.ceil(totalCount / queryObj.per_page)) {
    queryObj.page++
    document.querySelector('.page-now').innerHTML = `第 ${queryObj.page} 页`
    setArtileList()
  }
})
// 3.3 点击上一页，做临界值判断，并切换页码参数并请求最新数据
document.querySelector('.last').addEventListener('click', e => {
  // 大于 1 的时候，才能翻到上一页
  if (queryObj.page > 1) {
    queryObj.page--
    document.querySelector('.page-now').innerHTML = `第 ${queryObj.page} 页`
    setArtileList()
  }
})

/**
 * 目标4：删除功能
 *  4.1 关联文章 id 到删除图标
 *  4.2 点击删除时，获取文章 id
 *  4.3 调用删除接口，传递文章 id 到服务器
 *  4.4 重新获取文章列表，并覆盖展示
 *  4.5 删除最后一页的最后一条，需要自动向前翻页
 */
// 4.2 点击删除时，获取文章 id
document.querySelector('.art-list').addEventListener('click', async e => {
  // 判断点击的是删除元素
  if (e.target.classList.contains('del')) {
    const delId = e.target.parentNode.dataset.id
    // 4.3 调用删除接口，传递文章 id 到服务器
    const res = await (0,_utils_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      url: `/v1_0/mp/articles/${delId}`,
      method: 'DELETE'
    })

    // 4.5 删除最后一页的最后一条，需要自动向前翻页
    const children = document.querySelector('.art-list').children
    if (children.length === 1 && queryObj.page !== 1) {
      queryObj.page--
      document.querySelector('.page-now').innerHTML = `第 ${queryObj.page} 页`
    }

    // 4.4 重新获取文章列表，并覆盖展示
    setArtileList()
  }
})

// 点击编辑时，获取文章 id，跳转到发布文章页面传递文章 id 过去
document.querySelector('.art-list').addEventListener('click', e => {
  if (e.target.classList.contains('edit')) {
    const artId = e.target.parentNode.dataset.id
    console.log(artId)
    location.href = `../publish/index.html?id=${artId}`
  }
})


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"content": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkuntitled8"] = self["webpackChunkuntitled8"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["shared/commons"], () => (__webpack_require__("./src/content/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1dDaERBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDgvLi9zcmMvY29udGVudC9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdW50aXRsZWQ4Ly4vc3JjL2NvbnRlbnQvaW5kZXguY3NzP2YzOWUiLCJ3ZWJwYWNrOi8vdW50aXRsZWQ4Ly4vc3JjL2NvbnRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQ4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VudGl0bGVkOC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3VudGl0bGVkOC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly91bnRpdGxlZDgvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3VudGl0bGVkOC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3VudGl0bGVkOC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VudGl0bGVkOC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly91bnRpdGxlZDgvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3VudGl0bGVkOC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3VudGl0bGVkOC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdW50aXRsZWQ4L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCwgYm9keXtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLndyYXB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4vKiDkvqfovrnmoI8gKi9cclxuLmFzaWRlIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMztcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG4uYXNpZGUgaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZjNjYyNztcclxufVxyXG5cclxuLyog5L6n6L655qCP5a+86IiqICovXHJcbi5uYXZ7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcbi5uYXYgbGkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBsaW5lLWhlaWdodDogNjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLm5hdiBsaSBhe1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLm5hdiBsaSBhLmFjdGl2ZXtcclxuICBjb2xvcjogIzQwOWVmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiDlhoXlrrnljLrln58gKi9cclxuLm1haW57XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuLnRvcC1uYXZ7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbn1cclxuLm5hdi1pdGVtIHNwYW57XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5uYXYtaXRlbSBzcGFuOmxhc3Qtb2YtdHlwZXtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLyog5Y2h54mH5a655Zmo5biD5bGAICovXHJcbi5jb250ZW50e1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCAwIHJnYigwIDAgMCAvIDEwJSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWVmNTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5jYXJkOm50aC1jaGlsZChuICsgMil7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uY2FyZCAudGl0bGV7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWVmNTtcclxuICBcclxufVxyXG5cclxuLyog6KGo5Y2V6YOo5YiGICovXHJcbi5mb3JtLWNoZWNrLCAuZm9ybS1zZWxlY3R7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5mb3JtLXNlbGVjdHtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG4uYm9keSBmb3JtPmRpdiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLyog6KGo5qC85YiX6KGo6YOo5YiGICovXHJcbi50YWJsZSBpbWcge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi50YWJsZSAuYml7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiDliIbpobUgKi9cclxuLnBhZ2Utbm93e1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbnRlbnQvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBLFFBQVE7QUFDUjtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsU0FBUztBQUNUO0VBQ0UsWUFBWTtFQUNaLE9BQU87QUFDVDtBQUNBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHlDQUF5QztFQUN6Qyx5QkFBeUI7RUFDekIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdDQUFnQzs7QUFFbEM7O0FBRUEsU0FBUztBQUNUO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsV0FBVztBQUNYO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxPQUFPO0FBQ1A7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5e1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4ud3JhcHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiDkvqfovrnmoI8gKi9cXHJcXG4uYXNpZGUge1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMztcXHJcXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xcclxcbn1cXHJcXG4uYXNpZGUgaDIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNmYzY2Mjc7XFxyXFxufVxcclxcblxcclxcbi8qIOS+p+i+ueagj+WvvOiIqiAqL1xcclxcbi5uYXZ7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcbi5uYXYgbGkge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogNjBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbi5uYXYgbGkgYXtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuLm5hdiBsaSBhLmFjdGl2ZXtcXHJcXG4gIGNvbG9yOiAjNDA5ZWZmICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi8qIOWGheWuueWMuuWfnyAqL1xcclxcbi5tYWlue1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuLnRvcC1uYXZ7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxyXFxufVxcclxcbi5uYXYtaXRlbSBzcGFue1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ubmF2LWl0ZW0gc3BhbjpsYXN0LW9mLXR5cGV7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyog5Y2h54mH5a655Zmo5biD5bGAICovXFxyXFxuLmNvbnRlbnR7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbn1cXHJcXG4uY2FyZHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggMCByZ2IoMCAwIDAgLyAxMCUpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWVmNTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcbi5jYXJkOm50aC1jaGlsZChuICsgMil7XFxyXFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbn1cXHJcXG4uY2FyZCAudGl0bGV7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlZWY1O1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi8qIOihqOWNlemDqOWIhiAqL1xcclxcbi5mb3JtLWNoZWNrLCAuZm9ybS1zZWxlY3R7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuLmZvcm0tc2VsZWN0e1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcbi5ib2R5IGZvcm0+ZGl2IHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIOihqOagvOWIl+ihqOmDqOWIhiAqL1xcclxcbi50YWJsZSBpbWcge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuLnRhYmxlIC5iaXtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyog5YiG6aG1ICovXFxyXFxuLnBhZ2Utbm93e1xcclxcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxyXFxuICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJAL3V0aWxzL3JlcXVlc3QuanNcIjtcclxuaW1wb3J0ICdAL3V0aWxzL2F1dGguanMnXHJcbmltcG9ydCAnLi9pbmRleC5jc3MnXHJcblxyXG4vKipcclxuICog55uu5qCHMe+8muiOt+WPluaWh+eroOWIl+ihqOW5tuWxleekulxyXG4gKiAgMS4xIOWHhuWkh+afpeivouWPguaVsOWvueixoVxyXG4gKiAgMS4yIOiOt+WPluaWh+eroOWIl+ihqOaVsOaNrlxyXG4gKiAgMS4zIOWxleekuuWIsOaMh+WumueahOagh+etvue7k+aehOS4rVxyXG4gKi9cclxuLy8gMS4xIOWHhuWkh+afpeivouWPguaVsOWvueixoVxyXG5jb25zdCBxdWVyeU9iaiA9IHtcclxuICBzdGF0dXM6ICcnLCAvLyDmlofnq6DnirbmgIHvvIgxLeW+heWuoeaguO+8jDIt5a6h5qC46YCa6L+H77yJ56m65a2X56ym5LiyLeWFqOmDqFxyXG4gIGNoYW5uZWxfaWQ6ICcnLCAvLyDmlofnq6DpopHpgZMgaWTvvIznqbrlrZfnrKbkuLIt5YWo6YOoXHJcbiAgcGFnZTogMSwgLy8g5b2T5YmN6aG156CBXHJcbiAgcGVyX3BhZ2U6IDIgLy8g5b2T5YmN6aG16Z2i5p2h5pWwXHJcbn1cclxubGV0IHRvdGFsQ291bnQgPSAwIC8vIOS/neWtmOaWh+eroOaAu+adoeaVsFxyXG5cclxuLy8g6I635Y+W5bm26K6+572u5paH56ug5YiX6KGoXHJcbmFzeW5jIGZ1bmN0aW9uIHNldEFydGlsZUxpc3QoKSB7XHJcbiAgLy8gMS4yIOiOt+WPluaWh+eroOWIl+ihqOaVsOaNrlxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKHtcclxuICAgIHVybDogJy92MV8wL21wL2FydGljbGVzJyxcclxuICAgIHBhcmFtczogcXVlcnlPYmpcclxuICB9KVxyXG4gIC8vIDEuMyDlsZXnpLrliLDmjIflrprnmoTmoIfnrb7nu5PmnoTkuK1cclxuICBjb25zdCBodG1sU3RyID0gcmVzLmRhdGEucmVzdWx0cy5tYXAoaXRlbSA9PiBgPHRyPlxyXG4gIDx0ZD5cclxuICAgIDxpbWcgc3JjPVwiJHtpdGVtLmNvdmVyLnR5cGUgPT09IDAgPyBgaHR0cHM6Ly9pbWcyLmJhaWR1LmNvbS9pdC91PTI2NDA0MDYzNDMsMTQxOTMzMjM2NyZhbXA7Zm09MjUzJmFtcDtmbXQ9YXV0byZhbXA7YXBwPTEzOCZhbXA7Zj1KUEVHP3c9NzA4JmFtcDtoPTUwMGA6IGl0ZW0uY292ZXIuaW1hZ2VzWzBdfVwiIGFsdD1cIlwiPlxyXG4gIDwvdGQ+XHJcbiAgPHRkPiR7aXRlbS50aXRsZX08L3RkPlxyXG4gIDx0ZD5cclxuICAgICR7aXRlbS5zdGF0dXMgPT09IDEgPyBgPHNwYW4gY2xhc3M9XCJiYWRnZSB0ZXh0LWJnLXByaW1hcnlcIj7lvoXlrqHmoLg8L3NwYW4+YCA6IGA8c3BhbiBjbGFzcz1cImJhZGdlIHRleHQtYmctc3VjY2Vzc1wiPuWuoeaguOmAmui/hzwvc3Bhbj5gfVxyXG4gIDwvdGQ+XHJcbiAgPHRkPlxyXG4gICAgPHNwYW4+JHtpdGVtLnB1YmRhdGV9PC9zcGFuPlxyXG4gIDwvdGQ+XHJcbiAgPHRkPlxyXG4gICAgPHNwYW4+JHtpdGVtLnJlYWRfY291bnR9PC9zcGFuPlxyXG4gIDwvdGQ+XHJcbiAgPHRkPlxyXG4gICAgPHNwYW4+JHtpdGVtLmNvbW1lbnRfY291bnR9PC9zcGFuPlxyXG4gIDwvdGQ+XHJcbiAgPHRkPlxyXG4gICAgPHNwYW4+JHtpdGVtLmxpa2VfY291bnR9PC9zcGFuPlxyXG4gIDwvdGQ+XHJcbiAgPHRkIGRhdGEtaWQ9XCIke2l0ZW0uaWR9XCI+XHJcbiAgICA8aSBjbGFzcz1cImJpIGJpLXBlbmNpbC1zcXVhcmUgZWRpdFwiPjwvaT5cclxuICAgIDxpIGNsYXNzPVwiYmkgYmktdHJhc2gzIGRlbFwiPjwvaT5cclxuICA8L3RkPlxyXG48L3RyPmApLmpvaW4oJycpXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFydC1saXN0JykuaW5uZXJIVE1MID0gaHRtbFN0clxyXG5cclxuICAvLyAzLjEg5L+d5a2Y5bm26K6+572u5paH56ug5oC75p2h5pWwXHJcbiAgdG90YWxDb3VudCA9IHJlcy5kYXRhLnRvdGFsX2NvdW50XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsLWNvdW50JykuaW5uZXJIVE1MID0gYOWFsSAke3RvdGFsQ291bnR9IOadoWBcclxufVxyXG5zZXRBcnRpbGVMaXN0KClcclxuXHJcbi8qKlxyXG4gKiDnm67moIcy77ya562b6YCJ5paH56ug5YiX6KGoXHJcbiAqICAyLjEg6K6+572u6aKR6YGT5YiX6KGo5pWw5o2uXHJcbiAqICAyLjIg55uR5ZCs562b6YCJ5p2h5Lu25pS55Y+Y77yM5L+d5a2Y5p+l6K+i5L+h5oGv5Yiw5p+l6K+i5Y+C5pWw5a+56LGhXHJcbiAqICAyLjMg54K55Ye7562b6YCJ5pe277yM5Lyg6YCS5p+l6K+i5Y+C5pWw5a+56LGh5Yiw5pyN5Yqh5ZmoXHJcbiAqICAyLjQg6I635Y+W5Yy56YWN5pWw5o2u77yM6KaG55uW5Yiw6aG16Z2i5bGV56S6XHJcbiAqL1xyXG4vLyAyLjEg6K6+572u6aKR6YGT5YiX6KGo5pWw5o2uXHJcbmFzeW5jIGZ1bmN0aW9uIHNldENoYW5ubGVMaXN0KCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKHtcclxuICAgIHVybDogJy92MV8wL2NoYW5uZWxzJ1xyXG4gIH0pXHJcbiAgY29uc3QgaHRtbFN0ciA9IGA8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQ9XCJcIj7or7fpgInmi6nmlofnq6DpopHpgZM8L29wdGlvbj5gICsgcmVzLmRhdGEuY2hhbm5lbHMubWFwKGl0ZW0gPT4gYDxvcHRpb24gdmFsdWU9XCIke2l0ZW0uaWR9XCI+JHtpdGVtLm5hbWV9PC9vcHRpb24+YCkuam9pbignJylcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1zZWxlY3QnKS5pbm5lckhUTUwgPSBodG1sU3RyXHJcbn1cclxuc2V0Q2hhbm5sZUxpc3QoKVxyXG4vLyAyLjIg55uR5ZCs562b6YCJ5p2h5Lu25pS55Y+Y77yM5L+d5a2Y5p+l6K+i5L+h5oGv5Yiw5p+l6K+i5Y+C5pWw5a+56LGhXHJcbi8vIOetm+mAieeKtuaAgeagh+iusOaVsOWtly0+Y2hhbmdl5LqL5Lu2LT7nu5HlrprliLDmn6Xor6Llj4LmlbDlr7nosaHkuIpcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY2hlY2staW5wdXQnKS5mb3JFYWNoKHJhZGlvID0+IHtcclxuICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcclxuICAgIHF1ZXJ5T2JqLnN0YXR1cyA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgfSlcclxufSlcclxuLy8g562b6YCJ6aKR6YGTIGlkIC0+IGNoYW5nZeS6i+S7tiAtPiDnu5HlrprliLDmn6Xor6Llj4LmlbDlr7nosaHkuIpcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tc2VsZWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XHJcbiAgcXVlcnlPYmouY2hhbm5lbF9pZCA9IGUudGFyZ2V0LnZhbHVlXHJcbn0pXHJcbi8vIDIuMyDngrnlh7vnrZvpgInml7bvvIzkvKDpgJLmn6Xor6Llj4LmlbDlr7nosaHliLDmnI3liqHlmahcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAvLyAyLjQg6I635Y+W5Yy56YWN5pWw5o2u77yM6KaG55uW5Yiw6aG16Z2i5bGV56S6XHJcbiAgc2V0QXJ0aWxlTGlzdCgpXHJcbn0pXHJcblxyXG4vKipcclxuICog55uu5qCHM++8muWIhumhteWKn+iDvVxyXG4gKiAgMy4xIOS/neWtmOW5tuiuvue9ruaWh+eroOaAu+adoeaVsFxyXG4gKiAgMy4yIOeCueWHu+S4i+S4gOmhte+8jOWBmuS4tOeVjOWAvOWIpOaWre+8jOW5tuWIh+aNoumhteeggeWPguaVsOW5tuivt+axguacgOaWsOaVsOaNrlxyXG4gKiAgMy4zIOeCueWHu+S4iuS4gOmhte+8jOWBmuS4tOeVjOWAvOWIpOaWre+8jOW5tuWIh+aNoumhteeggeWPguaVsOW5tuivt+axguacgOaWsOaVsOaNrlxyXG4gKi9cclxuLy8gMy4yIOeCueWHu+S4i+S4gOmhte+8jOWBmuS4tOeVjOWAvOWIpOaWre+8jOW5tuWIh+aNoumhteeggeWPguaVsOW5tuivt+axguacgOaWsOaVsOaNrlxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgLy8g5b2T5YmN6aG156CB5bCP5LqO5pyA5aSn6aG156CB5pWwXHJcbiAgaWYgKHF1ZXJ5T2JqLnBhZ2UgPCBNYXRoLmNlaWwodG90YWxDb3VudCAvIHF1ZXJ5T2JqLnBlcl9wYWdlKSkge1xyXG4gICAgcXVlcnlPYmoucGFnZSsrXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1ub3cnKS5pbm5lckhUTUwgPSBg56ysICR7cXVlcnlPYmoucGFnZX0g6aG1YFxyXG4gICAgc2V0QXJ0aWxlTGlzdCgpXHJcbiAgfVxyXG59KVxyXG4vLyAzLjMg54K55Ye75LiK5LiA6aG177yM5YGa5Li055WM5YC85Yik5pat77yM5bm25YiH5o2i6aG156CB5Y+C5pWw5bm26K+35rGC5pyA5paw5pWw5o2uXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAvLyDlpKfkuo4gMSDnmoTml7blgJnvvIzmiY3og73nv7vliLDkuIrkuIDpobVcclxuICBpZiAocXVlcnlPYmoucGFnZSA+IDEpIHtcclxuICAgIHF1ZXJ5T2JqLnBhZ2UtLVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2Utbm93JykuaW5uZXJIVE1MID0gYOesrCAke3F1ZXJ5T2JqLnBhZ2V9IOmhtWBcclxuICAgIHNldEFydGlsZUxpc3QoKVxyXG4gIH1cclxufSlcclxuXHJcbi8qKlxyXG4gKiDnm67moIc077ya5Yig6Zmk5Yqf6IO9XHJcbiAqICA0LjEg5YWz6IGU5paH56ugIGlkIOWIsOWIoOmZpOWbvuagh1xyXG4gKiAgNC4yIOeCueWHu+WIoOmZpOaXtu+8jOiOt+WPluaWh+eroCBpZFxyXG4gKiAgNC4zIOiwg+eUqOWIoOmZpOaOpeWPo++8jOS8oOmAkuaWh+eroCBpZCDliLDmnI3liqHlmahcclxuICogIDQuNCDph43mlrDojrflj5bmlofnq6DliJfooajvvIzlubbopobnm5blsZXnpLpcclxuICogIDQuNSDliKDpmaTmnIDlkI7kuIDpobXnmoTmnIDlkI7kuIDmnaHvvIzpnIDopoHoh6rliqjlkJHliY3nv7vpobVcclxuICovXHJcbi8vIDQuMiDngrnlh7vliKDpmaTml7bvvIzojrflj5bmlofnq6AgaWRcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFydC1saXN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBlID0+IHtcclxuICAvLyDliKTmlq3ngrnlh7vnmoTmmK/liKDpmaTlhYPntKBcclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWwnKSkge1xyXG4gICAgY29uc3QgZGVsSWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuaWRcclxuICAgIC8vIDQuMyDosIPnlKjliKDpmaTmjqXlj6PvvIzkvKDpgJLmlofnq6AgaWQg5Yiw5pyN5Yqh5ZmoXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgIHVybDogYC92MV8wL21wL2FydGljbGVzLyR7ZGVsSWR9YCxcclxuICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgfSlcclxuXHJcbiAgICAvLyA0LjUg5Yig6Zmk5pyA5ZCO5LiA6aG155qE5pyA5ZCO5LiA5p2h77yM6ZyA6KaB6Ieq5Yqo5ZCR5YmN57+76aG1XHJcbiAgICBjb25zdCBjaGlsZHJlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnQtbGlzdCcpLmNoaWxkcmVuXHJcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIHF1ZXJ5T2JqLnBhZ2UgIT09IDEpIHtcclxuICAgICAgcXVlcnlPYmoucGFnZS0tXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLW5vdycpLmlubmVySFRNTCA9IGDnrKwgJHtxdWVyeU9iai5wYWdlfSDpobVgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gNC40IOmHjeaWsOiOt+WPluaWh+eroOWIl+ihqO+8jOW5tuimhuebluWxleekulxyXG4gICAgc2V0QXJ0aWxlTGlzdCgpXHJcbiAgfVxyXG59KVxyXG5cclxuLy8g54K55Ye757yW6L6R5pe277yM6I635Y+W5paH56ugIGlk77yM6Lez6L2s5Yiw5Y+R5biD5paH56ug6aG16Z2i5Lyg6YCS5paH56ugIGlkIOi/h+WOu1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJ0LWxpc3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQnKSkge1xyXG4gICAgY29uc3QgYXJ0SWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuaWRcclxuICAgIGNvbnNvbGUubG9nKGFydElkKVxyXG4gICAgbG9jYXRpb24uaHJlZiA9IGAuLi9wdWJsaXNoL2luZGV4Lmh0bWw/aWQ9JHthcnRJZH1gXHJcbiAgfVxyXG59KVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImNvbnRlbnRcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdW50aXRsZWQ4XCJdID0gc2VsZltcIndlYnBhY2tDaHVua3VudGl0bGVkOFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJzaGFyZWQvY29tbW9uc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9jb250ZW50L2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
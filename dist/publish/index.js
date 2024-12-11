/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/publish/index.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/publish/index.css ***!
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

/* 提示框 */
.alert{
  width: 400px;
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: none;
  z-index: 10000;
}
.show{
  display: block;
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

/* 右侧区域 */
.main{
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
.card .title{
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ebeef5;
}

/* 表单 */
.body form>div{
  margin-top: 20px;
}
.body form input, .body form select{
  width: auto;
  display: inline-block;
}

/* 封面 */
.cover .place{
  width: 200px;
  height: 200px;
  text-align: center;
  font-size: 40px;
  line-height: 200px;
  border: 1px solid #ddd;
  color: #aaa;
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
}
.cover img{
  width: 200px;
  height: 200px;
}
.cover .rounded{
  display: none;
}
.cover .show{
  display: inline-block;
}
.cover .hide{
  display: none;
}

/* 富文本编辑器 */
#editor—wrapper {
  border: 1px solid #ccc;
  z-index: 100; /* 按需定义 */
}
#toolbar-container { border-bottom: 1px solid #ccc; }
#editor-container { height: 500px; }`, "",{"version":3,"sources":["webpack://./src/publish/index.css"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA,QAAQ;AACR;EACE,YAAY;EACZ,eAAe;EACf,SAAS;EACT,SAAS;EACT,2BAA2B;EAC3B,aAAa;EACb,cAAc;AAChB;AACA;EACE,cAAc;AAChB;;AAEA,QAAQ;AACR;EACE,YAAY;EACZ,sBAAsB;EACtB,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,cAAc;AAChB;;AAEA,UAAU;AACV;EACE,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,qBAAqB;AACvB;AACA;EACE,yBAAyB;AAC3B;;AAEA,SAAS;AACT;EACE,OAAO;AACT;AACA;EACE,YAAY;EACZ,6BAA6B;EAC7B,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,eAAe;AACjB;AACA;EACE,iBAAiB;AACnB;;AAEA,WAAW;AACX;EACE,aAAa;AACf;AACA;EACE,yCAAyC;EACzC,yBAAyB;EACzB,aAAa;AACf;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,gCAAgC;AAClC;;AAEA,OAAO;AACP;EACE,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,qBAAqB;AACvB;;AAEA,OAAO;AACP;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,sBAAsB;EACtB,WAAW;EACX,eAAe;EACf,qBAAqB;EACrB,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,qBAAqB;AACvB;AACA;EACE,aAAa;AACf;;AAEA,WAAW;AACX;EACE,sBAAsB;EACtB,YAAY,EAAE,SAAS;AACzB;AACA,qBAAqB,6BAA6B,EAAE;AACpD,oBAAoB,aAAa,EAAE","sourcesContent":["html, body{\r\n  height: 100%;\r\n}\r\n\r\n.wrap{\r\n  min-height: 100%;\r\n  display: flex;\r\n}\r\n\r\n/* 提示框 */\r\n.alert{\r\n  width: 400px;\r\n  position: fixed;\r\n  top: 50px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  display: none;\r\n  z-index: 10000;\r\n}\r\n.show{\r\n  display: block;\r\n}\r\n\r\n/* 侧边栏 */\r\n.aside {\r\n  width: 200px;\r\n  background-color: #023;\r\n  padding-top: 40px;\r\n}\r\n.aside h2 {\r\n  text-align: center;\r\n  color: #fc6627;\r\n}\r\n\r\n/* 侧边栏导航 */\r\n.nav{\r\n  padding-left: 20px;\r\n}\r\n.nav li {\r\n  width: 100%;\r\n  height: 60px;\r\n  line-height: 60px;\r\n  color: white;\r\n  cursor: pointer;\r\n  list-style: none;\r\n}\r\n.nav li a{\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n.nav li a.active{\r\n  color: #409eff !important;\r\n}\r\n\r\n/* 右侧区域 */\r\n.main{\r\n  flex: 1;\r\n}\r\n.top-nav{\r\n  height: 60px;\r\n  border-bottom: 1px solid #ddd;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  padding-right: 40px;\r\n}\r\n.nav-item span{\r\n  cursor: pointer;\r\n}\r\n.nav-item span:last-of-type{\r\n  margin-left: 20px;\r\n}\r\n\r\n/* 卡片容器布局 */\r\n.content{\r\n  padding: 30px;\r\n}\r\n.card{\r\n  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);\r\n  border: 1px solid #ebeef5;\r\n  padding: 20px;\r\n}\r\n.card .title{\r\n  height: 50px;\r\n  display: flex;\r\n  align-items: center;\r\n  border-bottom: 1px solid #ebeef5;\r\n}\r\n\r\n/* 表单 */\r\n.body form>div{\r\n  margin-top: 20px;\r\n}\r\n.body form input, .body form select{\r\n  width: auto;\r\n  display: inline-block;\r\n}\r\n\r\n/* 封面 */\r\n.cover .place{\r\n  width: 200px;\r\n  height: 200px;\r\n  text-align: center;\r\n  font-size: 40px;\r\n  line-height: 200px;\r\n  border: 1px solid #ddd;\r\n  color: #aaa;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n.cover img{\r\n  width: 200px;\r\n  height: 200px;\r\n}\r\n.cover .rounded{\r\n  display: none;\r\n}\r\n.cover .show{\r\n  display: inline-block;\r\n}\r\n.cover .hide{\r\n  display: none;\r\n}\r\n\r\n/* 富文本编辑器 */\r\n#editor—wrapper {\r\n  border: 1px solid #ccc;\r\n  z-index: 100; /* 按需定义 */\r\n}\r\n#toolbar-container { border-bottom: 1px solid #ccc; }\r\n#editor-container { height: 500px; }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/publish/index.css":
/*!*******************************!*\
  !*** ./src/publish/index.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/publish/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/publish/index.js":
/*!******************************!*\
  !*** ./src/publish/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/auth.js */ "./src/utils/auth.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/request */ "./src/utils/request.js");
/* harmony import */ var _utils_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/editor */ "./src/utils/editor.js");
/* harmony import */ var _utils_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/alert */ "./src/utils/alert.js");
/* harmony import */ var form_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! form-serialize */ "./node_modules/form-serialize/index.js");
/* harmony import */ var form_serialize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(form_serialize__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./src/publish/index.css");







/**
 * 目标1：设置频道下拉菜单
 *  1.1 获取频道列表数据
 *  1.2 展示到下拉菜单中
 */
// 1.1 获取频道列表数据
async function setChannleList() {
  const res = await (0,_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/v1_0/channels'
  })
  // 1.2 展示到下拉菜单中
  const htmlStr = `<option value="" selected="">请选择文章频道</option>` + res.data.channels.map(item => `<option value="${item.id}">${item.name}</option>`).join('')
  document.querySelector('.form-select').innerHTML = htmlStr
}
// 网页运行后，默认调用一次
setChannleList()

/**
 * 目标2：文章封面设置
 *  2.1 准备标签结构和样式
 *  2.2 选择文件并保存在 FormData
 *  2.3 单独上传图片并得到图片 URL 网址
 *  2.4 回显并切换 img 标签展示（隐藏 + 号上传标签）
 */
// 2.2 选择文件并保存在 FormData
document.querySelector('.img-file').addEventListener('change', async e => {
  const file = e.target.files[0]
  const fd = new FormData()
  fd.append('image', file)
  // 2.3 单独上传图片并得到图片 URL 网址
  const res = await (0,_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/v1_0/upload',
    method: 'POST',
    data: fd
  })
  // 2.4 回显并切换 img 标签展示（隐藏 + 号上传标签）
  const imgUrl = res.data.url
  document.querySelector('.rounded').src = imgUrl
  document.querySelector('.rounded').classList.add('show')
  document.querySelector('.place').classList.add('hide')
})
// 优化：点击 img 可以重新切换封面
// 思路：img 点击 => 用 JS 方式触发文件选择元素 click 事件方法
document.querySelector('.rounded').addEventListener('click', () => {
  document.querySelector('.img-file').click()
})

/**
 * 目标3：发布文章保存
 *  3.1 基于 form-serialize 插件收集表单数据对象
 *  3.2 基于 axios 提交到服务器保存
 *  3.3 调用 Alert 警告框反馈结果给用户
 *  3.4 重置表单并跳转到列表页
 */
// 3.1 基于 form-serialize 插件收集表单数据对象
document.querySelector('.send').addEventListener('click', async e => {
  if (e.target.innerHTML !== '发布') return
  const form = document.querySelector('.art-form')
  const data = form_serialize__WEBPACK_IMPORTED_MODULE_4___default()(form, { hash: true, empty: true })
  // 发布文章的时候，不需要 id 属性，所以可以删除掉（id 为了后续做编辑使用）
  delete data.id
  console.log(data)
  // 自己收集封面图片地址并保存到 data 对象中
  data.cover = {
    type: 1, // 封面类型
    images: [document.querySelector('.rounded').src] // 封面图片 URL 网址
  }

  // 3.2 基于 axios 提交到服务器保存
  try {
    const res = await (0,_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
      url: '/v1_0/mp/articles',
      method: 'POST',
      data: data
    })
    // 3.3 调用 Alert 警告框反馈结果给用户
    ;(0,_utils_alert__WEBPACK_IMPORTED_MODULE_3__.myAlert)(true, '发布成功')
    // 3.4 重置表单并跳转到列表页
    form.reset()
    // 封面需要手动重置
    document.querySelector('.rounded').src = ''
    document.querySelector('.rounded').classList.remove('show')
    document.querySelector('.place').classList.remove('hide')
    // 富文本编辑器重置
    _utils_editor__WEBPACK_IMPORTED_MODULE_2__["default"].setHtml('')

    setTimeout(() => {
      location.href = '../content/index.html'
    }, 1500)

  } catch (error) {
    (0,_utils_alert__WEBPACK_IMPORTED_MODULE_3__.myAlert)(false, error.response.data.message)
  }
})

  /**
   * 目标4：编辑-回显文章
   *  4.1 页面跳转传参（URL 查询参数方式）
   *  4.2 发布文章页面接收参数判断（共用同一套表单）
   *  4.3 修改标题和按钮文字
   *  4.4 获取文章详情数据并回显表单
   */
  ; (function () {
    // 4.2 发布文章页面接收参数判断（共用同一套表单）
    const paramsStr = location.search
    const params = new URLSearchParams(paramsStr)
    params.forEach(async (value, key) => {
      // 当前有要编辑的文章 id 被传入过来
      if (key === 'id') {
        // 4.3 修改标题和按钮文字
        document.querySelector('.title span').innerHTML = '修改文章'
        document.querySelector('.send').innerHTML = '修改'
        // 4.4 获取文章详情数据并回显表单
        const res = await (0,_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
          url: `/v1_0/mp/articles/${value}`
        })
        console.log(res)
        // 组织我仅仅需要的数据对象，为后续遍历回显到页面上做铺垫
        const dataObj = {
          channel_id: res.data.channel_id,
          title: res.data.title,
          rounded: res.data.cover.images[0], // 封面图片地址
          content: res.data.content,
          id: res.data.id
        }
        // 遍历数据对象属性，映射到页面元素上，快速赋值
        Object.keys(dataObj).forEach(key => {
          if (key === 'rounded') {
            // 封面设置
            if (dataObj[key]) {
              // 有封面
              document.querySelector('.rounded').src = dataObj[key]
              document.querySelector('.rounded').classList.add('show')
              document.querySelector('.place').classList.add('hide')
            }
          } else if (key === 'content') {
            // 富文本内容
            _utils_editor__WEBPACK_IMPORTED_MODULE_2__["default"].setHtml(dataObj[key])
          } else {
            // 用数据对象属性名，作为标签 name 属性选择器值来找到匹配的标签
            document.querySelector(`[name=${key}]`).value = dataObj[key]
          }
        })
      }
    })
  })();

/**
 * 目标5：编辑-保存文章
 *  5.1 判断按钮文字，区分业务（因为共用一套表单）
 *  5.2 调用编辑文章接口，保存信息到服务器
 *  5.3 基于 Alert 反馈结果消息给用户
 */
document.querySelector('.send').addEventListener('click', async e => {
  // 5.1 判断按钮文字，区分业务（因为共用一套表单）
  if (e.target.innerHTML !== '修改') return
  // 修改文章逻辑
  const form = document.querySelector('.art-form')
  const data = form_serialize__WEBPACK_IMPORTED_MODULE_4___default()(form, { hash: true, empty: true })
  // 5.2 调用编辑文章接口，保存信息到服务器
  try {
    const res = await (0,_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
      url: `/v1_0/mp/articles/${data.id}`,
      method: 'PUT',
      data: {
        ...data,
        cover: {
          type: document.querySelector('.rounded').src ? 1 : 0,
          images: [document.querySelector('.rounded').src]
        }
      }
    })
    console.log(res)
    ;(0,_utils_alert__WEBPACK_IMPORTED_MODULE_3__.myAlert)(true, '修改文章成功')
  } catch (error) {
    (0,_utils_alert__WEBPACK_IMPORTED_MODULE_3__.myAlert)(false, error.response.data.message)
  }
})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_utils_editor__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./src/utils/editor.js":
/*!*****************************!*\
  !*** ./src/utils/editor.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// 富文本编辑器
// 创建编辑器函数，创建工具栏函数
const wangEditor = __webpack_require__(/*! @wangeditor/editor */ "./node_modules/@wangeditor/editor/dist/index.esm.js");
const { createEditor, createToolbar } = wangEditor

// 编辑器配置对象
const editorConfig = {
  // 占位提示文字
  placeholder: '发布文章内容...',
  // 编辑器变化时回调函数
  onChange(editor) {
    // 获取富文本内容
    const html = editor.getHtml()
    // 也可以同步到 <textarea>
    // 为了后续快速收集整个表单内容做铺垫
    document.querySelector('.publish-content').value = html
  }
}

// 创建编辑器
const editor = createEditor({
  // 创建位置
  selector: '#editor-container',
  // 默认内容
  html: '<p><br></p>',
  // 配置项
  config: editorConfig,
  // 配置集成模式（default 全部）（simple 简洁）
  mode: 'default', // or 'simple'
})

// 工具栏配置对象
const toolbarConfig = {}

// 创建工具栏
const toolbar = createToolbar({
  // 为指定编辑器创建工具栏
  editor,
  // 工具栏创建的位置
  selector: '#toolbar-container',
  // 工具栏配置对象
  config: toolbarConfig,
  // 配置集成模式
  mode: 'default', // or 'simple'
})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editor);

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"publish": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["shared/commons","shared/vendors"], () => (__webpack_require__("./src/publish/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ2hEQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW50aXRsZWQ4Ly4vc3JjL3B1Ymxpc2gvaW5kZXguY3NzIiwid2VicGFjazovL3VudGl0bGVkOC8uL3NyYy9wdWJsaXNoL2luZGV4LmNzcz9lOTg1Iiwid2VicGFjazovL3VudGl0bGVkOC8uL3NyYy9wdWJsaXNoL2luZGV4LmpzIiwid2VicGFjazovL3VudGl0bGVkOC8uL3NyYy91dGlscy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQ4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VudGl0bGVkOC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3VudGl0bGVkOC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly91bnRpdGxlZDgvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3VudGl0bGVkOC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3VudGl0bGVkOC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3VudGl0bGVkOC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VudGl0bGVkOC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly91bnRpdGxlZDgvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3VudGl0bGVkOC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3VudGl0bGVkOC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdW50aXRsZWQ4L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCwgYm9keXtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi53cmFwe1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLyog5o+Q56S65qGGICovXHJcbi5hbGVydHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgei1pbmRleDogMTAwMDA7XHJcbn1cclxuLnNob3d7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qIOS+p+i+ueagjyAqL1xyXG4uYXNpZGUge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzO1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG59XHJcbi5hc2lkZSBoMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmM2NjI3O1xyXG59XHJcblxyXG4vKiDkvqfovrnmoI/lr7zoiKogKi9cclxuLm5hdntcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuLm5hdiBsaSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4ubmF2IGxpIGF7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4ubmF2IGxpIGEuYWN0aXZle1xyXG4gIGNvbG9yOiAjNDA5ZWZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIOWPs+S+p+WMuuWfnyAqL1xyXG4ubWFpbntcclxuICBmbGV4OiAxO1xyXG59XHJcbi50b3AtbmF2e1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG59XHJcbi5uYXYtaXRlbSBzcGFue1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubmF2LWl0ZW0gc3BhbjpsYXN0LW9mLXR5cGV7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi8qIOWNoeeJh+WuueWZqOW4g+WxgCAqL1xyXG4uY29udGVudHtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcbi5jYXJke1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggMCByZ2IoMCAwIDAgLyAxMCUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmVlZjU7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4uY2FyZCAudGl0bGV7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWVmNTtcclxufVxyXG5cclxuLyog6KGo5Y2VICovXHJcbi5ib2R5IGZvcm0+ZGl2e1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmJvZHkgZm9ybSBpbnB1dCwgLmJvZHkgZm9ybSBzZWxlY3R7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4vKiDlsIHpnaIgKi9cclxuLmNvdmVyIC5wbGFjZXtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGNvbG9yOiAjYWFhO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG4uY292ZXIgaW1ne1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbi5jb3ZlciAucm91bmRlZHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jb3ZlciAuc2hvd3tcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmNvdmVyIC5oaWRle1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qIOWvjOaWh+acrOe8lui+keWZqCAqL1xyXG4jZWRpdG9y4oCUd3JhcHBlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICB6LWluZGV4OiAxMDA7IC8qIOaMiemcgOWumuS5iSAqL1xyXG59XHJcbiN0b29sYmFyLWNvbnRhaW5lciB7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjOyB9XHJcbiNlZGl0b3ItY29udGFpbmVyIHsgaGVpZ2h0OiA1MDBweDsgfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3B1Ymxpc2gvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQSxRQUFRO0FBQ1I7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFNBQVM7RUFDVCxTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLFFBQVE7QUFDUjtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsU0FBUztBQUNUO0VBQ0UsT0FBTztBQUNUO0FBQ0E7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLFdBQVc7QUFDWDtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUNBQXlDO0VBQ3pDLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdDQUFnQztBQUNsQzs7QUFFQSxPQUFPO0FBQ1A7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUEsT0FBTztBQUNQO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLFdBQVc7QUFDWDtFQUNFLHNCQUFzQjtFQUN0QixZQUFZLEVBQUUsU0FBUztBQUN6QjtBQUNBLHFCQUFxQiw2QkFBNkIsRUFBRTtBQUNwRCxvQkFBb0IsYUFBYSxFQUFFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHl7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi53cmFwe1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi8qIOaPkOekuuahhiAqL1xcclxcbi5hbGVydHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTBweDtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB6LWluZGV4OiAxMDAwMDtcXHJcXG59XFxyXFxuLnNob3d7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyog5L6n6L655qCPICovXFxyXFxuLmFzaWRlIHtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjM7XFxyXFxuICBwYWRkaW5nLXRvcDogNDBweDtcXHJcXG59XFxyXFxuLmFzaWRlIGgyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmM2NjI3O1xcclxcbn1cXHJcXG5cXHJcXG4vKiDkvqfovrnmoI/lr7zoiKogKi9cXHJcXG4ubmF2e1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG4ubmF2IGxpIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG4ubmF2IGxpIGF7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5uYXYgbGkgYS5hY3RpdmV7XFxyXFxuICBjb2xvcjogIzQwOWVmZiAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKiDlj7PkvqfljLrln58gKi9cXHJcXG4ubWFpbntcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcbi50b3AtbmF2e1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG4ubmF2LWl0ZW0gc3BhbntcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLm5hdi1pdGVtIHNwYW46bGFzdC1vZi10eXBle1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIOWNoeeJh+WuueWZqOW4g+WxgCAqL1xcclxcbi5jb250ZW50e1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG59XFxyXFxuLmNhcmR7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IDAgcmdiKDAgMCAwIC8gMTAlKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmVlZjU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG4uY2FyZCAudGl0bGV7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlZWY1O1xcclxcbn1cXHJcXG5cXHJcXG4vKiDooajljZUgKi9cXHJcXG4uYm9keSBmb3JtPmRpdntcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcbi5ib2R5IGZvcm0gaW5wdXQsIC5ib2R5IGZvcm0gc2VsZWN0e1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qIOWwgemdoiAqL1xcclxcbi5jb3ZlciAucGxhY2V7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXHJcXG4gIGNvbG9yOiAjYWFhO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG59XFxyXFxuLmNvdmVyIGltZ3tcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxufVxcclxcbi5jb3ZlciAucm91bmRlZHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5jb3ZlciAuc2hvd3tcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuLmNvdmVyIC5oaWRle1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyog5a+M5paH5pys57yW6L6R5ZmoICovXFxyXFxuI2VkaXRvcuKAlHdyYXBwZXIge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIHotaW5kZXg6IDEwMDsgLyog5oyJ6ZyA5a6a5LmJICovXFxyXFxufVxcclxcbiN0b29sYmFyLWNvbnRhaW5lciB7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjOyB9XFxyXFxuI2VkaXRvci1jb250YWluZXIgeyBoZWlnaHQ6IDUwMHB4OyB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgXCJAL3V0aWxzL2F1dGguanNcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcIkAvdXRpbHMvcmVxdWVzdFwiO1xyXG5pbXBvcnQgZWRpdG9yIGZyb20gXCJAL3V0aWxzL2VkaXRvclwiO1xyXG5pbXBvcnQge215QWxlcnR9IGZyb20gXCJAL3V0aWxzL2FsZXJ0XCI7XHJcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnZm9ybS1zZXJpYWxpemUnXHJcbmltcG9ydCAnLi9pbmRleC5jc3MnXHJcblxyXG4vKipcclxuICog55uu5qCHMe+8muiuvue9rumikemBk+S4i+aLieiPnOWNlVxyXG4gKiAgMS4xIOiOt+WPlumikemBk+WIl+ihqOaVsOaNrlxyXG4gKiAgMS4yIOWxleekuuWIsOS4i+aLieiPnOWNleS4rVxyXG4gKi9cclxuLy8gMS4xIOiOt+WPlumikemBk+WIl+ihqOaVsOaNrlxyXG5hc3luYyBmdW5jdGlvbiBzZXRDaGFubmxlTGlzdCgpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyh7XHJcbiAgICB1cmw6ICcvdjFfMC9jaGFubmVscydcclxuICB9KVxyXG4gIC8vIDEuMiDlsZXnpLrliLDkuIvmi4noj5zljZXkuK1cclxuICBjb25zdCBodG1sU3RyID0gYDxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD1cIlwiPuivt+mAieaLqeaWh+eroOmikemBkzwvb3B0aW9uPmAgKyByZXMuZGF0YS5jaGFubmVscy5tYXAoaXRlbSA9PiBgPG9wdGlvbiB2YWx1ZT1cIiR7aXRlbS5pZH1cIj4ke2l0ZW0ubmFtZX08L29wdGlvbj5gKS5qb2luKCcnKVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXNlbGVjdCcpLmlubmVySFRNTCA9IGh0bWxTdHJcclxufVxyXG4vLyDnvZHpobXov5DooYzlkI7vvIzpu5jorqTosIPnlKjkuIDmrKFcclxuc2V0Q2hhbm5sZUxpc3QoKVxyXG5cclxuLyoqXHJcbiAqIOebruaghzLvvJrmlofnq6DlsIHpnaLorr7nva5cclxuICogIDIuMSDlh4blpIfmoIfnrb7nu5PmnoTlkozmoLflvI9cclxuICogIDIuMiDpgInmi6nmlofku7blubbkv53lrZjlnKggRm9ybURhdGFcclxuICogIDIuMyDljZXni6zkuIrkvKDlm77niYflubblvpfliLDlm77niYcgVVJMIOe9keWdgFxyXG4gKiAgMi40IOWbnuaYvuW5tuWIh+aNoiBpbWcg5qCH562+5bGV56S677yI6ZqQ6JePICsg5Y+35LiK5Lyg5qCH562+77yJXHJcbiAqL1xyXG4vLyAyLjIg6YCJ5oup5paH5Lu25bm25L+d5a2Y5ZyoIEZvcm1EYXRhXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctZmlsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGFzeW5jIGUgPT4ge1xyXG4gIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXVxyXG4gIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKClcclxuICBmZC5hcHBlbmQoJ2ltYWdlJywgZmlsZSlcclxuICAvLyAyLjMg5Y2V54us5LiK5Lyg5Zu+54mH5bm25b6X5Yiw5Zu+54mHIFVSTCDnvZHlnYBcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyh7XHJcbiAgICB1cmw6ICcvdjFfMC91cGxvYWQnLFxyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBkYXRhOiBmZFxyXG4gIH0pXHJcbiAgLy8gMi40IOWbnuaYvuW5tuWIh+aNoiBpbWcg5qCH562+5bGV56S677yI6ZqQ6JePICsg5Y+35LiK5Lyg5qCH562+77yJXHJcbiAgY29uc3QgaW1nVXJsID0gcmVzLmRhdGEudXJsXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdW5kZWQnKS5zcmMgPSBpbWdVcmxcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm91bmRlZCcpLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZScpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG59KVxyXG4vLyDkvJjljJbvvJrngrnlh7sgaW1nIOWPr+S7pemHjeaWsOWIh+aNouWwgemdolxyXG4vLyDmgJ3ot6/vvJppbWcg54K55Ye7ID0+IOeUqCBKUyDmlrnlvI/op6blj5Hmlofku7bpgInmi6nlhYPntKAgY2xpY2sg5LqL5Lu25pa55rOVXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3VuZGVkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZy1maWxlJykuY2xpY2soKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIOebruaghzPvvJrlj5HluIPmlofnq6Dkv53lrZhcclxuICogIDMuMSDln7rkuo4gZm9ybS1zZXJpYWxpemUg5o+S5Lu25pS26ZuG6KGo5Y2V5pWw5o2u5a+56LGhXHJcbiAqICAzLjIg5Z+65LqOIGF4aW9zIOaPkOS6pOWIsOacjeWKoeWZqOS/neWtmFxyXG4gKiAgMy4zIOiwg+eUqCBBbGVydCDorablkYrmoYblj43ppojnu5Pmnpznu5nnlKjmiLdcclxuICogIDMuNCDph43nva7ooajljZXlubbot7PovazliLDliJfooajpobVcclxuICovXHJcbi8vIDMuMSDln7rkuo4gZm9ybS1zZXJpYWxpemUg5o+S5Lu25pS26ZuG6KGo5Y2V5pWw5o2u5a+56LGhXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZW5kJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBlID0+IHtcclxuICBpZiAoZS50YXJnZXQuaW5uZXJIVE1MICE9PSAn5Y+R5biDJykgcmV0dXJuXHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnQtZm9ybScpXHJcbiAgY29uc3QgZGF0YSA9IHNlcmlhbGl6ZShmb3JtLCB7IGhhc2g6IHRydWUsIGVtcHR5OiB0cnVlIH0pXHJcbiAgLy8g5Y+R5biD5paH56ug55qE5pe25YCZ77yM5LiN6ZyA6KaBIGlkIOWxnuaAp++8jOaJgOS7peWPr+S7peWIoOmZpOaOie+8iGlkIOS4uuS6huWQjue7reWBmue8lui+keS9v+eUqO+8iVxyXG4gIGRlbGV0ZSBkYXRhLmlkXHJcbiAgY29uc29sZS5sb2coZGF0YSlcclxuICAvLyDoh6rlt7HmlLbpm4blsIHpnaLlm77niYflnLDlnYDlubbkv53lrZjliLAgZGF0YSDlr7nosaHkuK1cclxuICBkYXRhLmNvdmVyID0ge1xyXG4gICAgdHlwZTogMSwgLy8g5bCB6Z2i57G75Z6LXHJcbiAgICBpbWFnZXM6IFtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm91bmRlZCcpLnNyY10gLy8g5bCB6Z2i5Zu+54mHIFVSTCDnvZHlnYBcclxuICB9XHJcblxyXG4gIC8vIDMuMiDln7rkuo4gYXhpb3Mg5o+Q5Lqk5Yiw5pyN5Yqh5Zmo5L+d5a2YXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgdXJsOiAnL3YxXzAvbXAvYXJ0aWNsZXMnLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgZGF0YTogZGF0YVxyXG4gICAgfSlcclxuICAgIC8vIDMuMyDosIPnlKggQWxlcnQg6K2m5ZGK5qGG5Y+N6aaI57uT5p6c57uZ55So5oi3XHJcbiAgICBteUFsZXJ0KHRydWUsICflj5HluIPmiJDlip8nKVxyXG4gICAgLy8gMy40IOmHjee9ruihqOWNleW5tui3s+i9rOWIsOWIl+ihqOmhtVxyXG4gICAgZm9ybS5yZXNldCgpXHJcbiAgICAvLyDlsIHpnaLpnIDopoHmiYvliqjph43nva5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3VuZGVkJykuc3JjID0gJydcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3VuZGVkJykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2UnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgIC8vIOWvjOaWh+acrOe8lui+keWZqOmHjee9rlxyXG4gICAgZWRpdG9yLnNldEh0bWwoJycpXHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGxvY2F0aW9uLmhyZWYgPSAnLi4vY29udGVudC9pbmRleC5odG1sJ1xyXG4gICAgfSwgMTUwMClcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIG15QWxlcnQoZmFsc2UsIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSlcclxuICB9XHJcbn0pXHJcblxyXG4gIC8qKlxyXG4gICAqIOebruaghzTvvJrnvJbovpEt5Zue5pi+5paH56ugXHJcbiAgICogIDQuMSDpobXpnaLot7PovazkvKDlj4LvvIhVUkwg5p+l6K+i5Y+C5pWw5pa55byP77yJXHJcbiAgICogIDQuMiDlj5HluIPmlofnq6DpobXpnaLmjqXmlLblj4LmlbDliKTmlq3vvIjlhbHnlKjlkIzkuIDlpZfooajljZXvvIlcclxuICAgKiAgNC4zIOS/ruaUueagh+mimOWSjOaMiemSruaWh+Wtl1xyXG4gICAqICA0LjQg6I635Y+W5paH56ug6K+m5oOF5pWw5o2u5bm25Zue5pi+6KGo5Y2VXHJcbiAgICovXHJcbiAgOyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gNC4yIOWPkeW4g+aWh+eroOmhtemdouaOpeaUtuWPguaVsOWIpOaWre+8iOWFseeUqOWQjOS4gOWll+ihqOWNle+8iVxyXG4gICAgY29uc3QgcGFyYW1zU3RyID0gbG9jYXRpb24uc2VhcmNoXHJcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtc1N0cilcclxuICAgIHBhcmFtcy5mb3JFYWNoKGFzeW5jICh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgIC8vIOW9k+WJjeacieimgee8lui+keeahOaWh+eroCBpZCDooqvkvKDlhaXov4fmnaVcclxuICAgICAgaWYgKGtleSA9PT0gJ2lkJykge1xyXG4gICAgICAgIC8vIDQuMyDkv67mlLnmoIfpopjlkozmjInpkq7mloflrZdcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUgc3BhbicpLmlubmVySFRNTCA9ICfkv67mlLnmlofnq6AnXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbmQnKS5pbm5lckhUTUwgPSAn5L+u5pS5J1xyXG4gICAgICAgIC8vIDQuNCDojrflj5bmlofnq6Dor6bmg4XmlbDmja7lubblm57mmL7ooajljZVcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICB1cmw6IGAvdjFfMC9tcC9hcnRpY2xlcy8ke3ZhbHVlfWBcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAvLyDnu4Tnu4fmiJHku4Xku4XpnIDopoHnmoTmlbDmja7lr7nosaHvvIzkuLrlkI7nu63pgY3ljoblm57mmL7liLDpobXpnaLkuIrlgZrpk7rlnqtcclxuICAgICAgICBjb25zdCBkYXRhT2JqID0ge1xyXG4gICAgICAgICAgY2hhbm5lbF9pZDogcmVzLmRhdGEuY2hhbm5lbF9pZCxcclxuICAgICAgICAgIHRpdGxlOiByZXMuZGF0YS50aXRsZSxcclxuICAgICAgICAgIHJvdW5kZWQ6IHJlcy5kYXRhLmNvdmVyLmltYWdlc1swXSwgLy8g5bCB6Z2i5Zu+54mH5Zyw5Z2AXHJcbiAgICAgICAgICBjb250ZW50OiByZXMuZGF0YS5jb250ZW50LFxyXG4gICAgICAgICAgaWQ6IHJlcy5kYXRhLmlkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOmBjeWOhuaVsOaNruWvueixoeWxnuaAp++8jOaYoOWwhOWIsOmhtemdouWFg+e0oOS4iu+8jOW/q+mAn+i1i+WAvFxyXG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGFPYmopLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgIGlmIChrZXkgPT09ICdyb3VuZGVkJykge1xyXG4gICAgICAgICAgICAvLyDlsIHpnaLorr7nva5cclxuICAgICAgICAgICAgaWYgKGRhdGFPYmpba2V5XSkge1xyXG4gICAgICAgICAgICAgIC8vIOacieWwgemdolxyXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3VuZGVkJykuc3JjID0gZGF0YU9ialtrZXldXHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdW5kZWQnKS5jbGFzc0xpc3QuYWRkKCdzaG93JylcclxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2UnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdjb250ZW50Jykge1xyXG4gICAgICAgICAgICAvLyDlr4zmlofmnKzlhoXlrrlcclxuICAgICAgICAgICAgZWRpdG9yLnNldEh0bWwoZGF0YU9ialtrZXldKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g55So5pWw5o2u5a+56LGh5bGe5oCn5ZCN77yM5L2c5Li65qCH562+IG5hbWUg5bGe5oCn6YCJ5oup5Zmo5YC85p2l5om+5Yiw5Yy56YWN55qE5qCH562+XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPSR7a2V5fV1gKS52YWx1ZSA9IGRhdGFPYmpba2V5XVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSkoKTtcclxuXHJcbi8qKlxyXG4gKiDnm67moIc177ya57yW6L6RLeS/neWtmOaWh+eroFxyXG4gKiAgNS4xIOWIpOaWreaMiemSruaWh+Wtl++8jOWMuuWIhuS4muWKoe+8iOWboOS4uuWFseeUqOS4gOWll+ihqOWNle+8iVxyXG4gKiAgNS4yIOiwg+eUqOe8lui+keaWh+eroOaOpeWPo++8jOS/neWtmOS/oeaBr+WIsOacjeWKoeWZqFxyXG4gKiAgNS4zIOWfuuS6jiBBbGVydCDlj43ppojnu5Pmnpzmtojmga/nu5nnlKjmiLdcclxuICovXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZW5kJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBlID0+IHtcclxuICAvLyA1LjEg5Yik5pat5oyJ6ZKu5paH5a2X77yM5Yy65YiG5Lia5Yqh77yI5Zug5Li65YWx55So5LiA5aWX6KGo5Y2V77yJXHJcbiAgaWYgKGUudGFyZ2V0LmlubmVySFRNTCAhPT0gJ+S/ruaUuScpIHJldHVyblxyXG4gIC8vIOS/ruaUueaWh+eroOmAu+i+kVxyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJ0LWZvcm0nKVxyXG4gIGNvbnN0IGRhdGEgPSBzZXJpYWxpemUoZm9ybSwgeyBoYXNoOiB0cnVlLCBlbXB0eTogdHJ1ZSB9KVxyXG4gIC8vIDUuMiDosIPnlKjnvJbovpHmlofnq6DmjqXlj6PvvIzkv53lrZjkv6Hmga/liLDmnI3liqHlmahcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICB1cmw6IGAvdjFfMC9tcC9hcnRpY2xlcy8ke2RhdGEuaWR9YCxcclxuICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgY292ZXI6IHtcclxuICAgICAgICAgIHR5cGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3VuZGVkJykuc3JjID8gMSA6IDAsXHJcbiAgICAgICAgICBpbWFnZXM6IFtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm91bmRlZCcpLnNyY11cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICBteUFsZXJ0KHRydWUsICfkv67mlLnmlofnq6DmiJDlip8nKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBteUFsZXJ0KGZhbHNlLCBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZWRpdG9yIiwiLy8g5a+M5paH5pys57yW6L6R5ZmoXHJcbi8vIOWIm+W7uue8lui+keWZqOWHveaVsO+8jOWIm+W7uuW3peWFt+agj+WHveaVsFxyXG5jb25zdCB3YW5nRWRpdG9yID0gcmVxdWlyZSgnQHdhbmdlZGl0b3IvZWRpdG9yJyk7XHJcbmNvbnN0IHsgY3JlYXRlRWRpdG9yLCBjcmVhdGVUb29sYmFyIH0gPSB3YW5nRWRpdG9yXHJcblxyXG4vLyDnvJbovpHlmajphY3nva7lr7nosaFcclxuY29uc3QgZWRpdG9yQ29uZmlnID0ge1xyXG4gIC8vIOWNoOS9jeaPkOekuuaWh+Wtl1xyXG4gIHBsYWNlaG9sZGVyOiAn5Y+R5biD5paH56ug5YaF5a65Li4uJyxcclxuICAvLyDnvJbovpHlmajlj5jljJbml7blm57osIPlh73mlbBcclxuICBvbkNoYW5nZShlZGl0b3IpIHtcclxuICAgIC8vIOiOt+WPluWvjOaWh+acrOWGheWuuVxyXG4gICAgY29uc3QgaHRtbCA9IGVkaXRvci5nZXRIdG1sKClcclxuICAgIC8vIOS5n+WPr+S7peWQjOatpeWIsCA8dGV4dGFyZWE+XHJcbiAgICAvLyDkuLrkuoblkI7nu63lv6vpgJ/mlLbpm4bmlbTkuKrooajljZXlhoXlrrnlgZrpk7rlnqtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wdWJsaXNoLWNvbnRlbnQnKS52YWx1ZSA9IGh0bWxcclxuICB9XHJcbn1cclxuXHJcbi8vIOWIm+W7uue8lui+keWZqFxyXG5jb25zdCBlZGl0b3IgPSBjcmVhdGVFZGl0b3Ioe1xyXG4gIC8vIOWIm+W7uuS9jee9rlxyXG4gIHNlbGVjdG9yOiAnI2VkaXRvci1jb250YWluZXInLFxyXG4gIC8vIOm7mOiupOWGheWuuVxyXG4gIGh0bWw6ICc8cD48YnI+PC9wPicsXHJcbiAgLy8g6YWN572u6aG5XHJcbiAgY29uZmlnOiBlZGl0b3JDb25maWcsXHJcbiAgLy8g6YWN572u6ZuG5oiQ5qih5byP77yIZGVmYXVsdCDlhajpg6jvvInvvIhzaW1wbGUg566A5rSB77yJXHJcbiAgbW9kZTogJ2RlZmF1bHQnLCAvLyBvciAnc2ltcGxlJ1xyXG59KVxyXG5cclxuLy8g5bel5YW35qCP6YWN572u5a+56LGhXHJcbmNvbnN0IHRvb2xiYXJDb25maWcgPSB7fVxyXG5cclxuLy8g5Yib5bu65bel5YW35qCPXHJcbmNvbnN0IHRvb2xiYXIgPSBjcmVhdGVUb29sYmFyKHtcclxuICAvLyDkuLrmjIflrprnvJbovpHlmajliJvlu7rlt6XlhbfmoI9cclxuICBlZGl0b3IsXHJcbiAgLy8g5bel5YW35qCP5Yib5bu655qE5L2N572uXHJcbiAgc2VsZWN0b3I6ICcjdG9vbGJhci1jb250YWluZXInLFxyXG4gIC8vIOW3peWFt+agj+mFjee9ruWvueixoVxyXG4gIGNvbmZpZzogdG9vbGJhckNvbmZpZyxcclxuICAvLyDphY3nva7pm4bmiJDmqKHlvI9cclxuICBtb2RlOiAnZGVmYXVsdCcsIC8vIG9yICdzaW1wbGUnXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBlZGl0b3IiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJwdWJsaXNoXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3VudGl0bGVkOFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt1bnRpdGxlZDhcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wic2hhcmVkL2NvbW1vbnNcIixcInNoYXJlZC92ZW5kb3JzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3B1Ymxpc2gvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
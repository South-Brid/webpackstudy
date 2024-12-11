//导入css样式
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import './less.less'
//导入公共代码
import {checkPhone,checkCode} from "../utils/check.js"; //导入check
import {myAlert} from "../utils/alert.js";              //导入弹窗
import myAxios from '../utils/request.js'               //导入axios对象
//引入图片资源
import imgObj from './assets/logo.png'
const theImg = document.createElement('img')
theImg.src = imgObj;
document.querySelector('.login-wrap').appendChild(theImg);
//添加鼠标点击事件
document.querySelector('.btn').addEventListener('click', ()=>{
    const phone = document.querySelector('.login-form [name="mobile"]').value;
    const code = document.querySelector('.login-form [name="code"]').value;
    if(!checkPhone(phone)) {
        myAlert(false,"手机号不符合需求")
        return;
    }
    if (!checkCode(code)) {
        myAlert(false,"验证码不符合需求")
        return;
    }
    myAxios({
        url:"/v1_0/authorizations",
        method:"POST",
        data:{
            mobile:phone,
            code:code,
        }
    }).then((response) => {
        myAlert(true,"登录成功")
        localStorage.setItem('token',response.data.token)
        location.href = '../content/index.html'  //登录成功 进入第二个网页
        console.log(response)
    }).catch((error) => {
        myAlert(false,error.response.data.message)
    })
})

if (process.env === "production") {
    console.log("生产环境")
    console.log = function () {
    }
} else if (process.env === "development") {
    console.log("开发环境")
}
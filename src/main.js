let str = `
/*
*你好,我是一名前端新人
* 接下来我演示一下我的前端功底
* 首先我要准备一个div
*/
#demo{
    border:1px solid red;
    width: 200px;
    height: 200px;
}
/*
 *然后将div变成一个八卦图
 *首先，把 div 变成一个圆
*/
#demo{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#demo{
    background: linear-gradient(to right, #fff, #fff 50%, #000 50%, #000 );
}
/* 加两个神秘的小球 */
#demo::before {
    content: '';
    display: block;
    height: 100px;
    width: 100px;
    margin: auto;
    border-radius: 50%;
    background-color: #000;
    background: radial-gradient(white 0, white 25%, black 25%, black 100%);
}

#demo::after {
    content: '';
    display: block;
    height: 100px;
    width: 100px;
    margin: auto;
    border-radius: 50%;
    background-color: #fff;
    background: radial-gradient(black 0, black 25%, white 25%, white 100%);   
}
`;
let str2 = "";
let n = 1;
let html = document.querySelector("#html");
let style = document.querySelector("#style");
function step() {
  setTimeout(() => {
    if (str[n] === "\n") {
      str2 += "<br/>";
    } else if (str[n] === " ") {
      str2 += "&nbsp";
    } else {
      str2 += str[n];
    }
    html.innerHTML = str2;
    style.innerHTML = str.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (n < str.length - 1) {
      n = n + 1;
      step();
    }
  }, 1);
}
step();

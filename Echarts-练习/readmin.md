### 在vocode编辑器中安装easyLess插件，会自动把less文件编译成cs
 
 ### flexible.js中将页面分为24等份，可以划分为别的，为了适应rem, 我这里设计稿尺寸是1920，为了方便1rem=100px,我项目中这里除以19.2，和教程有区别
  // set 1rem = viewWidth / 10
  function setRemUnit() {
    var rem = docEl.clientWidth / 24;  // 根据
    docEl.style.fontSize = rem + "px";
  }


  ###vscode中安装 Live Server插件，在对应的html文件中右击，选择“vscode-preview-server:launch on browser”,即可实现热更新，不用每次刷新浏览器
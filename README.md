# gulp-stylus-todo
说明：gulp实现前端网页开发任务管理
## 一、搭建开发环境和目录结构
我使用的编辑器是visual studio Code,并且安装Eslint插件便于本地操作命令行，这里我就不具体介绍编辑器和Eslint,下面详细介绍下gulp系列插件的安装：
#### 首先需要在cmd命令行中全局安装gulp，并用查看版本命名检测是否安装成功
```
C:\Users\Administrator>npm install -g gulp
.....
C:\Users\Administrator>gulp -v
[07:50:45] CLI version 3.9.1
```
### 新建项目文件夹组织目录结构
```
dedao_vue_gulp
├─images
├─index.html
├─gulpfile.js
├─stylus
│  ├─common.styl
```
### 使用Eslint终端，安装本地gulp插件
```
D:workspace>dedao_vue_gulp>npm init -y
...
D:workspace>dedao_vue_gulp>yarn add gulp
...
D:workspace>dedao_vue_gulp>yarn add gulp-stylus
...
D:workspace>dedao_vue_gulp>yarn add gulp-browser-sync
...
```
### 生成目录结构
```
dedao_vue_gulp
├─index.html
├─gulpfile.js
├─images
├─node_modules
├─package.json
├─yarn.lock
├─stylus
│  ├─common.styl
```
## 二、gulp配置任务
### 定义任务工作流
 ```
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var stylus = require('gulp-stylus');
var stylusPath = './stylus/*.styl';
```
### 定义stylus任务操作
```
gulp.task('stylus',function(){
    return gulp.src(stylusPath)
           .pipe(stylus())
           .pipe(gulp.dest('dist/css'))
           .pipe(browserSync.stream())
})
```
### 定义browser-sync任务操作
```
gulp.task('watch',function(){
    browserSync.init({
        server:{
            baseDir:'./'
        }
    });
```
### 将任务添加到gulp中管理
```
    var temlateFiles = [
        '*.html'
    ];
    gulp.watch(temlateFiles).on('change',reload);
    gulp.watch(stylusPath,['stylus']);
})
```
### 命令行启动gulp任务管理
```
[07:19:36] Using gulpfile D:\workspace\dedao_vue_gulp\gulpfile.js
[07:19:36] Starting 'watch'...
[07:19:36] Finished 'watch' after 166 ms
[Browsersync] Access URLs:
 --------------------------------------
       Local: http://localhost:3000
    External: http://192.168.1.101:3000
 --------------------------------------
          UI: http://localhost:3001
 UI External: http://192.168.1.101:3001
 --------------------------------------
[Browsersync] Serving files from: ./
```
## 三、BEM规范编写html框架

## 四、stylus编写css样式

## 五、flexiable自适应移动设备调试


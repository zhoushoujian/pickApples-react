# react实现摘苹果的demo

## 此demo实现三大功能
1. 点击摘苹果，会更新当前苹果的数量和当前苹果的总重量  
2. 点击改变重量，会更新当前苹果的总重量和当前苹果的总重量  
3. 点击吃掉，会更新吃掉苹果的数量和重量，当前苹果数量和重量  

## Build Setup

``` bash
# 下载或克隆下来，然后安装依赖
npm install

# 开发预览
npm run start

# 打包发布，生成的文件在build文件夹中
npm run build  
npm install -g serve  
serve -s build  
http://localhost:5000  

# lint
npm run eslint  
```

## Tips
项目默认采用tsx文件，如需加载jsx文件，请于./src/index.js修改Apple组件的引入路径

## 效果图
![效果图](https://github.com/zhoushoujian/pickApples-react/blob/master/view.png)

## 其他版本
```redux```: https://github.com/zhoushoujian/pickApples-redux  
```vue```: https://github.com/zhoushoujian/pickApples-vue  
# Projoct改造中

## 2021/6/1

涉及到this时，不要轻易靠近胖箭头函数，会变得不幸

试图用jsdom解决node.js中没有document及windows等dom的问题，但是浏览器不支持require 呜呜 到处都是bug，在页面加载出来之前js就加载了，各种null导致无法使用addEventListener（暂时先调成了注释）

不学了，考试了，啥也不会呜呜呜

## 2021/6/4

把一开始的动态添加改成了静态添加，重新打包了一下就好了，我大为震撼

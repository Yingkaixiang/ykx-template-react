# React Template

基于 `React` 的项目开发脚手架。

## 创建目的

快速进行项目开发。

## 技术栈

### 基本

- React
- TypeScript

### 路由

#### [React Router v4](https://reacttraining.com/react-router/)

React Router v4 摒弃了之前版本的集中式静态路由配置而改成了动态配置，具体可以查看官方文档或自行了解这种方式的利与弊。

但是我们依然可以通过使用官方提供的 [`react-router-config`](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config) 进行集中式的配置。这样可以方便我们管理各个和路由数据挂钩的组件，如导航栏、侧边栏、面包屑等。

##### 如何配置

在 `@/config/routes.tsx` 中进行路由信息的配置。代码中展示了如何使用集中式的路由配置信息渲染面包屑以及导航栏。

### 样式

- less
- react-css-module
- css module
- postcss

### 状态管理

- Redux
- Redux-saga

### 请求

- axios

### 按需加载

- react-loadable

### 测试

- Jest
- enzyme

### 代码风格

- tslint
- prettier
- husky
- lint-staged
- commitizen

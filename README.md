# React Template

基于 `React` 的项目开发脚手架。项目基于 `create-react-app` 进行搭建。

## 创建目的

快速进行项目开发。

## 代理请求

通过在 `package.json` 中进行 `proxy` 的配置既可以使用请求代理。

## Todo

- 命令行快速创建组件，组件包含的文件为 `index.tsx` `Container.tsx` `[Component].tsx` `[Component].less`。
- 升级 React 版本并添加使用 Hooks 的例子。
- 移除对于 `react-css-module` 的依赖，原因如下：
  - [查看 issue](https://github.com/facebook/react/issues/14494#issuecomment-466983049)
  - [没有外部 issue 且更新频率很低](https://github.com/gajus/react-css-modules)

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

#### 单元测试

- enzyme

#### e2e

- puppeteer

### 代码风格

- tslint
- prettier
- husky
- lint-staged
- commitizen
- csscomb

### 构建

- docker
- TravisCI

### 其他

- antd

如果你使用 CSS Module 需要在 `webpack` 中进行区分，否则会导致 antd 的样式被解析成 css module.

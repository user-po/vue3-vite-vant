# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

# 路由

index.ts //路由管理主页

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

# 静态资源

assets
img //图片资源
icon // icon 图标类图片
css //样式资源
style.css //公用样式

# api 接口

api
user.ts
task.ts
contract.ts
message.ts
my.ts
talent.ts

# 路由

router
index.ts

# 项目页面结构

views
login
index.vue
serviceAgree.vue
privacyPolicy.vue
task
index.vue
search.vue
detail.vue
companySource.vue
contract
index.vue
details.vue
progress.vue
message
index.vue
systemList.vue
systemDetails.vue
talk.vue
my
index.vue
user
index.vue
authReal.vue
certified.vue
identitySwitch.vue
set
index.vue
feedback
index.vue
account
index.vue
advance.vue
coinExplain.vue
depositExplain.vue
resume
index.vue
preview.vue
collect
index.vue

      talent
          index.vue
          details.vue

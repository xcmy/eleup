## electron-vue 项目更新测试

## 目录

- [Project development](#project-development)
- [Project update](#project-update)

### Project development

1.使用脚手架生成项目

```
vue init simulatedgreg/electron-vue my-project
```

2.进入项目目录，安装依赖（建议使用yarn）

```
yarn
```

3.项目运行

```
yarn run dev
```

4.项目打包
```
yarn run build
```


### Project update

[AppVeyor官网](https://ci.appveyor.com/)

- 在AppVeyor 上创建一个帐户
- 链接到你 electron-vue 项目的 GitHub 仓库
- 访问 [https://github.com/settings/tokens]((https://github.com/settings/tokens)) 并点击 生成新令牌 (Generate new token) (同样的令牌可用于 Travis CI 和 AppVeyor 二者)
- 设置一个 令牌描述 (Token description)
- 检查 public_repo 的范围
- 点击 生成令牌 (Generate token)
- 复制你的新令牌并保存以备以后使用
- 打开 Travis CI 或 AppVeyor 上的仓库设置选项，添加一个新的 环境变量 (Environment Variable)
- 将变量的名称设置为 GH_TOKEN
- 将变量的值设置为刚刚创建的 GitHub 的访问令牌
- 保存 (Save) 新变量并确保加密措施已启用

现在，所有的事情应该都配置完毕了。Travis CI / AppVeyor 在默认情况下会监测到任何到你的 master 分支的推送。
推送完毕后，Travis CI / AppVeyor 将克隆你的仓库到其服务器并开始构建过程。在最后阶段，
electron-builder 可以看到环境变量 GH_TOKEN，并创建一个发布草稿，并将生成的程序上传到你公共的 GitHub 仓库上。
现在，你可以编辑发布草稿，然后发布出去。发布了发行版后，通过更新你的 package.json，你可以确保将来的版本标上新版本号。



在`package.json`文件中添加`electron-updater`，并更新依赖






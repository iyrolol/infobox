# infobox

🐾 A minimalist, self-hosted profile builder.

infobox 是一个静态生成器，用 YAML 写个人信息.

---

## ✅ 特性（当前版本）

- 使用 `user.yaml` 配置基本信息
- 使用 EJS 模板渲染页面（默认 minimalist 主题）
- 一条命令构建静态网站至 `public/`
- 所有内容由用户控制，无 UI 编辑器，无数据库

---

## 🚀 快速开始

```bash
git clone https://github.com/1zkn/infobox
cd infobox
npm install
cp data/example.user.yaml data/user.yaml
node build.js
```
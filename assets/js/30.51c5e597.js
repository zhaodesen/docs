(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{497:function(s,t,a){s.exports=a.p+"assets/img/git.e193fd4b.png"},543:function(s,t,a){"use strict";a.r(t);var n=a(27),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"图解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#图解"}},[s._v("#")]),s._v(" 图解")]),s._v(" "),n("p",[n("img",{attrs:{src:a(497),alt:"git"}})]),s._v(" "),n("h2",{attrs:{id:"基本命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本命令"}},[s._v("#")]),s._v(" 基本命令")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init              "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化Git仓库 空目录 or 有文件的目录都可以")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看文件状态")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("             "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将所有文件添加到暂存区")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"描述"')]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交到版本库,生成版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log               "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有commit记录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有 commit和reset的记录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --list     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查已有的配置信息")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"版本回退"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#版本回退"}},[s._v("#")]),s._v(" 版本回退")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# HEAD     当前版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# HEAD^    上个版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# HEAD~10  往上 10 个版本")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --soft HEAD^      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回退到上个版本,会保留源码(在暂存区)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard HEAD^      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回退到上个版本,不保留源码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --mixed HEAD^     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回退到上个版本,保留源码(在工作区)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset HEAD^             "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回退到上个版本,保留源码(在工作区)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard 3f77907    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据 commit id 回退")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"分支"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[s._v("#")]),s._v(" 分支")]),s._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[s._v("正在开发新功能,已有功能出现 BUG,怎么办?")]),s._v(" "),n("ol",[n("li",[s._v("在开发新功能时,在主分支上创建一个"),n("code",[s._v("dev分支")]),s._v("来开发新功能")]),s._v(" "),n("li",[s._v("如果之前的功能有BUG,可以切换回主分支创建一个"),n("code",[s._v("bug分支")]),s._v("去处理")]),s._v(" "),n("li",[s._v("处理完合并到主分支,然后再切换到dev分支上继续开发")]),s._v(" "),n("li",[s._v("开发完毕后要合并到主分支,这时会有冲突,因为dev分支指向的是合并修复bug之前的主分支,找到冲突的文件手动处理,然后再提交")])])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),n("ul",[n("li",[s._v("默认主分支名:"),n("code",[s._v("master")])]),s._v(" "),n("li",[s._v("各个分支互不影响")])])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch dev        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建 dev 分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout dev      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换 dev 分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b dev   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建并切换到dev分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge dev         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 合并分支(必须切换到主分支合并)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d dev     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除分支")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"github"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[s._v("#")]),s._v(" GitHub")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin 仓库地址    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为远程仓库地址起个别名")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git remote 查看远程库信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# origin 是仓库地址的别名")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将本地代码推送到 origin 仓库 master 主分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin dev       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将本地代码推送到 origin 仓库 dev 分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone 仓库地址            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 克隆远程仓库到本地")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果远程库有多个分支, git branch 只能看到主分支,其实是有的,直接切换就行")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"ssh"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[s._v("#")]),s._v(" SSH")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置个人信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Luke.Deng"')]),s._v("                  \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xiangshuo1992@gmail.com"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\nssh-keygen -t rsa -C "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"youremail@example.com"')]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建SSH Key,会生成 id_rsa 和 id_rsa.pub ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.ssh/id_rsa.pub                           "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制公共密匙")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"解决问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决问题"}},[s._v("#")]),s._v(" 解决问题")]),s._v(" "),n("blockquote",[n("p",[s._v("在 dev 分支上干活,一定要保证 dev 的代码与主分支的代码保持一致,版本不能落后主分支,如果主分支有新版本,dev 的代码就不是最新的了")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge master  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将主分支的代码合并到当前分支")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取主分支的代码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 等同于")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch origin master     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将远程库的代码拉到版本库")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge origin/master     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将版本库的该分支的代码合并到工作区")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# origin/master表示它是从远程库拉取的分支,存在版本库中")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),n("p",[s._v("开发完毕,将 dev 分支合并到主分支,push 到远程库,将主分支合并到 dev 分支,push 到远程库")])]),s._v(" "),n("blockquote",[n("p",[s._v("在公司写代码提交到了版本库但没有 push 到远程库,回到家没办法获取只好写点其他的功能并 push 到了远程库,第二天回到公司,拉取在家写的代码就会与本地未 push 到远程库的代码自动合并,同一行被改动可能会产生合并冲突,这时可以根据提示手动解决冲突,解决完毕继续开发,开发完毕 push 到远程库")])]),s._v(" "),n("h2",{attrs:{id:"rebase-变基"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rebase-变基"}},[s._v("#")]),s._v(" rebase(变基)")]),s._v(" "),n("blockquote",[n("p",[s._v("使 git 记录简洁")])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("案例一")]),s._v(" "),n("p",[s._v("在一个分支上做一个功能,可能会产生很多提交记录,显得很臃肿,老板只想看初始代码和完成后的代码,"),n("code",[s._v("rebase")]),s._v("可以将多个记录整合成一个记录")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase -i 版本号      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最新版本号与该版本号区间的版本合并")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase -i HEAD~3      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从当前最新版本开始找最近的3个版本合并")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 已经提交到远程仓库的版本建议不要使用此命令合并")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("案例二")]),s._v(" "),n("p",[s._v("主分支有新的版本,但曾基于之前版本创建过 dev 分支,dev 分支也有新提交的版本,这时想合并,可以将 dev 分支的代码强插到主分支")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先切到dev分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase master   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 dev 分支的代码强插到主分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 有可能出现冲突,先解决冲突,然后`git add`,然后git rebase --continue")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到主分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge dev\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强插是一条直线 看不出来合并的痕迹,而使用之前的合并方法有层级")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --graph --pretty"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("format:"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%h %s"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("案例三")]),s._v(" "),n("p",[s._v("本地分支代码没提交,远程仓库的该分支有新提交的代码,使用"),n("code",[s._v("pull")]),s._v("命令的话,会合并,可能会有冲突,而且在提交记录中会出现分叉")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin dev\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 替换为")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch origin dev      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将远程库的代码拉到版本库")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase origin/dev     \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"给开源软件贡献代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#给开源软件贡献代码"}},[s._v("#")]),s._v(" 给开源软件贡献代码")]),s._v(" "),n("ol",[n("li",[n("code",[s._v("Fork")]),s._v("该项目,意思是将别人的项目拷贝到自己的仓库")]),s._v(" "),n("li",[s._v("将其拉到本地,进行修改,最后 "),n("code",[s._v("push")])]),s._v(" "),n("li",[s._v("给源代码作者提交修复 bug 的申请(点击"),n("code",[s._v("new pull request")]),s._v(")")])]),s._v(" "),n("h2",{attrs:{id:"配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),n("p",[s._v("项目配置文件(当前项目下"),n("code",[s._v(".git")]),s._v("目录下"),n("code",[s._v("config")]),s._v("文件)")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --local user.name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"李四"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --local user.email "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lisi@xx.com"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("全局配置文件("),n("code",[s._v("C:\\Users\\86187")]),s._v("下"),n("code",[s._v(".gitconfig")]),s._v("文件)")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"李四"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lisi@xx.com"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ul",[n("li",[s._v("系统配置文件("),n("code",[s._v("/etc/gitconfig")]),s._v(")")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --system user.name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"李四"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --system user.email "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lisi@xx.com"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意: 需要root权限")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"忽略文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#忽略文件"}},[s._v("#")]),s._v(" 忽略文件")]),s._v(" "),n("p",[n("code",[s._v(".gitignore")]),s._v("文件为忽略文件,忽略 未 add 在工作区的文件")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("index.html       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略index.html  ")]),s._v("\ndetails.html     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略details.html ")]),s._v("\n*.html           "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略所有.html文件")]),s._v("\n.gitignore       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略自身")]),s._v("\nfiles/     \t\t\t "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略files目录下所有文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("index.html\t\t\t "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 除了index.html以外")]),s._v("\n*.py"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("c"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略所有.pyc .pya .pyd")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
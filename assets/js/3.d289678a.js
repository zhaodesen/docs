(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{366:function(s,t,e){s.exports=e.p+"assets/img/invite.3efa3197.png"},367:function(s,t,e){s.exports=e.p+"assets/img/organization.943e370c.png"},368:function(s,t,e){s.exports=e.p+"assets/img/reviews.b01a73e6.png"},387:function(s,t,e){"use strict";e.r(t);var n=e(27),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("ol",[n("li",[s._v("先在本地git初始化项目,push到远程库")]),s._v(" "),n("li",[s._v("邀请队友")])]),s._v(" "),n("ul",[n("li",[s._v("方式一: 通过仓库邀请\n"),n("img",{attrs:{src:e(366),alt:""}})]),s._v(" "),n("li",[s._v("方式二: 创建组织邀请(本次使用这个)\n"),n("img",{attrs:{src:e(367),alt:""}})])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a v1 -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"第一版"')]),s._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为当前版本打标签,名为 v1 后跟描述")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --tags        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送标签,这时远程仓库就有了tags,v1标签")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b dev          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建并切换到dev分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin dev          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将当前版本项目推送到远程库的dev分支")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[s._v("同事小张入场开发新功能\n"),n("ul",[n("li",[s._v("clone项目")]),s._v(" "),n("li",[s._v("切换到dev分支")]),s._v(" "),n("li",[s._v("创建并切换到ddz分支")]),s._v(" "),n("li",[s._v("开发期间正常add/commit/push origin dev")]),s._v(" "),n("li",[s._v("开发完毕,通过"),n("code",[s._v("New pull requests")]),s._v("让组长"),n("code",[s._v("reviews")]),s._v(",需要进行如下配置,意思你想要合并到dev分支需要让组长"),n("code",[s._v("reviews")]),s._v(" "),n("ul",[n("li",[n("img",{attrs:{src:e(368),alt:""}})])])]),s._v(" "),n("li",[s._v("组长收到检查完毕,没问题就可以让这个分支合并了,合并完毕组长本地要在dev分支下拉取最新的代码")])])]),s._v(" "),n("li",[s._v("进入测试环节,在"),n("code",[s._v("dev")]),s._v("分支下创建并切换"),n("code",[s._v("release")]),s._v("分支,然后"),n("code",[s._v("git push origin release")]),s._v(",修修改改")]),s._v(" "),n("li",[s._v("将"),n("code",[s._v("release")]),s._v("分支合并到主分支之前,也要"),n("code",[s._v("New pull requests")])]),s._v(" "),n("li",[s._v("远程仓库合并之后,本地库也要合并"),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout dev           "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到dev分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge release          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将release分支合并到dev分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d release      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除 release 分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到主分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取主分支最新代码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a v2 -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"第二版"')]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打标签")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --tags     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将标签推送到远程仓库")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);
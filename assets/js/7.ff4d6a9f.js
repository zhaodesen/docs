(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{407:function(_,v,e){_.exports=e.p+"assets/img/http-and-tcp.1277f342.png"},408:function(_,v,e){_.exports=e.p+"assets/img/http-request.b8993c73.png"},409:function(_,v,e){_.exports=e.p+"assets/img/response.3e30476a.png"},410:function(_,v,e){_.exports=e.p+"assets/img/redirect.01db98e0.png"},411:function(_,v,e){_.exports=e.p+"assets/img/cache.5fc2f88a.png"},412:function(_,v,e){_.exports=e.p+"assets/img/cookie.d9d6cefe.png"},413:function(_,v,e){_.exports=e.p+"assets/img/full-http-response.1b49976a.png"},474:function(_,v,e){"use strict";e.r(v);var t=e(27),s=Object(t.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[t("code",[_._v("HTTP")]),_._v(" 协议，建立在 "),t("code",[_._v("TCP")]),_._v(" 连接基础之上。"),t("code",[_._v("HTTP")]),_._v(" 是一种允许浏览器向服务器获取资源的协议，是"),t("code",[_._v("Web")]),_._v("的基础，通常由浏览器发起请求，用来获取不同类型的文件，例如"),t("code",[_._v("HTML")]),_._v("文件、"),t("code",[_._v("CSS")]),_._v(" 文件、"),t("code",[_._v("JavaScript")]),_._v("文件、图片、视频等。此外，"),t("code",[_._v("HTTP")]),_._v("也是浏览器使用最广的协议，所以要想学好浏览器，就要先深入了解 "),t("code",[_._v("HTTP")]),_._v("。")]),_._v(" "),t("h2",{attrs:{id:"浏览器端发起-http-请求流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器端发起-http-请求流程"}},[_._v("#")]),_._v(" 浏览器端发起 "),t("code",[_._v("HTTP")]),_._v(" 请求流程")]),_._v(" "),t("p",[_._v("浏览器地址栏里键入"),t("code",[_._v("https://www.baidu.com/")]),_._v(",浏览器会完成哪些动作呢?")]),_._v(" "),t("blockquote",[t("p",[t("code",[_._v("https")]),_._v(": 协议类型\n"),t("code",[_._v("//")]),_._v(" : 层级 URL 标记符号\n"),t("code",[_._v("www.baidu.com")]),_._v(" : 域名")])]),_._v(" "),t("h3",{attrs:{id:"_1-构建请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-构建请求"}},[_._v("#")]),_._v(" 1. 构建请求")]),_._v(" "),t("p",[_._v("首先，浏览器构建请求行信息（如下所示），构建好后，浏览器准备发起网络请求。")]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("GET /index.html HTTP1.1\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br")])]),t("h3",{attrs:{id:"_2-查找缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-查找缓存"}},[_._v("#")]),_._v(" 2. 查找缓存")]),_._v(" "),t("p",[_._v("在真正发起网络请求之前，浏览器会先在浏览器缓存中查询是否有要请求的文件。其中，浏览器缓存是一种在本地保存资源副本，以供下次请求时直接使用的技术。\n当浏览器发现请求的资源已经在浏览器缓存中存有副本，它会拦截请求，返回该资源的副本，并直接结束请求，而不会再去源服务器重新下载。这样做的好处有：")]),_._v(" "),t("ul",[t("li",[_._v("缓解服务器端压力，提升性能（获取资源的耗时更短了）")]),_._v(" "),t("li",[_._v("对于网站来说，缓存是实现快速资源加载的重要组成部分")])]),_._v(" "),t("p",[_._v("如果缓存查找失败，就会进入网络请求过程了。")]),_._v(" "),t("h3",{attrs:{id:"_3-准备-ip-地址和端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-准备-ip-地址和端口"}},[_._v("#")]),_._v(" 3. 准备 "),t("code",[_._v("IP")]),_._v(" 地址和端口")]),_._v(" "),t("p",[_._v("因为浏览器使用"),t("code",[_._v("HTTP")]),_._v(" 协议作为应用层协议，用来封装请求的文本信息；并使用"),t("code",[_._v("TCP/IP")]),_._v(" 作传输层协议将它发到网络上，所以在 "),t("code",[_._v("HTTP")]),_._v("工作开始之前，浏览器需要通过 "),t("code",[_._v("TCP")]),_._v("与服务器建立连接。也就是说"),t("code",[_._v("HTTP")]),_._v("的内容是通过"),t("code",[_._v("TCP")]),_._v("的传输数据阶段来实现的，可以结合下图更好地理解这二者的关系。\n"),t("img",{attrs:{src:e(407),alt:"http-and-tcp"}})]),_._v(" "),t("p",[_._v("数据包都是通过"),t("code",[_._v("IP")]),_._v("地址传输给接收方的。由于 "),t("code",[_._v("IP")]),_._v(" 地址是数字标识，难以记忆，但使用域名（"),t("code",[_._v("www.baidu.com")]),_._v("）就好记多了，所以基于这个需求又出现了一个服务，负责把域名和"),t("code",[_._v("IP")]),_._v("地址做一一映射关系。这套域名映射为 "),t("code",[_._v("IP")]),_._v("的系统就叫做"),t("strong",[_._v("域名系统")]),_._v("，简称"),t("code",[_._v("DNS")]),_._v("（"),t("code",[_._v("Domain Name System")]),_._v("）。")]),_._v(" "),t("p",[_._v("浏览器首先会请求 "),t("code",[_._v("DNS")]),_._v("返回域名对应的"),t("code",[_._v("IP")]),_._v("。浏览器还提供了"),t("code",[_._v("DNS")]),_._v("数据缓存服务，如果某个域名已经解析过，就会缓存解析的结果，以供下次查询时直接使用，这样也会减少一次网络请求。")]),_._v(" "),t("p",[_._v("拿到 "),t("code",[_._v("IP")]),_._v(" 之后，接下来就需要获取端口号了。通常情况下，如果"),t("code",[_._v("URL")]),_._v(" 没有特别指明端口号，那么 "),t("code",[_._v("HTTP")]),_._v(" 协议默认是"),t("code",[_._v("80")]),_._v(" 端口。")]),_._v(" "),t("h3",{attrs:{id:"_4-等待tcp-队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-等待tcp-队列"}},[_._v("#")]),_._v(" 4. 等待"),t("code",[_._v("TCP")]),_._v(" 队列")]),_._v(" "),t("p",[t("code",[_._v("IP")]),_._v("地址和端口都准备好了，还不能建立 "),t("code",[_._v("TCP")]),_._v(" 连接,因为"),t("code",[_._v("Chrome")]),_._v("有个机制，同一个域名同时最多只能建立 "),t("code",[_._v("6")]),_._v("个 "),t("code",[_._v("TCP")]),_._v(" 连接，如果在同一个域名下同时有"),t("code",[_._v("10")]),_._v("个请求发生，那么其中"),t("code",[_._v("4")]),_._v("个请求会进入排队等待状态，直至进行中的请求完成。如果当前请求数量少于 "),t("code",[_._v("6")]),_._v("，会直接进入下一步，建立"),t("code",[_._v("TCP")]),_._v(" 连接。")]),_._v(" "),t("h3",{attrs:{id:"_5-建立tcp连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-建立tcp连接"}},[_._v("#")]),_._v(" 5. 建立"),t("code",[_._v("TCP")]),_._v("连接")]),_._v(" "),t("p",[_._v("排队等待结束之后， "),t("code",[_._v("HTTP")]),_._v("工作开始之前，浏览器通过"),t("code",[_._v("TCP")]),_._v("与服务器三次握手建立连接")]),_._v(" "),t("h3",{attrs:{id:"_6-发送-http-请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-发送-http-请求"}},[_._v("#")]),_._v(" 6. 发送 "),t("code",[_._v("HTTP")]),_._v(" 请求")]),_._v(" "),t("p",[_._v("一旦建立了"),t("code",[_._v("TCP")]),_._v(" 连接，浏览器就可以和服务器进行通信了。而 "),t("code",[_._v("HTTP")]),_._v("中的数据正是在这个通信过程中传输的。")]),_._v(" "),t("p",[_._v("可以结合下图来理解，浏览器是如何发送请求信息给服务器的。\n"),t("img",{attrs:{src:e(408),alt:"http-request"}})]),_._v(" "),t("p",[_._v("首先浏览器会向服务器发送请求行，它包括了:")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("请求方法")])]),_._v(" "),t("li",[t("strong",[_._v("请求 "),t("code",[_._v("URI")])]),_._v("（"),t("code",[_._v("Uniform Resource Identifier")]),_._v("）")]),_._v(" "),t("li",[t("strong",[t("code",[_._v("HTTP")]),_._v(" 版本协议")]),_._v("。")])]),_._v(" "),t("p",[_._v("发送请求行，就是告诉服务器浏览器需要什么资源，最常用的请求方法是"),t("code",[_._v("Get")])]),_._v(" "),t("p",[_._v("另外一个常用的请求方法是"),t("code",[_._v("POST")]),_._v("，用于发送一些数据给服务器，通过请求体来发送。")]),_._v(" "),t("p",[_._v("在浏览器发送请求行命令之后，还要以请求头形式把浏览器的一些基础信息告诉服务器。比如:")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("浏览器所使用的操作系统")])]),_._v(" "),t("li",[t("strong",[_._v("浏览器内核等信息")])]),_._v(" "),t("li",[t("strong",[_._v("当前请求的域名信息")])]),_._v(" "),t("li",[t("strong",[_._v("浏览器端的 "),t("code",[_._v("Cookie")]),_._v(" 信息")])]),_._v(" "),t("li",[t("strong",[_._v("...")])])]),_._v(" "),t("h2",{attrs:{id:"服务器端处理-http-请求流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器端处理-http-请求流程"}},[_._v("#")]),_._v(" 服务器端处理 "),t("code",[_._v("HTTP")]),_._v(" 请求流程")]),_._v(" "),t("p",[t("code",[_._v("HTTP")]),_._v("的请求信息被送达了服务器。服务器会根据浏览器的请求信息来准备相应的内容。")]),_._v(" "),t("h3",{attrs:{id:"_1-返回请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-返回请求"}},[_._v("#")]),_._v(" 1. 返回请求")]),_._v(" "),t("p",[_._v("通过工具软件 "),t("code",[_._v("curl")]),_._v("来查看返回请求数据")]),_._v(" "),t("blockquote",[t("p",[_._v("windows 内置了"),t("code",[_._v("curl")])])]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("curl -i  https:/www.baidu.com/\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:e(409),alt:"response"}})]),_._v(" "),t("p",[_._v("首先服务器会返回响应行，包括:")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("协议版本")])]),_._v(" "),t("li",[t("strong",[_._v("状态码")])])]),_._v(" "),t("p",[_._v("并不是所有的请求都可以被服务器处理，一些无法处理或者处理出错的信息,服务器会通过请求行的状态码来告诉浏览器它的处理结果")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("状态码"),t("code",[_._v("200")])]),_._v(" 表示处理成功")]),_._v(" "),t("li",[t("strong",[_._v("状态码"),t("code",[_._v("404")])]),_._v(" 表示没有找到页面")])]),_._v(" "),t("p",[_._v("随后，正如浏览器会随同请求发送请求头一样，服务器也会随同响应向浏览器发送响应头。响应头包含了:服务器自身的一些信息，比如服务器生成返回数据的时间、返回的数据类型（"),t("code",[_._v("JSON")]),_._v("、"),t("code",[_._v("HTML")]),_._v("、流媒体等类型），以及服务器要在客户端保存的 "),t("code",[_._v("Cookie")]),_._v(" 等信息。")]),_._v(" "),t("p",[_._v("发送完响应头后，服务器就可以继续发送响应体的数据，通常，响应体就包含了"),t("code",[_._v("HTML")]),_._v("的实际内容。")]),_._v(" "),t("h3",{attrs:{id:"_2-断开连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-断开连接"}},[_._v("#")]),_._v(" 2. 断开连接")]),_._v(" "),t("p",[_._v("通常情况下，一旦服务器向客户端返回了请求数据，它就要关闭 "),t("code",[_._v("TCP")]),_._v(" 连接。不过如果浏览器或者服务器在其头信息中加入了：")]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("Connection:Keep-Alive\n\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br")])]),t("p",[_._v("那么"),t("code",[_._v("TCP")]),_._v(" 连接在发送后将仍然保持打开状态，这样浏览器就可以继续通过同一个 "),t("code",[_._v("TCP")]),_._v(" 连接发送请求。保持 "),t("code",[_._v("TCP")]),_._v(" 连接可以省去下次请求时需要建立连接的时间，提升资源加载速度。比如，一个 "),t("code",[_._v("Web")]),_._v("页面中内嵌的图片就都来自同一个"),t("code",[_._v("Web")]),_._v(" 站点，如果初始化了一个持久连接，就可以复用该连接，以请求其他资源，而不需要重新再建立新的 "),t("code",[_._v("TCP")]),_._v(" 连接。")]),_._v(" "),t("h3",{attrs:{id:"_3-重定向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-重定向"}},[_._v("#")]),_._v(" 3. 重定向")]),_._v(" "),t("p",[_._v("当你在浏览器中访问一个网址，发现最终打开的页面地址与之不同,说明出现了重定向操作")]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("curl -I geekbang.org\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br")])]),t("blockquote",[t("p",[_._v("-I 表示只需要获取响应头和响应行数据")])]),_._v(" "),t("p",[t("img",{attrs:{src:e(410),alt:"redirect"}})]),_._v(" "),t("p",[_._v("响应行返回的状态码是 "),t("code",[_._v("301")]),_._v("，表示告诉浏览器，需要重定向到另外一个网址，而需要重定向的网址正是包含在响应头的 "),t("code",[_._v("Location")]),_._v(" 字段中，接下来，浏览器获取 Location 字段中的地址，并使用该地址重新导航")]),_._v(" "),t("p",[_._v("不过也不要认为这种跳转是必然的。如果你打开 "),t("code",[_._v("https://12306.cn")]),_._v("，你会发现这个站点是打不开的。这是因为 "),t("code",[_._v("12306")]),_._v("的服务器并没有处理跳转，所以必须要手动输入完整的"),t("code",[_._v("https://www.12306.com")]),_._v("才能打开页面。")]),_._v(" "),t("h2",{attrs:{id:"问题解答"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题解答"}},[_._v("#")]),_._v(" 问题解答")]),_._v(" "),t("h3",{attrs:{id:"_1-为什么很多站点第二次打开速度会很快"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么很多站点第二次打开速度会很快"}},[_._v("#")]),_._v(" 1. 为什么很多站点第二次打开速度会很快？")]),_._v(" "),t("p",[_._v("如果第二次页面打开很快，主要原因是第一次加载页面过程中，缓存了一些耗时的数据。")]),_._v(" "),t("p",[t("strong",[t("code",[_._v("DNS")]),_._v("缓存")]),_._v("和"),t("strong",[_._v("页面资源缓存")]),_._v("这两块数据是会被浏览器缓存的。"),t("code",[_._v("DNS")]),_._v("缓存主要是在浏览器本地把对应的 "),t("code",[_._v("IP")]),_._v(" 和域名关联起来")]),_._v(" "),t("p",[_._v("重点看下浏览器资源缓存，下面是缓存处理的过程：\n"),t("img",{attrs:{src:e(411),alt:"cache"}})]),_._v(" "),t("p",[_._v("当服务器返回"),t("code",[_._v("HTTP")]),_._v("响应头给浏览器时，浏览器是通过响应头中的"),t("code",[_._v("Cache-Control")]),_._v(" 字段来设置是否缓存该资源。通常，我们还需要为这个资源设置一个缓存过期时长，而这个时长是通过 "),t("code",[_._v("Cache-Control")]),_._v(" 中的 "),t("code",[_._v("Max-age")]),_._v(" 参数来设置的，比如上图设置的缓存过期时间是 "),t("code",[_._v("2000")]),_._v(" 秒。")]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("Cache-Control:Max-age=2000\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br")])]),t("p",[_._v("在该缓存资源还未过期的情况下, 如果再次请求该资源，会直接返回缓存中的资源给浏览器。")]),_._v(" "),t("p",[_._v("如果缓存过期了，浏览器则会继续发起网络请求，并且在"),t("code",[_._v("HTTP")]),_._v("请求头中带上：")]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v('If-None-Match:"4f80f-13c-3a1xb12a"\n')])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br")])]),t("p",[_._v("服务器收到请求头后，会根据 "),t("code",[_._v("If-None-Match")]),_._v(" 的值来判断请求的资源是否有更新。")]),_._v(" "),t("ul",[t("li",[_._v("如果没有更新，返回 "),t("code",[_._v("304")]),_._v(" 状态码，相当于服务器告诉浏览器：“这个缓存可以继续使用，这次就不重复发送数据给你了。”")]),_._v(" "),t("li",[_._v("如果资源有更新，服务器就直接返回最新资源给浏览器。")])]),_._v(" "),t("h3",{attrs:{id:"_2-登录状态是如何保持的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-登录状态是如何保持的"}},[_._v("#")]),_._v(" 2. 登录状态是如何保持的？")]),_._v(" "),t("ul",[t("li",[_._v("用户填入用户名和密码，点击登录。提交用户登录信息给服务器。")]),_._v(" "),t("li",[_._v("服务器接收到浏览器提交的信息之后，验证用户登录信息，生成表示用户身份的字符串，并把它写到响应头的"),t("code",[_._v("Set-Cookie")]),_._v("字段里，然后把响应头发送给浏览器。")])]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("Set-Cookie: UID=3431uad;\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br")])]),t("ul",[t("li",[_._v("浏览器接收到服务器的响应头后，解析响应头，将 "),t("code",[_._v("Set-Cookie")]),_._v("字段的情况，保存到本地。")]),_._v(" "),t("li",[_._v("当用户再次访问时，浏览器会在发起请求之前，读取"),t("code",[_._v("Cookie")]),_._v("数据，把数据写进请求头里的"),t("code",[_._v("Cookie")]),_._v("字段里（如下所示），然后浏览器再将请求头发送给服务器")])]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("Cookie: UID=3431uad;\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br")])]),t("ul",[t("li",[_._v("服务器在收到 "),t("code",[_._v("HTTP")]),_._v("请求头数据之后，查找请求头里面的"),t("code",[_._v("Cookie")]),_._v("字段信息，服务器查询后台，判断该用户是已登录状态，然后生成含有该用户信息的页面数据发送给浏览器。")]),_._v(" "),t("li",[_._v("浏览器在接收到该含有当前用户的页面数据后，就可以正确展示用户登录的状态信息了。")])]),_._v(" "),t("p",[_._v("浏览器页面状态是通过使用"),t("code",[_._v("Cookie")]),_._v("来实现的。"),t("code",[_._v("Cookie")]),_._v("流程可以参考下图：")]),_._v(" "),t("p",[t("img",{attrs:{src:e(412),alt:"cookie"}})]),_._v(" "),t("p",[_._v("详细的"),t("code",[_._v("HTTP")]),_._v("请求示意图\n"),t("img",{attrs:{src:e(413),alt:"full-http-response"}})])])}),[],!1,null,null,null);v.default=s.exports}}]);
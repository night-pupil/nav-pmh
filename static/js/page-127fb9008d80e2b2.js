(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[974], {
    199: (t, e, i) => { Promise.resolve().then(i.bind(i, 3420)) }, 3420: (t, e, i) => {
        "use strict"; i.r(e), i.d(e, { default: () => u }); var s = i(5155), o = i(7258), c = i(8482), a = i(2115), r = i(1290), n = i(1027), l = i(3463), d = i(9795); let g = (0, n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", { variants: { variant: { default: "bg-primary text-primary-foreground shadow hover:bg-primary/90", destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90", outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground", secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80", ghost: "hover:bg-accent hover:text-accent-foreground", link: "text-primary underline-offset-4 hover:underline" }, size: { default: "h-9 px-4 py-2", sm: "h-8 rounded-md px-3 text-xs", lg: "h-10 rounded-md px-8", icon: "h-9 w-9" } }, defaultVariants: { variant: "default", size: "default" } }), h = a.forwardRef((t, e) => { let { className: i, variant: o, size: c, asChild: a = !1, ...n } = t, h = a ? r.DX : "button"; return (0, s.jsx)(h, { className: function () { for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)e[i] = arguments[i]; return (0, d.QP)((0, l.$)(e)) }(g({ variant: o, size: c, className: i })), ref: e, ...n }) }); h.displayName = "Button"; let p =
            // ---------------------------------新增网站---------------------------------
            [
                { 
                    id: "1", 
                    icon: "avatar.png", 
                    title: "夜瞳のblog", 
                    tag: "我的项目", 
                    description: "我的个人博客", 
                    url: "https://ncic.us.kg" 
                },
                { 
                    id: "2", 
                    icon: "https://vfiles.gtimg.cn/wuji_dashboard/xy/starter/4ea79867.png", 
                    title: "腾讯视频", 
                    tag: "实用工具", 
                    description: "中国领先的在线视频媒体平台,海量高清视频在线观看", 
                    url: "https://v.qq.com/" 
                },
                { 
                    id: "3", 
                    icon: "https://www.iqiyi.com/logo.png", 
                    title: "爱奇艺", 
                    tag: "实用工具", 
                    description: "在线视频网站-海量正版高清视频在线观看", 
                    url: "https://www.iqiyi.com/" 
                },
                { 
                    id: "4", 
                    icon: "https://i0.hdslb.com/bfs/static/jinkela/long/images/favicon.ico", 
                    title: "哔哩哔哩", 
                    tag: "实用工具", 
                    description: "国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。", 
                    url: "https://www.bilibili.com/" 
                },
                { 
                    id: "5", 
                    icon: "https://dinficfagt18c.cloudfront.net/p/assets/m/favicons/recompressor/apple-touch-icon-180_00e60189802918c81ab533c30afa29a2.png",
                    title: "开发者官网", 
                    tag: "实用工具", 
                    description: "国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。", 
                    url: "https://mcdev.webapp.163.com/" 
                },
            ],
            // -------------------------------------------------------------------------
            m = ["全部工具", "我的项目", "实用工具", "AI生产力", "前端工具", "后端工具", "学习资料"]; function u() { let [t, e] = (0, a.useState)(!1), [i, r] = (0, a.useState)("全部工具"), [n, l] = (0, a.useState)(""), d = p.filter(t => ("全部工具" === i || t.tag === i) && (t.title.includes(n.trim()) || t.url.includes(n.trim()) || t.description.includes(n.trim()))); return (0, s.jsx)("div", { className: "min-h-screen p-4 md:p-8 ".concat(t ? "dark bg-gray-900" : "bg-gray-50"), children: (0, s.jsxs)("div", { className: "max-w-7xl mx-auto", children: [(0, s.jsxs)("div", { className: "flex justify-between items-center mb-8", children: [(0, s.jsxs)("div", { className: "flex items-center gap-3", children: [(0, s.jsx)("div", { className: "w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden", children: (0, s.jsx)("img", { src: "avatar.png", alt: "Profile", className: "w-full h-full object-cover" }) }), (0, s.jsxs)("div", { children: [(0, s.jsx)("h2", { className: "text-lg text-gray-900 dark:text-white", children: "夜瞳のNav Station" }), (0, s.jsx)("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "个人收藏夹" })] })] }), (0, s.jsx)(h, { onClick: () => window.location.href = "https://www.ctblog.top", variant: "outline", className: "flex items-center gap-2", children: (0, s.jsx)("span", { children: "我的博客" }) })] }), (0, s.jsx)("div", { className: "mb-6", children: (0, s.jsx)("input", { type: "text", placeholder: "搜索你想搜的工具....", onChange: t => l(t.target.value), className: "w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-700" }) }), (0, s.jsx)("div", { className: "flex flex-wrap gap-2 mb-6", children: m.map((t, e) => (0, s.jsx)("button", { onClick: () => r(t), className: "px-4 py-2 rounded-full text-sm ".concat(i === t ? "bg-blue-500 text-white" : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300"), children: t }, e)) }), (0, s.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: d.length > 0 ? d.map(t => (0, s.jsx)("a", { href: t.url, children: (0, s.jsx)("div", { className: "p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow", children: (0, s.jsxs)("div", { className: "flex items-start gap-3", children: [(0, s.jsx)("img", { src: t.icon, alt: t.title, className: "w-10 h-10 rounded-lg" }), (0, s.jsxs)("div", { className: "flex-1", children: [(0, s.jsxs)("div", { className: "flex items-center justify-between", children: [(0, s.jsx)("h3", { className: "font-medium dark:text-white", children: t.title }), (0, s.jsx)("span", { className: "text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded", children: t.tag })] }), (0, s.jsx)("p", { className: "text-sm text-gray-500 dark:text-gray-400 mt-1", children: t.description })] })] }) }) }, t.id)) : (0, s.jsxs)("div", { className: "flex flex-col items-center justify-center py-12 text-center ", children: [(0, s.jsx)(o.A, { className: "w-16 h-16 text-gray-400 dark:text-gray-600 mb-4" }), (0, s.jsx)("h3", { className: "text-xl font-medium text-gray-900 dark:text-white mb-2", children: "该分类下暂无内容" }), (0, s.jsx)("p", { className: "text-gray-500 dark:text-gray-400 mb-6", children: '您可以点击右上角的"添加网站"按钮来添加新的网站到此分类' }), (0, s.jsx)("button", { onClick: () => r("全部工具"), className: "px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors", children: "查看所有工具" })] }) }), (0, s.jsx)("footer", { className: "bg-gray-100 dark:bg-gray-800 py-4 mt-12", children: (0, s.jsxs)("div", { className: "flex justify-center items-center text-sm text-gray-600 dark:text-gray-400", children: [(0, s.jsx)("span", { children: "\xa9 2025 网站导航. All rights reserved by Chentao." }), (0, s.jsx)("span", { className: "mx-2", children: "|" }), (0, s.jsxs)("span", { children: ["备案号: ", (0, s.jsx)("a", { href: "https://icp.gov.moe/?keyword=20250052", target: "_blank", rel: "noopener noreferrer", className: "text-blue-500 hover:underline", children: "萌ICP备20250052号" })] })] }) }), (0, s.jsx)("button", { onClick: () => { e(!t), document.documentElement.classList.toggle("dark") }, className: "fixed bottom-4 right-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg", children: (0, s.jsx)(c.A, { className: "w-5 h-5 text-gray-600 dark:text-gray-300" }) })] }) }) }
    }
}, t => { var e = e => t(t.s = e); t.O(0, [572, 441, 517, 358], () => e(199)), _N_E = t.O() }]);
module.exports = {

    serviceWorker: true,
    activeHeaderLinks: true,
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'YuhuaTrade',
            description: 'We are an industry-leading, online and offline processing and trading company that integrates global sourcing, processing (OEM) and sales.'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: '裕华工贸',
            description: '我们是一家业内一流，集全球采购、加工（可OEM）及销售于一体的线上及线下加工与贸易公司'
        }
    },
    themeConfig: {
            locales: {
                '/': {
                    selectText: 'Languages',
                    label: 'English',
                    editLinkText: 'Edit this page on GitHub',
                    serviceWorker: {
                        updatePopup: {
                            message: "New content is available.",
                            buttonText: "Refresh"
                        }
                    },
                    algolia: {},
                    nav: [
                        { text: 'Home', link: '/' },
                        { text: 'Product', link: '/Product/' }
                    ],
                    sidebar: {
                        '/': [/* ... */],
                        '/nested/': [/* ... */]
                    }
                },
                '/zh/': {
                    // 多语言下拉菜单的标题
                    selectText: '选择语言',
                    // 该语言在下拉菜单中的标签
                    label: '简体中文',
                    // 编辑链接文字
                    editLinkText: '在 GitHub 上编辑此页',
                    // Service Worker 的配置
                    serviceWorker: {
                        updatePopup: {
                            message: "发现新内容可用.",
                            buttonText: "刷新"
                        }
                    },
                    // 当前 locale 的 algolia docsearch 选项
                    algolia: {},
                    nav: [
                        { text: '主页', link: '/zh/' },
                        { text: '产品', link: '/zh/Product/' }
                    ],
                    sidebar: {
                        '/zh/': [/* ... */],
                        '/zh/Product/': [/* ... */]
                    }
                }
            }
        }
}
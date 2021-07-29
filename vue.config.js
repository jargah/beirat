// vue.config.js
const path = require('path')
const webpack = require('webpack')
module.exports = {
    chainWebpack: config => {
        config.plugin('provide').use(webpack.ProvidePlugin, [{
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }])
    },
    lintOnSave: false,
    configureWebpack: {
        node: {
            net: 'empty',
            tls: 'empty',
            dns: 'empty'
        },
        resolve: {
            extensions: ['.less', '.sass', '.scss', '.css', '.js', '.vue','.gif', '.png', '.svg', '.mp4'],
            alias: {
                "SRC": path.resolve(__dirname, 'src'),
                "PAGES": path.resolve(__dirname, 'src/pages'),
                "COMPONENTS": path.resolve(__dirname, 'src/components'),
                "SCSS": path.resolve(__dirname, 'src/scss'),
                "ASSETS": path.resolve(__dirname, 'src/assets')
            }
        }
    },
    // css: {
    //     loaderOptions: {
    //         sass: {
    //             additionalData: `@import "SCSS/app.scss";`,
    //         },
    //     }
    // }
}

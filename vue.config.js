module.exports = {
    devServer: {
        proxy:{
            'upload': {
                target: 'http://47.95.23.74:3001',
                changeOrigin: true,
                pathRewrite: {
                    '^api': ''
                }
            }
        }
    }
}
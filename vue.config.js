module.exports = {
    devServer: {
        proxy:{
            'upload': {
                target: 'http://127.0.0.1:3001',
                changeOrigin: true,
                pathRewrite: {
                    '^api': ''
                }
            }
        }
    }
}
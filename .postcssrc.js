module.exports = ({ env }) => ({
    plugins: {
        'postcss-plugin': env === 'production' ? {} : false
    }
})
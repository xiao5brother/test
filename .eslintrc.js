module.exports = {
    // 设置启用环境
    'env': {
        "browser": true,
        "es6": true,
        "node": true,
        "commonjs": true
    },
    // 停止在父级目录中寻找配置文件，保证项目使用统一的配置
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    // 使用常见语法规则配置，可以爱rules属性中自行扩展
    extends: 'eslint:recommended',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // 配置项目规则  0 关闭  1 警告  2 错误
    'rules': {
        "no-alert": 0,
        "no-console": 0,
        "no-extra-semi": 2,
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        "semi": [
            "error",
            // 是否分号结尾
            //"never"
        ],
        //缩进
        "indent": [1, 4],
        // 参数中没有使用的变量不提示错误
        "no-unused-vars": ["error", {"args": "none"}],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
};

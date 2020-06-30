module.exports = {
  extends: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    target:
      'es5' /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
    module:
      'ESNext' /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
      modules: true
    }
  },
  globals: {
		Babel: true,
		React: true,
	},
  rules: {
    // "0"表示忽略问题，等同于"off";
    // "1"表示给出警告，等同于"warn";
    // "2"表示直接报错，等同于"error"。
    // eslint官方地址：https://eslint.cn/docs/rules/
    // eslint-plugin-react官方地址：https://github.com/yannickcr/eslint-plugin-react
    // eslint-plugin-jsx-a11y官方地址：https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
    // eslint-plugin-react-hooks官方地址：https://github.com/facebook/react/tree/c11015ff4f610ac2924d1fc6d569a17657a404fd/packages/eslint-plugin-react-hooks
    // eslint-plugin-import官方地址：https://github.com/benmosher/eslint-plugin-import

    // eslint推荐的规则
    'for-direction': 2, //强制 “for” 循环中更新子句的计数器朝着正确的方向移动
    'getter-return': 2, //强制在 getter 属性中出现一个 return 语句
    'no-async-promise-executor': 2, //禁止使用异步函数作为 Promise executor
    'no-compare-neg-zero': 2, //禁止与 -0 进行比较
    'no-cond-assign': 2, //禁止在条件语句中出现赋值操作符
    'no-constant-condition': 2, //禁止在条件中使用常量表达式
    'no-control-regex': 2, //禁止在正则表达式中使用控制字符
    'no-debugger': 2, //禁用 debugger
    'no-dupe-args': 2, // 禁止在 function 定义中出现重复的参数
    'no-dupe-keys': 2, //禁止在对象字面量中出现重复的键
    'no-duplicate-case': 2, //禁止重复 case 标签
    'no-empty': 2, //禁止空块语句
    'no-empty-character-class': 2, //禁止在正则表达式中出现空字符集
    'no-ex-assign': 2, // 禁止对 catch 子句中的异常重新赋值
    'no-extra-boolean-cast': 2, //禁止不必要的布尔类型转换
    'no-extra-semi': 2, //禁用不必要的分号
    'no-func-assign': 2, //禁止对 function 声明重新赋值
    'no-inner-declarations': 2, //禁止在嵌套的语句块中出现变量或 function 声明
    'no-invalid-regexp': 2, //禁止在 RegExp 构造函数中出现无效的正则表达式
    'no-irregular-whitespace': 2, //禁止不规则的空白
    'no-misleading-character-class': 2, //不允许在字符类语法中出现由多个代码点组成的字符
    'no-obj-calls': 2, //禁止将全局对象当作函数进行调用
    'no-prototype-builtins': 2, //禁止直接使用 Object.prototypes 的内置属性
    'no-regex-spaces': 2, //禁止正则表达式字面量中出现多个空格
    'no-sparse-arrays': 2, //禁用稀疏数组
    'no-unexpected-multiline': 2, //禁止使用令人困惑的多行表达式
    'no-unreachable': 2, //禁止在 return、throw、continue 和 break 语句后出现不可达代码
    'no-unsafe-finally': 2, //禁止在 finally 语句块中出现控制流语句
    'no-unsafe-negation': 2, //禁止对关系运算符的左操作数使用否定操作符
    'require-atomic-updates': 2, //禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
    'use-isnan': 2, //要求调用 isNaN()检查 NaN
    'valid-typeof': 2, //强制 typeof 表达式与有效的字符串进行比较
    'no-case-declarations': 2, //禁止在 case 或 default 子句中出现词法声明
    'no-empty-pattern': 2, //禁止使用空解构模式
    'no-fallthrough': 2, //禁止 case 语句落空
    'no-global-assign': 2, //禁止对原生对象或只读的全局对象进行赋值
    'no-octal': 2, //禁用八进制字面量
    'no-redeclare': 2, //禁止重新声明变量
    'no-self-assign': 2, // 禁止自身赋值
    'no-unused-labels': 2, //禁用未使用过的标签
    'no-useless-catch': 2, //禁止不必要的 catch 子句
    'no-useless-escape': 2, // 禁用不必要的转义
    'no-with': 2, //禁用 with 语句
    'no-delete-var': 2, //禁止删除变量
    'no-shadow-restricted-names': 2, // 禁止变量声明覆盖外层作用域的变量
    'no-undef': 2, //不允许使用undefined变量
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], //禁止未使用过的变量
    'no-mixed-spaces-and-tabs': 2, //禁止使用 空格 和 tab 混合缩进
    'constructor-super': 2, // 验证构造函数中 super() 的调用
    'no-class-assign': 2, //不允许修改类声明的变量
    'no-const-assign': 2, //不允许改变用const声明的变量
    'no-dupe-class-members': 2, //不允许类成员中有重复的名称
    'no-new-symbol': 2, //禁止 Symbolnew 操作符和 new 一起使用
    'no-this-before-super': 2, //在构造函数中禁止在调用super()之前使用this或super
    'require-yield': 2, //禁用函数内没有yield的 generator 函数

    //很可能是错误
    'no-template-curly-in-string': 2, // 禁止在常规字符串中出现模板字面量占位符语法

    //严格模式
    strict: 2, // 要求使用严格模式指令

    //最佳实践
    'accessor-pairs': 0, // 强制getter/setter成对出现在对象中
    'array-callback-return': ['error', { allowImplicit: true }], // 强制数组方法的回调函数中有 return 语句
    'block-scoped-var': 2, // 强制把变量的使用限制在其定义的作用域范围内
    'default-case': ['error', { commentPattern: '^no default$' }], // 要求 Switch 语句中有 Default 分支
    eqeqeq: 2, // 要求使用 === 和 !==
    'no-caller': 2, //禁用 caller 或 callee
    'no-eq-null': 2, // 禁止与 null 进行比较
    'no-eval': 2, //禁用 eval()
    'no-extra-bind': 2, //禁止不必要的 .bind() 调用
    'no-extra-label': 2, //禁用不必要的标签
    'no-floating-decimal': 2, //禁止浮点小数
    'no-implied-eval': 2, //禁用隐式的eval()
    'no-iterator': 2, //禁用迭代器
    'no-labels': 2, //禁用标签语句
    'no-multi-spaces': ['error', { ignoreEOLComments: true }], //除了注释，禁止出现多个空格
    'no-multi-str': 2, //禁止多行字符串
    'no-new': 2, //禁止原始包装实例
    'no-new-wrappers': 2, //禁用Function构造函数
    'no-octal': 2, //禁用八进制字面量
    'no-octal-escape': 2, //禁止在字符串字面量中使用八进制转义序列
    'no-proto': 2, //禁用__proto__被赋值
    'no-return-await': 2, //禁用不必要的 return await
    'no-script-url': 2, //禁用 Script URL
    'no-self-assign': 2, //禁止自身赋值
    'no-self-compare': 2, //禁止自身比较
    'no-sequences': 2, //不允许乱用逗号操作符
    'no-unmodified-loop-condition': 2, //禁用一成不变的循环条件
    'no-useless-call': 2, // 禁用不必要的 .call() 和 .apply()
    'no-useless-catch': 2, // 禁止不必要的 catch 子句
    'no-useless-concat': 2, //禁止没有必要的字符拼接
    'no-with': 2, //禁用 with 语句
    'vars-on-top': 2, //要求将变量声明放在它们作用域的顶部
    'wrap-iife': ['error', 'any'], //需要把立即执行的函数包裹起来
    yoda: 2, //要求或者禁止Yoda条件
    radix: ['error', 'as-needed'], //要求必须有基数,但禁止提供基数10
    curly: ['error', 'multi-line'], //要求遵循大括号约定

    //这些规则与变量声明有关：
    'no-label-var': 2, //禁用与变量同名的标签
    'no-undef-init': 2, //不允许初始化变量值为 undefined
    'no-undefined': 2, //  不允许使用undefined变量

    //关于Node.js 或 在浏览器中使用CommonJS
    'no-buffer-constructor': 2, //禁用 Buffer() 构造函数
    'no-new-require': 2, //不允许 new require
    'no-path-concat': 2, //当使用 _dirname 和 _filename 时不允许字符串拼接

    //ECMAScript 6
    'arrow-spacing': ['error', { before: true, after: true }], //要求箭头函数的箭头之前或之后有空格用
    'generator-star-spacing': 2, //强制 generator 函数中 * 号周围有空格
    'no-duplicate-imports': ['error', { includeExports: true }], //  禁止重复导入
    'no-useless-computed-key': 2, //禁止在对象中使用不必要的计算属性
    'no-useless-rename': 2, //禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-var': 2, //要求使用 let 或 const 而不是 var
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true
      }
    ], //要求对象字面量简写语法
    'prefer-const': ['error', { destructuring: 'all' }], //只有解构的值都没有被赋值才用const
    'prefer-numeric-literals': 2, //禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
    'prefer-rest-params': 2, //建议使用剩余参数代替 arguments
    'prefer-spread': 2, //建议使用扩展语法而非.apply()
    'rest-spread-spacing': 2, //强制剩余和扩展运算符及其表达式之间有空格
    'symbol-description': 2, //要求 symbol 描述
    // 'arrow-parens': ['error', 'as-needed'], //要求箭头函数的参数使用圆括号

    //关于风格
    'array-bracket-newline': ['error', 'consistent'], // 对每个括号要求使用一致的换行符。如果一个括号有换行符，另一个没有，则会报错
    camelcase: ['warn', { properties: 'never', ignoreDestructuring: false }], //要求使用骆驼拼写法
    'comma-spacing': 2, //强制在逗号后面使用空格
    'computed-property-spacing': ['error', 'never'], //禁止在计算属性中使用空格
    'func-call-spacing': 2, //禁止在函数标识符和其调用之间有空格
    'implicit-arrow-linebreak': 2, //强制隐式返回的箭头函数体的位置
    'key-spacing': ['error', { beforeColon: false, afterColon: true }], //禁止在对象字面量的键和冒号之间存在空格
    'max-nested-callbacks': ['error', 10], // 强制回调函数最大嵌套深度
    'max-statements-per-line': ['error', { max: 3 }], // 强制每一行中所允许的最大语句数量
    'new-cap': 2, //要求构造函数首字母大写
    'new-parens': 2, //要求调用无参构造函数时带括号
    'no-array-constructor': 2, //禁止使用 Array 构造函数
    'no-bitwise': 2, //禁止使用按位操作符
    'no-multi-assign': 2, //禁止连续赋值
    'no-multiple-empty-lines': 2, //不允许多个空行
    'no-new-object': 2, //禁止使用 Object 构造函数
    'no-whitespace-before-property': 2, //禁止属性前有空白
    'nonblock-statement-body-position': 2, //强制单个语句的位置
    'semi-spacing': 2, //强制分号后有空格
    'semi-style': 2, //强制分号的位置
    'space-infix-ops': 2, //要求操作符周围有空格
    'space-unary-ops': 2, //要求在一元操作符之前或之后存在空格
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }], //要求或禁止在类成员之间出现空行
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }], //禁止使用一元操作符 ++ 和 --
    'max-len': [
      'error',
      150,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ], //强制行的最大长度
    'operator-linebreak': 'off', //强制操作符使用一致的换行符风格
    'object-curly-newline': 'off', //强制在花括号内使用一致的换行符

    //React相关
    'react/display-name': [0, { ignoreTranspilerName: true }], //防止在React组件定义里丢失displayName
    'react/jsx-key': 2, //  Detect missing `key` prop
    'react/jsx-no-comment-textnodes': 2, //Prevent comments from being inserted as text nodes
    'react/jsx-no-duplicate-props': 2, //Prevent duplicate properties in JSX
    'react/jsx-no-target-blank': 0, //Prevent usage of unsafe `target='_blank'`
    'react/jsx-no-undef': 2, // Disallow undeclared variables in JSX
    'react/jsx-uses-react': 2, //Prevent React to be incorrectly marked as unused
    'react/jsx-uses-vars': 2, //Prevent variables used in JSX to be incorrectly marked as unused
    'react/no-children-prop': 2, //Prevent passing of children as props
    'react/no-danger-with-children': 2, //Prevent problem with children and props.dangerouslySetInnerHTML
    'react/no-deprecated': 2, // Prevent usage of deprecated methods
    'react/no-direct-mutation-state': 2, //  Prevent direct mutation of this.state
    'react/no-find-dom-node': 2, //Prevent usage of findDOMNode
    'react/no-is-mounted': 2, //Prevent usage of isMounted
    'react/no-render-return-value': 2, //Prevent usage of the return value of ReactDOM.render
    'react/no-string-refs': 2, //Prevent using string references
    'react/no-unescaped-entities': 2, // Prevent invalid characters from appearing in markup
    'react/no-unknown-property': 2, // Prevent usage of unknown DOM property
    // 'react/prop-types': 2, // Prevent missing props validation in a React component definition
    'react/react-in-jsx-scope': 2, //Prevent missing React when using JSX
    'react/require-render-return': 2, //Enforce ES5 or ES6 class for returning value in render function
    'react/button-has-type': [
      'off',
      {
        button: false,
        submit: true,
        reset: false
      }
    ], //Prevent usage of `button` elements without an explicit `type` attribute. If you use only `"submit"` buttons, you can disable this rule
    'react/no-danger': 0, //Prevent usage of dangerous JSX properties

    //JSX指定的规则
    'react/jsx-boolean-value': [2, 'always'], //Enforce boolean attributes notation in JSX
    'react/jsx-curly-brace-presence': [2, { props: 'never', children: 'never' }], //Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children.
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }], // Restrict file extensions that may contain JSX
    'react/jsx-no-useless-fragment': 2, //  Disallow unnecessary fragments
    'react/jsx-pascal-case': 2, //Enforce PascalCase for user-defined JSX components
    'react/jsx-props-no-multi-spaces': 2, //Disallow multiple spaces between inline JSX props
    'react/jsx-one-expression-per-line': 'off', //One JSX Element Per Line

    //React others
    'react/destructuring-assignment': 2, // Enforce consistent usage of destructuring assignment of props, state, and context
    'react/jsx-equals-spacing': 2, //Enforce or disallow spaces around equal signs in JSX attributes.
    'react/jsx-max-props-per-line': [1, { maximum: 5 }], // Limit maximum of props on a single line in JSX
    'react/no-did-update-set-state': 2, //Prevent usage of setState in componentDidUpdate
    'react/no-unused-state': 2, //Prevent definitions of unused state
    'react/no-will-update-set-state': 2, //Prevent usage of setState in componentWillUpdate
    'react/prefer-es6-class': 2, //react/prefer-es6-class
    'react/void-dom-elements-no-children': 2, //Prevent void DOM elements

    //eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,

    //import
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ], //Ensure consistent use of file extension within the import path
    'import/no-unresolved': 'off', //Ensures an imported module can be resolved to a module on the local filesystem
    'import/prefer-default-export': 'off', //When there is only a single export from a module, prefer using default export over named export
    //Forbid the import of external modules that are not declared in the `package.json`'s `dependencies`, `devDependencies`, `optionalDependencies`, `peerDependencies`, or `bundledDependencies`
    'import/no-extraneous-dependencies': 'off',
    'import/no-cycle': 'off', //Ensures that there is no resolvable path back to this module via its dependencies

    // jsx-a11y
    'jsx-a11y/control-has-associated-label': 'off', //Enforce that a control (an interactive element) has a text label
    'jsx-a11y/click-events-have-key-events': 'off', //Enforce `onClick` is accompanied by at least one of the following: `onKeyUp`, `onKeyDown`, `onKeyPress`
    'jsx-a11y/no-static-element-interactions': 'off', //Static HTML elements do not have semantic meaning.
    'jsx-a11y/interactive-supports-focus': 'off', //Elements with an interactive role and interaction handlers (mouse or key press) must be focusable
    'jsx-a11y/anchor-is-valid': 'off', //The HTML `<a>` element, with a valid `href` attribute, is formally defined as representing a **hyperlink**
    'jsx-a11y/label-has-associated-control': 'off', //Enforce that a label tag has a text label and an associated control.

    //ts
    'brace-style': ['error', '1tbs', { allowSingleLine: true }], //大括号风格要求
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        // MemberExpression: null,
        FunctionDeclaration: {
          parameters: 1,
          body: 1
        },
        FunctionExpression: {
          parameters: 1,
          body: 1
        },
        CallExpression: {
          arguments: 1
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild'
        ],
        ignoreComments: false
      }
    ], //强制使用一致的缩进
    'no-extra-parens': [
      'off',
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all', // delegate to eslint-plugin-react
        enforceForArrowConditionals: false
      }
    ], //禁止不必要的括号
    'no-magic-numbers': [
      'off',
      {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false
      }
    ], //禁止使用魔术数字
    // semi: ['error', 'always'], //要求或禁止使用分号代替
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ], //要求或禁止函数圆括号之前有一个空格

    //others
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering'
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount'
          ],
          rendering: ['/^render.+$/', 'render']
        }
      }
    ],

    //airbnb推荐的规则
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: []
      }
    ], //强制类方法使用 this
    'dot-notation': ['error', { allowKeywords: true }], //强制尽可能地使用点号
    'dot-location': ['error', 'property'], //强制在点号之前或之后换行
    'guard-for-in': 'error',
    'max-classes-per-file': 0, //强制每个文件中包含的的类的最大数量
    'no-alert': 'warn',
    'no-empty-function': 0,
    'no-new-func': 'error', //禁止使用 new 以避免产生副作用
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated'
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.'
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.'
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.'
      }
    ],
    'no-lone-blocks': 'error', //禁用不必要的嵌套块
    'no-loop-func': 'error', //禁止循环中存在函数
    'no-return-assign': ['error', 'always'], //禁止在返回语句中赋值
    'no-throw-literal': 'error', //限制可以被抛出的异常
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ], //禁止未使用过的表达式
    'no-void': 'error', //禁止使用void操作符
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }], // 要求使用 Error 对象作为 Promise 拒绝的原因
    'no-await-in-loop': 'error', //禁止在循环中 出现 await
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true
      }
    ], //禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-useless-constructor': 'error', //禁用不必要的构造函数
    'prefer-template': 'error', //建议使用模板字面量而非字符串连接
    'template-curly-spacing': 'error', //强制模板字符串中空格的使用
    'yield-star-spacing': ['error', 'after'], //强制在 yield* 表达式中 * 周围使用空格
    'import/named': 'error', //Verifies that all named imports are part of the set of named exports in the referenced module.
    'import/export': 'error', //Reports funny business with exports, like repeated exports of names or defaults.
    'import/no-named-as-default': 'error', //Reports use of an exported name as the locally imported name of a default export.
    'import/no-named-as-default-member': 'error', //Reports use of an exported name as a property on the default export.
    'import/no-mutable-exports': 'error', //Forbids the use of mutable exports with `var` or `let`.
    'import/no-amd': 'error', //Intended for temporary use when migrating to pure ES6 modules.
    'import/first': 'error', //This rule reports any imports that come after non-import statements.
    'import/no-duplicates': 'error', //Reports if a resolved path is imported more than once.
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }], //Enforce a convention in module import order
    'import/newline-after-import': 'error', //Enforces having one or more empty lines after the last top-level import statement or require call.
    'import/no-absolute-path': 'error', //Forbid import of modules using absolute paths
    'import/no-dynamic-require': 'error', //Forbid `require()` calls with expressions
    'import/no-webpack-loader-syntax': 'error', //Forbid Webpack loader syntax in imports.
    'import/no-named-default': 'error', //Reports use of a default export as a locally named import.
    'import/no-self-import': 'error', //Forbid a module from importing itself
    'import/no-useless-path-segments': ['error', { commonjs: true }], //use this rule to prevent unnecessary path segments in import and require statements.
    'global-require': 'error', //use this rule to prevent unnecessary path segments in import and require statements.
    'comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false
        }
      }
    ], //逗号风格
    'eol-last': ['error', 'always'], //要求或禁止文件末尾保留一行空行
    'function-paren-newline': ['error', 'consistent'], //强制在函数括号内使用一致的换行
    'lines-around-directive': [
      'error',
      {
        before: 'always',
        after: 'always'
      }
    ], //?
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }], //要求方法链中每个调用都有一个换行符
    'no-mixed-operators': [
      'error',
      {
        // the list of arthmetic groups disallows mixing `%` and `**`
        // with other arithmetic operators.
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['/', '*'],
          ['&', '|', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!=='],
          ['&&', '||']
        ],
        allowSamePrecedence: false
      }
    ], //禁止混合使用不同的操作符
    'no-nested-ternary': 'error', //禁止使用嵌套的三元表达式
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ], //禁止使用特定的语法
    'no-spaced-func': 'error', //?
    'no-tabs': 'error', // 禁用 tab
    'switch-colon-spacing': ['error', { after: true, before: false }], //强制在 switch 的冒号左右有空格
    'template-tag-spacing': ['error', 'never'], //要求或禁止在模板标记和它们的字面量之间有空格
    'unicode-bom': ['error', 'never'], //禁止使用 Unicode 字节顺序标记
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }], // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
    'react/self-closing-comp': 'error', //Prevent extra closing tags for components without children
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'], //Configure the position of the first property
    // 'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
    'react/no-unused-prop-types': [
      'error',
      {
        customValidators: [],
        skipShapeProps: true
      }
    ], //Prevent definitions of unused propTypes
    'react/style-prop-object': 'error', //Enforce style prop value being an object
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never'
      }
    ], // Validate whitespace in and around the JSX opening and closing brackets
    // 'react/no-array-index-key': 'error', //Prevent usage of Array index in keys
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }], //Forbid foreign propTypes
    'react/no-redundant-should-component-update': 'error', //Prevent usage of shouldComponentUpdate when extending React.PureComponent
    'react/no-typos': 'error', //Prevents common typos
    'react/no-access-state-in-setstate': 'error', //Prevent using this.state within a this.setState
    'react/no-this-in-sfc': 'error', //Prevent `this` from being used in stateless functional components
    'react/jsx-curly-newline': [
      'error',
      {
        multiline: 'consistent',
        singleline: 'consistent'
      }
    ], //Enforce linebreaks in curly braces in JSX attributes and expressions.
    'react/jsx-props-no-spreading': [
      'warn',
      {
        html: 'enforce',
        custom: 'enforce',
        exceptions: []
      }
    ], //Disallow JSX props spreading
    'jsx-a11y/aria-role': ['error', { ignoreNonDom: false }], //aria-role
    'jsx-a11y/aria-props': 'error', //Elements cannot use an invalid ARIA attribute. This will fail if it finds an `aria-*` property
    'jsx-a11y/aria-proptypes': 'error', //ARIA state and property values must be valid.
    'jsx-a11y/aria-unsupported-elements': 'error', //Certain reserved DOM elements do not support ARIA roles, states and properties
    'jsx-a11y/alt-text': [
      'error',
      {
        elements: ['img', 'object', 'area', 'input[type="image"]'],
        img: [],
        object: [],
        area: [],
        'input[type="image"]': []
      }
    ], //Enforce that all elements that require alternative text have meaningful information to relay back to the end user
    'jsx-a11y/img-redundant-alt': 'error', //Enforce img alt attribute does not contain the word image, picture, or photo
    'jsx-a11y/mouse-events-have-key-events': 'error', //Enforce onmouseover/onmouseout are accompanied by onfocus/onblur.
    'jsx-a11y/no-access-key': 'error', //Enforce no accessKey prop on element
    'jsx-a11y/role-has-required-aria-props': 'error', //true
    'jsx-a11y/heading-has-content': ['error', { components: [''] }], //Enforce that heading elements (`h1`, `h2`, etc.) have content and that the content is accessible to screen readers
    'jsx-a11y/html-has-lang': 'error', //<html> elements must have the lang prop.
    'jsx-a11y/lang': 'error', //The `lang` prop on the `<html>` element must have a valid value based on ISO country and language codes.
    'jsx-a11y/no-distracting-elements': [
      'error',
      {
        elements: ['marquee', 'blink']
      }
    ], //Enforces that no distracting elements are use
    'jsx-a11y/scope': 'error', //The `scope` scope should be used only on `<th>` elements.
    'jsx-a11y/accessible-emoji': 'error', //Emoji have become a common way of communicating content to the end user
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error', //`aria-activedescendant` is used to manage focus within a [composite widget]
    'jsx-a11y/iframe-has-title': 'error', //`<iframe>` elements must have a unique title property to indicate its content to the user.
    'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }], //Enforce that autoFocus prop is not used on elements. Autofocusing elements can cause usability issues for sighted and non-sighted users, alike.
    'jsx-a11y/no-redundant-roles': 'error', //Some HTML elements have native semantics that are implemented by the browser
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [
      'error',
      {
        tr: ['none', 'presentation']
      }
    ], //Interactive HTML elements indicate _controls_ in the user interface
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'error',
      {
        ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell']
      }
    ], //Non-interactive HTML elements indicate _content_ and _containers_ in the user interface
    'jsx-a11y/no-noninteractive-tabindex': [
      'error',
      {
        tags: [],
        roles: ['tabpanel']
      }
    ], //Tab key navigation should be limited to elements on the page that can be interacted with
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton']
      }
    ] //anchor-is-valid
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      flowVersion: '0.53' // Flow version
    },
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' }
    ],
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
      }
    },
    'import/extensions': ['.js', '.ts', '.jsx', '.tsx']
  },
  plugins: ['react', 'import', 'react-hooks', 'jsx-a11y', 'babel', '@typescript-eslint']
};

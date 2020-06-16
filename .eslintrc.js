module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
	],
	parser: "babel-eslint",
	parserOptions: {
		target:
			"es5" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
		module:
			"ESNext" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
			modules: true,
		},
	},
	globals: {
		Babel: true,
		React: true,
	},
	rules: {
		// "0"表示忽略问题，等同于"off";
		// "1"表示给出警告，等同于"warn";
		// "2"表示直接报错，等同于"error"。
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
		// 'require-atomic-updates': 0, //禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
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
		'no-unused-vars': 2, //禁止未使用过的变量
		// 'no-mixed-spaces-and-tabs': 2, //禁止使用 空格 和 tab 混合缩进
		'constructor-super': 2, // 验证构造函数中 super() 的调用
		'no-class-assign': 2, //不允许修改类声明的变量
		'no-const-assign': 2, //不允许改变用const声明的变量
		'no-dupe-class-members': 2, //不允许类成员中有重复的名称
		'no-new-symbol': 2, //禁止 Symbolnew 操作符和 new 一起使用
		'no-this-before-super': 2, //在构造函数中禁止在调用super()之前使用this或super
		'require-yield': 2, //禁用函数内没有yield的 generator 函数
		"no-mixed-spaces-and-tabs": 0,  //禁止使用 空格 和 tab 混合缩进

		//很可能是错误
		"no-template-curly-in-string": 2, //禁止在常规字符串中出现模板字面量占位符语法

		//严格模式
		strict: 2, //要求使用严格模式指令

		//最佳实践
		"accessor-pairs": 2, //强制getter/setter成对出现在对象中
		"array-callback-return": 2, //强制数组方法的回调函数中有 return 语句
		"block-scoped-var": 2, //强制把变量的使用限制在其定义的作用域范围内
		"default-case": 2, //要求 Switch 语句中有 Default 分支
		eqeqeq: 2, //要求使用 === 和 !==
		"no-caller": 2, //禁用 caller 或 callee
		"no-eq-null": 2, //禁止与 null 进行比较
		"no-eval": 2, //禁用 eval()
		"no-extra-bind": 2, //禁止不必要的 .bind() 调用
		"no-extra-label": 2, //禁用不必要的标签
		"no-floating-decimal": 2, //禁止浮点小数
		"no-implied-eval": 2, //禁用隐式的eval()
		"no-iterator": 2, //禁用迭代器
		"no-labels": 2, //禁用标签语句
		"no-multi-spaces": ["error", { ignoreEOLComments: true }], //除了注释，禁止出现多个空格
		"no-multi-str": 2, //禁止多行字符串
		"no-new": 2, //过禁止使用 new 关键字调用构造函数但却不将结果赋值给一个变量
		"no-new-wrappers": 2, //禁止原始包装实例
		"no-octal-escape": 2, //禁止在字符串字面量中使用八进制转义序列
		"no-proto": 2, //禁用__proto__被赋值
		"no-return-await": 2, //禁用不必要的 return await
		"no-script-url": 2, //禁用 Script URL
		"no-self-compare": 2, //禁止自身比较
		"no-sequences": 2, //不允许乱用逗号操作符
		"no-unmodified-loop-condition": 2, //禁用一成不变的循环条件
		"no-useless-call": 2, //禁用不必要的 .call() 和 .apply()
		"no-useless-concat": 2, //禁止没有必要的字符拼接
		"vars-on-top": 2, //要求将变量声明放在它们作用域的顶部
		"wrap-iife": ["error", "any"], //需要把立即执行的函数包裹起来
		yoda: 2, //要求或者禁止Yoda条件

		//这些规则与变量声明有关：
		"no-label-var": 2, //禁用与变量同名的标签
		"no-undef-init": 2, //不允许初始化变量值为 undefined
		"no-undefined": 2, //不允许使用undefined变量

		//关于Node.js 或 在浏览器中使用CommonJS
		"no-buffer-constructor": 2, //禁用 Buffer() 构造函数
		"no-new-require": 2, //不允许 new require
		"no-path-concat": 2, //当使用 _dirname 和 _filename 时不允许字符串拼接

		//ECMAScript 6
		"arrow-spacing": ["error", { before: true, after: true }], //要求箭头函数的箭头之前或之后有空格用
		"generator-star-spacing": 2, //强制 generator 函数中 * 号周围有空格
		"no-duplicate-imports": ["error", { includeExports: true }], //禁止重复导入
		"no-useless-computed-key": 2, //禁止在对象中使用不必要的计算属性
		"no-useless-rename": 2, //禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
		"no-var": 2, //要求使用 let 或 const 而不是 var
		"object-shorthand": 2, //要求对象字面量简写语法
		"prefer-const": ["error", { destructuring: "all" }], //只有解构的值都没有被赋值才用const
		"prefer-numeric-literals": 2, //禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
		"prefer-rest-params": 2, //建议使用剩余参数代替 arguments
		"prefer-spread": 2, //建议使用扩展语法而非.apply()
		"rest-spread-spacing": 2, //强制剩余和扩展运算符及其表达式之间有空格
		"symbol-description": 2, //要求 symbol 描述

		//关于风格
		"array-bracket-newline": ["error", "consistent"], //对每个括号要求使用一致的换行符。如果一个括号有换行符，另一个没有，则会报错
		camelcase: 2, //要求使用骆驼拼写法
		"comma-spacing": 2, //强制在逗号后面使用空格
		"computed-property-spacing": ["error", "never"], //禁止在计算属性中使用空格
		"func-call-spacing": 2, //禁止在函数标识符和其调用之间有空格
		"implicit-arrow-linebreak": 2, //强制隐式返回的箭头函数体的位置
		"key-spacing": ["error", { beforeColon: false }], //禁止在对象字面量的键和冒号之间存在空格
		"max-nested-callbacks": ["error", 10], //强制回调函数最大嵌套深度
		"max-statements-per-line": ["error", { max: 3 }], //强制每一行中所允许的最大语句数量
		"new-cap": 2, //要求构造函数首字母大写
		"new-parens": 2, //要求调用无参构造函数时带括号
		"no-array-constructor": 2, //禁止使用 Array 构造函数
		"no-bitwise": 2, //禁止使用按位操作符
		"no-multi-assign": 2, //禁止连续赋值
		"no-multiple-empty-lines": 2, //不允许多个空行
		"no-new-object": 2, //禁止使用 Object 构造函数
		"no-whitespace-before-property": 2, //禁止属性前有空白
		"nonblock-statement-body-position": 2, //强制单个语句的位置
		"semi-spacing": 2, //强制分号前后有空格
		"semi-style": 2, //强制分号的位置
		"space-infix-ops": 2, //要求操作符周围有空格
		"space-unary-ops": 2, //要求在一元操作符之前或之后存在空格

		//React相关，需要修改的推荐规则
		"react/display-name": [0, { ignoreTranspilerName: true }], //防止在React组件定义里丢失displayName
		"react/jsx-key": 2, //Detect missing `key` prop
		"react/jsx-no-comment-textnodes": 2, //Prevent comments from being inserted as text nodes
		"react/jsx-no-duplicate-props": 2, //Prevent duplicate properties in JSX
		"react/jsx-no-target-blank": 0, //Prevent usage of unsafe `target='_blank'`
		"react/jsx-no-undef": 2, //Disallow undeclared variables in JSX
		"react/jsx-uses-react": 2, //Prevent React to be incorrectly marked as unused
		"react/jsx-uses-vars": 2, //Prevent variables used in JSX to be incorrectly marked as unused
		"react/no-children-prop": 2, //Prevent passing of children as props
		"react/no-danger-with-children": 2, //Prevent problem with children and props.dangerouslySetInnerHTML
		"react/no-deprecated": 1, //Prevent usage of deprecated methods
		"react/no-direct-mutation-state": 2, //Prevent direct mutation of this.state
		"react/no-find-dom-node": 2, //Prevent usage of findDOMNode
		"react/no-is-mounted": 2, //Prevent usage of isMounted
		"react/no-render-return-value": 2, //Prevent usage of the return value of ReactDOM.render
		"react/no-string-refs": 2, //Prevent using string references
		"react/no-unescaped-entities": 0, //Prevent invalid characters from appearing in markup
		"react/no-unknown-property": 1, //Prevent usage of unknown DOM property
		"react/prop-types": 0, //Prevent missing props validation in a React component definition
		"react/react-in-jsx-scope": 2, //Prevent missing React when using JSX
		"react/require-render-return": 2, //Enforce ES5 or ES6 class for returning value in render function

		//JSX指定的规则
		"react/jsx-boolean-value": [2, "always"], //Enforce boolean attributes notation in JSX
		"react/jsx-curly-brace-presence": [
			2,
			{ props: "never", children: "never" },
		], //Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children.
		"react/jsx-filename-extension": [
			1,
			{ extensions: [".js", ".jsx", ".tsx"] },
		], //Restrict file extensions that may contain JSX
		"react/jsx-indent": 0, //Validate JSX indentation
		"react/jsx-no-useless-fragment": 2, //Disallow unnecessary fragments
		"react/jsx-pascal-case": 2, //Enforce PascalCase for user-defined JSX components
		"react/jsx-props-no-multi-spaces": 2, //Disallow multiple spaces between inline JSX props

		//React others
		"react/destructuring-assignment": 0, //Enforce consistent usage of destructuring assignment of props, state, and context
		"react/jsx-equals-spacing": 2, //Enforce or disallow spaces around equal signs in JSX attributes.
		"react/jsx-max-props-per-line": [1, { maximum: 5 }], //Limit maximum of props on a single line in JSX
		"react/no-did-update-set-state": 2, //Prevent usage of setState in componentDidUpdate
		"react/no-unused-state": 2, //Prevent definitions of unused state
		"react/no-will-update-set-state": 2, //Prevent usage of setState in componentWillUpdate
		"react/prefer-es6-class": 2, //react/prefer-es6-class
		"react/void-dom-elements-no-children": 2, //Prevent void DOM elements

		//eslint-plugin-react-hooks
		"react-hooks/rules-of-hooks": 2,
		"react-hooks/exhaustive-deps": 0,
	},
	env: {
		browser: true,
		node: true,
	},
	settings: {
		react: {
			createClass: "createReactClass", // Regex for Component Factory to use,
			// default to "createReactClass"
			pragma: "React", // Pragma to use, default to "React"
			version: "detect", // React version. "detect" automatically picks the version you have installed.
			// You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
			// default to latest and warns if missing
			// It will default to "detect" in the future
			flowVersion: "0.53", // Flow version
		},
		linkComponents: [
			// Components used as alternatives to <a> for linking, eg. <Link to={ url } />
			"Hyperlink",
			{ name: "Link", linkAttribute: "to" },
		],
		"import/resolver": {
			node: {
				extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
			},
		},
		"import/extensions": [".js", ".ts", ".jsx", ".tsx"],
	},
	plugins: ["react", "import", "react-hooks", 'babel'],
};

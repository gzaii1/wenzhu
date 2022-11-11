module.exports = {
    root: true,
    parser: "@babel/eslint-parser",
    plugins: ["react", "react-hooks", "import"],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
        // 指示使用哪些其他语言的功能
        ecmaFeatures: {
            "jsx": true
        },
        babelOptions: {
            presets: ["next/babel"],
            caller: {
                supportsTopLevelAwait: true
            }
          }
    },
    env: {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    extends: [
        'eslint:recommended',
        'plugin:node/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    overrides: [
        {
            files: ['packages/**'],
            excludedFiles: '**/__tests__/**',
            rules: {
                'no-restricted-globals': ['error', 'require', '__dirname', '__filename']
            }
        },
        {
            files: ["**/*.ts", "**/*.tsx"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaVersion: 2018,
                sourceType: "module",
                ecmaFeatures: {
                    "jsx": true
                },
                warnOnUnsupportedTypeScriptVersion: false
            },
            plugins: ["@typescript-eslint"],
            rules: {
              // Already handled by TS
              "no-dupe-class-members": "off",
              "no-undef": "off",
      
              // Add TypeScript specific rules (and turn off ESLint equivalents)
              "@typescript-eslint/consistent-type-assertions": "warn",
              "no-array-constructor": "off",
              "@typescript-eslint/no-array-constructor": "warn",
              "@typescript-eslint/no-namespace": "error",
              "no-use-before-define": "off",
              "@typescript-eslint/no-use-before-define": [
                "warn",
                {
                  "functions": true,
                  "classes": true,
                  "variables": true,
                  "enums": true,
                  "typedefs": true
                }
              ],
              "no-unused-vars": "off",
              "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                  "args": "none",
                  "ignoreRestSiblings": true
                }
              ],
              "no-unused-expressions": "off",
              "@typescript-eslint/no-unused-expressions": [
                "error",
                {
                  "allowShortCircuit": true,
                  "allowTernary": true,
                  "allowTaggedTemplates": true
                }
              ],
              "no-useless-constructor": "off",
              "@typescript-eslint/no-useless-constructor": "warn",
              "@typescript-eslint/prefer-literal-enum-member": "error",
              "@typescript-eslint/prefer-namespace-keyword": "error"
            }
          },
    ],
    // https://eslint.org/docs/latest/rules/
    rules: {
        // 部分需要在回调中return的数组方法在没有return时报错
        "array-callback-return": "warn",
        // 要求switch/case语句至少有一个default
        "default-case": ["warn", { "commentPattern": "^no default$" }],
        "dot-location": ["warn", "property"],
        "eqeqeq": ["warn", "smart"],
        "new-parens": "warn",
        "no-array-constructor": "warn",
        "no-caller": "warn",
        "no-cond-assign": ["warn", "except-parens"],
        "no-const-assign": "warn",
        "no-control-regex": "warn",
        "no-delete-var": "warn",
        "no-dupe-args": "warn",
        "no-dupe-class-members": "warn",
        "no-dupe-keys": "warn",
        "no-duplicate-case": "warn",
        "no-empty-character-class": "warn",
        "no-empty-pattern": "warn",
        "no-eval": "warn",
        "no-ex-assign": "warn",
        "no-extend-native": "warn",
        "no-extra-bind": "warn",
        "no-extra-label": "warn",
        "no-fallthrough": "warn",
        "no-func-assign": "warn",
        "no-implied-eval": "warn",
        "no-invalid-regexp": "warn",
        "no-iterator": "warn",
        "no-label-var": "warn",
        "no-labels": ["warn", { "allowLoop": true, "allowSwitch": false }],
        "no-lone-blocks": "warn",
        "no-loop-func": "warn",
        "no-mixed-operators": [
          "warn",
          {
            "groups": [
              ["&", "|", "^", "~", "<<", ">>", ">>>"],
              ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
              ["&&", "||"],
              ["in", "instanceof"]
            ],
            "allowSamePrecedence": false
          }
        ],
        "no-multi-str": "warn",
        "no-native-reassign": "warn",
        "no-negated-in-lhs": "warn",
        "no-new-func": "warn",
        "no-new-object": "warn",
        "no-new-symbol": "warn",
        "no-new-wrappers": "warn",
        "no-obj-calls": "warn",
        "no-octal": "warn",
        "no-octal-escape": "warn",
        "no-regex-spaces": "warn",
        "no-restricted-syntax": [
          "warn",
          "WithStatement",
          {
            "message": "substr() is deprecated, use slice() or substring() instead",
            "selector": "MemberExpression > Identifier[name='substr']"
          }
        ],
        "no-script-url": "warn",
        "no-self-assign": "warn",
        "no-self-compare": "warn",
        "no-sequences": "warn",
        "no-shadow-restricted-names": "warn",
        "no-sparse-arrays": "warn",
        "no-template-curly-in-string": "error",
        "no-this-before-super": "warn",
        "no-throw-literal": "warn",
        "no-undef": "error",
        "no-unexpected-multiline": "warn",
        "no-unreachable": "warn",
        "no-unused-expressions": [
          "error",
          {
            "allowShortCircuit": true,
            "allowTernary": true,
            "allowTaggedTemplates": true
          }
        ],
        "no-unused-labels": "warn",
        "no-unused-vars": [
          "warn",
          {
            "args": "none",
            "ignoreRestSiblings": true
          }
        ],
        "no-use-before-define": [
          "warn",
          {
            "functions": false,
            "classes": false,
            "variables": false
          }
        ],
        "no-useless-computed-key": "warn",
        "no-useless-concat": "warn",
        "no-useless-constructor": "warn",
        "no-useless-escape": "warn",
        "no-useless-rename": [
          "warn",
          {
            "ignoreDestructuring": false,
            "ignoreImport": false,
            "ignoreExport": false
          }
        ],
        "no-with": "warn",
        "no-whitespace-before-property": "warn",
        "react-hooks/exhaustive-deps": "warn",
        "require-yield": "warn",
        "rest-spread-spacing": ["warn", "never"],
        "strict": ["warn", "never"],
        "unicode-bom": ["warn", "never"],
        "use-isnan": "warn",
        "valid-typeof": "warn",
        "getter-return": "warn",
        "react/forbid-foreign-prop-types": ["warn", { "allowInPropTypes": true }],
        "react/jsx-no-comment-textnodes": "warn",
        "react/jsx-no-duplicate-props": "warn",
        "react/jsx-no-target-blank": "warn",
        "react/jsx-no-undef": "error",
        "react/jsx-pascal-case": [
          "warn",
          {
            "allowAllCaps": true,
            "ignore": []
          }
        ],
        "react/jsx-uses-react": "warn",
        "react/jsx-uses-vars": "warn",
        "react/no-danger-with-children": "warn",
        "react/no-deprecated": "warn",
        "react/no-direct-mutation-state": "warn",
        "react/no-is-mounted": "warn",
        "react/no-typos": "error",
        "react/react-in-jsx-scope": "error",
        "react/require-render-return": "error",
        "react/style-prop-object": "warn",
        "react-hooks/rules-of-hooks": "error",
        // "@typescript-eslint/non-nullable-type-assertion-style": "warn",
        "@typescript-eslint/prefer-as-const": "warn",
        "@typescript-eslint/no-redeclare": [
          "warn",
          { "builtinGlobals": false, "ignoreDeclarationMerge": true }
        ]
      }
}
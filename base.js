const possibleErrorRules = {
    "no-cond-assign": 2,

    "no-console": 2,

    "no-constant-condition": 2,

    "no-control-regex": 2,

    "no-debugger": 2,

    "no-dupe-args": 2,

    "no-dupe-keys": 2,

    "no-duplicate-case": 2,

    "no-empty": 2,

    "no-empty-character-class": 2,

    "no-ex-assign": 2,

    "no-extra-boolean-cast": 2,

    "no-extra-semi": 2,

    "no-func-assign": 2,

    "no-inner-declarations": 2,

    "no-invalid-regexp": 2,

    "no-irregular-whitespace": 2,

    "no-obj-calls": 2,

    "no-regex-spaces": 2,

    "no-sparse-arrays": 2,

    "no-unexpected-multiline": 2,

    "no-unreachable": 2,

    "no-unsafe-finally": 2,

    "no-unsafe-negation": 2,

    "use-isnan": 2,

    "valid-typeof": 2,
};

const bestPracticeRules = {
    "array-callback-return": 2,

    "curly": 2,

    "dot-location": [2, "property"],

    "dot-notation": [2, {allowKeywords: true}],

    "guard-for-in": 2,

    "no-alert": 2,

    "no-bitwise": 2,

    "no-caller": 2,

    "no-case-declarations": 2,

    "no-div-regex": 2,

    "no-empty-pattern": 2,

    "no-extend-native": 2,

    "no-extra-label": 2,

    "no-extra-bind": 2,

    "no-fallthrough": 2,

    "no-floating-decimal": 2,

    "no-global-assign": 2,

    "no-implicit-globals": 2,

    "no-implied-eval": 2,

    "no-iterator": 2,

    "no-labels": 2,

    "no-lone-blocks": 2,

    "no-multi-spaces": 2,

    "no-multi-str": 2,

    "no-new": 2,

    "no-new-func": 2,

    "no-new-wrappers": 2,

    "no-octal": 2,

    "no-octal-escape": 2,

    "no-proto": 2,

    "no-redeclare": 2,

    "no-script-url": 2,

    "no-self-assign": 2,

    "no-self-compare": 2,

    "no-sequences": 2,

    "no-unmodified-loop-condition": 2,

    "no-unused-labels": 2,

    "no-useless-call": 2,

    "no-useless-concat": 2,

    "no-useless-escape": 2,

    "no-void": 2,

    "no-with": 2,

    "radix": 2,

    "wrap-iife": 2,

    "yoda": 2,
};

const variablesRules = {
    "no-catch-shadow": 2,

    "no-delete-var": 2,

    "no-label-var": 2,

    "no-restricted-globals": 2,

    "no-shadow-restricted-names": 2,

    "no-undef": 2,

    "no-unused-vars": 2,

    "no-use-before-define": [2, "nofunc"],
};

const styleRules = {
    "block-spacing": [2, "never"],

    "brace-style": [2, "stroustrup", { allowSingleLine: true }],

    "comma-style": [2, "last"],

    "eol-last": 2,

    "func-call-spacing": 2,

    "indent": [2, 4, { SwitchCase: 1 }],

    "jsx-quotes": [2, "prefer-double"],

    "keyword-spacing": 2,

    "linebreak-style": [2, "unix"],

    "max-len": [2, 140, 4],

    "no-array-constructor": 2,

    "no-bitwise": 2,

    "no-continue": 2,

    "no-mixed-spaces-and-tabs": 2,

    "no-multiple-empty-lines": [2, { max: 1 }],

    "no-new-object": 2,

    "no-unneeded-ternary": 2,

    "no-whitespace-before-property": 2,

    "one-var": [2, "never"],

    "operator-linebreak": [2, "after"],

    "semi-spacing": [2, { before: false, after: true }],

    "space-before-blocks": 2,

    "space-before-function-paren": [2, "never"],

    "space-infix-ops": 2,

    "spaced-comment": 2,

    "wrap-regex": 2,
};

const es6Rules = {
    "arrow-spacing": 2,

    "constructor-super": 2,

    "no-class-assign": 2,

    "no-const-assign": 2,

    "no-dupe-class-members": 2,

    "no-duplicate-imports": 2,

    "no-new-symbol": 2,

    "no-this-before-super": 2,

    "no-useless-computed-key": 2,

    "no-useless-constructor": 2,

    "no-var": 2,

    "prefer-const": 2,

    "prefer-rest-params": 2,

    "prefer-spread": 2,

    "require-yield": 2,
};

module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },

    parser: "babel-eslint",

    rules: Object.assign(
        {},
        possibleErrorRules,
        bestPracticeRules,
        variablesRules,
        styleRules,
        es6Rules
    ),
};

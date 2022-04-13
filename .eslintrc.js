export default {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:import/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'project': './tsconfig.json',
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint'
    ],

      "ignorePatterns": [
        "!**/*",
        "**/*.spec.ts",
        "**/*.test.ts",
        "**/*.spec.tsx",
        "**/*.test.tsx",
        "**/*.spec.js",
        "**/*.test.js",
        "**/*.spec.jsx",
        "**/*.test.jsx",
        "public",
        ".cache",
        "node_modules"
      ],
      "settings": {
        "import/resolver": {
          "typescript": {
            "project": ["./tsconfig.json"]
          }
        }
      },
      "overrides": [
        {
          "files": ["*.ts", "*.tsx", "*.js", "*.jsx"],
          "rules": {
            "prettier/prettier": [
              "error",
              {
                "endOfLine": "auto"
              }
            ],
            "@typescript-eslint/naming-convention": [
              "error",
              {
                "selector": "memberLike",
                "modifiers": ["private"],
                "format": ["camelCase"],
                "leadingUnderscore": "require"
              }
            ],
            "react/jsx-filename-extension": "off",
            "@typescript-eslint/interface-name-prefix": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "react/function-component-definition": "off",
            "no-underscore-dangle": "off",
            "import/prefer-default-export": "off",
            "react/jsx-props-no-spreading": "off",
            "react/require-default-props": "off",
            "no-plusplus": "off"
          }
        },
        {
          "files": ["*.ts", "*.tsx"],
          "rules": {
            "@typescript-eslint/camelcase": "off"
          }
        },
        {
          "files": ["*.js", "*.jsx"],
          "rules": {}
        }
      ],
    }

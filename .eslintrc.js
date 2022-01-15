// jsx适配
module.exports = {
  "parser": "babel-eslint",
  "extends": [
      "airbnb",
      "prettier",
      "prettier/react"
  ],
  "env": {
      "browser": true
  },
  "plugins": [
      "react",
      "jsx-a11y",
      "import",
      "prettier"
  ],
  "rules": {
      "no-console": "off",
      "linebreak-style": "off",
      "react/jsx-filename-extension": [
          1,
          {
              "extensions": [".js", ".jsx"]
          }
      ],
      "react/react-in-jsx-scope": 0,
      "prettier/prettier": [
          "error",
          {
              "trailingComma": "es5",
              "singleQuote": true,
              "printWidth": 120
          }
      ]
  }
}
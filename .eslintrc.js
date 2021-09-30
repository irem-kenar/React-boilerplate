/* eslint-disable prettier/prettier */
// {
//     "parser": "babel-eslint",
//     "extends": ["prettier"],
//     "plugins": ["prettier"],
//     "rules": {
//       "prefer-destructuring": ["error", {"object": true, "array": true}],
//       "no-var": ["error"],
//       "prettier/prettier": ["error"]
//     }
//   }

module.exports = {
  extends: ["eslint-config-react-app", "plugin:prettier/recommended"],
  rules: {
    "no-console": 2,
  },
};

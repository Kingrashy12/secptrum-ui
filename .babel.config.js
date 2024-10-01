module.exports = {
  presets: [["@babel/preset-env", { module: false }], , "@babel/preset-react"],
  plugins: [
    [
      "babel-plugin-styled-components",
      {
        displayName: true,
        namespace: "Sui",
        fileName: false,
      },
    ],
  ],
};

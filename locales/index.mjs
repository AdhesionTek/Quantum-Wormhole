import i18nextify from "https://cdn.skypack.dev/i18nextify";

i18nextify.init({
  fallbackLng: ["en", "zh"],
  ele: document,
  ignoreTags: ["SCRIPT", "STYLE"],
});

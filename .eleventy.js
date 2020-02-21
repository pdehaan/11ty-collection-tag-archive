module.exports = eleventyConfig => {
  eleventyConfig.addLiquidFilter("dump", require("util").inspect);
  // Usage: `{%- assign $title = title | or: renderData.title, site.title -%}`
  eleventyConfig.addLiquidFilter("or", (value="", ...values) => {
    // prepend the `value` value at the front of the `values[]` array.
    values.unshift(value);
    return values.find(truthy);
  });

  eleventyConfig.addLiquidFilter("truthy", truthy);
  eleventyConfig.addLiquidFilter("falsy", value => !truthy(value));
  eleventyConfig.addLiquidFilter("Boolean", Boolean);

  eleventyConfig.addLiquidFilter("check", value => value ? "✔️" : "&nbsp;");

  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setQuietMode(true);

  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};

function truthy(value) {
  if (value === 0) return true;
  return Boolean(value);
}

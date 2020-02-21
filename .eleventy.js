module.exports = eleventyConfig => {
  eleventyConfig.addLiquidFilter("dump", require("util").inspect);

  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setQuietMode(true);

  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};

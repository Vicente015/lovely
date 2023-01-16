import lume from "lume/mod.ts";
import remark from "lume/plugins/remark.ts";
import remarkWikiLink from 'npm:remark-wiki-link-plus'

// Apply the plugin config
const site = lume();

site.copy(['.jpg', '.ttf', '.js'])
site.use(remark({
  remarkPlugins: [remarkWikiLink]
}));

export default site;

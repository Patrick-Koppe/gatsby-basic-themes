# Setup our Project ⚙️

## Install Gatsby in www folder
<ol>
<li>Move in www folder<code>cd www</code>.</li>
<li>Install gatsby <code>yarn workspace site add gatsby</code>.</li>
workspace <b>site</b> is the name of package.json in the www folder.
<li>Add our basic theme to the package json.</li>
<li>Add the "scripts" Object in this package json of this props: 
<code>"develop": "gatsby develop"</code>.</li>
<li>Add also the build task<code>"build": "gatsby build"</code>.</li>
</ol>

## Install our basic theme in basic-theme
<ol>
<li>Move in basic-theme folder<code>cd basic-theme</code>.</li>
<li>Install gatsby <code>yarn workspace basic-theme add gatsby -D</code>.</li>
workspace <b>basic-theme</b> is the name of package.json in the www folder and with dev Dependencies.
<li>Edit the package.json in the basic-theme directory. Copy the devDependencies and paste it and change it to <code>"peerDependencies": {...}</code>.
</li>
<li>Install React & React-dom and React <code>yarn workspace basic-theme add react react-dom -D</code>.</li>
<li>Add also these dependencies in the peerDependencies config.
<li> Install react & react-dom also for site workspace
<code>yarn workspace site add react react-dom</code>
</li>
</ol>

# It's time to build our basic theme 🎉
<ol>
<li>Create the src pages</li>
<code>src/pages/index.mdx</code></br>
<code>src/pages/index.js</code> insert here comment no-op. This file is for entrypoint in package json.
<li>Add gatby mdx as dependencies to transform the markdown: 
<code>yarn workspace basic-theme add gatsby-plugin-mdx</code>
</li>
<li>Add a gatsby-config in the src folder for this plugin
<code>src/gatsby-config.js</code>
</li>
<li>Insert here your plugins, resvole plugin and their options, if needed</li>
<li>Add the gatsby page creator to create a page in plugin, so we could use it in the site:
<code>yarn workspace basic-theme add gatsby-plugin-page-creator</code>
<li>Edit the gatsby-config.js with the params for the page-creator</li>
<li>We also need mdx-tag for the gatsby-mdx</li>
<code>yarn workspace basic-theme add @mdx-js/mdx @mdx-js/tag</code>
</li>
<li>Add gtsby-config.js to the site</li>
<code>www/gatsby-config.js</code>
<li>Edit this gatsby-config.js to use our theme</li>
<li>Test our theme 🎉 <code>yarn workspace site develop</code></li>
</ol>


# Useful commands  🛠
<code>yarn</code> : Install packages </br>
<code>yarn workspaces info</code> : Check dependencies </br>
<code>yarn workspace xxx add YYY</code> : Add package YYY only in workspace XXX
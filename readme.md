# Let's start

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

## Install our theme in basic-theme
<ol>
<li>Move in basic-theme folder<code>cd basic-theme</code>.</li>
<li>Install gatsby <code>yarn workspace basic-theme add gatsby -D</code>.</li>
workspace <b>basic-theme</b> is the name of package.json in the www folder and with dev Dependencies.
</ol>
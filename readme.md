# Setup our Project

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
<li>Edit the package.json in the basic-theme directory. Copy the devDependencies and paste it and change it to <code>"peerDependencies": {...}</code>.
</li>
<li>Install React & React-dom and React <code>yarn workspace basic-theme add react react-dom -D</code>.</li>
<li>Add also these dependencies in the peerDependencies config.
<li> Install react & react-dom also for site workspace
<code>yarn workspace site add react react-dom</code>
</li>
</ol>
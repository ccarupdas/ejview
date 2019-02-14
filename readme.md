Node With express generator
===========================
npm install express-generator -g
<!-- create with ejs view engine support. -->
	--express --view=ejs ejview
	--Open = cd ejview
	--Install = npm install
	--Run - Debug = set DEBUG=ejview:* & npm start
	--Run - Demon = SET DEBUG=ejview:* & npm run devstart
	--Run = npm start
/* Install nodemon for real time debug Dev depandency */
	--npm install nodemon --save-dev
"scripts": {
    "start": "node ./bin/www"
  },
  <b>TO</b>
"scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },
-------------------------
<!-- Enable Babel For Multi Browser Support -->
  --npm install @babel/core @babel/node --save-dev
<!-- Enable DOT ENV -->
npm install dotenv --save
================================
GIT
================================
git push --set-upstream https://github.com/ccarupdas/ejview.git master
git checkout staging
git rm package-lock.json
git config --local credential.helper ""
git push origin staging
git config --global --list
git config --local --list
===
RefURLs: https://expressjs.com/en/guide/routing.html
https://www.robinwieruch.de/minimal-node-js-babel-setup/
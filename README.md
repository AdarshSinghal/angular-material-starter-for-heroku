# angular-material-starter-for-heroku
This app is skeleton for Angular Material App which is easily deployable in heroku. All you need to do is just clone this repository &amp; deploy in heroku.

Follow these simple steps:-

1) Clone the git repository using the command<br>
<pre> git clone https://github.com/AdarshSinghal/angular-material-starter-for-heroku </pre>
2) Go to heroku.com and create new Heroku App. Also, download and install the <a href='https://devcenter.heroku.com/articles/heroku-command-line'>Heroku CLI</a> <br>

3) Log in to your Heroku account by using the command in Heroku CLI.
  <pre>$ heroku login</pre>
4) Open the Command Window from your project location and clone the repository. Type the following into Heroku CLI.
<pre>$ heroku git:remote -a your_new_heroku_app_name</pre>
5) Make some changes to the code you just cloned and deploy them to Heroku using Git.

  <pre>$ git add .
$ git commit -m "fixed the bug"
$ git push heroku master</pre>
You can now open app from your heroku account. The url should be like your_new_heroku_app_name.herokuapp.com<br>
This is what it looks like:- <a href="https://ngmaterial.herokuapp.com/" target="_blank">Demo</a>

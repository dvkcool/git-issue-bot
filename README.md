# Building a Slack Horoscope Bot on Hasura

This tutorial consists of a quickstart github bot which can be easily deployed and modified.

This bot encourages a user when he/she opens a new issue and also it encourages the collaborator who closes the issue.
This can be used to manage a good online environment on github.

## Demo
 ![Opening an issue](https://github.com/dvkcool/git-issue-bot/blob/master/demo/closingbot.gif?raw=true)
 ![Closing an issue](https://github.com/dvkcool/git-issue-bot/blob/master/demo/openingbot.gif?raw=true)

## API used

Github API client by [Philip Schatz](https://github.com/philschatz/octokat.js)


## Pre-requisites

* [NodeJS](https://nodejs.org)

* [hasura CLI](https://docs.hasura.io/0.15/manual/install-hasura-cli.html)

## Getting the bot running

### Create a new Github account for your bot

* Navigate to https://github.com
* Choose sign-up and follow procedures to create a new account and password.

* Now login back to your main account (Do not forget this step)
* Head over to the Settings page, click on Developer settings, head over to Github Apps from side bar and click on new Github App.
![githubapp](https://github.com/dvkcool/git-issue-bot/blob/master/demo/githubapp.png?raw=true)

* Fill the details such as Homepage url(Optional but you give me a few credits too) and webhook url. The webhook url is https://bot.yourclustername.hasura-app.io/webhook.
![Webhook](https://github.com/dvkcool/git-issue-bot/blob/master/demo/webhook.png?raw=true)

* Scroll down to Permissions and choose Read and write for Issues.
![Permission](https://github.com/dvkcool/git-issue-bot/blob/master/demo/permissions.png?raw=true)

* Scroll more and subscribe to Issue events.
![Subscribe](https://github.com/dvkcool/git-issue-bot/blob/master/demo/subscribeissues.png?raw=true)

* Then click on Save
* Now click on Install Tab on sidebar and click on install, this will add this app to all repositories of the main user.
![Install](https://github.com/dvkcool/git-issue-bot/blob/master/demo/install.png?raw=true)


### Getting the Hasura project

```sh
$ hasura quickstart dvk/git-issue-bot
$ cd slack-horoscope-bot
# Add Github credentials to hasura secrets. 
$hasura secrets update username.key  <Your bot account username>
$ hasura secrets update password.key <Your bot account password>
# Deploy
$ git add . && git commit -m "Deployment commit"
$ git push hasura master
```


### Viewing bot in action
Just create an issue or close and issue, you will see the bot in action.

Congratulations you have succesfully deployed the slack horoscope bot.


## Modifying the bot

Head over to microservices/bot/src/
And start editing server.js
Soon enough you will have your node js slack bot ready

Happy Developing :)
Divyanshu Kumar
## Support

If you happen to get stuck anywhere, feel free to mail me at divyanshukumarg@gmail.com. Also, if you find a bug or an issue, you can raise an issue [here](https://github.com/dvkcool/git-issue-bot)

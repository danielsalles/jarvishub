# JarvisHub
JarvisHub is a project that focuses on making life easier for large Github repositories. Nowadays there are a lot of similar issue in a repository, jarvishub finds similar issues and comments.

## Flow
1. It collects all old issues, if it is the first time it is running.
2. Then through a webhook configured in your github repository, it analyzes new issues and looks similar.
3. Quickly that's how it works.

## Requirements
- Nodejs 9+
- NPM
- Docker
- Docker-composer
- Elastic Search (luckily this project contains docker-compose to run locally)
- Redis (luckily this project contains docker-compose to run locally)

## Install and use

1. First of all, we must clone the project.
`git clone git@github.com:danielsalles/jarvishub.git`
2. After cloning we should run the npm to install the dependencies.
`npm install`
3. Next step is to configure the environment variables. Then, change the `.example.env` file to `.env`
If you're going to run locally, you should only worry about the Github environment variables.
```
REPO=Name repository.
OWNER=Name of the user who owns the repository.
TOKEN_GITHUB=https://github.com/settings/tokens -> Personal Token
```
4. Now we must start our services of docker-compose.
`docker-compose up`
5. After that we should start our queue.
`npm run queue`
6. If it is the first time you are running, you have to collect the old issues.
`npm run collector`
7. Now we can start our server.
`npm run server`
8. To receive the new issues, we must configure webhook in our github repository.
`In your repository -> settings -> webhook -> add webhook`
- **Payload URL** -> URL of your server followed by `/issuehook` (here you can use ngrok to test locally).
- **Content type** -> `application/json`
- **Secret** -> Any password
- **Which events would you like to trigger this webhook?** -> Select `Let me select individual events.` and mark only `issue`
9. Ready. You're ready now.

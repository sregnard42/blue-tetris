Live version : https://blue-tetris.herokuapp.com/

Node server with React client, creation tutorial : https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/

git - Clone and pull from github, push both on github and vogsphere :

```
> git clone https://github.com/sregnard42/blue-tetris.git`
> cd blue-tetris
> git remote set-url --add --push origin https://github.com/sregnard42/blue-tetris.git
> git remote set-url --add --push origin git@vogsphere-v2.42.fr:vogsphere/intra-uuid-d5156516-c241-4505-bc88-53abd2227bc5-3634760
> git remote show origin
Fetch URL: https://github.com/sregnard42/blue-tetris.git
Push  URL: https://github.com/sregnard42/blue-tetris.git`
Push  URL: git@vogsphere-v2.42.fr:vogsphere/intra-uuid-d5156516-c241-4505-bc88-53abd2227bc5-3634760
...
```

Heroku is set up to deploy automatically from github master branch

npm - Launch server and client

```
                                // go to root folder if not already there
> npm install                   // install node_modules for server
> npm start                     // start server
> cd client                     // move inside client folder
> npm install                   // install node_modules for client
> npm start to start client    // start client
```
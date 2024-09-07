# Streamify Analytics
This is a mock app for [a music streaming service analytics](https://docs.google.com/document/d/1JLZk733vTGRoZn4fFjP0IkodMvVIMr4Vn_irDabEZgs/edit).

### Local Deployement
To deploy this app locally, run the following commands
```bash
$ git clone https://github.com/NabilNYMansour/streamify-analytics-mock-app;
$ yarn;
$ yarn setupDB;
$ yarn build;
$ yarn start;
```
Note that `yarn` is needed here as the `setupDB` script calls `yarn` multiple times. If you do not use `yarn` you can run the following instead of `setupDB`
```bash
$ npm run drizzle:generate;
$ npm run drizzle:migrate;
$ npm run drizzle:seed;
``` 
And as you can see from the commands, `setDB` simply seeds the database with data from `faker.js`.

### Logic behind the decisions
- The app uses [Mantine UI](https://mantine.dev/) for the components and charts library and [Drizzle](https://orm.drizzle.team/) for the database. These reason why these were used is because of how fast one can create and deploy a semi-production-ready  application in a couple of days.
- Songs were not used for the database since I could not find a good dataset to use and so users are instead randomly generated using [faker.js](https://fakerjs.dev/) and the filtering/sorting is applied to them.
- The web app is reactive and should change accordingly to screen size.
- In many parts of the code, a delay is applied to simulate server delay. This is done to highlight the skeleton loading of some components.

Cheers 👍

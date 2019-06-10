# Feedback forms app

In server folder you can find ASP.NET Core App which will serve a REST API for user's feedbacks.
In client folder you can find React.JS Typescript app which uses the server app.

To start server app:
- Run `cd server/FeedbackFormsWeb`
- Run `dotnet run`

To start client app:
- Run `cd client/feedback-form`
- Download packages via `yarn`
- Start the app with `yarn start` command

# Without database the server will not work!

To create development database server
- Create postgres database called `feedback_forms`
- Create application user
- run script from `./database_init_scripts/Init.sql`

To perform first 2 steps you can copy-paste following script

```sql
create database feedback_forms;
create role feedbackformuser with login password 'sa_]K8-,dNz-J57M'
```

If your postgres server is not located on localhost or has diffrent port from 5432 you should also change the connection string from appsettings.development.json


# Troubleshooting

You may also need to set a developer certificate for https and/or change server url in `client/feedback-form/src/config.json`
based on how did you launch server. I launched the project with Visual Studio For Mac and it worked without any modifications.

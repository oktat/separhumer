# Separated humer REST API

Express based REST API for separated humer.

## Install

```cmd
npm install
```

## Copy config file

Copy **config/default.json.example** to **config/default.json** file.

## APP KEY generation

Run the genkey:

```cmd
node op key:generate
```

## Database settings

The database settings can be found at the following location:

* config/default.json

### Database dialect

The default database is an in-memory database. Its contents are cleared after the server is restarted.

One of:

* sqlite
* mariadb

After installing the appropriate dependencies, it can be used:

* mysql
* postgres
* mssql
* db2
* snowflake
* oracle

With the `sqlite` option, the usual path setting is `database.sqlite`. The default storage is :memory:, where data is stored in memory only.

## Starting

For development:

```cmd
npm run dev
```

Run productum:

```cmd
npm start
```

## Model and controller creation

You can generate a model and controller with the following commands:

```bash
node op make:model something
node op make:controller something
```

The name after the model and controller statements must be given in the singular. Controller generation automatically appends the "Controller" suffix.

## Admin user

The admin user can be created with the following command:

```bash
node op admin:generate
```

The command will prompt for the password.

## Config generation

The next command generates the default config file:

```bash
node op conf:generate
```

## Database seed

The database can be seeded with the following command:

```bash
node op db:seed <model_name> <file_path>
```

The model name must be given in the singular and lowercase. The file extension must be:

* .json
* .csv

The keys in the JSON file and the field names in the CSV file must match the model fields.

If the CSV file contains quotation marks, they are automatically removed.

## Endpoints

### User handling

| Endpoint | Method | Auth | CRUD | Description |
|-|-|-|-|-|
| /api/login | POST  | no | create | login user |
| /api/users | GET | yes | read | get all users |
| /api/users | POST | yes | create | create user |
| /api/users/:id | GET | yes | read | get user |
| /api/users/:id | PATCH | yes | update | update user data |
| /api/users/:id/password | PATCH | yes | update | update password |
| /api/users/:id | DELETE | yes | delete | delete user |

### Employee handling

| Endpoint | Method | Auth | CRUD | Description |
|-|-|-|-|-|
| /api/employees | GET | yes | read | get all employees |
| /api/employees | POST | yes | create | create employee |
| /api/employees/:id | GET | yes | read | get employee |
| /api/employees/:id | PUT | yes | update | update employee data |
| /api/employees/:id | DELETE | yes | delete | delete employee |
| /emp/:empId/proj/:projId | POST | yes | create | add employee to project |
| /emp/:empId/proj/:projId | DELETE | yes | delete | delete employee from project  |

### Rank handling

| Endpoint | Method | Auth | CRUD | Description |
|-|-|-|-|-|
| /api/ranks | GET | yes | read | get all ranks |
| /api/ranks | POST | yes | create | create rank |
| /api/ranks/:id | GET | yes | read | get rank |
| /api/ranks/:id | PUT | yes | update | update rank data |
| /api/ranks/:id | DELETE | yes | delete | delete rank |

### Project handling

| Endpoint | Method | Auth | CRUD | Description |
|-|-|-|-|-|
| /api/projects | GET | yes | read | get all projects |
| /api/projects | POST | yes | create | create project |
| /api/projects/:id | GET | yes | read | get project |
| /api/projects/:id | PUT | yes | update | update project data |
| /api/projects/:id | DELETE | yes | delete | delete project |

## Licence

May be freely distributed under the MIT license.

Copyright (c) 2023 Sallai András

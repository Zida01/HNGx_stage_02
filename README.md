# CRUD API

This is a crud API built with Nodejs and MongoDB

## Installation

Use the package manager [NPM](https://pip.pypa.io/en/stable/) to install Npm and other dependencies.

```bash
npm init -y
```

## install nodemon as a development dependency:

```bash
npm install --save-dev nodemon
```

## Configuration

- go to package.json file and add the code below in the"scripts"

```javascript
 "start": "nodemon app.js",
```

- create a **_.env_** file and add your **MONGODB_URI**

## start the server

```javavscript
 npm  run dev
```

## API Reference

<!-- #### GET ALL PERSON

```http
  GET /api/all
```

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| ` all`    | `string` |             | -->

#### GET PERSON

```http
  GET /api/name
```

| Parameter | Type     | Description        |
| :-------- | :------- | :----------------- |
| `name`    | `string` | **Required**. name |

### CREATE PERSON

```http
  POST /api/
```

| body           | Type   | Description               |
| :------------- | :----- | :------------------------ |
| `name and age` | `json` | **Required** name and age |

#### Response

return the name and age in **JSON** format

### UPDATE PERSON

```http
  PUT /api/name
```

| Parameter | Type     | Description        |
| :-------- | :------- | :----------------- |
| `name`    | `string` | **Required**. name |

#### Response

returns the updated name and age data in **JSON** format#

### DELETE PERSON

```http
  DELETE /api/name
```

| Parameter | Type     | Description        |
| :-------- | :------- | :----------------- |
| `name`    | `string` | **Required**. name |

#### Response

returns JSON reponse `user $(name)  has been deleted`

**user_id is the name of the person**

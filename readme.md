## Simple Bookstore Mern using NodeJs and ReactJs and Tailwind CSS
## freecodecamp.org youtube video remake

# Backend
# 1. cd /backend
    npm init -y => made package.json file
    npm i express nodemon mongoose cors dotenv

    npm run dev

    
# Frontend
# 2. cd /BOOKSTORE-MERN
    npm create vite@latest (React, JavaScript)
    npm i

**********************************************************************************************************************************************************
    INSTALL TAILWIND:
**********************************************************************************************************************************************************
    npm i -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
	Created Tailwind CSS config file: tailwind.config.js
	Created PostCSS config file: postcss.config.js
----------------------------------------------------------------------------------------------------------------------------

change tailwind.config.js
---------------------------------------------------
	FROM THIS
  content: [],

	TO THIS
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
----------------------------------------------------------------------------------------------------------------------------

change src/index.css
---------------------------------------------------
	delete everything in it and paste the below

@tailwind base;
@tailwind components;
@tailwind utilities;
----------------------------------------------------------------------------------------------------------------------------

ALSO DELETE src/app.css file
**********************************************************************************************************************************************************


    npm run dev

    npm i react-router-dom
    npm i axios react-icons
    npm i notistack
    npm i prop-types


### create file named .env in home directory of backend folder

    export const PORT = 5555;

    export const MONGODB_URI =
        'mongodb+srv://<username>:<password>@cluster0.asglspa.mongodb.net/<databaseName>?retryWrites=true&w=majority'





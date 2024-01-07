# 1. can i use dotenv to store client secret and passkey used in code for oauth authencticstion code so as to not upload it to github while uploading the code git hub

Yes, you can use `.env` files to store sensitive information such as client secrets and passkeys. This is a common practice to keep sensitive data out of your codebase, especially when your code is to be uploaded to a public repository like GitHub.

Here's a simple example of how you can use the `dotenv` package in a Node.js application:

```javascript
require('dotenv').config();

const clientSecret = process.env.CLIENT_SECRET;
const passKey = process.env.PASS_KEY;
```

In this example, `CLIENT_SECRET` and `PASS_KEY` are stored in a `.env` file in the root directory of your project. This file should not be uploaded to GitHub. To ensure this, add `.env` to your `.gitignore` file.

Remember, never upload sensitive data to public repositories. Always use environment variables or some form of secure secret management.

# 2. 

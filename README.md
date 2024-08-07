### Prompt

Create a React component that fetches data from a RESTful API endpoint and displays it in a table. Implement pagination to allow the user to navigate through the data. Ensure the table is accessible and follows WCAG standards.

### Feedback / Response
![React Game Table](https://i.gyazo.com/f7f2c9ca1ee6ac7ff51c2b2d222a929c.png)

1. I decided to use the previous game code to make a table out of it, and refactored games list to render lists instead of general items

### Stack: React, Material UI { using ts(x) }

1. React app bootstrapped with CRA
2. Material UI using emotion for style composition
3. SSL support + SSL setup for local dev
4. Auth0 integration for SSO authentication
5. Navigation tree setup
6. Respect system's dark/light mode

### Getting started

1. Generate SSL cert (don't self sign) using `mkcert`
2. `brew install mkcert`
3. `mkcert --install` [GH](https://github.com/FiloSottile/mkcert)
4. `npm i`
5. `npm run start`
6. Add Auth0 keys to `.env.development.local` file

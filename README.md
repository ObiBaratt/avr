# Installation

1. Run install at root, and for each app.

# Running Instructions (From Root)

Using yarn as an example, run `yarn start` in separate terminals for each app:

- `cd angular-app`
- `yarn start`
- `cd ../vue-app`
- `yarn start`
- `cd ../react-app`
- `yarn start`
- `cd ..`

You should be in the project root. From there double check that all the servers are running on the correct ports as indicated in the root `index.html`: Angular: 4200, Vue: 5173, React: 3001. If not the easiest fix is to change the iframe src to whereever they're running on your machine.

Last command:

- `serve .`

The combined project should be running on localhost:3000, go there and gaze into the abyss.

# How does it work?

By cheating. Each app is running on a separate server in a different location, then brought into the main `index.html` on localhost:3000 using iframes.

# Why would you do this?

Part of the Framework Field Guide is learning Angular, Vue, and React at the same time. I thought, why not do that literally? This is my starter template for all the exercises so that I can complete the challenges in all three frameworks and easily compare the three apps.

# react-native-with-firebase

An example of using React Native with Firebase 3 for user authentication. When the application starts up it will show a login screen for the user to login and a button leading to a sign-up page.

## Getting Started

**Clone:**

```
$ git clone https://github.com/farrellScript/react-native-with-firebase.git
$ cd react-native-with-firebase
```

**Fetch dependencies:**

```
$ npm install
```

**Add Firebase credentials:**

Edit the `config` variable in `src/components/authentication/signin.js` to match your Firebase credentials. To find these go to https://console.firebase.google.com, click on the name of your project (or create a new project), then click "Add Firebase to your web app".

**Start the app:**

```
$ npm start
$ react-native run-ios
```

If the server starts and you're able to open access your application in the iOS simulator without issue, then you're in good shape.

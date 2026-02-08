framework: "cucumber",

cucumberOpts: {
  require: [
    "./features/step-definitions/*.js",
    "./features/support/hooks.js"
  ],
},

waitforTimeout: 5000,
connectionRetryTimeout: 120000,
connectionRetryCount: 3,
specFileRetries: 1,
reporters: ["spec"],

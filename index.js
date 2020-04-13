

let cron = require("node-cron");

let utils = require("./utils/utils.js");

cron.schedule("* * * * * *", () => {
  console.log("running a task every second");
  utils.send(
    {
      text: "gmail-send example 1"
    },
    (error, result, fullResult) => {
      if (error) console.error(error);
      console.log(result);
    }
  );
});

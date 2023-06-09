// const { cwd } = require("node:process");

//Output a prompt
// process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); //remove the newline

  if (cmd === "pwd") {
    const currentDirectory = process.cwd();
    process.stdout.write(currentDirectory);
  } else {
    process.stdout.write("You typed: " + cmd);
  }

  process.stdout.write("\nprompt > ");
});

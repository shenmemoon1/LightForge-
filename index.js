const { program } = require("commander");

program
  .name("lim")
  .usage(`<command>[ [options]]`)
  .version(`1.0.0`)
  .command("create <project-name>")
  .description("Create a new project")
  .action((projectName, cmd) => console.log(projectName, cmd));

program.parse();

// Require dependencies
const Generator = require('yeoman-generator');

// Configurations will be loaded here.
module.exports = class extends Generator {
  // Ask for user input
  prompting() {
    const done = this.async();
    this.prompt({
      type: 'input',
      name: 'name',
      message: 'Your project name',
      // Defaults to the project's folder name if the input is skipped
      default: this.appname,
    }, (answers) => {
      this.props = answers;
      this.log(answers.name);
      done();
    });
  }

  // Writing Logic
  writing() {
    // Copy the configuration files
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      { name: this.props.name },
    );
    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js'),
    );

    // Copy application files
    // Public: index.html
    this.fs.copyTpl(
      this.templatePath('src/index.html'),
      this.destinationPath('src/index.html'),
      { name: this.props.name },
    );
    // Entry point: index.js
    this.fs.copy(
      this.templatePath('src/index.js'),
      this.destinationPath('src/index.js'),
    );
  }

  // Install Dependencies
  install() {
    this.installDependencies();
  }
};

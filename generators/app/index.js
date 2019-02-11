'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your name project',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    // Copy the root files
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      { name: this.props.name }
    );
    this.fs.copy(
      this.templatePath('_webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
    this.fs.copy(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc')
    );

    // Copy application files
    this.fs.copy(
      this.templatePath('src/index.html'),
      this.destinationPath('src/index.html')
    );
    this.fs.copy(
      this.templatePath('src/index.js'),
      this.destinationPath('src/index.js')
    );
  }

  install() {
    this.npmInstall();
  }
};

var gruntHelpers = {
  setupGrunt: function() {
    this.fs.copy(
      this.templatePath('_Gruntfile.js'),
      this.destinationPath('Gruntfile.js')
    );
    this.npmInstall([
      'grunt',
      'grunt-angular-templates',
      'grunt-browserify',
      'grunt-contrib-clean',
      'grunt-contrib-compress',
      'grunt-contrib-concat',
      'grunt-contrib-connect',
      'grunt-contrib-copy',
      'grunt-contrib-cssmin',
      'grunt-contrib-less',
      'grunt-contrib-uglify',
      'grunt-express',
      'grunt-karma',
      'grunt-package-modules',
      'grunt-mocha-cli',
      'grunt-ts',
      'grunt-tslint',
      'karma',
      'karma-browserify',
      'karma-chai',
      'karma-coverage',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
      'karma-sinon-chai',
      'load-grunt-config',
      'mocha',
      'mocha-better-spec-reporter',
      'phantomjs',
      'should',
      'sinon',
      'tslint',
      'yadda'
    ], {
      saveDev: true
    });

    this.fs.copyTpl(
      this.templatePath('grunt/_ts.coffee'),
      this.destinationPath('grunt/ts-tasks.coffee'),
      this
    );

    this.fs.copyTpl(
      this.templatePath('grunt/_test.coffee'),
      this.destinationPath('grunt/test-tasks.coffee'),
      this
    );

    this.fs.copy(
      this.templatePath('_karma.conf.js'),
      this.destinationPath('test/karma.conf.js')
    );

    this.fs.copy(
      this.templatePath('_test.spec.template'),
      this.destinationPath('test/template/test.spec.template')
    );

    this.fs.copyTpl(
      this.templatePath('grunt/_ngtemplate.coffee'),
      this.destinationPath('grunt/ngtemplate.coffee'),
      this
    );
  }
};

module.exports = gruntHelpers;

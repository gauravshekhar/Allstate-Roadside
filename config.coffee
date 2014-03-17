exports.config =

  modules:
    definition: false
    wrapper: false

  paths:
    public: 'public'

  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^vendor/
      order:
        before: [
          'vendor/jquery-1.11.0.js',
          'vendor/angular-1.2.0.js',
          'vendor/angular-1.2.0.js'
        ]
        after: []

    stylesheets:
      joinTo:
        'stylesheets/app.css': /^(app|vendor)/
        'test/stylesheets/test.css': /^test/
      order:
        before: []
        after: []



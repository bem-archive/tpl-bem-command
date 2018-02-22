# tpl-bem-command

Project template for the [bem-tools](http://bem.info/tools/bem/) subcommands.
Based on [tpl-cli](https://github.com/arikon/tpl-cli).

## What's inside?

- [mocha](http://mochajs.org/) as a test framework
- [istanbul](https://github.com/gotwarlost/istanbul) as a code coverage tool
- `GNUmakefile`
  - run tests by executing `make test`
  - produce code coverage report by executing `make coverage`
- Preconfigured [Travis CI](http://travis-ci.org) integration
- Contributing Guide in CONTRIBUTING.md
- ChangeLog stub in ChangeLog.md

## How to use

Install [volo](http://volojs.org/)

    npm -g install volo

Create project using template

    volo create your-project-name bem/tpl-bem-command

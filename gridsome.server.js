const path = require('path')
const fs = require('fs-extra')
const execa = require('execa')
const yaml = require('js-yaml')

module.exports = function (api) {
  api.loadSource(store => {
    store.addMetadata('metaDivider', '∙')
  })
}

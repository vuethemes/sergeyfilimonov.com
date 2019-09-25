module.exports = function (api) {
  api.loadSource(store => {
    store.addMetadata('metaDivider', '∙')
  })
}

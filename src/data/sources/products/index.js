const Airtable = require('airtable')

module.exports = function (api, opts) {
  const base = new Airtable({apiKey: opts.apiKey}).base(opts.base)

  api.loadSource(async store => {
    const contentType = store.addContentType({
        typeName: 'Course',
        route: '/course/:slug',
    })

    await base('Курсы').select().eachPage((records, fetchNextPage) => {
      records.forEach((record) => {
        const item = record._rawJson

        contentType.addNode({
          id: item.ID,
          title: item.fields.Код,
        });
      });
      fetchNextPage()
    })
  })
}

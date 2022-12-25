import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  const documents = await serverQueryContent(event).find()

  const sitemap = new SitemapStream({
    hostname: 'https://jensn.dev',
  })

  for (const document of documents) {
    sitemap.write({
      url: document._path,
      changefreq: 'weekly',
    })
  }

  sitemap.end()

  return streamToPromise(sitemap)
})

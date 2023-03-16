const city = "newyork"
const URL = `https://${city}.craigslist.org/search/zip?hasPic=1#search=1~grid~0~0`

async function searchPage(URL) {
  const res = await fetch(URL)
  const text = await res.text()
  console.log(text);
}

searchPage(URL)
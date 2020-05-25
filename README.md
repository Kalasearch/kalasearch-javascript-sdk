# kalasearch-javascript-sdk

**KalaSearch JavaScript** is a client for **KalaSearch** written in JavaScript. **KalaSearch** is a powerful, fast, open-source, easy to use and deploy search engine. Both searching and indexing are highly customizable.

## 🔧 Installation
Installing with npm:
```sh
npm install kalasearch-javascript-sdk
```
Installing with yarn:
```sh
yarn add kalasearch-javascript-sdk
```

## 🚀 Getting started
Here is a quickstart for a search request:
```js
import { KalaSearch } from 'kalasearch-javascript-sdk'

const client = new KalaSearch({
  apiKey: 'your-apiKey',
  appId: 'your-appId'
})

async function f() {
  try {
    let response = await client.search('bill','some-index-id');
    console.log(response) // => see output below
  } catch(err) {
    console.log(err) // => catch error 
  }
}

f();
```

Output:

```json
{
  "hits": [
    {
      "_id": "bxhrKnIBUGhMMzxQmktg",
      "_source": { "name": "bill" }
    }
    {
      "_id": "lp8gLnIB2RA_SQyqB57i",
      "_source": { "name": "bill gates" }
    }
  ],
  "queryTimeUsed": 1,
  "totoalHits":2
}

```

## 🎬 Examples


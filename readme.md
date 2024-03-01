# harikemarin

Ketahui hari kemarin dari tanggal (JavaScript's [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object standard).

---

## Install & run

Install:

```bash
npm i harikemarin
```

Run:

```js
const kemarin = require('harikemarin')

kemarin(new Date(), 'dd-mm-yyyy') // '03-05-2018'
kemarin('2018-05-04T18:31:17.594Z', 'yyyy-mm-dd') // '2018-05-03'
kemarin('2018-05-04T22:20:20', 'dd/mm/yyyy') // '03/05/2018'
kemarin('Tue 01-01-2009 6:00', 'dd/mm/yyyy') // '31/12/2008'
```
---

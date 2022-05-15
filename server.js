const app = require ('./app.js')


const listener = app.listen(process.env.PORT || 3001, () => {
    console.log('App is listening on port ' + listener.address().port)
  })
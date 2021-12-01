/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Connection from 'App/Models/Connection'
import Service from 'App/Models/Service'

Route.get('/', async ({ view }) => {
  const results = {}

  const services = await Service.all()

  for (const service of services) {
    const result = await Connection.query()
      .where('service_id', service.id)
      .orderBy('created_at', 'desc')
      .first()

    if (result) {
      await result.load('service')
      results[service.name] = result
    }
  }

  return view.render('index', { results })
})

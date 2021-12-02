import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Connection from 'App/Models/Connection'

export default class ConnectionsController {
  public async index({ request }: HttpContextContract) {
    const limit = request.input('limit', 10)
    const page = request.input('page', 1)
    const populate = request.input('populate', false)

    const connections = Connection.query()

    if (populate) {
      connections.preload('service')
    }

    return (await connections.paginate(page, limit)).serialize({
      relations: {
        service: {
          fields: {
            omit: ['created_at', 'updated_at'],
          },
        },
      },
    })
  }
}

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Service from 'App/Models/Service'

export default class ServicesController {
  public async index() {
    const services = await Service.all()
    return services.map((service) =>
      service.serialize({
        fields: {
          omit: ['created_at', 'updated_at'],
        },
      })
    )
  }

  public async show({ params }: HttpContextContract) {
    const service = await Service.findOrFail(params.id)
    return service.serialize({
      fields: {
        omit: ['created_at', 'updated_at'],
      },
    })
  }
}

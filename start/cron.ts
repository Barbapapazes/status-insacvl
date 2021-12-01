import Connection from 'App/Models/Connection'
import Env from '@ioc:Adonis/Core/Env'
import cron from 'node-cron'
import { request } from 'undici'
import Service from 'App/Models/Service'

const time = Env.get('CRON_TIME') || '*/5 * * * *'

start()

async function start() {
  const services = await Service.all()
  services.forEach((service) => {
    cron.schedule(time, getServiceStatus(service.id, service.url))
  })
}

function getServiceStatus(serviceId: number, url: string) {
  return async function () {
    const connection = new Connection()
    connection.serviceId = serviceId

    try {
      const { statusCode } = await request(url)
      connection.statusCode = statusCode

      await connection.save()
    } catch (error) {
      if (error.code === 'UND_ERR_CONNECT_TIMEOUT') {
        connection.statusCode = 0

        await connection.save()
      }
    }
  }
}
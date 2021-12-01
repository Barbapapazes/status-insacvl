import Connection from 'App/Models/Connection'
import Env from '@ioc:Adonis/Core/Env'
import cron from 'node-cron'
import { request } from 'undici'
import Service from 'App/Models/Service'
import Logger from '@ioc:Adonis/Core/Logger'

const time = Env.get('CRON_TIME') || '*/5 * * * *'

start()

async function start() {
  try {
    const services = await Service.all()
    services.forEach((service) => {
      Logger.info(`Starting cron from service "${service.name}"`)
      cron.schedule(time, getServiceStatus(service.id, service.url))
    })
  } catch (error) {
    Logger.error(error)
  }
}

function getServiceStatus(serviceId: number, url: string) {
  return async function () {
    const connection = new Connection()
    connection.serviceId = serviceId

    try {
      const { statusCode } = await request(url)
      connection.statusCode = statusCode
    } catch (error) {
      connection.statusCode = 0
      Logger.info(`Request to ${url}: ${error}`)
    }

    try {
      await connection.save()
    } catch (error) {
      Logger.error(error)
    }
  }
}

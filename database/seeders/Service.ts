import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Service from 'App/Models/Service'

export default class ServiceSeeder extends BaseSeeder {
  public async run() {
    await Service.updateOrCreateMany('name', [
      {
        name: 'INSA Centre Val de Loire',
        url: 'https://www.insa-centrevaldeloire.fr/',
      },
      {
        name: 'ENT',
        url: 'https://ent.insa-cvl.fr/',
      },
      {
        name: 'EDT',
        url: 'https://edt.insa-cvl.fr/',
      },
      {
        name: "INSA'nonym",
        url: 'http://sds5000.insa-cvl.fr:2700/',
      },
      {
        name: 'Micro Cloud',
        url: 'https://microcloud.insa-cvl.fr/',
      },
      {
        name: 'Mail',
        url: 'https://mail.insa-cvl.fr/',
      },
    ])
  }
}

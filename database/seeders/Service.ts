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
        url: 'https://celene.insa-cvl.fr/course/index.php?categoryid=143',
      },
      {
        name: 'CELENE',
        url: 'https://celene.insa-cvl.fr/',
      },
      {
        name: 'EDT',
        url: 'https://edt.insa-cvl.fr/message.html',
      },
      {
        name: "INSA'nonym",
        url: 'http://sds5000.insa-cvl.fr:2700/',
      },
      {
        name: 'Authentification Renater',
        url: 'https://idp-insa-cvl.renater.fr/idp/profile/SAML2/Redirect/SSO?execution=e1s1',
      },
      {
        name: 'Micro Cloud',
        url: 'https://microcloud.insa-cvl.fr/dashboard/auth/login/?next=/dashboard/',
      },
      {
        name: 'Mail',
        url: 'https://mail.insa-cvl.fr/',
      },
    ])
  }
}

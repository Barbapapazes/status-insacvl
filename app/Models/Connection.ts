import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column, computed } from '@ioc:Adonis/Lucid/Orm'
import Service from './Service'

export default class Connection extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public serviceId: number

  @column()
  public statusCode: number

  @belongsTo(() => Service, {
    foreignKey: 'serviceId',
    localKey: 'id',
  })
  public service: BelongsTo<typeof Service>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @computed({ serializeAs: 'formatted_date' })
  public get formattedDate() {
    return this.createdAt.toFormat('dd/MM/yyyy - HH:mm:ss')
  }
}

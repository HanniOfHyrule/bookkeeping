import { DateTime } from 'luxon';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class CategoryModel extends BaseModel {
  public static table = 'categories';

  @column({ isPrimary: true })
  public id: string;

  @column()
  public summary: string;

  @column({ columnName: 'expectedAmount', serializeAs: 'expectedAmount' })
  public expectedAmount: number;

  @column.dateTime({ columnName: 'dueDate', serializeAs: 'dueDate' })
  public dueDate: null | DateTime;

  @column()
  public every: null | number;

  @column({ columnName: 'isActive', serializeAs: 'isActive' })
  public isActive: boolean = true;

  @column()
  public parent: null | string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}

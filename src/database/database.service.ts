import { Inject, Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(@Inject('Connection') public connection: Connection) {}

  async getRepository<T>(entity): Promise<Repository<T>> {
    return this.connection.getRepository(entity);
  }

  async clean() {
    const entities = this.connection.entityMetadatas;
    for (const entity of entities) {
      const repository = await this.getRepository(entity.name);
      await repository.query(`DELETE FROM ${entity.tableName}`);
    }
  }
}

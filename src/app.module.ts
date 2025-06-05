import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // tu usuario de postgres
      password: '090306',    // tu contraseña
      database: 'notification_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
 
  ],
})
export class AppModule {}

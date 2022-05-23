import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';


@Module({
  imports: [ConfigModule.forRoot(), 
    UsersModule, 
    TypeOrmModule.forRoot({
    type: process.env.DATABASE_TYPE,
    database: process.env.DATABASE_NAME,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  } as TypeOrmModuleOptions)],
  controllers: [],
  providers: [],
})
export class AppModule {}

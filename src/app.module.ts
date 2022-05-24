import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';


@Module({
  imports: [ConfigModule.forRoot(), 
    UsersModule, 
    TypeOrmModule.forRoot({
    type: process.env.DATABASE_TYPE,
    database: process.env.DATABASE_NAME,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  } as TypeOrmModuleOptions), AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

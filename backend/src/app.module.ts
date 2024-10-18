import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { Book } from './book/entities/book.entity';
import { AuthModule } from './auth/auth.module';
import { User } from './user/entities/user.entity';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'book_management',
      entities: [Book,User],
      synchronize: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true, // This makes the environment variables globally available
    }),
    BookModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
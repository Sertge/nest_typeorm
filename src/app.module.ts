import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import {TypeOrmModule} from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'Sertge',
      password: 'Sertge',
      database: 'herokutestdb',
      entities:['dist/**/*.entity{.ts,.js}'],
      synchronize:false,
      retryAttempts:10,
      retryDelay:3000
    }),
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ContactModule } from './contact/contact.module';
import { ContactGroupModule } from './contact-group/contact-group.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [AuthModule, UserModule, ContactModule, ContactGroupModule],
  providers: [PrismaService],
})
export class AppModule {}

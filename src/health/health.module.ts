import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthService } from './health.service';

@Module({
  imports: [TerminusModule],
  providers: [HealthService],
  exports: [HealthService]
})
export class HealthModule {}

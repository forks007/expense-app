import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';

@Module({
  exports: [ReportService],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}

import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { SummaryService } from './summary.service';

@Controller('summary')
export class SummaryController {
  constructor(private readonly summaryService: SummaryService) {}

  @Get()
  createSummary() {
    return this.summaryService.createSummary();
  }
}

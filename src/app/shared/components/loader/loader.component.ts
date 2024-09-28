import { Component } from '@angular/core';
import { LoaderService } from '../../../core/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
})
export class LoaderComponent {
  loading: boolean = false;

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
    });
  }
}

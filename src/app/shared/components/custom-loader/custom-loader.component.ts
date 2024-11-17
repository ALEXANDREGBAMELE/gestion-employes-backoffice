import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'custom-loader',
  templateUrl: './custom-loader.component.html',
})
export class CustomLoaderComponent implements OnInit {
  loading: boolean = false;
  constructor(
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
    })
  }

}

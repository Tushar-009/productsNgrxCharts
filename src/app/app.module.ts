import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts'; 
import { ProductChartComponent } from './features/products/product-chart/product-chart.component';
import { ProductFormComponent } from './features/products/product-form/product-form.component';
import { ProductTableComponent } from './features/products/product-table/product-table.component';
import { StoreModule } from '@ngrx/store'; 
import { productReducer } from './store/product.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgChartsModule,
    AppRoutingModule,
    ProductFormComponent,
    ProductTableComponent,
    ProductChartComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

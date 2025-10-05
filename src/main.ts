import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi, HttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CustomTranslateLoader } from './app/custom-translate-loader';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // ✅ Correct import name

bootstrapApplication(App, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes), // ✅ Use routes instead of appRoutes
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: CustomTranslateLoader,
          deps: [HttpClient]
        }
      })
    )
  ]
}).catch(err => console.error(err));

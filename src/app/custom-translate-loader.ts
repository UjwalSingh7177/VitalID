import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class CustomTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string): Observable<any> {
    // ✅ Load from /assets/i18n/{lang}.json
    return this.http.get(`/assets/i18n/${lang}.json`);
  }
}

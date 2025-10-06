import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private langSubject = new BehaviorSubject<string>('en'); // default English
  currentLanguage$ = this.langSubject.asObservable();

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'en';
    this.setLanguage(savedLang);
  }

  setLanguage(lang: string) {
    this.langSubject.next(lang);
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  getLanguage(): string {
    return this.langSubject.value;
  }
}

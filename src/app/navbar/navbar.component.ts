import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';
import {TranslateService} from "@ngx-translate/core";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public isMobile$ = this.breakpointObserver.observe(['(max-width: 1399px)']).pipe(map((breakpointState) => { return breakpointState.matches }));

  private lightMode = true;

  constructor(private readonly breakpointObserver: BreakpointObserver, private translate: TranslateService, private readonly renderer: Renderer2, @Inject(DOCUMENT) private readonly document: Document) { 
    translate.setDefaultLang('en');
    translate.use('en');
  }
  useLanguage(language: string): void {
    this.translate.use(language);
  }
  toggleDarkTheme(): void {
    this.lightMode = !this.lightMode;

    if (this.lightMode) {
      this.renderer.removeClass(this.document.body, 'dark-theme');
    } else {
      this.renderer.addClass(this.document.body, 'dark-theme');
    }
 }
}

import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isMobile$ = this.breakpointObserver.observe(['(max-width: 599px)']).pipe(map((breakpointState) => { return breakpointState.matches }));
  constructor(private readonly breakpointObserver: BreakpointObserver, private translate: TranslateService) { 
    translate.setDefaultLang('en');
    translate.use('en');
  }
  useLanguage(language: string): void {
    this.translate.use(language);
}

  ngOnInit() {
  }
}

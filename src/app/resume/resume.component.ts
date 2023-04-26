import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  public isMobile$ = this.breakpointObserver.observe(['(max-width: 767px)']).pipe(map((breakpointState) => { return breakpointState.matches }));

  constructor(private readonly breakpointObserver: BreakpointObserver) {}
}

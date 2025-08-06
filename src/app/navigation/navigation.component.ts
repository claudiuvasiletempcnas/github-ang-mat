import { Component, inject, DOCUMENT } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BehaviorSubject,Observable } from 'rxjs';
import { startWith, map, shareReplay } from 'rxjs/operators';
import {
  MatSlideToggleChange,
  MatSlideToggleModule,
} from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    MatSlideToggleModule,
    RouterModule,
  ],
})
export class NavigationComponent {
  //private breakpointObserver = inject(BreakpointObserver);
  private document = inject(DOCUMENT);
  isHandset$ = new BehaviorSubject<boolean>(true);

  constructor(private breakpointObserver: BreakpointObserver) {
  this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      startWith({ matches: true }),
      map((result) => result.matches)
    )
    .subscribe(value => this.isHandset$.next(value));
}

  /*isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      startWith({ matches: true }),
      map((result) => result.matches),
      shareReplay()
    );*/

  onThemeChange(event: MatSlideToggleChange) {
    this.document.body.classList.toggle('dark');
  }
}

import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { utilities, Class, ClassMethod } from './utilities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  menu: Class[] = utilities;

  selectedClass?: Class;

  selectedMethod?: ClassMethod;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly mediaMatcher: MediaMatcher,
  ) {
    this.mobileQuery = this.mediaMatcher.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  clickOnMethod(selectedClass: Class, method: ClassMethod): void {
    this.selectedMethod = method;
    this.selectedClass = selectedClass;
  }

  goToGitHubRepo(): void {
    window.open('https://github.com/icapri/utilities', "_blank");
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}

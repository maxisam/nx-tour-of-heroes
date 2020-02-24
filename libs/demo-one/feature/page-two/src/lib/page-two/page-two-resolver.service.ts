import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Page } from '@nx-demo/shared/models';
import { Observable, of } from 'rxjs';
import { PageTwoFacade } from './+state/page-two.facade';

@Injectable()
export class PageTwoResolverService implements Resolve<Page> {
  constructor(private facade: PageTwoFacade) {}

  resolve(): Observable<any> | Promise<any> | any {
    this.facade.loadPage('page-two');
    return of(true);
  }
}

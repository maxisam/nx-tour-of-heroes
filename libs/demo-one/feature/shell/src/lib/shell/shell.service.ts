import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivationEnd } from '@angular/router';
import { trackEvent } from '@nx-demo/shared/utils';

@Injectable()
export class ShellService {
  constructor(private title: Title, @Inject(DOCUMENT) private doc: Document) {}

  setPageTitle(event: ActivationEnd): void {
    const lastChild = event.snapshot;
    const title = lastChild.data.title ? `Nx Demo - ${lastChild.data.title}` : 'Nx Demo';
    this.title.setTitle(title);
  }

  setCanonicalURL(): HTMLLinkElement {
    // check if already exists
    let link: HTMLLinkElement = this.doc.querySelector('link[rel="canonical"]');

    if (!link) {
      // create canonical element
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');

      // append to dom
      this.doc.head.appendChild(link);
    }

    // set current url
    link.setAttribute('href', `${this.doc.location.host}${this.doc.location.pathname}`); // URL without querystring

    // return it so will be pure fn
    return link;
  }

  // for demo purposes - you wouldn't call track event like this
  trackEvent(action: string, category: string, label: string): void {
    trackEvent(action, category, label);
  }
}

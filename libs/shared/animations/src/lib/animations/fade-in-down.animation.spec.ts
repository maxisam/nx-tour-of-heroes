import { Component, ViewEncapsulation } from '@angular/core';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { fadeInDownAnimation } from './fade-in-down.animation';

@Component({
  template: `
    <div [@fadeInDown]="pageLoaded"></div>
  `,
  animations: [fadeInDownAnimation()]
})
export class TestComponent {
  pageLoaded = false;
}

describe('fadeInDownAnimation', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  const componentDiv = () => fixture.debugElement.queryAll(By.css('div'))[0].nativeElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [TestComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('fadeInDown transition 0 => 1', () => {
    it('should update the element opacity from 0 to 1', fakeAsync(() => {
      expect(componentDiv().style.opacity).toBe('0');
      component.pageLoaded = true; // 0 => 1
      fixture.detectChanges();
      // tick(1000);
      fixture.whenRenderingDone().then(() => {
        expect(componentDiv().style.opacity).toBe('1');
      });
    }));
  });

  /* describe('fadeInDown transition 1 => 0', () => {
    it('should update the element opacity from 1 to 0', async(() => {
      component.pageLoaded = false;
      fixture.detectChanges();
      fixture.whenRenderingDone().then(() => {
        expect(componentDiv().style.opacity).toBe('0');
      });
    }));
  }); */
});

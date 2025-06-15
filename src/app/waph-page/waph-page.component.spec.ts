import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaphPageComponent } from './waph-page.component';

describe('WaphPageComponent', () => {
  let component: WaphPageComponent;
  let fixture: ComponentFixture<WaphPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaphPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaphPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitehelpComponent } from './sitehelp.component';

describe('SitehelpComponent', () => {
  let component: SitehelpComponent;
  let fixture: ComponentFixture<SitehelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitehelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitehelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

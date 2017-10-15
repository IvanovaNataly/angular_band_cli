import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingerProfileComponent } from './singer-profile.component';

describe('SingerProfileComponent', () => {
  let component: SingerProfileComponent;
  let fixture: ComponentFixture<SingerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicStyleComponent } from './music-style.component';

describe('MusicStyleComponent', () => {
  let component: MusicStyleComponent;
  let fixture: ComponentFixture<MusicStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubterrorComponent } from './subterror.component';

describe('SubterrorComponent', () => {
  let component: SubterrorComponent;
  let fixture: ComponentFixture<SubterrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubterrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubterrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

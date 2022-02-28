import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyanimationComponent } from './bodyanimation.component';

describe('BodyanimationComponent', () => {
  let component: BodyanimationComponent;
  let fixture: ComponentFixture<BodyanimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyanimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

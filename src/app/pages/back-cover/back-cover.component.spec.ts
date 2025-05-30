import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackCoverComponent } from './back-cover.component';

describe('BackCoverComponent', () => {
  let component: BackCoverComponent;
  let fixture: ComponentFixture<BackCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackCoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

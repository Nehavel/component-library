import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoContentComponent } from './info-content.component';

describe('InfoContentComponent', () => {
  let component: InfoContentComponent;
  let fixture: ComponentFixture<InfoContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoContentComponent]
    });
    fixture = TestBed.createComponent(InfoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V20DaRuleInfoRoadsAndDegenerationComponent } from './v20-da-rule-info-roads-and-degeneration.component';

describe('V20DaRuleInfoRoadsAndDegenerationComponent', () => {
  let component: V20DaRuleInfoRoadsAndDegenerationComponent;
  let fixture: ComponentFixture<V20DaRuleInfoRoadsAndDegenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V20DaRuleInfoRoadsAndDegenerationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V20DaRuleInfoRoadsAndDegenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

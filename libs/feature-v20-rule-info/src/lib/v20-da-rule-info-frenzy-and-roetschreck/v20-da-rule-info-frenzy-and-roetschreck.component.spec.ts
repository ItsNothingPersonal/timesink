import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V20DaRuleInfoFrenzyAndRoetschreckComponent } from './v20-da-rule-info-frenzy-and-roetschreck.component';

describe('V20DaRuleInfoFrenzyAndRoetschreckComponent', () => {
  let component: V20DaRuleInfoFrenzyAndRoetschreckComponent;
  let fixture: ComponentFixture<V20DaRuleInfoFrenzyAndRoetschreckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V20DaRuleInfoFrenzyAndRoetschreckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V20DaRuleInfoFrenzyAndRoetschreckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

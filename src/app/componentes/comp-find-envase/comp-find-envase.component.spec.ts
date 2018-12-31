import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFindEnvaseComponent } from './comp-find-envase.component';

describe('CompFindEnvaseComponent', () => {
  let component: CompFindEnvaseComponent;
  let fixture: ComponentFixture<CompFindEnvaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompFindEnvaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFindEnvaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

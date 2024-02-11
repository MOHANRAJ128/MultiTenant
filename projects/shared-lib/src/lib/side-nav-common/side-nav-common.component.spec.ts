import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavCommonComponent } from './side-nav-common.component';

describe('SideNavCommonComponent', () => {
  let component: SideNavCommonComponent;
  let fixture: ComponentFixture<SideNavCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavCommonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideNavCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

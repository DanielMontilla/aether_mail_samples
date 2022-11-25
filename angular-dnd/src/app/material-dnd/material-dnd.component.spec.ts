import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDndComponent } from './material-dnd.component';

describe('MaterialDndComponent', () => {
  let component: MaterialDndComponent;
  let fixture: ComponentFixture<MaterialDndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialDndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialDndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

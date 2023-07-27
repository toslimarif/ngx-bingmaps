import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBingmapsComponent } from './ngx-bingmaps.component';

describe('NgxBingmapsComponent', () => {
  let component: NgxBingmapsComponent;
  let fixture: ComponentFixture<NgxBingmapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxBingmapsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxBingmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFriendsComponent } from './mobile-friends.component';

describe('MobileFriendsComponent', () => {
  let component: MobileFriendsComponent;
  let fixture: ComponentFixture<MobileFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Textdavinci003Component } from './textdavinci003.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('Textdavinci003Component', () => {
  let component: Textdavinci003Component;
  let fixture: ComponentFixture<Textdavinci003Component>;
  let completionSpy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Textdavinci003Component ],
      imports: [FormsModule, HttpClientModule],

    })
    .compileComponents();

    fixture = TestBed.createComponent(Textdavinci003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  
    completionSpy = spyOn(component, 'postCompletition').and.callThrough();

  
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('Should set petname model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="pet"]')).nativeElement;

    // Act 
    inputElement.value = 'Black Horse';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.pet).toEqual('Black Horse');

  });



   xit('Should call postCompletion method', async() => {
       // Arrange
       component.pet = 'Black Cat';
 
       // Act
       component.postCompletition();
	 
       // Assert
       expect(completionSpy).toHaveBeenCalledWith();

    });

	
    xit('should call completition method when i click the generatepet button ', () => {
    // Arrange 
    component.pet = "";
    let additionButton = fixture.debugElement.query(By.css(('input[name="generatepet"]')));

    // Act
    additionButton.triggerEventHandler('click', null);

    // Assert
    expect(completionSpy).toHaveBeenCalledWith();


   });
	 

   xit('Should render component.result in div result', () => {
    // Arrange
    component.result = 'Cat, Dog, Horse';
 
    // Act
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css(('div[name="result"]')));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('Cat, Dog, Horse');
     
  });

});

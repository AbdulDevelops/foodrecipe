import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
/*  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  } */

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick() {
    this.toggleDropdown();
  }

  private toggleDropdown() {
    const dropdownMenu = this.elementRef.nativeElement.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      const isHidden = dropdownMenu.classList.contains('show');
      isHidden ? this.renderer.removeClass(dropdownMenu, 'show') : this.renderer.addClass(dropdownMenu, 'show');
    }
  }
}

import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';


@Directive({
  selector: '[appCopyToClipboard]'
})
export class CopyToClipboardDirective {

  @Input('appCopyToClipboard') text!: string;

  constructor(private clipboard: Clipboard,
     private el: ElementRef,
     private renderer: Renderer2
  ) {}

  @HostListener('click')
  copyText() {
    if (this.text) {
      this.clipboard.copy(this.text);
      this.showCopiedMessage();
    }
  }


  private showCopiedMessage() {
    const textElem = this.el.nativeElement.querySelector('.copy-text')

    textElem.innerText = 'Copied';
    setTimeout(() => {
      textElem.innerText = '';
    }, 2000);
  }





}

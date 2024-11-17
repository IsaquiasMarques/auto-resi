import { NgClass, NgIf } from '@angular/common';
import { Component, signal, Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [ NgIf, NgClass ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  
  activeFaqBodyHeight: number = 0;
  activeIndex: WritableSignal<number> = signal(-1);

  faq: Faq[] = [
    {
      question: 'Como posso melhorar a qualidade do ar no meu ambiente?',
      answer: 'Profissionais altamente qualificados e atualzados com as últimas tecnologias.'
    },
    {
      question: 'Quanto tempo leva para instalar um sistema de ar-condicionado?',
      answer: 'Profissionais altamente qualificados e atualzados com as últimas tecnologias.'
    },
    {
      question: 'Vocês trabalham com marcas especificas de equipamentos?',
      answer: 'Profissionais altamente qualificados e atualzados com as últimas tecnologias.'
    },
    {
      question: 'Os vossos equipamentos têm garantia?',
      answer: 'Profissionais altamente qualificados e atualzados com as últimas tecnologias.'
    },
    {
      question: 'Vocês atendem em que provincias?',
      answer: 'Profissionais altamente qualificados e atualzados com as últimas tecnologias.'
    },
  ];

  openFaq(index: number){

    if(this.activeIndex() === index){
      this.updateActiveIndex(-1);
      return;
    }

    this.updateActiveIndex(index);
    const FAQ_BODY_ELEMENT_INDEX = 1;
    const PARAGRAPH_ELEMENT_INDEX = 0;
    const faqsElement = document.querySelectorAll('.faq') as NodeListOf<HTMLElement>;
    const clickedFaq = faqsElement[index];

    this.activeFaqBodyHeight = clickedFaq.children[FAQ_BODY_ELEMENT_INDEX].children[PARAGRAPH_ELEMENT_INDEX].clientHeight;
  }

  closeFaqs(index: number){
    this.updateActiveIndex(-1);
  }

  private updateActiveIndex(val: number): void{
    this.activeIndex.update(value => value = val);
  }

}

interface Faq{
  question: string,
  answer: string
}
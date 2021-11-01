export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
  attach(component: Component, position?: InsertPosition): void;
}

/**
 * Encapsulate the HTML element creation
 */
export class BaseComponent<T extends HTMLElement> implements Component {
  protected readonly element: T;
  constructor(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
  removeFrom(parent: HTMLElement) {
    if (parent !== this.element.parentElement) {
      throw new Error('Parent mismatch!');
    }
    parent.removeChild(this.element);
  }

  attach(component: Component, position: InsertPosition = 'afterbegin') {
    component.attachTo(this.element, position);
  }
}


//객체지향에 대한 이해 와 코드를 자유롭게 짜수있게
//알고리즘 강의와 백준 문제풀이로 알고리즘 실력쌓기
//지뢰찾기로 이차원 배열 및 화면이동에 대한 이해
//응답받는 시간 (setTimeOut, axious등 자유롭게 다루기)


//--회사--//
// 멤버스 앱 React를 이용해서 구현, java spring 을 이용해서 백엔드 구현. 
// 결제 시스템, 가상계좌 발급, 실시간 영상, 각종 기능들 파악.
// 백엔드, DB, nginx등 큰틀을 확인한다.



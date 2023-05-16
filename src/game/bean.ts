import { Position } from "./snake";

export class BeanManager {
  beans: Bean[];

  constructor() {
    this.beans = [];
  }

  generateBean(position: Position): Bean {
    const bean = new Bean(position.x, position.y, this);
    this.beans.push(bean);
    return bean
  }

  clearBeans(): void {
    this.beans = [];
  }

  getBeans(): Bean[] {
    return this.beans;
  }

  removeBean(bean: Bean): void {
    const index = this.beans.findIndex((b) => b.x === bean.x && b.y === bean.y);
    if (index !== -1) {
      this.beans.splice(index, 1);
    }
  }
}

export const beanManager = new BeanManager();

export class Bean {
  public x: number;
  public y: number;
  beanManager: BeanManager;

  constructor(x: number, y: number, beanManager: BeanManager) {
    this.x = x;
    this.y = y;
    this.beanManager = beanManager;
  }

  remove() {
    this.beanManager.removeBean(this);
  }
}

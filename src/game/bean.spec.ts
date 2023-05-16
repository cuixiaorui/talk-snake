import { it, expect, describe } from "vitest";
import { BeanManager, Bean } from './bean';

describe('BeanManager', () => {
  it('should be able to generate and manage beans', () => {
    const beanManager = new BeanManager();
    beanManager.generateBean({ x: 2, y: 3 });
    const beans = beanManager.getBeans();
    expect(beans.length).toBe(1);
    expect(beans[0].x).toBe(2);
    expect(beans[0].y).toBe(3);
  });

  it('should be able to clear all beans', () => {
    const beanManager = new BeanManager();
    beanManager.generateBean({ x: 2, y: 3 });
    beanManager.clearBeans();
    expect(beanManager.getBeans().length).toBe(0);
  });

  it('should be able to remove a specific bean', () => {
    const beanManager = new BeanManager();
    const bean = beanManager.generateBean({ x: 2, y: 3 });
    expect(beanManager.getBeans().length).toBe(1);
    beanManager.removeBean(bean);
    expect(beanManager.getBeans().length).toBe(0);
  });
});

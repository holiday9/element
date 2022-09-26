import { createTest, destroyVM } from '../util';
import MyButton9 from 'packages/my-button9';

describe('MyButton9', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(MyButton9, true);
    expect(vm.$el).to.exist;
  });
});


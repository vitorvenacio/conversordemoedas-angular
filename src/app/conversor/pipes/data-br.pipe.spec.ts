import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 2021-08-06 para 06/08/2021', () => { 
    const pipe = new DataBrPipe();
    expect(pipe.transform('2021-08-06')).toEqual('06/08/2021');
  });
});

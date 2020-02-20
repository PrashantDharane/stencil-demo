import { newE2EPage } from '@stencil/core/testing';

describe('my-backdrop', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-backdrop></my-backdrop>');

    const element = await page.find('my-backdrop');
    expect(element).toHaveClass('hydrated');
  });
});

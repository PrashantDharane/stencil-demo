import { newE2EPage } from '@stencil/core/testing';

describe('my-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-form></my-form>');

    const element = await page.find('my-form');
    expect(element).toHaveClass('hydrated');
  });
});

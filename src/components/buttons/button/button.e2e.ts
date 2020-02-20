import { newE2EPage } from '@stencil/core/testing';

describe('modal-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<modal-button></modal-button>');

    const element = await page.find('modal-button');
    expect(element).toHaveClass('hydrated');
  });
});

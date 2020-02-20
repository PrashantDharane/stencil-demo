import { newE2EPage } from '@stencil/core/testing';

describe('my-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-table></my-table>');

    const element = await page.find('my-table');
    expect(element).toHaveClass('hydrated');
  });
});

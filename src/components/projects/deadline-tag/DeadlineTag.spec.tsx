import React from 'react';
import DeadlineTag from '@components/projects/deadline-tag/DeadlineTag';
import { render, screen } from '@testing-library/react';

describe('DeadlineTag', () => {
  it('should render the deadline label for 1 week', () => {
    render(<DeadlineTag deadline={7} />);
    expect(screen.getByText('1 week left')).toBeVisible();
  });
  it('should render the deadline label for less than a week', () => {
    render(<DeadlineTag deadline={5} />);
    expect(screen.getByText('5 days left')).toBeVisible();
  });
  it('should render the deadline label for 2 weeks and 6 days', () => {
    render(<DeadlineTag deadline={20} />);
    expect(screen.getByText('2 weeks and 6 days left')).toBeVisible();
  });
  it('should render expired if deadline is equal to 0', () => {
    render(<DeadlineTag deadline={0} />);
    expect(screen.getByText('Expired')).toBeVisible();
  });
  it('should render expired if deadline is negative', () => {
    render(<DeadlineTag deadline={-1} />);
    expect(screen.getByText('Expired')).toBeVisible();
  });
});

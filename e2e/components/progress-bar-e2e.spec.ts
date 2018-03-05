import { browser } from 'protractor';
import { expectToExist } from '../util/index';

describe('progress-bar', () => {
	beforeEach(() => browser.get('/progress-bar'));

	it('should render a determinate progress bar', () => {
		expectToExist('mat-progress-bar[mode="determinate"]');
	});

	it('should render a buffer progress bar', () => {
		expectToExist('mat-progress-bar[mode="buffer"]');
	});

	it('should render a query progress bar', () => {
		expectToExist('mat-progress-bar[mode="query"]');
	});

	it('should render a indeterminate progress bar', () => {
		expectToExist('mat-progress-bar[mode="indeterminate"]');
	});
});

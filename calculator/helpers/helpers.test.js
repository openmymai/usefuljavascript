import { performOperation, formatNumberByLocale, getOperand } from './';

describe('performOperation', () => {
    it.each([['division', '÷', 2.5], ['multiplication', '×', 10], ['substraction', '-', 3], ['sum', '+', 7]])(
        'should perform %s operation',
        (operation, operator, result) => {
            expect(performOperation({ firstOperand: '5', secondOperand: '2', operator })).toBe(result);
        },
    );
});

describe('formatNumberByLocale', () => {
    it('should return the same value when number ends in dot since converting it would remove the dot', () => {
        expect(formatNumberByLocale('2.')).toBe('2.');
    });

    it('should return formatted number', () => {
        expect(formatNumberByLocale('2000000')).toBe('2,000,000');
    });
});

describe('getOperand', () => {
  it('should return firstOperand when there is no operator', () => {
    expect(getOperand({ })).toBe('firstOperand');
  });

  it('should return secondOperand when there is no operator', () => {
    expect(getOperand({ operator: '+' })).toBe('secondOperand');
  });  
});


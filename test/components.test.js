import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../client/src/App.jsx';
import ReviewBlurb from '../client/src/ReviewBlurb.jsx';
import request from 'supertest';
import '@babel/polyfill';

beforeEach(() => {
  render(
    <App/>
  )
})

describe('APP component', () => {
    test('should display the modal button', () => {
      const modalButtonTest = screen.getByTestId('modalButtonTest')
      expect(modalButtonTest).toBeInTheDocument();
    });
    test('should NOT display the modal component', () => {
      const modalTest = screen.queryByTestId('modalTest')
      expect(modalTest).toBeNull();
    });
})

describe('AVERAGES component', () => {
    test('should display the ratings div', () => {
      const ratingsTest = screen.getByTestId('ratingsTest')
      expect(ratingsTest).toBeInTheDocument();
    });
    test('should NOT display the modal ratings div', () => {
      const ratingsTest = screen.queryByTestId('ratingsModalTest')
      expect(ratingsTest).toBeNull();
    });
})

describe('MODAL component', () => {
    test('should display the modal component on button click', () => {
      const modalButtonTest = screen.getByTestId('modalButtonTest')
      const modalTest = screen.queryByTestId('modalTest')

      fireEvent.click(modalButtonTest)
      setTimeout(() => {
        expect(modalTest).toBeInTheDocument();
      }, 1000);
    });
})

describe('RATINGS component', () => {
  test('should display communication rating within the ratings div', () => {
    expect(screen.getByTestId('ratingsTest')).toHaveTextContent('Communication')
  });
  test('should NOT display overall rating within the ratings div', () => {
    expect(screen.getByTestId('ratingsTest')).not.toHaveTextContent('Overall')
  });
})

describe('REVIEWBLURB component', () => {
  test('should display the reviewBlurb div', () => {
    const reviewBlurbTest = screen.queryByTestId('reviewBlurbTest')
    setTimeout(() => {
      expect(reviewBlurbTest).toBeInTheDocument();
    }, 1000);
  });
  test('should NOT display undefined in the reviewBlurb description', () => {
    setTimeout(() => {
      expect(screen.getByTestId('reviewBlurbTest')).not.toHaveTextContent('undefined')
    }, 1000);
  });
})

describe('SERVER SIDE', () => {
  test('should return a 200', () => {
    request(App).get('/propId/5').then((res)=> {
      expect(res.statusCode).toBe(200);
    })
  })
  test('should return a 404', () => {
    request(App).get('/propId/101').then((res)=> {
      console.log('STATUS CHECK', res.statusCode)
      expect(res.statusCode).toBe(404);
    })
  })
})
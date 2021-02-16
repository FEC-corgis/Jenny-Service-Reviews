import React from 'react';
import styled from 'styled-components'
import Styles from '../client/src/Styles.js';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
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
xdescribe('CLIENT', () => {
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

})

import React from "react";
import { getByText, screen } from "@testing-library/react";
import { renderWithRedux } from "./helpers/renderWith";
import userEvent from '@testing-library/user-event'
import Wallet from "../pages/Wallet";

describe('Testa o componete Wallet', () => {
    test('testa se os elementos aparecem na tela', () => {
        const INITIAL_STATE = {
            user: {
              email: 'test@email.com'
            },
            wallet: {
              currencies: [],
              expenses: []
            }
          };
        renderWithRedux(<Wallet />, {initialState: INITIAL_STATE})
        
        const buttonDespesas = screen.getByRole('button', {
            name: /Adicionar despesa/i
        })
        const inputValue = screen.getByPlaceholderText( /Valor/i) 
        const inputDesc = screen.getByPlaceholderText( /Descrição/i) 
        expect(buttonDespesas).toBeInTheDocument();
        expect(inputValue).toBeInTheDocument();
        expect(inputDesc).toBeInTheDocument();
    })
    test('testa se os elementos funcionam como esperado', () => {
        const INITIAL_STATE = {
            user: {
              email: 'test@email.com'
            },
            wallet: {
              currencies: [],
              expenses: []
            }
          };
        renderWithRedux(<Wallet />, {initialState: INITIAL_STATE})
        
        const buttonDespesas = screen.getByRole('button', {
            name: /Adicionar despesa/i
        })
        const inputValue = screen.getByPlaceholderText( /Valor/i) 
        const inputDesc = screen.getByPlaceholderText( /Descrição/i) 
        
        // userEvent.type(inputValue, "100")
        // userEvent.type(inputDesc), "iphone"
        // userEvent.click(buttonDespesas)

        // const valor = screen.getByText('100,00')
    })
})
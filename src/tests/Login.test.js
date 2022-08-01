import React from "react";
import { render, screen } from "@testing-library/react";
import { renderWithRouterAndRedux } from "./helpers/renderWith";
import App from "../App"
import userEvent from '@testing-library/user-event'


describe('Testa se a pagina de Login e exibida correntamente', () => {
    test('', async () => {

        const { history } = renderWithRouterAndRedux(<App/>)
        

        const title = screen.getByRole('heading', {
            name: /Trybe Wallet/i
        })
        expect(title).toBeInTheDocument();

        const input = screen.getByPlaceholderText( /email/i)
        const input2 = screen.getByPlaceholderText( /senha/i)
        expect(input && input2).toBeInTheDocument();

        const button = screen.getByRole('button', {
            name: /Entrar/i,
          });
        expect(button).toBeInTheDocument();

        userEvent.type(input, "hugo@email.com")
        userEvent.type(input2, "123456")
        userEvent.click(button);
        const email = await screen.findByTestId('email-field');
        // expect(email).toBeInTheDocument();  
        const buttonDespesas = screen.getByRole('button', {
            name: /Adicionar despesa/i
        }) 
        console.log(history.location);
    })
    
})
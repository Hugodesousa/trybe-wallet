import React from "react";
import { screen } from "@testing-library/react";
import { renderWithRouterAndRedux } from "./helpers/renderWith";
import App from "../App"
import userEvent from '@testing-library/user-event'



describe('Testa a pagina de Login', () => {
    test('se os elementos aparecem e funcionam corretamente', async () => {

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
        expect(button.disabled).toBe(true)
        
        userEvent.type(input, "hugo@email.com")
        userEvent.type(input2, "123456")
        expect(button.disabled).toBe(false)
        userEvent.click(button);
        
        expect(input).not.toBeInTheDocument();
        // expect(email).toBeInTheDocument();  
        // const buttonDespesas = screen.getByRole('button', {
        //     name: /Adicionar despesa/i
        // }) 
        // console.log(history.location);
        
    })
})
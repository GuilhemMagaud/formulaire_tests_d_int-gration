import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App, { calculatingAge } from './App';

describe('Calculating age', () => {
  it('check correct calculating age', () => {
    const birth = new Date(Date.now());
    birth.setFullYear(birth.getFullYear() - 10);
    expect(calculatingAge(birth)).toEqual(10);
  })
});

describe('Over 18 years old', () => {
  it('check correct older than 18 year', () => {
      render(<App />);
      const input = screen.getByTestId('dateInput');
      const error = screen.getByTestId('dateErrorMessage');
      expect(input).toBeInTheDocument();
      expect(error).toHaveTextContent('');
      fireEvent.change(input, {target: {value: '2000-01-01'}})
      expect(error).toHaveTextContent('');
  })
  it('check is younger than 18', () => {
      render(<App />);
      const input = screen.getByTestId('dateInput');
      const error = screen.getByTestId('dateErrorMessage');
      const currentDate = new Date(Date.now());
      const year = String(currentDate.getFullYear() - 8);
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate());
      const returnbirth = `${year}-${month}-${day}`;
      expect(input).toBeInTheDocument();
      expect(error).toHaveTextContent('');
      fireEvent.change(input, { target: { value:  returnbirth} });
      expect(error).toHaveTextContent('age inférieur à 18 ans');
  })
  it('check date not complete', () => {
      render(<App />);
      const input = screen.getByTestId('dateInput');
      const error = screen.getByTestId('dateErrorMessage');
      expect(input).toBeInTheDocument();
      expect(error).toHaveTextContent('');
      fireEvent.change(input, {target: {value: ''}})
      expect(error).toHaveTextContent('');
  })
});

describe('Zipcode format', () => {
  it('check correct zip code format', () => {
      render(<App />);
      const input = screen.getByTestId('zipcodeInput');
      const error = screen.getByTestId('zipcodeErrorMessage');
      expect(input).toBeInTheDocument();
      expect(error).toHaveTextContent('');
      fireEvent.change(input, {target: {value: '83440'}})
      expect(error).toHaveTextContent('');
  })
  it('check zip code format with less than 5 figure', () => {
      render(<App />);
      const input = screen.getByTestId('zipcodeInput');
      const error = screen.getByTestId('zipcodeErrorMessage');
      expect(input).toBeInTheDocument();
      expect(error).toHaveTextContent('');
      fireEvent.change(input, {target: {value: '8344'}})
      expect(error).toHaveTextContent('zipcode non formalisé');
  })
  it('check zip code format with more than 5 figure', () => {
      render(<App />);
      const input = screen.getByTestId('zipcodeInput');
      const error = screen.getByTestId('zipcodeErrorMessage');
      expect(input).toBeInTheDocument();
      expect(error).toHaveTextContent('');
      fireEvent.change(input, {target: {value: '834400'}})
      expect(error).toHaveTextContent('zipcode non formalisé');
  })
  it('check zip code not complete', () => {
      render(<App />);
      const input = screen.getByTestId('zipcodeInput');
      const error = screen.getByTestId('zipcodeErrorMessage');
      expect(input).toBeInTheDocument();
      expect(error).toHaveTextContent('');
      fireEvent.change(input, {target: {value: '83440'}})
      expect(error).toHaveTextContent('');
      fireEvent.change(input, {target: {value: ''}})
      expect(error).toHaveTextContent('zipcode non formalisé');
  })
});

describe('First and last name format', () => {
  it('check correct firstname format', () => {
      render(<App />);
      const input = screen.getByTestId('firstnameInput');
      const error = screen.getByTestId('firstnameErrorMessage');
      expect(input).toBeInTheDocument();
      expect(error).toHaveTextContent('');
      fireEvent.change(input, {target: {value: 'Magaud'}})
      expect(error).toHaveTextContent('');
  })
  it('check correct firstname format with special letter', () => {
      render(<App />);
      const input = screen.getByTestId('firstnameInput');
      const error = screen.getByTestId('firstnameErrorMessage');
      expect(input).toBeInTheDocument();
      expect(error).toHaveTextContent('');
      fireEvent.change(input, {target: {value: 'étïs-supa'}})
      expect(error).toHaveTextContent('');
  })
  it('check wrong firstname format with special character', () => {
      render(<App />);
      const input = screen.getByTestId('firstnameInput');
      const error = screen.getByTestId('firstnameErrorMessage');
      expect(input).toBeInTheDocument();
      expect(error).toHaveTextContent('');
      fireEvent.change(input, {target: {value: '!te:st?'}})
      expect(error).toHaveTextContent('nom invalide');
  })
  it('check wrong firstname format with number', () => {
      render(<App />);
      const input = screen.getByTestId('firstnameInput');
      const error = screen.getByTestId('firstnameErrorMessage');
      expect(input).toBeInTheDocument();
      expect(error).toHaveTextContent('');
      fireEvent.change(input, {target: {value: '4te2st9'}})
      expect(error).toHaveTextContent('nom invalide');
  })

  it('check correct lastname format', () => {
      render(<App />);
      const input = screen.getByTestId('lastnameInput');
      const error = screen.getByTestId('lastnameErrorMessage');
      expect(input).toBeInTheDocument();
      expect(error).toHaveTextContent('');
      fireEvent.change(input, {target: {value: 'Guilhem'}})
      expect(error).toHaveTextContent('');
  })
  it('check correct lastname format with special letter', () => {
      render(<App />);
      const input = screen.getByTestId('lastnameInput');
      const error = screen.getByTestId('lastnameErrorMessage');
      expect(input).toBeInTheDocument();
      expect(error).toHaveTextContent('');
      fireEvent.change(input, {target: {value: 'étïs-supa'}})
      expect(error).toHaveTextContent('');
  })
  it('check wrong lastname format with special character', () => {
      render(<App />);
      const input = screen.getByTestId('lastnameInput');
      const error = screen.getByTestId('lastnameErrorMessage');
      expect(input).toBeInTheDocument();
      expect(error).toHaveTextContent('');
      fireEvent.change(input, {target: {value: '!te:st?'}})
      expect(error).toHaveTextContent('prénom invalide');
  })
  it('check wrong lastname format with number', () => {
      render(<App />);
      const input = screen.getByTestId('lastnameInput');
      const error = screen.getByTestId('lastnameErrorMessage');
      expect(input).toBeInTheDocument();
      expect(error).toHaveTextContent('');
      fireEvent.change(input, {target: {value: '4te2st9'}})
      expect(error).toHaveTextContent('prénom invalide');
  })
});

describe('Email format', () => {
  it('check correct email format', () => {
      render(<App />);
      const input = screen.getByTestId('mailInput');
      const error = screen.getByTestId('mailErrorMessage');
      expect(input).toBeInTheDocument();
      expect(error).toHaveTextContent('');
      fireEvent.change(input, {target: {value: 'guilhem@ynov.com'}})
      expect(error).toHaveTextContent('');
  })
  it('check wrong email format whith no @', () => {
      render(<App />);
      const input = screen.getByTestId('mailInput');
      const error = screen.getByTestId('mailErrorMessage');
      expect(input).toBeInTheDocument();
      expect(error).toHaveTextContent('');
      fireEvent.change(input, {target: {value: 'guilhemynov.com'}})
      expect(error).toHaveTextContent('mail invalide');
  })
  it('check wrong email format whith no .', () => {
      render(<App />);
      const input = screen.getByTestId('mailInput');
      const error = screen.getByTestId('mailErrorMessage');
      expect(input).toBeInTheDocument();
      expect(error).toHaveTextContent('');
      fireEvent.change(input, {target: {value: 'guilhem@ynovcom'}})
      expect(error).toHaveTextContent('mail invalide');
  })
  it('check wrong email format whith reversed @ and .', () => {
      render(<App />);
      const input = screen.getByTestId('mailInput');
      const error = screen.getByTestId('mailErrorMessage');
      expect(input).toBeInTheDocument();
      expect(error).toHaveTextContent('');
      fireEvent.change(input, {target: {value: 'guilhem.ynov@com'}})
      expect(error).toHaveTextContent('mail invalide');
  })
});

describe('Deactivation of the button if the fields are not filled in', () => {
  it('button is not activated because no changes have been made', () => {
      render(<App />);
      const submitButton = screen.getByTestId("submitButton");
      expect(submitButton).toBeInTheDocument();
      expect(submitButton).toBeDisabled();
  })
  it('button is activated after changes', () => {
    render(<App />);
    const submitButton = screen.getByTestId("submitButton");
    const firstnameInput = screen.getByTestId('firstnameInput');
    const lastnameInput = screen.getByTestId('lastnameInput');
    const mailInput = screen.getByTestId('mailInput');
    const dateInput = screen.getByTestId('dateInput');
    const cityInput = screen.getByTestId('cityInput')
    const zipcodeInput = screen.getByTestId('zipcodeInput');

    expect(submitButton).toBeInTheDocument();
    expect(firstnameInput).toBeInTheDocument();
    expect(lastnameInput).toBeInTheDocument();
    expect(mailInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(zipcodeInput).toBeInTheDocument();

    expect(submitButton).toBeDisabled();

    fireEvent.change(firstnameInput, {target: {value: 'Magaud'}})
    fireEvent.change(lastnameInput, {target: {value: 'Guilhem'}})
    fireEvent.change(mailInput, {target: {value: 'guilhem@ynov.com'}})
    fireEvent.change(dateInput, {target: {value: '2000-01-01'}})
    fireEvent.change(cityInput, {target: {value: 'Sophia'}})
    fireEvent.change(zipcodeInput, {target: {value: '83440'}})

    expect(submitButton).not.toBeDisabled();
  })
  it('button is activated after changes and again diseable', () => {
    render(<App />);
    const submitButton = screen.getByTestId("submitButton");
    const firstnameInput = screen.getByTestId('firstnameInput');
    const lastnameInput = screen.getByTestId('lastnameInput');
    const mailInput = screen.getByTestId('mailInput');
    const dateInput = screen.getByTestId('dateInput');
    const cityInput = screen.getByTestId('cityInput')
    const zipcodeInput = screen.getByTestId('zipcodeInput');

    expect(submitButton).toBeInTheDocument();
    expect(firstnameInput).toBeInTheDocument();
    expect(lastnameInput).toBeInTheDocument();
    expect(mailInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(zipcodeInput).toBeInTheDocument();

    expect(submitButton).toBeDisabled();

    fireEvent.change(firstnameInput, {target: {value: 'Magaud'}})
    fireEvent.change(lastnameInput, {target: {value: 'Guilhem'}})
    fireEvent.change(mailInput, {target: {value: 'guilhem@ynov.com'}})
    fireEvent.change(dateInput, {target: {value: '2000-01-01'}})
    fireEvent.change(cityInput, {target: {value: 'Sophia'}})
    fireEvent.change(zipcodeInput, {target: {value: '83440'}})

    expect(submitButton).not.toBeDisabled();

    fireEvent.change(zipcodeInput, {target: {value: ''}})

    expect(submitButton).toBeDisabled();
  })
});

describe('Backup in local storage and the successful toaster, with fields emptied', () => {
  it('check if the values are saved in local storage', () => {
    render(<App />);

    const submitButton = screen.getByTestId("submitButton");
    const firstnameInput = screen.getByTestId('firstnameInput');
    const lastnameInput = screen.getByTestId('lastnameInput');
    const mailInput = screen.getByTestId('mailInput');
    const dateInput = screen.getByTestId('dateInput');
    const cityInput = screen.getByTestId('cityInput');
    const zipcodeInput = screen.getByTestId('zipcodeInput');

    expect(submitButton).toBeInTheDocument();
    expect(firstnameInput).toBeInTheDocument();
    expect(lastnameInput).toBeInTheDocument();
    expect(mailInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(zipcodeInput).toBeInTheDocument();

    fireEvent.change(firstnameInput, {target: {value: 'Magaud'}})
    fireEvent.change(lastnameInput, {target: {value: 'Guilhem'}})
    fireEvent.change(mailInput, {target: {value: 'guilhem@ynov.com'}})
    fireEvent.change(dateInput, {target: {value: '2000-01-01'}})
    fireEvent.change(cityInput, {target: {value: 'Sophia'}})
    fireEvent.change(zipcodeInput, {target: {value: '83440'}})

    fireEvent.click(submitButton)

    expect(localStorage.getItem('firstname')).toBe('Magaud');
    expect(localStorage.getItem('lastname')).toBe('Guilhem');
    expect(localStorage.getItem('mail')).toBe('guilhem@ynov.com');
    expect(localStorage.getItem('birthDate')).toBe('2000-01-01');
    expect(localStorage.getItem('city')).toBe('Sophia');
    expect(localStorage.getItem('zipCode')).toBe('83440');
  })
  it('fields are reset to zero', () => {
    render(<App />);

    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const submitButton = screen.getByTestId("submitButton");
    const firstnameInput = screen.getByTestId('firstnameInput');
    const lastnameInput = screen.getByTestId('lastnameInput');
    const mailInput = screen.getByTestId('mailInput');
    const dateInput = screen.getByTestId('dateInput');
    const cityInput = screen.getByTestId('cityInput');
    const zipcodeInput = screen.getByTestId('zipcodeInput');

    expect(submitButton).toBeInTheDocument();
    expect(firstnameInput).toBeInTheDocument();
    expect(lastnameInput).toBeInTheDocument();
    expect(mailInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(zipcodeInput).toBeInTheDocument();

    fireEvent.change(firstnameInput, {target: {value: 'Magaud'}})
    fireEvent.change(lastnameInput, {target: {value: 'Guilhem'}})
    fireEvent.change(mailInput, {target: {value: 'guilhem@ynov.com'}})
    fireEvent.change(dateInput, {target: {value: '2000-01-01'}})
    fireEvent.change(cityInput, {target: {value: 'Sophia'}})
    fireEvent.change(zipcodeInput, {target: {value: '83440'}})

    fireEvent.click(submitButton)

    alertMock.mockRestore();

    expect(firstnameInput.value).toBe('');
    expect(lastnameInput.value).toBe('');
    expect(mailInput.value).toBe('');
    expect(dateInput.value).toBe('');
    expect(cityInput.value).toBe('');
    expect(zipcodeInput.value).toBe('');
  })
  it('the successful toaster was called', () => {
    render(<App />);
    
    // Espionner la méthode window.alert
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    // Obtenir les références des éléments de l'interface
    const submitButton = screen.getByTestId("submitButton");
    const firstnameInput = screen.getByTestId('firstnameInput');
    const lastnameInput = screen.getByTestId('lastnameInput');
    const mailInput = screen.getByTestId('mailInput');
    const dateInput = screen.getByTestId('dateInput');
    const cityInput = screen.getByTestId('cityInput');
    const zipcodeInput = screen.getByTestId('zipcodeInput');

    // Simuler les changements dans les champs du formulaire
    fireEvent.change(firstnameInput, {target: {value: 'Magaud'}});
    fireEvent.change(lastnameInput, {target: {value: 'Guilhem'}});
    fireEvent.change(mailInput, {target: {value: 'guilhem@ynov.com'}});
    fireEvent.change(dateInput, {target: {value: '2000-01-01'}});
    fireEvent.change(cityInput, {target: {value: 'Sophia'}});
    fireEvent.change(zipcodeInput, {target: {value: '83440'}});

    // Simuler la soumission du formulaire
    fireEvent.click(submitButton);

    // Vérifier si la fonction alert a été appelée avec le bon message
    expect(alertMock).toHaveBeenCalledWith('les données ont bien été sauvegardées');

    // Restaurer la fonction alert à son état d'origine
    alertMock.mockRestore();
  });
});

describe('Error toaster and corresponding errors in red', () => {
  it('check if error message is red', () => {
      render(<App />)
      const input = screen.getByTestId('firstnameInput');
      const error = screen.getByTestId('firstnameErrorMessage');
      expect(input).toBeInTheDocument();
      expect(error).toHaveTextContent('');
      fireEvent.change(input, {target: {value: '4te2st9'}})
      expect(error).toHaveStyle('color: red');
  })
});
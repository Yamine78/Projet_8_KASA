import { fireEvent, render, screen } from '@testing-library/react';
import Collapse from '../../components/collapse/Collapse';

describe('Collapse', () => {
  test('affiche le titre', () => {
    render(<Collapse title="Fiabilité">Contenu</Collapse>);
    expect(screen.getByText('Fiabilité')).toBeInTheDocument();
  });

  test('gère le contenu vide', () => {
    render(<Collapse title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });


  test('masque le contnu par defaut', () => {
    render(<Collapse title="Fiabilité">Contenu</Collapse>);
    expect(screen.queryByText('Contenu')).not.toBeInTheDocument();
  });



  test('afficher la description au clik', () => {
   const {container  } =render(<Collapse title="Fiabilité">Contenu</Collapse>);
   let trigger= container.querySelector('.collapse-arrow')
    fireEvent.click(trigger)
      let content= container.querySelector('.collapse-content')
    expect(content).toBeInTheDocument();
  })


});

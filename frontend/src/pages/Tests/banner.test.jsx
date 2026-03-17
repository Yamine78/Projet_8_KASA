import { render, screen } from '@testing-library/react';
import Banner from '../../components/banner/Banner';

describe('Banner', () => {
  // Test 1 : si l'image s'affiche
  test('affiche l\'image quand imageSrc est fourni', () => {
    render(<Banner imageSrc="/test.png" />);
    const img = screen.getByAltText('') || screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/test.png');
  });

  // Test 2 : si le titre s'affiche 
  test('affiche le titre quand title est fourni', () => {
    render(<Banner imageSrc="/test.png" title="Mon titre" />);
    expect(screen.getByText('Mon titre')).toBeInTheDocument();
  });

  // Test 3 : n'affiche pas de titre si y'en a pas
  test('ne montre pas le titre quand title est absent', () => {
    render(<Banner imageSrc="/test.png" />);
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  // Test 4 : Se rend sans erreur sans props
  test('se rend sans erreur sans props', () => {
    expect(() => render(<Banner />)).not.toThrow();
  });
});

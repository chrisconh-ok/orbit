export { default as Headline } from './Headline.astro';
export { default as Subtitle } from './Subtitle.astro';
export { default as SocialButton } from './SocialButton.astro';
export { default as SocialWidget } from './SocialWidget.astro';
export { default as Button } from './Button.astro';
export { default as Tag } from './Tag.astro';
export { default as ButtonSection } from './ButtonSection.astro';
export { default as HeaderSection } from './HeaderSection.astro';

//Para importar estos componentes se debe usar el siguiente formato:
//import { Button } from '@shared/components/ui';
//
//Ejemplos de uso del componente Button:
//
//<Button
//    text="Cursos en Youtube"
//    type="primary"
//    href="https://youtube.com/@orbitbrackets"
//    target="_blank"
//    icon="mdi:youtube"
//    iconPosition="right"
///>
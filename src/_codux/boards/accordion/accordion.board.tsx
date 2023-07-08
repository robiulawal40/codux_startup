import { createBoard } from '@wixc3/react-board';
import { AccordionComponent } from '../../../components/accordion/accordion-component';

export default createBoard({
    name: 'AccordionComponent',
    Board: () => <AccordionComponent />
});

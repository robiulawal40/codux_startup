import { createBoard } from '@wixc3/react-board';
import { Buttondemo } from '../../../components/button/button';

export default createBoard({
    name: 'Buttondemo',
    Board: () => <Buttondemo />,
    environmentProps: {
        canvasHeight: 450,
        windowWidth: 1024,
    },
});

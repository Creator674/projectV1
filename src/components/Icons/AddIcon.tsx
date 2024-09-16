import { Fragment } from 'react';
import { createIcon } from '@chakra-ui/react';

export const AddIcon = createIcon({
  viewBox: '0 0 512 512',
  defaultProps: {
    className: 'addIcon',
    width: '24px',
    height: '24px',
    color: 'black',
  },
  path: (
    <Fragment>
      <path
        d='M468.3,212.7H305.2v-169c0-24.2-19.6-43.8-43.8-43.8c-24.2,0-43.8,19.6-43.8,43.8v169h-174
	C19.6,212.7,0,232.3,0,256.5c0,24.2,19.6,43.8,43.8,43.8h174v168c0,24.2,19.6,43.8,43.8,43.8c24.2,0,43.8-19.6,43.8-43.8v-168h163.1
	c24.2,0,43.8-19.6,43.8-43.8C512,232.3,492.5,212.7,468.3,212.7z'
        fill='currentColor'
      />
    </Fragment>
  ),
});

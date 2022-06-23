import React from 'react';
import {storiesOf} from '@storybook/react';

import { UploadBox } from '../components/UploadBox';
import { UploadBoxProvider } from '../context/UploadBoxContext';

const stories = storiesOf('App', module);

stories.add('App', ()=>{
	return (<>
			<UploadBoxProvider>
				<UploadBox/>
			</UploadBoxProvider>
	</>)
})

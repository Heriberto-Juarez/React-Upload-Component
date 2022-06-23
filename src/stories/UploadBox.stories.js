import React from 'react';
import {storiesOf} from '@storybook/react';

import {UploadBox} from '../components/UploadBox';

const stories = storiesOf('App', module);

stories.add('App', ()=>{
	return (<UploadBox/>)
})

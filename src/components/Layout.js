import React, { Fragment } from 'react';
import Anuncio from './Anuncio';

import Navbar from './Navbar';

export default function Layout() {
    return (
        <Fragment>
            <Anuncio />
            <Navbar />
        </Fragment>
    );
}

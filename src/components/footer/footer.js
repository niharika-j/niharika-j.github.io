import React from 'react';
import './footer.scss';

import { Container } from 'react-bootstrap';

class FooterComponent extends React.Component {
    render() {
        return (
            <section id="footer">
                <Container fluid>© Niharika Jayanthi</Container>
            </section>
        );
    }
}

export default FooterComponent;
import React from 'react';
import { Link } from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'

const NotFound = () => {
    return (
        <div>
        <Head title="404" />
            <Layout>
                <h1>Page not found</h1>
                <p><Link to="/">Return home</Link></p>
            </Layout>
        </div>
    )
}

export default NotFound
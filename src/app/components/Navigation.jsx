import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

const Navigation = ({id, authenticated})=>(
    <div className="header">
        <Link to="/dashboard">
            <h1>
                My Application
            </h1>
        </Link>
            <h4>
                Welcome!
            </h4>

    </div>
);

const mapStateToProps = ({session})=>({
    id:session.id,
    authenticated:session.authenticated == mutations.AUTHENTICATED
});

export const ConnectedNavigation = connect(state=>state)(Navigation);
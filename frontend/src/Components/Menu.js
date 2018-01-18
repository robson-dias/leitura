import React from 'react'
import { Link } from 'react-router-dom'
import PostCreate from './PostCreate'

export default function Menu (props) {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className='navbar-brand' to='/'>Leitura</Link>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li className={props.match.path === '/' ? 'active' : ''}><Link to='/'>All</Link></li>
                        <li className={props.match.path === '/react' ? 'active' : ''}><Link to='/react'>React</Link></li>
                        <li className={props.match.path === '/redux' ? 'active' : ''}><Link to='/redux'>Redux</Link></li>
                        <li className={props.match.path === '/udacity' ? 'active' : ''}><Link to='/udacity'>Udacity</Link></li>

                    </ul>
                    <ul className="nav navbar-nav navbar-right" style={{ marginTop: '7px' }}>
                        <li>
                            <PostCreate
                                onCreatePost={props.createPost}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


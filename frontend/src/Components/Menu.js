import React from 'react'
import { Link } from 'react-router-dom'
import PostCreate from './PostCreate'
import CategoryList from './CategoryList'

const Menu = (props) => {

    const { page } = props

    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className='navbar-brand' to='/'>Leitura</Link>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <CategoryList page={page} />
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

export default Menu



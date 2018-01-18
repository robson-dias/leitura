import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryList(props) {
    return (
        <ul className="nav navbar-nav">
            <li className={props.match.path === '/' ? 'active' : ''}><Link to='/'>all</Link></li>
            {props.categories.map((category) =>
                <li
                    key={category.path}
                    className={props.match.path === `/${category.path}` ? 'active' : ''}>
                    <Link to={category.path}>{category.name}</Link>
                </li>
            )}
        </ul>
    )
}
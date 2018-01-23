import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const CategoryList = (props) => {

    const { categories, page } = props

    return (
        <ul className="nav navbar-nav">
            <li className={page === undefined ? 'active' : ''}><Link to='/'>all</Link></li>
            
            {categories.length > 0 ? categories.map((category) =>
                <li
                    key={category.path}
                    className={page === category.path ? 'active' : ''}>
                    <Link to={category.path}>{category.name}</Link>
                </li>
            ) : ''}
        </ul>
    )
}

function mapStateToProps({ categories }) {
    return {
        categories: categories
    }
}


export default connect(mapStateToProps)(CategoryList)
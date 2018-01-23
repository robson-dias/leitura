import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { Alert } from 'react-bootstrap'
import sortBy from 'sort-by'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'


class PostList extends Component {
    handleOrder = (e) => {
        this.props.setOrder(e.target.value)
    }

    render () {

        const { posts, order, page } = this.props

        let postsFiltered = []

        if (posts.length > 0 && page) {
            postsFiltered = posts.filter(post => post.category === page)
        } else {
            postsFiltered = posts
        }

        if (postsFiltered.length > 0)
            postsFiltered.sort(sortBy(order))

        return (
            <div>
                <FormGroup controlId="formOrder" className={'col'}>
                    <ControlLabel>Order</ControlLabel>
                    <FormControl componentClass="select" placeholder="" name="order" onChange={this.handleOrder} value={order}>
                        <option value="-voteScore">VOTE SCORE - DO MAIOR PARA O MENOR</option>
                        <option value="voteScore">VOTE SCORE - DO MENOR PARA O MAIOR</option>
                        <option value="-timestamp">DATA DE CRIAÇÃO - DO MAIOR PARA O MENOR</option>
                        <option value="timestamp">DATA DE CRIAÇÃO - DO MENOR PARA O MAIOR</option>
                    </FormControl>
                </FormGroup>

                <hr />

                {postsFiltered.length > 0 ? 
                    postsFiltered.map((post) => 
                        <Post 
                            key={post.id}
                            post={post}      
                        />
                    ) : 
                    <Alert bsStyle="warning">
                        <strong>Nenhum post encontrado!</strong> Clique em <b>New Post</b> para adicionar uma nova postagem.
                    </Alert>
                }
            </div>
        )
    }
}

function mapStateToProps({ posts }) {
    return {
        posts: posts
    }
}

export default connect(mapStateToProps)(PostList)

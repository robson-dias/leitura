import React, { Component } from 'react'
import Post from './Post'
import { Alert } from 'react-bootstrap'
import sortBy from 'sort-by'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'


class PostList extends Component {
    componentDidMount() {
        this.props.onGetPosts(this.props.category || '');
    }

    handleOrder = (e) => {
        this.props.setOrder(e.target.value)
    }

    render () {

        const {posts, order} = this.props

        posts.sort(sortBy(order))

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

                {posts.length > 0 ? 
                    posts.map((post) => 
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

export default PostList
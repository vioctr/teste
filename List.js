import React from "react";

const List = ({comments}) =>(
	<div style={{marginTop: 20}}>
	{comments.map(comment => (
		<div key={comment.uid}>
		<strong>  Nome: {comment.name} </strong>
		<p> Comentário: {comment.comment} </p>
		<em> Postado em: {comment.createdAt} </em>
		<hr />
		</div>
		))}
	{comments.length === 0 && <p> Nenhum comentario encontrado </p> }

	</div>

	);
export default List;
import React from "react";

const Form = ({
	name,
	comment,
	onChangeName,
	onChangeComment,
	onSubmit
}) => (

<form onSubmit={onSubmit}>
<div>

<label> Nome </label>
<input type="text" required value={name} onChange={onChangeName} />
</div>

<div>
<label> Comentário </label>
<textarea value={comment} required onChange={onChangeComment} />
</div>

<div>
<button> Salvar </button>
</div>

</form>
);

export default Form;
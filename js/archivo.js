async function fetchComments() {
    const commentId = document.getElementById('llamadaapi').value;
    if (!commentId) {
        alert('Por favor, ingrese un ID.');
        return;
    }

    const url = `https://jsonplaceholder.typicode.com/posts/1/comments`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }

        const comments = await response.json();
        const comment = comments.find(c => c.id == commentId);

        displayComment(comment);
    } catch (error) {
        console.error('Error:', error);
        alert('No hay datos que mostrar');
    }
}

function displayComment(comment) {
    const container = document.getElementById('commentsContainer');
    container.innerHTML = ''; 

    if (comment) {
        container.innerHTML = `
            <div class="comment">
                <h3>Comentario ID: ${comment.id}</h3>
                <p><strong>Post ID:</strong> ${comment.postId}</p>
                <p><strong>Nombre:</strong> ${comment.name}</p>
                <p><strong>Email:</strong> ${comment.email}</p>
                <p><strong>Comentario:</strong> ${comment.body}</p>
            </div>
        `;
    } else {
        container.innerHTML = '<p>No se encontró un comentario con ese id.</p>';
    }
}

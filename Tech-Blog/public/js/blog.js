const commentButtonHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment').value.trim();
    const blog_id = document.querySelector('#comment').dataset.id
  
    if (comment) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment, blog_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {window.location.reload()}

    };
    
  }
  document.querySelector("#commentForm")
  .addEventListener("submit", commentButtonHandler)
  
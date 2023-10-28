// event handler to POST new blog post
const newFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector("#comment-content").value.trim();

    const postID = document.location.pathname.split("/").at(2);

    console.log(postID);

    if (content) {
        const response = await fetch(`/api/comments/`, {
            method: "POST",
            body: JSON.stringify({
                content: content,
                post_id: postID,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert("Failed to post comment");
        }
    }
};

document
    .querySelector(".new-comment-form")
    .addEventListener("submit", newFormHandler);

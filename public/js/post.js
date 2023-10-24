// event handler to POST new blog post
const newFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector("#comment-content").value.trim();

    if (content) {
        const response = await fetch(`/api/comments`, {
            method: "POST",
            body: JSON.stringify({ content }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            document.location.replace("/singlepost");
        } else {
            alert("Failed to post comment");
        }
    }
};


document
    .querySelector(".new-comment-form")
    .addEventListener("submit", newFormHandler);
    const userContentOut = document.querySelectorAll(".userContentOut");

    const commentPublishOut = function (target) {
        const publishOutWrite = target.querySelector(".publishOutWrite");
        const writing = publishOutWrite.value;

        const divComment = document.createElement("div");
        divComment.className = "comment";

        const div = document.createElement("div");

        const divCommentName = document.createElement("div");
        divCommentName.className = "commentName";
        divCommentName.innerHTML = "Elcfin";

        const divCommentContent = document.createElement("div");
        divCommentContent.className = "commentContent";
        divCommentContent.innerHTML = writing;

        div.appendChild(divCommentName);
        div.appendChild(divCommentContent);

        const divCommentReply = document.createElement("div");
        divCommentReply.className = "commentReply";
        divCommentReply.innerHTML = "回复";

        divComment.appendChild(div);
        divComment.appendChild(divCommentReply);

        target.querySelector(".commentsTotal").appendChild(divComment);
        publishOutWrite.value = "";
    }

    for (let i = 0; i < userContentOut.length; i++) {
        userContentOut[i].addEventListener("click",
            function (event) {
                if (event.target.className === "publishOut") {
                    commentPublishOut(this);
                }
            }, false);

        userContentOut[i].addEventListener("keyup",
            function (event) {
                if (event.code === "Enter") {
                    commentPublishOut(this);
                }
            }, false);
    }

    export default commentPublishOut;
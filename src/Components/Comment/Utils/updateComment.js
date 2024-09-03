export const updateComments = (comments, targetId, newcomment) => {
  const commentsCopy = JSON.parse(JSON.stringify(comments));
  for (const comment of commentsCopy) {
    if (comment.id === targetId) {
      comment.subComments.push({
        id: new Date().getTime(),
        comment: newcomment,
        subComments: [],
      });
    }
  }

  return commentsCopy
};
